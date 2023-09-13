---
title: "【工作随记】axios中config自定义字段失效问题"
description: "最新版本axios限制了键，对键值做了白名单处理。"
publishDate: "2022/06/27"
tags: ["javascript", "axios", "vue"]
---

> 最新版本axios限制了键，对键值做了白名单处理。

**解决思路：**
1. 修改源码中的内容，添加一个键来报错额外属性。   
2. 使用老版本，0.18.0

```javascript
/**
 * 在最新版本的axios对这config中的键做了白名单处理
 * 添加filterRequestConfig，让config中可以接收到自定义的键
 */
window.customConfig = {}
let whiteKey = ['hideMessage', 'allowSync'] // 自定义config的键的白名单

function filterRequestConfig (conf) {
  let obj = {}
  let value = customConfig[`${conf.method}_${conf.url}`]
  for (let index = 0; index < whiteKey.length; index++) {
    let el = whiteKey[index]
    let configValue = value[el]
    if (configValue) obj[el] = configValue
  }
  return obj
}
// 修改原型方法
const realRequest = axios.Axios.prototype.request
axios.Axios.prototype.request = function (config) {
  customConfig[`${config.method}_${config.url}`] = config
  return realRequest.call(this, config)
}

// 拦截器中覆盖config
service.interceptors.request.use(
  config => {
    config = { ...config, ...filterRequestConfig(config) }
    // some code...
  },
  error => {
    return Promise.reject(error)
  }
)
```
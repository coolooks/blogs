---
title: "关于Vue3的一些script setup语法"
description: "setup script就是vue3新出的一个语法糖，在书写script标签的时候在其后面加上一个setup修饰。"
publishDate: "2022/07/05"
tags: ["vue", "vue3"]
---

> setup script就是vue3新出的一个语法糖，使用方法就是在书写script标签的时候在其后面加上一个setup修饰。

## 自动注册子组件

原vue3语法在引入组件后，需要在components中注册对应的组件才可使用。  
新的script setup无需注册，直接使用。

```html
<template>
  <div>
    <h2>setup script</h2>
    <Child />
  </div>
</template>

<script setup>
import Child from './Child.vue'
</script>
```

## 属性和方法无需返回

composition API写起来有点繁琐的原因在于需要手动返回模板需要使用的属性和方法。  
而在script setup中可以省略这一步。

## 支持props、emit和context

**引用：**

```js
import { useContext, defineProps, defineEmit } from 'vue'
const { attrs、emit、props、slots、expose } = useContext()
```

**在3.2版本之后：**
- useContext将被废弃
- defineEmit 更改为 defineEmits
- 新增useAttrs
- 新增useSlots
- 新增defineExpose

## useAttrs

组件插槽

```js
import { useSlots } from 'vue'
const slots = useSlots()
const dom = slots.default ? slots.default() : ''
```

## defineProps

用来接收父组件传来的值props。

```js
import { defineProps } from 'vue'
const props = defineProps({
  msg: String,
  name: String,
  age: Number
})
```

## defineExpose

`script setup`中，无法直接在父组件中通过子组件的ref实例来访问子组件的数据和方法，需要向外暴露你想访问的内容：

```js
import { defineExpose } from 'vue'
defineExpose({
  a,
  b,
  c
})
```

## defineEmits

声明触发的事件表

```js
import { defineEmits } from 'vue'
const emit = defineEmits(['submit'])
emit('submit', 'hello world')
```
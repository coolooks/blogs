---
title: "常用SCSS语法"
description: "整理一下经常用的scss语法，方便记忆。"
publishDate: "2023/12/20"
tags: ["css"]
---

## each 循环

```scss
@mixin overflow() {
  @each $row in 1, 2, 3 {
    .overflow-#{$row}-row{
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: #{$row};
    }
  }
}
@include overflow();

@mixin fontsize() {
  @each $size in 0, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42 {
    .f#{$size} {
      font-size: #{$size}px;
    }
  }
}
@include fontsize();

@mixin justify() {
  $list: (start, flex-start), (end, flex-end), (center, center), (around, space-around), (between, space-between);
  @each $key, $value in $list {
    .justify-#{$key} {
      justify-content: $value;
    }
  }
}
@include justify();
@mixin align() {
  $list: (start, flex-start), (end, flex-end), (center, center);
  @each $key, $value in $list {
    .align-#{$key} {
      align-items: $value;
    }
  }
}
@include align();
```

## slice 截取

```scss
@use "sass:string";

@mixin tpl($type, $size) {
  $scope: string.slice($type, 0, 1);

  .#{$scope}#{$size} {
    #{$type}: #{$size}px;
  }

  @each $pos in top, bottom, left, right {
    .#{$scope}#{string.slice($pos, 0, 1)}#{$size} {
      #{$type}-#{$pos}: #{$size}px;
    }
  }
}

@each $num in 0, 5, 10, 15, 20, 25, 30 {
  @include tpl('margin', $num);
  @include tpl('padding', $num);
}
// mt30 => margin-top: 30px
```
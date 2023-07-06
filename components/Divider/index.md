---
category: Components
title: Divider
subtitle: 分割线
demo:
  cols: 2
group:
  title: 其他
  order: 1
---

# Divider 分割线

区隔内容的分割线。

## 基础用法

对不同段落的文本进行分割,

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>

## 设置文案

`contentPosition` 自定义分隔线内容的位置

<!-- prettier-ignore -->
<code src="./demo/basicText.tsx"></code>

## 设置分割线样式

`borderStyle` 设置分隔符样式

<!-- prettier-ignore -->
<code src="./demo/dividerStyleDemo.tsx"></code>

## 设置分割线方向

`direction` 设置分隔符方向

<!-- prettier-ignore -->
<code src="./demo/verticalDemo.tsx"></code>

## API

| 参数            | 说明                   | 类型                                                                              | 默认值       | 版本 |
| --------------- | ---------------------- | --------------------------------------------------------------------------------- | ------------ | ---- |
| direction       | 设置分割线方向         | `'horizontal' \| 'vertical'`                                                      | `horizontal` |      |
| borderStyle     | 设置分隔符样式         | [css\style-border](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) | `solid`      |      |
| contentPosition | 自定义分隔线内容的位置 | `'left' \| 'right' \| 'center'`                                                   | `center`     |      |

# IE CSS bugs

这里整理一些常见的 IE CSS bugs。有错误或补充的地方，欢迎[反馈](https://github.com/yanxyz/ie-css-bugs)。

下面列表按 IE 版本从高到低排列。没有指明版本号的，表示到目前的 IE 版本都有这种问题。

<!-- toc -->

### IE 下拉框选项的光标被改变 {#ie-select-cursor}

IE 下打开 `<select>` 时，位于其它元素之上的选项 `<option>`，它的光标被改成下面元素的。

[演示](demo/ie-select-cursor/)



### IE 自定义光标相对路径错误 {#ie-custom-cursor}

在 CSS 文件中指定自定义光标的路径，相对路径在 IE 下是相对于文档的路径，而不是 CSS 文件的路径。

[演示](demo/ie-custom-cursor/)

解决方案：在 CSS 中指定绝对路径。若不方便使用绝对路径，则只能在页面指定。



### IE8+ 下 `<th>` 不能继承 text-align {#ie-th-text-align}

[演示](demo/ie-th-text-align/)

解决方案：`th {text-align: inherit}`



### IE6-10 下 `<img>` 在 `<a>` 内时有边框 {#ie-a-img}

[演示](demo/ie-a-img/)

解决方案：`img {border: none}`




### IE11 输入框不能改变光标 {#ie11-input-cursor}

我现在用的 IE 版本是 11.0.17，已修复。



### IE10 a:active 时有灰色背景 {#ie10-link-grey-background}

解决方案: `a:active {background-color: transparent;}`：



<!-- #IE8 -->


### IE8 下由 `:focus` 与其它选择符组成的复合选择符无效 {#ie8-focus-selector}

比如 `:focus span`，在 IE11 的 IE8 模式下有效，在 IE8 下无效。至于 IE6-7 本来就不支持 `:focus`。

[演示](demo/ie8-focus-selector/)



### IE8 下 `:first-line` 规则内 !important 被忽略 {#ie8-first-line-important}

[演示](demo/ie8-first-line-important/)



<!-- #IE7 -->


### IE7 下浮动元素的 margin-bottom 被忽略 {#ie7-float-margin-bottom}

[演示](demo/ie7-float-margin-bottom/)

解决方案: 可考虑用父元素的 `padding-bottom`



### IE6-7 下元素 `float:right` 时换行 {#ie6-float-right}

非浮动元素之后的元素 `float:right` 时换行。

[演示](demo/ie6-float-right/)

解决方案：或者使用定位，或者将浮动元素放到前面，[演示](demo/ie6-float-right/1a.html)。



### IE6-7 下定位元素层叠错误 {#ie6-z-index}

定位元素不指定 z-index 时它的默认值是 auto, 但是 IE6-7 下表现为 z-index: 0， 即产生新的层叠上下文，从而让层叠错误。

[演示](demo/ie6-z-index/)

解决方案：给相关元素指定 z-index。

注意规划网页上的 z-index，不要使用太大的值。



### IE6-7 元素 `position: relative` 溢出 {#ie6-overflow-bug}

尽管父元素 `overflow: auto|scroll|hidden`, 子元素 `position: relative` 时仍然溢出。

[演示](demo/ie6-overflow-bug/)

解决方案：父元素 `position: relative`，[演示](demo/ie6-overflow-bug/1a.html)



### IE6-7 下 `<li>` 不浮动而其子元素浮动，则列表呈阶梯状排列 {#ie6-staircase}

[演示](demo/ie6-staircase/)

解决方案：

- `<li>` 浮动, [演示](demo/ie6-staircase/1a.html)
- `li {display: inline}` [演示](demo/ie6-staircase/1b.html)



### IE6-7 下列表(ul, ol)指定宽度后列表项标记消失 {#ie6-list-width}

[演示](demo/ie6-list-width/)

无解决方案，不过一般都是自定义标记。



### IE6-7 下按钮两侧有莫名空白 {#ie6-button-padding}

按钮（`input:submit`, `input:reset`, `input:button`, `<button>`）随着文字的增多（或者水平 padding 增大)导致按钮两侧的空白越来越大，这实际上不是真实的 padding。

[演示](demo/ie6-button-padding/)

解决方案： 按钮 `overflow:visible`

另外随着宽度的加大，按钮圆角出现锯齿。



### IE6-7 下 `<input> <textarea>` margin 双倍 {#ie6-input-double-margin}

当 `<input> <textarea>` 父元素有 hasLayout 与 margin 时，它们会有双倍 margin。

[演示](demo/ie6-input-double-margin/)

解决方案，使用负 margin




### IE6-7 下 `<iframe> overflow-y: scroll` 时出现与滚动条等宽的空白 {#ie6-iframe-overflow-y}

[演示](demo/ie6-iframe-overflow-y/)

解决方案，只能去掉 `overflow-y: scroll`



### IE6-7 下 1px dotted border 表现同 `dashed` {#ie6-1px-border}

[演示](demo/ie6-1px-border/)

实际上各浏览器 border-style 有些差异。



<!-- #IE6 -->


### IE6 下浮动元素水平 margin 双倍 {#ie6-double-margin}

元素浮动时，水平 margin 双倍，竖直 margin 不会。

[演示](demo/ie6-double-margin/)

修复方案：元素 `display: inline`



### IE6 下非浮动块内的文字与相邻的浮动块之间有 3px 的间隙 {#ie6-3px-jog}

[演示](demo/ie6-3px-jog/)

修复方案：

- 让浮动块 margin -3px
- 让非浮动块浮动，[演示](demo/ie6-3px-jog/1a.html)



### IE6 下元素会扩展它的高宽以包含它的内容 {#ie6-expanding}

IE6 这种表现类似于其它浏览器的 min-width/height 属性，可以利用这个特点来实现 min-width/height。但是有时会破坏布局，需要用 `overflow: hidden` 控制。

[演示](demo/ie6-expanding/)



### IE6 下列表项包含块级子元素时下方出现空白 {#ie6-vertical-spacing}

[演示](demo/ie6-vertical-spacing/)

解决方案比较多。比如：

- 让子元素 hasLayout [演示](demo/ie6-vertical-spacing/1a.html)
- `li {display: inline}` [演示](demo/ie6-vertical-spacing/1b.html)



### IE6 下绝对定位 1px 误差 {#ie6-absolute-1px}

当绝对定位的包含块的宽高为奇数时，它的 right bottom 会出现 1px 误差。

[演示](demo/ie6-absolute-1px/)

解决方案，只能让包含块宽高为偶数。



### IE6 下 文本与 `<img>` 等在一起时不能用 line-height 垂直居中 {#ie6-img-line-height}

实现单行垂直居中，常用的办法是让容器 height 与 line-height 相等。但是容器内有 `<img>` `<input>` `<textarea>` `<select>` `<object>` 等，这个办法失效。

[演示](demo/ie6-img-line-height/)

解决方案，对于 `<img>` 可以让后面的文本 `span {display: inline-block}`。


### IE6 认为元素至少一个字符（`font-size`）高，即使是空元素 {#ie6-small-height}

[演示](demo/ie6-small-height/)

解决方案： 元素 `overflow: hidden`，[演示](demo/ie6-small-height/1a.html)



### IE6 !important 失效 {#ie6-important}

在同一个声明块内，同一个属性，无 !important 的值优先于前面有 !important 的值。

[演示](demo/ie6-important/)



### IE6 multiple class bug {#ie6-multiple-class}

比如 `.one.two`，表示同时有 class 值 one, two 的元素，IE6 只识别最后一个值 two，即相当于 `.two`。

[演示](demo/ie6-multiple-class/)


### IE6 id-class bug {#ie6-id-class}

比如：

```css
#id.class1 {}
#id.class2 {}
#id.class3 {}
```

只有第一个 #id.class1 有效，后面的忽略。

[演示](demo/ie6-id-class/)


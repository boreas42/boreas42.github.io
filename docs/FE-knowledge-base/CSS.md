### 什么是BFC

BFC是相当于一种元素属性， Block Formatting Context 块级格式化上下文。

#### 怎么触发， 制造BFC?

文档的根元素（`<html>`）。

浮动元素（即 float 值不为 none 的元素）。

绝对定位元素（position 值为 absolute 或 fixed 的元素）。

行内块元素（display 值为 inline-block 的元素）。

表格单元格（display 值为 table-cell，HTML 表格单元格默认值）。

表格标题（display 值为 table-caption，HTML 表格标题默认值）。

匿名表格单元格元素（display 值为 table（HTML 表格默认值）、table-row（表格行默认值）、table-row-group（表格体默认值）、table-header-group（表格头部默认值）、table-footer-group（表格尾部默认值）或 inline-table）。

overflow 值不为 visible 或 clip 的块级元素。

display 值为 flow-root 的元素。

contain 值为 layout、content 或 paint 的元素。

弹性元素（display 值为 flex 或 inline-flex 元素的直接子元素），如果它们本身既不是弹性、网格也不是表格容器。

网格元素（display 值为 grid 或 inline-grid 元素的直接子元素），如果它们本身既不是弹性、网格也不是表格容器。

多列容器（column-count 或 column-width (en-US) 值不为 auto，且含有 column-count: 1 的元素）。

column-span 值为 all 的元素始终会创建一个新的格式化上下文，即使该元素没有包裹在一个多列容器中（规范变更、Chrome bug）

**重点 display: flow-root;**

#### BFC有什么作用？
清除浮动
阻止外边距重叠


### 双飞翼布局

```
<!DOCTYPE html>
<html>
  <head>
    <title>双飞翼布局</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      .header,
      .footer {
        height: 50px;
        width: 100%;
        background: #666;
        clear: both;
      }
      .main {
        width: 100%;
        float: left;
        background: #d6d6d6;
      }
      .left {
        width: 150px;
        background: #e79f6d;
        float: left;
        margin-left: -100%; /*相对于包含快的宽度*/
      }
      .right {
        float: left;
        width: 190px;
        background: #77bbdd;
        margin-left: -190px;
      }
      .submain{
        margin-left: 150px;
        margin-right: 190px;
      }
    </style>
  </head>
  <body>
    <div class="header">Header</div>
    <div class="bd">
      <div class="main">
        <div class="submain">Main 中间自适应</div>
      </div>
      <div class="left">Left</div>
      <div class="right">Right</div>
    </div>
    <div class="footer">Footer</div>
  </body>
</html>

```

双飞翼布局

### 圣杯布局

```
<!DOCTYPE html>
<html>
  <head>
    <title>圣杯布局</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      .header,
      .footer {
        height: 50px;
        width: 100%;
        background: #666;
        clear: both;
      }
      .bd {
        padding-left: 150px;
        padding-right: 190px;
      }
      .main {
        width: 100%;
        float: left;
        background: #d6d6d6;
      }
      .left {
        width: 150px;
        background: #e79f6d;
        float: left;
        margin-left: -100%; /*相对于包含快的宽度*/
        position: relative;
        left: -150px;
      }
      .right {
        float: left;
        width: 190px;
        background: #77bbdd;
        margin-left: -190px;
        position: relative;
        right: -190px;
      }
    </style>
  </head>
  <body>
    <div class="header">Header</div>
    <div class="bd">
      <div class="main">Main</div>
      <div class="left">Left</div>
      <div class="right">Right</div>
    </div>
    <div class="footer">Footer</div>
  </body>
</html>

```

### 两边自适应布局

margin-left　-100%;


### 垂直居中的几种方式，你常用的什么方式



### 说说弹性布局

弹性布局是 

#### flex: 1 是什么意思

flex: 1 是 flex-grow =1 flex- flex 的简写


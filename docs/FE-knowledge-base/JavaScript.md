# 

## 数据类型

基础数据类型 Number String Null Undefined  Boolean Symbol Bigint 

引用数据类型 Object 

### NaN 是怎么来的
摘选MDN文档
- 失败的数字转换（例如，显式转换，如 parseInt("blabla")、Number(undefined)，或隐式转换，如 Math.abs(undefined)）
- 计算结果不是实数的数学运算（例如，Math.sqrt(-1)）
- 不定式（例如，0 * Infinity、1 ** Infinity、Infinity / Infinity、Infinity - Infinity）
- 一个操作数被强制转换为 NaN 的方法或表达式（例如，7 ** NaN、7 * "blabla"）——这意味着 NaN 具有传染性
- 将无效值表示为数字的其他情况（例如，无效的 Date new Date("blabla").getTime()、"".charCodeAt(1)）

NaN !== NaN


### 为什么0.1 + 0.2 !== 0.3 
原因：十进制转成成二进制造成的精度丢失的问题。

解决方法：先转换成整数，然后转成成小数　　(0.1* 10 + 0.2*10) / 10 

#### 类型判断方法有哪些

let a = [1,2,3] typeof a  a instanceof Array   Object.prototype.toString.call(a)   a.constructor == Array
 
typeof 不能判断null, 不能判断Object 
 
instanceof 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上, 不能判断基础数据对象，因为基础数据对象没有实例。

为什么要用call(), 因为一些对象会重写toString 方法。

constructor 不能判断 undefined 和 null   d.constructor == Number


## this

执行时确定，

apply

call

bind

## 数组

[数组常用方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from )

join 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// Expected output: "Fire,Air,Water"
console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

Array.slice

Array.splice



### 对象

 [对象常用方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)

Object.assign()


#### 数组转字符串
Array.join()


#### 字符串怎么转成对象
JSON.parse()

### for循环相关问题有什么？

for of value  for in  key

for in 


### 闭包

#### 什么是闭包

闭包是一个有引用外部变量的的一个内部函数。

#### 闭包的好处
闭包是一种编程技术，它允许函数访问其定义外部的变量和参数。闭包可以带来以下好处：

保护变量：闭包可以保护变量不被其他代码修改，从而确保代码的稳定性和可靠性。

增强函数功能：闭包可以让函数具有更多的功能，比如可以在函数内部记录状态或者保存数据。

减少代码量：闭包可以减少代码量，因为它可以避免定义全局变量或者使用类等复杂的结构。

但是闭包也有一些坏处：

内存泄漏：闭包会持有外部变量的引用，如果不正确地使用闭包，可能会导致内存泄漏。

可读性降低：如果使用不当，闭包可能会让代码变得难以理解和维护。

性能问题：闭包可能会导致性能问题，因为它需要额外的内存和计算资源来维护外部变量的引用。

#### 闭包的缺点

### 作用域

块级作用域： let const 

### 原型和原型链

Object

### V8引擎的垃圾回收？  没被问过，但是面经里面出现几次了。

新分区 
老分区  超过25% 直接回收

如何优化代码，避免全局变量和 定时器回收。 方法手动回收?
弱引用？ 没用过

### ES6

#### 块级作用域 
let const， 声明的变量和常量仅限在定义它的块中内能读取到。

#### ES6中... 叫什么

扩展运算符，  能收集和


### Map、Set、WeakMap、WeakSet

#### 箭头函数和普通函数的区别？

箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target等，也不能用作构造函数。
箭头函数表达式更适用于那些本来需要匿名函数的地方。  --MDN


箭头函数的this的指向问题(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)

https://juejin.cn/post/6844903746984476686#heading-8 好好再看一下。

### promise

#### 手撕包菜 不是 手撕源码

#### promise.then的实现 .all 的实现

#### 


#### 关于异步的几种方法？　

Promise 











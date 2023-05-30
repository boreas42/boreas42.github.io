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

#### JSON和数组之间的转换


#### 数组转字符串



#### 字符串怎么转成对象
JSON.parse()

### for循环相关问题有什么？

for of value  for in  key

for in 


### 闭包

#### 什么是闭包

#### 闭包的好处

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

#### let const
块级作用域， 只在 {} 内能读取到

#### ES6中... 叫什么

扩展运算符， 有什么作用， 能收集和


### Map、Set、WeakMap、WeakSet

#### 剪头函数和普通函数的区别？剪头函数的this的指向问题

### promise

#### 手撕包菜 不是 手撕源码

#### promise.then的实现 .all 的实现

#### 


#### 关于异步的几种方法？　

Promise 











## 经典考题

#### 为什么不推荐v-for和v-if一起用？

因为会先执行v-for的内容，for循环v-if，比较耗费性能大量的判断会极大的降低项目质量。，所以不推荐v-for和v-if一起使用

#### computed 和 watch 的区别？

watch 是个监听器，需要数据更换才能执行？  watch的 immed？ 能计算第一次啊
computed 开始就能执行，是根据多个数据的值的来计算出来所需的值。


### 组件通信的几种方式

#### 父组件传值给子组件

#### 子组件传值给父组件

#### 兄弟组件之间的传值

$ref 直接拿值



####

## 路由传参

this.$route 还是 this.$router

.push ({ path: '', params: ''})




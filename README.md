# vue-simple-ui

A simple Vue-ui

### Install
$ npm install vue-simple-ui --save

### Usage
1. ES6
```HTML
<ui-switch 
  v-model = "value2"
  active-color = "#13ce66"
  inactive-color = "#ff4949"
  @change = "change"
/>
```
```JS
import {uiSwitch} from 'vue-simple-ui'
export default {
  name : "App",
  components:{
    uiSwitch
  },
  data(){
    return{
      value2:true
    }
  },
  methods:{
    change(){
      console.log("chang事件触发")
    }
  }
}
```

2. 直接用 &lt;script&gt; 引入

```
<script src="node_modules/vue-simple-ui/dist/simpleUI.js"></script>
<script>
//全局注册
Vue.component('ul-switch',simpleUI.uiSwitch)
//或局部注册
const app = new Vue({
      el:'#app',
      components:{
        'ul-switch':simpleUI.uiSwitch
      }
})
</script>
```
### 组件列表

#### 1. Switch
绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。
```JS
<ui-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949">
</ui-switch>
<script>
  export default {
    data() {
      return {        
        value2: true
      }
    }
  };
</script>
```
**Attributes**
|参数|说明|类型|默认值|
|-|-|-|-|
|inactive-color|关闭时的背景色|string|#dcdfe6|
|active-color|打开时的背景色|string|#dcdfe6|
**Event**
|事件名称|说明|回调参数|
|-|-|-|
|change|switch状态发生变化时的回调函数||


#### 2. Tree

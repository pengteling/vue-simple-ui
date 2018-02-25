<template>
  <div>
    <ui-switch 
      v-model = "value2"
      active-color = "#13ce66"
      inactive-color = "#ff4949"
      @change = "change"
    />
    <ui-tree
      v-model = "data"    
    />      
    
  </div>
</template>
<script>
import {uiSwitch,uiTree} from './ui.js'
//import {uiSwitch,uiTree} from './../dist/simpleUI.js'
//import uiSwitch from './components/Switch.vue'
export default {
  name : "App",
  components:{
    uiSwitch,
    uiTree
  },
  data(){
    return{
      value2:true,
      data:{
        label: '一级',
        children: [
          {
            label:'二级1',
            children:{
              label:'三级0'
            }
          },
          {
            label:'二级2',
            children:[
              {
                label:'三级1'
              },
              {
                label:'三级2'
              }
            ]
          }
        ]
      }
    }
  },
  methods:{
    change(){
      console.log("chang事件触发")
    }
  }
}
</script>
<style lang="scss">

</style>



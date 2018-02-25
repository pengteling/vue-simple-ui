<template>
  <div>
    <ui-switch 
      v-model = "value2"
      active-color = "#13ce66"
      inactive-color = "#ff4949"
      @change = "change"
    />
  </div>
</template>
<script>
// import {uiSwitch} from './ui.js'
import {uiSwitch} from './../dist/simpleUI.js'
//import uiSwitch from './components/Switch.vue'
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
</script>
<style lang="scss">

</style>



export default {
  name: "uiTree",
  props: {    
    value: {
      type: Object
    }
  },
  computed:{
    
  },
  render(){    
    return (
      <div class="tree">
        {this.value.label}
        {this.value.childern ? <tree value={this.value.childern}></tree> :''}
      </div>
    )    
  },
  mounted(){
    //tree(this.value)
  }
}


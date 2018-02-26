export default {
  name: "uiTree",
  data(){
    return{
      dragItem:[],
      isopen:false
    }
  },
  props: {    
    value: {
      type: Array
    }
  },
  computed:{
    
  },
  render(){    
    return (
      <li>
        {this.value.map((item,i)=>{
          return (            
            <li> 
                <span onClick={this.collapse} >{item.label}</span>
                {item.children && this.isopen? 
                <ul>
                  <ui-tree value={item.children}></ui-tree>
                </ul>
                  :
                  ''
                }
              </li>         
          )
        })}        
      </li>
    )    
  },
  mounted(){
    //tree(this.value)
  },
  methods:{
    collapse(e){
      e.stopPropagation()
      this.isopen = !this.isopen
    }
    // dragstart(item,e){      
    //   e.stopPropagation()
    //   console.log(item)
    //   this.dragItem = item
    // },
    // dragover(e){
    //   e.stopPropagation()
    //   e.preventDefault()
    // },
    // drop(item,e){
    //   e.stopPropagation()
    //   e.preventDefault()
    //   //e.stopPropagation()
    //   console.log(item)
    //   item.children = this.dragItem
    //   this.$emit('input',this.value)
    // }
  }
}


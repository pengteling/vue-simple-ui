export default {
  name: "uiTree",
  data(){
    return{
      dragItem:[]
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
      <ul class="tree">
        {this.value.map((item,i)=>{
          return (            
              <li>
                <span>{item.label}</span>
                {item.children? 
                  <ui-tree value={item.children}></ui-tree>
                  :
                  ''
                }
              </li>         
          )
        })}        
      </ul>
    )    
  },
  mounted(){
    //tree(this.value)
  },
  methods:{
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


import { EventBus } from './EventBus.js'
export default {
  name: "treemenu",
  data(){
    return{      
      isopen:false   ,
      isupdate:true
    }
  },
  props: {    
    value: {
      type: Object
    },
    depth:{
      type: Number
    }
  },
  computed:{
    isFolder(){
      return this.value.children && this.value.children.length > 0 ? true : false
    },
    indent(){
      return `padding-left:  ${20 * this.depth}px` 
    }
    
  }, 
  // watch:{
  //   'value'(){
  //     console.log("value发生变化 ")
  //     console.log(this.value.children && this.value.children.length > 0 ? true : false)
  //     this.collapse2()
  //   }
  // },
  updated(){
    console.log('treemenu update')
  },
  render(){    
    return (
      <div class="tree" style={this.indent} onClick={this.collapse} >
        <i class={(this.isFolder?'sj':'')+' ' + (this.isopen?'open':'')}></i>
        <span
         draggable='true'
         onDragstart={this.dragstart.bind(this,this.value)}
         onDragover={this.dragover} 
         onDrop={this.drop.bind(this,this.value)}>{this.value.label}
        </span>
        {
          this.value.children && this.isopen ? this.value.children.map((item,i)=>{
            return (                                    
              <treemenu value={item} depth={this.depth+1} key={(this.depth + 1) +''+item.label}></treemenu>                  
            )
          })
          :
          ''
        }        
      </div>
    )    
  },
  mounted(){
    //tree(this.value)
    // this.$on('dragstart',(item)=>{
    //   console.log(item)
    // })
    EventBus.$on('move',()=>{
      console.log('捕获move')
      this.isupdate = !this.isupdate
    })
  },
  methods:{
    collapse(e){
      e.stopPropagation()
      this.isopen = !this.isopen           
    },
    collapse2(){
      this.isopen = !this.isopen 
    },
    dragstart(item,e){      
      e.stopPropagation()      
      EventBus.$emit('dragstartfromtree',item)      
    },
    dragover(e){
      //e.stopPropagation()
      e.preventDefault()
    },
    drop(item,e){
      e.stopPropagation()
      e.preventDefault()
      //e.stopPropagation()
      //console.log(item)
      //item.children = this.dragItem
      EventBus.$emit('drop',item)
    }
  }
}


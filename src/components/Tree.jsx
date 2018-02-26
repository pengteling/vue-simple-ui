import './tree.scss'
import treemenu from './Treemenu.jsx'
import { EventBus } from './EventBus.js'
export default {
  name: "uiTree",
  data(){
    return{            
      depth:0,
      dragItem:null,
      dragTo:null,
      data:this.value
    }
  },
  components:{
    treemenu
  },
  props: {    
    value: {
      type: Array
    }
  },  
  render(){    
    return (
      <div class="treeroot">       
        {this.data.map((item,i)=>{
          return (            
            <treemenu value={item} depth={this.depth+1}></treemenu>
          )
        })}        
      </div>
    )    
  },
  mounted(){
    //tree(this.value)
    EventBus.$on('dragstartfromtree',(item)=>{
      this.dragItem = item
    })
    EventBus.$on('drop',(item)=>{
      this.dragTo = item
      //this.data = {...this.data}
      //this.data=[]
      //console.log(this.data.indexOf(this.dragItem))
      //this.dragTo.childern = this.dragItem
      let data = this.data
      let from = this.dragItem
      let to = this.dragTo

      let getPosition = (data,s) => {
        data.map(item=>{
          if(item===s){
            //console.log('ok')
            //console.log(data)
            /* 删除数组 */
            data.splice(data.indexOf(item),1)
            return
          }
          if(item.children){
            getPosition(item.children,s)
          }
        })
      }
      getPosition(data,from)
      
      let getPosition2 = (data,s) => {
        data.map(item=>{
          if(item===s){
            //console.log('ok')
            //console.log(data)
            /* 增加数组 */
            if(item.children){
              item.children.push(from)
            }else{
              //item.children=[]
              //   Object.defineProperty(item, "children", {
              //     value:[],
              //     writable:true,
              //     enumerable:true,
              //     configuration:true
              // });
              item.children =[from]
              // item.children.splice(0,0,from)
              //this.$set(this.data,'b',2)              
              //this.dragItem = null
              //this.dragTo = null
            }
            return
          }
          if(item.children){
            getPosition2(item.children,s)
          }
        })
      }
      
      getPosition2(data,to)
        // for(let v of data){
        //   //console.log(v)
        //   if(v===s){
        //     console.log(v)
        //     console.log(s)
        //     v=null
        //     return
        //   }
        //   if(v.children)
        //   getPosition(v.children,s)
          
        // }
     
      


      this.$emit('input',this.data)
    })    
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


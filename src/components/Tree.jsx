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
      <div class="treeroot" onDrop={this.drop} onDragover={this.dragover}>       
        {this.data.map((item,i)=>{
          return (            
            <treemenu value={item} depth={this.depth+1}></treemenu>
          )
        })}        
      </div>
    )    
  },
  updated(){
    console.log('tree update')
  },
  mounted(){
    //tree(this.value)
    //console.log(this.data === this.value)
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
      /* 检查  不能把祖先节点拖动到后代节点中*/
      let isCanDrag = true
      let searchFromTo = (data,s) =>{
        data.map(item=>{
          if(item === s){
            isCanDrag = false
            console.log("不能把祖先节点拖动到后代节点中")
            return false
          }
          if(item.children && isCanDrag){
            searchFromTo(item.children,s)
          }
        })
        
      }
      if(from.children){
        searchFromTo(from.children,to)
      }
      

      if(!isCanDrag){
        return false 
      }

      /* 遍历找到被拖动的节点 并将其删除 */
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
      /* 遍历找到拖放的目标节点 并在其children下新增被拖放的节点*/
      let getPosition2 = (data,s) => {
        data.map(item=>{
          if(item===s){
            //console.log('ok')
            //console.log(data)
            /* 增加数组 */
            if(item.children){
              item.children.push(from)
              // EventBus.$emit('move')  
            }else{
              //item.children=[]
              //   Object.defineProperty(item, "children", {
              //     value:[],
              //     writable:true,
              //     enumerable:true,
              //     configuration:true
              // });
              // item.children =[from]
              this.$set(item,'children',[from])
              //item = Object.assign({},item,{children:from})
              // this.data = 
              //console.log(this.data)
              //console.log(data)
              //this.data.splice(0,0)
              //console.log('move')
              //EventBus.$emit('move')              
              
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
    },
    drop(e){
      e.stopPropagation()
      e.preventDefault()
      console.log("drop")
      // 拖动某个节点到空白区域 则将其移动到根节点
      let data = this.data
      let from = this.dragItem
      /* 遍历找到被拖动的节点 并将其删除 */
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

      // 根节点增加拖动节点
      console.log(data,from)
      
      data.push(from)
        
      this.$emit('input',this.data)
    },
    dragover(e){
      e.stopPropagation()
      e.preventDefault()
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


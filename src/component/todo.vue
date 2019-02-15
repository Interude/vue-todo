<template>
   <section class="real-app">
      
       <input
       class="add_input"
       type="text"
       placeholder="接下来做什么?"
       @keyup.enter="active"
       autofocus="autofocus"
       v-model="data">
        <item :todo="todo"
        v-for="todo in todos"
        :key="todo.id"
        @del="deleteTodo"
        />
       <tables 
       :filter="filter" 
       :todos="todos" 
       @actives="activeItem"
       ></tables>
   </section>

   
</template>


<script>
import tables from './tables.vue'
import item from './item.vue'
let id = 0;
export default {
    components:{
        tables,
        item
    },
    data(){
    return{
        data:'',
       todos:[

       ],
        filter:'all'
    }
    },
    methods:{
        activeItem(state){
                this.filter = state
        },
        active(){
           if(!!this.data){
               // alert(this.data)
            this.todos.unshift({
                id:id++,
                content:this.data,
                completed:false
            })
            this.data = ''
          }
        },
        deleteTodo(id){
            this.todos.splice(this.todos.findIndex(todo =>todo.id == id),1)
        }
    }
}
</script>
<style lang="scss" scoped>
.real-app{
    width: 600px;
    // background: red;
    margin: 0 auto;
    box-shadow :0 0 5px  #666;
    .add_input{
        position: relative;
        width:100%;
        border: 0;
        outline: none;
        padding: 6px;
        color:inherit;
        border: 1px solid #999;
        font-size: 24px;
    }
}
</style>



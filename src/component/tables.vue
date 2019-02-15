<template>
    <div class="helper">
        <span class="left">{{unFinishedTodoLength}}</span>
     
        <span class="tabs">

            <span v-for="state in states" 
            :key="state"
            :class="[filter===state? 'active':'']"
            @click="toggleFilter(state)">
                 {{state}}
            </span>  
            </span>

        <span class="clear" @click="clearAllCompleted">clear completed</span>    
            
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            states:['all','active','completed']
        }
    },
    methods:{
        toggleFilter(state){
           this.$emit('actives',state)
        },
        clearAllCompleted(){

        }
    },
    computed:{
        unFinishedTodoLength(){
            return this.todos.filter(todo=>!todo.completed).length==0?'':`主人有${this.todos.filter(todo=>!todo.completed).length}条待办事项`
        }
    },
    props:{
        filter:{
            type:String,
            required:true
        },
        todos:{
            type:Array,
            required:true
        }
    },
    mounted(){
        console.info(`this is ${this.todos}`)
    }
}
</script>
<style lang="scss">
.helper{
    width: 612px;
    line-height: 50px;
    background: white;
    .active{
    border: 1px solid red
    //color:red;
}
}
</style>



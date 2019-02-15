<template>
    <div :class="['todo-item',todo.completed ? 'completed':'']">
        <input 
        class="toggle"
        type="checkbox"
        v-model="todo.completed">
    <label>{{todo.content}}</label>
    <button class="destory" @click="deleteTodo">删除</button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        deleteTodo(){
                this.$emit('del',this.todo.id)
        }
    },
    props:{
       todo:{
            type:Object,
            require:true
       }
    }
}
</script>

<style lang="scss" scoped>
.completed{
    text-decoration:line-through;
}
.todo-item{
    position: relative;
    background: white;
    .destory{
        position: absolute;
        right: 10px;
    }
    .toggle{
     width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 50%;
    }
}

</style>


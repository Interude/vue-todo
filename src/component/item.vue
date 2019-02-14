<template>
    <div :class="['todo-item',todo.completed ? 'completed':'']">
        <input 
        class="toggle"
        type="checkbox"
        v-model="todo.completed">
    <label>{{todo.content}}</label>
    <button class="destory" @click="deleteTodo"></button>
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

        }
    }
}
</script>

<style lang="scss" scoped>

</style>


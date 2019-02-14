<template>
   <section class="real-app">
      
       <input
       class="add_input"
       type="text"
       placeholder="接下来做什么?"
       @keyup.enter="active"
       autofocus="autofocus"
       v-model="data">
   </section>
</template>


<script>
export default {
    data(){
    return{
        data:''
    }
    },
    methods:{
        active(){
           if(!!this.data){
                alert(this.data)
           }
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



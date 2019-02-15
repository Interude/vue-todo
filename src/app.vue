<template>
   <div id="app"  >
<Header></Header>
    <todo></todo>
    <Footer></Footer>
   </div>
</template>
<script>
import Header from './component/header.vue'
import todo from './component/todo.vue'
import Footer from './component/footer.jsx'

export default {
    components:{
        Footer,
        Header,
        todo
    },mounted(){

//         let arr = [1,2,3,4,5];
        
//   let index =  arr.findIndex((value,index,arrs)=>{
//         return value==2
//     })
//    alert(index)
   }
}
</script>


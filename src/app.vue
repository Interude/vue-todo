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
    }
}
</script>


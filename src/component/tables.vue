<template>
    <div class="helper">
        <span class="left">this is left</span>
        <span class="tabs">

            <span v-for="state in states>
                  {{state}}
            </span>
            
        </span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            states:['all','active','completed']
        }
    }
}
</script>


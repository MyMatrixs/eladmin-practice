<template>
  <div>
    <div>主页</div>
    <router-view :key="key"/>
  </div>
</template>

<script>
export default {
    name:"MainApp",
    data(){
        return{
            
        }
    },
    computed:{
      key(){
        return this.$route.path
      }
    }
}
</script>

<style>

</style>
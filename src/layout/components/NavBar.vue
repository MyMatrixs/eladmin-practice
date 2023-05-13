<template>
  <div>
    <el-button @click="OpenOrClosedSideBar">收起</el-button>
  </div>
</template>

<script>
export default {
    name:'NavBar',
    data(){
        return{

        }
    },
    methods:{
        OpenOrClosedSideBar(){

            this.$store.commit('changeOpened')
            console.log(this.$store.state.Sidebar.opened)
        }
    }
}
</script>

<style>

</style>
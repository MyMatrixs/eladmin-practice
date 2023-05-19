<template>
  <div>
    <el-button @click="OpenOrClosedSideBar">收起</el-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'NavBar',
    data(){
        return{

        }
    },
    methods:{
        OpenOrClosedSideBar(){
            this.$store.commit('changeOpened')
            console.log(this.$store.state.app.Sidebar.opened)
            console.log(this.siderbarRouters)
            this.$emit('changeWidth',this.$store.state.app.Sidebar.opened)
        }
    },
        computed:{
      ...mapGetters([
        'siderbarRouters'
      ])}
}
</script>

<style>

</style>
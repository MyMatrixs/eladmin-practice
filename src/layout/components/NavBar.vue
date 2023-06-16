<template>
  <div>
    <el-button @click="OpenOrClosedSideBar" style="float:left">收起</el-button>
    <div class="left-dir">
      <BreadCrumb/>
    </div>
    <div class="right-menu"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import BreadCrumb from '@/components/BreadCrumb/index.vue'
export default {
    name:'NavBar',
    data(){
        return{

        }
    },
    components:{
      BreadCrumb,
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
.left-dir{
  float: left;
  height: 100%;
  line-height: 50px;
}
.right-menu{
  float: right;
  height: 50px;
  line-height: 50px;
  background-color: red;
  width: 30px;
}
</style>
<template>
  <div>
    <el-button @click="OpenOrClosedSideBar" style="float:left">收起</el-button>
    <div class="left-dir">
      <BreadCrumb/>
    </div>
    <div class="right-menu">
      <el-dropdown>
        <span class="el-dropdown-link">
          用户<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>布局设置</el-dropdown-item>
          <router-link to="user/center">
            <el-dropdown-item >个人中心</el-dropdown-item>
          </router-link>
          <span @click="open">
            <el-dropdown-item >退出登录</el-dropdown-item>
          </span>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
        },
        open(){
          this.$confirm('确定要注销吗？','提示',{
            confirmButtonText:'确定',
            cancelButtonText:'取消',
            type:'warning'
          }).then(()=>{
            this.logout()
          })
        },
        logout(){
          this.$store.dispatch('LogOut').then(()=>{
            location.reload()
          })
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
  width: 200px;
}
</style>
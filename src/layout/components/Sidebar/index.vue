<template>
  <div>
    <LogoDiv/>
    <div>你好</div>
    <el-scrollbar style="height:90%" >
        <el-menu
          mode='vertical'
          :default-active='activeMenu'
          :background-color = 'bcColor'
          :collapse="this.$store.state.app.Sidebar.opened"
        >
          <siderbar-item v-for="item in siderbarRouters" :key="item.title" :basePath="item.path" :item="item"></siderbar-item>
        </el-menu>
    </el-scrollbar>

  </div>

</template>

<script>
import LogoDiv from './Logo.vue'
import {mapGetters} from 'vuex'
import SiderbarItem from './siderbarItems.vue'
export default {
    components:{
        LogoDiv,
        SiderbarItem
    },
    name:"SideBar",
    data(){
        return{
            activeMenu:'1',
            bcColor:	"#ffffff",
        }
    },
    computed:{
      ...mapGetters([
        'siderbarRouters'
      ])
    }
}
</script>

<style>

</style>
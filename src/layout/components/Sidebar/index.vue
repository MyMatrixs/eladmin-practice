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
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>

            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
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
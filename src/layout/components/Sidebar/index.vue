<template>
  <div>
    <LogoDiv/>
    <div>你好</div>
    <el-scrollbar style="height:90%" >
        <li v-for="item in 100" :key="item">{{item}}</li>
    </el-scrollbar>
  </div>

</template>

<script>
import LogoDiv from './Logo.vue'
export default {
    components:{
        LogoDiv
    },
    name:"SideBar",
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>
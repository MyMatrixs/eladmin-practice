<template>
  <el-breadcrumb>
    <transition-group>
        <el-breadcrumb-item key="1">一级</el-breadcrumb-item>
        <el-breadcrumb-item key="2">二级</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
    name:'BreadCrumb',
    data(){
        return{
            levelList:null
        }
    },
    watch:{
        $route(route){
            if(route.path.startsWith('/redirect/')){
                return
            }
            this.getBreadcrumb()
        }
    },
    methods:{
        getBreadcrumb(){
            let matched = this.$route.matched.filter(item=>item)
            const first = matched[0]
            
            console.log(matched)
        }
    }
}
</script>

<style>

</style>
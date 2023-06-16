<template>
  <el-breadcrumb>
    <transition-group>
        <el-breadcrumb-item v-for="(item,index) in this.levelList" :key="item.path">
            <span v-if='index===levelList.length-1'>{{item.name}}</span>
            <a v-else @click.prevent="">{{item.name}}</a>
        </el-breadcrumb-item>
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
            if(this.isDashboard(first)){
                first.name = '首页'
            }
            this.levelList = matched.filter(item =>item.name)
            console.log(this.levelList)
        },
        isDashboard(router){
            const name = router.name
            if(!name){
                return false
            }
            return name.trim().toLocaleLowerCase() === 'Main'.trim().toLocaleLowerCase()
        },
        handleLink(item){
            const {redirect,path} = item
            if(redirect){
                this.$$router.push(redirect)
                return
            }
            this.$router.push(path)
        }
    }
}
</script>

<style>

</style>
<template>
  <div v-if="item.alwaysShow">
    <template v-if="typeof(item.children)==='undefined'||(justOneShowChild(item.children)&&(!this.zerochild))">
        <AppLink :to="basePath">
            <el-menu-item :index='item.path'>
                <item :title="item.title"></item>
            </el-menu-item>
        </AppLink>
    </template>
    <el-submenu v-else :index='item.path'>
        <template slot="title">
            <item :title="item.title"></item>
        </template>
        <SiderbarItem v-for="child in item.children" :key="child.title" :item="child" :basePath="resovePath(child.path)"></SiderbarItem>
    </el-submenu>
  </div>
</template>

<script>
import item from './item.vue'
import AppLink from './Link.vue'
export default {
  components: { item,AppLink },
    name:"SiderbarItem",
    data(){
        return{
            zerochild:false
        }
    },
    props:{
        item:{
            type:Object,
            required:true
        },
        basePath:{
            type:String,
            default:''
        }
    },
    methods:{
        justOneShowChild(childrens){
            const showingChildren = childrens.filter(item=>{
                if(item.alwaysShow){
                    return true
                }else{
                    return false
                }
            })
            if (showingChildren.length===1){
                this.zerochild=false
                return true

            }
            if(showingChildren.length===0){
                this.zerochild=true
            }
            return false
        },
        resovePath(routepath){
            console.log(this.basePath+'/'+routepath)
            return this.basePath+'/'+routepath
        }
    }
}
</script>

<style>

</style>
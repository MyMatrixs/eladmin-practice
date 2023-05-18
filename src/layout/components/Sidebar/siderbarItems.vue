<template>
  <div v-if="item.alwaysShow">
    <template v-if="typeof(item.children)==='undefined'||(justOneShowChild(item.children)&&(!this.zerochild))">
        <el-menu-item :index='item.path'>
            <item :title="item.title"></item>
        </el-menu-item>
    </template>
    <el-submenu v-else :index='item.path'>
        <template slot="title">
            <item :title="item.title"></item>
        </template>
        <SiderbarItem v-for="child in item.children" :key="child.title" :item="child" :basePath="child.path"></SiderbarItem>
    </el-submenu>
  </div>
</template>

<script>
import item from './item.vue'
export default {
  components: { item },
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
        }
    }
}
</script>

<style>

</style>
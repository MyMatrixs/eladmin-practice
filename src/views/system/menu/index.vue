<template>
  <div id = 'app-con'>
    <div id = 'header-con'>
      <el-input size="small" style="width:200px"></el-input>
      <el-button>搜索</el-button>
    </div>
    <el-table
      :data="crud.data"
      style="width: 100%"
      row-key="menuId"
      border
      lazy
      :load="loadData"
      :tree-props="{children: 'children', hasChildren: 'subCount'}">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="title" label="菜单标题" width="125px"></el-table-column>
      <el-table-column prop="icon" label="图标" width="65px"></el-table-column>
      <el-table-column prop="menuSort" label="排序"></el-table-column>
      <el-table-column prop="permission" label="权限标识"></el-table-column>
      <el-table-column label="组件路径"></el-table-column>
      <el-table-column label="外链"></el-table-column>
      <el-table-column prop="cache" label="缓存"></el-table-column>
      <el-table-column prop="hidden" label="可见"></el-table-column>
      <el-table-column prop="createTime" label="创建日期"></el-table-column>
    </el-table>
  </div>

</template>

<script>
import crudMenus from "@/api/system/menu"
import CRUD,{presenter,header,form,crud} from "../../../components/Crud_Copy/crud"
export default {
    name:'MenuSystem',
    data(){
        return{

        }
    },
    cruds(){
      console.log('返回了DRUD')
      return CRUD({title:'菜单管理',url:'system/menu/',crudMethod:{...crudMenus}})
    },
    mixins:[presenter(),crud()],
    methods:{
      loadData(tree, treeNode, resolve){
        const params = {pid:tree.menuId}
        setTimeout(() => {
            crudMenus.getMenus(params).then(res=>{
              resolve(res.info)
            })
        }, 1000);

      }
    }
    
}
</script>

<style>

</style>
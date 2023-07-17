<template>
  <div id = 'app-con'>
    <div id = 'header-con'>
      <el-input size="small" style="width:200px"></el-input>
      <el-button>搜索</el-button>
      <div><crudOperation :permission="permission"></crudOperation></div>
    </div>
    <el-dialog :visible="crud.status.cu > 0" append-to-body :before-close="crud.cancelCU" :title="crud.status.title" width="500px">
      <el-form ref="form" :model="form">
        <el-form-item label="菜单类型" prop="type" style="width:300px">
          <el-radio-group v-model="form.type">
            <el-radio-button label="0">目录</el-radio-button>
            <el-radio-button label="1">菜单</el-radio-button>
            <el-radio-button label="2">按钮</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="菜单图标" prop="icon"></el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="菜单外链" prop="icon"></el-form-item>
        <el-form-item v-show="form.type.toString()!=='1'" label="菜单缓存" prop="icon"></el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="菜单可见" prop="icon"></el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="菜单标题" prop="icon"></el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="按钮名称" prop="icon"></el-form-item>
        <el-form-item v-show="form.type.toString()!=='0'" label="权限标识" prop="icon"></el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="路由地址" prop="icon"></el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="菜单排序" prop="icon"></el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="组件名称" prop="icon"></el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="组建路径" prop="icon"></el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="上级类目" prop="icon"></el-form-item>
      </el-form>
    </el-dialog>
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
import crudOperation from '@/components/Crud_Copy/CRUD.operation.vue'
const defaultForm = {id:null,title:null,menuSort:null,path:null,component:null,componentName:null,iFrame:false,roles:[],pid:null,icon:null,cache:false,hidden:false,type:0,permission:null}
export default {
    name:'MenuSystem',
    data(){
        return{
          permission: {
            add: ['admin', 'menu:add'],
            edit: ['admin', 'menu:edit'],
            del: ['admin', 'menu:del']
          }
        }
    },
    components:{crudOperation},
    cruds(){
      console.log('返回了DRUD')
      return CRUD({title:'菜单管理',url:'system/menu/',crudMethod:{...crudMenus}})
    },
    mixins:[presenter(),crud(),form(defaultForm),header()],
    methods:{
      loadData(tree, treeNode, resolve){
        const params = {pid:tree.menuId}
        setTimeout(() => {
            crudMenus.getMenus(params).then(res=>{
              resolve(res.info)
            })
        }, 1000);

      },
    }
    
}
</script>

<style>

</style>
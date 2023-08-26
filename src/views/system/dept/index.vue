<template>
  <div id = 'app-con'>
    <div id = 'header-con'>
      <el-input v-model="query.blurry" size="small" style="width:200px"></el-input>
      <el-date-picker
        v-model="query.createTime"
        type="daterange"
        start-placeholder="Start date"
        end-placeholder="End date"
        :default-time="['00:00:00', '23:59:59']">
      </el-date-picker>
      <rrOperation/>
      <div><crudOperation :permission="permission"/></div>
    </div>

    <el-table
      :data="crud.data"
      style="width: 100%"
      row-key="deptId"
      border
      lazy
      @select='crud.selectChange'
      @select-all="crud.selectAllChange"
      @selection-change="crud.selectionChangeHandler"
      :load="loadData"
      :tree-props="{children: 'children', hasChildren: 'subCount'}">
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column prop="name" label="名称" width="125px"></el-table-column>
      <el-table-column prop="deptId" label="排序" width="65px"></el-table-column>
      <el-table-column prop="enabled" label="状态" align="center"></el-table-column>
      <el-table-column prop="createTime" label="创建日期"></el-table-column>
      <el-table-column label="操作"></el-table-column>

    </el-table>
  </div>

</template>

<script>
import crudMenus from "@/api/system/dept"
import CRUD,{presenter,header,form,crud} from "../../../components/Crud_Copy/crud"
import crudOperation from '@/components/Crud_Copy/CRUD.operation.vue'
import rrOperation from '@/components/Crud_Copy/RR.operation.vue'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
const defaultForm = {id:null,title:null,menuSort:null,path:null,component:null,componentName:null,iFrame:false,roles:[],pid:null,icon:null,cache:false,hidden:false,type:0,permission:null}
export default {
    name:'MenuSystem',
    data(){
        return{
          menus:[],
          permission: {
            add: ['admin', 'menu:add'],
            edit: ['admin', 'menu:edit'],
            del: ['admin', 'menu:del']
          }
        }
    },
    components:{crudOperation,rrOperation},
    cruds(){
      console.log('返回了DRUD')
      return CRUD({title:'部门',url:'api/system/dept/',crudMethod:{...crudMenus}})
    },
    mixins:[presenter(),crud(),form(defaultForm),header()],
    methods:{
      [CRUD.HOOK.afterToCU](crud,form){
        this.menus=[]
        if(form.id!=null){
          if(form.pid===null){
            form.pid=0
          }
          this.getSupDepts()
        }else{
          this.menus.push({id:'null',label:'顶级类目',children:null})
        }
      },
      loadData(tree, treeNode, resolve){
        const params = {"parentDeptName":tree.name,"ascRole":true}
        setTimeout(() => {
            crudMenus.getDepts(params).then(res=>{
              resolve(res.info)
            })
        }, 0);
      },
      loadMenus({action,parentNode,callback}){
        crudMenus.getMenusTree(parentNode.id).then(res =>{
          parentNode.children = res.map(function(ojb){
            return {id:ojb.menuId,label:ojb.title,children:null}
          })
          setTimeout(() => {
            callback()
          }, 100);
        })
        
      },
      getSupDepts(id){
        crud.get
      },

      formatTime(row, column){
        const date = new Date(row.createTime);
        const year = date.getFullYear();
        const month = this.padZero(date.getMonth() + 1);
        const day = this.padZero(date.getDate());
        const hours = this.padZero(date.getHours());
        const minutes = this.padZero(date.getMinutes());
        const seconds = this.padZero(date.getSeconds());

       return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      },
      padZero(number) {
      return String(number).padStart(2, "0");
    },
    }
    
}
</script>

<style>

</style>
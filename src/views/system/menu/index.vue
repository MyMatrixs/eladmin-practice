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
    <el-dialog :visible="crud.status.cu > 0" append-to-body :before-close="crud.cancelCU" :title="crud.status.title" width="600px">
      <el-form ref="form" :model="form" size='small' :inline="true">
        <el-form-item label="菜单类型" prop="type" style="width:180px" :inline="true">
          <el-radio-group v-model="form.type" size='mini'>
            <el-radio-button label="0">目录</el-radio-button>
            <el-radio-button label="1">菜单</el-radio-button>
            <el-radio-button label="2">按钮</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="菜单图标" prop="icon" style="width:400px">
            <el-input style="width:100%"/>
        </el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="菜单外链" prop="icon">
          <el-radio-group v-model="form.iFrame" size="mini">
            <el-radio-button label="True">是</el-radio-button>
            <el-radio-button label="False">否</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="form.type.toString()==='1'" label="菜单缓存" prop="icon">
          <el-radio-group v-model="form.cache" size="mini">
            <el-radio-button label="True">是</el-radio-button>
            <el-radio-button label="False">否</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="菜单可见" prop="icon">
          <el-radio-group v-model="form.hidden" size="mini">
            <el-radio-button label="True">是</el-radio-button>
            <el-radio-button label="False">否</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="菜单标题" prop="icon">
          <el-input v-model="form.title" :style="form.type.toString==='0'?'width:450px':'width:170px'" placeholder="菜单标题"/>
        </el-form-item>
        <el-form-item v-show="form.type.toString()==='2'" label="按钮名称" prop="icon">
          <el-input/>
        </el-form-item>
        <el-form-item v-show="form.type.toString()!=='0'" label="权限标识" prop="icon">
          <el-input v-model="form.permission" :disabled="form.iFrame.toString()==='true'" placeholder="权限标识" style="width:180px"/>
        </el-form-item>
        <el-form-item v-show="form.type.toString()!=='2'" label="路由地址" prop="icon">
          <el-input v-model="form.path" placeholder="路由地址" style="width:180px"/>
        </el-form-item>
        <el-form-item label="菜单排序" prop="icon">
          <el-input-number v-model.number="form.menuSort" :min='0' :max='999' controls-position='right' style="width:178px" />
        </el-form-item>
        <el-form-item v-show="form.type.toString()==='1'" label="组件名称" prop="icon">
          <el-input v-model="form.componentName" placeholder="匹配组件内的ConponentName" style="width:180px"/>
        </el-form-item>
        <el-form-item v-show="form.type.toString()==='1'" label="组建路径" prop="icon">
          <el-input v-model="form.component" placeholder="组件路径" style="width:180px"/>
        </el-form-item>
        <el-form-item  label="上级类目" prop="icon">
          <TreeSelect
          v-model="form.pid"
          :options="menus"
          :load-options="loadMenus"
          style="width:450px"
          placeholder="选择上级类目"
          />
          <el-input v-model="form.pid" placeholder="上级pid" style="width:180px"/>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="crud.cancelCU">取消</el-button>
        <el-button  type='primary' @click="crud.submitCU">确认</el-button>
      </div>
    </el-dialog>
    <el-table
      :data="crud.data"
      style="width: 100%"
      row-key="menuId"
      border
      lazy
      @select='crud.selectChange'
      @select-all="crud.selectAllChange"
      @selection-change="crud.selectionChangeHandler"
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
      <el-table-column prop="createTime" label="创建日期" :formatter="formatTime"></el-table-column>
    </el-table>
  </div>

</template>

<script>
import crudMenus from "@/api/system/menu"
import CRUD,{presenter,header,form,crud} from "../../../components/Crud_Copy/crud"
import crudOperation from '@/components/Crud_Copy/CRUD.operation.vue'
import rrOperation from '@/components/Crud_Copy/RR.operation.vue'
import TreeSelect from '@riophae/vue-treeselect'
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
    components:{crudOperation,rrOperation,TreeSelect},
    cruds(){
      console.log('返回了DRUD')
      return CRUD({title:'菜单管理',url:'api/system/menu/',crudMethod:{...crudMenus}})
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
        const params = {pid:tree.menuId}
        setTimeout(() => {
            crudMenus.getMenus(params).then(res=>{
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
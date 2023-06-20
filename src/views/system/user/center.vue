<template>
  <div class="uesr-continer">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>个人信息</span>
          </div>
          <ul>
            <li><div>头像-待实现</div></li>
            <li>用户名：<div  class="user-right">{{form.username}}</div></li>
            <li>昵称：<div class="user-right">{{form.nickName}}</div></li>
            <li>性别：<div class="user-right">{{form.gender}}</div></li>
            <li>部门：<div class="user-right">{{form.deptName}}</div></li>
            <li>电话：<div class="user-right">{{form.phone}}</div></li>
            <li>邮箱：<div class="user-right">{{form.email}}</div></li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <el-tabs >
            <el-tab-pane label="用户资料">
              <el-form ref='form' :model="form" style="margin-top:10pxl" label-width="65px">
                <el-form-item label="昵称">
                  <el-input v-model="form.nickName" style="width:35%"></el-input>
                </el-form-item>
                  <el-form-item label="手机号">
                  <el-input v-model="form.phone" style="width:35%"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                  <el-radio-group v-model="form.gender"  style="width:35%">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item>
                  <el-button @click="doSubmit">保存配置</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="操作日志"></el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import store from '@/store'
import {mapGetters} from 'vuex'
import { editUser } from '@/api/system/user'
export default {
    name:'UserCenter',
    data(){
        return{
            form:{}
        }
    },
    computed:{
      ...mapGetters([
        'user'
      ])
    },
    created(){
      this.form={
          "avatarName": this.user.avatarName,
          "avatarPath": this.user.avatarPath,
          "deptName": this.user.deptName,
          "email": this.user.email,
          "gender": this.user.gender,
          "nickName": this.user.nickName,
          "phone": this.user.phone,
          "username": this.user.username
      }
      store.dispatch('GetInfo').then(()=>{})
    },
    methods:{
      doSubmit(){
        editUser(this.form).then(()=>{
          store.dispatch('GetInfo').then((res)=>{
            console.log(res)
          })
        }).catch((error)=>{
            console.log('修改出错',error)
          })
      }
    }
}
</script>

<style>
.uesr-continer{
  height: 100%;
  width: 100%;
  background-color: white;
}
  .el-row {
    margin-bottom: 10px;
    height: 100%;
  }
  .el-col {
    border-radius: 4px;
    height: 100%;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    height: 100%;
  }
  .box-card{
    width: 90%;
  }
  .user-right{
    position: relative;
  }
</style>
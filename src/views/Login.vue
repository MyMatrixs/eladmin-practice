<template>
  <div class="main" :style="{'backgroundImage' : 'url('+background+')'}">
    <el-form class="mainForm" :model='logonForm' >
      <el-header><h1>系统登录</h1></el-header>
      <el-form-item>
        <el-input placeholder="账号" v-model="logonForm.username" type="text"><div icon-class="user" slot="prefix">1</div></el-input>
      </el-form-item>
      <el-form-item>
        <el-input  placeholder="密码" v-model="logonForm.password" type = "password"><div icon-class="user" slot="prefix">2</div></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="验证码" v-model="logonForm.code"><div icon-class="user" slot="prefix">3</div></el-input>
      </el-form-item>
      <el-checkbox style="float:left" v-model="logonForm.remeberMe">记住密码</el-checkbox> 
      <el-form-item>
        <el-button @click="loginIn">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import background from '@/assets/images/Billion-years-ago-Earth_1920x1200.jpg'
export default {
    name:'LoginIn',
    data(){
        return{
            background:background,
            mydata:"你好啊",
            input:'',

            logonForm:{
              username:'默认用户',
              password:'123456',
              code:'',
              remeberMe:false,
              uuid:''
            }
        }
    },
    methods:{
      loginIn(){
        if(this.logonForm.username=='默认用户'&&this.logonForm.password=='123456'){
          this.$router.push({ path: '/Main' })
        }
      }
    }
}
</script>

<style>
.main{
    height: 100%;
    width: 100%;
    float: left;
    background-size: cover;
    text-align: center;
}
.mainForm{
  position: relative;
  width: 400px;
  height: auto;
  margin: auto;
  top: 50%;
  margin-top: -150px;
  background-color: rgba(255, 255, 255, 0.616);
  padding: 20px;
}
.el-header{
  background-color: #ffffff00;
}
</style>
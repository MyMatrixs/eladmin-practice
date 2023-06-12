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
        <div><img :src="codeURL" @click="getCode"></div>
      </el-form-item>
      <el-checkbox style="float:left" v-model="logonForm.remeberMe">记住密码</el-checkbox> 
      <el-form-item>
        <el-button @click="loginIn">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {encrypt} from '@/utils/rsaEncrypt'
import background from '@/assets/images/Billion-years-ago-Earth_1920x1200.jpg'
import{getCodeImg} from '@/api/Login'
import Cookies from 'js-cookie'
export default {
    name:'LoginIn',
    data(){
        return{
            background:background,
            cookiePass:'',
            mydata:"你好啊",
            input:'',
            codeURL:'',
            logonForm:{
              username:'默认用户',
              password:'123456',
              code:'',
              remeberMe:false,
              uuid:''
            }
        }
    },
    created(){
      console.log('获取下验证码')
      this.getCode()
      console.log('获取cookise')
      this.getCookie()
      console.log('获取过期信息')
      this.point()
    },
    methods:{
      loginIn(){
        const user ={
          username:this.logonForm.username,
          password:this.logonForm.password,
          remeberMe:false,
          code:this.logonForm.code,
          uuid:this.logonForm.uuid
        }
        if(user.password!== this.cookiePass){
          user.password = encrypt(user.password)
        }
        this.$store.dispatch('Login',user).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
          if(this.logonForm.username=='默认用户'&&this.logonForm.password=='123456'){
            console.log('点击')
            this.$router.push({ path: '/Main' })
          }
        })

      },
      getCode(){
        getCodeImg().then(res=>{
          this.codeURL = res.img
          this.logonForm.uuid = res.uuid
        })
      },
      getCookie(){
        const username = Cookies.get('username')
        let password = Cookies.get('password')
        const remeberMe = Cookies.get('remeberMe')
        this.cookiePass = password===undefined?'':password
        password = password===undefined?this.logonForm.password:password
        this.logonForm={
          username:username===undefined?this.logonForm.username:username,
          password:password,
          remeberMe:remeberMe===undefined?false:Boolean(remeberMe),
          code:''
        }
      },
      point(){
        const point = Cookies.get('point')!==undefined
        if(point){
          this.$notify({
            title:'提示',
            message:'当前登录已过期，请重新登录',
            type:'warning',
            duration:5000
          })
          Cookies.remove('point')
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
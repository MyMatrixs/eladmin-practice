<template>
  <div class="main" :style="{'backgroundImage' : 'url('+background+')'}">
    <el-form class="mainForm" >
      <el-header><h1>更高级的Eladmin</h1></el-header>
      <el-form-item>
        <el-input  placeholder="账号"><div icon-class="user" slot="prefix">1</div></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="密码"><div icon-class="user" slot="prefix">2</div></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="验证码"><div icon-class="user" slot="prefix">3</div></el-input>
      </el-form-item>
      <el-checkbox></el-checkbox> 
      <el-form-item>
        <el-button>提交</el-button>
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
            input:''
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

</style>
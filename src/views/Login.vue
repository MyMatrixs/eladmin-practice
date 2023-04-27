<template>
  <div>
    <el-container>
    <el-header><h1>Eladmin仿制系统-更高级的Eladmin</h1></el-header>
    <el-container>
        <el-aside width="200px">侧边栏</el-aside>
        <el-main>
            <p>{{input}}</p>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-main>
    </el-container>
    </el-container>
  </div>
</template>
<script>


export default {
    name:'LoginIn',
    data(){
        return{
            mydata:"你好啊",
            input:''
        }
    }
}
</script>

<style>
.main{
    background-color: rgba(137, 43, 226, 0.267);
    width: 200px;
    height: 200px;
    float: left;
    position: absolute;
    top: 390px;
    left: 300px;
    font-family: fangsong;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
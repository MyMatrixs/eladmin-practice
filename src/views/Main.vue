<template>
  <div class="main">
    <el-container style="height:100%">
    <el-header>标题</el-header>
    <el-container>
        <el-aside width="200px">侧边</el-aside>
        <el-container>
        <el-main>主界面{{mydata}}</el-main>
        <el-footer>页脚</el-footer>
        </el-container>
    </el-container>
    </el-container>
  </div>

</template>

<script>
export default {
  name: 'MyText',
  data(){
    return{
      mydata:'你好'
    }
  }
}
</script>

<style>
.main{
  background-color: white;
  height: 100%;
}
.el-container{

}
.el-header{
    background-color: red;
}
.el-aside{
    background-color: greenyellow;
}
.el-footer{
    background-color: pink;
}
</style>
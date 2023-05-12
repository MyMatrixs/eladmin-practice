<template>
  <div class="main">
    <el-container style="height:100%">
        <SideBar class='container-SideBar'/>
        <MainApp class='container-MainApp'/>
    </el-container>
   </div>
</template>

<script>
import {SideBar,MainApp} from './components/index.js'

export default {
  name: 'IndexPage',
  components:{
    MainApp,
    SideBar,
  },
  data(){
    return{
      mydata:'你好'
    }
  }
}
</script>

<style>
body{
    margin: 0px;
    padding: auto;
}
.main{
  background-color: white;
  height: 100%;
}
.container-SideBar{
    width: 300px;
    height: 100%;
    background-color: rgba(172, 255, 47, 0.164);

}
.container-MainApp{
    padding-left: 300px;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 0, 0, 0.171);
}
</style>
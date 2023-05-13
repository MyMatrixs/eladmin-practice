<template>
  <div class="main">
    <el-container style="height:100%">
        <SideBar class='container-SideBar'/>
        <div class="container">
          <NavBar class="NavBar"/>
          <MainApp class='container-MainApp'/>
        </div>

    </el-container>
   </div>
</template>

<script>
import {SideBar,MainApp,NavBar} from './components/index.js'

export default {
  name: 'IndexPage',
  components:{
    MainApp,
    SideBar,
    NavBar,
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
    width: 250px;
    height: 100%;
    background-color: rgba(172, 255, 47, 0.164);

}
.container{

    height: 100%;
    width: 100%;
    background-color: rgba(255, 0, 0, 0.171);
}
.NavBar{
  width: 100%;
  height: 60px;

}
.container-MainApp{
    width: 100%;
    height: 100%;
    padding-top: 60px;
    background-color: rgba(0, 255, 76, 0.171);
}
</style>
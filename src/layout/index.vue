<template>
  <div class="main">
    <el-container style="height:100%">
        <SideBar class='container-SideBar' :style="{'width':sideBarWith+'px' }"/>
        <div class="container">
          <NavBar @changeWidth="changeSideBarwidth" class="NavBar"/>
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
      mydata:'你好',
      sideBarWith:"250",
    }
  },
  methods:{
    changeSideBarwidth(value){
      console.log(value)
      if(value){
        this.sideBarWith="50"
      }else{
        this.sideBarWith="250"
      }
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
  text-align: left;
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
    height: 90%;
    margin-top: 0px;
    background-color: rgba(0, 255, 76, 0.171);
}
</style>
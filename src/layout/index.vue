<template>
  <div class="main">
    <el-container style="height:100%">
        <SideBar class='container-SideBar' :style="{'width':sideBarWith+'px' }"/>
        <div class="container" :style="{'margin-left':sideBarWith+'px'}">
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
  },

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
    position: fixed;

}
.container{
    height: 100%;
    width: 100%;
    margin-left: 250px;
    background-color: rgba(255, 0, 0, 0.171);
    position: relative;
}
.NavBar{
  width: 100%;
  height: 60px;
  position: fixed;
}
.container-MainApp{
    width: 100%;
    height: 100%;
    margin-top: 60px;
    position: relative;
    background-color: rgba(0, 255, 76, 0.171);
}
</style>
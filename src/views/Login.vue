<template>
  <div class="main">{{mydata}}</div>
</template>

<script>
export default {
    name:'LoginIn',
    data(){
        return{
            mydata:"你好啊"
        }
    }
}
</script>

<style>
.main{
    background-color: blueviolet;
    width: 200px;
    height: 200px;
    float: left;
    position: absolute;
    top: 90px;
    left: 300px;
    font-family: fangsong;
    
}
</style>
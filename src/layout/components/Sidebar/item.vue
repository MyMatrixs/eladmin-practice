<template>
  <div>
    <span slot="title">{{title}}</span>
  </div>
</template>

<script>
export default {
    name:"MenuItem",
    data(){
        return{

        }
    },
    props:{
        title:{
            type:String,
            default:''
        }
    }
}
</script>

<style>

</style>
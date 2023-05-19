<template>
  <div>
    <a v-if="isOuterLink(to)" href=""><slot/></a>
    <router-link v-else :to="to" ><slot/></router-link>
  </div>
</template>

<script>
export default {
    name:'AppLink',
    data(){
        return{

        }
    },
    props:{
        to:{
            type:String,
            required:true
        }
    },
    methods:{
        isOuterLink(url){
            return false
        }
    }
}
</script>

<style>

</style>
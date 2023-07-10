<template>
  <div id = 'app-con'>
    <div id = 'header-con'>
      <el-input size="small" style="width:200px"></el-input>
      <el-button>搜索</el-button>
    </div>
    <el-table>
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="title" label="菜单标题" width="125px"></el-table-column>
      <el-table-column label="图标" width="65px"></el-table-column>
      <el-table-column label="排序"></el-table-column>
      <el-table-column label="权限标识"></el-table-column>
      <el-table-column label="组件路径"></el-table-column>
      <el-table-column label="外链"></el-table-column>
      <el-table-column label="缓存"></el-table-column>
      <el-table-column label="可见"></el-table-column>
      <el-table-column label="创建日期"></el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
    name:'MenuSystem',
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>
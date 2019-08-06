<template>

    <el-row style="margin-bottom: 70px; margin-top: 70px">
        <hr/>
        <el-col :span="5"><el-link type="info">Collection</el-link></el-col>
        <el-col :span="1"><div style="width: 2px; background: #2c3e50">'</div></el-col>
        <el-col :span="5">  <el-link type="info">Site</el-link></el-col>
        <el-col :span="1"><div style="width: 3px; background: #2c3e50">'</div></el-col>
        <el-col :span="5">  <el-link type="info">Shop</el-link></el-col>
        <el-col :span="1"><div style="width: 3px; background: #2c3e50">'</div></el-col>
        <el-col :span="5">  <el-link type="info">About</el-link></el-col>
    </el-row>

</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
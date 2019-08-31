<template>
    <div id="Header" style="margin-bottom: 20px">
        <el-row>
            <el-col :span="18">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="min-width: 700px" router="true">

            <el-menu-item index="/" ><img src="../assets/52045684.jpg" alt="sample" style="height: 30px; width: 30px"></el-menu-item>
            <el-menu-item index="/">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">深度数据服务</template>
                <el-menu-item index="/services" >金融服务</el-menu-item>
                <el-menu-item index="/query">数据查询</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">问题反馈</el-menu-item>

        </el-menu>
            </el-col>

            <el-col :span="3">
                <el-dropdown style="margin-top: 20px" >
                <span class="el-dropdown-link">
                    <i class="el-icon-user"></i>
                    账户<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Account</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>查看详情</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>

            <el-col :span="2" style="margin-top: 16px">
                <el-button  icon="el-icon-search">搜索</el-button>
            </el-col>
        </el-row>


    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '1',
            }
        }
    }
</script>

<style scoped>

    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }

</style>
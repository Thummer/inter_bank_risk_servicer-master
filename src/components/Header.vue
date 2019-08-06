<template>
    <div id="Header">
        <el-row>
            <el-col :span="18">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="min-width: 700px">

            <el-menu-item index="0" ><img src="../assets/logo.png" alt="sample" style="height: 30px; width: 30px"></el-menu-item>
            <el-menu-item index="1" >首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">深度数据服务</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">常见问题</el-menu-item>

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
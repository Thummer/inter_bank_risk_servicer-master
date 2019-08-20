<template>
    <div>
        <div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input v-model="form.pass" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
            <h1>账号:{{ form.name }}</h1>
            <h1>密码:{{ form.pass }}</h1>

        </div>

        <h1>{{ data }}</h1>
        <el-button type="primary" @click="fetch">获取数据</el-button>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "Login",
        components:{
            Header,
            Footer
        },
        data(){
            return{
                form:{
                    name:'',
                    pass:''
                },
                content: 'Sample',
                data:'NULL'

            }
        },
        methods: {
            onSubmit() {
                // console.log('submit!');
                this.axios.post("URL", {userName: this.name, password: this.pass})
            },
            fetch(){
                this.axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(response =>{
                    this.data= response;
                });
            }

        },
    }
</script>

<style scoped>

</style>
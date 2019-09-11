<template>
    <div id="BankQuery">
        <Header></Header>

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/query' }">数据查询</el-breadcrumb-item>
            <el-breadcrumb-item>银行数据</el-breadcrumb-item>
        </el-breadcrumb>

        <el-row>
            <el-col :span="12">
                <div style="margin: 30px">
                    <el-table
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                prop="data"
                                label="指标"
                                width="150">
                        </el-table-column>
                        <el-table-column label="银行">
                            <el-table-column
                                    prop="gongshang"
                                    label="工商银行">
                            </el-table-column>
                            <el-table-column
                                    prop="nongye"
                                    label="农业银行">
                            </el-table-column>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>

            <el-col :span="12">
                <h1>银行查询</h1>
                <el-cascader-panel :options="options" @change="getCheckedNodes"></el-cascader-panel>
            </el-col>
        </el-row>

        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    import {Chart} from 'highcharts-vue'
    export default {
        name: "BankQuery",
        components:{
            Header,
            Footer,
            highcharts: Chart
        },
        data() {
            return {
                tableData:[{        //TODO 表格数据已经过测试, 可以直接从后台获取Json数据, 注意获取到的数据与表格中数据命名不同的问题.
                    data:'Cost to income ratio',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'Liquid Assets',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'L Gross',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'L less',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'Tier 1 Ratio',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },{
                    data:'Level',
                    gongshang:'2.5600',
                    nongye:'2.5600'
                },
                ],
                options: [{     //TODO 这里尚未完成, 思路为列表数据通过axios动态地从后台获取
                    value: 'hebei',
                    label: '河北省',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                            value: 'yizhi',
                            label: '一致'
                        }, {
                            value: 'fankui',
                            label: '反馈'
                        }, {
                            value: 'xiaolv',
                            label: '效率'
                        }, {
                            value: 'kekong',
                            label: '可控'
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '侧向导航'
                        }, {
                            value: 'dingbudaohang',
                            label: '顶部导航'
                        }]
                    }]
                }, {
                    value: 'zujian',
                    label: '福建',
                    children: [{
                        value: 'basic',
                        label: 'Basic',
                        children: [{
                            value: 'layout',
                            label: 'Layout 布局'
                        }, {
                            value: 'color',
                            label: 'Color 色彩'
                        }, {
                            value: 'typography',
                            label: 'Typography 字体'
                        }, {
                            value: 'icon',
                            label: 'Icon 图标'
                        }, {
                            value: 'button',
                            label: 'Button 按钮'
                        }]
                    }, {
                        value: 'form',
                        label: 'Form',
                        children: [{
                            value: 'radio',
                            label: 'Radio 单选框'
                        }, {
                            value: 'checkbox',
                            label: 'Checkbox 多选框'
                        }, {
                            value: 'input',
                            label: 'Input 输入框'
                        }, {
                            value: 'input-number',
                            label: 'InputNumber 计数器'
                        }, {
                            value: 'select',
                            label: 'Select 选择器'
                        }, {
                            value: 'cascader',
                            label: 'Cascader 级联选择器'
                        }, {
                            value: 'switch',
                            label: 'Switch 开关'
                        }, {
                            value: 'slider',
                            label: 'Slider 滑块'
                        }, {
                            value: 'time-picker',
                            label: 'TimePicker 时间选择器'
                        }, {
                            value: 'date-picker',
                            label: 'DatePicker 日期选择器'
                        }, {
                            value: 'datetime-picker',
                            label: 'DateTimePicker 日期时间选择器'
                        }, {
                            value: 'upload',
                            label: 'Upload 上传'
                        }, {
                            value: 'rate',
                            label: 'Rate 评分'
                        }, {
                            value: 'form',
                            label: 'Form 表单'
                        }]
                    }, {
                        value: 'data',
                        label: 'Data',
                        children: [{
                            value: 'table',
                            label: 'Table 表格'
                        }, {
                            value: 'tag',
                            label: 'Tag 标签'
                        }, {
                            value: 'progress',
                            label: 'Progress 进度条'
                        }, {
                            value: 'tree',
                            label: 'Tree 树形控件'
                        }, {
                            value: 'pagination',
                            label: 'Pagination 分页'
                        }, {
                            value: 'badge',
                            label: 'Badge 标记'
                        }]
                    }, {
                        value: 'notice',
                        label: 'Notice',
                        children: [{
                            value: 'alert',
                            label: 'Alert 警告'
                        }, {
                            value: 'loading',
                            label: 'Loading 加载'
                        }, {
                            value: 'message',
                            label: 'Message 消息提示'
                        }, {
                            value: 'message-box',
                            label: 'MessageBox 弹框'
                        }, {
                            value: 'notification',
                            label: 'Notification 通知'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                            value: 'menu',
                            label: 'NavMenu 导航菜单'
                        }, {
                            value: 'tabs',
                            label: 'Tabs 标签页'
                        }, {
                            value: 'breadcrumb',
                            label: 'Breadcrumb 面包屑'
                        }, {
                            value: 'dropdown',
                            label: 'Dropdown 下拉菜单'
                        }, {
                            value: 'steps',
                            label: 'Steps 步骤条'
                        }]
                    }, {
                        value: 'others',
                        label: 'Others',
                        children: [{
                            value: 'dialog',
                            label: 'Dialog 对话框'
                        }, {
                            value: 'tooltip',
                            label: 'Tooltip 文字提示'
                        }, {
                            value: 'popover',
                            label: 'Popover 弹出框'
                        }, {
                            value: 'card',
                            label: 'Card 卡片'
                        }, {
                            value: 'carousel',
                            label: 'Carousel 走马灯'
                        }, {
                            value: 'collapse',
                            label: 'Collapse 折叠面板'
                        }]
                    }]
                }, {
                    value: 'ziyuan',
                    label: '山东',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }]

            }
        },
        methods:{//TODO 这里可以获取选中的标签, 可以在这里写选中某个银行之后进行数据查询并重新渲染表格.
            getCheckedNodes(val){
                console.log(val)
            }
        }
    }
</script>

<style scoped>

</style>
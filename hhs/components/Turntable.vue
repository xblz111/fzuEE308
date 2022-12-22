<template>
    <div>
        <div class="h-30 bg-light-50 flex justify-end items-center">
            <div class="flex justify-center items-center mr-20">
                <img src="../assets/img/sp/tit1.png" alt="">
            </div>
        </div>

        <div class="bg-turntable leading-12 h-12 w-160 text-center text-xl font-bold text-orange-900 rounded-tr-xl">
            What to eat today?
        </div>
        <div class="bg-turntable w-full h-200 justify-center items-center felx coulmn relative">
            <div class="w-450px h-450px m-auto pt-20 ">
                <LuckyWheel ref="myLucky" width="450px" height="450px" :defaultConfig="defaultConfig"
                    :defaultStyle="defaultStyle" :prizes="isDiy ? dynamicValidateForm : prizes" :blocks="blocks"
                    :buttons="buttons" @start="startCallback" @end="endCallback" />
            </div>
            <div @click="dialogVisible = true"
                class="w-32 h-12 cursor-pointer bg-light-500 text-gray-500 leading-12 rounded-lg text-center border-1 border-gray-300 m-auto mt-25">
                Custom</div>
            <div class="w-32 h-12 cursor-pointer bg-light-500 text-gray-500 leading-12 rounded-lg text-center border-1 border-gray-300 m-auto mt-5"
                @click="startCallback"> Start</div>

            <img width="150px" class="absolute top-10 left-20" src="../assets/img/sp/hb.png" alt="">
            <img width="200px" class="absolute top-100 left-30" src="../assets/img/sp/mb.png" alt="">
            <img width="120px" class="absolute top-70 right-60" src="../assets/img/sp/mhb.png" alt="">
            <img width="180px" class="absolute top-110 right-50" src="../assets/img/sp/dmb.png" alt="">
            <img width="120px" class="absolute top-10 right-30" src="../assets/img/sp/rmb.png" alt="">

        </div>

        <el-dialog title="自定义转盘" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                <div v-for="(domain, index) in dynamicValidateForm"    :key="index" >
                    <div>菜名{{index+1}}:</div>
                    <input class="w-full  border-1 border-gray-300 h-10 mb-5" :key="index+key" v-model="domain.fonts[0].text" >
                    <!-- <el-button @click.prevent="removeDomain(domain)">删除</el-button> -->
                </div>
                <div>
                    <!-- <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button> -->
                    <el-button @click="addDomain">新增菜名</el-button>
                    <!-- <el-button @click="resetForm('dynamicValidateForm')">重置</el-button> -->
                </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false,isDiy = true">确 定</el-button>
            </span>
        </el-dialog>



    </div>

</template>

<script>
import { type } from 'os'

export default {
    data() {
        return {
            isDiy:false,
            key:0,
            dialogVisible: false,
            dynamicValidateForm: [
                 {
                    background: '#f7e3c2',
                    fonts: [{ text: '1', top: '10%' }]
                }
            ],
            blocks: [{
                padding: '30px', background: '#000', imgs: [
                    { "src": require('../assets/img/sp/round2.png'), top: '-7px', width: "465px", height: "465px" }
                ]
            }],
            prizes: [
                { fonts: [{ text: '披萨', top: '10%' }], background: '#f7e3c2' },
                { fonts: [{ text: '麻辣烫', top: '10%' }], background: '#f7e3c2' },
                { fonts: [{ text: '东北菜', top: '10%' }], background: '#f7e3c2' },
                { fonts: [{ text: '冒菜', top: '10%' }], background: '#f7e3c2' },
                { fonts: [{ text: '火锅', top: '10%' }], background: '#f7e3c2' },
                { fonts: [{ text: '日料', top: '10%' }], background: '#f7e3c2' },
            ],
            buttons: [{
                radius: '35%',
                // background: '#8a9bf3',
                pointer: true,
                // fonts: [{ text: '开始', top: '-10px' }],
                imgs: [
                    {
                        "src": require('../assets/img/sp/xg.png'),
                        "top": "-100px"
                    }
                ]
            }],
            defaultConfig: {
                gutter: "2px"
            },
            defaultStyle: {
                "background": "#008c8c"
            }
        }


    },
    methods: {
        // 点击抽奖按钮会触发star回调
        startCallback() {
            // 调用抽奖组件的play方法开始游戏
            this.$refs.myLucky.play()
            // 模拟调用接口异步抽奖
            setTimeout(() => {
                // 假设后端返回的中奖索引是0
                const index = 0
                // 调用stop停止旋转并传递中奖索引
                this.$refs.myLucky.stop(index)
            }, 3000)
        },
        // 抽奖结束会触发end回调
        endCallback(prize) {
            console.log(prize)
            alert(prize.fonts[0].text)
        },



        // submitForm(formName) {
        //     this.$refs[formName].validate((valid) => {
        //         if (valid) {
        //             console.log(this.dynamicValidateForm);
        //             alert('submit!');
        //         } else {
        //             console.log('error submit!!');
        //             return false;
        //         }
        //     });
        // },
        // resetForm(formName) {
        //     this.$refs[formName].resetFields();
        // },
        removeDomain(item) {
            var index = this.dynamicValidateForm.fonts.indexOf(item)
            if (index !== -1) {
                this.dynamicValidateForm.fonts.splice(index, 1)
            }
        },
        addDomain() {
            var a = {
                fonts: [
                    {
                        text: '',
                        top: '10%'
                    }
                ],
                background: '#f7e3c2'
            }

            this.dynamicValidateForm.push(a);
            this.key++
            console.log(this.dynamicValidateForm);
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        }
    },

    created() {

    }
}
</script>

<style lang="less" scoped>
.bg-turntable {
    background: #f7e3c2;
}

/deep/.el-container .el-main {
    background-color: #fff !important;
}

body {
    background-color: #fff !important;
}
</style>

<template>
    <div class="form container">
        <el-form
            ref="params"
            :model="params"
            :inline="true"
            class="demo-form-inline"
        >
            <el-form-item label="活动名称" prop="FormArr">
                <ul>
                    <li
                        v-for="(item, index) in params.FormArr"
                        :key="index"
                    >
                        <el-form-item label="姓名">
                            <el-input v-model="item.name" />
                        </el-form-item>
                        <el-form-item label="年龄">
                            <el-input v-model="item.age" />
                        </el-form-item>
                        <el-button
                            type="primary"
                            @click="delRow(index)"
                        >
                            删除
                        </el-button>
                    </li>
                </ul>
            </el-form-item>

            <el-form-item label="活动名称" prop="name">
                <el-input v-model="params.name" />
            </el-form-item>
            <el-date-picker
                v-model="params.timer"
                value-format="yyyy-MM-dd"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            />
            <el-button
                type="primary"
                @click="addRow"
            >
                增加更多
            </el-button>
            <el-button
                type="primary"
                @click="submitForm"
            >
                提交表单
            </el-button>
            <el-button
                type="primary"
                @click="mixinResetForm('params')"
            >
                重置
            </el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            params: {
                name: '',
                timer: '',
                FormArr: [
                    { id: 0, name: '', age: '' },
                ],
            }
        };
    },
    mounted(){
        let obj = {
            a: '',
            b: ''
        };
        console.log([obj]);
        let res = {
            a: 100,
            b: 200,
            c: 300
        };
        Object.keys(obj).forEach(m => {
            obj[m] = res[m];
        });
        console.log(obj);
        let time = ['2020-10-10', '2021-10-10'];
        this.params.timer = time;
        // this.$set(this.params, 'timer', [time[0], time[1]]);

    },
    methods: {
        // 增加
        addRow(){
            let params = {
                index: this.params.FormArr.length,
                name: '',
                age: ''
            };
            this.params.FormArr.push(params);
        },
        // 删除
        delRow(index){
            this.params.FormArr.splice(index, 1);
            this.params.FormArr.forEach((m, index) => {
                m.index = index;
            });
        },
        // 提交
        submitForm(){
            console.log(this.params.FormArr);
            this.$nextTick(()=>{
                this.$refs['tabForm'].clearValidate();
            });
        }
    },
};
</script>
<style lang="less" scoped>

</style>

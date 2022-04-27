<template>
    <div>
        <el-input
            v-model="valueWeb"
            :oninput="iptLen"
            type="number"
            onkeyup="value=value.replace(/[^\d]/g,'')"
            placeholder="只能输入数字"
            @keydown.native="inputLimit"
        />
        <van-form @submit="onSubmit">
            <van-field
                v-model="valueH5"
                type="number"
                placeholder="只能输入数字"
                :rules="[{ validator, required: true, message: dianText }]"
            />
            <div style="margin: 16px;">
                <van-button
                    round
                    block
                    type="info"
                    native-type="submit"
                >
                    提交
                </van-button>
            </div>
        </van-form>
        <el-button
            type="primary"
            @click="handleClick"
        >
            点击
        </el-button>
    </div>
</template>

<script>
import { Field, Button, Form } from 'vant';
export default {
    components: {
        [Field.name]: Field,
        [Button.name]: Button,
        [Form.name]: Form,
    },
    data() {
        return {
            valueWeb: '',
            valueH5: '',
            dianText: '请输入正整数',
            iptLen: 'if(value.length === 1 && value === \'0\')value=\'\';if(value.length > 3)value=value.slice(0,3)'
        };
    },
    mounted(){
        let a = {
            a: '',
            b: '',
        };
        let res = {
            a: 100,
            b: 200,
            c: 300
        };
        Object.keys(a).forEach(m => {
            a[m] = res[m];
        });
        a.id = 1;
        console.log(a);
    },
    methods: {
        handleClick(){
            console.log('web', this.valueWeb);
        },
        inputLimit(e){
            let key = e.key.toLowerCase();
            console.log(key);
            // 不允许输入'e'和'.'、'+'、'-'、'Shift'
            if (key === 'e' || key === '.' || key === '+' || key === '-' || key === 'Shift') {
                e.returnValue = false;
                return false;
            }
            return true;
        },
        onSubmit(){
            console.log('h5', this.valueH5);
        },
        validator(val) {
            console.log(44444,val);
            if(+val <= 0){
                this.dianText = '必须为正整数';
                return false;
            }else if(+val.includes('.') || +val.includes('-')){
                this.dianText = '必须为正整数';
                return false;
            }
            return val;
        },
        // 异步校验函数返回 Promise
        asyncValidator(val) {
            return new Promise((resolve) => {
                this.$message('验证中...');
                setTimeout(() => {
                    if(+val <= 0){
                        this.dianText = '必须为正整数';
                        return false;
                    }
                    resolve(/\d{1}/.test(val));
                }, 100);
            });
        },
    }
};
</script>

<style lang="less" scoped>
    .list_arr{
        max-height: 100px;
        overflow-y: scroll;
        border: 1px solid red;
    }
</style>

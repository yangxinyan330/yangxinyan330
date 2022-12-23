<template>
    <div class="pc-card table-box">
        <el-form
            :ref="formConfig.ref"
            :label-width="formConfig.labelWidth"
            :inline="formConfig.inline"
            :model="formParams"
        >
            <el-form-item
                v-for="(item, index) in formDataList"
                :key="index"
                ref="formItem"
                :label="item.label"
                :prop="item.prop"
                :rules="item.rules"
            >
                <el-input v-if="item.type === 'input'" v-model="formParams[item.prop]" :placeholder="isPlaceholder(item.type, item.label)" />
                <el-input v-if="item.type === 'textarea'" v-model="formParams[item.prop]" type="textarea" :placeholder="isPlaceholder(item.type, item.label)" />
                <el-switch v-if="item.type === 'switch'" v-model="formParams[item.prop]" />
                <el-select
                    v-if="item.type === 'select'"
                    v-model="formParams[item.prop]"
                    style="width: 100%"
                    :placeholder="isPlaceholder(item.type, item.label)"
                >
                    <el-option
                        v-for="(opItem, index) in item.options"
                        :key="index"
                        :label="opItem.label"
                        :value="opItem.value"
                    />
                </el-select>
                <el-date-picker
                    v-if="item.type === 'date'"
                    v-model="formParams[item.prop]"
                    type="date"
                    value-format="yyyy-MM-dd"
                    style="width: 100%"
                    :placeholder="item.placeholder"
                />
                <el-date-picker
                    v-if="item.type === 'datetime'"
                    v-model="formParams[item.prop]"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    style="width: 100%"
                    :placeholder="item.placeholder"
                />
                <el-date-picker
                    v-if="item.type === 'datetimerange'"
                    v-model="formParams[item.prop]"
                    type="datetimerange"
                    style="width: 100%"
                    :placeholder="item.placeholder"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd HH:mm:ss"
                />
                <el-date-picker
                    v-if="item.type === 'daterange'"
                    v-model="formParams[item.prop]"
                    type="daterange"
                    style="width: 100%"
                    :placeholder="item.placeholder"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd HH:mm:ss"
                />
                <el-radio-group
                    v-if="item.type === 'radio'"
                    v-model="formParams[item.prop]"
                    :placeholder="item.placeholder"
                >
                    <el-radio
                        v-for="(opItem, index) in item.options"
                        :key="index"
                        :label="opItem.label"
                        :rules="item.rules"
                    />
                </el-radio-group>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="btnCancel">取 消</el-button>
            <el-button type="primary" @click="btnOk">确 定</el-button>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: String,
            default: '30%',
        },
        formDataList: {
            type: Array,
            default() {
                return [];
            },
        },
        formParams: {
            type: Object,
            default() {
                return {};
            },
        },
        formConfig: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    data(){
        return {
            itemVal: ''
        };
    },
    computed: {
        isPlaceholder(){
            return function(type, label){
                let title = '请输入';
                const res = ['select', 'radio', 'year', 'month', 'week', 'date', 'datetime', 'datetimerange', 'daterange'];
                if(res.includes(type)){
                    title = '请选择';
                }
                return `${title}${label}`;
            };
        },
    },
    mounted(){
        console.log('formItem===', this.$refs.formItem);
    },
    methods: {
        // console.log('formItemList===', this.formItemList);
        btnCancel() {
            this.$refs[this.formConfig.ref].resetFields();
            this.$emit('btnCancel', false);
        },
        btnOk() {
            this.$refs[this.formConfig.ref].validate((valid) => {
                if (valid) {
                    this.$emit('btnOk', this.formParams);
                } else {
                    return false;
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>

</style>

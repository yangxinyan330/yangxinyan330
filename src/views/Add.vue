<template>
    <div>
        <ComForm
            ref="dialogForm"
            :form-data-list="formDataList"
            :form-params="formParams"
            :form-config="formConfig"
            @btnOk="handleSubmit"
            @btnCancel="$emit('closeDialog')"
        />
    </div>
</template>

<script>
export default {
    data(){
        return {
            formParams: {
                userName: '',
                userLoginName: '',
                userPassword: '',
                userPhone: '',
                userEmali: '',
                roleId: '',
            },
            formDataList: [
                {
                    label: '用户昵称',
                    prop: 'userName',
                    type: 'input',
                    // rules: [{ required: true, message: '用户昵称不能为空', trigger: 'blur' }],
                },
                {
                    label: '创建时间',
                    prop: 'timer1',
                    type: 'date',
                    rules: [{ required: true, message: '上市时间不能为空', trigger: 'change' }],
                },
                {
                    label: '修改时间',
                    prop: 'timer3',
                    type: 'datetime',
                    rules: [{ required: true, message: '上市时间不能为空', trigger: 'change' }],
                },
                {
                    label: '上市时间',
                    prop: 'timer2',
                    type: 'datetimerange',
                    rules: [{ required: true, message: '上市时间不能为空', trigger: 'change' }],
                },
                {
                    label: '用户角色',
                    prop: 'roleId',
                    type: 'select',
                    options: [
                        { label: '管理员', value: 1 },
                        { label: '店长', value: 2 },
                    ],
                },
            ],
            formConfig: {
                labelWidth: '100px',
                inline: false,
                ref: 'formRef',
            },
        };
    },
    methods: {
        // 提交
        handleSubmit(){
            console.log('btnOk===', {...this.formParams});
        }
    }
};
</script>

<style lang="less" scoped>

</style>

<template>
    <div>
        <el-radio-group v-model="radio" @change="handleRadio">
            <el-radio v-for="city in cityOptions" :key="city.key" :label="city.key">
                {{ city.label }}
            </el-radio>
        </el-radio-group>
    </div>
</template>

<script>
export default {
    props: {
        cityOptions: { type: Array, default: () => {} }
    },
    data(){
        return {
            radio: ''
        };
    },
    methods: {
        // 勾选
        handleRadio(val) {
            console.log('全选', this.radio, val);
        },
    }
};
</script>

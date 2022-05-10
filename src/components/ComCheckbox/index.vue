<template>
    <div>
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
            全选
        </el-checkbox>
        <div style="margin: 15px 0;" />
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cityOptions" :key="city.key" :label="city">
                {{ city.label }}
            </el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
export default {
    props: {
        cityOptions: { type: Array, default: () => {} }
    },
    data(){
        return {
            checkAll: false,
            checkedCities: [],
            isIndeterminate: true
        };
    },
    methods: {
        // 全选
        handleCheckAllChange(val) {
            this.checkedCities = val ? this.cityOptions : [];
            this.isIndeterminate = false;
            console.log('全选', this.checkedCities);
        },
        // 勾选
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cityOptions.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityOptions.length;
            // 按照后端返回的顺序进行传参
            let newArr = this.checkedCities.map(m => m.key);
            let oldArr = this.cityOptions.map(m => m.key );
            newArr.sort((a, b) => {
                return oldArr.indexOf(a) - oldArr.indexOf(b);
            });
            console.log('勾选', newArr);
            console.log('后端返回', this.cityOptions);
        }
    }
};
</script>

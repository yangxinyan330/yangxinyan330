<template>
    <div>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium"><img src="@/assets/images/icon-egg-1.png" alt=""></h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    mounted(){
        const fun = (name, age, sex) => {
            Object.assign(this,{name, age, sex});
            // or
            // this.name = name;
            // this.age = age;
            // this.sex = sex;
            return `${name}-${sex}-${age}`;
        };
        const result = fun('张三', 100, '男');
        console.log('result===', result);

        // 函数默认参数
        function f1(name = 'hello'){
            console.log(name);
        }
        f1();

        // 对象、数组结构
        const obj = {
            name: '张三',
            age: 18,
            sex: '男'
        };
        const { name: newname, ...other } = obj;
        console.log('obj===', newname, other);

        const arr = [1,2,3,4,5];
        const [first, others] = arr;
        console.log('arr===', first, others);

        const url = 'http://www.baidu.com?page=1&size=100';
        const [params1, params2] = url.split('?');
        console.log('url===', url.split('?'));
        console.log('url===', params1, params2);

        let { keys, values, entries } = Object;
        const obj1 = {100: 'a', 20: 'b', 7: 'c'};
        console.log('keys===', keys(obj1));
        console.log('values===', values(obj1));
        console.log('entries===', entries(obj1));
        // for(let key of keys(obj1)){
        //     console.log(key);
        // }
        // for(let key of values(obj1)){
        //     console.log(key);
        // }
        //
        // for(let key of entries(obj1)){
        //     console.log(key);
        // }


    },
};
</script>
<style lang="less" scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    // background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    // background-color: #d3dce6;
  }
</style>

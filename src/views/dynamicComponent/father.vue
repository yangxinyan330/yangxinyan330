<template>
    <!-- 动态组件 -->
    <div class="echartPage">
        <div v-for="item in componentType" :key="item.id">
            <component :is="item.type" :clearable="true" />
        </div>
    </div>
</template>

<script>
import sonImg from './son1.vue';
import sonText from './son2.vue';
import sonVideo from './son3.vue';
export default {
    components: {
        sonImg,
        sonText,
        sonVideo
    },
    data(){
        return {
            list: [
                { id: 1, type: 'img' },
                { id: 2, type: 'video' },
                { id: 3, type: 'text' },
                { id: 4, type: 'img' },
                { id: 5, type: 'text' },
            ]
        };
    },
    computed: {
        componentType(){
            return this.list.map(m => {
                return {
                    ...m,
                    type: 'son-' + m.type,
                };
            });
        }
    }
};
</script>

<style lang="less" scoped></style>

<template>
    <div class="center">
        <!-- <bottom v-bind="$attrs" v-on="$listeners" /> -->
        <!-- <el-dialog
            v-bind="$attrs"
            :title="$attrs.title"
            :visible.sync="$attrs.visible"
            v-on="$listeners"
            @close="$listeners.close()"
        >
            <slot name="content" />
        </el-dialog> -->
        <el-button @click="handleClick">
            改变
        </el-button>
    </div>
</template>

<script>
// import bottom from './bottom.vue';
export default {
    components: {
        // bottom
    },
    props: {
        myText: { type: String, default: () => '' }
    },
    data(){
        return {
            // mytext: '111'
        };
    },
    mounted(){
        console.log(this.$attrs);
        console.log(this.$listeners);
    },
    methods: {
        handleClick(){
            this.$emit('update:my-text', 'yes it is');
        }
    }
};
</script>

<style lang="less" scoped>

</style>

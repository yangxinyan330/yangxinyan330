<template>
    <div class="echartPage">
        <div id="video-container" />
    </div>
</template>

<script>
import EZUIKit from 'ezuikit-js';
export default {
    data(){
        return {
            url: 'ezopen://open.ys7.com/F83828680/1.live'
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init(){
            this.player = new EZUIKit.EZUIKitPlayer({
                autoplay: true,
                id: 'video-container',
                accessToken: 'at.4kgvv1o62rijvqtp2e0cnofu9rnkfgz5-60swp8i9sd-1pihkmn-eucmrohmn',
                url: this.url,
                template: 'security', // simple - 极简版;standard - 标准版;security - 安防版(预览回放);voice-语音版；
                width: 800,
                height: 600
            });
        }
    }
};
</script>

<style lang="less" scoped>

</style>

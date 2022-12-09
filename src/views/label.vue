<template>
    <div class="label">
        <abbr title="我是标题">我是...</abbr>
        <mark>高亮标签</mark>
        <mark>高亮标签</mark>
        <mark>高亮标签</mark>
        <mark>高亮标签</mark>
        <div>100<sup>2</sup></div>
        <div>200<sub>2</sub></div>
        <figure>
            <img src="@/assets/images/icon-bg.png" alt="大象" width="200px">
            <figcaption>这是一张大象的照片</figcaption>
        </figure>
        <progress max="100" value="60" />
        <details>
            <summary>点击查看更多</summary>
            <p>我是一段被隐藏的内容</p>
        </details>
        <label> 输入C开头的英文单词：</label>
        <!-- <input list="c_words"> -->
        <el-input v-model="value" list="c_words" />

        <datalist id="c_words">
            <option value="China" />
            <option value="Japan" />
            <option value="China" />
            <option value="China" />
        </datalist>
        <videoPlayer
            ref="videoplayer"
            class="vjs-custom-skin videoPlayer"
            :playsinline="true"
            width="90%"
            :options="playerOptions"
            custom-event-name="changed"
        />
    </div>
</template>

<script>
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';
import 'videojs-flash';
export default {
    name: 'RtmpPlay',
    components: {
        videoPlayer
    },
    data() {
        return {
            playerOptions: {
                width: '800',
                height: '400',
                language: 'zh-CN',
                techOrder: ['flash'],
                muted: true,
                autoplay: true,
                controls: false,// 不显示暂停、声音、进度条组件
                loop: true,
                sources: [{
                    type: 'rtmp/mp4',
                    src: 'rtmp://mobliestream.c3tv.com:554/live/goodtv.sdp' // 网络rtmp流地址
                    // src: 'rtmp://127.0.0.1:8822/live/badao' //本地rtmp流地址
                }],
            }
        };
    },
    mounted() {

    },
    methods: {

    },
};
</script>
<style lang="less" scoped>
    .label{
        mark{
            padding: 10px;
            background: red;
            color: white;
        }
    }
</style>

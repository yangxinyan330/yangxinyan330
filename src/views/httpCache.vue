<template>
    <div class="test-tree container" />
</template>

<script>
export default {
    data() {
        return {

        };
    },
    mounted(){
        /*
            304：代表当前请求内容未发生变化，服务器不会返回网页内容，浏览器直接从缓存加载
            http缓存:
                强制缓存：Cache-Control(服务器通过response headers设置)：max-age=5000s/no-cache
                协商缓存: Lase-Modified/Etag：强制缓存基础上，浏览器第二次发送请求，如果本地缓存和当前资源一致，
                         则返回304状态码(状态未修改)，浏览器直接从本地缓存拿，反之返回最新资源
        */
    }
};
</script>

<style lang="less" scoped></style>

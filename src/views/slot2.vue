<template>
    <div class="child">
        <slot>
            <p>我是默认插槽---子组件</p>
        </slot>
        <slot name="content" />
        <slot name="footer" />
        <slot name="header" text="我是作用域插槽" />
    </div>
</template>

<script>
</script>

<style lang="less" scoped>

</style>

<template>
    <el-popover v-model="showPopover" v-bind="$attrs" :placement="location" width="224" popper-class="poster-popover" trigger="click" class="">
        <div class="poster-popover-title">
            <img :src="iconUrl" alt=""> {{ title }}
        </div>
        <p>{{ text }}</p>
        <div class="poster-popover-btn" style="text-align: right; margin: 0">
            <el-button size="mini" @click="showPopover = false; $emit('handleCancel')">
                {{ leftName }}
            </el-button>
            <el-button :type="btnColor === 'red' ? 'danger' : 'primary'" size="mini" @click="showPopover = false; $emit('handleConfirm')">
                {{ rightName }}
            </el-button>
        </div>
        <el-button slot="reference" type="text">
            {{ btnName }}
        </el-button>
    </el-popover>
</template>

<script>
export default {
    props: {
        location: { type: String, default: () => 'top-start' },
        title: { type: String, default: () => '' },
        text: { type: String, default: () => '' },
        leftName: { type: String, default: () => '取消' },
        rightName: { type: String, default: () => '确定' },
        btnName: { type: String, default: () => '' },
        btnColor: { type: String, default: () => 'yellow' },
        iconUrl: { type: String, default: () => '' },
    },
    data() {
        return {
            showPopover: false,
        };
    },
};
</script>
<style lang="less">
.poster-popover{
  width: 230px !important;
  .poster-popover-title{
    color: #222222;
    font-size: 16px;
    line-height: 1;
    margin-bottom: 12px;
    position: relative;
    font-weight: 600;
    display: flex;
    align-items: center;
    img{
      margin-right: 5px;
    }
  }
  &>p{
    padding-left: 25px;
    line-height: 18px;
    font-size: 12px;
  }
  .poster-popover-btn{
    position: relative;
    padding-top: 12px;
    margin-top: 12px !important;
    &::after{
      position: absolute;
      content: '';
      width: calc(100% + 24px);
      border-top: 1px solid #E5E5E5;
      left: -12px;
      top: 0;
    }
  }
}
</style>

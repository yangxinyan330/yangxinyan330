<template>
    <div>
        <el-popover v-model="showPopover" v-bind="$attrs" :placement="location" :title="title" width="224" :popper-class="`poster-popover ${iconRed === 'red' ? 'icon-red' : ''}`" trigger="click" class="">
            <p>{{ text }}</p>
            <div class="poster-popover-btn" style="text-align: right; margin: 0">
                <el-button size="mini" @click="showPopover = false; $emit('handleCancel')">
                    {{ leftName }}
                </el-button>
                <el-button type="primary" size="mini" @click="showPopover = false; $emit('handleConfirm')">
                    {{ rightName }}
                </el-button>
            </div>
            <el-button slot="reference" type="text">
                {{ btnName }}
            </el-button>
        </el-popover>
    </div>
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
    },
    data() {
        return {
            showPopover: false,
        };
    },
};
</script>
  <style lang="less" scoped>
  .poster-popover{
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #262626;
  .el-popover__title{
  font-weight: 600;
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
  &>p{
  font-size: 12px;
  }
  }
  </style>

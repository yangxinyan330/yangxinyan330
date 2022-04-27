<template>
    <div class="tooltip-content">
        <el-tooltip
            popper-class="my-tooltip-box"
            :disabled="tipsText.length <= rowTextNum * row"
            placement="top"
            :enterable="isEnterable"
        >
            <div slot="content" class="tips-cintent" style="max-width: 300px">
                {{ tipsText }}
            </div>
            <span class="text-line" :style="{ '-webkit-line-clamp': row }">{{ tipsText }}</span>
        </el-tooltip>
    </div>
</template>
<script>
export default {
    props: {
    // 提示文字
        tipsText: {
            type: String,
            default: '',
        },
        // 每行显示多少个文字
        rowTextNum: {
            type: Number,
            default: 1,
        },
        // 文字超过几行出现省略号
        row: {
            type: Number,
            default: 2,
        },
        // 鼠标是否可进入到 tooltip 中
        isEnterable: {
            type: Boolean,
            default: true,
        },
    },
};
</script>
<style lang="less" scoped>
.my-tooltip-box {
  border-radius: 2px;
  background: #555555 !important;
  .popper__arrow {
    border-top-color: #555555 !important;
    &::after {
      border-top-color: #555555 !important;
    }
  }
}
.text-line {
  display: -webkit-box; // 将对象作为弹性伸缩盒模型显示
  -webkit-box-orient: vertical; //设置或检查伸缩盒对象的子元素的排列方式
  text-overflow: ellipsis; // 在多行文本的情况下，用...隐藏超出范围的文本
  word-break: break-all;
  overflow: hidden;
  white-space: normal;
  outline: none;
}
.tips-cintent {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 20px;
}
</style>

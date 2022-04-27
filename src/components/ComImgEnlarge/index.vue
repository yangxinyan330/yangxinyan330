<template>
    <!-- 放大图片 -->
    <div class="my-img-com">
        <span
            v-if="src"
            class="img-hover-enlarge"
            :style="{width: `${width}px`, height: `${height}px`}"
            @click="dialogVisible = true"
        >
            <i class="el-icon-zoom-in" />
            <img
                :style="{width: `${width}px`, height: `${height}px`}"
                :src="src || 'https://img10.dgg.cn/sp/cms/cjci3nswfts0000.png'"
                alt=""
            >
        </span>
        <img
            v-else
            :style="{width: `${width}px`, height: `${height}px`}"
            :src="src || 'https://img10.dgg.cn/sp/cms/cjci3nswfts0000.png'"
            alt=""
        >
        <el-dialog
            custom-class="my-el-dialog-style-custom"
            title=""
            :visible.sync="dialogVisible"
            :append-to-body="true"
        >
            <img style="width: 100%" :src="src" alt="">
        </el-dialog>
    </div>
</template>
<script>
export default {
    props: {
        src: {
            type: String,
            default: () => {
                return '';
            },
        },
        width: {
            type: [String, Number],
            default: () => {
                return 60;
            }
        },
        height: {
            type: [String, Number],
            default: () => {
                return 60;
            }
        }
    },
    data() {
        return {
            dialogVisible: false,
        };
    },
    methods: {},
};
</script>
<style lang="less" scoped>
.my-el-dialog-style-custom {
  display: inline-block;
  width: auto;
  max-width: 60%;
  overflow: hidden;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 0 !important;
  .el-dialog__body {
    text-align: center;
  }
  img {
    // max-width: 415px;
  }
}
</style>
<style lang="less" scoped>
.my-img-com {
  .img-hover-enlarge {
    display: block;
    position: relative;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
    &::before {
      display: none;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .el-icon-zoom-in {
      display: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
    }
    &:hover {
      &::before {
        display: block;
      }
      & .el-icon-zoom-in {
        display: block;
      }
    }
  }
}
</style>

<template>
    <div class="pc-card table-box">
        <div v-if="title" class="card-title">
            {{ title }}
        </div>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        title: { type: String, default: () => '' }
    }
};
</script>

<style lang="less" scoped>
  .pc-card{
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.20);
    padding: 20px;
    &:not(:first-child){
      margin-top: 12px;
    }
    .card-title{
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #262626;
      border-bottom: 1px solid #E5E5E5;
      padding-bottom: 12px;
      margin-bottom: 12px;
    }
  }
  .table-box {
    margin-top: 12px;
    background-color: #fff;
    ::v-deep .el-tabs__item{
      height: 48px;
      line-height: 48px;
    }
    ::v-deep .el-table{
      .iconfont2 {
        font-size: 14px;
        color: #8c8c8c;
      }
      th > .cell {
        font-size: 12px;
        color: #666666;
        font-weight: bold;
      }
      .el-button {
        font-size: 12px;
      }
    }
    .table-head {
      padding: 20px 20px;
      .el-button {
        padding: 7px 12px;
        font-size: 12px;
        margin-left: 6px;
      }
      .el-button:first-child {
        margin-left: 0px;
      }
    }
    .table-style {
      .el-table-column--selection .cell {
        padding-left: 12px;
      }
      .el-button {
        margin-left: 6px;
        font-size: 12px;
      }
      .el-button:first-child {
        margin-left: 0px;
      }
    }
  }
  ::v-deep .el-pagination {
    margin-top: 10px;
    padding-bottom: 29px;
    padding-right: 20px;
  }
</style>

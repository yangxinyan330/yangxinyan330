<template>
    <div>
        <el-dialog :title="title" :visible="dialogVisible" :width="width" :close-on-click-modal="false" @close="$emit('closeDialog', 'cancel')">
            <slot />
            <span slot="footer" class="dialog_footer">
                <div class="dialog_btn">
                    <span v-if="isCancel" class="dialog_btn_cancel" @click="$emit('closeDialog', 'cancel')">{{ cancelTxt }}</span>
                    <span v-if="isComfirm" class="dialog_btn_comfirm" @click="$emit('closeDialog', 'confirm')">{{ comfirmTxt }}</span>
                </div>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '提示'
        },
        width: {
            type: String,
            default: '520px'
        },
        dialogVisible: {
            type: Boolean,
            default: true
        },
        isCancel: {
            type: Boolean,
            default: true
        },
        isComfirm: {
            type: Boolean,
            default: true
        },
        cancelTxt: {
            type: String,
            default: '取消'
        },
        comfirmTxt: {
            type: String,
            default: '确定'
        },

    },
};
</script>

<style lang="less" scoped>
	.dialog_btn {
		text-align: center;
		span {
			display: inline-block;
			width: 90px;
			height: 28px;
			text-align: center;
			border-radius: 3px;
			line-height: 28px;
			font-size: 12px;
			cursor: pointer;
			background: #c6494e !important;
            margin: 0 10px;
		}

		span.dialog_btn_cancel {
			border: 1px solid #ebebeb;
			color: #666;
			margin-right: 20px;
			background: white !important;
		}

		span.dialog_btn_comfirm {
			background: #b81b22;
			color: #fff;
		}
	}
</style>

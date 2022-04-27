<template>
    <div class="sp-upload">
        <el-upload
            ref="upload"
            action="https://dspapi.shupian.cn/api/oss/v1/upload"
            list-type="picture-card"
            :limit="limit"
            :on-preview="handlePictureCardPreview"
            :on-exceed="hanldeExceed"
            :on-change="changeFileList"
            :on-remove="handleRemove"
            :auto-upload="false"
            :on-success="uploadSuccess"
            :on-error="uploadFail"
            :data="{ uploadatalog }"
            :file-list="callBackFileList"
            :disabled="disabled"
            :multiple="multiple"
        >
            <div slot="file" slot-scope="{file}" class="picture-item-wrapper">
                <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url"
                    alt=""
                >
                <span class="el-upload-list__item-actions">
                    <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                    >
                        <i class="el-icon-zoom-in" />
                    </span>
                    <!-- 是否需要裁剪 -->
                    <span
                        v-if="!disabled && isCut"
                        class="el-upload-list__item-edit"
                        @click="handlePictureCropper(file)"
                    >
                        <i class="el-icon-edit-outline" />
                    </span>
                    <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="$refs.upload.handleRemove(file)"
                    >
                        <i class="el-icon-delete" />
                    </span>
                </span>
            </div>
            <i class="el-icon-plus" />
        </el-upload>
        <p v-if="tips !== ''" class="tips">
            {{ tips }}
        </p>
        <el-dialog custom-class="my-el-dialog-style-custom" :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <!-- <image-cropper
            :visible.sync="imageCropperVisible"
            :src="currentCropperImage ? currentCropperImage.url : ''"
            @success="handleImageSliceSuccess"
        /> -->
    </div>
</template>

<script>
import { Dialog, Message, Upload } from 'element-ui';
import { cloneDeep } from 'lodash';

export default {
    name: 'Upload',
    components: {
        [Upload.name]: Upload,
        [Dialog.name]: Dialog,
    },
    props: {
        tips: {
        // 下方的提示说明
            type: String,
            default() {
                return '';
            }
        },
        disabled: {
            type: Boolean,
            default() {
                return false;
            }
        },
        limit: {
        // 最大允许上传个数
            type: Number,
            default() {
                return 1;
            }
        },
        sizeType: {
        // 文件大小单位，M或KB
            type: String,
            default() {
                return 'M';
            }
        },
        limitSize: {
        // 限制文件上传的大小
            type: Number,
            default() {
                return 0;
            }
        },
        fileTypes: {
        // 限制文件上传的类型
            type: String,
            default() {
                return 'png,jpg';
            }
        },
        callBackFileList: {
        // 限制文件上传的类型
            type: Array,
            default() {
                return [];
            }
        },
        multiple: {
            type: Boolean,
            default: false
        },
        isCut: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            imageCropperVisible: false,
            imageCutSrc: 'https://cdn.shupian.cn/sp-pt/wap/images/ero8wgat28o0000.jpeg',
            addImgDom: null,
            uploadatalog: 'sp/cms',
            resData: [], // 上传成功的图片数据
            fileListLength: 0,
            cloneFileList: [], // 外面传过来回显的数据
            selfFileList: [], // 本地上传的数据
            // 当前预览和裁剪的图片
            currentCropperImage: null
        };
    },
    watch: {
        resData(val) {
        // 成功上传的文件
            if (this.fileListLength !== 0 && val.length === this.fileListLength) {
                console.log(999);
                this.$emit('uploadCallBack', val);
                let arr = cloneDeep(val, true);
                this.cloneFileList = [];
                arr.forEach((item) => {
                    this.cloneFileList.push({
                        name: item,
                        url: item
                    });
                });
                // this.cloneFileList = cloneDeep(val)
            }
        },
        callBackFileList(val) {
        // 回显的图片列表
            if (val.length) {
                this.cloneFileList = cloneDeep(val, true);
            }
        },
        cloneFileList(val) {
            if (val.length === this.limit) {
                this.addImgDom.style.display = 'none';
            }
        }
    },
    mounted() {
        this.addImgDom = this.$el.querySelector('.el-upload--picture-card');
        if (this.callBackFileList.length) {
            this.cloneFileList = cloneDeep(this.callBackFileList, true);
            this.fileListLength = this.cloneFileList.length;
        }
    },
    methods: {
        hanldeExceed() {
        // 超出了数量限制
            this.$emit('hanldeExceed');
        },
        changeFileList(file, fileList) {
        // 文件发生改变,添加上传成功等
            if (this.sizeType.toLocaleUpperCase() === 'M' && file.size > this.limitSize * 1024 * 1024) {
                Message.error(`文件大小限制${this.limitSize}M,请重新上传`);
                fileList.splice(-1, 1);
                return;
            } else if (this.sizeType.toLocaleUpperCase() === 'KB' && file.size > this.limitSize * 1024) {
                Message.error(`文件大小限制${this.limitSize}KB,请重新上传`);
                fileList.splice(-1, 1);
                return;
            }
            if (!this.checkFileType(file)) {
                Message.error(`仅支持${this.fileTypes}格式,请重新上传`);
                fileList.splice(-1, 1);
                return;
            }
            this.fileListLength = fileList.length;
            if (fileList.length >= this.limit) {
                this.addImgDom.style.display = 'none';
            }
            this.selfFileList = fileList;
            this.$emit('fileChange', file, fileList, 'add', this.$refs.upload);
        },
        handleSubmit() {
            if (
                this.cloneFileList.length
          && (
              this.selfFileList.length === 0
            || this.selfFileList.length === this.cloneFileList.length
          )
            ) {
                this.$emit('uploadCallBack', [...this.getCallBackFileListUrls(this.cloneFileList)]);
                return;
            }
            if (this.cloneFileList.length) {
                this.resData = [...this.getCallBackFileListUrls(this.cloneFileList)];
            }
            this.$refs.upload.submit();
        },
        uploadSuccess(response) {
        // 上传成功
            let url = response.data.url; // 上传到oss后的url
            this.resData.push(url);
        },
        uploadFail(err) {
        // 上传失败
        // console.log(err)
            this.resData.push('err', { err });
        },
        handleRemove(file, fileList) {
        // 删除文件
            setTimeout(() => {
                if (fileList.length < this.limit) {
                    this.addImgDom.style.display = 'inline-block';
                }
            }, 600);
            this.fileListLength = fileList.length;
            let _index = this.cloneFileList.findIndex((item) => item.url === file.url);
            if (_index !== -1) {
                this.cloneFileList.splice(_index, 1);
            }
            if (fileList.length === 0) {
                this.cloneFileList = [];
            }
            this.selfFileList = fileList;
            this.$emit('handleRemove', file, fileList);
            this.$emit('fileChange', file, fileList, 'remove');
        },
        handlePictureCardPreview(file) {
        // 点击预览某个图片
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
            this.$emit('handlePictureCardPreview', file);
        },
        checkFileType(file) {
        // 检测文件类型正确
            let type = file.name.split('.').slice(-1)[0];
            let arr = this.fileTypes.split(',');
            let index = arr.findIndex((item) => {
                return type.toLocaleUpperCase() === item.toLocaleUpperCase();
            });
            return index != -1;
        },
        clearFileList() {
        // 清空上传图片列表
            this.$refs.upload.clearFiles();
            this.resData = [];
            this.addImgDom.style.display = 'inline-block';
        },
        getCallBackFileListUrls(list) {
            let urls = [];
            list.forEach((item) => {
                urls.push(item.url);
            });
            return urls;
        },
        handlePictureCropper(file) {
            this.currentCropperImage = file;
            this.imageCropperVisible = true;
        },
        // 裁剪成功后返回文件
        handleImageSliceSuccess(rowFile) {
        // 删除裁剪前文件
            this.$refs.upload.handleRemove(this.currentCropperImage);
            // 添加裁剪后文件
            this.$refs.upload.handleStart(rowFile);
        }
    }
};
</script>

<style lang='less' scoped>
  ::v-deep .el-upload--picture-card {
    background-color: #eee;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
  }

  ::v-deep .el-upload-list__item {
    outline: none;
  }

  ::v-deep .el-upload-list--picture-card .el-upload-list__item {
    border-radius: 2px;
    margin-bottom: 0;
  }

  .sp-upload {
    > div {
      line-height: 1;
    }

    .picture-item-wrapper {
      height: 100%;
    }

    .tips {
      margin-top: 8px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 17px;
    }
  }
</style>

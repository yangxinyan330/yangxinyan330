<template>
    <div>
        <el-form
            ref="mainForm"
            :model="formData"
            label-position="right"
            label-width="100px"
        >
            <upload
                ref="templateUpload"
                :call-back-file-list="callBackFileList"
                :limit="2"
                :limit-size="2"
                :multiple="true"
                file-types="png,jpg,jpeg"
                tips="仅支持jpg;png;jpeg图片格式，大小限制2MB"
                @uploadCallBack="uploadCallBack"
                @fileChange="handleFileChange"
            />
            <el-button @click="handlePublish">
                上传
            </el-button>
        </el-form>
    </div>
</template>

<script>
import Upload from '@/components/ComUploadImg';
export default {
    components: {
        Upload
    },
    data(){
        return {
            callBackFileList: [],
            formData: {
                imageList: []
            }
        };
    },
    methods: {
        handlePublish(){
            this.$refs['mainForm'].validate(async(valid) => {
                if (valid) {
                    try {
                        this.loading = true;
                        this.$refs['templateUpload'].handleSubmit();
                    } catch (err) {
                        this.loading = false;
                        this.$message.warning(err.message);
                    }
                }
            });
        },
        async uploadCallBack(resp) {
            try {
                for (let i = 0; i <= resp.length; i++) {
                    if (typeof resp[i] === 'object') {
                        this.$message.error('图片上传失败，请重试！');
                        return;
                    }
                }
                this.formData.imageList.forEach((v, index) => {
                    v.imageUrl = resp[index];
                });
                console.log('上传成功',this.formData.imageList);
            } catch (err) {
                this.$message.warning(err.message);
            }
        },
        async handleFileChange(file, fileList) {
            // 在模板选择改变后获取图片尺寸
            // eslint-disable-next-line consistent-this
            let _this = this;
            this.formData.imageList = await Promise.all(
                fileList.map((v) => {
                    return new Promise((resolve) => {
                        if (v.imageSizeLength) {
                            resolve(v);
                            return;
                        }
                        let height, width;
                        let previous = _this.formData.imageList.filter((x) => x.uid === v.uid);
                        if (previous.length) {
                            height = previous[0].imageSizeLength;
                            width = previous[0].imageSizeWidth;
                            resolve({
                                uid: v.uid,
                                imageSizeLength: height,
                                imageSizeWidth: width
                            });
                        } else if (window.FileReader) {
                            let reader = new FileReader();
                            reader.readAsDataURL(v.raw);
                            reader.onloadend = (e) => {
                                let img = new Image();
                                // 改变图片的src
                                img.src = e.target.result;
                                img.onload = () => {
                                    resolve({
                                        uid: v.uid,
                                        imageUrl: v.url,
                                        imageSizeLength: img.height,
                                        imageSizeWidth: img.width,
                                    });
                                };
                            };
                        }
                    });
                })
            );

            this.$refs['mainForm'].validateField('imageList');
        }
    }
};
</script>

<style lang="less" scoped>
.banner_fileUp{
	position: relative;
	display: inline-block;
	&.result{
		display: block;
	}
	img{
		width: 140px;
		height: 78px;
		vertical-align: middle;
	}
	.txt{
		position:relative;
		.change_banner{
		right: 0;
		}
	}
	.change_banner{
		position: absolute;
		font-style: normal;
		right: -40px;
		bottom: 0;
		color: #3498db;
		cursor: pointer;
	}
	.hide_up{
		opacity: 0;
		width: 30px;
	}
	span{
		display: inline-block;
		width: 78px;
		height: 31px;
		text-align: center;
		line-height: 31px;
		background: #dcdfe6;
		font-size:14px;
		color: #333333;
	}
	.fileUp{
		position: absolute;
		width: 78px;
		height: 31px;
		left: 0;
		top: 0;
		opacity: 0;

	}
}
</style>

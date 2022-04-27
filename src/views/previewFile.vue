<template>
    <div>
        <div v-if="fileType === 'img'">
            <ComImgEnlarge
                class="videoPoster"
                :src="fileObj.fileUrl"
                alt=""
                width="100"
                height="100"
            />
        </div>
        <div v-else>
            <iframe :src="fileUrl(fileType)" width="600px" height="600px" />
        </div>
        <el-button v-preventReClick type="primary" @click="fileDown(fileType)">
            下载附件
        </el-button>
    </div>
</template>

<script>
import { isPicture, isExcel } from '../utils/index.js';
export default {
    data() {
        return {
            fileObj: {}, // 文件信息
            fileType: '', // 文件类型
            lastName: '', // 文件尾缀
            fileList: [
                { id: 5, fileName: 'word文件', fileUrl: 'https://imsfile.xinchao.com/supper/doc/2021/07/s1mvbkn7-kjzp-s33q-pzlz-3neav3nbq2h2.docx' },
                { id: 5, fileName: 'excel文件', fileUrl: 'https://imsfile.xinchao.com/supper/doc/2021/07/ui5roftr-9yg1-5owo-5xnz-7zxlxauftk85.xlsx' },
                { id: 4, fileName: 'pdf文件', fileUrl: 'https://imsfile.xinchao.com/supper/doc/2020/07/bntrjq8m-7of7-tk5m-gctj-pymswwyzstrf.pdf' },
                { id: 3, fileName: 'okr图片', fileUrl: 'http://ims-test.obs.cn-east-2.myhuaweicloud.com/xcmall/pic/2021/01/qq42xh47-tz2a-e1xo-ps8r-1ditqoiw82hh.jpg' }
            ],
        };
    },
    computed: {
        // 文档url
        fileUrl(){
            return function(type){
                return type === 'word' || type === 'excel' ? `https://view.officeapps.live.com/op/view.aspx?src=${this.fileObj.fileUrl}` : this.fileObj.fileUrl;
            };
        },
        // 下载文档
        fileDown(){
            return function(type){
                return type === 'img' ? this.mixinDownImg(this.fileObj.fileUrl, this.fileObj.fileName) : this.mixinDownFile(this.fileObj, this.lastName);
            };
        }
    },
    watch: {
        fileObj: {
            handler(file){
                if(file){
                    let index = file.fileUrl.lastIndexOf('.');
                    let type = file.fileUrl.substr(index + 1);// 获取后缀
                    this.lastName = type;
                    if(isPicture(type)){
                        this.fileType = 'img';
                    }else if(type === 'pdf'){
                        this.fileType = 'pdf';
                    }else if(type === 'doc' || type === 'docx'){
                        this.fileType = 'word';
                    }else if(isExcel(type)){
                        this.fileType = 'excel';
                    }
                }
            },
            deep: true,
        }
    },
    mounted() {
        this.fileObj = this.fileList[3];
    },
};
</script>

<style lang="less" scoped>
    img{
        width: 150px;
    }
</style>

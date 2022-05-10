import { debounce } from 'lodash';
export default {
    data(){
        return {
            pageParams: {
                page: 1,
                pageSize: 10,
            },
            debouncedGetTableData: null,
        };
    },
    async mounted(){
        if(this.tableFun) {
            await this.getTableData(this.tableFun);
        }
    },
    methods: {
        async getTableData(https){
            // 增加防抖功能防止create和beforeRouterEnter反复触发
            this.debouncedGetTableData = this.debouncedGetTableData || debounce(() => {
                let params;
                if (this.otherParams) {
                    params = this.otherParams();
                } else {
                    params = { ...this.formParams, ...this.pageParams };
                    params = this.deleteEmptyParams(params);
                }
                // console.log('参数', params);
                this.$http(https, params).then((res) => {
                    this.tableData = res.slice(0,11) || [];
                }).catch((err) => {
                    this.$message.warning(err.message);
                });
            },300,{ leading: true });
            this.debouncedGetTableData();
        },
        // 删除为空的参数
        deleteEmptyParams(params) {
            let temp = { ...params };
            Object.keys(temp).forEach((key) => {
                if (temp[key] === '') {
                    delete temp[key];
                }
            });
            return temp;
        },
        handleSizeChange(size){
            this.pageParams.page = 1;
            this.pageParams.pageSize = size;
            this.getTableData();
        },
        handleCurrentChange(page){
            this.pageParams.page = page;
            this.getTableData();
        },
        // 重置表单验证
        mixinResetValidate(formName){
            if(this.$refs.formName){
                this.$nextTick(()=>{
                    this.$refs[formName].clearValidate();
                });
            }
        },
        // 重置表单
        mixinResetForm(formName) {
            this.$refs[formName].resetFields();
            // this.getTableData();
        },
        // 删除
        mixinDelete(type, id, https) {
            if (type === 'cancel') {
                this.deleteDialog = false;
            } else {
                this.$http(https, id).then(res => {
                    this.deleteDialog = false;
                    if ((this.total - 1) % 10 === 0) {
                        this.pageParams.page > 1 ? this.pageParams.page-- : this.pageParams.page = 1;
                    }
                    this.getTableData();
                });
            }
        },
        // 滚动  @scroll="handlerScroll($event)"
        mixinScroll($event){
            let e = $event.srcElement;
            let move = 0;
            if(e.scrollTop + e.offsetHeight + move >= e.scrollHeight){
                // this.pageParams.page++;
                this.getTableData();
                // this.$nextTick(() => {
                //     this.$refs.scrollList.scrollTop = this.$refs.scrollList.scrollHeight;
                // });
            }
        },
        // 下载文件
        mixinDownFile(file, type){
            let filePath = file.file_url;
            let fileName = file.file_name;
            let name = fileName.split('.')[0] + `.${type}`;
            if (!filePath) {
                return;
            }
            let xhr = new XMLHttpRequest();
            // debugger;
            xhr.open('GET', filePath, true);
            xhr.responseType = 'blob'; // arraybuffer也可以
            xhr.onreadystatechange = function() {
                // 数据全部返回的判断
                if (xhr.readyState === 4) {
                    let url = window.URL.createObjectURL(new Blob([xhr.response]));
                    // console.log(url);
                    let link = document.createElement('a');
                    link.style.display = 'none';
                    link.href = url;
                    link.setAttribute('download', name);
                    document.body.appendChild(link);
                    link.click();
                }
            };
            xhr.send();
        },
        // 下载图片
        mixinDownImg(imgUrl, name){
            console.log(333, imgUrl);
            const image = new Image();
            // 解决跨域 canvas 污染问题
            image.setAttribute('crossOrigin', 'anonymous');
            image.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = image.width;
                canvas.height = image.height;
                const context = canvas.getContext('2d');
                context.drawImage(image, 0, 0, image.width, image.height);
                // 得到图片的base64编码数据
                const url = canvas.toDataURL('image/png');
                // 生成一个 a 标签
                const a = document.createElement('a');
                // 创建一个点击事件
                const event = new MouseEvent('click');
                // 将 a 的 download 属性设置为我们想要下载的图片的名称，若 name 不存在则使用'图片'作为默认名称
                a.download = name || '图片';
                // 将生成的 URL 设置为 a.href 属性
                a.href = url;
                // 触发 a 的点击事件
                a.dispatchEvent(event);
                // return a;
            };
            image.src = imgUrl;
            image.src = document.getElementById('images').src+'?tamp='+new Date().valueOf();
        },
        // confirm弹窗
        // eslint-disable-next-line max-params
        confirmBox(callback, tips, cancelBtn, sureBtn) {
            return this.$confirm(tips ? tips : '确定此次操作吗?', '提示', {
                confirmButtonText: sureBtn ? sureBtn : '确定',
                cancelButtonText: cancelBtn ? cancelBtn : '取消',
                type: 'warning',
            }).then(async() => {
                callback && callback();
            });
        },
    }
};

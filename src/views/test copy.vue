<template>
    <div ref="fatherRef" class="father-box">
        <div ref="sonRef" class="son-box" :style="{ width: `${eggBgWidth}px` }">
            <img
                id="egg"
                ref="eggRef"
                :src="eggImg"
                :style="{
                    width: `${eggWidth}px`,
                    transform: `translate(-50%,-50%) ${scale}`,
                }"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            eggImg: require('../assets/images/icon-egg-1.png'),
            widthPt: 0, // 左边距
            heightPt: 0, // 下边距
            deg: 0,
            scale: 'scale(1)',
            size: 0,
            eggWidth: 120,
            eggBgWidth: 400,
            mousewheelevt: null
        };
    },
    mounted() {
        this.init();
        setTimeout(() => {
        // 兼容火狐浏览器
            this.mousewheelevt = /Firefox/i.test(navigator.userAgent)
                ? 'DOMMouseScroll'
                : 'mousewheel';
            // 为空间区域绑定鼠标滚轮事件 =》 处理函数是wheelHandle
            console.log('this.$refs.eggRef===', this.$refs.eggRef);
            // 如果你监听了window的scroll或者touchmove事件，你应该把passive设置为true，这样滚动就会流畅很多
            this.$refs.eggRef.addEventListener(this.mousewheelevt, this.wheelHandle);
        }, 1000);
    },
    beforeDestroy() {
    // 取消监听
        this.$refs.eggRef.removeEventListener(
            this.mousewheelevt,
            this.wheelHandle
        );
    },
    methods: {
        /**
         * 鼠标滚动 实现放大缩小
        */
        wheelHandle(e) {
            console.log('e====', e);
            e.preventDefault();
            const ev = e || window.event; // 兼容性处理 => 火狐浏览器判断滚轮的方向是属性 detail，谷歌和ie浏览器判断滚轮滚动的方向是属性 wheelDelta
            // dir = -dir; // dir > 0 => 表示的滚轮是向上滚动，否则是向下滚动 => 范围 (-120 ~ 120)
            const dir = ev.detail ? ev.detail * -120 : ev.wheelDelta;
            // 滚动的数值 / 2000 => 表示滚动的比例，用此比例作为图片缩放的比例
            this.imgScaleHandle(dir / 2000);
        },
        imgScaleHandle(zoom) {
            this.size += zoom;
            if (this.size < -0.5) {
                this.size = -0.5;
            }
            if (this.size > 1) {
                this.size = 1;
            }
            console.log('eggScale===', this.size, typeof this.size);
            console.log('eggSize===', this.$refs.eggRef.style.width, typeof +this.$refs.eggRef.style.width.replace('px', ''));
            const eggWidth = +this.$refs.eggRef.style.width.replace('px', '');
            console.log('缩放后===', eggWidth + eggWidth * this.size);
            this.scale = `scale(${1 + this.size}) rotateZ(${this.deg}deg)`;
        },
        init(){
            let _this = this;
            // 获取元素
            let dv = document.getElementById('egg');
            let er = document.querySelector('.son-box');
            let x = 0;
            let y = 0;
            let l = 0;
            let t = 0;
            let isDown = false;
            // 鼠标按下事件
            dv.onmousedown = function(e) {
                // 获取x坐标和y坐标
                x = e.clientX;
                y = e.clientY;

                // 获取左部和顶部的偏移量
                l = dv.offsetLeft;
                t = dv.offsetTop;
                // 开关打开
                isDown = true;
                // 设置样式
                dv.style.cursor = 'move';

                // 鼠标滚轮 滚动
                dv.addEventListener('mousewheel',function(e) {
                    let step = 5;
                    if(isDown){
                        if(e.wheelDelta == 120){
                            if(dv.clientWidth+step < er.clientWidth){
                                dv.style.width = dv.clientWidth+step+'px';
                                dv.style.height = dv.clientHeight+step+'px';
                            }
                        }else {
                            dv.style.width = dv.clientWidth-step+'px';
                            dv.style.height = dv.clientHeight-step+'px';
                        }
                    }

                });
            };
            // 鼠标移动
            document.onmousemove = function(e) {
                if (!isDown) {
                    return;
                }
                // 获取x和y
                let nx = e.clientX;
                let ny = e.clientY;
                // 计算移动后的左偏移量和顶部的偏移量
                let nl = nx - (x - l);
                let nt = ny - (y - t);

                // 范围与移动

                if(nl >= dv.clientWidth/2 && nl <= er.clientWidth - dv.clientWidth/2){
                    dv.style.left = nl + 'px';
                }

                if(nt >= dv.clientHeight/2 && nt <= er.clientHeight - dv.clientHeight/2){
                    dv.style.top = nt + 'px';
                }

                const fatherRefHeight = _this.$refs.fatherRef.offsetHeight; // 父盒子高度
                const sonRefOffsetTop = _this.$refs.sonRef.offsetTop; // 子盒子距离父级盒子高度
                const eggRefOffsetTop = _this.$refs.eggRef.offsetTop; // 蛋距离子盒子的高度
                const eggRefOffsetHeight = _this.$refs.eggRef.offsetHeight; // 蛋的高度

                // 获取百分比
                _this.offLeftNum = Math.floor(100 * dv.offsetLeft / er.clientWidth) - Math.floor(_this.eggWidth / 2 / _this.eggBgWidth * 100);
                _this.offTopNum = Math.floor(100 - (sonRefOffsetTop + eggRefOffsetTop + eggRefOffsetHeight / 2) / fatherRefHeight * 100);
                console.log('距左===' + _this.offLeftNum, '距下===' + _this.offTopNum);
            };
            // 鼠标抬起事件
            document.onmouseup = function() {
                // 开关关闭
                isDown = false;
                dv.style.cursor = 'default';
            };
        }
    }
};
</script>

  <style lang="less" scoped>
  .father-box {
    margin: auto;
    width: 400px;
    height: 800px;
    background-image: url("../assets//images/icon-incubation-bg.png");
    background-size: 100% 100%;
    position: relative;
    .son-box {
      position: absolute;
      bottom: 20%;
      cursor: pointer;
      width: 100%; /*限定范围宽度*/
      height: 335px; /*限定范围高度*/
      border: 2px solid red;
      #egg {
        position: relative;
        /* width: 150px; */
        /*居中*/
        top: 70%;
        left: 50%;
        /* transform: translate(-50%,-50%); */
        user-select: none; /*取消禁止 图片拖动*/
        -webkit-user-drag: none;
        outline: 2px solid #2a82e4;
      }
    }
  }
  </style>

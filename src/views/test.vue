<template>
    <div ref="figurebox" class="figure-box">
        <!--限定范围盒子-->
        <div id="egg-range" class="egg-range">
            <!--移动图片素材-->
            <img
                id="egg"
                ref="maskBox"
                class="egg"
                :src="eggImg"
                :style="{
                    width: `${eggWidth}px`,
                    left: `${eggLeft}`,
                    bottom: `${eggBottom}%`,
                }"
            >
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            eggImg: require('../assets/images/icon-egg-1.png'),
            size: 0, // 缩放大小
            mousewheelevt: null,
            eggWidth: 100, // 蛋的宽度
            eggLeft: '50%', // 蛋左边距
            eggBottom: 6, // 蛋底边距
        };
    },
    mounted() {
        this.drag();
        setTimeout(() => {
        // 兼容火狐浏览器
            this.mousewheelevt = /Firefox/i.test(navigator.userAgent)
                ? 'DOMMouseScroll'
                : 'mousewheel';
            // 为空间区域绑定鼠标滚轮事件 =》 处理函数是wheelHandle
            // console.log('this.$refs.maskBox===', this.$refs.maskBox);
            // 如果你监听了window的scroll或者touchmove事件，你应该把passive设置为true，这样滚动就会流畅很多
            this.$refs.maskBox.addEventListener(this.mousewheelevt, this.wheelHandle);
        }, 1000);
    },
    methods: {
        handleReturn(){
            this.eggWidth = 100;
            this.eggLeft = `calc(50% - ${this.eggWidth / 2}px)`;
            this.eggBottom = 6;
            let dragBox = document.getElementById('egg');
            dragBox.style.top = 'inherit';
        },
        wheelHandle(e) {
            e.preventDefault();
            const ev = e || window.event; // 兼容性处理 => 火狐浏览器判断滚轮的方向是属性 detail，谷歌和ie浏览器判断滚轮滚动的方向是属性 wheelDelta
            // dir = -dir; // dir > 0 => 表示的滚轮是向上滚动，否则是向下滚动 => 范围 (-120 ~ 120)
            const dir = ev.detail ? ev.detail * -120 : ev.wheelDelta;
            // 滚动的数值 / 2000 => 表示滚动的比例，用此比例作为图片缩放的比例
            this.imgScaleHandle(dir / 2000);
        },
        imgScaleHandle(zoom) {
            this.size += zoom;
            // console.log(this.size)
            if (this.size < -0.5) {
                this.size = -0.5;
            }
            if (this.size > 1) {
                this.size = 1;
            }
            this.eggWidth= 100*(1+this.size);
            let dragBox = document.getElementById('egg');
            if(dragBox.style.width>=150*2){
                dragBox.style.width=300;
            }
            if(dragBox.style.width<=75){
                dragBox.style.width=75;
            }
            if(dragBox.style.width>=207*2){
                dragBox.style.width=414;
            }
            if(dragBox.style.width<=103){
                dragBox.style.width=103;
            }
            dragBox.style.width=this.eggWidth+'px';
            // dragBox.style.height=207*(1+this.size)+'px';

            // dragBox.style.height="auto"
            // dragBox.style.height=dragBox.offsetHeight*(1+this.size)+'px'

            // console.log(this.width,'llll')
        },
        drag() {
            let event1 = false; // 初始化是否鼠标移动
            let dragBox = document.getElementById('egg');
            let pardnode=document.getElementById('egg-range'); // 获取当前元素
            // console.log(dragBox.style.clientHeight)
            // dragBox.style.height=dragBox.offsetHeight+'px'
            dragBox.style.left=pardnode.offsetWidth/2-dragBox.offsetWidth/2+'px';
            // dragBox.style.top= '58%';
            // dragBox.style.transform="translate(-50%,-50%)"

            //   let pardnode = document.getElementById("egg-range");
            let imgMakeBox; // 父盒子
            let moveW = 0; // 移动元素的width
            let moveH = 0; // 移动元素的height
            let parentW = 0; // 父盒子的width
            let parentH = 0; // 父盒子的height
            // 鼠标按下
            dragBox.addEventListener('mousedown', (el) => {
                el.stopPropagation();
                el.stopImmediatePropagation();
                event1 = true;
                imgMakeBox = document.getElementById('egg-range'); // 获取父元素
                moveW = dragBox.offsetWidth;
                moveH = dragBox.offsetHeight;
                parentW = imgMakeBox.offsetWidth; // 父盒子的width
                parentH = imgMakeBox.offsetHeight; // 父盒子的height
                // 算出鼠标相对元素的位置
                let disX = el.clientX - dragBox.offsetLeft;
                let disY = el.clientY - dragBox.offsetTop;
                // 鼠标移动
                document.addEventListener('mousemove', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // dragBox.style.transform='none';
                    // console.log(this.event1);
                    if (!event1) {return false;}
                    // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                    let left = e.clientX - disX;
                    let top = e.clientY - disY;
                    let resW = parentW - moveW; // 父盒子宽减去移动盒子的宽 = 最大可移动的区域
                    let resH = parentH - moveH; // 父盒子高减去移动盒子的高 = 可最大移动的区域
                    left = left >= resW ? resW : left <= 0 ? 0 : left;
                    top = top >= resH ? resH : top <= 0 ? 0 : top;

                    // 移动当前元素
                    let h=pardnode.offsetHeight;
                    let w=pardnode.offsetWidth;
                    dragBox.style.left = left/w*100 + '%';
                    dragBox.style.top = top/h*100 + '%';
                    dragBox.style.bottom = 100 - top/h*100 - dragBox.offsetHeight / pardnode.offsetHeight * 100 + '%';
                    console.log('蛋的宽高===', dragBox.offsetWidth, dragBox.offsetHeight);
                    console.log('左边===' + dragBox.style.left, '下边===', 100 - top/h*100 - dragBox.offsetHeight / pardnode.offsetHeight * 100 + '%');
                });
            });
            // 鼠标抬起事件
            document.onmouseup = () => {
                event1 = false;
                let dragBox = document.getElementById('egg');
                this.eggLeft = dragBox.style.left;
                this.eggBottom = dragBox.style.bottom;
            };
        },
    },
};
</script>

  <style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .figure-box {
    margin: auto;
    /*图片比例 1:2*/
    width: 400px;
    height: 800px;
    background-image: url("../assets//images/icon-incubation-bg.png");
    background-size: 100% 100%;
    position: relative;
  }
  #egg-range {
    position: absolute;
    width: 100%; /*限定范围宽度*/
    height: 400px; /*限定范围高度*/
    border: 2px solid red;
    overflow: hidden;
    bottom: 20%;
  }
  #egg {
    /* outline: 2px solid #2a82e4; */
    cursor: move;
    /* width: 100px; */
    /* height: 207px; */
    cursor: pointer;
    padding: 1px;
    /* width: 100px; */
    /* height: 100px; */
    position: absolute;
    /* top: ; */
    /* left: 50%; */
    /* transform: translate(-50%,-50%); */
    /* background-color: red; */
  }
  </style>

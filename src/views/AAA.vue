<template>
    <div class="form container">
        <el-button @click="handleHash">
            hash修改路径
        </el-button>
        <el-button @click="handleHistory">
            history修改路径
        </el-button>
        <div class="test">
            <span>我是</span>
            <span>小明</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '王麻子'
        };
    },
    mounted(){
        /*
            hash和history区别：
                hash: 自带#, (location.hash)前端自己控制路由; 请求时#号后边不会包含在请求中; 不会修改浏览器历史记录栈;
                history: (history.pushState)把路由交给后端托管并返回; ngix配置把index.html返回
        */
        /*
            箭头函数和普通函数区别：
                箭头函数: 在哪里定义函数，this指向谁; 普通函数的简写; 继承在定义时所处的外部环境的this, 永远不变
                    如果箭头函数只有返回值，可不写return
                普通函数：谁调用这个函数，this指向谁;
       */
        /*
            css兼容性：
                _color(IE6及以下)
                *+html h1(IE7)
                1、不同浏览器默认的内外边距不同:
                    *{ padding: 0, mairgin: 0 };
                2、图片IE9有边框:
                    img{ border: none }
                3、IE6/7图片下有空隙:
                    img{ display: block; }
                4、ul标签在firfox中默认有padding,在IE中只有maigin有值
                    ul{ margin: 0, padding: 0 }
                5、IE6及以下浮动元素浮动双倍:
                    不用margin, 用padding;
                6、IE6及以下个别块元素有默认高度:
                    font-size: 0;
                7、a标签蓝色边框：
                    a{ outline: none }
                8、IE6/7不支持display: inline-block
                    { display: inline-block; *display: inline; }
                9、IE6/7中img标签与文字放在一起，line-height失效:
                    都设置float
                10、a标签伪类顺序:
                    link/visited/hover/active
                13、IE在li指定高度后, 排版错误:
                    设置line-height
                14、ul/li浮动后，在div之外:
                    ul后加<div style="clear:both;"></div>
                15、div嵌套p标签时, 出现空白行:
                    li{ display: inline; }
                16、IE6默认div高度为第一个字体显示的高度:
                    { overflow: hidden; line-height: 1px; }
                17、在chorme中字体不能小于10px:
                    div{ font-size: 12px; transform: scale(0.8) }
                18、IE6不支持min-height:
                    { min-height: 100px; _height: 100px; }
                19、IE9以下不支持opacity:
                    用filter
        */
        /*
            js兼容性:
                1、滚动事件:
                    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                2、阻止冒泡:
                    if(e.stopPropagetion){
                        e.stopPropagation();
                    }else{
                        e.cancelBubble = true;
                    }
                3、监听器:
                    if(target.addEventListener){
                        target.addEventListener('click', fun, false);
                    }else{
                         target.attachEvent('onclick', fun);
                    }
                4、event.pageX:
                    let x = event.x ? event.x : event.pageX;
       */
        /*
            移动端兼容性:
                1、click300ms延时:
                    import FastClick from 'fastclick';
                    if ('addEventListener' in document) {
                        document.addEventListener('DOMContentLoaded', function() {
                            FastClick.attach(document.body);
                        }, false);
                    }
                2、移动端点击高亮效果:
                    *{ -webkit-tap-highlight-color: rgba(0,0,0,0) }
                3、ios在input输入时第一个字母大写:
                    <input autocapitalize="off" autocorrect="off"/>
                4、ios中overflow: scroll滑动卡顿:
                    -webkit-overflow-scrolling: touch;
                5、禁止ios识别长串数字为电话/安卓识别邮箱:
                    <meta content="telphone=no" name="format-detection"/>
                    <meta content="email    =no" name="format-detection"/>
                6、禁止ios弹窗各种操作窗口:
                    -webkit-touch-callout: none;
                7、禁止ios和安卓选中文字:
                    -webkit-user-select: none;
                8、安卓取消输入语音按钮
                    input::-webkit-input-speech-button{ display: none; }
                9、ios下input=button属性，disabled=true会出现样式文字和背景异常:
                    opacity: 1;
                10、图片上传时兼容低端手机:
                    input加入accept="image/*" multiple
                11、ios中转时间戳失败:
                    把时分秒去掉再转
        */

        /*
            虚拟DOM和真实dom:
                数据改变 => 虚拟dom(计算变更) => 操作真实DOM => 试图更新
                虚拟DOM: 用js模拟的对象DOM树, 操作这个对象要比操作真实DOM树便捷很多(diff算法)，搞完之后统一插入DOM树中，
                        消耗性能低，频繁修改虚拟DOM会一次性修改真实DOM，最后再真实DOM重绘重排，减少过多DOM节点重绘重排
                真实DOM：频繁操作引起重绘重排，很消耗性能(obj对象，包括tag标签名/attrs属性/children子元素)
            vue和jquery区别：
                jquery: 很好的解决了原生兼容性问题; 操作原生DOM, 浪费性能远远低于mvvm, 体积太大, 选择器在mvvm框架时代也不需要直接获取DOM, 也就无优势了,
                        动画效果方面也被css3和animateCss替代了, ajax也被axios替代
                        原理: 通过XmlHttpRequest发送异步请求，从服务器获取数据，用javascript操作DOM; 达到无刷新的效果
                        参数: url、dataType(返回格式)、async(是否异步)、type(post/get)、data(请求参数)、beforeSend(请求前的处理)、success/complete/error
            vue怎么使用虚拟DOM:
                1、所有的template都会编译成render
                2、render会根据当前的数据项，生成虚拟DOM
                3、再转真实DOM
            diff算法:
                只比较同级。遍历新旧虚拟DOM，同层级比较标签名和key值，如果相同，则认为是同一个节点则深度比较，如果不同则进行更新;
                1、遍历老虚拟DOM
                2、遍历新虚拟DOM
                3、重新排序
                patch函数: 对比新旧虚拟DOM，做删除、新增、更新操作
                patchVnode函数: 对比新旧vnode，属性/文本/子节点更新
                updateChildren函数: 对比新旧vnode的children做处理再排序
            W3C和web标准:
                web标准: 结构(html标签) + 表现(css) + 行为(js)
                w3c: 对web标准提出规范性要求
                    1、标签首字母小写
                    2、标签要闭合
                    3、尽量使用外链css和js,提高页面渲染速度
                    4、少用行间样式，class和id命名语义化
                标准浏览器和IE浏览器
                制作了一系列标准，所有浏览器厂商按照此标准来制作，就能保证项目在浏览器正常运行, IE(微软)就不遵循此标准;
        */

        /*
            scoped原理: 给节点新增自定义属性(data-v-xxx), 根据div[data-v-xxx]选择器添加样式
            for/forEach/map/filter/some/every的区别:
                for: 可以用break;跳出循环
                forEach: 不能跳出; 返回原数组
                map/filter: 返回新数组，不影响原数组;
                some: 某一项满足就返回true;不影响原数组
                every: 每一项满足就返回true;不影响原数组
        */

        let obj = {
            name: '张三',
            obj2: {
                name: '李四',
                fun: () =>{
                    console.log('this---1', this.name);
                    // console.log('我的名字111===' + this.name);
                    setTimeout(function(){
                        console.log('this---2', this.name);
                        // console.log('我的名字222===' + this.name);
                        setTimeout(function(){
                            console.log('this---3', this.name);
                        }, 500);
                    },500);
                }
            }
        };
        obj.obj2.fun();

        let id = 'Global';
        function fun1() {
            // setTimeout中使用普通函数
            setTimeout(function(){
                console.log(this.id);
            }, 2000);
        }
        function fun2() {
            // setTimeout中使用箭头函数
            setTimeout(() => {
                console.log(this);
            }, 2000);
        }
        fun1.call({id: 'Obj'}); // 'Global'
        fun2.call({id: 'obj'}); // 'Obj'

        let arr = [
            { id: 1, name: '张三--1' },
            { id: 2, name: '张三--2' },
            { id: 3, name: '张三--3' },
            { id: 2, name: '张三--4' },
        ];
        let objs = {
            id: 2, name: '王麻子'
        };
        arr.forEach((m, index) => {
            // return m.id === objs.id ? objs : m;
            if(m.id === objs.id){
                m.isType = true;
            }
        });
        for(let i of arr){
            if(i.id === 2){
                console.log('index----', i.name);
                // return;
                break;
            }
        }
        console.log('当前arr' ,arr);

        console.log('some----newArr', arr.every(m => m.id > 0));
        console.log('oldArr', arr);

    },
    methods: {
        handleHash(){
            window.location.hash = '#/CCC';
        },
        handleHistory(){
            history.pushState({}, '', '#/DDD');
        },
    }
};
</script>
<style lang="less" scoped>
    .test{
        overflow: hidden;
        span{
            margin: 0 10px;
        }
    }
</style>

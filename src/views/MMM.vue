<template>
    <div class="MMM">
        <!-- <div v-html="val" /> -->
        <child>
            <div>我是默认插槽---父组件</div>
            <template #content>
                <div>我是具名插槽---content</div>
            </template>
            <template #footer>
                <div>我是具名插槽---footer</div>
            </template>
            <template #header="defaultText">
                <div>作用域插槽内容：{{ defaultText.text }}</div>
            </template>
        </child>
    </div>
</template>

<script>
import child from './MMM2.vue';
export default {
    components: {
        child
    },
    data(){
        return {
            val: '<span>1111</span>'
        };
    },
    mounted(){

        /*
            HTML5新特性？移除了哪些？如果处理新标签兼容性问题？如果区分HTML5和HTML：
                移除：font、basefont、center...
                兼容性：document.createElement
                HTML5：DOCTYPE声明、新增的结构元素(header/footer)
                1：语义标签：header,footer,nav,section,main
                2：增强型表单：input(type=date/datetime/month...)   progress   min/max/placehoder
                3：音频和视频：audio(mp3)/video(mp4)
                4：canvas绘图：
                5：地理定位：getCurrentPosition()获取用户位置
                6：拖放API：<div draggable="true"></div>任何元素都能够拖放
                7：WebWorker：使用Worker类加载一个javascript文件来开辟新线程
            块级元素、行内元素和行内块级元素有哪些？
                块级元素：div、p、h1...（独占一行，可设置全部属性）
                行内元素：span、a、i...（非独占一行，margin/padding无效）
                行内块级元素：img、input、select...（非独占一行，可设置全部属性）
                block：块级元素
                inline：行内元素
                inline-block：行内块级元素
            如何实现浏览器多个标签页之间的通信：
                1：WebSocket：浏览器 => 服务器
                2：SharedWorker
                3：localstorage
            浏览器内核：内核分为渲染引擎和JS引擎
                渲染引擎：获取网页内容（HTML/图像），整理(CSS)，然后显示
                JS引擎：解析和执行javascript来实现动态效果
                1：Webkit：Safari，Chrome
                2：Gecko：火狐
                3：Trident：IE，360
                4：Presto：Opera7及以上
            浏览器输入网址到渲染过程：
                1：浏览器域名解析
                2：DNS解析
                3：建立浏览器和服务器的TCP链接
                4：浏览器发送HTTP请求
                5：服务器处理请求并返回资源
                6：浏览器解析并渲染
             页面导入样式时，使用link和@import有什么区别？
                link：加载css，页面加载时会同时加载多个css，js可控制dom修改样式;
                @import：只能用于加载css，页面加载时会等页面加载完再加载css，js不可控制dom修改样式;
            简述一下你对HTML语义化的理解？
                用正确的标签做正确的事情，内容结构化，结构清晰，便于浏览器、搜索引擎解析。
            什么是盒子模型：所有的HTML标签就是盒子模型（content、padding、border、margin）
                盒子尺寸= content + padding + border
            什么是响应式设计？为什么要做响应式设计？响应式设计的基本原理是什么？
                能自动响应用户的设备环境；
                高效，节约成本，维护方便
                通过媒体查询检测不同的设备屏幕尺寸做处理，页面头部必须有meta声明viewport
        */
        /*
            CSS3新特性：
                1：选择器：first-child/last-child...
                2：CSS边框：border-radius
                3：transform转换：scale缩放/translate位移/rotate旋转
                4：弹性盒子：disaplay:flex
                5：阴影：box-shadow
                6：媒体查询：@media
                7：模型：box-sizing
            CSS三角形：
                宽高：0;
                border-style: solid;
                border-color: transparent red;
                border-width: 100px 0 100px 100px;
            CSS清除浮动的方法：
                1：给父级定义高度或overflow:hidden
                2：伪类:after(不显示但有占位)
                3：clear:both
            Sass/Scss/Less/Css区别：
                Sass/Scss：写法几乎相同，Sass没有分号和大括号; 支持 if else/for循环等
                变量符：Scss：$   Less：@
                作用域：Scss：编译后颜色只有三位(#fff);  Less：编译后颜色六位(#ffffff);
                工具库：Scss：Compass   Less：Bootstrap
            div居中方法：
                1：给宽高，position: absolute, top/left: 50%, transfrom: translate(-50%，-50%);
                2：给宽高，position: absolute, top/left: 50%, margin-left/margin-top: 宽高一半的值
                3：给宽高，position: absolute, 上下左右：0或者相等值, margin: auto;
            全屏滚动的原理和用到的CSS特性：
                1：原理：类似轮播，一屏或者指定区域只展示少许，通过transfrom进行的x或y轴定位，
                2：css：overflow: hidden; transition
            CSS选择符有哪些？选择符优先级？哪些属性可以继承？新增的伪类有哪些？
                选择符：id、class、标签、子选择器、通配符选择器、伪类选择器
                优先级：id > class > 标签 > 后台 > 子
                可继承：color、font-size、font-family
                不可继承：width、height、margin、paddind
                新增伪类：nth-child(2)、only-child
            position有哪些值？都基于什么定位？
                relative：相对定位，相对于其在普通流中的位置进行定位；
                absolute：绝对定位，最接近的父元素定位；
                fixed：固定定位，相对于浏览器窗口进行定位；
                static(默认值)：没有定位；
        */
        /*
            js数据类型：String/Number/Boolean/null/undefined/Array/Object/Symbol/BigInt
                基本类型：String/Number/Boolean/null/undefined
                引用类型：object(function/Array/Date)
            js内置对象：
                Math：min/max/round...
                Date：getYear/getMonth/getDate...
                String：indexOf/lastIndexOf/toLowerCase(转小写)/toUpperCase(转大写)
                Array：concat/push/join
                $event
            js继承方法：
                1.原型链继承
                2.构造函数继承
                3.组合继承（原型链继承 + 构造函数继承）
                4.原型式继承（对象的浅复制）
                5.寄生式继承
                6.寄生组合继承
            什么是闭包？有什么作用：
                闭包：函数体内部的变量可以保存在函数作用域内；能够读取其他函数内部变量的函数
            new创建新对象经历的几个阶段：
                1：创建新对象this
                2：将构造函数的作用域赋给新对象(给this添加属性和方法)
                3：执行构造函数中的代码
                4：返回新对象this
            同步和异步的区别：
                同步：顺序执行，
                异步：同时执行，线程就是实现异步的一个方式
            并发和并行的区别：
                并发：一个处理器同时处理多个任务；
                并行：多个处理器同时处理多个任务；
            js延迟加载的方法：
                1：$.getScript：获取文件后再执行
                2：动态创建DOM，放在</body>前(HTML尾部)
                3：setTimeout
                4：defer/async(写在script标签中)
            图片懒加载：vue-lazyload
            js常见内存泄漏：不能再使用的内存，没有及时释放
                setInterval定时器
                闭包滥用
                元素引用(removeChild操作)
            怎样实现深拷贝和浅拷贝：
                深拷贝：Object.assign、lodash插件、JSON.parse(JSON.stringfy())、extend、递归拷贝
                浅拷贝：Object.assign、直接赋值
            ES6新特性：解构赋值、拓展运算符、模版字符串、let/const、严格模式、箭头函数、构造函数
                var：不存在块级作用域，可重复声明，可作为作用域顶部
                let：块级作用域，不可重复声明
                const：块级作用域，定义除arr和obj外的值不能被修改
            列举几个常用数组对象的操作方法：
                push/splice/slice/join/concat
            写出数组去重的关键语句：
                [...new Set(arr)]
                if(!arr.includes(i)) => arr.push(i)
            列举Object常用的方法和属性：
                Object.keys()：获取可枚举的属性值
                Object.assign(a, b)：将所有可枚举属性的值复制到目标对象(a)；
                Object.create(obj)：创建一个新对象
        */
        /*
            什么是MVVM：
                 模型       传数据           视图模型(核心)           通知视图更新     视图
                Model ==================> ViewModel(监听数据) =====================> View
                      <=================                     <=====================
                        通知后端更新数据                              操作视图
            什么是MVC(单项数据流)：
                模型       传数据                                通知视图更新     视图
                Model =============> Controller(页面业务逻辑) =================> View
            Vue组件传值方式：
                父=>子：参数写在组件上，子组件props接收
                子=>父：$emit('事件方法',参数), 父组件@事件方法去接收
                孙=>子：v-bind=$attrs绑定非props参数   v-on=$listeners绑定非原生事件
                孙=>子：provide/inject
            Vue生周期函数：
                beforeCreate: Vue实例被创建, data和methods未初始化;
                created: Vue实例创建完成, data和methods已初始化完成,模板还未编译;(操作dom需在this.$nextTick(()=>{})回调函数中)
                beforeMount: 模板已经编译完成但未挂载(数据未渲染)
                    render函数：找到template模板渲染成虚拟dom
                mounted: 虚拟dom渲染完成
                beforeUpdate: 监听到数据变化，但视图未更新(一般用watch代替)
                updated: 数据视图更新完毕;(一般用watch代替)
                beforeDestroy: 实例销毁前
                destroyed: 实例销毁后(清除监听/setTimeout)
            Vue路由钩子函数：
                    to: 路由对象, from: 当前要离开路由, next: 下一个路由
                beforeEach(to, from, next)：访问路径前触发
                afterEach(to, from)：访问路径后触发(可用来做路由加载进度条)
                beforeEnter(to, from, next)：路由配置里调用，访问当前路径才触发
                beforeLeave(to, from, next)
                beforeRouteEnter(to, from, next)：激活的组件里调用，next(vm => {})，守卫执行前，实例还未被创建,用vm
                beforeRouteUpdate(to, from, next)：重用的组件里调用，可以通过this访问实例，next不能传回调
                beforeRouteLeave(to, from, next)：离开守卫。
            Vue-router模式：
                Hash(默认)：url自带#, 改变url，页面只跳转不会重新加载
                History：
            $route和$router的区别：
                $route：路由信息对象(path/query, name/params...)
                $router：路由实例(跳转方法)
            $nextTick异步更新使用场景：
                1：在created里操作dom;
                2：操作将要改变的数据再进行改变时的操作;
                3：await this.$nextTick()...
            $axios和ajax区别：
                $axios: 是通过promise实现对ajax的封装
                    支持请求/响应拦截
                    支持 Promise API
                    可取消请求
                ajax：实现对网页的局部刷新
                    提高了性能和速度
                    针对MVC开发，不符合MVVM
                    引入jquery使得项目太大
                    通过HTTP协议进行通信
            怎样定义Vue-router动态路由，怎么获取传过来的值：
                index/:id/:type
                `index/${id}/${type}`
            v-el的作用：提供一个已存在的dom元素作为Vue实例挂在目标(2.0废除，被ref代替)
            Vue怎样实现数据双线绑定：数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变
            Vue的指令和用法：
                v-for：循环
                v-model：实现双向绑定
                v-if：true时会在dom树移除(非频繁显示时使用)
                v-show：true/diaplay: block, false/diaplay: none;(频繁切换显示时使用)
                v-bind：绑定属性，v-bind:disabled="disabled"简写 :disabled="disabled"
                v-html：文本，可解析标签(用于文本域)
                v-text：文本
            methods/computed/watch的区别：
                methods：每次都用才执行，
                computed：改变就执行，
                watch：改变就执行，
            Vue中slot的用法，使用场景和分类：
                slot：占位符，使用该组件时标签内容会自动填充;
                场景：复用组件时，可通过slot向组件内部指定的位置填充内容;
                分类：
                    1：默认插槽：如果父组件有填充内容会覆盖子组件内容，没有就显示子组件内容
                        <slot></slot>
                        <template><div>我是默认插槽</div></template>
                    2：具名插槽：
                        <slot name="header"></slot>
                        <template #header><div>我是具名插槽</div></template>
                    3：作用域插槽：在子组件绑定属性名和属性值传给父组件，父组件#属性名来接收
                        <slot name="header" text="我是作用域插槽" />
                        <template #header="defaultText">
                            <div>作用域插槽内容：{{ defaultText.text }}</div>
                        </template>
        */
        /*
            HTTP状态码：
                2开头：请求成功
                3开头：请求被重定向(指向新地址)，需要进一步操作
                4开头：请求错误(前端)，
                    400请求错误、401未授权、403服务器禁止请求、404请求地址错误、405需要代理授权
                5开头：服务器错误(后端),
                    503服务不可用、504网关超时、505HTTP版本问题
            什么是同源策略？如果解决跨域？
                同源策略：域名，协议，端口都相同。同源策略是由浏览器来执行，保护用户数据安全。
                跨域：浏览器认为当前请求不受信任，禁止请求。
                    1、proxyTable配置的代理是把服务器端（另一个域）代理到开发环境的域
                    2、复制google => 目标 输入disable-web-security....
                    3、CORS配置跳过同源策略
                    4、jsonp
            如何提高web前端性能：
                1、减少HTTP请求
                2、使用CDN
                3、keep-alive缓存
                4、合同js或css文件
                5、Gzip压缩较大文件
                6、import组件懒加载
            前端本地缓存的几种方法：
                localstorage：不主动删除则一直存在
                sessionStorage：关闭浏览器则存储失效
                cookie：4kb以内，用户可以随意篡改 Cookie 的内容
            get和post的区别：
                get：参数在url中；参数有长度限制；浏览器会把http header和data一起发送出去
                post：参数在请求体中; 参数无长度限制；浏览器先发送header，服务器响应100(临时响应)后再发送data;
            常用git指令：
                git clone/ git pull/ git push/ git merge/ git add / git commit -m
        */

        function fun1(){
            let n = 100;
            function fun2(){
                console.log('闭包===1', n);
            }
            return fun2;
        }
        let result1 = fun1();
        result1();

        let arr1 = [1,2,3];
        let arr2 = arr1;
        arr2[0] = 100;
        console.log('数组1', arr1);
        console.log('数组2', arr2);
        console.log('浅拷贝', arr2 === arr1);

        let arr5 = [100,200,100,5];
        let newArr = [];
        let newArr2 = [...new Set(arr5)].sort((x, y) => {
            return y-x;
        });
        for(let i of arr5){
            if(!newArr.includes(i)){
                newArr.push(i);
            }
        }
        console.log('数组去重', newArr, newArr2);

        let ass1 = { a: 1, b: 2 };
        let ass2 = { a: 100, c: 200 };
        console.log('枚举属性', Object.assign(ass1, ass2));

        let obj = {
            a: 1,
            obj: {
                b: 100,
                list: [
                    { id: 1, label: '中国' }
                ]
            }
        };
        let obj2 = obj;
        console.log('浅拷贝---1', obj2);
        // console.log('深拷贝---1', JSON.parse(JSON.stringify(obj)));

        let types = typeof NaN;
        console.log('数据数据类型===', types);
    },
    created(){
        // this.$nextTick;
        console.log('$nextTick',this.$refs.input);
        // this.$nextTick(() => {
        //     console.log('$nextTick',this.$refs.input);
        // });
        // this.val = this.val * 2;
    },
};
</script>

<style lang="less" scoped>

</style>

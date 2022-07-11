export default {
    // 只能输入数字(小数点)   @input="e => (formData.CCC = $limit.limitNum(e))"
    limitNum(value) {
    // 定义一个正则:只接受如下形式例子: 3.1235 5.1354
    // 此正则不对小数长度做限制
        let digitReg = /^\d+(\.\d+)?$/;

        // 步骤一: 将输入的值分割成一个一个的字符
        let strList = value.split('');
        let newValue = '';

        // 步骤二: 遍历字符数组，判断每个字符是否符合期望
        for (let item of strList) {
            if (isNaN(item - 0)) {
                if (item === '.') {
                    newValue += item;
                }
            } else if (/\d/g.test(item)) {
                newValue += item;
            }
        }

        // 步骤三: 对已经符合期望的字符进行最后的格式验证
        // 因为有可能存在 2.323.32.. 这种多个小数点的情况，所以要再次验证
        if (!digitReg.test(newValue)) {
            let strs = newValue.split('.');
            if (strs.length > 1) {
                newValue = strs[0] + '.' + strs[1];
            }
        }
        if (!newValue.includes('.') && newValue) {
            return +newValue;
        }
        return newValue;
    },
    // 只能输入正整数   @input="e => (formData.CCC = $limit.limitInt(e))"
    limitInt(value) {
        let reg = /[1-9]{1}[0-9]*$/;
        let strArray = value.split('');
        let newStrs = '';
        for (let i = 0; i < strArray.length; i++) {
            if (reg.test(strArray[i])) {
                newStrs += strArray[i];
            } else if (i > 0 && strArray[i] === '0') {
                newStrs += strArray[i];
            }
        }
        if (newStrs - 0 > 0) {
            return newStrs - 0;
        }
        return '';

    },
    // 去除字符串首尾空格   this.$limit.limitClearTrim(value)"
    limitClearTrim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    // 去除字符串首尾空格---提交时统一处理   this.$limit.limitClearTrimSubmit(formData)"
    limitClearTrimSubmit(obj) {
        let arr = [obj];
        arr.forEach(p => {
            for (let i in p) {
                if (typeof p[i] === 'string' && p[i]) {
                    p[i] = this.limitClearTrim(p[i]);
                    console.log('i--', p[i]);
                }
            }
        });
        let result = { ...arr[0] };
        return result;
    },
    // 对象素组去重  arr数组  name: 根据哪个属性值去重
    newSetArr(arr, name) {
        let obj = {};
        let newArr = arr.reduce(function(a, b) {
            obj[b[name]] ? '' : obj[b[name]] = true && a.push(b);
            return a;
        }, []);
        return newArr;
    },
    // 获取当前文本几行   this.$limit.limitGetTextRow('p/div/span...')"
    limitGetTextRow(str) {
        let noticeDom = document.querySelector(str);
        let style = window.getComputedStyle(noticeDom, null);
        let row = Math.ceil(
            Number(style.height.replace('px', '')) / Number(style.lineHeight.replace('px', ''))
        );// 总行高 / 每行行高
        return row;
    },
    // 获取手机类型
    limitGetPhoneType() {
    // 判断手机机型
        let u = navigator.userAgent;
        let type = null;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { // 安卓手机
            type = 'Android';
        } else if (u.indexOf('iPhone') > -1) { // 苹果手机
            type = 'ios';
        }
        return type;
    }
};

/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
// 代码优化：money没有就赋值 0，有的话再保留后两位
export function toMoney(money = 0) {
    return money.toFixed(2);
}

// 电话号码脱敏
export function mobileMin(val) {
    let rule = /(\d{3})\d*(\d{4})/;
    return val.replace(rule, '$1 **** $2');
}


// 手机号校验
export function checkMobile(mobile) {
    if (!mobile) {
        this.$toast('请输入手机号');
        return false;
    }
    if (!/^1(3|4|5|6|7|8|9)[0-9]\d{8}$/.test(mobile)) {
        this.$toast('请输入正确的手机号');
        return false;
    }
    return true;
}

// form 校验
export const pwd = val => /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,20}$/.test(val);

export const email = val => /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(val);

export const phone = val => /^1[0-9]{10}$/.test(val);

export const idCard = val => /^1[0-9]{10}$/.test(val);

/**
 * 秒数转分钟
 * @param {*} second
 */
export function second2Minute(second) {
    return parseInt(second / 60, 10);
}
export function minute2Hour(min) {
    return parseInt(min / 60, 10);
}
export function hour2Day(hour) {
    return parseInt(hour / 24, 10);
}
export function day2Month(day) {
    return parseInt(day / 30, 10);
}
export function month2Year(month) {
    return parseInt(month / 12, 10);
}

/**
 * 计算2个时间戳的差值
 * @param {*} startTimeStamp
 * @param {*} endTimeStamp
 */
export function timestampDifferenceSecond(startTimeStamp, endTimeStamp) {
    let st = 0,
        et = 0;
    if (startTimeStamp.length >= 13) {
        st = parseInt(startTimeStamp / 1000, 10);
    } else {
        st = startTimeStamp;
    }
    if (endTimeStamp.length >= 13) {
        et = parseInt(endTimeStamp / 1000, 10);
    } else {
        et = endTimeStamp;
    }
    return et - st;
}

export function dealInputVal(val, numberMaxlength = 7, allowNegativeNum) {
    if (!val) {
        return;
    }
    let value = '' + val;
    value = value.replace(/^0*(0\.|[1-9])/, '$1');
    // 允许负数
    if (allowNegativeNum) {
        value = value.replace(/[^\d.-]/g, ''); // 清除"数字"和"."和"-"以外的字符
    } else {
        value = value.replace(/[^\d.]/g, ''); // 清除"数字"和"."以外的字符
        value = value.replace(/^\./g, ''); // 验证第一个字符是数字而不是字符
    }
    value = value.replace(/\.{1,}/g, '.'); // 只保留第一个.清除多余的
    value = value
        .replace('.', '$#$')
        .replace(/\./g, '')
        .replace('$#$', '.');
    value = value.replace(/^(\-)*(\d*)\.(\d\d).*$/, '$1$2.$3'); // 只能输入两个小数
    value
        = value.indexOf('.') > 0
            ? value.split('.')[0].substring(0, numberMaxlength) + '.' + value.split('.')[1]
            : value.substring(0, numberMaxlength);
    return value;
}

// 去除字符中的括号
export const deleteDrackets = value => {
    let reg = /\([^\)]*\)|\（[^\)]*\）|\([^\)]*\）|\（[^\)]*\)/g;
    return value.replace(reg, '');
};

// 去掉所有的html标记
export const delHtmlTag = value => {
    return value.replace(/<[^>]+>/g, '');
};

// 是否是图片
export const isPicture = value => {
    const imgType = ['bmp','jpg','png','tif','gif','pcx','tga','exif','fpx','svg','psd','cdr','pcd','dxf','ufo','eps','ai','raw','wmf','jpeg'];
    if(!imgType.includes(value)){
        return false;
    }
    return true;
};

// 是否是excel
export const isExcel = value => {
    const excelType = ['xlsx','xls'];
    if(!excelType.includes(value)){
        return false;
    }
    return true;
};

// 加法运算
export const isAdd = (data1, data2) => {
    let r1, r2, m, c;
    try {
        r1 = data1.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = data2.toString().split('.')[1].length;
    } catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        let cm = Math.pow(10, c);
        if (r1 > r2) {
            data1 = Number(data1.toString().replace('.', ''));
            data2 = Number(data2.toString().replace('.', '')) * cm;
        } else {
            data1 = Number(data1.toString().replace('.', '')) * cm;
            data2 = Number(data2.toString().replace('.', ''));
        }
    } else {
        data1 = Number(data1.toString().replace('.', ''));
        data2 = Number(data2.toString().replace('.', ''));
    }
    return (data1 + data2) / m;
};

// 减法
export const isLess = (data1, data2) => {
    let r1, r2, m, n;
    try {
        r1 = data1.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = data2.toString().split('.')[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); // last modify by deeka //动态控制精度长度
    n = r1 >= r2 ? r1 : r2;
    return ((data1 * m - data2 * m) / m).toFixed(n);
};

// 对象数组去重
export const objArr = arr => {
    let obj = {};
    arr = arr.reduce(function(a, b) {
        obj[b.name] ? '' : obj[b.name] = true && a.push(b);
        return a;
    }, []);
    return arr;
};

// 基础数据 超过10000 添加 w 单位
export const handleCount = value => {
    let numValue = Number(value);
    if (numValue >= 10000) {
        let str = `${numValue / 10000}`;
        if (str.indexOf('.') !== -1) {
        // 带小数情况下
            let integer = str.split('.')[0];
            let decimal = str.split('.')[1][0];
            str = integer + '.' + decimal;
        }
        return str + 'w';
    }
    return value;
};

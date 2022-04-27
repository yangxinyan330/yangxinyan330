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

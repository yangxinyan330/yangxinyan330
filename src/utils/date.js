// 获取当天
export const getCurrentDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${year}-${month}-${day}`;
};

// 计算日期时间戳差值
export const dateDiffs = (sDate1, sDate2) => {
    let aDate, oDate1, oDate2, iDays;
    aDate = sDate1.split('-');
    oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]); // 转换为xx-xx-xxxx格式
    aDate = sDate2.split('-');
    oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
    // eslint-disable-next-line radix
    iDays = parseInt((oDate2 - oDate1) / 1000);
    // iDays = parseInt((oDate2 - oDate1) / 1000 / 60 / 60 / 24); // 把相差的毫秒数转换为天数
    return iDays;
};

// 时间格式转换
export const getDateInfo = value => {
    let d = new Date(value);
    return d.getFullYear() + '-' + (d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth()) + '-' + (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
};

// 日期 → 时间戳
export const getTimestamp = value => {
    return new Date(value).getTime() / 1000;
};

// 时间戳 → 时间日期
export const timestampToTime = value => {
    let date = new Date(value * 1000);// m时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    let D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
    // let h = date.getHours();
    // let m = date.getMinutes();
    // let s = date.getSeconds();
    return Y + M + D;
};

// 时间+1天
export const dateAdd = value => {
    const time1 = '2021-08-11';
    const time2 = '2021-08-10';
    const timeStamp = dateDiffs(time1, time2); // 一天时间戳
    const changeStamp = getTimestamp(value); // 当前选择日期的时间戳
    return timestampToTime(changeStamp + timeStamp); // 二次计算时间的时间戳转换日期
};

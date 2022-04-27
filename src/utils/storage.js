/**
 * @author hoye
 * @date 2021/01/26 10:45:22
 * @description localStorage 基础封装
 */

/**
 * 从 localStorage 获取数据
 * @param {string} key
 */
export const getItem = (key) => {
    const item = localStorage.getItem(key);
    if (item) {
        return JSON.parse(item);
    }
    return null;
};

/**
 * 设置数据到 localStorage
 * @param {string} key
 * @param {any} data
 */
export const setItem = (key, data) => {
    if (data === null || data === undefined) {
        return false;
    }
    const directlySetArr = ['string', 'number', 'boolean', 'symbol', 'bigint']; // 可以直接设置的数据类型
    if (directlySetArr.indexOf(typeof data) !== -1) {
        localStorage.setItem(key, data);
        return true;
    }
    if (typeof data === 'object') {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    }
    // 一般人应该不会设置一个 function 进来吧，注意：箭头函数不会被转换成一般的函数
    if (typeof data === 'function') {
        localStorage.setItem(key, data.toString());
        return true;
    }
    return false;
};

/**
 * 从 localStorage 删除一个item
 * @param {string} key
 */
export const removeItem = (key) => {
    localStorage.removeItem(key);
};

/**
 * 清空 localStorage
 */
export const clear = () => {
    localStorage.clear();
};

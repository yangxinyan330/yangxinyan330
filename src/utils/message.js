/* eslint-disable eqeqeq */
/**
 * 重置message，防止重复点击重复弹出message弹框
 * 方法一用法:
 * main.js挂载：Vue.prototype.$messageSingle = message.success;
 *    ———— this.$messageSingle.info("操作失败"); 或者 this.$messageSingle.info({message:'操作失败'})
 *    ———— this.$messageSingle.infoTime("操作失败", 1000);
 * */
import { Message } from 'element-ui';
const showMessage = Symbol('showMessage');
/** 方法一 */
class DoneMessage {
    [showMessage](type, options, single) {
        if (single) {
            if (document.getElementsByClassName('el-message').length === 0) {
                Message[type](options);
            }
        } else {
            Message[type](options);
        }
    }
    info(options, single = true) {
        this[showMessage]('info', options, single);
    }
    infoTime(options, time, single = true) {
        this[showMessage]('info', { showClose: true, message: options, duration: time == undefined ? 2000 : time }, single);
    }
    warning(options, single = true) {
        this[showMessage]('warning', options, single);
    }
    warningTime(options, time, single = true) {
        this[showMessage]('warning', { showClose: true, message: options, duration: time == undefined ? 2000 : time }, single);
    }
    error(options, single = true) {
        this[showMessage]('error', options, single);
    }
    errorTime(options, time, single = true) {
        this[showMessage]('error', { showClose: true, message: options, duration: time == undefined ? 2000 : time }, single);
    }
    success(options, single = true) {
        this[showMessage]('success', options, single);
    }
    successTime(options, time, single = true) {
        /* 用法: this.$messageSingle.successTime("操作成功", 1000);*/
        console.log(time);
        this[showMessage]('success', { showClose: true, message: options, duration: time == undefined ? 2000 : time }, single);
    }
}

export const message = new DoneMessage();


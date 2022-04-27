/*
 * @Author: your name
 * @Date: 2021-06-18 14:26:50
 * @LastEditTime: 2021-09-17 17:16:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \333d:\my\myComponent\src\plugins\element.js
 */
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import { Input, Tabs, tabPane, Pagination, Breadcrumb, BreadcrumbItem, Message, MessageBox, Loading, Form, FormItem, Notification, Menu, Submenu, MenuItem, MenuItemGroup,
    DatePicker, Button, Table, TableColumn, Select, Option, Checkbox, CheckboxButton, CheckboxGroup, Dialog, Row, Col, Tree, Image, Radio, RadioGroup, Tooltip, Popover } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3001 };

Vue.use(Input);
Vue.use(Tabs);
Vue.use(tabPane);
Vue.use(Pagination);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Loading);
Vue.use(Loading.directive);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(DatePicker);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Select);
Vue.use(Option);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Dialog);
Vue.use(Row);
Vue.use(Col);
Vue.use(Tree);
Vue.use(Image);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Tooltip);
Vue.use(Popover);
// Vue.use(Notification);


Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

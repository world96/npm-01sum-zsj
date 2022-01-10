// sumFunction 插件对应组件的名字
import sumFunction from './sumFunction.vue';

// Vue.js 的插件应当有一个公开方法 install 。第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
// 参考：https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6
// 此处注意，组件需要添加name属性，代表注册的组件名称，也可以修改成其他的
sumFunction.install = Vue => Vue.component(sumFunction.name, sumFunction);//注册组件

// 标签的方式引入，留到后面再另开新篇讨论
//const install = function(Vue, opts = {}) { 
//　　Vue.component(sumFunction.name, sumFunction);
//}

/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
//if (typeof window !== 'undefined' && window.Vue) {
//  install(window.Vue);
//}

//此处需要注意的是 install。 Vue的插件必须提供一个公开方法 install，该方法会在你使用该插件，也就是 Vue.use(yourPlugin)时被调用。这样也就给 Vue全局注入了你的所有的组件。

export default sumFunction;
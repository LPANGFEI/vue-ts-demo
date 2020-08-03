/**
* hidden: true                   如果hidden为true则在左侧菜单栏展示，否则不显示
* name:'router-name'             路由名称，必须填写
* meta : {
    title: 'title'               对应路由在左侧菜单栏的标题名称
    icon: 'icon-class'           对应路由在左侧菜单栏的图标样式
    requireAuth: true            对应路由的路由守卫
  }
**/

import About from './About';
import Home from './Home';
import Test from './Test';

const routes: any = [...About, ...Home, ...Test];

export default routes;

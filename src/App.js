// following this style guide
// https://www.sitepoint.com/react-with-typescript-best-practices/

import React from 'react';

// components and screens
import Header from './components/Header';
import Banner from './components/Banner'

// data source
import { HeaderDataSource, BannerDataSource } from './data.source.js';

// styles
import './styles/App.less'

import { enquireScreen } from 'enquire-js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location: object = {} } = typeof window !== 'undefined' ? window : {};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Header
        id="Nav3_0"
        key="Nav3_0"
        dataSource={HeaderDataSource}
        isMobile={this.state.isMobile}
      />,    
      <Banner
        id="Banner0_0"
        key="Banner0_0"
        dataSource={BannerDataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}

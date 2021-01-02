// following this style guide
// https://www.sitepoint.com/react-with-typescript-best-practices/

import React from 'react';
import logo from './logo.svg';

// components and screens
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact'

// data source
import { HeaderDataSource, BannerDataSource, FooterDataSource, SkillsDataSource, ContactDataSource } from './data.source.js';

// styles
import './styles/index.less'

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
      isMobile
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    const children = [
      <Header
        id="Header"
        key="Header"
        dataSource={HeaderDataSource}
        isMobile={this.state.isMobile}
      />,    
      <Banner
        id="Banner"
        key="Banner"
        dataSource={BannerDataSource}
        isMobile={this.state.isMobile}
      />,
      <Skills
        id="Skills"
        key="Skills"
        dataSource={SkillsDataSource}
        isMobile={this.state.isMobile}
      />,
      <Contact
        id="Contact"
        key="Contact"
        dataSource={ContactDataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer 
        id="Footer"
        key="Footer"
        dataSource={FooterDataSource}
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
        {children}
      </div>
    );
  }
}

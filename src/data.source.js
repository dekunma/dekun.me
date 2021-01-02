import React from 'react';
import { CodeTwoTone, EditTwoTone, PieChartTwoTone, MailOutlined, PhoneOutlined, LinkedinOutlined } from '@ant-design/icons';

export const HeaderDataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page kjdqwtmiyfd-editor_css' },
  logo: {
    className: 'header3-logo',
    // children:
    //   '../images/M.png',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: 'Projects',
              name: 'projects',
              className: 'kjdqz2x48gp-editor_css',
            },
          ],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              href: 'http://www.courum.com',
              target: '_blank',
              children: [
                // {
                //   name: 'image0',
                //   className: 'item-image',
                //   children:
                //     'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                // },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Courum.com',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'Course forum project',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              href: 'https://github.com/dekunma/EarthquakeMonitor-ReactNative',
              target: '_blank',
              children: [
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Earthquake Monitor',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'Android app (React Native)',
                },
              ],
            },
          },
          {
            name: 'sub2',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              href: 'https://github.com/dekunma/outline-website',
              target: '_blank',
              children: [
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'vpn.7debate.club',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'VPN key management panel',
                },
              ],
            },
          },
          {
            name: 'sub3',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              href: 'https://github.com/dekunma/',
              target: '_blank',
              children: [
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Github',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: 'See my other open-source projects',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'Skills',
        className: 'header3-item',
        children: {
          href: '#Skills',
          children: [{ children: 'Skills', name: 'text' }],
        },
      },
      {
        name: 'Contact',
        className: 'header3-item',
        children: {
          href: '#Contact',
          children: [{ children: 'Contact', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const BannerDataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
  },
  content: {
    className: 'banner0-content',
    children: 'Be a developer. Not a programmer.',
  },
  button: {
    className: 'banner0-button kjdr0na6vkj-editor_css',
    children: 'Learn More',
  },
};
export const SkillsDataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: 'Skills' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'icon',
              className: 'content0-block-icon',
              children:
                <CodeTwoTone />
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Code.',
            },
            { 
                name: 'content', children: [
                <p key="1">Java</p>, 
                <p key="2">JavaScript</p>,
                <p key="2">C++</p>,
                <p key="2">Web Development</p>
              ] 
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'icon',
              className: 'content0-block-icon',
              children:
                <EditTwoTone />
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Design.',
            },
            {
              name: 'content',
              children: [
                <p key="1">Figma</p>, 
                <p key="2">Adobe After Effects</p>,
                <p key="2">Adobe Premiere</p>
              ]
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'icon',
              className: 'content0-block-icon',
              children:
                <PieChartTwoTone />
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: 'Management.',
            },
            {
              name: 'content',
              children: [
                <p key="1">Developer community management</p>, 
                <p key="2">Team management</p>,
                <p key="2">Tech lead</p>
              ]
            },
          ],
        },
      },
    ],
  },
};
export const ContactDataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: 'Contact',
        className: 'title-h1',
      }
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              <MailOutlined />
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Email' },
          content: {
            className: 'content3-content',
            children:
              <div>
                <p><a href="mailto:william@dekun.me">William@dekun.me</a></p>
                <p><a href="mailto:dm4524@nyu.edu">dm4524@nyu.edu</a></p>
              </div>
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              <PhoneOutlined />
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'Phone' },
          content: {
            className: 'content3-content',
            children:
            <div>
              <p>+86 176-1288-8656</p>
              <p>+86 198-2845-5321</p>
              <p>+1 858-214-4439</p>
            </div>
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              <LinkedinOutlined />
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: 'LinkedIn' },
          content: {
            className: 'content3-content',
            children:
              <div>
                <a href="https://www.linkedin.com/in/dekun-ma-036a9b198/" rel='noreferrer' target='_blank'>Dekun Ma</a>
              </div>
          },
        },
      },
      
    ],
  },
};
export const FooterDataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2020 <a href="https://www.linkedin.com/in/dekun-ma-036a9b198/" rel="noreferrer" target='_blank'>Dekun Ma</a> All Rights
        Reserved
      </span>
    ),
  },
};
# 个人艺术家作品集网站

一个展示艺术家林夕作品的日式极简风格个人作品集网站。

## 项目概述

本项目是一个纯静态的个人作品集展示网站，采用日式极简主义视觉风格，包含 4 个页面（首页 / 关于 / 插画作品 / 产品设计），用于展示艺术家的核心作品。

## 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 使用 CSS 变量管理设计系统
- **JavaScript (ES6)** - 原生 JavaScript 实现页面切换
- **Google Fonts** - Noto Sans JP 字体

## 项目结构

```
website/
├── index.html          # 主页面（包含所有页面内容）
├── css/
│   └── style.css       # 全局样式
├── js/
│   └── main.js         # 页面切换逻辑
└── assets/
    ├── README.md        # 素材说明
    ├── data.js         # 作品数据
    ├── illustration/    # 插画作品图片
    └── products/       # 产品设计图片
```

## 页面说明

1. **首页** - 展示艺术家的一句话定位和精选作品概览
2. **关于** - 艺术家简介、创作理念、经历列表和联系方式
3. **插画作品** - 展示插画类作品详情
4. **产品设计** - 展示产品设计类作品详情

## 本地预览

1. 克隆或下载项目代码
2. 直接用浏览器打开 `index.html` 文件

## 部署指南

### GitHub Pages 部署

1. 将项目推送到 GitHub 仓库
2. 进入仓库 Settings → Pages
3. 选择部署分支（如 `main`）和根目录
4. 访问 `https://{username}.github.io/{repo-name}/`

### Vercel 部署

1. 将项目推送到 GitHub 仓库
2. 登录 Vercel 并导入该仓库
3. Vercel 会自动检测并部署静态网站
4. 部署完成后获得访问链接

### Netlify 部署

1. 将项目推送到 GitHub 仓库
2. 登录 Netlify 并拖拽项目文件夹到部署区域
3. Netlify 会自动构建并部署
4. 部署完成后获得访问链接

## 自定义内容

### 更新作品信息

编辑 `index.html` 文件中的作品相关内容：
- 作品标题
- 年份
- 描述
- 图片路径

### 更新联系方式

在 `index.html` 的"关于"页面部分，更新联系方式链接：
```html
<a href="mailto:your-email@example.com" class="contact-link">✉️ your-email@example.com</a>
<a href="https://your-social-profile" target="_blank" class="contact-link">📷 @your-handle</a>
```

### 更改配色方案

在 `css/style.css` 文件中的 `:root` 部分，修改 CSS 变量值：
```css
:root {
    --color-primary: #2C5F7A;      /* 主色 */
    --color-bg: #F8F6F0;           /* 背景色 */
    /* 其他变量... */
}
```

## 浏览器兼容性

- Chrome (最新两版)
- Edge (最新两版)
- Safari (最新两版)
- Firefox (最新两版)

## 许可证

本项目仅供学习和演示使用。

## 联系方式

如有问题或建议，请联系：
- 邮箱：linxi@example.com
- 微博：@林夕的视觉日记
- 站酷：https://www.zcool.com.cn/u/123456

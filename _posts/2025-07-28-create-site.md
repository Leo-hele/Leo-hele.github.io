---
date: 2025-07-24
layout: page
permalink: /create-site/
auther: Leo
title: 介绍一下我是怎么搭建起自己的Github网站的
email: hele199380@hotmail.com
class: /文章/网页/创建
hot: 0
---
# 第一步，注册Github

请自行百度

# 第二步，创建仓库

感谢[pianfan](https://github.com/pianfan)，我的网站就是fork它的 ~~（你可以fork我的）~~。

你也可以自己部署

**注意**：仓库名必须为`用户名.github.io`！

# 第三步，部署仓库

如果是fork的，请把文章（代码）删除，以免造成侵权

## 新建`index.html`

建议下载[WebStorm](https://gitee.com/Leo-hele/files/WebStorm-2025.1.3.exe)~~（破解版免费）~~

`index.html`是显示在首页上的

你可以使用`JavaScript`等工具

等待几分钟你就可以在`用户名.github.io`看到你的网站了！

## 工具：[PicGo-Image](https://gitee.com/Leo-hele/files/PicGo-Setup-2.3.1-x64.exe)（上传图片，也可以每次都自己上传 ~~，只是麻烦而已嘛~~）

请先下载[Node.js](https://gitee.com/Leo-hele/files/node-v22.17.0-x64.msi)（最好百度搜索安装教程，因为要安装Python2.7等语言）

PicGo的位置在右下角（系统托盘）里

### 部署`PicGo`

1. #### GitHub图床： 

   使用PicGo原版设置。

   ![](https://gitee.com/Leo-hele/picGo-image/raw/master/PicGo1.png)

   注意！`PicGo`有时默认为master，但`GitHub`是main！

   仓库名填`https://github.com/用户名/用户名.github.io`（就是刚刚新建的仓库）或者其它你的仓库

   自定义域名就是用`raw.githubusercontent.com`替换仓库名`github.com`

   ##### 配置token

   打开[New personal access token (classic)](https://github.com/settings/tokens/new)。

   名称、描述随意。

   有效期随意，推荐选无有效期（永不过期）

   权限勾选`repo`，其它随意。

   创建后就是这样：

   ![](https://gitee.com/Leo-hele/picGo-image/raw/master/PicGo3.png)

   生成后就是这个页面：

   ![](https://gitee.com/Leo-hele/picGo-image/raw/master/PicGo6.png)

   把它复制下来，粘贴到PicGo github token里。

2. #### Gitee图床：

   先下载插件。

   进入命令行，输入：

   ```bash
   cd AppData\Roaming\picgo
   npm install picgo-plugin-gitee-uploader
   ```

   ##### 报错

   1. 找不到`npm`：请下载node.js并保证添加到PATH
   2. 不允许`npm`：`powershell`不允许用npm，换成`cmd`。
   
   重启`PicGo`，插件就安装好了。
   
   ![](https://gitee.com/Leo-hele/picGo-image/raw/master/PicGo2.png)
   
    配置（先注册Gitee）
   
   ![](https://gitee.com/Leo-hele/picGo-image/raw/master/PicGo4.png)
   
    owner填用户名，repo填仓库名
   
   path不用填，如果你不想要你的图片在根目录里，可以填
   
   message是上传时的消息，不填为默认
   
   ##### 配置token
   
    打开[私人令牌 - Gitee.com](https://gitee.com/profile/personal_access_tokens/new)
   
   ![](https://gitee.com/Leo-hele/picGo-image/raw/master/PicGo5.png)

与Github大同小异，但是**注意权限**！如果权限选择少了，就会在没有登录Gitee时上传失败！建议全选。

## 工具：Jekyll（Github Page）

先安装[Ruby](https://gitee.com/Leo-hele/files/rubyinstaller-devkit-3.4.4-2-x64.exe)


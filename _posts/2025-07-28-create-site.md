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

感谢[pianfan](https://github.com/pianfan)，我的网站就是fork它的，不过原内容几乎删完了~~（你可以fork我的，但~~不~~建议哦）~~。

你也可以自己部署

**注意**：仓库名必须为`用户名.github.io`！

# 第三步，部署仓库

如果是fork的，请把文章（代码）删除，以免造成侵权，被告发了很不舒服

## 新建`index.html`

建议下载[WebStorm：JetBrains 出品的 JavaScript 和 TypeScript IDE](https://www.jetbrains.com/zh-cn/webstorm/)~~（[破解版](https://blog.idejihuo.com/topics/jetbrains)免费）~~（[快速下载链接，含破解包](https://gitcode.com/Leo-hele/download_files/tree/main/Webstorm)）

`index.html`是显示在首页上的

你可以使用`JavaScript`等工具

等待几分钟你就可以在`用户名.github.io`看到你的网站了！

## 工具：[PicGo-Image]([项目目录预览 - download_files - GitCode](https://gitcode.com/Leo-hele/download_files/tree/main/PicGo))（上传图片，也可以每次都自己上传 ~~，只是麻烦而已嘛~~）

注：提供的链接有一个Pic List，是升级版，快速下载其他版本：[Releases · Kuingsmile/PicList · GitHub](https://gh.llkk.cc/https://github.com/Kuingsmile/PicList/releases/)（注意点击属于最新的一个版本位置的下面的（资产位置）链接，不是上面的，也可以下载其他版本），官网：[PicList](https://piclist.cn/)，PicGo官网：[PicGo](https://picgo.github.io/PicGo-Doc/zh/guide/#下载安装)（注意到了吗？是github.io哦）

请先下载[Node.js](https://nodejs.cn/download/)（最好百度搜索安装教程，因为要安装Python2.7等语言）

PicGo的位置在右下角（系统托盘）里

### 部署`PicGo`

1. #### GitHub图床： 

   使用PicGo原版设置。

   ![create-site_PicGo1.png (1180×670)](https://gitee.com/Leo-hele/leo-hele.github.io-images/raw/main/create-site_PicGo1.png)

   注意！`PicGo`有时默认为master，但`GitHub`是main！

   仓库名填`https://github.com/用户名/用户名.github.io`（就是刚刚新建的仓库）或者其它你的仓库

   自定义域名就是用`raw.githubusercontent.com`替换仓库名`github.com`

   ##### 配置token

   打开[New personal access token (classic)](https://github.com/settings/tokens/new)。

   名称、描述随意。

   有效期随意，推荐选无有效期（永不过期）

   权限勾选`repo`，其它随意。

   创建后就是这样：

   ![create-site_PicGo3.png (1647×3107)](https://gitee.com/Leo-hele/leo-hele.github.io-images/raw/main/create-site_PicGo3.png)

   生成后就是这个页面：

   ![create-site_PicGo6.png (1647×965)](https://gitee.com/Leo-hele/leo-hele.github.io-images/raw/main/create-site_PicGo6.png)

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
   
   ![create-site_PicGo2.png (1178×634)](https://gitee.com/Leo-hele/leo-hele.github.io-images/raw/main/create-site_PicGo2.png)
   
    配置（先注册Gitee）
   
   ![create-site_PicGo4.png (1174×649)](https://gitee.com/Leo-hele/leo-hele.github.io-images/raw/main/create-site_PicGo4.png)
   
    owner填用户名，repo填仓库名
   
   path不用填，如果你不想要你的图片在根目录里，可以填
   
   message是上传时的消息，不填为默认
   
   ##### 配置token
   
    打开[私人令牌 - Gitee.com](https://gitee.com/profile/personal_access_tokens/new)
   
   ![create-site_PicGo5.png (1395×923)](https://gitee.com/Leo-hele/leo-hele.github.io-images/raw/main/create-site_PicGo5.png)

与Github大同小异，但是**注意权限**！如果权限选择少了，就会在没有登录Gitee时上传失败！建议全选。

## 工具：[Jekyll](https://jekyllcn.com/)（Github Page）

安装地址：[安装 - Jekyll • 简单静态博客网站生成器](https://jekyllcn.com/docs/installation/)

先安装[Ruby](https://www.ruby-lang.org/zh_cn/downloads/)（注意看教程，请安装好Gem）和`bundle`。

### 安装

#### Linux或Macos

##### Macos

安装Xcode Command-Line Tools：Preferences → Downloads → Components

```bash
gem install jekyll
```

#### Windows

#### 安装 github-pages[（源地址）](https://jekyllcn.com/docs/windows/#安装-github-pages)

- 打开命令行界面安装 [Bundler](http://bundler.io/): 
  ```bash
  gem install bundler
  ```
- 在你的博客根目录中创建名为 `Gemfile` 不带任何后缀名的文件

- 拷贝复制下面两行到文件中：

  ```gemfile
  source 'http://rubygems.org'
  gem 'github-pages'
  ```

- 打开命令行界面，切换到你本地博客库的根目录，安装github-pages: 
  ```bash
  bundle install
  ```

如果你是用的Webstorm就更简单了，他会自动识别Gemfile安装（自动安装bundle），并且可以设置工具运行Jekyll。



### 配置Jekyll（fork）

网上有很多教程，诸如[Jekyll • 简单静态博客网站生成器 - 将纯文本转换为静态博客网站](https://jekyllcn.com/)；[使用 Jekyll 构建你的网站 - 初入门-CSDN博客](https://blog.csdn.net/FloraCHY/article/details/135191964)

但是有一个最简单的方法，就是[零基础小白如何搭建自己的 github.io 个人网站 – Pianfan's blog](https://pianfan.github.io/build_own_website/)

方法是这样的：

#### Step1. 找到一个你觉得完美的Github.io

#### Step2. 复刻下来

把`https://xxx.github.io`换成`https://github.com/xxx/xxx.github.io`然后点击`Fork`（复刻）

也可以直接换成`https://github.com/xxx/xxx.github.io/archive/refs/heads/branch.zip`（`branch`是分支名，Github上一般为`main`）下载过后推送到仓库

推荐使用镜像站加速（有些个人网站过大）`https://gh.llkk.cc/https://github.com/xxx/xxx.github.io/archive/refs/heads/branch.zip`（branch同上）

#### Step3. 找到\_posts文件夹（有可能不是，可以看\_config.yml配置文件，也有可能是.yaml结尾，灵活变通）

#### Step4. 删除所有东西（先备份再删除）

以免侵权哦~

#### Step5. 开始博客

在里面写东西吧！注意名称和文件头（就是用两个---包起来的部分，在开头）格式要用之前的格式（所以要备份呢），特别是文件开头部分（yaml部分），不知道什么意思就别动，基本如下：
```yaml
---
date: YYYY-mm-dd
title: xxx（显示名称）
permalink: /xxx1/xxx2/.../xxxn/（路径）
layout: xxx（别改！就用原来的，这是显示效果，如果你知道怎么改可以改，原来有很多可以选一个喜欢的用，可以参见其它文章或者后面的部分）
auther: xxx（姓名）
email: xxx（邮箱）
class: xxx（类别，也有可能以其它名称出现，参考原来的）
---
```

#### Step6. 删除备份

### 配置Jekyll（原创 ）

#### Step1. 新建`layout`

如果你没有`_layout`文件夹，新建一个。

在里面新建一个`html`文件，叫做诸如`default`之类的，供以后使用，类似这样：

```html
<!DOCTYPE HTML>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="referrer" content="no-referrer">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{\{ page.title }} - {\{ site.title }}</title>
    <link type="text/css" rel="stylesheet" href="../style.css"> <!-- 注意路径要到根目录需要"..\" -->
    <link rel="icon" href="网站的图像" type="image/x-icon"/>
    <script src="../js/base.js"></script>
</head>
<body>
{\{ content }}
</body>
</html>
```

其中`content`就是内容部分（你猜为啥叫`layout`），是所有页面的内容

再新建一个`html`文件，叫做`page`之类的，用于文章，类似这样：

```html
---
layout: default
---
<!-- 想不到吧，layout可以用layout -->
{\{ content }}
<!-- 可以有很多功能，比如代码高亮，公式高亮，复制代码，链接字体，评论，点赞，目录等，就像你看到的这篇文章一样 -->
```

#### Step2.新建`index.html`

如果你不用Jekyll，Github也会默认你使用了Jekyll，所以整个文章新建博客第一步也是`index.html`

但是安装Jekyll后可以本地查看，不需要推送和等待了。

#### Step3. 新建其他

写自己的博客，创建`blogs.html`等

#### Step4. 启动Jekyll

##### Windows

```bash
bundle exec jekyll serve
```

##### Linux或MacOs

```bash
jekyll serve
```

具体详见[基本用法 - Jekyll • 简单静态博客网站生成器](https://jekyllcn.com/docs/usage/)

#### Step5. 查看效果

在浏览器中输入网址`localhost:4000`查看效果

### Jekyll语言

前面已经说了`layout`，下面再说一些（其实Jekyll用的是`liquid`）：

#### 生成后的文件

你可以在`_site`文件夹下查看生成后的文件，你会发现layout已经用上了。

#### `{\% xxx %}`：执行操作

##### `include`

用法：`{\% include xxx %}`

效果：会把`_includes/xxx`的内容插入进来

##### `relative_include`

用法：`{\% relative_include xxx %}`

效果：会把`./xxx`的内容插入进来

##### `if`

用法：

```html
{\% if xxx %}
xxx
{\% else %}
xxx
{\% endif %}
```

效果：学过任何一个编程语言的人都知道，特别是c++的宏

```cpp
#if ! defined(xxx)
#define assert(...) xxx
#else
#define assert(...) (void)0
#endif
```

#####  `unless`

用法：

```htaccess
{\% unless xxx %}
xxx
{\% endunless %}
```

效果：恰好与`if`相反

##### `for`

用法：

```html
{\% for xxx in xxx %}
xxx
{\% endfor %}
```
效果：学过任何一个编程语言的人都知道

##### `case`

用法：

```html
{\% case xxx %}
{\% when xxx %}
xxx
{\% when xxx %}
xxx
...
{\% else %}
xxx
{\% endcase %}
```



##### `raw`

用法

```html
{\% raw %}
xxx
{\% endraw %}
```

效果：忽略里面的所有Jekyll语言的内容

#### `{\{ xxx }}`获取值

上一个`{\% xxx %}`的表达

式也如下

##### `site.xxx`

获取`_config.yml`文件的`xxx`属性

##### `page.xxx`

获取yml头的`xxx`属性

##### 运算

几乎与其它语言相通，不赘述

#### 筛选器

用法：

```html
{\{ xxx | xxx }}
```

效果：按照后面一个对前面一个进行操作

#### 参见：[Liquid Filters | Jekyll 教程](https://jekylldo.cn/docs/liquid/filters/)；[Liquid 模板语言中文文档 | Liquid 中文网](https://liquid.bootcss.com/)；[看这！快速理解Liquid！基础篇_liquid语言-CSDN博客](https://blog.csdn.net/MCM0115/article/details/136793334)

#### `_config.yml`

配置信息，可以与`{\{ xxx }}`共用，也可以指定Jekyll的动作，类似这样：

```yaml
baseurl: ""
url: "localhost:4000"
```


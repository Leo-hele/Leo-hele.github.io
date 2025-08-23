---
title: gitee免费使用git lfs
date: 2025-08-09
layout: page
permalink: /gitee-free-lfs/
auther: Leo
email: hele199380@hotmail.com
class: /文章/网页/Gitee
hot: 0
---

# 免费使用[Gitee](https://gitee.com/)的[Git LFS](https://cn.bing.com/search?q=git LFS&qs=n&form=QBRE&sp=-1&lq=0&pq=git lfs&sc=12-7&sk=&cvid=A2D330C1F5A84A9584DE565BEAD9C98A)功能

众所周知，Gitee只允许**给了钱（或试用期）的公司**使用LFS功能，不然是没有这个功能的。

但是有一个方法，可以通过逻辑漏洞来使用，只是配置略麻烦。

## 注册免费试用LFS功能Git网站（如[GitHub](https://github.com)、[GitCode](https://gitcode.com)）的账号与新建仓库

自行百度吧！

## Gitee仓库设置

导航到仓库设置（Gitee顶栏）$\rightarrow$ 仓库设置（第一个）$\rightarrow$ 功能设置（第二个）$\rightarrow$ 同步（最后一个）$\rightarrow$ 仓库远程地址(用于强制同步)，把你刚刚在另外网站新建的仓库地址复制进去。

![](%E5%90%8C%E6%AD%A5.png)

Gitee就会把另外一个仓库里面的所有文件（包括LFS文件）复制进去，大功告成！
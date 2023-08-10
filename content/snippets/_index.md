---
title: "Snippets"
date: 2023-03-11T20:20:51Z
layout: "single"
cjk: true
---

# Typography

对于中英文混排，常见的做法是直接插入空格。我认为六分之一空格（U+2006）较美观，较少打扰文字流。不过这并未考虑到实际应用时产生的各种问题，只是突发奇想的观点；如果是本页面第一段那种混排程度，不论多少间距，效果都不会非常理想。本博客也使用六分之一空格作为中英文之间的间距。

英文正文排版应酌情使用小型大写字母和小写数字，以配合拉丁字母的高度。例如：「The <span class="small-caps">USA</span> declared independence in <span class="text-figures">1776</span>.」中文则更类似于全大写拉丁字母，因此这样做只会起到负面作用。导致这种错误的一个原因是将 Georgia 或本博客使用的 Scala Sans 等默认采用小写数字的字体设为英文字体。

<span style="font-family: garamond-premier-pro">Th</span> 这种连字在历史上是比较少见的。根据 [Stack Exchange](https://graphicdesign.stackexchange.com/questions/137945/are-th-ligatures-used-in-german-typesetting#answer-137946) 上的一个回答，德文中的 dehnungs-h 或长音 h 可以与 T 在词首形成连字，符合某种如今已经不常见的发音规范；英文则没有这种规则。而 Adobe Originals 系列的衬线字体一般会把这个连字包括在 Standard Ligature 特性中，甚至连基于历史蓝本的 Caslon、Adobe Jenson 和两款 Garamond 也不例外，使用体验不佳。如果要在 InDesign 里将其停用而不影响其他连字，可以使用 GREP Style 匹配 Th 这两个字母，然后应用一个禁用标准连字的字符属性。

英文版 Illustrator 可以在设置中打开东亚排版特性，但 InDesign 没有这个选项，必须手动调用。对于 Windows 和 macOS，需要修改的注册表和文件分别位于：
<div style="margin-top:-6pt"></div>

```
HKEY_LOCAL_MACHINE\SOFTWARE\Adobe\InDesign\版本号\Feature Set Locale Setting
Applications/应用名/Presets/applicationpreferences/indesign/applicationpreference.plist
```

<div style="margin-bottom:6pt"></div>

在其中找到 Feature Set Locale Setting 一项，将其从 256 改为 257，十六AAA进制则是 100 改为 101。本方法来自 [Dr Ken Lunde](https://ken-lunde.medium.com/adobe-indesign-tips-japanese-cjk-functionality-english-ui-redux-539528e295c6)。

Adobe Fonts 在 Windows 和 macOS 中分别将字体文件存储于本地这两个位置：
<div style="margin-top:-6pt"></div>

```
%APPDATA%\Adobe\CoreSync\plugins\livetype\r
~/Library/Application Support/Adobe/CoreSync/plugins/livetype/.r
```

<div style="margin-bottom:6pt"></div>

其中的文件以编号命名且没有扩展名，但未经加密，只需使用如 ttLib 等工具读取其曲线格式和名字，然后重命名，即可直接使用。

<div style="height: 6pt"></div>

# Software

Windows 的系统语言若为英文，许多应用便无法正常显示中文字符串，会出现回落的情况。导致这个问题的原因可能是此时作为默认字体的 Segoe UI 的回落规则出现问题：翻阅注册表发现，回落顺序为 Tahoma – Meiryo UI – MS UI Gothic – Microsoft JhengHei UI – Microsoft YaHei UI。英文系统中的 Meiryo UI 已被[移除](https://learn.microsoft.com/en-us/windows/deployment/windows-10-missing-fonts)，所以最终的结果是以 MS UI Gothic 优先，而该字体并未涵盖中文字符集。若要在不改变系统区域的情况下解决该问题，只需在注册表中找到该项：
<div style="margin-top:-6pt"></div>

```
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\FontLink\SystemLink\Segoe UI
```

<div style="margin-bottom:6pt"></div>

然后将 MSYH.TTC,Microsoft YaHei UI,128,96 和 MSYH.TTC,Microsoft YaHei UI 两行移至最上方即可。想必该问题在其他语言的系统中也会出现。

Windows LTSC 的许多不明问题（如开机时 wsappx 进程占用 CPU，以及新版微软输入法不显示选字框）都可以通过手动安装 [C++ 运行时框架包](https://learn.microsoft.com/en-US/troubleshoot/developer/visualstudio/cpp/libraries/c-runtime-packages-desktop-bridge)，或使用[脚本](https://github.com/kkkgo/LTSC-Add-MicrosoftStore)直接安装 Microsoft Store 解决。

HHKB 有线版无法直接使用 Keymap Tools 修改键位，但只需在软·件目录中 KeyboardDatalist.json 这个文件里找到或添加有线键盘的型号（如黑色 Professional Classic 为 PD-KB401BN），然后将「isKeymapChangeable」这一键值改为 True 即可。
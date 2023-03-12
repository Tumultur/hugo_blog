---
title: "Snippets"
date: 2023-03-11T20:20:51Z
layout: "single"
cjk: true
---

# Windows

Windows 的系统语言若为英文，许多应用便无法正常显示中文字符串，会出现回落的情况。导致这个问题的原因可能是此时作为默认字体的 Segoe UI 的回落规则出现问题：翻阅注册表发现，回落顺序为 Tahoma – Meiryo UI – MS UI Gothic – Microsoft JhengHei UI – Microsoft YaHei UI。英文系统中的 Meiryo UI 已被[移除](https://learn.microsoft.com/en-us/windows/deployment/windows-10-missing-fonts)，所以最终的结果是以 MS UI Gothic 优先，而该字体并未涵盖中文字符集。若要解决该问题，只需在注册表 HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\FontLink\SystemLink\Segoe UI 一项中将 MSYH.TTC,Microsoft YaHei UI,128,96 和 MSYH.TTC,Microsoft YaHei UI 两项移至最上方即可。想必该问题在其他语言的系统中也会出现。

Windows LTSC 的许多不明问题（如开机时 wsappx 进程占用 CPU，以及新版微软输入法不显示选字框）都可以通过手动安装 [C++ 运行时框架包](https://learn.microsoft.com/en-US/troubleshoot/developer/visualstudio/cpp/libraries/c-runtime-packages-desktop-bridge)，或使用[脚本](https://github.com/kkkgo/LTSC-Add-MicrosoftStore)直接安装 Microsoft Store 解决。

# Typography

对于中英文混排，常见的做法是直接插入空格。我认为六分之一空格（U+2006）较美观，较少打扰文字流。不过这并未考虑到实际应用时产生的各种问题，只是突发奇想的观点；如果是本页面第一段那种混排程度，不论多少间距，效果都不会非常理想。本博客也使用六分之一空格作为中英文之间的间距。
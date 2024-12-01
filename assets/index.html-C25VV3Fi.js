import{_ as t,c as a,a as i,o as s}from"./app-CbHYbxK4.js";const r="/assets/image-DU5GnEe2.png",l="/assets/image-1-CB4BmImH.png",n="/assets/image-2-DJp20PeF.png",o={};function d(c,e){return s(),a("div",null,e[0]||(e[0]=[i('<p>TrueNAS虚拟机备份</p><h2 id="虚拟机导出" tabindex="-1"><a class="header-anchor" href="#虚拟机导出"><span>虚拟机导出</span></a></h2><p>TrueNAS Scale虚拟化使用ZVOL存储虚拟机，存储路径为：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/dev/zvol</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>依次点击 虚拟化 -&gt; 设备 -&gt; 磁盘 -&gt; 编辑 就可以看到该虚拟机具体路径</p><p><img src="'+r+'" alt="alt text"></p><p><img src="'+l+'" alt="alt text"></p><p><img src="'+n+'" alt="alt text"></p><p>使用dd命令可将虚拟机打包为raw格式的img文件：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> if=/dev/zvol/main/winserver-93x9q3</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> of=/mnt/main/backup/winserver.img</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中if为源文件即为zvol文件，of为导出目的文件。</p><h2 id="虚拟机导入" tabindex="-1"><a class="header-anchor" href="#虚拟机导入"><span>虚拟机导入</span></a></h2><p>可以使用dd命令在新建zvol文件之后导入zvol文件:</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> if=/mnt/main/backup/winserver.img</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> of=/dev/zvol/main/winserver-93x9q3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',14)]))}const m=t(o,[["render",d],["__file","index.html.vue"]]),h=JSON.parse(`{"path":"/article/vgf2ez1r/","title":"TrueNAS虚拟机备份","lang":"zh-CN","frontmatter":{"createTime":"2024/08/04 12:00:00","tags":["NAS","虚拟机","备份","TrueNAS"],"title":"TrueNAS虚拟机备份","permalink":"/article/vgf2ez1r/","description":"TrueNAS虚拟机备份 虚拟机导出 TrueNAS Scale虚拟化使用ZVOL存储虚拟机，存储路径为： 依次点击 虚拟化 -> 设备 -> 磁盘 -> 编辑 就可以看到该虚拟机具体路径 alt text alt text alt text 使用dd命令可将虚拟机打包为raw格式的img文件： 其中if为源文件即为zvol文件，of为导出目的文件。 ...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.ermao.org/article/vgf2ez1r/"}],["meta",{"property":"og:title","content":"TrueNAS虚拟机备份"}],["meta",{"property":"og:description","content":"TrueNAS虚拟机备份 虚拟机导出 TrueNAS Scale虚拟化使用ZVOL存储虚拟机，存储路径为： 依次点击 虚拟化 -> 设备 -> 磁盘 -> 编辑 就可以看到该虚拟机具体路径 alt text alt text alt text 使用dd命令可将虚拟机打包为raw格式的img文件： 其中if为源文件即为zvol文件，of为导出目的文件。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T08:12:52.000Z"}],["meta",{"property":"article:tag","content":"NAS"}],["meta",{"property":"article:tag","content":"虚拟机"}],["meta",{"property":"article:tag","content":"备份"}],["meta",{"property":"article:tag","content":"TrueNAS"}],["meta",{"property":"article:modified_time","content":"2024-08-31T08:12:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TrueNAS虚拟机备份\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-31T08:12:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"虚拟机导出","slug":"虚拟机导出","link":"#虚拟机导出","children":[]},{"level":2,"title":"虚拟机导入","slug":"虚拟机导入","link":"#虚拟机导入","children":[]}],"readingTime":{"minutes":0.57,"words":170},"git":{"createdTime":1722738355000,"updatedTime":1725091972000,"contributors":[{"name":"ermaozi","email":"admin@ermao.net","commits":1}]},"autoDesc":true,"filePathRelative":"文档/TrueNAS虚拟机备份.md","categoryList":[{"id":"325369","sort":10001,"name":"文档"}]}`);export{m as comp,h as data};

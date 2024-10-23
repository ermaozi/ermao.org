import{_ as t,c as a,a as n,o as i}from"./app-Z4NH_BiZ.js";const s={};function r(l,e){return i(),a("div",null,e[0]||(e[0]=[n(`<p>最近有朋友找我帮忙给他的软路由装个 openwrt，顺手写个教程，后面有想要装 openwrt 的朋友可以参考一下。</p><h2 id="一句话流程" tabindex="-1"><a class="header-anchor" href="#一句话流程"><span>一句话流程</span></a></h2><p>给U盘写入系统，插入小主机，从U盘启动，上传openwrt固件，使用DD命令刷入固件，重启。</p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2><ul><li>一个U盘</li><li>一个小主机</li><li>一个电脑</li><li>一根网线</li></ul><h2 id="下载openwrt固件与写盘工具" tabindex="-1"><a class="header-anchor" href="#下载openwrt固件与写盘工具"><span>下载openwrt固件与写盘工具</span></a></h2><h3 id="下载openwrt固件" tabindex="-1"><a class="header-anchor" href="#下载openwrt固件"><span>下载openwrt固件</span></a></h3><p>官方地址：<a href="https://downloads.openwrt.org/" target="_blank" rel="noopener noreferrer">https://downloads.openwrt.org/</a></p><p>根据你的设备型号下载对应的固件，这里以我手头的设备为例，下载的是 <code>x86_64</code> 的固件。</p><h3 id="下载写盘工具" tabindex="-1"><a class="header-anchor" href="#下载写盘工具"><span>下载写盘工具</span></a></h3><p>我使用的是<code>rufus</code>, 下载地址：<a href="https://rufus.ie/" target="_blank" rel="noopener noreferrer">https://rufus.ie/</a></p><h2 id="制作启动盘" tabindex="-1"><a class="header-anchor" href="#制作启动盘"><span>制作启动盘</span></a></h2><p>插入U盘，打开<code>rufus</code>，选择你下载的openwrt固件，点击下方“开始”就可以了。</p><h2 id="安装openwrt" tabindex="-1"><a class="header-anchor" href="#安装openwrt"><span>安装openwrt</span></a></h2><h3 id="连接小主机" tabindex="-1"><a class="header-anchor" href="#连接小主机"><span>连接小主机</span></a></h3><p>将U盘插入小主机，连接电源和网线，用网线连接电脑和小主机。</p><h3 id="启动小主机" tabindex="-1"><a class="header-anchor" href="#启动小主机"><span>启动小主机</span></a></h3><p>开机时按<code>F2</code>或<code>F12</code>或<code>del</code>进入BIOS，选择从U盘启动。</p><h3 id="上传openwrt固件" tabindex="-1"><a class="header-anchor" href="#上传openwrt固件"><span>上传openwrt固件</span></a></h3><p>启动成功后可以直接使用<code>scp</code>命令将下载好的固件上传到小主机。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 固件所在目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">scp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 固件名</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> root@你的小主机IP:/tmp/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="刷入固件" tabindex="-1"><a class="header-anchor" href="#刷入固件"><span>刷入固件</span></a></h3><p>使用<code>dd</code>命令刷入固件。后面的<code>/dev/sda</code>是小主机的系统盘，如果你的小主机是其他盘，可以使用<code>lsblk</code>命令查看。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ssh</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> root@你的小主机IP</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /tmp</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">gzip</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -dc</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 固件名</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> dd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> of=/dev/sda</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重启" tabindex="-1"><a class="header-anchor" href="#重启"><span>重启</span></a></h3><p>完成后可以输入<code>reboot</code>重启小主机，等待一会儿就可以访问。</p><h2 id="后话" tabindex="-1"><a class="header-anchor" href="#后话"><span>后话</span></a></h2><p>这个教程写的比较笼统，如果有问题可以在评论区留言，我会尽量回答并补充文档。</p>`,28)]))}const o=t(s,[["render",r],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/article/9zktdhyx/","title":"软路由安装openwrt","lang":"zh-CN","frontmatter":{"title":"软路由安装openwrt","createTime":"2024/10/14 19:35:47","permalink":"/article/9zktdhyx/","tags":["openwrt","路由器","软路由","刷机"],"description":"最近有朋友找我帮忙给他的软路由装个 openwrt，顺手写个教程，后面有想要装 openwrt 的朋友可以参考一下。 一句话流程 给U盘写入系统，插入小主机，从U盘启动，上传openwrt固件，使用DD命令刷入固件，重启。 准备工作 一个U盘 一个小主机 一个电脑 一根网线 下载openwrt固件与写盘工具 下载openwrt固件 官方地址：https...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.ermao.org/article/9zktdhyx/"}],["meta",{"property":"og:title","content":"软路由安装openwrt"}],["meta",{"property":"og:description","content":"最近有朋友找我帮忙给他的软路由装个 openwrt，顺手写个教程，后面有想要装 openwrt 的朋友可以参考一下。 一句话流程 给U盘写入系统，插入小主机，从U盘启动，上传openwrt固件，使用DD命令刷入固件，重启。 准备工作 一个U盘 一个小主机 一个电脑 一根网线 下载openwrt固件与写盘工具 下载openwrt固件 官方地址：https..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-14T11:56:59.000Z"}],["meta",{"property":"article:tag","content":"openwrt"}],["meta",{"property":"article:tag","content":"路由器"}],["meta",{"property":"article:tag","content":"软路由"}],["meta",{"property":"article:tag","content":"刷机"}],["meta",{"property":"article:modified_time","content":"2024-10-14T11:56:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"软路由安装openwrt\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-14T11:56:59.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一句话流程","slug":"一句话流程","link":"#一句话流程","children":[]},{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":2,"title":"下载openwrt固件与写盘工具","slug":"下载openwrt固件与写盘工具","link":"#下载openwrt固件与写盘工具","children":[{"level":3,"title":"下载openwrt固件","slug":"下载openwrt固件","link":"#下载openwrt固件","children":[]},{"level":3,"title":"下载写盘工具","slug":"下载写盘工具","link":"#下载写盘工具","children":[]}]},{"level":2,"title":"制作启动盘","slug":"制作启动盘","link":"#制作启动盘","children":[]},{"level":2,"title":"安装openwrt","slug":"安装openwrt","link":"#安装openwrt","children":[{"level":3,"title":"连接小主机","slug":"连接小主机","link":"#连接小主机","children":[]},{"level":3,"title":"启动小主机","slug":"启动小主机","link":"#启动小主机","children":[]},{"level":3,"title":"上传openwrt固件","slug":"上传openwrt固件","link":"#上传openwrt固件","children":[]},{"level":3,"title":"刷入固件","slug":"刷入固件","link":"#刷入固件","children":[]},{"level":3,"title":"重启","slug":"重启","link":"#重启","children":[]}]},{"level":2,"title":"后话","slug":"后话","link":"#后话","children":[]}],"readingTime":{"minutes":1.56,"words":467},"git":{"createdTime":1728907019000,"updatedTime":1728907019000,"contributors":[{"name":"ermaozi","email":"admin@ermao.net","commits":1}]},"autoDesc":true,"filePathRelative":"文档/软路由安装openwrt.md","categoryList":[{"id":"325369","sort":10000,"name":"文档"}]}`);export{o as comp,d as data};

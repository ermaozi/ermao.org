import{_ as t,c as a,e as s,o as r}from"./app-DwcukXNv.js";const i="/assets/image-Bm89Ogcq.png",o="/assets/image-1-Cn0gvliY.png",l="/assets/image-2-T8N1pog8.png",n={};function p(c,e){return r(),a("div",null,e[0]||(e[0]=[s('<p>之前我的博客一直使用 wordpress，但是由于 wordpress 太过笨重、维护难度大、国内访问速度慢、还需要花钱租用后端服务器。所以我决定迁移到 github pages 重搞一个博客。</p><p>但是之前放在公网上的文章链接都是 wordpress 的，我又舍不得放弃这部分流量，所以用 cloudflare 进行URL重定向，原来的访问直接 301 跳转到了现在的地址。</p><p>需要迁移网站的同学不如试试这个方法，无痛迁移，还能保留原有的流量。</p><h2 id="_1-在-cloudflare-解析你的域名" tabindex="-1"><a class="header-anchor" href="#_1-在-cloudflare-解析你的域名"><span>1. 在 cloudflare 解析你的域名</span></a></h2><p><img src="'+i+'" alt="alt text"></p><p>我要把 <a href="blog.ermao.net">blog.ermao.net</a> 跟 <a href="ermao.net">ermao.net</a> 的所有请求都重定向到 <a href="www.ermao.org">www.ermao.org</a>。</p><p>所以要将 <a href="blog.ermao.net">blog.ermao.net</a> 跟 <a href="ermao.net">ermao.net</a> 都在cloudflare上解析。这个 ip 可以随便填，但是代理状态必须是已代理。</p><p>目标地址 <a href="www.ermao.org">www.ermao.org</a> 则正常使用<code>CNAME</code>解析到 github pages 即可。</p><h2 id="_2-在-cloudflare-进行url重定向" tabindex="-1"><a class="header-anchor" href="#_2-在-cloudflare-进行url重定向"><span>2. 在 cloudflare 进行URL重定向</span></a></h2><p><img src="'+o+'" alt="alt text"></p><p>依次点击<code>规则</code> -&gt; <code>重定向规则</code> -&gt; <code>创建规则</code>。</p><p><img src="'+l+'" alt="alt text"></p><p>规则名字随便写，字段类型选<code>主机名</code>，字段值填你要重定向的域名。</p><p>URl 重定向类型选<code>动态</code>，表达式填写你的目标地址，例如：</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">concat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://www.ermao.org</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> http</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">request</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">uri</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>完事点击<code>保存</code></p><h2 id="_3-等待生效" tabindex="-1"><a class="header-anchor" href="#_3-等待生效"><span>3. 等待生效</span></a></h2><p>这玩意生效还得几分钟到几小时，试着访问一下原域名，如果带着路径跳转到目标地址就说明生效了。</p><p>例如访问 <a href="https://blog.ermao.net/posts/vpn/" target="_blank" rel="noopener noreferrer">https://blog.ermao.net/posts/vpn/</a> 就直接跳转到 <a href="https://www.ermao.org/posts/vpn/" target="_blank" rel="noopener noreferrer">https://www.ermao.org/posts/vpn/</a> 了。</p><h2 id="_4-问题" tabindex="-1"><a class="header-anchor" href="#_4-问题"><span>4. 问题</span></a></h2><p>有啥问题可以留言，我会尽量解答。</p>',21)]))}const h=t(n,[["render",p],["__file","index.html.vue"]]),m=JSON.parse(`{"path":"/article/jqtuqouj/","title":"使用cloudflare进行URL重定向","lang":"zh-CN","frontmatter":{"title":"使用cloudflare进行URL重定向","createTime":"2024/08/31 21:12:45","permalink":"/article/jqtuqouj/","tags":["cloudflare","URL重定向","wordpress","github pages","博客"],"description":"之前我的博客一直使用 wordpress，但是由于 wordpress 太过笨重、维护难度大、国内访问速度慢、还需要花钱租用后端服务器。所以我决定迁移到 github pages 重搞一个博客。 但是之前放在公网上的文章链接都是 wordpress 的，我又舍不得放弃这部分流量，所以用 cloudflare 进行URL重定向，原来的访问直接 301 跳...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.ermao.org/article/jqtuqouj/"}],["meta",{"property":"og:title","content":"使用cloudflare进行URL重定向"}],["meta",{"property":"og:description","content":"之前我的博客一直使用 wordpress，但是由于 wordpress 太过笨重、维护难度大、国内访问速度慢、还需要花钱租用后端服务器。所以我决定迁移到 github pages 重搞一个博客。 但是之前放在公网上的文章链接都是 wordpress 的，我又舍不得放弃这部分流量，所以用 cloudflare 进行URL重定向，原来的访问直接 301 跳..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T13:37:00.000Z"}],["meta",{"property":"article:tag","content":"cloudflare"}],["meta",{"property":"article:tag","content":"URL重定向"}],["meta",{"property":"article:tag","content":"wordpress"}],["meta",{"property":"article:tag","content":"github pages"}],["meta",{"property":"article:tag","content":"博客"}],["meta",{"property":"article:modified_time","content":"2024-08-31T13:37:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用cloudflare进行URL重定向\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-31T13:37:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 在 cloudflare 解析你的域名","slug":"_1-在-cloudflare-解析你的域名","link":"#_1-在-cloudflare-解析你的域名","children":[]},{"level":2,"title":"2. 在 cloudflare 进行URL重定向","slug":"_2-在-cloudflare-进行url重定向","link":"#_2-在-cloudflare-进行url重定向","children":[]},{"level":2,"title":"3. 等待生效","slug":"_3-等待生效","link":"#_3-等待生效","children":[]},{"level":2,"title":"4. 问题","slug":"_4-问题","link":"#_4-问题","children":[]}],"readingTime":{"minutes":1.56,"words":467},"git":{"createdTime":1725111420000,"updatedTime":1725111420000,"contributors":[{"name":"ermaozi","email":"admin@ermao.net","commits":1}]},"autoDesc":true,"filePathRelative":"文档/使用cloudflare进行URL重定向.md","categoryList":[{"id":"325369","sort":10000,"name":"文档"}]}`);export{h as comp,m as data};

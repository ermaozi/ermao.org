import{_ as i,c as e,a,o as t}from"./app-Z4NH_BiZ.js";const l={};function n(o,s){return t(),e("div",null,s[0]||(s[0]=[a('<p>近期在搭建开发环境时需要用到部分生产数据用于测试，单独作一篇文章来记录相关命令。</p><h2 id="安装-mongodb-org-tools" tabindex="-1"><a class="header-anchor" href="#安装-mongodb-org-tools"><span>安装 mongodb-org-tools</span></a></h2><p>在 Ubuntu 22.04 上，<code>mongo-tools</code> 包可能不可用。可以直接安装 MongoDB 客户端工具，它们包含了 <code>mongoexport</code> 工具。以下是安装步骤：</p><h3 id="导入-mongodb-公共-gpg-密钥" tabindex="-1"><a class="header-anchor" href="#导入-mongodb-公共-gpg-密钥"><span>导入 MongoDB 公共 GPG 密钥：</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">wget</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -qO</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://www.mongodb.org/static/pgp/server-6.0.asc</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-key</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> -</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="创建-mongodb-源列表文件" tabindex="-1"><a class="header-anchor" href="#创建-mongodb-源列表文件"><span>创建 MongoDB 源列表文件：</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tee</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/apt/sources.list.d/mongodb-org-6.0.list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="更新包数据库" tabindex="-1"><a class="header-anchor" href="#更新包数据库"><span>更新包数据库：</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> update</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="安装-mongodb-客户端工具" tabindex="-1"><a class="header-anchor" href="#安装-mongodb-客户端工具"><span>安装 MongoDB 客户端工具：</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mongodb-org-tools</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="导出数据" tabindex="-1"><a class="header-anchor" href="#导出数据"><span>导出数据</span></a></h2><h3 id="导出单表-集合-collection" tabindex="-1"><a class="header-anchor" href="#导出单表-集合-collection"><span>导出单表（集合 collection）</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mongoexport</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --uri=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">mongodb://localhost:27017</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --db=mydatabase</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --collection=mycollection</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --out=output.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="导出单个数据库" tabindex="-1"><a class="header-anchor" href="#导出单个数据库"><span>导出单个数据库</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mongodump</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --uri=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">mongodb://localhost:27017</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --db=mydatabase</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --out=output</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="导出所有数据库" tabindex="-1"><a class="header-anchor" href="#导出所有数据库"><span>导出所有数据库</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mongodump</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --uri=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">mongodb://localhost:27017</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --out=output</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="导入数据" tabindex="-1"><a class="header-anchor" href="#导入数据"><span>导入数据</span></a></h2><h3 id="导入单表-集合-collection" tabindex="-1"><a class="header-anchor" href="#导入单表-集合-collection"><span>导入单表（集合 collection）</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mongoimport</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --uri=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">mongodb://localhost:27017</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --db=mydatabase</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --collection=mycollection</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --file=output.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="导入单个数据库" tabindex="-1"><a class="header-anchor" href="#导入单个数据库"><span>导入单个数据库</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mongorestore</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --uri=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">mongodb://localhost:27017</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --db=mydatabase</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --drop</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> output/mydatabase</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="导入所有数据库" tabindex="-1"><a class="header-anchor" href="#导入所有数据库"><span>导入所有数据库</span></a></h3><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mongorestore</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --uri=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">mongodb://localhost:27017</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --drop</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> output</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="已存在-key" tabindex="-1"><a class="header-anchor" href="#已存在-key"><span>已存在 key</span></a></h3><p>E11000 duplicate key error collection</p><p>在导入数据时，如果数据库中已经存在相同的 key，可以使用 <code>--drop</code> 参数来删除已有数据。</p><h3 id="已存在数据库" tabindex="-1"><a class="header-anchor" href="#已存在数据库"><span>已存在数据库</span></a></h3><p>在导入数据时，如果数据库已经存在，可以使用 <code>--drop</code> 参数来删除已有数据库。在导出数据时，可以使用 <code>--query</code> 参数来指定导出条件。</p><h3 id="提示身份验证失败-authentication-failed" tabindex="-1"><a class="header-anchor" href="#提示身份验证失败-authentication-failed"><span>提示身份验证失败（Authentication failed）</span></a></h3><p>connection() error occurred during connection handshake: auth error: sasl conversation error: unable to authenticate using mechanism &quot;SCRAM-SHA-1&quot;: (AuthenticationFailed) Authentication failed.</p><p>这是因为 MongoDB 4.0 之后默认使用了 SCRAM-SHA-1 认证方式，而之前的版本使用了 MONGODB-CR 认证方式。可以在连接字符串中指定认证方式：</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mongoimport</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --uri=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">mongodb://localhost:27017</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;" class="highlighted-word">--authenticationDatabase=admin</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --drop</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> output</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',35)]))}const d=i(l,[["render",n],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/article/gokrv7a1/","title":"ubuntu2204中mongodb数据导入导出","lang":"zh-CN","frontmatter":{"title":"ubuntu2204中mongodb数据导入导出","tags":["ubuntu","mongodb","运维","数据库","备份"],"createTime":"2024/09/28 08:36:06","permalink":"/article/gokrv7a1/","description":"近期在搭建开发环境时需要用到部分生产数据用于测试，单独作一篇文章来记录相关命令。 安装 mongodb-org-tools 在 Ubuntu 22.04 上，mongo-tools 包可能不可用。可以直接安装 MongoDB 客户端工具，它们包含了 mongoexport 工具。以下是安装步骤： 导入 MongoDB 公共 GPG 密钥： 创建 Mon...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.ermao.org/article/gokrv7a1/"}],["meta",{"property":"og:title","content":"ubuntu2204中mongodb数据导入导出"}],["meta",{"property":"og:description","content":"近期在搭建开发环境时需要用到部分生产数据用于测试，单独作一篇文章来记录相关命令。 安装 mongodb-org-tools 在 Ubuntu 22.04 上，mongo-tools 包可能不可用。可以直接安装 MongoDB 客户端工具，它们包含了 mongoexport 工具。以下是安装步骤： 导入 MongoDB 公共 GPG 密钥： 创建 Mon..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-06T01:49:49.000Z"}],["meta",{"property":"article:tag","content":"ubuntu"}],["meta",{"property":"article:tag","content":"mongodb"}],["meta",{"property":"article:tag","content":"运维"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"备份"}],["meta",{"property":"article:modified_time","content":"2024-10-06T01:49:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ubuntu2204中mongodb数据导入导出\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-06T01:49:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装 mongodb-org-tools","slug":"安装-mongodb-org-tools","link":"#安装-mongodb-org-tools","children":[{"level":3,"title":"导入 MongoDB 公共 GPG 密钥：","slug":"导入-mongodb-公共-gpg-密钥","link":"#导入-mongodb-公共-gpg-密钥","children":[]},{"level":3,"title":"创建 MongoDB 源列表文件：","slug":"创建-mongodb-源列表文件","link":"#创建-mongodb-源列表文件","children":[]},{"level":3,"title":"更新包数据库：","slug":"更新包数据库","link":"#更新包数据库","children":[]},{"level":3,"title":"安装 MongoDB 客户端工具：","slug":"安装-mongodb-客户端工具","link":"#安装-mongodb-客户端工具","children":[]}]},{"level":2,"title":"导出数据","slug":"导出数据","link":"#导出数据","children":[{"level":3,"title":"导出单表（集合 collection）","slug":"导出单表-集合-collection","link":"#导出单表-集合-collection","children":[]},{"level":3,"title":"导出单个数据库","slug":"导出单个数据库","link":"#导出单个数据库","children":[]},{"level":3,"title":"导出所有数据库","slug":"导出所有数据库","link":"#导出所有数据库","children":[]}]},{"level":2,"title":"导入数据","slug":"导入数据","link":"#导入数据","children":[{"level":3,"title":"导入单表（集合 collection）","slug":"导入单表-集合-collection","link":"#导入单表-集合-collection","children":[]},{"level":3,"title":"导入单个数据库","slug":"导入单个数据库","link":"#导入单个数据库","children":[]},{"level":3,"title":"导入所有数据库","slug":"导入所有数据库","link":"#导入所有数据库","children":[]}]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"已存在 key","slug":"已存在-key","link":"#已存在-key","children":[]},{"level":3,"title":"已存在数据库","slug":"已存在数据库","link":"#已存在数据库","children":[]},{"level":3,"title":"提示身份验证失败（Authentication failed）","slug":"提示身份验证失败-authentication-failed","link":"#提示身份验证失败-authentication-failed","children":[]}]}],"readingTime":{"minutes":1.62,"words":487},"git":{"createdTime":1727485207000,"updatedTime":1728179389000,"contributors":[{"name":"ermaozi","email":"admin@ermao.net","commits":2}]},"autoDesc":true,"filePathRelative":"文档/ubuntu2204中mongodb数据导入导出.md","categoryList":[{"id":"325369","sort":10000,"name":"文档"}]}`);export{d as comp,r as data};

import{_ as i,c as a,a as n,o as e}from"./app-yPRoeTCl.js";const l="/assets/image-B1C2nAph.png",p="/assets/image-1-C6yqvFqP.png",t="/assets/image-2-C_DEbkhZ.png",h="/assets/image-3-1YhQqq3c.png",k="/assets/image-4-CbScWuwR.png",r={};function d(c,s){return e(),a("div",null,s[0]||(s[0]=[n('<p>docker 部署 Aria2 下载器，并在浏览器端配置 Aria2 Explorer</p><h2 id="一小段废话" tabindex="-1"><a class="header-anchor" href="#一小段废话"><span>一小段废话</span></a></h2><p>我家所在的小区运营商不提供公网ip，所以只好使用内网穿透的方式从公网访问家中服务。</p><p>某日想起来查看了一下 nps 服务端的设备监控，90% 的 CPU 使用率吓了我一跳。 经排查，原来是 nps 服务资源占用过高。</p><p><img src="'+l+'" alt="alt text"></p><p>那么为什么一个小小的 nps 服务会有这么高的资源沿用呢？</p><p>原来是我使用了 <a href="https://microsoftedge.microsoft.com/addons/detail/aria2-explorer/jjfgljkjddpcpfapejfkelkbjbehagbh?hl=zh-CN" target="_blank" rel="noopener noreferrer">Aria2 Explorer</a> 这个浏览器插件查看下载进度。但是配置时偷懒选择了 http 协议！</p><p><img src="'+p+`" alt="alt text"></p><p>这样在使用 Aria2 Explorer 查看下载进度时，会无限轮询后端 Aria2 服务，导致 CPU 占用率飙升。</p><p>我赶紧修改了配置，改为 ws 协议，果然 CPU 使用率下降了。</p><p>考虑到会有人和我一样使用 Aria2 Explorer，所以写了这篇文章，希望能帮到大家。</p><h2 id="部署-aria2" tabindex="-1"><a class="header-anchor" href="#部署-aria2"><span>部署 Aria2</span></a></h2><h3 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 docker</span></a></h3><p>在你的下载服务器上执行下方命令</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> wget</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -qO-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://get.docker.com/</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果提示没有安装 wget 的话安装一下就成。</p><h3 id="拉取镜像并运行" tabindex="-1"><a class="header-anchor" href="#拉取镜像并运行"><span>拉取镜像并运行</span></a></h3><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d\\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> aria2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    --restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> unless-stopped</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    --log-opt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> max-size=1m</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> PUID=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$UID</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> PGID=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$GID</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> UMASK_SET=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">022</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> RPC_SECRET=自己设置一个密码</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> RPC_PORT=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">6800</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 6800:6800</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> LISTEN_PORT=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">6888</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 6888:6888</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 6888:6888/udp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/aria2-config:/config</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 下载存放的绝对路径:/downloads</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    p3terx/aria2-pro</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将以上命令中中文的部分替换为你的实际情况。</p><p>例子：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d\\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> aria2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    --restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> unless-stopped</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    --log-opt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> max-size=1m</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> PUID=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$UID</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> PGID=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">$GID</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> UMASK_SET=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">022</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> RPC_SECRET=passwd</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> RPC_PORT=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">6800</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 6800:6800</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -e</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> LISTEN_PORT=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">6888</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 6888:6888</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 6888:6888/udp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/aria2-config:/config</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">    -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/downloads:/downloads</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> \\</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    p3terx/aria2-pro</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行成功后 aria2 就装好了，配置文件不需要修改。</p><h2 id="安装与配置-aria2-explorer" tabindex="-1"><a class="header-anchor" href="#安装与配置-aria2-explorer"><span>安装与配置 Aria2 Explorer</span></a></h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p>这里以 Edge 为例</p><p>打开网址：<a href="https://microsoftedge.microsoft.com/addons/detail/aria2-explorer/jjfgljkjddpcpfapejfkelkbjbehagbh?hl=zh-CN" target="_blank" rel="noopener noreferrer">aria2-explorer</a></p><p>点击获取</p><p><img src="`+t+'" alt="alt text"></p><p>点击添加扩展</p><p><img src="'+h+'" alt="alt text"></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><p><img src="'+k+`" alt="alt text"></p><p><code>Secret Key</code> 是你在 docker run 时设置的 <code>RPC_SECRET</code></p><p><code>RPC URL</code> 是你 aria2 服务器的公网 IP，端口是你在 docker run 时设置的 <code>RPC_PORT</code>，协议使用 <code>ws</code> 或 <code>wss</code> 结尾需要加上 <code>/jsonrpc</code></p><p><code>RPC URL</code> 例子：<code>ws://10.102.3.243:6800/jsonrpc</code></p><p>配置完成后点击保存，如果是使用服务器公网ip的情况就已经 OK 了。</p><p>如果是使用内网穿透且使用 nginx 做了反向代理的话，通过域名是无法直接使用 ws 的。这种情况我们接着往下看。</p><h2 id="使用内网穿透的情况" tabindex="-1"><a class="header-anchor" href="#使用内网穿透的情况"><span>使用内网穿透的情况</span></a></h2><h3 id="配置-nginx" tabindex="-1"><a class="header-anchor" href="#配置-nginx"><span>配置 nginx</span></a></h3><p>在反向代理服务器（内网穿透中转服务器）配置 nginx</p><p>在<code>http</code>区块下加入如下配置，注意修改域名和端口，需要修改的地方加了备注：【按实际情况来写】</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># aria2</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">upstream</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> aria2 </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    least_conn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    server</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> 127.0.0.1:26800 </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">weight</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> max_fails=5 </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">fail_timeout</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">5s</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 26800 是内网穿透对公网暴露的端口【按实际情况来写】</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">server {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    listen </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">80</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    listen </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">443</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ssl http2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    server_name </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">aria2.example.com</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # aria2.example.com 是给 aria2 配置的域名【按实际情况来写】</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> (</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">server_port</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> !~ </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">443){</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        rewrite</span><span style="--shiki-light:#AB5E3F;--shiki-dark:#C4704F;"> ^(/.*)$</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> https://</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">host</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">1</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> permanent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    ssl_certificate </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> /etc/nginx/ssl/aria2.example.com.cer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    ssl_certificate_key </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> /etc/nginx/ssl/aria2.example.com.key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 上面两条是你域名的证书存放的绝对路径【按实际情况来写】</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    ssl_protocols </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">TLSv1.1 TLSv1.2 TLSv1.3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    ssl_ciphers </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    ssl_prefer_server_ciphers on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    ssl_session_cache </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">shared:SSL:10m</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    ssl_session_timeout </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10m</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    add_header </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Strict-Transport-Security </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;max-age=31536000&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    location</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> / </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_pass </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">http://aria2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_http_version </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1.1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_redirect </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    off</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_set_header </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  Host             </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">host</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_set_header </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  X-Real-IP        </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">remote_addr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_set_header </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  X-Forwarded-For  </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">proxy_add_x_forwarded_for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_set_header </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  Upgrade          </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">http_upgrade</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_set_header </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  Connection       </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;Upgrade&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_next_upstream error</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> timeout invalid_header http_500 http_502 http_503 http_504</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_max_temp_file_size </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">  0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_connect_timeout </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">     1800</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     #nginx与upstream server的连接超时时间(单位：s)</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_send_timeout </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">        1800</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     #nginx发送数据至 upstream server超时, 默认60s, 如果连续的60s内没有发送1个字节, 连接关闭</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_read_timeout </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">        1800</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #nginx接收 upstream server数据超时, 默认60s, 如果连续的60s内没有收到1个 字节, 连接关闭</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_buffer_size </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">         4k</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       #代理请求缓存区_这个缓存区间会保存用户的头信息以供Nginx进行规则处理_一 般只要能保存下头信息即可</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_buffers </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">             4</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 32k</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #同上 告诉Nginx保存单个用的几个Buffer最大用多大空间      </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        proxy_busy_buffers_size </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">   64k</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      #如果系统很忙的时候可以申请更大的proxy_buffers 官方推荐*2            proxy_temp_file_write_size 64k;   #proxy缓存临时文件的大小</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置成功后重载 nginx 就 OK 了</p>`,43)]))}const y=i(r,[["render",d],["__file","index.html.vue"]]),o=JSON.parse(`{"path":"/article/b06gglcq/","title":"docker 部署 aria2","lang":"zh-CN","frontmatter":{"createTime":"2024/05/09 12:00:00","tags":["nas","aria2","docker","websocket"],"title":"docker 部署 aria2","permalink":"/article/b06gglcq/","description":"docker 部署 Aria2 下载器，并在浏览器端配置 Aria2 Explorer 一小段废话 我家所在的小区运营商不提供公网ip，所以只好使用内网穿透的方式从公网访问家中服务。 某日想起来查看了一下 nps 服务端的设备监控，90% 的 CPU 使用率吓了我一跳。 经排查，原来是 nps 服务资源占用过高。 alt text 那么为什么一个小小的...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.ermao.org/article/b06gglcq/"}],["meta",{"property":"og:title","content":"docker 部署 aria2"}],["meta",{"property":"og:description","content":"docker 部署 Aria2 下载器，并在浏览器端配置 Aria2 Explorer 一小段废话 我家所在的小区运营商不提供公网ip，所以只好使用内网穿透的方式从公网访问家中服务。 某日想起来查看了一下 nps 服务端的设备监控，90% 的 CPU 使用率吓了我一跳。 经排查，原来是 nps 服务资源占用过高。 alt text 那么为什么一个小小的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T08:12:52.000Z"}],["meta",{"property":"article:tag","content":"nas"}],["meta",{"property":"article:tag","content":"aria2"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"websocket"}],["meta",{"property":"article:modified_time","content":"2024-08-31T08:12:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker 部署 aria2\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-31T08:12:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一小段废话","slug":"一小段废话","link":"#一小段废话","children":[]},{"level":2,"title":"部署 Aria2","slug":"部署-aria2","link":"#部署-aria2","children":[{"level":3,"title":"安装 docker","slug":"安装-docker","link":"#安装-docker","children":[]},{"level":3,"title":"拉取镜像并运行","slug":"拉取镜像并运行","link":"#拉取镜像并运行","children":[]}]},{"level":2,"title":"安装与配置 Aria2 Explorer","slug":"安装与配置-aria2-explorer","link":"#安装与配置-aria2-explorer","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]}]},{"level":2,"title":"使用内网穿透的情况","slug":"使用内网穿透的情况","link":"#使用内网穿透的情况","children":[{"level":3,"title":"配置 nginx","slug":"配置-nginx","link":"#配置-nginx","children":[]}]}],"readingTime":{"minutes":3.72,"words":1116},"git":{"createdTime":1715237867000,"updatedTime":1725091972000,"contributors":[{"name":"ermaozi","email":"admin@ermao.net","commits":1}]},"autoDesc":true,"filePathRelative":"文档/docker部署aria2.md","categoryList":[{"id":"325369","sort":10001,"name":"文档"}]}`);export{y as comp,o as data};

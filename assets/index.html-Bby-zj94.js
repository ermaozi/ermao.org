import{_ as i,c as a,e as n,o as t}from"./app-BwRyvxBE.js";const e="/assets/image-Dj8zl3Nl.png",l="/assets/image-1-o2TqLA-W.png",h="/assets/image-2-D9A7rO1P.png",p="/assets/image-3-C1Moxh33.png",k="/assets/image-4-C4Tt-8VG.png",r="/assets/image-5-BeWWlyWY.png",d="/assets/image-6-DSA2jhX8.png",g="/assets/image-7-T_Flsomc.png",o="/assets/image-8-Bmcm7RHX.png",c="/assets/image-9-52lDrlox.png",y={};function m(u,s){return t(),a("div",null,s[0]||(s[0]=[n('<p>搭建二猫子剑网三QQ群机器人，保姆级教程。</p><h2 id="针对高手的一句话搭建" tabindex="-1"><a class="header-anchor" href="#针对高手的一句话搭建"><span>针对高手的一句话搭建</span></a></h2><p>随便搞一个支持 OneBot v11 的客户端，然后把反向 ws 地址改为：</p><p><code>wss://ermaozi.cn/onebot/v11/ws</code></p><h2 id="针对不爱折腾的一句话攻略" tabindex="-1"><a class="header-anchor" href="#针对不爱折腾的一句话攻略"><span>针对不爱折腾的一句话攻略</span></a></h2><p>访问我的淘宝店 -&gt; <a href="https://item.taobao.com/item.htm?ft=t&amp;id=822481210366" target="_blank" rel="noopener noreferrer">https://item.taobao.com/item.htm?ft=t&amp;id=822481210366</a></p><p>直接购买现成的</p><h2 id="购买服务器并登录" tabindex="-1"><a class="header-anchor" href="#购买服务器并登录"><span>购买服务器并登录</span></a></h2><details class="hint-container details"><summary>点击查看详情</summary><h3 id="购买" tabindex="-1"><a class="header-anchor" href="#购买"><span>购买</span></a></h3><p>腾讯云 <a href="https://curl.qcloud.com/rf4aBb9m" target="_blank" rel="noopener noreferrer">https://curl.qcloud.com/rf4aBb9m</a></p><p>云服务器优点是稳定，且有公网IP，缺点就是贵。如果是富婆富哥可以无视此缺点。多翻翻，买个最便宜的。</p><p><img src="'+e+'" alt="alt text"></p><p>购买时地域选择 <strong>上海</strong>，镜像选择 <strong>Docker</strong></p><p><img src="'+l+'" alt="alt text"></p><p>上海离我的服务器近，连接能快一点，镜像选择 Docker 可以不用再装docker，省事。</p><h3 id="找到你的ip与密码" tabindex="-1"><a class="header-anchor" href="#找到你的ip与密码"><span>找到你的IP与密码</span></a></h3><p>先进控制台，它的位置是不确定的（位置与样貌随时间改变而改变），但是可以肯定名字不会变，我只能帮你到这了</p><p><img src="'+h+'" alt="alt text"></p><p>进入轻量应用服务器</p><p><img src="'+p+'" alt="alt text"></p><p>因为我们买的是轻量服务器，所以选这个</p><p><img src="'+k+'" alt="alt text"></p><p>（公）后面的ip就是你的公网ip，记下来，存在记事本里，或是抄下来</p><p><img src="'+r+'" alt="alt text"></p><p>然后点击更多，选择重置密码，重置完成后，<strong>请运用你的所有智慧，不择手段地记住它，狠狠地记住这个密码</strong></p><p>如果你的系统装错了也可以点击更多里面的重装系统进行重装。</p><h3 id="登录服务器" tabindex="-1"><a class="header-anchor" href="#登录服务器"><span>登录服务器</span></a></h3><p>按 <code>win + R</code> 打开运行窗口，输入 <code>cmd</code> 回车</p><p><img src="'+d+'" alt="alt text"></p><p>输入 <code>ssh ubuntu@你的服务器ip</code> 回车</p><p><img src="'+g+'" alt="alt text"></p><p>如果是第一次登录服务器，会提示你是否确认连接，输入 <code>yes</code> 回车</p><p>完成后会提示输入密码，把上面重置过的密码手动输入或是复制进去都可以，<strong>注意</strong>：这个时候输入的密码并不会显示出来，输入完成后直接按回车就好了。</p><p><img src="'+o+`" alt="alt text"></p><p>事已至此，你已经成功登录到服务器了。</p></details><h2 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 Docker</span></a></h2><p>如果你选择了 Docker 镜像，那么恭喜你，你已经省去了一大部分麻烦，因为 Docker 镜像已经帮你装好了 Docker。</p><p>如果你选择了 Ubuntu 镜像，那么你需要自己安装 Docker。</p><p>顺序执行以下命令即可：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> update</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> wget</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -qO-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://get.docker.com/</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装成功后，输入 <code>docker -v</code> 查看版本号，如果有版本号输出，说明安装成功。</p><p><img src="`+c+`" alt="alt text"></p><h2 id="安装-lagrange" tabindex="-1"><a class="header-anchor" href="#安装-lagrange"><span>安装 lagrange</span></a></h2><p>lagrange 是一个支持 OneBot v11 的客户端，我们可以使用它来对接到我们服务器。</p><p>创建并修改配置文件</p><p>点击查看 -&gt; <a href="https://www.runoob.com/linux/linux-vim.html" target="_blank" rel="noopener noreferrer">vim 入门教程</a></p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 创建目录，目录名称是自己的QQ号，方便以后维护</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/lagrange/你的QQ号</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 用 vim 打开配置文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/lagrange/你的QQ号/appsettings.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将一下内容录入<code>appsettings.json</code></p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Logging</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">        &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">LogLevel</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">            &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Default</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Information</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">            &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Microsoft</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Warning</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">            &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Microsoft.Hosting.Lifetime</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Information</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">SignServerUrl</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://sign.lagrangecore.org/api/sign/25765</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Account</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">        &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Uin</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">        &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Password</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">        &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Protocol</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Linux</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">        &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">AutoReconnect</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">        &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">GetOptimumServer</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Message</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">IgnoreSelf</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">StringPost</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">QrCode</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">        &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">ConsoleCompatibilityMode</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    },</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Implementations</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">            &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Type</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ReverseWebSocket</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">            &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Host</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">wss://ermaozi.cn</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">            &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Port</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 443</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">            &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Suffix</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/onebot/v11/ws</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">            &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">ReconnectInterval</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5000</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">            &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">HeartBeatInterval</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5000</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">            &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">AccessToken</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动你的 lagrange</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -it</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 你的QQ号</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --network</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> host</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> always</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/lagrange/你的QQ号:/app/data</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ghcr.io/lagrangedev/lagrange.onebot:edge</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>完成扫码登录后按 <code>Ctrl + C</code> 退出</p><h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录"><span>附录</span></a></h2><p>常用的 docker 命令</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 查看日志</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> logs</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --tail</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 100</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 你的QQ号</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 重启容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 你的QQ号</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 重新登录</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/lagrange/你的QQ号</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> device.json</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> keystore.json</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> lagrange-0.db</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 你的QQ号</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -it</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 你的QQ号</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --network</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> host</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> always</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/lagrange/你的QQ号:/app/data</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ghcr.io/lagrangedev/lagrange.onebot:edge</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 清除所有容器日志</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ps</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -qa</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --no-trunc</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">xargs</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -I</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /var/lib/docker/containers/{}/{}-json.log</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)]))}const v=i(y,[["render",m],["__file","index.html.vue"]]),B=JSON.parse(`{"path":"/article/pyt7rrkd/","title":"自己一只搭建二猫子 QQ 机器人","lang":"zh-CN","frontmatter":{"createTime":"2024/05/08 12:00:00","tags":["机器人"],"title":"自己一只搭建二猫子 QQ 机器人","permalink":"/article/pyt7rrkd/","description":"搭建二猫子剑网三QQ群机器人，保姆级教程。 针对高手的一句话搭建 随便搞一个支持 OneBot v11 的客户端，然后把反向 ws 地址改为： wss://ermaozi.cn/onebot/v11/ws 针对不爱折腾的一句话攻略 访问我的淘宝店 -> https://item.taobao.com/item.htm?ft=t&id=822481210...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.ermao.org/article/pyt7rrkd/"}],["meta",{"property":"og:title","content":"自己一只搭建二猫子 QQ 机器人"}],["meta",{"property":"og:description","content":"搭建二猫子剑网三QQ群机器人，保姆级教程。 针对高手的一句话搭建 随便搞一个支持 OneBot v11 的客户端，然后把反向 ws 地址改为： wss://ermaozi.cn/onebot/v11/ws 针对不爱折腾的一句话攻略 访问我的淘宝店 -> https://item.taobao.com/item.htm?ft=t&id=822481210..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-01T13:26:01.000Z"}],["meta",{"property":"article:tag","content":"机器人"}],["meta",{"property":"article:modified_time","content":"2024-09-01T13:26:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自己一只搭建二猫子 QQ 机器人\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-01T13:26:01.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"针对高手的一句话搭建","slug":"针对高手的一句话搭建","link":"#针对高手的一句话搭建","children":[]},{"level":2,"title":"针对不爱折腾的一句话攻略","slug":"针对不爱折腾的一句话攻略","link":"#针对不爱折腾的一句话攻略","children":[]},{"level":2,"title":"购买服务器并登录","slug":"购买服务器并登录","link":"#购买服务器并登录","children":[]},{"level":2,"title":"安装 Docker","slug":"安装-docker","link":"#安装-docker","children":[]},{"level":2,"title":"安装 lagrange","slug":"安装-lagrange","link":"#安装-lagrange","children":[]},{"level":2,"title":"附录","slug":"附录","link":"#附录","children":[]}],"readingTime":{"minutes":3.24,"words":971},"git":{"createdTime":1715161281000,"updatedTime":1725197161000,"contributors":[{"name":"ermaozi","email":"admin@ermao.net","commits":2}]},"autoDesc":true,"filePathRelative":"文档/自己一只搭建二猫子QQ机器人.md","categoryList":[{"id":"325369","sort":10000,"name":"文档"}]}`);export{v as comp,B as data};

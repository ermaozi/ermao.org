import{_ as i,c as a,a as n,o as l}from"./app-D0OXagnb.js";const t="/assets/image-BpFb4UBG.png",e="/assets/image-1-CnAQFYnj.png",h="/assets/image-2-BMEYNyEX.png",p="/assets/image-3-k5JE0zAy.png",k="/assets/image-4-CM5ByhA6.png",d="/assets/image-5-ftYNt44L.png",r="/assets/image-6-ZeLyxXuO.png",g="/assets/image-7-DbDg7rGF.png",c="/assets/image-8-DqE8NO_A.png",y="/assets/image-9-BkAqlnfN.png",o="/assets/image-10-CTEEseEi.png",m="/assets/image-11-wn_7-GTX.png",A="/assets/image-12-q80n8KFE.png",v="/assets/image-13-MPsWjJ2e.png",B="/assets/image-14-Dd2ZMWsF.png",D={};function u(b,s){return l(),a("div",null,s[0]||(s[0]=[n('<p>据媒体报导，2022届高校毕业生规模预计达1076万人，同比增加167万人，再创历史新高。</p><p>如此大规模的毕业生涌入人才市场，企业该如何消化呢？又有什么办法能够降低就业难度呢？</p><p>以我拙见，这并非老板需要考虑的问题，而是需要我们在职社畜来进行努力。努力的方向也很简单：停止内卷、投身摸鱼事业，降低单人工作量以增加就业岗位。</p><p>今天，就教大家一个摸鱼小技巧——使用Vim上班看小说。</p><h2 id="一、声明" tabindex="-1"><a class="header-anchor" href="#一、声明"><span>一、声明</span></a></h2><p>本教程仅适用于部分程序开发岗。</p><p>若是HR、医生、教师、设计师、警察、财务等工作中很少用到代码编辑器的岗位则不适用本教程。如果因为本教程而导致遭到领导训斥，本文作者不承担任何责任。</p><h2 id="二、下载并安装-vim-会装的同学请跳过这一步" tabindex="-1"><a class="header-anchor" href="#二、下载并安装-vim-会装的同学请跳过这一步"><span>二、下载并安装 Vim（会装的同学请跳过这一步）</span></a></h2><p>这里只提供windows的下载与安装方法。</p><p>官方下载地址：https://www.vim.org/download.php#pc</p><p><img src="'+t+'" alt="alt text"></p><p>点这个gvimxx.exe进行下载</p><p>下载完成后直接打开，有的时候电脑比较敏感，会提示有风险。其实没啥风险。点击更多信息里面的仍要安装就可以了。</p><p><img src="'+e+'" alt="alt text"></p><p><img src="'+h+'" alt="alt text"></p><p>然后无脑下一步就可以了。</p><p>安装成功后设置环境变量</p><p>在桌面的快捷方式上右键，打开文件所在位置。</p><p><img src="'+p+'" alt="alt text"></p><p>复制刚刚打开的目录路径</p><p><img src="'+k+'" alt="alt text"></p><p>按 win 键，输入“环境变量”并点击“编辑系统环境变量”</p><p><img src="'+d+'" alt="alt text"></p><p>依次进行：点击“环境变量” – 双击“Path” – 双击空白处 – 粘贴前面复制的 vim 目录路径 – 一路点击“确定”</p><p><img src="'+r+'" alt="alt text"></p><p>按 win 键，输入“powershell” 并按回车进入 powershell。</p><p>在 powershell 中执行“vim –version”检查一下是否安装成功了吧！</p><p><img src="'+g+`" alt="alt text"></p><h2 id="三、配置-vim" tabindex="-1"><a class="header-anchor" href="#三、配置-vim"><span>三、配置 vim</span></a></h2><p>在 powershell 中执行“vim ~/.vimrc”</p><p>按一下 “:” 键（英文 “:”），输入 “set paste”并按回车进入粘贴模式，此模式文本粘贴将会保留原有的文本格式，而不会自动格式化。</p><p>然后按 “i” 键，进入编辑模式。</p><p>把下面的内容复制进去。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&quot; 按一下空格往下翻两行</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">map &lt;Space&gt; 2j</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 老板键</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 按</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> F2</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 保存退出</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">map</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">F</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">2&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Es</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">c</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ZZ</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&quot; 记忆上次编辑位置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">autocmd BufReadPost *</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">\\ if line(&quot;&#39;\\&quot;&quot;)&gt;0&amp;&amp;line(&quot;&#39;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">\\</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&quot;&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">=line(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&quot;$&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">) </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">\\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> exe</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">normal g&#39;</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">\\</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> endif</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&quot; 设置文件编码格式</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">set encoding=utf-8</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">set fileencodings=utf-8,chinese,latin-1,gbk,gb18030,gk2312</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">if has(&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">win32</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&quot;)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  set fileencoding=chinese</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">else</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  set fileencoding=utf-8</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">endif</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 允许退格键删除和tab操作</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> smartindent</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> smarttab</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> expandtab</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tabstop=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> softtabstop=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> shiftwidth=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">4</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> backspace=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> textwidth=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">79</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nu</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&quot; 高亮</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">syntax on</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">colorscheme</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> delek</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&quot;colorscheme elflord</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">colorscheme</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> murphy</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">colorscheme</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pablo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完事按 ”Esc“ 键，输入”:wp!“并按回车，保存退出。前面的冒号跟叹号都是英文符号！</p><p><img src="`+c+'" alt="alt text"></p><p>这样 vim 的配置就大功告成了。</p><h2 id="四、普通的看小说" tabindex="-1"><a class="header-anchor" href="#四、普通的看小说"><span>四、普通的看小说</span></a></h2><p>随便打开一个编辑器或是IDE，只要是带命令窗口的就可以，比如 vscode、pycharm、eclipes，这里拿 vscode 做演示。</p><p>在命令窗口中执行 ”vim 小说的绝对路径“ 就可以打开小说了。</p><p><img src="'+y+'" alt="alt text"></p><p>效果是这样</p><p><img src="'+o+'" alt="alt text"></p><p>按空格可以往下翻两行，按 F2 可以保存并退出。再次打开时还可以继续上次看的位置继续看。</p><h2 id="五、powershell-下更优雅地看小说" tabindex="-1"><a class="header-anchor" href="#五、powershell-下更优雅地看小说"><span>五、powershell 下更优雅地看小说</span></a></h2><p>在powershell中执行命令<code>New-Item -Type file -Force $profile</code>创建profile</p><p><img src="'+m+`" alt="alt text"></p><p>执行<code>vim $profile</code>打开profile，并切换倒粘贴编辑模式，上文中有写。</p><p>然后把以下内容粘贴进去，其中第三行是存放小说的绝对路径，根据实际情况修改，切记不要有中文。</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> rn</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    param</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">([</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">set</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">novel_dir</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">C:\\Users\\Administrator\\Documents\\txt</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-not</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Test-Path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">novel_dir</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">\\novel</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)){</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        echo </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">novel_dir</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">\\novel</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">cur_txt_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">cat </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">novel_dir</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">\\novel</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ($</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -like</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-l</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name_list</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> dir </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">novel_dir</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">\\</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.txt</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name_list.basename.count</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -eq</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">            echo </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">There is no txt file in the </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">novel_dir</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">            ii </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">novel_dir</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> elseif</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name_list.basename.count</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -eq</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name_list.basename</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> else</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -lt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name_list.basename.length</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">++){</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">                if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name_list.basename</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -like</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">cur_txt_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">                    &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">* </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> +</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name_list.basename</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> else</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                    $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name_list.basename</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">                }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">            }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ($</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -like</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-o</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        ii </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">novel_dir</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">set</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">new_path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">novel_dir\\</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">set.txt</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Test-Path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">new_path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">            echo </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">set</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">novel_dir</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">\\novel</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">            return</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> else</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">            echo </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">The path does not exist. use &#39;rn -l&#39;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">novel_path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">novel_dir\\</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">cur_txt_name.txt</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-not</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">Test-Path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">novel_path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)){</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        echo </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">The path </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">novel_path does not exist. use &#39;rn -l&#39; and &#39;rn -set &lt;text name&gt;&#39;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    vim </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">novel_path</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成后保存退出，并重新打开powershell。</p><p>power中执行 <code>rn -o</code>可以打开小说存放目录。</p><p><img src="`+A+'" alt="alt text"></p><p><code>rn -l</code> 可以列出该目录中的所有小说，如果没有小说则会提示。</p><p><img src="'+v+'" alt="alt text"></p><p><code>rn -s 小说名</code>可以设置默认小说</p><p><img src="'+B+'" alt="alt text"></p><p>然后再输入<code>rn</code>就可以直接看小说了！</p>',58)]))}const _=i(D,[["render",u],["__file","index.html.vue"]]),E=JSON.parse(`{"path":"/article/yifph1jd/","title":"使用Vim上班看小说","lang":"zh-CN","frontmatter":{"title":"使用Vim上班看小说","tags":["Vim","小说","摸鱼"],"createTime":"2022/07/16 16:00:02","permalink":"/article/yifph1jd/","description":"据媒体报导，2022届高校毕业生规模预计达1076万人，同比增加167万人，再创历史新高。 如此大规模的毕业生涌入人才市场，企业该如何消化呢？又有什么办法能够降低就业难度呢？ 以我拙见，这并非老板需要考虑的问题，而是需要我们在职社畜来进行努力。努力的方向也很简单：停止内卷、投身摸鱼事业，降低单人工作量以增加就业岗位。 今天，就教大家一个摸鱼小技巧——使...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.ermao.org/article/yifph1jd/"}],["meta",{"property":"og:title","content":"使用Vim上班看小说"}],["meta",{"property":"og:description","content":"据媒体报导，2022届高校毕业生规模预计达1076万人，同比增加167万人，再创历史新高。 如此大规模的毕业生涌入人才市场，企业该如何消化呢？又有什么办法能够降低就业难度呢？ 以我拙见，这并非老板需要考虑的问题，而是需要我们在职社畜来进行努力。努力的方向也很简单：停止内卷、投身摸鱼事业，降低单人工作量以增加就业岗位。 今天，就教大家一个摸鱼小技巧——使..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T08:12:52.000Z"}],["meta",{"property":"article:tag","content":"Vim"}],["meta",{"property":"article:tag","content":"小说"}],["meta",{"property":"article:tag","content":"摸鱼"}],["meta",{"property":"article:modified_time","content":"2024-08-31T08:12:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用Vim上班看小说\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-31T08:12:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、声明","slug":"一、声明","link":"#一、声明","children":[]},{"level":2,"title":"二、下载并安装 Vim（会装的同学请跳过这一步）","slug":"二、下载并安装-vim-会装的同学请跳过这一步","link":"#二、下载并安装-vim-会装的同学请跳过这一步","children":[]},{"level":2,"title":"三、配置 vim","slug":"三、配置-vim","link":"#三、配置-vim","children":[]},{"level":2,"title":"四、普通的看小说","slug":"四、普通的看小说","link":"#四、普通的看小说","children":[]},{"level":2,"title":"五、powershell 下更优雅地看小说","slug":"五、powershell-下更优雅地看小说","link":"#五、powershell-下更优雅地看小说","children":[]}],"readingTime":{"minutes":4.5,"words":1349},"git":{"createdTime":1725091972000,"updatedTime":1725091972000,"contributors":[{"name":"ermaozi","email":"admin@ermao.net","commits":1}]},"autoDesc":true,"filePathRelative":"文档/使用Vim上班看小说.md","categoryList":[{"id":"325369","sort":10002,"name":"文档"}]}`);export{_ as comp,E as data};

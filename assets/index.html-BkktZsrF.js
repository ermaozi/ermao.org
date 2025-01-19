import{_ as i,c as a,a as n,o as e}from"./app-Czptu-Jj.js";const t={};function l(h,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h3 id="python-生成器详解" tabindex="-1"><a class="header-anchor" href="#python-生成器详解"><span>Python 生成器详解</span></a></h3><p>生成器是 Python 中非常重要的特性之一，它能够让你以一种优雅且高效的方式处理大量数据。生成器可以在需要时动态生成数据，而不是一次性地把所有数据加载到内存中，这在处理大规模数据集时非常有用。本文将详细讲解生成器的概念、如何定义生成器、以及它的常见用途和最佳实践。</p><h4 id="_1-什么是生成器" tabindex="-1"><a class="header-anchor" href="#_1-什么是生成器"><span>1. 什么是生成器？</span></a></h4><p>生成器是一种特殊的迭代器，它是通过 <code>yield</code> 关键字而不是 <code>return</code> 返回值的函数。生成器与普通函数的最大区别在于，它们在执行过程中会“暂停”，并能够在之后的调用中继续执行。这种行为使得生成器非常适合用来处理需要大量数据或懒加载的情况。</p><h5 id="生成器与普通函数的区别" tabindex="-1"><a class="header-anchor" href="#生成器与普通函数的区别"><span>生成器与普通函数的区别：</span></a></h5><ul><li><strong>普通函数</strong>：执行时会返回一个结果，函数执行完毕。</li><li><strong>生成器函数</strong>：通过 <code>yield</code> 关键字返回一个值，且每次调用时会从上次暂停的地方继续执行。</li></ul><h4 id="_2-如何定义生成器" tabindex="-1"><a class="header-anchor" href="#_2-如何定义生成器"><span>2. 如何定义生成器？</span></a></h4><p>定义生成器的语法与普通函数类似，不同之处在于使用了 <code>yield</code> 关键字来返回值。</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> simple_generator</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">():</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    yield</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    yield</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    yield</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> simple_generator</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 输出: 1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 输出: 2</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 输出: 3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>yield</code> 每次生成一个值，并暂停函数的执行，直到 <code>next()</code> 再次被调用时，生成器从上次停止的地方继续执行。</li></ul><h4 id="_3-生成器的迭代" tabindex="-1"><a class="header-anchor" href="#_3-生成器的迭代"><span>3. 生成器的迭代</span></a></h4><p>生成器是可迭代的对象，可以使用 <code>for</code> 循环来遍历它。<code>for</code> 循环会自动处理生成器的状态，不需要手动调用 <code>next()</code>。</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> count_up_to</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">limit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    count </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    while</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> count </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> limit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        yield</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> count</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        count </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">+=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> num </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> count_up_to</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">num</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-生成器的优势" tabindex="-1"><a class="header-anchor" href="#_4-生成器的优势"><span>4. 生成器的优势</span></a></h4><p>生成器相对于常规的列表和其他数据结构具有几个显著的优势，尤其是在内存管理和性能方面：</p><ul><li><strong>内存效率</strong>：生成器不会一次性把所有的结果存储在内存中，它们会逐个生成结果。这对于处理大数据集或者无限数据流非常有用。</li><li><strong>惰性求值</strong>：生成器是“惰性求值”的，它们只有在需要的时候才会生成值，这意味着程序可以在不消耗过多资源的情况下，处理一个接一个的项。</li></ul><h4 id="_5-生成器表达式" tabindex="-1"><a class="header-anchor" href="#_5-生成器表达式"><span>5. 生成器表达式</span></a></h4><p>除了使用 <code>yield</code> 关键字定义生成器外，你还可以通过生成器表达式创建生成器。这种方式更简洁，语法上类似于列表推导式，但是它返回的是生成器对象，而不是列表。</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> x </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> x </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> range</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> num </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> gen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">num</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>16</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成器表达式可以在需要时生成每个值，而不像列表推导式那样一次性创建整个列表，因此更加节省内存。</p><h4 id="_6-生成器与迭代器" tabindex="-1"><a class="header-anchor" href="#_6-生成器与迭代器"><span>6. 生成器与迭代器</span></a></h4><p>生成器本质上是一个迭代器。Python 的迭代器协议要求对象实现 <code>__iter__()</code> 和 <code>__next__()</code> 方法。生成器通过 <code>yield</code> 实现了这两个方法，因此它们天然是迭代器。</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">x </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> x </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> range</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">isinstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> iter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 输出: True</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">isinstance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> generator</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 输出: True</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-生成器的常见应用" tabindex="-1"><a class="header-anchor" href="#_7-生成器的常见应用"><span>7. 生成器的常见应用</span></a></h4><p>生成器在许多场景中非常有用，以下是一些常见的应用场景：</p><ul><li><strong>懒加载数据</strong>：当数据量很大，且不希望一次性加载到内存中时，生成器能够逐个项生成数据，节省内存。</li><li><strong>无限序列</strong>：生成器可以生成无限序列，如无限的数字、ID、或者其他数据流。生成器通过 <code>yield</code> 持续返回数据，直到你停止请求。</li></ul><p>例如，生成一个无限的斐波那契数列：</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> infinite_fibonacci</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">():</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> b </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    while</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> True</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        yield</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> a</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> b </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> a </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> b</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> infinite_fibonacci</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> range</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 输出前10个斐波那契数</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>流水线处理</strong>：可以将多个生成器组合在一起，以实现流水线处理。每个生成器完成一种任务，然后将结果传递给下一个生成器。</li></ul><h4 id="_8-生成器的性能" tabindex="-1"><a class="header-anchor" href="#_8-生成器的性能"><span>8. 生成器的性能</span></a></h4><p>由于生成器采用了懒加载的方式，它们在处理大数据时通常比其他数据结构（如列表）更具性能优势。尤其是在需要逐步生成数据，而不需要保存整个数据集时，生成器的性能优势尤为明显。</p><h4 id="_9-捕获异常与生成器" tabindex="-1"><a class="header-anchor" href="#_9-捕获异常与生成器"><span>9. 捕获异常与生成器</span></a></h4><p>生成器支持通过 <code>try...except</code> 机制捕获异常。当生成器遇到异常时，你可以在外部捕获该异常，或在生成器内部处理。</p><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> safe_generator</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">():</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    try</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        yield</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        yield</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    except</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> ValueError</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Caught ValueError</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    yield</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> safe_generator</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 输出: 1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 输出: 2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">throw</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">ValueError</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 捕获异常</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">next</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">gen</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 输出: 3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h4><p>生成器是 Python 中非常强大的工具，它不仅能让你高效地处理大数据集，还能简化许多复杂的编程任务。理解生成器的概念和用法，能够帮助你编写更高效、优雅的代码。在实际开发中，生成器常用于数据处理、懒加载、无限序列等场景，是 Python 编程中必不可少的技巧之一。</p><p>如果你还想了解更多关于生成器的高级用法，或在项目中遇到相关问题，欢迎随时提问！</p><hr><p>阅读更多内容：<a href="https://ermao.net" target="_blank" rel="noopener noreferrer">https://ermao.net</a></p>`,43)]))}const k=i(t,[["render",l],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/article/btszw3im/","title":"Python生成器详解","lang":"zh-CN","frontmatter":{"title":"Python生成器详解","createTime":"2025/01/13 14:14:00","permalink":"/article/btszw3im/","tags":["Python","生成器","迭代器","懒加载","无限序列","流水线处理"],"description":"Python 生成器详解 生成器是 Python 中非常重要的特性之一，它能够让你以一种优雅且高效的方式处理大量数据。生成器可以在需要时动态生成数据，而不是一次性地把所有数据加载到内存中，这在处理大规模数据集时非常有用。本文将详细讲解生成器的概念、如何定义生成器、以及它的常见用途和最佳实践。 1. 什么是生成器？ 生成器是一种特殊的迭代器，它是通过 y...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.ermao.org/article/btszw3im/"}],["meta",{"property":"og:title","content":"Python生成器详解"}],["meta",{"property":"og:description","content":"Python 生成器详解 生成器是 Python 中非常重要的特性之一，它能够让你以一种优雅且高效的方式处理大量数据。生成器可以在需要时动态生成数据，而不是一次性地把所有数据加载到内存中，这在处理大规模数据集时非常有用。本文将详细讲解生成器的概念、如何定义生成器、以及它的常见用途和最佳实践。 1. 什么是生成器？ 生成器是一种特殊的迭代器，它是通过 y..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-13T06:16:21.000Z"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"生成器"}],["meta",{"property":"article:tag","content":"迭代器"}],["meta",{"property":"article:tag","content":"懒加载"}],["meta",{"property":"article:tag","content":"无限序列"}],["meta",{"property":"article:tag","content":"流水线处理"}],["meta",{"property":"article:modified_time","content":"2025-01-13T06:16:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python生成器详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-13T06:16:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"Python 生成器详解","slug":"python-生成器详解","link":"#python-生成器详解","children":[]}],"readingTime":{"minutes":4.85,"words":1455},"git":{"createdTime":1736748981000,"updatedTime":1736748981000,"contributors":[{"name":"root","email":"admin@ermao.net","commits":1}]},"autoDesc":true,"filePathRelative":"python攻略/ Python生成器详解.md","categoryList":[{"id":"655763","sort":10000,"name":"python攻略"}]}`);export{k as comp,d as data};

import{_ as e,c as n,a as o,o as r}from"./app-5jFpGc1b.js";const i={};function l(s,t){return r(),n("div",null,t[0]||(t[0]=[o('<p>HTTP 状态码是服务器响应请求时返回的状态码，用于表示服务器的响应状态。常见的状态码有 5 类，分别以不同的数字开头，每个状态码都有特定的含义。</p><h2 id="_1xx-信息响应" tabindex="-1"><a class="header-anchor" href="#_1xx-信息响应"><span>1xx 信息响应</span></a></h2><ul><li><strong>100 Continue</strong>：继续。客户端应继续其请求。</li><li><strong>101 Switching Protocols</strong>：切换协议。服务器根据客户端的请求切换协议。</li><li><strong>102 Processing</strong>：处理将继续执行。</li></ul><h2 id="_2xx-成功响应" tabindex="-1"><a class="header-anchor" href="#_2xx-成功响应"><span>2xx 成功响应</span></a></h2><ul><li><strong>200 OK</strong>：请求成功。常用于GET和POST请求。</li><li><strong>201 Created</strong>：已创建。请求成功并创建了新的资源。</li><li><strong>202 Accepted</strong>：已接受。请求已接受，但尚未处理。</li><li><strong>203 Non-Authoritative Information</strong>：非权威信息。请求成功，但返回的元信息不是来自原始服务器。</li><li><strong>204 No Content</strong>：无内容。服务器成功处理了请求，但没有返回任何内容。</li><li><strong>205 Reset Content</strong>：重置内容。服务器成功处理了请求，要求客户端重置文档视图。</li><li><strong>206 Partial Content</strong>：部分内容。服务器成功处理了部分GET请求。</li></ul><h2 id="_3xx-重定向消息" tabindex="-1"><a class="header-anchor" href="#_3xx-重定向消息"><span>3xx 重定向消息</span></a></h2><ul><li><strong>300 Multiple Choices</strong>：多种选择。请求的资源有多种表示。</li><li><strong>301 Moved Permanently</strong>：永久移动。请求的资源已被永久的移动到新URI。</li><li><strong>302 Found</strong>：临时移动。资源只是暂时被移动。</li><li><strong>303 See Other</strong>：查看其他。请求的资源存在另一个URI，应使用GET方法获取资源。</li><li><strong>304 Not Modified</strong>：未修改。资源未修改，客户端可以使用缓存的版本。</li><li><strong>305 Use Proxy</strong>：使用代理。请求的资源必须通过代理访问。</li><li><strong>307 Temporary Redirect</strong>：临时重定向。请求的资源临时从不同的URI响应请求。</li><li><strong>308 Permanent Redirect</strong>：永久重定向。请求的资源已永久移动到新URI。</li></ul><h2 id="_4xx-客户端错误响应" tabindex="-1"><a class="header-anchor" href="#_4xx-客户端错误响应"><span>4xx 客户端错误响应</span></a></h2><ul><li><strong>400 Bad Request</strong>：客户端请求的语法错误，服务器无法理解。</li><li><strong>401 Unauthorized</strong>：请求要求用户的身份认证。</li><li><strong>402 Payment Required</strong>：保留将来使用。</li><li><strong>403 Forbidden</strong>：服务器理解请求，但拒绝执行。</li><li><strong>404 Not Found</strong>：请求的资源未找到。</li><li><strong>405 Method Not Allowed</strong>：请求方法不允许。</li><li><strong>406 Not Acceptable</strong>：请求的资源的内容特性无法满足请求头中的条件。</li><li><strong>407 Proxy Authentication Required</strong>：要求代理身份认证。</li><li><strong>408 Request Timeout</strong>：请求超时。</li><li><strong>409 Conflict</strong>：请求与资源的当前状态发生冲突。</li><li><strong>410 Gone</strong>：请求的资源已被永久删除。</li><li><strong>411 Length Required</strong>：请求未定义Content-Length头。</li><li><strong>412 Precondition Failed</strong>：请求头中的前提条件错误。</li><li><strong>413 Payload Too Large</strong>：请求体积过大。</li><li><strong>414 URI Too Long</strong>：请求的URI过长。</li><li><strong>415 Unsupported Media Type</strong>：不支持的媒体类型。</li><li><strong>416 Range Not Satisfiable</strong>：请求的范围无法满足。</li><li><strong>417 Expectation Failed</strong>：服务器无法满足Expect请求头中的要求。</li><li><strong>418 I’m a teapot</strong>：我是一个茶壶（愚人节笑话）。</li><li><strong>421 Misdirected Request</strong>：请求被定向到无法生成响应的服务器。</li><li><strong>422 Unprocessable Entity</strong>：请求格式正确，但由于语义错误无法响应。</li><li><strong>423 Locked</strong>：资源被锁定。</li><li><strong>424 Failed Dependency</strong>：由于之前的请求失败，当前请求失败。</li><li><strong>425 Too Early</strong>：服务器不愿意冒险处理可能重播的请求。</li><li><strong>426 Upgrade Required</strong>：客户端应切换到TLS/1.0。</li><li><strong>428 Precondition Required</strong>：请求需要先决条件。</li><li><strong>429 Too Many Requests</strong>：客户端发送的请求次数过多。</li><li><strong>431 Request Header Fields Too Large</strong>：请求头字段过大。</li><li><strong>451 Unavailable For Legal Reasons</strong>：因法律原因不可用。</li></ul><h2 id="_5xx-服务端错误响应" tabindex="-1"><a class="header-anchor" href="#_5xx-服务端错误响应"><span>5xx 服务端错误响应</span></a></h2><ul><li><strong>500 Internal Server Error</strong>：服务器内部错误，无法完成请求。</li><li><strong>501 Not Implemented</strong>：服务器不支持请求的功能。</li><li><strong>502 Bad Gateway</strong>：作为网关或代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应。</li><li><strong>503 Service Unavailable</strong>：服务器目前无法使用（由于超载或停机维护）。</li><li><strong>504 Gateway Timeout</strong>：网关超时。</li><li><strong>505 HTTP Version Not Supported</strong>：服务器不支持请求中所用的HTTP协议版本。</li><li><strong>506 Variant Also Negotiates</strong>：服务器内部配置错误。</li><li><strong>507 Insufficient Storage</strong>：服务器无法存储完成请求所需的内容。</li><li><strong>508 Loop Detected</strong>：服务器检测到无限循环。</li><li><strong>510 Not Extended</strong>：获取资源所需的策略未满足。</li><li><strong>511 Network Authentication Required</strong>：需要网络认证。</li></ul><h2 id="http-状态码的作用" tabindex="-1"><a class="header-anchor" href="#http-状态码的作用"><span>HTTP 状态码的作用</span></a></h2><h3 id="_1-指示请求结果" tabindex="-1"><a class="header-anchor" href="#_1-指示请求结果"><span>1. 指示请求结果</span></a></h3><p>HTTP 状态码告诉客户端（如浏览器）请求的结果。例如：</p><p><strong>200 OK</strong> 表示请求成功。</p><p><strong>404 Not Found</strong> 表示请求的资源未找到。</p><h3 id="_2-帮助调试和诊断" tabindex="-1"><a class="header-anchor" href="#_2-帮助调试和诊断"><span>2. 帮助调试和诊断</span></a></h3><p>开发者可以通过状态码快速诊断问题。例如：</p><p><strong>500 Internal Server Error</strong> 表示服务器内部错误，可能需要检查服务器日志。</p><p><strong>400 Bad Request</strong> 表示客户端请求有语法错误。</p><h3 id="_3-控制缓存行为" tabindex="-1"><a class="header-anchor" href="#_3-控制缓存行为"><span>3. 控制缓存行为</span></a></h3><p>状态码如 <strong>304 Not Modified</strong> 可以告诉客户端使用缓存的资源，减少带宽消耗和提高加载速度。</p><h3 id="_4-重定向请求" tabindex="-1"><a class="header-anchor" href="#_4-重定向请求"><span>4. 重定向请求</span></a></h3><p>状态码如 <strong>301 Moved Permanently</strong> 和 <strong>302 Found</strong> 用于重定向客户端到新的资源位置。</p><h3 id="_5-安全性和认证" tabindex="-1"><a class="header-anchor" href="#_5-安全性和认证"><span>5. 安全性和认证</span></a></h3><p>状态码如 <strong>401 Unauthorized</strong> 和 <strong>403 Forbidden</strong> 用于控制访问权限和认证。</p><h3 id="_6-优化用户体验" tabindex="-1"><a class="header-anchor" href="#_6-优化用户体验"><span>6. 优化用户体验</span></a></h3><p>通过状态码，服务器可以更好地管理用户请求，提供更流畅的用户体验。例如，<strong>429 Too Many Requests</strong> 可以告知客户端请求过于频繁，需要稍后再试。</p>',28)]))}const g=e(i,[["render",l],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/article/u5a30qtd/","title":"HTTP 状态码大全","lang":"zh-CN","frontmatter":{"title":"HTTP 状态码大全","createTime":"2024/10/06 09:34:56","permalink":"/article/u5a30qtd/","tags":["web","http","状态码","开发","前端"],"description":"HTTP 状态码是服务器响应请求时返回的状态码，用于表示服务器的响应状态。常见的状态码有 5 类，分别以不同的数字开头，每个状态码都有特定的含义。 1xx 信息响应 100 Continue：继续。客户端应继续其请求。 101 Switching Protocols：切换协议。服务器根据客户端的请求切换协议。 102 Processing：处理将继续执...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://www.ermao.org/article/u5a30qtd/"}],["meta",{"property":"og:title","content":"HTTP 状态码大全"}],["meta",{"property":"og:description","content":"HTTP 状态码是服务器响应请求时返回的状态码，用于表示服务器的响应状态。常见的状态码有 5 类，分别以不同的数字开头，每个状态码都有特定的含义。 1xx 信息响应 100 Continue：继续。客户端应继续其请求。 101 Switching Protocols：切换协议。服务器根据客户端的请求切换协议。 102 Processing：处理将继续执..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-06T01:56:12.000Z"}],["meta",{"property":"article:tag","content":"web"}],["meta",{"property":"article:tag","content":"http"}],["meta",{"property":"article:tag","content":"状态码"}],["meta",{"property":"article:tag","content":"开发"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:modified_time","content":"2024-10-06T01:56:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP 状态码大全\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-06T01:56:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1xx 信息响应","slug":"_1xx-信息响应","link":"#_1xx-信息响应","children":[]},{"level":2,"title":"2xx 成功响应","slug":"_2xx-成功响应","link":"#_2xx-成功响应","children":[]},{"level":2,"title":"3xx 重定向消息","slug":"_3xx-重定向消息","link":"#_3xx-重定向消息","children":[]},{"level":2,"title":"4xx 客户端错误响应","slug":"_4xx-客户端错误响应","link":"#_4xx-客户端错误响应","children":[]},{"level":2,"title":"5xx 服务端错误响应","slug":"_5xx-服务端错误响应","link":"#_5xx-服务端错误响应","children":[]},{"level":2,"title":"HTTP 状态码的作用","slug":"http-状态码的作用","link":"#http-状态码的作用","children":[{"level":3,"title":"1. 指示请求结果","slug":"_1-指示请求结果","link":"#_1-指示请求结果","children":[]},{"level":3,"title":"2. 帮助调试和诊断","slug":"_2-帮助调试和诊断","link":"#_2-帮助调试和诊断","children":[]},{"level":3,"title":"3. 控制缓存行为","slug":"_3-控制缓存行为","link":"#_3-控制缓存行为","children":[]},{"level":3,"title":"4. 重定向请求","slug":"_4-重定向请求","link":"#_4-重定向请求","children":[]},{"level":3,"title":"5. 安全性和认证","slug":"_5-安全性和认证","link":"#_5-安全性和认证","children":[]},{"level":3,"title":"6. 优化用户体验","slug":"_6-优化用户体验","link":"#_6-优化用户体验","children":[]}]}],"readingTime":{"minutes":4.51,"words":1354},"git":{"createdTime":1728179389000,"updatedTime":1728179772000,"contributors":[{"name":"ermaozi","email":"admin@ermao.net","commits":1}]},"autoDesc":true,"filePathRelative":"文档/HTTP状态码大全.md","categoryList":[{"id":"325369","sort":10001,"name":"文档"}]}`);export{g as comp,d as data};

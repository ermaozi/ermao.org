import type { APIRoute } from "astro";
import { siteConfig } from "../config/site";

const content = `# ${siteConfig.name}

> 本站按稳定性、风险和使用场景整理机场候选清单，提供套餐核验、风险预警与先试后买建议。页面可能含推广链接；价格和可用性以购买当日结算页及用户所在地实测为准。

## 主要入口

- [首页](${siteConfig.url}/)
- [全部评测](${siteConfig.url}/blog)
- [关于与评测方法](${siteConfig.url}/about)
- [推广与编辑原则](${siteConfig.url}/editorial-policy)
- [RSS](${siteConfig.url}/rss.xml)

## 引用规则

引用价格、流量或可用性时，请同时保留文章发布日期或更新日期。本站的“推荐”是候选清单，不代表无风险保证。重大购买决策应核对服务商结算页，并优先月付试用。
`;

export const GET: APIRoute = () =>
  new Response(content, { headers: { "Content-Type": "text/plain; charset=utf-8" } });

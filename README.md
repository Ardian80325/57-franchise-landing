# 57益智生活館加盟 Landing Page

Meta 廣告導流用的加盟招商 Landing Page，使用 Next.js、Tailwind CSS、Framer Motion 建置，可部署到 Vercel。

## 使用方式

```bash
npm install
npm run dev
```

預設開發網址：

```text
http://localhost:3000
```

## 環境變數

請建立 `.env.local`：

```bash
NEXT_PUBLIC_LINE_URL=https://lin.ee/qEszn67
NEXT_PUBLIC_META_PIXEL_ID=REPLACE_WITH_META_PIXEL_ID
```

若未設定 Meta Pixel ID，Pixel 不會初始化，也不會造成錯誤。LINE 連結目前已設定為官方網址 `https://lin.ee/qEszn67`。

## Meta Pixel 事件

網站載入時：

```js
fbq("track", "PageView")
```

所有 LINE CTA 點擊時：

```js
fbq("track", "Lead")
fbq("trackCustom", "LineClick", { location: "button-location" })
```

## Logo 注意事項

目前已使用你提供的 57益智生活館官方 Logo 圖檔：

- `public/57-logo.png`：原始上傳 Logo
- `public/57-logo-full.webp`：完整 Logo WebP 備份
- `public/57-logo-transparent.webp`：去背後用於品牌主視覺與導覽識別的 Logo
- `public/57-seal-transparent.webp`：導覽列與頁尾使用的去背 57 印章

網站中的輔助視覺為 AI 生成，頁面引用皆使用 WebP 以利載入速度；PNG 原檔保留作為備份，不作為真實店面照片、官方營運截圖或保證市場數據：

- `public/hero-brand-key-visual-v4.webp`：首屏品牌主視覺，已合成去背官方 Logo
- `public/market-momentum-v2.webp`：市場機會與需求成長視覺
- `public/social-demand.webp`：朋友與上班族聚會需求情境
- `public/solution-booking-v2.webp`：智能預約與收款情境
- `public/solution-remote-v2.webp`：遠端營運管理情境
- `public/solution-marketing-v2.webp`：總部行銷支援情境
- `public/compliance-prep.webp`：合法規劃、安全設備與空間檢核情境
- `public/smart-os-v2.webp`：遠端店長與智能營運概念視覺
- `public/cost-planning-v2.webp`：投入成本與設備規劃情境
- `public/hq-growth-v2.webp`：開幕後導客、會員與回流支援情境
- `public/process-line-v2.webp`：加盟流程第 1 步 LINE 初談情境
- `public/process-location-v2.webp`：加盟流程第 2 步商圈場地初評情境
- `public/process-plan-v2.webp`：加盟流程第 3 步合作模式與建置規劃情境
- `public/process-launch-v2.webp`：加盟流程第 4 步培訓與開幕營運情境
- `public/final-cta-v2.webp`：最終 CTA 背景情境

## 部署到 Vercel

1. 將專案推到 GitHub。
2. 在 Vercel 匯入專案。
3. 於 Vercel Project Settings 設定：
   - `NEXT_PUBLIC_LINE_URL`
   - `NEXT_PUBLIC_META_PIXEL_ID`
4. 部署即可。

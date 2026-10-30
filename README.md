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
NEXT_PUBLIC_GTM_ID=GTM-NSJH6D2X
```

正式網站的追蹤由 GTM 統一管理，原本的 MetaPixel 元件不再掛載，避免重複 PageView。預覽與開發網域不載入正式追蹤。設定來源為 `tracking/gtm-57.json`，修改後仍須到 GTM 匯入並發布。

## 追蹤設定

- GTM：`GTM-NSJH6D2X`
- GA4：`G-97PFSE3W2G`
- Meta 像素：`4255894944655975`
- GSC：`https://57-franchise-landing.vercel.app/`（URL 前置字元資源）
- `/privacy` 提供分析停用選擇；預設啟動不等於記錄為明確同意。
- `line_click` → GA4 `line_click`、Meta `LineClick`，附 `button_location`。
- `engaged_visit` → GA4 同名、Meta `EngagedVisit`：前景且有焦點累計 30 秒，當下閱讀深度至少 50%。
- `complete_page_view` → GA4 同名、Meta `CompletePageView`：前景且有焦點累計 60 秒，當下閱讀深度至少 90%。
- 閱讀事件每次首頁掛載各一次。此為閱讀意圖指標，不代表實際讀完全文。
- LINE 使用原生官方連結直接開啟，追蹤不等待、不阻擋跳轉；點擊不送出 `Lead`、`Contact` 或已加好友事件。
- 本次不含 Google Ads。

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
   - `NEXT_PUBLIC_GTM_ID`
4. 部署即可。

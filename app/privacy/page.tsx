import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私權與分析設定｜57益智生活館加盟",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return <main className="mx-auto max-w-3xl px-6 pb-20 pt-12 text-brand-cream">
    <a href="/" className="text-gold-300 underline underline-offset-4">← 返回加盟網站</a>
    <h1 className="mb-8 mt-10 text-3xl font-black">隱私權與分析設定</h1>
    <div className="space-y-6 text-base leading-8 text-brand-cream/80">
      <p>本網站提供 57 益智生活館加盟資訊，不必填寫個人資料即可瀏覽。</p>
      <p>網站預設於進站時啟動 Google Analytics 與 Meta 像素，透過 Google Tag Manager 管理，了解流量來源、頁面瀏覽、一般閱讀情形與官方 LINE 按鈕點擊。這些服務可能使用 Cookie、裝置與瀏覽資訊及識別碼。</p>
      <p>LINE 按鈕會直接開啟官方帳號。按鈕點擊不代表已加入好友、已提出詢問或已加盟；本站不把 LINE 對話、姓名、電話、財務資料或身分資料傳送為網站分析事件。</p>
      <p>您可在下方停用網站分析；設定會保存在此瀏覽器。停用不影響閱讀網站或前往官方 LINE。預設啟動不會被記錄為您已明確同意。</p>
      <p>停用後重新載入頁面，將不再載入分析標籤；先前已傳送的資料不會因此自動刪除。無痕模式或無法保存設定的瀏覽器，可能需要重新選擇。</p>
      <p><a className="text-gold-300 underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google 隱私權政策</a>　<a className="text-gold-300 underline" href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Meta 隱私政策</a></p>
      <p data-analytics-status role="status">正在確認本機分析設定。</p>
      <div className="flex flex-wrap gap-3">
        <button data-analytics-stop type="button" className="min-h-12 rounded-full border border-brand-cream/40 px-6 font-bold">停用網站分析</button>
        <button data-analytics-start type="button" className="min-h-12 rounded-full bg-gold-300 px-6 font-bold text-ink-950">啟用網站分析</button>
      </div>
    </div>
  </main>;
}

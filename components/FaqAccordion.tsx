"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Q1：真的 0 加盟金嗎？",
    answer:
      "57益智生活館提供 0 加盟金合作方案，但加盟主仍需負擔店面建置、設備、裝修、系統與合法變更相關成本。實際金額會依場地條件評估。"
  },
  {
    question: "Q2：我需要自己顧店嗎？",
    answer:
      "57 以無人化營運為核心，顧客可自行預約、付款與使用空間。不過仍需定期處理清潔、維護、補耗材與營運巡檢。若不想自行管理，也可評估總部代管方案。"
  },
  {
    question: "Q3：這個生意合法嗎？",
    answer:
      "57 會以 D1 休閒服務業方向協助評估，並依場地與縣市規範進行合法變更、消防與營業項目確認。實際仍須依主管機關審核為準。"
  },
  {
    question: "Q4：多久可以回本？",
    answer:
      "以 10 桌穩定營運模型試算，約 12～18 個月可回收建置成本。不過實際回收期會受到商圈、租金、使用率、行銷投入與管理品質影響，並非保證收益。"
  },
  {
    question: "Q5：沒有經驗可以加盟嗎？",
    answer:
      "可以。總部會協助進行場地評估、系統建置、操作培訓、開幕行銷與社群經營規劃。"
  },
  {
    question: "Q6：什麼地點最適合？",
    answer:
      "適合年輕族群、上班族、學生族群、住宅密集區、夜生活商圈、停車方便或交通便利的區域。加入 LINE 後可由總部協助初步評估。"
  }
];

export function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto max-w-4xl space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.04] sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="text-base font-black text-brand-cream sm:text-lg">
                {faq.question}
              </span>
              <ChevronDown
                className={[
                  "h-5 w-5 shrink-0 text-gold-300 transition",
                  isOpen ? "rotate-180" : ""
                ].join(" ")}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                >
                  <p className="border-t border-white/10 px-5 py-4 text-sm leading-8 text-brand-cream/74 sm:px-6 sm:text-base">
                    {faq.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

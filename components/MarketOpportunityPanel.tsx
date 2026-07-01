"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Clock3, MapPinned, ShieldCheck, UsersRound } from "lucide-react";

const marketSignals = [
  {
    label: "既有聚會需求",
    text: "朋友、同事、家庭聚會本來就有打牌場景，重點是把場景升級成可預約的空間。",
    icon: UsersRound
  },
  {
    label: "夜間與假日空檔",
    text: "下班後、假日與深夜時段，是傳統店面最難靠人力穩定承接的營業時間。",
    icon: Clock3
  },
  {
    label: "先評估再投入",
    text: "商圈、租金、坪數、消防與地方規範先看清楚，才知道這間店值不值得做。",
    icon: ShieldCheck
  }
];

export function MarketOpportunityPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      className="relative min-w-0"
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-brand-red/16 blur-3xl" />
      <div className="glass-panel relative overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/8] overflow-hidden xl:aspect-[16/7]">
          <Image
            src="/market-momentum-v2.webp"
            alt="台灣社交娛樂與麻將聚會需求情境"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/12 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-gold-300/34 bg-ink-950/58 px-4 py-2 text-xs font-black tracking-[0.22em] text-gold-300 backdrop-blur">
            SOCIAL DEMAND
          </div>
        </div>

        <div className="relative p-5 xl:p-5">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black tracking-[0.24em] text-brand-red">
                TAIWAN SOCIAL ENTERTAINMENT
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-brand-cream xl:text-[1.7rem]">
                不是創造需求，而是把需求變成可管理的生意
              </h2>
            </div>
            <MapPinned className="mt-1 h-7 w-7 shrink-0 text-gold-300" />
          </div>

          <div className="grid gap-3 xl:gap-2">
            {marketSignals.map((signal, index) => {
              const Icon = signal.icon;

              return (
                <motion.div
                  key={signal.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.42, delay: 0.25 + index * 0.06 }}
                  className="rounded-xl border border-brand-cream/10 bg-brand-cream/[0.055] p-4 xl:p-3"
                >
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-300/12 text-gold-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-black text-brand-cream">{signal.label}</p>
                      <p className="mt-1 text-sm leading-7 text-brand-cream/64 xl:leading-6">
                        {signal.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-xl border border-brand-red/28 bg-brand-red/10 p-4 text-sm font-bold leading-7 text-brand-cream/72 xl:p-3 xl:leading-6">
            <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-red" />
            加入 LINE 後，先用你的區域、場地與預算做初步判斷，再談是否適合加盟。
          </div>
          <p className="mt-3 text-xs leading-6 text-brand-cream/42">
            初評會以商圈、租金、坪數、場地條件與地方規範，判斷實際可行性。
          </p>
        </div>
      </div>
    </motion.div>
  );
}

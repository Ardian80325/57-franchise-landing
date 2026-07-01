"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BadgeCheck, BarChart3, Megaphone, MonitorSmartphone } from "lucide-react";

const steps = [
  {
    title: "先確認能不能做",
    body: "從商圈、租金、坪數、桌數與合法變更難度，先判斷這個案子是否值得投入。",
    icon: Megaphone
  },
  {
    title: "再建置自助流程",
    body: "把預約、收款、會員、儲值與門禁流程標準化，讓顧客可以自己完成使用。",
    icon: MonitorSmartphone
  },
  {
    title: "開幕後持續優化",
    body: "用時段使用率、會員回流與廣告成效調整活動，不是開店後放著等客人。",
    icon: BarChart3
  }
];

export function FranchiseFlywheel() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="glass-panel overflow-hidden rounded-2xl"
      >
        <div className="relative aspect-[16/10]">
          <Image
            src="/franchise-consultation.webp"
            alt="57益智生活館加盟初評與營運模型討論情境"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/72 via-ink-950/12 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-300/78">
              Franchise Evaluation
            </p>
            <h3 className="mt-2 max-w-xl text-2xl font-black leading-tight text-brand-cream sm:text-3xl">
              先把區域、成本與營運模型算清楚，再決定值不值得進場。
            </h3>
          </div>
        </div>
      </motion.div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.06 }}
              className="rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.045] p-5"
            >
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-300/12 text-gold-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-brand-green" />
                    <h3 className="text-xl font-black text-brand-cream">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-brand-cream/66">{step.body}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

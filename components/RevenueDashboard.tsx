"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Banknote, ChartNoAxesCombined, Percent, WalletCards } from "lucide-react";

const priceItems = [
  { label: "1 小時", value: "$200" },
  { label: "4 小時", value: "$600" },
  { label: "8 小時", value: "$1,200" }
];

const financials = [
  {
    label: "保守估算常態月營業額",
    value: "NT$ 300,000",
    icon: ChartNoAxesCombined,
    color: "text-gold-300"
  },
  {
    label: "每月固定支出",
    value: "NT$ 80,000～120,000",
    icon: WalletCards,
    color: "text-brand-red"
  },
  {
    label: "預估每月淨利",
    value: "NT$ 180,000～220,000",
    icon: Banknote,
    color: "text-brand-green"
  },
  {
    label: "預估淨利率",
    value: "約 73%",
    icon: Percent,
    color: "text-gold-300"
  }
];

export function RevenueDashboard() {
  return (
    <div className="glass-panel overflow-hidden rounded-2xl p-5 sm:p-6 lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.26em] text-gold-300/70">
            10 Table Model
          </p>
          <h3 className="mt-3 text-2xl font-black text-brand-cream sm:text-3xl">
            參考收費結構
          </h3>
          <div className="mt-6 grid gap-3">
            {priceItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.045] p-4"
              >
                <span className="font-bold text-brand-cream/72">{item.label}</span>
                <span className="number-font text-2xl font-black text-gold-300">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-ink-950/62 p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-black text-brand-cream">營運模型試算</p>
              <p className="text-xs text-brand-cream/50">保守常態月，依實際條件調整</p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-brand-green" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {financials.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <Icon className={["h-5 w-5", item.color].join(" ")} />
                  <p className="mt-4 text-xs font-bold text-brand-cream/56">
                    {item.label}
                  </p>
                  <p className="number-font mt-2 text-xl font-black text-brand-cream">
                    {item.value}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-5 rounded-xl border border-gold-300/20 bg-gold-300/10 p-4">
            <div className="mb-3 flex items-center justify-between text-sm font-black">
              <span>成本回收推進</span>
              <span className="number-font text-gold-300">12～18 個月</span>
            </div>
            <div className="h-3 rounded-full bg-white/10">
              <motion.div
                initial={{ width: "18%" }}
                whileInView={{ width: "73%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1 }}
                className="h-3 rounded-full bg-gradient-to-r from-brand-red via-gold-400 to-brand-green"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

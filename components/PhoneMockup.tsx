"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BarChart3,
  CalendarDays,
  CreditCard,
  KeyRound,
  Power,
  ReceiptText
} from "lucide-react";

const features = [
  { label: "即時營收監控", value: "示意 NT$ 300K", icon: BarChart3 },
  { label: "包廂狀態管理", value: "10 桌", icon: KeyRound },
  { label: "智能電源控制", value: "遠端", icon: Power },
  { label: "預約與會員管理", value: "自動", icon: CalendarDays },
  { label: "儲值與線上支付", value: "串接", icon: CreditCard },
  { label: "營收報表", value: "日 / 月", icon: ReceiptText }
];

export function PhoneMockup() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="glass-panel relative overflow-hidden rounded-2xl"
      >
        <div className="relative aspect-[16/10]">
          <Image
            src="/smart-os-v2.webp"
            alt="無人自助包廂與遠端管理概念情境"
            fill
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/76 via-ink-950/10 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-brand-green/30 bg-brand-green/12 px-3 py-1 text-xs font-black text-brand-green backdrop-blur">
            10 桌模型示意
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-brand-cream/12 bg-ink-950/64 p-5 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-300/72">
              Remote Store Control
            </p>
            <h3 className="mt-2 text-2xl font-black leading-tight text-brand-cream">
              預約、收款、包廂與電源集中掌握，讓店能用更少人力維持營運節奏。
            </h3>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              className="rounded-xl border border-white/10 bg-white/[0.045] p-5"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-gold-300/12 text-gold-300">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-black text-brand-cream">{feature.label}</p>
              <p className="number-font mt-2 text-2xl font-black text-gold-300">
                {feature.value}
              </p>
              {index === 0 ? (
                <p className="mt-2 text-xs leading-5 text-brand-cream/46">
                  以 10 桌營運模型作為示意，非保證收益。
                </p>
              ) : null}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

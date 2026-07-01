"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  Flame,
  Gauge,
  Landmark,
  LayoutDashboard,
  MapPinned,
  Megaphone,
  PhoneCall,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Store,
  UsersRound,
  WalletCards
} from "lucide-react";
import { BrandLockup } from "@/components/BrandLockup";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FranchiseFlywheel } from "@/components/FranchiseFlywheel";
import { LineCta } from "@/components/LineCta";
import { PhoneMockup } from "@/components/PhoneMockup";
import { RevenueDashboard } from "@/components/RevenueDashboard";

const benefitPoints = ["無店長排班壓力", "線上預約付款", "總部協助導客"];

const prospectTakeaways = ["商圈適性初評", "10 桌模型試算", "合作模式建議"];

const marketCards = [
  {
    title: "傳統店面太吃人力",
    body: "24H 營業最怕排班、臨時客服與現場收款，把流程自助化才有機會放大營業時段。",
    icon: UsersRound
  },
  {
    title: "開店怕法規不清楚",
    body: "場地條件、用途、消防與地方規範需要先判斷，不能等租約簽了才發現卡住。",
    icon: ShieldCheck
  },
  {
    title: "營收能不能先試算",
    body: "加盟主需要先看桌數、時段、使用率、租金與固定支出，而不是只聽一句市場很好。",
    icon: BarChart3
  },
  {
    title: "只賣設備會很辛苦",
    body: "真正影響回本的是導客、會員、儲值、活動與日常營運節奏，開幕後才是考驗。",
    icon: Megaphone
  }
];

const solutionCards = [
  {
    title: "智能預約與收款",
    body: "顧客自行選時段、付款、確認使用，降低現場人員反覆溝通與收款壓力。",
    image: "/solution-booking-v2.webp",
    icon: Clock3
  },
  {
    title: "遠端營運管理",
    body: "把營收、包廂狀態、電源、預約與會員資料集中管理，讓加盟主不用天天守在現場也能掌握重點。",
    image: "/solution-remote-v2.webp",
    icon: LayoutDashboard
  },
  {
    title: "總部行銷支援",
    body: "協助廣告投放、社群經營、開幕活動與儲值方案，讓加盟主不是自己摸索。",
    image: "/solution-marketing-v2.webp",
    icon: Flame
  }
];

const complianceItems = ["場地條件", "商圈適性", "法規方向", "消防初評"];

const costItems = [
  { title: "系統建置", value: "約 30 萬", icon: LayoutDashboard },
  { title: "硬體設備", value: "約 200 萬", icon: Store },
  { title: "合法變更", value: "約 50～100 萬", icon: FileCheck2 },
  { title: "總成本參考", value: "約 265 萬起", icon: PiggyBank }
];

const models = [
  {
    name: "方案 A",
    title: "100% 獨立老闆",
    fit: "適合親力親為、追求利潤極大化的加盟主",
    highlights: ["淨利 100% 歸加盟主", "自主營運"],
    featured: false
  },
  {
    name: "方案 B",
    title: "70/30 全權代管",
    fit: "適合想投資，但不想花太多時間管理的人",
    highlights: ["淨利加盟主 70%，總部 30%", "總部全權代管"],
    featured: true
  }
];

const supportItems = [
  { label: "數位廣告投放", icon: Megaphone },
  { label: "粉絲團社群經營", icon: UsersRound },
  { label: "開幕活動規劃", icon: Flame },
  { label: "會員與儲值活動", icon: WalletCards },
  { label: "營運數據優化", icon: Gauge },
  { label: "客服與管理流程建議", icon: PhoneCall }
];

const processSteps = [
  {
    title: "加入 LINE 填寫資料",
    body: "先留下區域、預算與是否已有場地，總部會用這些資訊判斷初步方向。",
    image: "/process-line-v2.webp"
  },
  {
    title: "商圈與場地免費初評",
    body: "先看位置、坪數、租金、動線與地方條件，避免還沒開始就投入錯方向。",
    image: "/process-location-v2.webp"
  },
  {
    title: "確認合作模式與建置規劃",
    body: "依管理時間選擇獨立經營或代管，再規劃桌數、設備、系統與預算。",
    image: "/process-plan-v2.webp"
  },
  {
    title: "培訓、開幕行銷、正式營運",
    body: "完成操作訓練、開幕導客與活動配置，讓店不是開了才開始摸索。",
    image: "/process-launch-v2.webp"
  }
];

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={["mb-10 max-w-3xl", center ? "mx-auto text-center" : ""].join(" ")}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-gold-300/76">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black leading-[1.18] text-brand-cream sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-brand-cream/68 sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-cream/10 bg-ink-950/84 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <BrandLockup compact />
          <div className="hidden items-center gap-6 text-sm font-bold text-brand-cream/68 md:flex">
            <a href="#market" className="transition hover:text-gold-300">
              市場機會
            </a>
            <a href="#revenue" className="transition hover:text-gold-300">
              營收試算
            </a>
            <a href="#faq" className="transition hover:text-gold-300">
              FAQ
            </a>
          </div>
          <LineCta
            location="header"
            compact
            variant="line"
            className="hidden px-4 sm:inline-flex sm:px-5"
          >
            <span className="hidden sm:inline">加入 LINE</span>
            <span className="sm:hidden">LINE</span>
          </LineCta>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink-950 px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <Image
          src="/hero-brand-key-visual-v4.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/88 to-ink-950/42 sm:to-ink-950/24 lg:via-ink-950/78 lg:to-ink-950/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/38" />
        <div className="grid-glow absolute inset-0 opacity-30" />
        <div className="cloud-pattern absolute left-0 top-32 h-24 w-80 opacity-32" />
        <div className="absolute -right-20 bottom-10 h-[28rem] w-[28rem] rounded-full bg-brand-red/18 blur-3xl" />
        <div className="ink-brush absolute -bottom-10 left-0 h-44 w-[60rem]" />

        <div className="relative mx-auto flex w-full max-w-7xl min-w-0 items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="min-w-0 max-w-2xl pb-8 lg:max-w-[44rem]"
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-gold-300/30 bg-ink-950/58 px-4 py-2 text-xs font-black tracking-[0.18em] text-gold-300 shadow-[0_16px_48px_rgba(0,0,0,0.28)] backdrop-blur">
              <Landmark className="h-4 w-4" />
              57益智生活館加盟招商
            </div>
            <h1 className="max-w-[22rem] break-all text-4xl font-black leading-[1.12] text-brand-cream drop-shadow-[0_8px_28px_rgba(0,0,0,0.65)] sm:max-w-3xl sm:break-normal sm:text-5xl sm:leading-[1.08] lg:text-6xl 2xl:text-7xl">
              0 加盟金，打造 24H 無人自助桌遊空間
            </h1>
            <p className="mt-5 max-w-[22rem] break-all text-base leading-8 text-brand-cream/80 drop-shadow-[0_6px_22px_rgba(0,0,0,0.6)] sm:max-w-2xl sm:break-normal sm:text-lg sm:leading-8 2xl:text-xl 2xl:leading-9">
              57益智生活館結合智能預約收款系統、遠端管理後台與合法場地規劃，協助加盟主打造低人力、可試算、可複製的娛樂空間營運模式。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {benefitPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-brand-cream/86 backdrop-blur"
                >
                  <Check className="h-4 w-4 text-brand-green" />
                  {point}
                </span>
              ))}
            </div>
            <div className="mt-7 flex max-w-[22rem] flex-col gap-3 sm:max-w-xl sm:flex-row">
              <LineCta location="hero-primary" className="w-full sm:w-auto">
                加入 LINE｜免費加盟初評
              </LineCta>
              <LineCta location="hero-secondary" variant="ghost" className="w-full px-5 text-base sm:w-auto">
                索取 10 桌試算
              </LineCta>
            </div>
            <div className="mt-6 max-w-[22rem] rounded-2xl border border-brand-cream/10 bg-ink-950/56 p-4 backdrop-blur sm:max-w-xl">
              <p className="text-xs font-black tracking-[0.2em] text-gold-300/72">
                加入 LINE 後先看這三件事
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {prospectTakeaways.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-black text-brand-cream"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="market" className="section-band washi-texture px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Market Reality"
            title="你不缺開店想法，你缺的是一套能被驗證的營運模型"
            description="真正準備投入的加盟主，不會只看裝潢漂亮，而會先確認：需求在哪、成本怎麼算、法規怎麼處理、開幕後誰幫我導客。"
          />
          <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="glass-panel overflow-hidden rounded-2xl"
            >
              <div className="relative min-h-[340px] lg:h-full">
                <Image
                  src="/social-demand.webp"
                  alt="朋友與上班族聚會打麻將的包廂情境"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/86 via-ink-950/18 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-300/78">
                    Demand Already Exists
                  </p>
                  <h3 className="mt-2 max-w-xl text-2xl font-black leading-tight text-brand-cream sm:text-3xl">
                    熟悉的社交娛樂，正在被改造成更省人力的空間生意
                  </h3>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {marketCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.24 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="rounded-xl border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-gold-300/35 hover:bg-white/[0.065]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/14 text-gold-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black text-brand-cream">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-brand-cream/64">{item.body}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band washi-texture bg-ink-950/45 px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="57 System"
            title="57益智生活館不是傳統麻將館，而是一套無人化娛樂空間系統"
            description="不是把設備放進店裡就結束，而是從預約收款、遠端營運、導客活動到場地合規，讓加盟主知道每一步怎麼落地。"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {solutionCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.24 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group overflow-hidden rounded-2xl border border-brand-cream/10 bg-white/[0.045]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={`${card.title}情境視覺`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/78 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-300/28 bg-ink-950/58 text-gold-300 backdrop-blur">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="number-font absolute right-4 top-4 text-sm font-black text-brand-red">
                      0{index + 1}
                    </p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-brand-cream">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-brand-cream/66">{card.body}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-8">
            <FranchiseFlywheel />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Compliance First"
              title="合法規劃，才是加盟生意能長期做的底線"
              description="57益智生活館以 D1 休閒服務業為規劃方向，協助加盟主進行場地條件、商圈適性、法規與消防的初步評估，降低開店前的不確定性。"
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {complianceItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.045] p-5"
                >
                  <ShieldCheck className="mb-4 h-7 w-7 text-gold-300" />
                  <p className="font-black text-brand-cream">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-xl border border-brand-red/30 bg-brand-red/10 p-4 text-sm leading-7 text-brand-cream/68">
              實際申請與變更結果仍須依各縣市主管機關及場地條件審核為準。
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="glass-panel overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[16/11]">
              <Image
                src="/compliance-prep.webp"
                alt="合法規劃與安全設備檢核情境"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-brand-cream/12 bg-ink-950/62 p-4 backdrop-blur">
                <p className="text-sm font-black text-brand-cream">
                  先看場地能不能做，再談裝修與設備。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="smart" className="section-band washi-texture bg-ink-950/56 px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Smart Store OS"
            title="一機掌控全店，手機就是你的遠端店長"
            description="加盟主最在意的是店不用天天守著，也能看懂營運狀態。預約、收款、電源、包廂、會員與報表集中管理，才有機會把人力壓低、把營業時段拉長。"
            center
          />
          <PhoneMockup />
        </div>
      </section>

      <section id="revenue" className="section-band washi-texture bg-ink-950/48 px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Financial Model"
            title="10 桌營運模型試算"
            description="前面看到的是系統如何管理，接著要看這套模式跑起來的收入假設。以下為 10 桌示意模型，再用你的商圈、租金與場地條件進一步校正。"
            center
          />
          <RevenueDashboard />
          <p className="mx-auto mt-6 max-w-5xl text-center text-sm leading-7 text-brand-cream/58">
            以上為營運模型試算，實際營收與獲利會因商圈、租金、坪數、設備配置、營運管理、行銷投入與市場需求而不同，並非保證收益。
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1fr_0.82fr]">
          <div>
            <SectionHeading
              eyebrow="Cost Transparency"
              title="加盟前，先把投入成本講清楚"
              description="投資不是聽故事，是先把建置、設備、合法變更與後續營運費用攤開來看。"
            />
            <div className="grid gap-4 md:grid-cols-2">
              {costItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className={[
                      "rounded-2xl border p-6",
                      index === 3
                        ? "border-gold-300/35 bg-gold-300/12 shadow-gold"
                        : "border-white/10 bg-white/[0.045]"
                    ].join(" ")}
                  >
                    <Icon className="h-8 w-8 text-gold-300" />
                    <p className="mt-5 text-sm font-bold text-brand-cream/58">
                      {item.title}
                    </p>
                    <p className="number-font mt-2 text-3xl font-black text-brand-cream">
                      {item.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            <p className="mt-6 max-w-4xl text-sm leading-7 text-brand-cream/58">
              實際建置費用依店面坪數、屋況、裝修規格、設備數量與地方申請條件而有所不同。
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="glass-panel overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[4/5] min-h-[420px]">
              <Image
                src="/cost-planning-v2.webp"
                alt="加盟成本與場地規劃諮詢情境"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/84 via-ink-950/18 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-gold-300/78">
                  Investment Review
                </p>
                <h3 className="mt-2 text-2xl font-black leading-tight text-brand-cream">
                  把系統、設備、裝修與合法變更攤開來看，投資才有判斷基準。
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="model" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Partnership Model"
            title="兩種合作模式，依你的管理時間選擇"
            center
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {models.map((model, index) => (
              <motion.article
                key={model.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.26 }}
                transition={{ duration: 0.48, delay: index * 0.08 }}
                className={[
                  "rounded-2xl border p-6 sm:p-8",
                  model.featured
                    ? "border-gold-300/35 bg-gradient-to-br from-gold-300/16 via-white/[0.04] to-brand-red/12 shadow-gold"
                    : "border-white/10 bg-white/[0.045]"
                ].join(" ")}
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-black text-gold-300">
                    {model.name}
                  </span>
                  {model.featured ? (
                    <span className="rounded-full bg-brand-green/16 px-4 py-2 text-sm font-black text-brand-green">
                      適合投資型
                    </span>
                  ) : null}
                </div>
                <h3 className="text-3xl font-black text-brand-cream">{model.title}</h3>
                <p className="mt-3 leading-8 text-brand-cream/66">{model.fit}</p>
                <div className="mt-7 grid gap-3">
                  {model.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-950/42 p-4"
                    >
                      <BadgeCheck className="h-5 w-5 text-gold-300" />
                      <span className="font-black text-brand-cream">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="section-band washi-texture bg-ink-950/54 px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="HQ Support"
                title="開幕只是起點，讓顧客回流才是長期獲利的關鍵"
                description="57 的支援重點不只在建置，而是開幕後的導客節奏、社群內容、會員活動與營運數據優化。"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {supportItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.38, delay: index * 0.04 }}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.045] p-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-300/12 text-gold-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="font-black text-brand-cream">{item.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="glass-panel overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src="/hq-growth-v2.webp"
                  alt="開幕後會員與社群導客情境"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/78 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-brand-cream/12 bg-ink-950/62 p-4 backdrop-blur">
                  <p className="font-black text-brand-cream">
                    廣告、社群、會員活動與回流設計，才是空間生意能持續轉動的引擎。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="process" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Onboarding"
            title="4 步完成加盟初評"
            description="從 LINE 初談到商圈、成本、模式與開幕規劃，每一步都先確認可行性，再往下一階走。"
            center
          />
          <div className="grid gap-5 lg:grid-cols-4 lg:items-start">
            {processSteps.map((step, index) => {
              const offsetClass =
                index === 1 ? "lg:translate-y-8" : index === 2 ? "lg:translate-y-16" : index === 3 ? "lg:translate-y-24" : "";

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className={[
                    "group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] transition hover:-translate-y-1 hover:border-gold-300/35",
                    offsetClass
                  ].join(" ")}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={step.image}
                      alt={`${step.title}情境`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                    <div className="number-font absolute left-4 top-4 rounded-full border border-gold-300/28 bg-ink-950/62 px-3 py-1 text-sm font-black text-gold-300 backdrop-blur">
                      0{index + 1}
                    </div>
                  </div>
                  <div className="p-5">
                    <ClipboardCheck className="mb-4 h-6 w-6 text-gold-300" />
                    <h3 className="text-xl font-black leading-8 text-brand-cream">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-brand-cream/62">
                      {step.body}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <div className="mt-16 text-center lg:mt-28">
            <LineCta location="process-section" variant="line">
              加入 LINE｜免費加盟初評
            </LineCta>
          </div>
        </div>
      </section>

      <section id="faq" className="section-band washi-texture bg-ink-950/52 px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading eyebrow="FAQ" title="加盟前最常被問的問題" center />
          <FaqAccordion />
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <Image
          src="/final-cta-v2.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-48"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-950/88 to-brand-red/42" />
        <div className="cloud-pattern absolute inset-x-0 top-8 h-28 opacity-40" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-xl border border-gold-300/32 bg-ink-950/60 text-gold-300">
            <BriefcaseBusiness className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-black leading-tight text-brand-cream sm:text-5xl">
            每區限量開放評估，先確認你的商圈能不能做
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-cream/72 sm:text-lg">
            你不需要馬上決定加盟，先讓總部幫你評估：區域、場地、預算與合作模式是否適合。
          </p>
          <div className="mt-9">
            <LineCta location="final-cta">加入 LINE｜免費加盟初評</LineCta>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-brand-cream/54 sm:flex-row sm:items-center sm:justify-between">
          <BrandLockup compact />
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2">
              <MapPinned className="h-4 w-4 text-gold-300" />
              官方加盟諮詢
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-red" />
              先評估，再投入
            </span>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink-950/92 p-3 backdrop-blur-xl md:hidden">
        <LineCta location="mobile-sticky" variant="line" className="w-full">
          LINE 免費評估加盟
        </LineCta>
      </div>
    </main>
  );
}

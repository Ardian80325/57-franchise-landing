import Image from "next/image";

type BrandLockupProps = {
  className?: string;
  compact?: boolean;
};

export function BrandLockup({ className = "", compact = false }: BrandLockupProps) {
  const sealSize = compact ? "h-12 w-12" : "h-14 w-14";
  const titleSize = compact ? "text-lg sm:text-xl" : "text-2xl";

  return (
    <div
      className={[
        "flex min-w-0 items-center gap-3",
        className
      ].join(" ")}
    >
      <div
        className={[
          "relative shrink-0 overflow-hidden rounded-full bg-brand-paper/95 shadow-[0_10px_28px_rgba(211,33,42,0.22)]",
          sealSize
        ].join(" ")}
      >
        <Image
          src="/57-seal-transparent.webp"
          alt="57益智生活館官方標誌"
          fill
          sizes={compact ? "48px" : "56px"}
          className="object-contain p-0.5"
          priority={compact}
        />
      </div>
      <div className="min-w-0 leading-none">
        <p className={`${titleSize} truncate font-black tracking-[0.04em] text-brand-cream`}>
          57益智生活館
        </p>
        <p className="mt-1 text-[10px] font-black tracking-[0.24em] text-gold-300/78 sm:text-xs">
          加盟招商
        </p>
      </div>
    </div>
  );
}

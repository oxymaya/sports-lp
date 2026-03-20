export default function CtaSection() {
  return (
    <section className="bg-background py-32 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Red glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-[2px] bg-primary" />
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Get Started</span>
          <div className="w-8 h-[2px] bg-primary" />
        </div>

        <h2 className="text-5xl md:text-7xl font-black text-foreground leading-none mb-8 text-balance">
          データで
          <br />
          <span className="text-gradient-red">勝つチームへ</span>
        </h2>

        <p className="text-muted-foreground text-base leading-relaxed mb-12 max-w-xl mx-auto">
          REAXION PROが、あなたのチームのパフォーマンスを科学的に変革します。
          まずはデモで、その効果をご体験ください。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact?type=demo" className="bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase px-12 py-5 hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center">
            デモを予約
          </a>
          <a href="/contact?type=document" className="border border-foreground/30 text-foreground font-bold text-sm tracking-widest uppercase px-12 py-5 hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-200 text-center">
            資料請求
          </a>
        </div>

        {/* External link */}
        <div className="mt-8">
          <a 
            href="https://reaxioncloud.jp/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="border-b border-muted-foreground/30 group-hover:border-foreground/60 transition-colors">
              システムについて詳しくはこちら
            </span>
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="mt-16 pt-16 border-t border-border flex flex-wrap justify-center gap-8 text-xs text-muted-foreground">
          <span>プロ野球 9球団導入</span>
          <span className="text-border">|</span>
          <span>Jリーグ 7クラブ導入</span>
          <span className="text-border">|</span>
          <span>ナショナルトレーニングセンター採用</span>
          <span className="text-border">|</span>
          <span>競技統括団体多数採用</span>
        </div>
      </div>
    </section>
  )
}

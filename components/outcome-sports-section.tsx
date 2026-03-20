const outcomes = [
  { value: '↑23%', label: '判断スピード向上', sub: '平均改善率（導入12週後）' },
  { value: '↑18%', label: 'プレー精度向上', sub: 'パスミス・判断ミス削減' },
  { value: '↑31%', label: 'パフォーマンス安定', sub: '試合中のパフォーマンス変動低減' },
  { value: '↓40%', label: '怪我リスク低減', sub: '反応遅延由来の接触事故' },
]

const sports = [
  { name: 'サッカー', detail: '判断スピード・視野認知', code: 'SOCCER' },
  { name: 'バスケット', detail: '瞬発判断・マルチタスク', code: 'BASKETBALL' },
  { name: '野球', detail: '打撃反応・守備判断', code: 'BASEBALL' },
  { name: 'テニス', detail: '球速対応・予測能力', code: 'TENNIS' },
  { name: 'その他競技', detail: 'すべての競技に対応可能', code: 'OTHER' },
]

export default function OutcomeSportsSection() {
  return (
    <>
      {/* Outcome section */}
      <section className="bg-background py-24 relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Outcome</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-16 text-balance">
            結果に直結する
            <span className="text-gradient-red">トレーニング</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {outcomes.map((o, i) => (
              <div key={i} className="bg-card border border-border p-8 hover:border-primary/40 transition-all duration-300 group">
                <div className="text-4xl md:text-5xl font-black text-primary mb-4 leading-none">{o.value}</div>
                <div className="text-base font-bold text-foreground mb-2">{o.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{o.sub}</div>
                <div className="mt-6 h-[2px] bg-border group-hover:bg-primary/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports section */}
      <section className="bg-secondary/30 py-24 relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Sports</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-16 text-balance">
            あらゆる競技に
            <span className="text-gradient-red">対応</span>
          </h2>

          <div className="flex flex-col gap-3">
            {sports.map((s, i) => (
              <div
                key={s.code}
                className="flex items-center justify-between p-6 bg-card border border-border hover:border-primary/40 transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-black text-muted-foreground tracking-widest w-8">
                    0{i + 1}
                  </span>
                  <div>
                    <div className="text-xl font-black text-foreground group-hover:text-primary transition-colors">
                      {s.name}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.detail}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] text-muted-foreground tracking-widest border border-border px-3 py-1">
                    {s.code}
                  </span>
                  <div className="w-4 h-[1px] bg-muted-foreground group-hover:bg-primary group-hover:w-8 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

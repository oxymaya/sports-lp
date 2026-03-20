import { ArrowRight } from 'lucide-react'

const pillars = [
  { en: 'REACTION', ja: '反応', value: '183ms', label: '平均反応時間', color: 'text-primary' },
  { en: 'DECISION', ja: '判断', value: '94%', label: '選択精度', color: 'text-chart-3' },
  { en: 'COGNITION', ja: '認知', value: 'A+', label: '認知スコア', color: 'text-chart-4' },
]

export default function SolutionSection() {
  return (
    <section className="bg-background py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Solution</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-6 text-balance">
              反応・判断・認知を、
              <br />
              <span className="text-gradient-red">数値化する</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              REAXIONは、競技パフォーマンスに直結する「運動認知能力」を測定・分析します。
              これまで感覚に頼っていた指標を、正確なデータとして可視化することで、
              科学的なトレーニングを実現します。
            </p>

            <div className="flex flex-col gap-4">
              {['測定', '可視化', '改善'].map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-black text-primary">
                    {i + 1}
                  </div>
                  <div className="flex-1 h-[1px] bg-border" />
                  <span className="text-sm font-bold text-foreground tracking-widest">{step}</span>
                  {i < 2 && <ArrowRight size={14} className="text-primary" />}
                </div>
              ))}
            </div>
          </div>

          {/* Pillars visualization */}
          <div className="grid grid-cols-3 gap-4">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.en}
                className="bg-card border border-border p-6 flex flex-col items-center text-center hover:border-primary/40 transition-all duration-300 group relative overflow-hidden"
              >
                <div
                  className="absolute bottom-0 left-0 right-0 bg-primary/5 group-hover:bg-primary/10 transition-all duration-500"
                  style={{ height: `${[60, 80, 70][i]}%` }}
                />
                <div className="relative z-10">
                  <div className="text-[9px] font-black text-muted-foreground tracking-widest mb-3">
                    {pillar.en}
                  </div>
                  <div className={`text-3xl font-black ${pillar.color} mb-2 tabular-nums`}>
                    {pillar.value}
                  </div>
                  <div className="text-sm font-bold text-foreground mb-1">{pillar.ja}</div>
                  <div className="text-[10px] text-muted-foreground">{pillar.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

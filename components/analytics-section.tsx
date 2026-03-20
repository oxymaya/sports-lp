import { TrendingUp, Users, UserCircle, Crosshair } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'チーム内ランキング',
    desc: '全選手の測定値を一覧で比較。ポジション別・チーム全体でのランキングを瞬時に確認できます。',
  },
  {
    icon: Users,
    title: 'ポジション別比較',
    desc: 'FW・MF・DFなど、ポジション特性に応じた専門的な比較分析を提供します。',
  },
  {
    icon: UserCircle,
    title: '個人成長トラッキング',
    desc: '選手一人ひとりの時系列データを可視化。週・月・シーズン単位で成長曲線を追跡します。',
  },
  {
    icon: Crosshair,
    title: 'スカウティング活用',
    desc: '客観的なデータをスカウティングに活用。選手獲得判断の精度を高めます。',
  },
]

export default function AnalyticsSection() {
  return (
    <section className="bg-background py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-primary" />
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Analytics</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Dashboard mockup */}
          <div className="bg-card border border-border overflow-hidden">
            <div className="flex items-center gap-2 p-4 border-b border-border bg-secondary/40">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-chart-5" />
              <div className="w-2 h-2 rounded-full bg-chart-3" />
              <span className="text-[10px] text-muted-foreground ml-2 tracking-widest uppercase">Analytics Dashboard</span>
            </div>
            <div className="p-6">
              {/* Radar-like visual */}
              <div className="flex gap-4 mb-6">
                {['反応', '判断', '認知', '分配', '抑制'].map((label, i) => {
                  const values = [92, 78, 85, 70, 88]
                  return (
                    <div key={label} className="flex-1 flex flex-col items-center gap-2">
                      <div className="text-[9px] text-muted-foreground">{label}</div>
                      <div className="w-full bg-border h-24 relative overflow-hidden">
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-primary/40 transition-all duration-700"
                          style={{ height: `${values[i]}%` }}
                        />
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-primary/20"
                          style={{ height: `${values[i] * 0.6}%` }}
                        />
                      </div>
                      <div className="text-xs font-black text-primary">{values[i]}</div>
                    </div>
                  )
                })}
              </div>

              {/* Player comparison table */}
              <div className="border border-border">
                <div className="grid grid-cols-4 text-[9px] text-muted-foreground tracking-widest uppercase p-2 border-b border-border bg-secondary/30">
                  <span>選手</span>
                  <span className="text-center">反応</span>
                  <span className="text-center">判断</span>
                  <span className="text-center">総合</span>
                </div>
                {[
                  { name: '選手A', react: 171, judge: 96, total: 'S' },
                  { name: '選手B', react: 183, judge: 94, total: 'A+' },
                  { name: '選手C', react: 192, judge: 89, total: 'A' },
                  { name: '選手D', react: 201, judge: 85, total: 'B+' },
                ].map((p, i) => (
                  <div
                    key={p.name}
                    className={`grid grid-cols-4 p-2 text-xs border-b border-border last:border-0 ${i === 0 ? 'bg-primary/5' : ''}`}
                  >
                    <span className="text-foreground font-medium">{p.name}</span>
                    <span className="text-center text-primary font-bold tabular-nums">{p.react}ms</span>
                    <span className="text-center text-chart-4 font-bold">{p.judge}%</span>
                    <span className={`text-center font-black ${i === 0 ? 'text-primary' : 'text-muted-foreground'}`}>{p.total}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-6 text-balance">
              選手の違いを、
              <br />
              <span className="text-gradient-red">データで可視化</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              チーム全体から個人まで、多角的な視点でパフォーマンスを分析。
              コーチングの精度を劇的に高めます。
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <div key={i} className="bg-card border border-border p-5 hover:border-primary/40 transition-colors group">
                    <div className="w-8 h-8 bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon size={14} className="text-primary" />
                    </div>
                    <div className="text-sm font-bold text-foreground mb-2">{f.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{f.desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

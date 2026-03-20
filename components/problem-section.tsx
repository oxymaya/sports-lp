import { AlertCircle, Eye, BarChart2 } from 'lucide-react'

const problems = [
  {
    icon: Eye,
    title: 'スタメン選考が感覚的',
    desc: '指導者の直感や経験に依存し、客観的なデータに基づく評価が困難です。',
  },
  {
    icon: BarChart2,
    title: '判断スピードが見えない',
    desc: '反応速度や選択判断の速さは従来の指標では測定できていませんでした。',
  },
  {
    icon: AlertCircle,
    title: '成長が定量化できない',
    desc: 'トレーニングの効果が数値で確認できず、改善サイクルが機能していません。',
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-secondary/30 py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-black text-foreground/[0.02] tracking-tighter">
          PROBLEM
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-primary" />
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Problem</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-4 text-balance">
          その判断、感覚に
          <br />
          <span className="text-gradient-red">頼っていませんか？</span>
        </h2>
        <p className="text-muted-foreground text-base mb-16 max-w-xl leading-relaxed">
          多くの競技現場では、アスリートの「認知・反応・判断」能力が正しく評価されていません。
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="relative bg-card border border-border p-8 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-primary transition-colors duration-300" />
                <div className="text-[10px] font-black text-muted-foreground tracking-widest mb-6">
                  0{i + 1}
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 mb-6">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="text-lg font-black text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

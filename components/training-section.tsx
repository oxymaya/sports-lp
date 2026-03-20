import { Bolt, Brain, Focus, Gamepad2 } from 'lucide-react'

const trainings = [
  {
    icon: Bolt,
    title: 'リアクショントレーニング',
    desc: 'LED刺激への反応速度を段階的に強化。反応時間の短縮を数値で確認しながら進めます。',
    level: 'BASIC',
  },
  {
    icon: Brain,
    title: '判断トレーニング',
    desc: '複数の選択肢から瞬時に正解を選ぶ能力を鍛える。認知負荷を調節可能。',
    level: 'ADVANCED',
  },
  {
    icon: Focus,
    title: '認知負荷トレーニング',
    desc: '高負荷の情報処理環境での判断力を鍛え、試合状況に近い認知処理能力を育成します。',
    level: 'ELITE',
  },
  {
    icon: Gamepad2,
    title: 'ゲーム形式プログラム',
    desc: '競争・ゲーム要素を取り入れたプログラムで、モチベーションを維持しながら継続できます。',
    level: 'GAME',
  },
]

const levelColors: Record<string, string> = {
  BASIC: 'text-chart-3',
  ADVANCED: 'text-chart-4',
  ELITE: 'text-primary',
  GAME: 'text-chart-5',
}

export default function TrainingSection() {
  return (
    <section className="bg-secondary/30 py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[14vw] font-black text-foreground/[0.02] tracking-tighter">
          TRAINING
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-primary" />
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Training</span>
        </div>

        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-6 text-balance">
            測定だけで終わらない。
            <br />
            <span className="text-gradient-red">改善まで。</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base">
            測定で明らかになった課題を、専用トレーニングプログラムで直接改善。
            データに基づいた科学的な強化サイクルを回し続けます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trainings.map((t, i) => {
            const Icon = t.icon
            return (
              <div
                key={i}
                className="bg-card border border-border p-6 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-primary transition-colors duration-300" />
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className={`text-[9px] font-black tracking-widest ${levelColors[t.level]}`}>
                    {t.level}
                  </span>
                </div>
                <div className="text-base font-black text-foreground mb-3 leading-snug">
                  {t.title}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {t.desc}
                </p>
                <div className="mt-6 h-1 bg-border">
                  <div className="h-full bg-primary/50 group-hover:bg-primary transition-colors duration-300 w-3/4" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

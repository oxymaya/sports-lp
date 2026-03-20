'use client'

import { useState } from 'react'
import { Activity, Zap, BrainCircuit, Layers } from 'lucide-react'

const metrics = [
  {
    icon: Activity,
    title: '反応時間（ms）',
    desc: '刺激から動作開始までの時間を1ms単位で測定',
    value: 183,
    unit: 'ms',
    trend: -12,
    data: [220, 210, 205, 198, 195, 190, 188, 185, 183],
  },
  {
    icon: Zap,
    title: '選択判断スピード',
    desc: '複数の選択肢から正解を選ぶ速度と正確性',
    value: 94,
    unit: '%',
    trend: +8,
    data: [72, 76, 80, 82, 85, 88, 90, 92, 94],
  },
  {
    icon: BrainCircuit,
    title: '抑制制御（判断ミス）',
    desc: '不正解刺激に対して反応を抑える能力',
    value: 3,
    unit: '%',
    trend: -5,
    data: [12, 10, 9, 8, 7, 6, 5, 4, 3],
  },
  {
    icon: Layers,
    title: '注意分配能力',
    desc: '複数の刺激を同時に処理するマルチタスク能力',
    value: 87,
    unit: 'pt',
    trend: +11,
    data: [60, 65, 68, 72, 75, 79, 82, 85, 87],
  },
]

function SparkLine({ data, positive = true }: { data: number[]; positive?: boolean }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const width = 80
  const height = 32
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width
      const y = height - ((v - min) / range) * height
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={positive ? '#E74C3C' : '#E74C3C'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {data.map((v, i) => {
        const x = (i / (data.length - 1)) * width
        const y = height - ((v - min) / range) * height
        return i === data.length - 1 ? (
          <circle key={i} cx={x} cy={y} r="3" fill="#E74C3C" />
        ) : null
      })}
    </svg>
  )
}

export default function MeasurementSection() {
  const [activeMetric, setActiveMetric] = useState(0)

  return (
    <section className="bg-secondary/30 py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-primary" />
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Measurement</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-6 text-balance">
              パフォーマンスは、
              <br />
              <span className="text-gradient-red">測定できる</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              「測定 → 可視化 → 改善」のサイクルで、科学的なパフォーマンス向上を実現します。
            </p>

            {/* Metric tabs */}
            <div className="flex flex-col gap-2">
              {metrics.map((m, i) => {
                const Icon = m.icon
                return (
                  <button
                    key={i}
                    onClick={() => setActiveMetric(i)}
                    className={`text-left p-4 border transition-all duration-200 flex items-center gap-4 ${
                      activeMetric === i
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-card hover:border-primary/30'
                    }`}
                  >
                    <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 ${activeMetric === i ? 'bg-primary/20' : 'bg-secondary'}`}>
                      <Icon size={16} className={activeMetric === i ? 'text-primary' : 'text-muted-foreground'} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-foreground">{m.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 truncate">{m.desc}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className={`text-lg font-black tabular-nums ${activeMetric === i ? 'text-primary' : 'text-foreground'}`}>
                        {m.value}<span className="text-xs font-normal text-muted-foreground ml-0.5">{m.unit}</span>
                      </div>
                      <div className={`text-[10px] font-bold ${m.trend < 0 && m.title.includes('ミス') ? 'text-chart-3' : m.trend > 0 ? 'text-chart-3' : 'text-primary'}`}>
                        {m.trend > 0 ? '+' : ''}{m.trend}% 改善
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Chart panel */}
          <div className="bg-card border border-border p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase mb-1">
                  推移グラフ
                </div>
                <div className="text-lg font-black text-foreground">{metrics[activeMetric].title}</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-primary tabular-nums">
                  {metrics[activeMetric].value}
                  <span className="text-sm font-normal text-muted-foreground ml-1">{metrics[activeMetric].unit}</span>
                </div>
                <div className="text-xs text-chart-3 font-bold">
                  直近9週間
                </div>
              </div>
            </div>

            {/* Bar chart */}
            <div className="relative h-40 flex items-end gap-2 mb-4">
              {metrics[activeMetric].data.map((v, i) => {
                const max = Math.max(...metrics[activeMetric].data)
                const min = Math.min(...metrics[activeMetric].data)
                const range = max - min || 1
                const pct = ((v - min) / range) * 80 + 20
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full relative group">
                      <div
                        className={`w-full transition-all duration-500 ${
                          i === metrics[activeMetric].data.length - 1
                            ? 'bg-primary'
                            : 'bg-primary/30'
                        }`}
                        style={{ height: `${pct * 1.6}px` }}
                      />
                    </div>
                    <span className="text-[9px] text-muted-foreground">W{i + 1}</span>
                  </div>
                )
              })}
            </div>

            {/* Ranking mock */}
            <div className="border-t border-border pt-6">
              <div className="text-[10px] text-muted-foreground tracking-widest uppercase mb-4">チーム内ランキング</div>
              <div className="flex flex-col gap-2">
                {[
                  { rank: 1, name: '選手A', val: 171, highlight: false },
                  { rank: 2, name: '選手B', val: 183, highlight: true },
                  { rank: 3, name: '選手C', val: 195, highlight: false },
                ].map((p) => (
                  <div key={p.rank} className={`flex items-center gap-3 p-2 ${p.highlight ? 'bg-primary/10 border border-primary/30' : ''}`}>
                    <span className={`text-xs font-black w-5 ${p.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                      #{p.rank}
                    </span>
                    <span className="text-sm text-foreground flex-1">{p.name}</span>
                    <span className={`text-sm font-black tabular-nums ${p.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                      {p.val}ms
                    </span>
                    <div className="w-20 bg-border h-1 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${p.highlight ? 'bg-primary' : 'bg-muted-foreground/40'}`}
                        style={{ width: `${100 - (p.val - 160) * 2}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

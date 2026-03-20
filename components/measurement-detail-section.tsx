'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Activity, Zap, BrainCircuit, Layers, ChevronRight, Clock, Target, BarChart2, Cpu } from 'lucide-react'

const tests = [
  {
    id: 'simple',
    tag: 'TEST 01',
    icon: Activity,
    title: '単純反応時間テスト',
    subtitle: 'Simple Reaction Time',
    description:
      '画面に1種類の視覚刺激（円形）が提示されたとき、できるだけ速くボタンを押す。刺激から動作開始までの純粋な反応速度を1ms単位で計測する、すべての認知評価の基礎となる測定。',
    protocol: [
      { label: '試行回数', value: '30試行' },
      { label: '刺激間隔', value: '1,000〜3,000ms（ランダム）' },
      { label: '所要時間', value: '約3分' },
      { label: '出力指標', value: '平均反応時間・標準偏差・最速値' },
    ],
    metrics: [
      { icon: Clock, label: 'エリートアスリート平均', value: '180–200ms' },
      { icon: Target, label: '一般成人平均', value: '250–300ms' },
      { icon: BarChart2, label: '改善可能幅', value: '最大 −40ms' },
    ],
    img: '/images/screen-simple-reaction.jpg',
    color: 'from-primary/20 to-transparent',
  },
  {
    id: 'choice',
    tag: 'TEST 02',
    icon: Zap,
    title: '選択反応時間テスト',
    subtitle: 'Choice Reaction Time',
    description:
      '複数の刺激（色・方向・形）のうち、あらかじめ指定されたものにのみ反応する。試合中の「状況判断」に直結するテストで、反応速度と正確性を同時に評価できる。',
    protocol: [
      { label: '選択肢数', value: '2〜6択（段階設定）' },
      { label: '試行回数', value: '40試行' },
      { label: '所要時間', value: '約4分' },
      { label: '出力指標', value: '正答率・平均反応時間・Hick係数' },
    ],
    metrics: [
      { icon: Clock, label: '高速反応閾値', value: '300ms以下' },
      { icon: Target, label: '目標正答率', value: '95%以上' },
      { icon: BarChart2, label: '競技別ベンチマーク', value: '競技別データあり' },
    ],
    img: '/images/screen-choice-reaction.jpg',
    color: 'from-chart-2/20 to-transparent',
  },
  {
    id: 'inhibition',
    tag: 'TEST 03',
    icon: BrainCircuit,
    title: '抑制制御テスト（Go/No-Go）',
    subtitle: 'Response Inhibition',
    description:
      'Go刺激には反応し、No-Go刺激では反応を抑制する。ファウルを避ける・守備でポジションを保つなど、「反応しないこと」が求められる競技場面の能力を評価する。',
    protocol: [
      { label: 'Go/No-Go比', value: '70% / 30%' },
      { label: '試行回数', value: '60試行' },
      { label: '所要時間', value: '約5分' },
      { label: '出力指標', value: 'コミッションエラー率・オミッションエラー率・d\'スコア' },
    ],
    metrics: [
      { icon: Clock, label: 'エラー率目標', value: '5%以下' },
      { icon: Target, label: '反応抑制成功率', value: '95%以上' },
      { icon: BarChart2, label: '疲労時の変化', value: '測定可能' },
    ],
    img: '/images/screen-inhibition.jpg',
    color: 'from-chart-3/20 to-transparent',
  },
  {
    id: 'dual',
    tag: 'TEST 04',
    icon: Layers,
    title: '注意分配テスト（デュアルタスク）',
    subtitle: 'Divided Attention',
    description:
      '視覚刺激と聴覚刺激を同時に処理し、それぞれに正しく反応する。複数の情報を並列処理するマルチタスク能力を評価し、チームスポーツでの「状況把握力」に対応する。',
    protocol: [
      { label: '同時タスク', value: '視覚 + 聴覚の2チャンネル' },
      { label: '試行回数', value: '各チャンネル30試行' },
      { label: '所要時間', value: '約6分' },
      { label: '出力指標', value: '注意分配スコア・チャンネル干渉率' },
    ],
    metrics: [
      { icon: Clock, label: 'プロ選手平均スコア', value: '85pt以上' },
      { icon: Target, label: '干渉率許容値', value: '15%以下' },
      { icon: BarChart2, label: 'シーズン変動幅', value: '可視化可能' },
    ],
    img: '/images/screen-dual-task.jpg',
    color: 'from-chart-4/20 to-transparent',
  },
]

export default function MeasurementDetailSection() {
  const [active, setActive] = useState(0)
  const test = tests[active]
  const Icon = test.icon

  return (
    <section className="bg-background py-24 relative overflow-hidden" id="measurement-detail">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-primary" />
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Measurement Protocol</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight text-balance">
            4種の認知テストで<br />
            <span className="text-gradient-red">脳の処理能力</span>を解剖する
          </h2>
          <p className="text-muted-foreground leading-relaxed self-end">
            スポーツ認知科学に基づいた4つのプロトコルで、反応・判断・抑制・注意分配を個別に数値化。弱点を特定し、的確なトレーニング処方につなげます。
          </p>
        </div>

        {/* Tab navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
          {tests.map((t, i) => {
            const TIcon = t.icon
            return (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`group text-left p-4 border transition-all duration-200 relative overflow-hidden ${
                  active === i
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-card hover:border-primary/30'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <TIcon
                    size={14}
                    className={active === i ? 'text-primary' : 'text-muted-foreground'}
                  />
                  <span className={`text-[9px] font-bold tracking-widest uppercase ${active === i ? 'text-primary' : 'text-muted-foreground'}`}>
                    {t.tag}
                  </span>
                </div>
                <div className={`text-xs font-bold leading-snug ${active === i ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                  {t.title}
                </div>
                {active === i && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                )}
              </button>
            )
          })}
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: details */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-[10px] text-primary font-bold tracking-widest uppercase">{test.tag}</div>
                <h3 className="text-xl font-black text-foreground leading-tight">{test.title}</h3>
                <div className="text-xs text-muted-foreground">{test.subtitle}</div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">{test.description}</p>

            {/* Protocol table */}
            <div className="border border-border bg-card">
              <div className="px-4 py-2 border-b border-border bg-secondary/50">
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase flex items-center gap-1.5">
                  <Cpu size={10} />
                  測定プロトコル
                </span>
              </div>
              <div className="divide-y divide-border">
                {test.protocol.map((p) => (
                  <div key={p.label} className="flex items-start justify-between px-4 py-2.5 gap-4">
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{p.label}</span>
                    <span className="text-xs font-bold text-foreground text-right">{p.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric cards */}
            <div className="flex flex-col gap-2">
              {test.metrics.map((m) => {
                const MIcon = m.icon
                return (
                  <div key={m.label} className="flex items-center gap-3 p-3 border border-border bg-card">
                    <MIcon size={14} className="text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground flex-1">{m.label}</span>
                    <span className="text-xs font-black text-foreground tabular-nums">{m.value}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: screenshot + overlay info */}
          <div className="lg:col-span-3 relative">
            {/* Device frame */}
            <div className="relative bg-card border border-border overflow-hidden">
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                </div>
                <div className="flex-1 mx-4 bg-background/60 rounded-sm px-3 py-1 text-[10px] text-muted-foreground font-mono">
                  app.reaxionpro.jp / measure / {test.id}
                </div>
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-chart-3 animate-pulse" />
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={test.img}
                  alt={`${test.title} の測定画面`}
                  fill
                  className="object-cover"
                />
                {/* overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />

                {/* Live badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-background/80 border border-primary/40 px-2.5 py-1 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-red" />
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">LIVE</span>
                </div>

                {/* Tag label */}
                <div className="absolute bottom-3 left-3 bg-background/80 border border-border px-3 py-1.5 backdrop-blur-sm">
                  <div className="text-[9px] text-primary font-bold tracking-widest uppercase">{test.tag}</div>
                  <div className="text-xs font-black text-foreground">{test.subtitle}</div>
                </div>
              </div>

              {/* Bottom strip: steps */}
              <div className="flex divide-x divide-border border-t border-border">
                {['測定開始', '刺激提示', '反応検出', '結果算出', 'DB記録'].map((step, i) => (
                  <div
                    key={step}
                    className={`flex-1 px-2 py-3 text-center ${
                      i <= 3 ? 'bg-primary/5' : 'bg-transparent'
                    }`}
                  >
                    <div className={`text-[9px] font-bold mb-0.5 ${i <= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                      STEP {i + 1}
                    </div>
                    <div className="text-[9px] text-muted-foreground">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots + next */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                {tests.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1 transition-all duration-300 ${
                      active === i ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActive((active + 1) % tests.length)}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                次のテスト
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { Dumbbell, Activity, Brain, ChevronRight, Zap, Target, BarChart3, RefreshCw, Shield, TrendingUp } from 'lucide-react'

const benefits = [
  {
    number: '01',
    title: 'Cognitive Agility Training',
    subtitle: 'S&Cに判断を加えた新しいアジリティトレーニング',
    description: '従来のストレングス&コンディショニングに「認知判断」の要素を統合。単なる身体能力の向上ではなく、試合で求められる瞬時の判断と動作を同時に鍛えます。',
    icon: Dumbbell,
    color: '#E74C3C',
    features: [
      {
        icon: Zap,
        title: 'リアクティブアジリティ',
        description: '光刺激に反応して方向転換。判断と動作を同時にトレーニング'
      },
      {
        icon: Target,
        title: 'デシジョンメイキング統合',
        description: '複数選択肢から正解を選び動作。試合状況を再現したドリル'
      },
      {
        icon: BarChart3,
        title: 'パフォーマンス可視化',
        description: '反応時間・正答率・動作精度をリアルタイムで計測'
      }
    ],
    stats: [
      { value: '23%', label: '反応速度向上' },
      { value: '31%', label: '判断精度向上' },
      { value: '18%', label: 'アジリティ向上' }
    ]
  },
  {
    number: '02',
    title: 'Return to Play Protocol',
    subtitle: '復帰判断の可視化とリハビリメニュー',
    description: 'コンディショニングプロトコルに認知テストを組み込むことで、怪我からの復帰タイミングを客観的に判断。豊富なリハビリメニューで段階的な復帰をサポートします。',
    icon: Activity,
    color: '#27AE60',
    features: [
      {
        icon: Shield,
        title: '復帰判断基準の明確化',
        description: 'ベースラインとの比較で復帰可否を数値で判断'
      },
      {
        icon: RefreshCw,
        title: '段階的リハビリプログラム',
        description: '負荷レベル別の100以上のリハビリメニューを搭載'
      },
      {
        icon: TrendingUp,
        title: '回復進捗トラッキング',
        description: '日々の認知機能を記録し、回復曲線を可視化'
      }
    ],
    stats: [
      { value: '40%', label: '再受傷リスク低減' },
      { value: '100+', label: 'リハビリメニュー数' },
      { value: '95%', label: 'トレーナー満足度' }
    ]
  },
  {
    number: '03',
    title: 'Performance Diagnostics',
    subtitle: '個人の反応力パフォーマンス診断',
    description: '反応力や運動認知機能を多角的に測定し、個人の強み・弱みを特定。測定結果に基づいたパーソナライズされたトレーニングプログラムで効率的な強化を実現します。',
    icon: Brain,
    color: '#3498DB',
    features: [
      {
        icon: Target,
        title: '8種類の認知機能測定',
        description: '単純反応・選択反応・抑制制御・注意分配など包括的に診断'
      },
      {
        icon: BarChart3,
        title: '個人プロファイル作成',
        description: '測定結果から認知特性プロファイルを自動生成'
      },
      {
        icon: Zap,
        title: 'パーソナライズドトレーニング',
        description: '弱点を重点的に強化するカスタムメニューを提案'
      }
    ],
    stats: [
      { value: '8種', label: '測定項目' },
      { value: '個別', label: 'プログラム生成' },
      { value: '28%', label: '平均改善率' }
    ]
  }
]

export default function ThreeBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeBenefit = benefits[activeIndex]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      {/* Large number background */}
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 text-[40rem] font-black opacity-[0.02] leading-none pointer-events-none select-none"
        style={{ color: activeBenefit.color }}
      >
        {activeBenefit.number}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-primary font-mono text-sm tracking-[0.3em] mb-4">
            THREE PILLARS
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight text-balance">
            REAXION PROで<br />
            <span className="text-gradient-red">できる3つのこと</span>
          </h2>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-col lg:flex-row gap-4 mb-16">
          {benefits.map((benefit, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`group flex-1 text-left p-6 border transition-all duration-300 ${
                activeIndex === index
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-card/30 hover:border-muted-foreground/30'
              }`}
            >
              <div className="flex items-center gap-4">
                <span 
                  className={`text-3xl font-black font-mono transition-colors duration-300 ${
                    activeIndex === index ? 'text-primary' : 'text-muted-foreground/30'
                  }`}
                >
                  {benefit.number}
                </span>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold transition-colors duration-300 ${
                    activeIndex === index ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    activeIndex === index ? 'text-muted-foreground' : 'text-muted-foreground/60'
                  }`}>
                    {benefit.subtitle}
                  </p>
                </div>
                <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                  activeIndex === index 
                    ? 'text-primary translate-x-0 opacity-100' 
                    : 'text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50'
                }`} />
              </div>
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description and features */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 flex items-center justify-center"
                style={{ backgroundColor: `${activeBenefit.color}20` }}
              >
                <activeBenefit.icon 
                  className="w-8 h-8"
                  style={{ color: activeBenefit.color }}
                />
              </div>
              <div>
                <p 
                  className="text-sm font-mono tracking-wider"
                  style={{ color: activeBenefit.color }}
                >
                  BENEFIT {activeBenefit.number}
                </p>
                <h3 className="text-2xl font-bold text-foreground">
                  {activeBenefit.title}
                </h3>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {activeBenefit.description}
            </p>

            {/* Features list */}
            <div className="space-y-6">
              {activeBenefit.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex gap-4 p-4 bg-card/50 border border-border"
                >
                  <div 
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${activeBenefit.color}15` }}
                  >
                    <feature.icon 
                      className="w-5 h-5"
                      style={{ color: activeBenefit.color }}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual + Stats */}
          <div className="space-y-8">
            {/* Visual card */}
            <div 
              className="relative aspect-[4/3] border overflow-hidden"
              style={{ borderColor: `${activeBenefit.color}30` }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-card">
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(${activeBenefit.color} 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />
              </div>
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-32 h-32 flex items-center justify-center animate-pulse"
                  style={{ backgroundColor: `${activeBenefit.color}10` }}
                >
                  <activeBenefit.icon 
                    className="w-16 h-16"
                    style={{ color: activeBenefit.color }}
                  />
                </div>
              </div>

              {/* Corner decorations */}
              <div 
                className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2"
                style={{ borderColor: activeBenefit.color }}
              />
              <div 
                className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2"
                style={{ borderColor: activeBenefit.color }}
              />

              {/* Number badge */}
              <div 
                className="absolute top-4 right-4 px-3 py-1 font-mono text-sm font-bold"
                style={{ 
                  backgroundColor: activeBenefit.color,
                  color: '#FFFFFF'
                }}
              >
                PILLAR {activeBenefit.number}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {activeBenefit.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-4 bg-card/50 border border-border text-center"
                >
                  <div 
                    className="text-3xl font-black font-mono mb-1"
                    style={{ color: activeBenefit.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button 
              className="w-full py-4 font-bold text-primary-foreground transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: activeBenefit.color }}
            >
              <span>詳しく見る</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

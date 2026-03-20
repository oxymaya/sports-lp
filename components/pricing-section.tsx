"use client"

import { Check, Box, Tablet, Cpu, Users, Headphones, Settings } from 'lucide-react'

const plans = [
  {
    name: 'スタータープラン',
    description: '小規模チーム向けの基本パッケージ',
    initial: '20万円〜',
    monthly: '1万円〜',
    playerCount: '〜20名',
    hardware: [
      { icon: Box, text: '本体 6個セット' },
      { icon: Tablet, text: '専用タブレット' },
      { icon: Cpu, text: '専用アプリプリインストール' },
      { icon: Settings, text: '各種アダプター' },
    ],
    features: [
      '基本測定機能',
      '個人ダッシュボード',
      'チームランキング',
    ],
    support: [
      { icon: Headphones, text: 'メールサポート' },
    ],
    cta: 'デモを予約',
    highlight: false,
  },
  {
    name: 'チームプラン',
    description: '本格導入を検討するチーム向け',
    initial: '40万円〜',
    monthly: '3万円〜',
    playerCount: '〜50名',
    hardware: [
      { icon: Box, text: '本体 12個セット 1式' },
      { icon: Tablet, text: '専用タブレット' },
      { icon: Cpu, text: '専用アプリプリインストール' },
    ],
    features: [
      '全測定機能',
      '分析・比較機能',
      'トレーニングプログラム',
    ],
    support: [
      { icon: Headphones, text: '専任サポート' },
      { icon: Settings, text: 'オンサイト設定支援' },
    ],
    cta: 'デモを予約',
    highlight: true,
  },
  {
    name: 'エンタープライズ',
    description: 'プロチーム・大規模組織向け',
    initial: '応相談',
    monthly: '応相談',
    playerCount: '無制限',
    hardware: [
      { icon: Box, text: 'カスタム本体セット' },
      { icon: Tablet, text: '複数タブレット対応' },
      { icon: Cpu, text: 'エンタープライズ環境構築' },
    ],
    features: [
      '全機能フルアクセス',
      'カスタム分析',
      'API連携',
      'カスタムプログラム開発',
    ],
    support: [
      { icon: Headphones, text: '24時間専任サポート' },
      { icon: Settings, text: '定期オンサイト訪問' },
    ],
    cta: '資料請求',
    highlight: false,
  },
]

export default function PricingSection() {
  return (
    <section className="bg-secondary/30 py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-primary" />
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Pricing</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-4 text-balance">
          シンプルな
          <span className="text-gradient-red">料金体系</span>
        </h2>
        <p className="text-muted-foreground text-sm mb-16">
          チーム規模・導入形態により変動します。詳細はお問い合わせください。
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col border transition-all duration-300 ${
                plan.highlight
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-card hover:border-primary/40'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-px left-0 right-0 h-[2px] bg-primary" />
              )}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[9px] font-black tracking-widest px-3 py-1 uppercase">
                  人気
                </div>
              )}

              {/* Header */}
              <div className="p-6 pb-4 border-b border-border/50">
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase mb-1">{plan.name}</div>
                <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="flex items-baseline gap-4 mb-2">
                  <div>
                    <span className="text-[10px] text-muted-foreground block mb-0.5">初期費用</span>
                    <span className="text-2xl font-black text-foreground">{plan.initial}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground block mb-0.5">月額</span>
                    <span className="text-2xl font-black text-foreground">{plan.monthly}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 py-2 px-3 bg-secondary/50 rounded">
                  <Users size={14} className="text-primary" />
                  <span className="text-xs text-foreground">選手数：{plan.playerCount}</span>
                </div>
              </div>

              {/* Hardware */}
              <div className="p-6 pb-4 border-b border-border/50">
                <div className="text-[9px] text-muted-foreground tracking-widest uppercase mb-3">ハードウェア</div>
                <div className="flex flex-col gap-2">
                  {plan.hardware.map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-xs text-foreground/80">
                      <item.icon size={12} className="text-primary flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="p-6 pb-4 border-b border-border/50 flex-1">
                <div className="text-[9px] text-muted-foreground tracking-widest uppercase mb-3">機能</div>
                <div className="flex flex-col gap-2">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-foreground/80">
                      <Check size={12} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="p-6 pb-4">
                <div className="text-[9px] text-muted-foreground tracking-widest uppercase mb-3">サポート</div>
                <div className="flex flex-col gap-2">
                  {plan.support.map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-xs text-foreground/80">
                      <item.icon size={12} className="text-primary flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 pt-0">
                <a
                  href={plan.cta === 'デモを予約' ? '/contact?type=demo' : '/contact?type=document'}
                  className={`w-full py-3 text-sm font-bold tracking-widest uppercase transition-all duration-200 block text-center ${
                    plan.highlight
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-foreground/30 text-foreground hover:border-foreground/60 hover:bg-foreground/5'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            全プラン共通：初期導入時のトレーニング・操作説明を含みます。年間契約で月額10%OFF。
          </p>
        </div>
      </div>
    </section>
  )
}

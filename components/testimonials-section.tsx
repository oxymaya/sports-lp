'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    category: 'ATHLETE',
    categoryJa: '選手の声',
    name: 'T.K.',
    role: 'プロ野球選手',
    team: 'セ・リーグ所属',
    experience: '8年目',
    image: '/images/testimonial-athlete.jpg',
    quote: '自分の反応速度が数値で見えるようになって、トレーニングの意識が変わりました。特に選択反応のスコアが上がってから、実戦での判断が明らかに速くなったと実感しています。',
    highlight: '選択反応スコア 23%向上',
    stats: [
      { label: '使用期間', value: '14ヶ月' },
      { label: '週間セッション', value: '4回' },
      { label: '総合スコア', value: '+31%' },
    ],
    fullQuote: '導入前は「反応が速い・遅い」という感覚的な評価しかできませんでした。REAXION PROを使い始めてから、自分のどの認知機能が弱いのかが明確になり、ピンポイントでトレーニングできるようになりました。シーズン中も数値をモニタリングしながら調整できるので、コンディション管理にも役立っています。',
  },
  {
    id: 2,
    category: 'COACH',
    categoryJa: 'コーチの声',
    name: 'M.S.',
    role: 'ヘッドコーチ',
    team: 'J1リーグクラブ',
    experience: '指導歴15年',
    image: '/images/testimonial-coach.jpg',
    quote: '選手の能力を客観的なデータで把握できるようになり、指導の質が大きく変わりました。感覚だけでなく、根拠を持って選手にフィードバックできるのは大きい。',
    highlight: 'チーム全体の判断速度 18%改善',
    stats: [
      { label: '導入期間', value: '2年' },
      { label: '対象選手', value: '32名' },
      { label: 'データ活用率', value: '94%' },
    ],
    fullQuote: '以前は「もっと判断を速く」としか言えなかったのが、今は「選択反応の第3フェーズで0.15秒ロスしている」と具体的に伝えられます。選手も納得感を持ってトレーニングに取り組めますし、若手の成長曲線も可視化できるので、育成計画も立てやすくなりました。チーム全体のパフォーマンス向上に確実に貢献しています。',
  },
  {
    id: 3,
    category: 'TRAINER',
    categoryJa: 'トレーナーの声',
    name: 'Y.H.',
    role: 'アスレティックトレーナー',
    team: 'プロ野球球団',
    experience: 'AT歴12年',
    image: '/images/testimonial-trainer.jpg',
    quote: '怪我からの復帰判断に革命が起きました。身体機能だけでなく、認知機能の回復度を数値で確認できるので、より安全で確実な復帰プロトコルが組めます。',
    highlight: '復帰後の再発率 67%減少',
    stats: [
      { label: '復帰支援', value: '48件' },
      { label: '平均復帰期間', value: '-12日' },
      { label: '再発防止率', value: '94%' },
    ],
    fullQuote: '脳震盪プロトコルでは特に重宝しています。従来は主観的な症状確認に頼っていましたが、認知機能テストの数値でベースラインとの比較ができるようになり、復帰判断の精度が格段に上がりました。リハビリメニューも段階的に負荷を上げられるので、選手も安心して復帰に向かえます。',
  },
  {
    id: 4,
    category: 'MANAGEMENT',
    categoryJa: '球団の声',
    name: 'K.N.',
    role: '強化部長',
    team: 'プロ野球球団',
    experience: '球団歴20年',
    image: '/images/testimonial-executive.jpg',
    quote: 'ドラフト候補の評価や、選手の長期的な成長予測に活用しています。身体能力だけでは見えなかった「判断力」という指標が、チーム編成に新しい視点をもたらしました。',
    highlight: 'スカウティング精度 向上',
    stats: [
      { label: '評価選手数', value: '200+名' },
      { label: 'データ蓄積', value: '3年分' },
      { label: '採用精度', value: '+28%' },
    ],
    fullQuote: '同じ身体能力でも、認知機能のスコアが高い選手は実戦で結果を出す傾向が明らかです。スカウティングレポートにREAXION PROのデータを組み込むことで、より多角的な選手評価ができるようになりました。また、在籍選手の経年変化を追うことで、ピークパフォーマンスの時期予測や、トレーニング投資の最適化にも役立てています。',
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const activeTestimonial = testimonials[activeIndex]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    setIsExpanded(false)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsExpanded(false)
  }

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Large Quote Background */}
      <div className="absolute top-20 right-10 opacity-5">
        <Quote className="w-64 h-64 md:w-96 md:h-96" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wider">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            導入者の声
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            REAXION PROを導入した選手・コーチ・トレーナー・球団関係者からのフィードバック
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveIndex(index)
                setIsExpanded(false)
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
              }`}
            >
              {item.categoryJa}
            </button>
          ))}
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Column */}
              <div className="md:col-span-2 relative">
                <div className="aspect-square md:aspect-auto md:h-full relative">
                  <Image
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-card/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold tracking-wider rounded">
                    {activeTestimonial.category}
                  </div>

                  {/* Profile Info Overlay (Mobile) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {activeTestimonial.name}
                    </h3>
                    <p className="text-primary font-medium">{activeTestimonial.role}</p>
                    <p className="text-muted-foreground text-sm">
                      {activeTestimonial.team} / {activeTestimonial.experience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="md:col-span-3 p-6 md:p-8 lg:p-10 flex flex-col">
                {/* Profile Info (Desktop) */}
                <div className="hidden md:block mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                    {activeTestimonial.name}
                  </h3>
                  <p className="text-primary font-medium text-lg">{activeTestimonial.role}</p>
                  <p className="text-muted-foreground">
                    {activeTestimonial.team} / {activeTestimonial.experience}
                  </p>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <div className="flex-1 mb-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <p className="text-foreground text-lg leading-relaxed mb-4">
                    {isExpanded ? activeTestimonial.fullQuote : activeTestimonial.quote}
                  </p>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    {isExpanded ? '閉じる' : '続きを読む'}
                  </button>
                </div>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-md mb-6 self-start">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-primary font-semibold">{activeTestimonial.highlight}</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {activeTestimonial.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl lg:text-2xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevTestimonial}
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">前の声</span>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index)
                    setIsExpanded(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-primary w-6'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              <span className="hidden sm:inline">次の声</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">98%</div>
              <div className="text-muted-foreground text-sm">利用者満足度</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">150+</div>
              <div className="text-muted-foreground text-sm">導入チーム・施設</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">50,000+</div>
              <div className="text-muted-foreground text-sm">累計測定セッション</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">4.9</div>
              <div className="text-muted-foreground text-sm">平均評価スコア</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    num: '01',
    title: 'デモ体験',
    desc: '実際にシステムを操作し、測定・分析・トレーニングの全機能を体験できます。',
  },
  {
    num: '02',
    title: '初期設定',
    desc: '担当スタッフがチームの規模・競技・目的に合わせた最適な設定をサポートします。',
  },
  {
    num: '03',
    title: '測定開始',
    desc: '選手ごとのベースライン測定を実施。初日からデータが蓄積されます。',
  },
  {
    num: '04',
    title: 'トレーニング運用',
    desc: '測定データをもとに、個別最適化されたトレーニングプログラムを継続実施します。',
  },
]

export default function FlowSection() {
  return (
    <section className="bg-background py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-primary" />
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Flow</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-16 text-balance">
          導入は<span className="text-gradient-red">簡単</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 right-0 h-[1px] bg-border z-0" />
              )}
              <div className="relative z-10 p-6 md:p-8 bg-card border border-border md:border-r-0 last:border-r hover:border-primary/40 transition-colors duration-300">
                <div className="text-4xl font-black text-primary/20 mb-6 leading-none">{step.num}</div>
                <div className="w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-black text-sm mb-4">
                  {parseInt(step.num)}
                </div>
                <div className="text-base font-black text-foreground mb-3">{step.title}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

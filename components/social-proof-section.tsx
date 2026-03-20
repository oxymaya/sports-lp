'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { label: 'プロ野球', value: '9球団', sub: '個人利用選手多数', sport: 'BASEBALL' },
  { label: 'Jリーグ', value: '7クラブ', sub: '個人利用選手多数', sport: 'SOCCER' },
  { label: 'Bリーグ', value: '1クラブ', sub: '個人利用選手多数', sport: 'BASKETBALL' },
  { label: 'Vリーグ', value: '1クラブ', sub: '個人利用選手多数', sport: 'VOLLEYBALL' },
]

function CountUpNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 1500
          const step = Math.ceil(target / (duration / 16))
          const timer = setInterval(() => {
            start += step
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, 16)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-primary tabular-nums">
      {count}{suffix}
    </div>
  )
}

export default function SocialProofSection() {
  return (
    <section className="bg-background py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ticker */}
      <div className="overflow-hidden bg-primary/10 border-y border-primary/20 py-3 mb-20">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 pr-12">
              {['プロ野球 9球団導入', 'Jリーグ 7クラブ導入', 'ナショナルトレーニングセンター採用', 'Bリーグ導入', 'Vリーグ導入', '競技統括団体で多数採用', '個人アスリート利用多数'].map((item) => (
                <span key={item} className="flex items-center gap-4 text-xs font-bold tracking-widest text-primary uppercase">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-primary" />
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Social Proof</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight text-balance mb-6">
              トップアスリートが
              <br />
              <span className="text-gradient-red">導入</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              プロ・ナショナルレベルでの導入実績。<br />
              ナショナルトレーニングセンター・各種競技統括団体においても導入が進んでいます。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.sport}
                className="bg-card border border-border p-6 hover:border-primary/40 transition-colors duration-300 group"
              >
                <div className="text-[10px] text-primary font-bold tracking-widest uppercase mb-3">
                  {stat.sport}
                </div>
                <CountUpNumber
                  target={parseInt(stat.value)}
                  suffix={stat.value.replace(/[0-9]/g, '')}
                />
                <div className="text-base font-bold text-foreground mt-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.sub}</div>
                <div className="h-[1px] bg-border group-hover:bg-primary/30 transition-colors duration-300 mt-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Team logos grid (dummy) */}
        <div className="border border-border p-8">
          <div className="text-center text-xs text-muted-foreground tracking-widest uppercase mb-8">
            導入チーム・団体（一部）
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {['NPB', 'J.LEAGUE', 'B.LEAGUE', 'V.LEAGUE', 'NTC', 'JFA', 'JBA', 'PL'].map((name) => (
              <div
                key={name}
                className="aspect-square flex items-center justify-center bg-secondary/40 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <span className="text-[9px] font-black text-muted-foreground tracking-widest">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

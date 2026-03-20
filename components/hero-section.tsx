'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [reactionTime, setReactionTime] = useState(187)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setReactionTime((prev) => {
        const delta = Math.floor(Math.random() * 7) - 3
        const next = prev + delta
        return Math.min(Math.max(next, 170), 210)
      })
    }, 800)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-athlete.jpg"
          alt="トップアスリートがLEDライト刺激に反応する瞬間"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A]/95 via-[#0B0F1A]/80 to-[#0B0F1A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-[#0B0F1A]/60" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 grid-overlay opacity-40" />

      {/* Red accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
              Next Generation Training System
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none tracking-tight mb-6 text-balance">
            勝敗を分けるのは、
            <br />
            <span className="text-gradient-red">反応だ。</span>
          </h1>

          {/* Sub headline */}
          <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-6 leading-relaxed">
            0.1秒の判断を、測定し、強化する。
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            REAXION PROは、反応・判断・認知を数値化し、パフォーマンス向上につなげる
            次世代トレーニングシステムです。
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="/contact?type=demo" className="bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center">
              デモを予約
            </a>
            <a href="/contact?type=document" className="border border-foreground/30 text-foreground font-bold text-sm tracking-widest uppercase px-8 py-4 hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-200 text-center">
              資料請求
            </a>
          </div>

          {/* External link */}
          <div className="mb-16">
            <a 
              href="https://reaxioncloud.jp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="border-b border-muted-foreground/30 group-hover:border-foreground/60 transition-colors">
                システムについて詳しくはこちら
              </span>
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Live data widget */}
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-3 bg-secondary/60 backdrop-blur-sm border border-border px-5 py-3">
              <div className="flex flex-col">
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  反応時間 LIVE
                </span>
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-black text-primary tabular-nums">
                    {reactionTime}
                  </span>
                  <span className="text-sm text-muted-foreground mb-0.5">ms</span>
                </div>
              </div>
              <div className="w-[1px] h-10 bg-border" />
              <div className="flex gap-1 items-end h-8">
                {[40, 60, 35, 70, 50, 80, 55, 65, 45, 75].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-primary/60 rounded-sm transition-all duration-300"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-red" />
              <span className="text-xs text-muted-foreground">リアルタイム測定中</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/60 to-transparent" />
      </div>
    </section>
  )
}

'use client'

import { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

const videos = [
  {
    id: 1,
    src: '/videos/scene-1.mp4',
    title: 'アジリティトレーニング',
    description: '判断力を組み込んだ次世代のアジリティトレーニング。光刺激に瞬時に反応し、方向転換スピードと認知判断を同時に強化。',
    category: 'TRAINING',
  },
  {
    id: 2,
    src: '/videos/scene-2.mp4',
    title: 'チーム練習での活用',
    description: '複数選手での同時測定が可能。チーム全体の反応力を可視化し、選手間の比較やランキング表示でモチベーションを向上。',
    category: 'TEAM',
  },
  {
    id: 3,
    src: '/videos/scene-3.mp4',
    title: '個人パフォーマンス測定',
    description: '個人の反応速度・認知機能を詳細に測定。定期的なテストで成長を数値化し、弱点を特定してトレーニング効率を最大化。',
    category: 'ASSESSMENT',
  },
]

export default function VideoShowcaseSection() {
  const [activeVideo, setActiveVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({})
  const [isMuted, setIsMuted] = useState<{ [key: number]: boolean }>({ 0: true, 1: true, 2: true })
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index]
    if (video) {
      if (video.paused) {
        video.play()
        setIsPlaying(prev => ({ ...prev, [index]: true }))
      } else {
        video.pause()
        setIsPlaying(prev => ({ ...prev, [index]: false }))
      }
    }
  }

  const toggleMute = (index: number) => {
    const video = videoRefs.current[index]
    if (video) {
      video.muted = !video.muted
      setIsMuted(prev => ({ ...prev, [index]: video.muted }))
    }
  }

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary animate-pulse-red" />
            <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
              Use Cases
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-4">
            <span className="text-balance">利用シーン</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            REAXION PROは様々なシーンで活用されています。<br className="hidden md:block" />
            実際の利用風景をご覧ください。
          </p>
        </div>

        {/* Video grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`group relative bg-card border border-border overflow-hidden transition-all duration-300 ${
                activeVideo === index ? 'ring-2 ring-primary' : 'hover:border-primary/50'
              }`}
              onMouseEnter={() => setActiveVideo(index)}
            >
              {/* Video container */}
              <div className="relative aspect-[9/16] md:aspect-video bg-secondary overflow-hidden">
                <video
                  ref={(el) => { videoRefs.current[index] = el }}
                  src={video.src}
                  className="w-full h-full object-cover"
                  loop
                  muted={isMuted[index]}
                  playsInline
                  preload="metadata"
                />

                {/* Video overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 border border-primary/30">
                    {video.category}
                  </span>
                </div>

                {/* Play/Pause button */}
                <button
                  onClick={() => togglePlay(index)}
                  className="absolute inset-0 flex items-center justify-center group/play"
                >
                  <div className={`w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transition-all duration-300 ${
                    isPlaying[index] ? 'opacity-0 group-hover/play:opacity-100' : 'opacity-100'
                  }`}>
                    {isPlaying[index] ? (
                      <Pause className="w-6 h-6 text-primary-foreground" />
                    ) : (
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    )}
                  </div>
                </button>

                {/* Mute button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleMute(index)
                  }}
                  className="absolute bottom-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border hover:border-primary/50 transition-colors"
                >
                  {isMuted[index] ? (
                    <VolumeX className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-foreground" />
                  )}
                </button>

                {/* Number indicator */}
                <div className="absolute bottom-4 left-4 text-6xl font-black text-foreground/10">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Video info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            さらに詳しい活用事例をご覧になりたい方は
          </p>
          <a
            href="/contact?type=demo"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-primary/90 transition-all duration-200"
          >
            デモを予約する
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}

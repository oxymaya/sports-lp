'use client'

import { useState } from 'react'

const mediaItems = [
  {
    id: 1,
    title: '日本テレビ ゴーイング',
    description: 'スポーツ番組「Going! Sports&News」にて、REAXION PROを活用したプロ野球選手の反応速度トレーニングが紹介されました。',
    videoId: 'rTV5JaqbUYk',
    startTime: 0,
    channel: '日本テレビ',
    badge: 'TV',
  },
  {
    id: 2,
    title: 'TBS NEWS23',
    description: '報道番組「NEWS23」にて、トップアスリートの認知能力測定とパフォーマンス向上への取り組みが特集されました。',
    videoId: 'RstDzl2VjDU',
    startTime: 83,
    channel: 'TBS',
    badge: 'TV',
  },
]

export default function MediaSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-background relative">
      {/* Background accent */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-black text-primary tracking-[0.3em] uppercase mb-4">
            <span className="w-8 h-px bg-primary" />
            MEDIA
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-4">
            メディア・掲載事例
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            REAXION PROは多くのメディアで取り上げられています
          </p>
        </div>

        {/* Media grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="group bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Video embed */}
              <div className="relative aspect-video bg-secondary/50 overflow-hidden">
                {playingVideo === item.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&start=${item.startTime}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <>
                    {/* Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Play button overlay */}
                    <button
                      onClick={() => setPlayingVideo(item.id)}
                      className="absolute inset-0 flex items-center justify-center bg-background/40 group-hover:bg-background/30 transition-colors"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
                        <svg
                          className="w-8 h-8 text-primary-foreground ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                    {/* Channel badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-wider uppercase">
                        {item.badge}
                      </span>
                      <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-foreground text-[10px] font-bold tracking-wider">
                        {item.channel}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            その他多数のメディアで紹介されています
          </p>
        </div>
      </div>
    </section>
  )
}

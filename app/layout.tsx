import type { Metadata } from 'next'
import { Noto_Sans_JP, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reaxion.pro'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'REAXION PRO | 反応・判断・認知を数値化する次世代トレーニングシステム',
    template: '%s | REAXION PRO',
  },
  description: 'REAXION PROは、反応・判断・認知を数値化し、パフォーマンス向上につなげる次世代トレーニングシステムです。プロ野球・Jリーグをはじめとする多くのトップチームが導入。アジリティトレーニング、復帰判断、パフォーマンス診断に最適。',
  keywords: [
    'REAXION PRO',
    '反応速度トレーニング',
    '認知機能測定',
    'スポーツ科学',
    'アジリティトレーニング',
    'パフォーマンス分析',
    'プロスポーツ',
    'リハビリテーション',
    '復帰判断',
    'コンディショニング',
    '野球トレーニング',
    'サッカートレーニング',
  ],
  authors: [{ name: 'SMASTA', url: 'https://smasta.co.jp' }],
  creator: 'SMASTA',
  publisher: 'SMASTA',
  generator: 'v0.app',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: 'REAXION PRO',
    title: 'REAXION PRO | 反応・判断・認知を数値化する次世代トレーニングシステム',
    description: 'REAXION PROは、反応・判断・認知を数値化し、パフォーマンス向上につなげる次世代トレーニングシステムです。プロ野球・Jリーグをはじめとする多くのトップチームが導入。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'REAXION PRO - 次世代反応トレーニングシステム',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REAXION PRO | 反応・判断・認知を数値化する次世代トレーニングシステム',
    description: 'REAXION PROは、反応・判断・認知を数値化し、パフォーマンス向上につなげる次世代トレーニングシステムです。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

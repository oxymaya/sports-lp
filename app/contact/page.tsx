'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Send, Calendar, FileText, Check } from 'lucide-react'

type InquiryType = 'demo' | 'document'

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<InquiryType>('demo')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    organization: '',
    name: '',
    email: '',
    phone: '',
    sport: '',
    teamSize: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 実際の送信処理はここに実装
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-black text-foreground mb-4">
            送信完了
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {inquiryType === 'demo'
              ? 'デモのご予約を承りました。担当者より2営業日以内にご連絡いたします。'
              : '資料請求を承りました。ご登録のメールアドレスに資料をお送りします。'}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            <ArrowLeft size={16} />
            トップページに戻る
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
      
      {/* Red accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary z-10" />

      <div className="relative max-w-4xl mx-auto px-6 py-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          トップページに戻る
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-4 text-balance">
            お問い合わせ
          </h1>
          <p className="text-muted-foreground">
            REAXION PROの導入に関するご質問・デモのご予約・資料請求はこちらから。
          </p>
        </div>

        {/* Inquiry type selector */}
        <div className="flex gap-4 mb-10">
          <button
            type="button"
            onClick={() => setInquiryType('demo')}
            className={`flex-1 p-6 border transition-all duration-200 ${
              inquiryType === 'demo'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 flex items-center justify-center ${
                inquiryType === 'demo' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
              }`}>
                <Calendar size={20} />
              </div>
              <span className="text-lg font-bold text-foreground">デモを予約</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed text-left">
              実際のシステムを操作しながら、測定・分析・トレーニングの全機能を体験できます。
            </p>
          </button>

          <button
            type="button"
            onClick={() => setInquiryType('document')}
            className={`flex-1 p-6 border transition-all duration-200 ${
              inquiryType === 'document'
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/40'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 flex items-center justify-center ${
                inquiryType === 'document' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
              }`}>
                <FileText size={20} />
              </div>
              <span className="text-lg font-bold text-foreground">資料請求</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed text-left">
              製品仕様・導入事例・料金プランなどを掲載した詳細資料をお送りします。
            </p>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-card border border-border p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Organization */}
            <div className="md:col-span-2">
              <label htmlFor="organization" className="block text-xs font-bold text-foreground tracking-widest uppercase mb-2">
                チーム・団体名 <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                placeholder="例：〇〇ベースボールクラブ"
                className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-foreground tracking-widest uppercase mb-2">
                お名前 <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="山田 太郎"
                className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-foreground tracking-widest uppercase mb-2">
                メールアドレス <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-foreground tracking-widest uppercase mb-2">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="03-1234-5678"
                className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Sport */}
            <div>
              <label htmlFor="sport" className="block text-xs font-bold text-foreground tracking-widest uppercase mb-2">
                競技
              </label>
              <select
                id="sport"
                name="sport"
                value={formData.sport}
                onChange={handleChange}
                className="w-full bg-secondary border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">選択してください</option>
                <option value="baseball">野球</option>
                <option value="soccer">サッカー</option>
                <option value="basketball">バスケットボール</option>
                <option value="volleyball">バレーボール</option>
                <option value="tennis">テニス</option>
                <option value="rugby">ラグビー</option>
                <option value="hockey">ホッケー</option>
                <option value="other">その他</option>
              </select>
            </div>

            {/* Team Size */}
            <div>
              <label htmlFor="teamSize" className="block text-xs font-bold text-foreground tracking-widest uppercase mb-2">
                選手数
              </label>
              <select
                id="teamSize"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                className="w-full bg-secondary border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">選択してください</option>
                <option value="1-20">1〜20名</option>
                <option value="21-50">21〜50名</option>
                <option value="51-100">51〜100名</option>
                <option value="100+">100名以上</option>
              </select>
            </div>

            {/* Preferred Date (only for demo) */}
            {inquiryType === 'demo' && (
              <div>
                <label htmlFor="preferredDate" className="block text-xs font-bold text-foreground tracking-widest uppercase mb-2">
                  ご希望日時
                </label>
                <input
                  type="text"
                  id="preferredDate"
                  name="preferredDate"
                  placeholder="例：4月第2週の午後"
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            )}

            {/* Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-xs font-bold text-foreground tracking-widest uppercase mb-2">
                ご質問・ご要望
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="導入に関するご質問やご要望があればご記入ください"
                className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase px-12 py-4 hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-3"
            >
              <Send size={16} />
              {inquiryType === 'demo' ? 'デモを予約する' : '資料を請求する'}
            </button>
            <p className="text-xs text-muted-foreground">
              <span className="text-primary">*</span> は必須項目です
            </p>
          </div>
        </form>

        {/* Contact info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-secondary/30 border border-border">
            <div className="text-xs text-muted-foreground tracking-widest uppercase mb-2">電話でのお問い合わせ</div>
            <div className="text-lg font-bold text-foreground">03-3556-9988</div>
            <div className="text-xs text-muted-foreground mt-1">平日 9:00〜18:00</div>
          </div>
          <div className="p-6 bg-secondary/30 border border-border">
            <div className="text-xs text-muted-foreground tracking-widest uppercase mb-2">メール</div>
            <div className="text-lg font-bold text-foreground">info@smasta.co.jp</div>
            <div className="text-xs text-muted-foreground mt-1">24時間受付</div>
          </div>
          <div className="p-6 bg-secondary/30 border border-border">
            <div className="text-xs text-muted-foreground tracking-widest uppercase mb-2">所在地</div>
            <div className="text-sm font-bold text-foreground">東京都千代田区六番町1-1</div>
            <div className="text-xs text-muted-foreground mt-1">有楽町線 麹町駅 徒歩5分</div>
          </div>
        </div>
      </div>
    </main>
  )
}

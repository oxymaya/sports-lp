export default function Footer() {
  return (
    <footer className="bg-[#070A12] border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-primary" />
              <span className="text-foreground font-black text-xl tracking-widest">
                REAXION<span className="text-primary">PRO</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              反応・判断・認知を数値化し、パフォーマンス向上につなげる次世代トレーニングシステム。
              トップアスリートのパフォーマンスを科学的に強化します。
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-[10px] font-black text-muted-foreground tracking-widest uppercase mb-4">
              サービス
            </div>
            <div className="flex flex-col gap-3">
              {['測定機能', '分析機能', 'トレーニング', '料金プラン'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-black text-muted-foreground tracking-widest uppercase mb-4">
              会社情報
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://smasta.co.jp/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                会社概要
              </a>
              <a
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                お問い合わせ
              </a>
              <a
                href="https://smasta.co.jp/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                プライバシーポリシー
              </a>
              <a
                href="https://smasta.co.jp/privacy-statement/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                利用規約
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="text-xs text-muted-foreground">
            &copy; 2025 REAXION PRO. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span>プロ野球 9球団</span>
            <span className="text-border">|</span>
            <span>Jリーグ 7クラブ</span>
            <span className="text-border">|</span>
            <span>ナショナルトレーニングセンター採用</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

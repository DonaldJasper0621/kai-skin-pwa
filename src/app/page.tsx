const TELEGRAM_URL = "https://t.me/KaiSkinBot";

function TelegramCTA({ label = "💬 開始免費諮詢", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={TELEGRAM_URL}
      className={`inline-block bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-colors ${className}`}
    >
      {label}
    </a>
  );
}

const features = [
  {
    icon: "🔍",
    title: "分析皮膚問題",
    desc: "告訴 Kai 你的膚質、困擾、生活習慣，它會幫你找出根源——不是讓你猜，而是直接說清楚。",
  },
  {
    icon: "📋",
    title: "給你簡單步驟",
    desc: "沒有複雜的 10 步驟護膚法。Kai 只給你真正需要的，早晚各幾步，做得到才算數。",
  },
  {
    icon: "🛍️",
    title: "推薦適合的產品",
    desc: "根據你的皮膚狀況和預算，推薦具體產品——不是廣告，是真的適合你的選擇。",
  },
];

const steps = [
  { num: "01", text: "在 Telegram 開啟 Kai" },
  { num: "02", text: "描述你的皮膚狀況和困擾" },
  { num: "03", text: "收到你的專屬護膚計劃" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="text-6xl mb-6">🧴</div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          Kai Skin Advisor
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl max-w-md mb-3">
          你的 AI 護膚顧問
        </p>
        <p className="text-slate-500 max-w-sm mb-10 leading-relaxed">
          不用翻文章、不用猜測。直接跟 Kai 說你的皮膚問題，拿到屬於你的護膚方案。
        </p>
        <TelegramCTA />
        <p className="text-slate-600 text-sm mt-4">免費 · 透過 Telegram · 一分鐘開始</p>
      </section>

      {/* Features */}
      <section className="px-6 pb-20 max-w-2xl mx-auto">
        <h2 className="text-center text-slate-400 text-sm uppercase tracking-widest mb-10">
          Kai 能做什麼
        </h2>
        <div className="flex flex-col gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-slate-900 rounded-2xl p-6 flex gap-5 items-start">
              <span className="text-3xl mt-0.5">{f.icon}</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 pb-20 max-w-2xl mx-auto">
        <h2 className="text-center text-slate-400 text-sm uppercase tracking-widest mb-10">
          三步開始
        </h2>
        <div className="flex flex-col gap-4">
          {steps.map((s) => (
            <div key={s.num} className="flex items-center gap-5">
              <span className="text-emerald-500 font-bold text-2xl w-10 shrink-0">{s.num}</span>
              <p className="text-slate-300 text-lg">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24 text-center">
        <div className="bg-slate-900 rounded-3xl p-10 max-w-md mx-auto">
          <p className="text-2xl font-bold mb-3">準備好了嗎？</p>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed">
            皮膚問題拖越久越難處理。<br />現在就讓 Kai 幫你看看。
          </p>
          <TelegramCTA />
        </div>
        <p className="text-slate-700 text-xs mt-10">
          已有護膚計劃？用 Telegram 裡收到的連結打開。
        </p>
      </section>
    </main>
  );
}

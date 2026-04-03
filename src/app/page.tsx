export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-6">🧴</div>
        <h1 className="text-white text-3xl font-bold mb-3">Kai Skin Advisor</h1>
        <p className="text-slate-400 mb-8">
          你的專屬皮膚顧問<br />
          簡單、直接、有效的護膚建議
        </p>
        <a href="https://t.me/KaiSkinBot" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl text-lg">
          💬 開始諮詢
        </a>
        <p className="text-slate-500 text-sm mt-8">
          已經有護膚計劃？<br />用 Telegram 裡收到的連結打開
        </p>
      </div>
    </div>
  );
}

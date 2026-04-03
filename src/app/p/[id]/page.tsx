'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { StoredPlan, RoutineStep } from '@/lib/types';

export default function PlanPage() {
  const params = useParams();
  const [plan, setPlan] = useState<StoredPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlan() {
      try {
        const res = await fetch(`/api/plans/${params.id}`);
        if (!res.ok) throw new Error('找不到這個護膚計劃');
        const data = await res.json();
        setPlan(data);
        localStorage.setItem('kai-skin-plan', JSON.stringify(data));
      } catch (err) {
        setError(err instanceof Error ? err.message : '載入失敗');
      } finally {
        setLoading(false);
      }
    }
    fetchPlan();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-white text-xl">載入中...</div>
      </div>
    );
  }

  if (error || !plan) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-slate-800/50 rounded-2xl p-8 text-center max-w-md">
          <div className="text-6xl mb-4">😢</div>
          <h1 className="text-white text-xl font-bold mb-2">找不到計劃</h1>
          <p className="text-slate-400 mb-6">{error || '這個連結可能已過期'}</p>
          <a href="https://t.me/KaiSkinBot" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-xl">
            💬 重新諮詢 Kai
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <header className="pt-12 pb-6 px-4 text-center">
        <div className="text-5xl mb-3">🧴</div>
        <h1 className="text-white text-2xl font-bold">你的護膚計劃</h1>
        <p className="text-slate-400 text-sm mt-1">Kai Skin Advisor</p>
      </header>

      <main className="px-4 pb-24 max-w-lg mx-auto space-y-4">
        <RoutineCard icon="☀️" title="早晨" steps={plan.morning} gradient="from-amber-500/20 to-orange-500/20" />
        <RoutineCard icon="🌙" title="晚間" steps={plan.night} gradient="from-indigo-500/20 to-purple-500/20" />
        
        {plan.tips && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5">
            <h3 className="text-red-400 font-medium flex items-center gap-2 mb-2">
              <span>⚠️</span><span>注意事項</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">{plan.tips}</p>
          </div>
        )}

        <div className="pt-4 space-y-3">
          <a href="https://t.me/KaiSkinBot" className="block w-full bg-slate-700/50 hover:bg-slate-700 text-white font-medium py-4 rounded-xl text-center">
            💬 有問題？再問 Kai
          </a>
        </div>
      </main>
    </div>
  );
}

function RoutineCard({ icon, title, steps, gradient }: { icon: string; title: string; steps: RoutineStep[]; gradient: string }) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-5 backdrop-blur`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h2 className="text-white text-xl font-bold">{title}</h2>
      </div>
      <ul className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-white text-sm font-medium">{i + 1}</span>
            <div className="flex-1">
              <div className="text-white font-medium">{step.action}</div>
              {step.product && <div className="text-slate-400 text-sm mt-0.5">{step.product}</div>}
              {step.note && <div className="text-amber-400 text-xs mt-1">💡 {step.note}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

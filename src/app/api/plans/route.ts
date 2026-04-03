import { getRedis } from '@/lib/redis';
import { nanoid } from 'nanoid';
import { NextRequest, NextResponse } from 'next/server';
import { SkincarePlan, StoredPlan } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const plan: SkincarePlan = await request.json();
    
    if (!plan.morning || !plan.night) {
      return NextResponse.json(
        { error: '需要 morning 和 night 欄位' },
        { status: 400 }
      );
    }

    const id = nanoid(6);
    
    const storedPlan: StoredPlan = {
      ...plan,
      id,
      createdAt: new Date().toISOString(),
    };

    const redis = getRedis();
    await redis.set(`plan:${id}`, JSON.stringify(storedPlan), { ex: 60 * 60 * 24 * 30 });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://kai-skin-pwa.vercel.app';
    
    return NextResponse.json({
      success: true,
      id,
      url: `${baseUrl}/p/${id}`,
    });
  } catch (error) {
    console.error('建立計劃失敗:', error);
    return NextResponse.json(
      { error: '建立計劃失敗' },
      { status: 500 }
    );
  }
}

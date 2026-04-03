import { getRedis } from '@/lib/redis';
import { NextRequest, NextResponse } from 'next/server';
import { StoredPlan } from '@/lib/types';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const redis = getRedis();
    const data = await redis.get(`plan:${id}`);

    if (!data) {
      return NextResponse.json(
        { error: '找不到這個護膚計劃' },
        { status: 404 }
      );
    }

    const plan: StoredPlan = typeof data === 'string' ? JSON.parse(data) : data;
    return NextResponse.json(plan);
  } catch (error) {
    console.error('讀取計劃失敗:', error);
    return NextResponse.json(
      { error: '讀取計劃失敗' },
      { status: 500 }
    );
  }
}

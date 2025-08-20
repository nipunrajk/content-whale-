import { NextResponse } from 'next/server';
import { mentions } from '@/data/mentions';

export async function GET() {
  return NextResponse.json(mentions);
}

import { NextResponse } from 'next/server';
import { homeData } from '../../../data/home';

export const runtime = 'edge'; // optional

export async function GET() {
  // In real world, fetch from CMS/DB. Here we return local data.
  return NextResponse.json(homeData);
}

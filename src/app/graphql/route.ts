import { NextResponse } from 'next/server';

const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const GET = async () => {
  await waitFor(600)

  return NextResponse.json({
    data: {
      hello: 'world',
    },
  });
}
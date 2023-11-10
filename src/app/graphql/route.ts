const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const operationName = searchParams.get('operationName');
  await waitFor(600);

  return Response.json({
    data: {
      operationName: operationName ?? 'unknown',
    },
  });
}
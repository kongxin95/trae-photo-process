export const onRequest = async () => {
  return new Response(
    'google.com, pub-4990233882214250, DIRECT, f08c47fec0942fa0',
    {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=86400',
      },
    }
  );
};

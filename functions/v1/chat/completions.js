export async function onRequestPost(context) {
  const { request, env } = context;
  const apiKey = env.SILICONFLOW_API_KEY;
  const base = (env.SILICONFLOW_BASE_URL || 'https://api.siliconflow.cn/v1').replace(/\/$/, '');
  const target = base + '/chat/completions';
  const model = env.LLM_MODEL || 'Qwen/Qwen3-30B-A3B-Instruct-2507';

  if (!apiKey) {
    return new Response(JSON.stringify({ error: { message: 'SILICONFLOW_API_KEY not configured' } }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = await request.json();
  body.model = model;

  const res = await fetch(target, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  return new Response(res.body, {
    status: res.status,
    headers: {
      'Content-Type': res.headers.get('Content-Type') || 'application/json',
    },
  });
}

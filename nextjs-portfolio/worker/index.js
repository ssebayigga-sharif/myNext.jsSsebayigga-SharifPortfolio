export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Basic proxy that lets ASSETS do its normal routing for real files.
    let response = await env.ASSETS.fetch(request);

    // Serve the SPA fallback for routes that aren't literal files.
    if (response.status === 404) {
      const fallbackUrl = new URL(url.origin);
      fallbackUrl.pathname = "/index.html";
      response = await env.ASSETS.fetch(new Request(fallbackUrl, request));
    }

    return response;
  },
};

(() => {
  const link = document.querySelector('a.article-back');
  if (!link || !document.referrer) return;

  // Only these exact, rendered site pages can replace the fallback Home link.
  const destinations = {
    '/': 'Home',
    '/work/': 'Work',
    '/explorations/': 'Explorations',
    '/posts/how-i-claude.html': 'article',
    '/posts/2026-10-28-organising-claude-threads.html': 'article',
    '/posts/2026-10-30-tokens-are-a-resource.html': 'article',
    '/posts/2026-10-30-the-factory.html': 'article',
    '/posts/2026-11-16-ai-native-bookkeeping.html': 'article',
    '/what-drives-the-builders/': 'article',
    '/what-drives-the-builders/reliance/': 'article',
    '/what-drives-the-builders/akshayakalpa/': 'article'
  };

  try {
    const previous = new URL(document.referrer);
    if (previous.origin !== location.origin || previous.pathname === location.pathname) return;
    const destination = destinations[previous.pathname];
    if (!destination) return;
    link.href = previous.pathname + previous.search;
    link.textContent = '← Back to ' + (destination === 'article' ? 'previous article' : destination);
  } catch (_) {
    // Keep the real Home link if a referrer is unavailable or unparseable.
  }
})();

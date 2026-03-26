document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const gclid = params.get('gclid');

  if (gclid) {
    sessionStorage.setItem('gclid', gclid);
  }

  const savedGclid = sessionStorage.getItem('gclid');

  if (savedGclid) {
    document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"], a[href]:not([href^="http"])').forEach(link => {
      const linkUrl = new URL(link.href, window.location.origin);
      if (!linkUrl.searchParams.has('gclid')) {
        linkUrl.searchParams.set('gclid', savedGclid);
        link.href = linkUrl.toString();
      }
    });
  }
});

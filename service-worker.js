self.addEventListener('fetch', event => {
  const request = event.request;

  // Check if the request is being made to your domain
  if (request.url.includes("https://P05h.github.io")) {
    // Modify the request to point to the original website's server
    const originalUrl = request.url.replace("https://P05h.github.io", 'https://tiw.tiwweb.workers.dev');
    
    // Fetch the modified request from the original website's server
    event.respondWith(fetch(originalUrl));
  }
});

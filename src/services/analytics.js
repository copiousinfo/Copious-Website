const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// initialize GA
export const initGA = () => {
  if (!GA_ID) return;

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_ID);
};

// track page view (SPA routing)
export const trackPageView = (path) => {
  if (!window.gtag || !GA_ID) return;

  window.gtag("config", GA_ID, {
    page_path: path,
  });
};

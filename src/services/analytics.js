const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (!GA_ID) return;

  window.dataLayer = window.dataLayer || [];

  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments);
    };

  window.gtag("js", new Date());

  window.gtag("config", GA_ID, {
    send_page_view: false, // React Router will send page views
  });
};

export const trackPageView = (path) => {
  if (!window.gtag || !GA_ID) return;

  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: path,
    page_title: document.title,
  });
};

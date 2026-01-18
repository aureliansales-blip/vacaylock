// Google Ads Conversion Tracking Utilities

// Track when user clicks on a CTA button
export const trackCTAClick = (label: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17878920558',
      'event_label': label,
    });
  }
};

// Track when user clicks "Get Started" button
export const trackGetStartedClick = () => {
  trackCTAClick('get_started');
};

// Track when user clicks on a service package
export const trackServiceClick = (serviceName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17878920558',
      'event_label': `service_${serviceName.toLowerCase()}`,
    });
  }
};

// Track when user navigates to external link (Fiverr)
export const trackFiverrClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Send conversion event to Google Ads with proper conversion label
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17878920558/_f18CPqJueYbEO7aqs1C',
      'value': 149.0,
      'currency': 'USD'
    });
  }
};

// Declare gtag function type for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export {};

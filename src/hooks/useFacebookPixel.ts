declare global {
  interface Window {
    fbq: (
      command: "init" | "track", // Command yang valid
      pixelIdOrEventName: string, // ID Pixel atau nama event
      parameters?: Record<string, unknown> // Data opsional
    ) => void;
  }
}

export const useFacebookPixel = () => {
  const trackEvent = (
    eventName: string, // Nama event seperti "AddToCart"
    eventData?: Record<string, unknown> // Data tambahan untuk event
  ) => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      console.log(`Tracking event: ${eventName}`); // Debug log
      window.fbq("track", eventName, eventData);
    } else {
      console.warn("Facebook Pixel is not loaded.");
    }
  };

  return { trackEvent };
};

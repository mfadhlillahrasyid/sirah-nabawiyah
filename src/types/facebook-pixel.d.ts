// Definisikan tipe untuk fbq
declare const fbq: (
    action: 'track' | 'trackCustom', 
    eventName: string, 
    parameters?: Record<string, unknown>
  ) => void;
  
  // Tambahkan fbq ke global window
  declare global {
    interface Window {
      fbq: typeof fbq;
    }
  }
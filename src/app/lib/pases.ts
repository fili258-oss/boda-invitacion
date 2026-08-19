export type PaseSlug = 'pase-1-persona' | 'pase-2-personas' | 'pase-3-personas';

export interface PaseConfig {
  videoSrc: string;
  whatsappMessage: string;
}

export const PASES: Record<PaseSlug, PaseConfig> = {
  'pase-1-persona': {
    videoSrc: '/assets/videos/pase-1-persona.mp4',
    whatsappMessage: 'Hola quiero confirmar asistencia a la boda para 1 persona',
  },
  'pase-2-personas': {
    videoSrc: '/assets/videos/pase-2-personas.mp4',
    whatsappMessage: 'Hola quiero confirmar asistencia a la boda para 2 personas',
  },
  'pase-3-personas': {
    videoSrc: '/assets/videos/pase-3-personas.mp4',
    whatsappMessage: 'Hola quiero confirmar asistencia a la boda para 3 personas',
  },
};

export function isPaseSlug(value: string): value is PaseSlug {
  return value in PASES;
}

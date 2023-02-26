import { registerPlugin } from '@capacitor/core';

import type { LEDControlPlugin } from './definitions';

const LEDControl = registerPlugin<LEDControlPlugin>('LEDControl', {
  web: () => import('./web').then(m => new m.LEDControlWeb()),
});

export * from './definitions';
export { LEDControl };

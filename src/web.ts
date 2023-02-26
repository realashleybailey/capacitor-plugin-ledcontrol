import { WebPlugin } from '@capacitor/core';

import type { LEDControlPlugin } from './definitions';

export class LEDControlWeb extends WebPlugin implements LEDControlPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

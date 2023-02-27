import { WebPlugin } from '@capacitor/core';

import type { LEDControlPlugin, LEDControlPluginOptions } from './definitions';

export class LEDControlWeb extends WebPlugin implements LEDControlPlugin {
  private isFlashing?: NodeJS.Timeout;

  async sleep(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  async startFlashBothLED(options?: LEDControlPluginOptions): Promise<void> {
    this.isFlashing = setInterval(async () => {
      this.turnOnBlueLED(options);
      await this.sleep(150);
      this.turnOnRedLED(options);
      await this.sleep(150);
      this.turnOffBlueLED();
      await this.sleep(150);
      this.turnOffRedLED();
    }, 600);
  }

  async stopFlashBothLED(): Promise<void> {
    this.removeWebLED();
    if (this.isFlashing) clearInterval(this.isFlashing);
  }

  async turnOnRedLED(options?: LEDControlPluginOptions): Promise<void> {
    this.removeWebLED();
    this.createWebLED(options?.text || '', options?.offset || 0, 'red');
  }

  async turnOffRedLED(): Promise<void> {
    this.removeWebLED();
  }

  async turnOnBlueLED(options?: LEDControlPluginOptions): Promise<void> {
    this.removeWebLED();
    this.createWebLED(options?.text || '', options?.offset || 0, 'blue');
  }

  async turnOffBlueLED(): Promise<void> {
    this.removeWebLED();
  }

  async isRedLightOn(): Promise<boolean> {
    return this.isRedWebLightOn();
  }

  async isBlueLightOn(): Promise<boolean> {
    return this.isBlueWebLightOn();
  }

  createWebLED(text: string, offset: number, color: string): void {
    const div = document.createElement('div');

    div.classList.add('web-led');

    div.style.position = 'fixed';
    div.style.bottom = '0';
    div.style.left = '0';
    div.style.width = '100%';
    div.style.height = '55px';
    div.style.zIndex = '9999';
    div.style.backgroundColor = color;
    div.style.transform = `translateY(-${offset}px)`;
    div.style.color = 'white';
    div.style.textAlign = 'center';
    div.style.lineHeight = '50px';
    div.style.fontSize = '20px';
    div.style.fontWeight = 'bold';
    div.style.opacity = '0.8';
    div.style.pointerEvents = 'none';
    div.innerHTML = text;

    document.body.appendChild(div);
  }

  removeWebLED(): void {
    const oldDiv = document.querySelector('.web-led');
    if (oldDiv) oldDiv.remove();
  }

  isRedWebLightOn(): boolean {
    const oldDiv = document.querySelector('.web-led');
    if (!oldDiv) return false;
    const style = getComputedStyle(oldDiv, null);
    if (style.backgroundColor === 'red') return true;
    return false;
  }

  isBlueWebLightOn(): boolean {
    const oldDiv = document.querySelector('.web-led');
    if (!oldDiv) return false;
    const style = getComputedStyle(oldDiv, null);
    if (style.backgroundColor === 'blue') return true;
    return false;
  }
}

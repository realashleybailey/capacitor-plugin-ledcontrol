export interface LEDControlPlugin {
  startFlashBothLED(options?: LEDControlPluginOptions): void;
  stopFlashBothLED(): void;
  turnOnRedLED(options?: LEDControlPluginOptions): void;
  turnOffRedLED(): void;
  turnOnBlueLED(options?: LEDControlPluginOptions): void;
  turnOffBlueLED(): void;
  isRedLightOn(): Promise<boolean>;
  isBlueLightOn(): Promise<boolean>;
}

export interface LEDControlPluginOptions {
  text?: string;
  offset?: number;
}

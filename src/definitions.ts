export interface LEDControlPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

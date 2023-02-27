package com.realashleybailey.plugins.ledcontrol;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import com.realashleybailey.plugins.ledcontrol.LEDControlUtility;

@CapacitorPlugin(name = "LEDControl")

public class LEDControlPlugin extends Plugin {

    private LEDControl implementation = new LEDControl();
    private LEDControlUtility freshThread = null;

    private static boolean RedLightOn = false;
    private static boolean BlueLightOn = false;

    @PluginMethod()
    public void startFlashBothLED(PluginCall call) {
        freshThread = new LEDControlUtility();
        freshThread.StartFresh();
    }

    @PluginMethod()
    public void stopFlashBothLED(PluginCall call) {
        freshThread.StopFresh();
        freshThread = null;
    }

    @PluginMethod()
    public void turnOnRedLED(PluginCall call) {
        LEDControlUtility.turnOnRedLight(true);
    }

    @PluginMethod()
    public void turnOffRedLED(PluginCall call) {
        LEDControlUtility.turnOnRedLight(false);
    }

    @PluginMethod()
    public void turnOnBlueLED(PluginCall call) {
        LEDControlUtility.turnOnBlueLight(true);
    }

    @PluginMethod()
    public void turnOffBlueLED(PluginCall call) {
        LEDControlUtility.turnOnBlueLight(false);
    }

    @PluginMethod()
    public void isRedLightOn(PluginCall call) {
        RedLightOn = LEDControlUtility.isRedLightOn();

        JSObject ret = new JSObject();
        ret.put("lightOn", RedLightOn);

        call.resolve(ret);
    }

    @PluginMethod()
    public void isBlueLightOn(PluginCall call) {
        BlueLightOn = LEDControlUtility.isBlueLightOn();

        JSObject ret = new JSObject();
        ret.put("lightOn", BlueLightOn);

        call.resolve(ret);
    }
}

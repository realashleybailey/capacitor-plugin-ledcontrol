package com.realashleybailey.plugins.ledcontrol;

import android.util.Log;

public class PosCtrl {

    static {
        try {
            System.loadLibrary("posctrl_jni");
        } catch (Throwable e) {
            Log.d("posctrl", "Can't find JNI library");
        }
    }

    public PosCtrl() {
    }

    public native boolean isRedlightOn();

    public native boolean isYellowlightOn();

    public native int turnOnoffRedlight(boolean onoff);

    public native int turnOnoffYellowlight(boolean onoff);
}

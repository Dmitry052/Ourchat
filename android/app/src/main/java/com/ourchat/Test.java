package com.ourchat;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class Test extends ReactContextBaseJavaModule {

    public Test(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "TestExample";
    }

    @ReactMethod
    public void show(String message, Callback checkMessage) {
        checkMessage.invoke(message);
    }

    @ReactMethod
    public String get() {
        return "Method GET from JAVA";
    }

    @ReactMethod
    public String set() {
        return "Method SET from JAVA";
    }



}

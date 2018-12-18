package com.ourchat;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.ourchat.OurChatWidget;

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
    public void get(Callback checkMessage) {
        checkMessage.invoke("Method GET from JAVA");
    }

    @ReactMethod
    public void set(Callback checkMessage) {
        checkMessage.invoke("Method SET from JAVA");
    }



}

//
//  Linking.m
//  OurWidget
//
//  Created by Дмитрий Вивдюк on 12/12/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

//#import <Foundation/Foundation.h>


#import "Linking.h"

#import <NotificationCenter/NotificationCenter.h>
#import <Foundation/Foundation.h>

@implementation Linking
  
  NSExtensionContext* widgetContext;
  
  // To export a module named Linking
  RCT_EXPORT_MODULE();
  
- (id)initWithContext:(NSExtensionContext*)context {
  self = [super init];
  widgetContext = context;
  return self;
}
  
  RCT_EXPORT_METHOD(openURL:(NSURL *)url )
  {
    [widgetContext openURL:url completionHandler:nil];
  }
  
  @end

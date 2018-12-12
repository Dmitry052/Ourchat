//
//  DisplayMode.m
//  OurWidget
//
//  Created by Дмитрий Вивдюк on 12/12/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

//#import <Foundation/Foundation.h>


#import "DisplayMode.h"

#import <NotificationCenter/NotificationCenter.h>
#import <Foundation/Foundation.h>

@implementation DisplayMode
  
  static float maxHeight = 110;
  
  NSExtensionContext* extensionContext;
  
  // To export a module named DisplayMode
  RCT_EXPORT_MODULE();
  
- (id)initWithContext:(NSExtensionContext*)context {
  self = [super init];
  extensionContext = context;
  return self;
}
  
+ (float)getMaxHeight {
  return maxHeight;
}
  
  RCT_EXPORT_METHOD(setExpandable:(BOOL)expandable height:(float)height )
  {
    maxHeight = height;
    if (expandable) {
      [extensionContext setWidgetLargestAvailableDisplayMode:NCWidgetDisplayModeExpanded];
    } else {
      [extensionContext setWidgetLargestAvailableDisplayMode:NCWidgetDisplayModeCompact];
    }
  }
  
  @end

//
//  DisplayMode.h
//  OurWidget
//
//  Created by Дмитрий Вивдюк on 12/12/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

//#ifndef DisplayMode_h
//#define DisplayMode_h
//
//
//#endif /* DisplayMode_h */

#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>

@interface DisplayMode : NSObject <RCTBridgeModule>
  
- (id)initWithContext:(NSExtensionContext*)context;
  
+ (float)getMaxHeight;
  
  @end

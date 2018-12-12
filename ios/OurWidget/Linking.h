//
//  Linking.h
//  OurWidget
//
//  Created by Дмитрий Вивдюк on 12/12/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

//#ifndef Linking_h
//#define Linking_h
//
//
//#endif /* Linking_h */
#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>

@interface Linking : NSObject <RCTBridgeModule>
  
- (id)initWithContext:(NSExtensionContext*)context;
  
  @end

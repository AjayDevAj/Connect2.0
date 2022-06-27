/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: HeaderBottom.js
** UsedFor: Header Bottom component at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**              Header Bottom component
** ==========================================================
*
**
*/

/*
**
*
** Common react packages import
*
** 
*/

import React, { useState } from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

import tabViewStyles from './styles/tabViewStylesheet';

import ChatList from '../Chat/ChatList';

const HeaderTabView = ({ chatTabsTitleData }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState(chatTabsTitleData);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <ChatList type="open" />;
      case 'second':
        return <ChatList type="closed" />;
      case 'third':
        return <ChatList type="assigned" />;
      default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
        
      renderTabBar={props => 
        <TabBar {...props} 
          indicatorStyle={ tabViewStyles.tabViewIndicator }
          pressColor={{ color: '#F7FCFF'}}
          renderLabel={({route, focused }) => (
            <View>
              <Text style={ [focused ? tabViewStyles.activeTabTextColor : tabViewStyles.tabTextColor, tabViewStyles.tabText ]}>{route.title}</Text>
              {route.no_of_chat > 0 ? <Text style={ tabViewStyles.tabNoOfChat }>{route.no_of_chat}</Text> : <Text></Text>}
            </View>
          )}
          style={ tabViewStyles.tabViewContainer } 
        />
      }
    />
  );
}

export default HeaderTabView;
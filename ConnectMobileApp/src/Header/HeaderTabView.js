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

import tabViewStyles from './styles/tabViewStylesheet';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const HeaderTabView = ({ chatTabsTitleData, chatTabs }) => {

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState(chatTabsTitleData);

  const renderScene = SceneMap({
    first: chatTabs[0]['component'],
    second: chatTabs[1]['component'],
    third: chatTabs[2]['component'],
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
        
      renderTabBar={props => 
        <TabBar {...props} 
          activeColor={{ color: '#0070FC' }}
          inactiveColor={{ color: '#657180' }}
          indicatorStyle={{ backgroundColor: '#0070FC' }}
          renderLabel={({route, color}) => (
            <View>
              <Text style={ tabViewStyles.tabText }>{route.title}</Text>
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

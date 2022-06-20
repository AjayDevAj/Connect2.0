/*
 **
 *
 ** ========================================================
 **
 ** AppName: Connect2.0
 ** Version: X.0.0
 ** FileName: MaterialMenu.js
 ** UsedFor: MaterialMenu at connect 2.0 app
 ** Author:
 **
 ** ========================================================
 *
 **
 **
 *
 ** ==========================================================
 **                  MaterialMenu component
 ** ==========================================================
 *
 **
 */

 import React, { useState } from 'react';
 import {View, Text } from 'react-native';

 import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

 import materialStyles from './styles/MaterialMenuStylesheet';

const MaterialMenu = ({ itemData }) => {
  const [visible, setVisible] = useState(true);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const menuItemPressHandler = (item) => {
    alert(item)
    hideMenu()
  };

  return (
    <View style={ materialStyles.materialContainer}>
      <Menu
        visible={visible}
        anchor={<Text onPress={showMenu}></Text>}
        onRequestClose={hideMenu}
        style={ materialStyles.materialMenuMainContainer }
      >
        {itemData.length > 0 && itemData.map((item) => {
            return (
                <View key={item.id}>
                    <MenuItem onPress={() => menuItemPressHandler(item.value)}> <Text style={ materialStyles.materialMenuItemText }>{item.value}</Text></MenuItem>
                </View>
            );
        })}
      </Menu>
    </View>
  );
}

export default MaterialMenu;
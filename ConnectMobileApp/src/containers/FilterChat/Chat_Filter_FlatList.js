import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const Item = ({
  Item,
  hide_Saprator = false,
  onPress = null,
  selectedItem = null,
}) => (
  <TouchableOpacity
    style={[
      {
        minHeight: 48,
        justifyContent: 'center',
        paddingLeft: 16,
      },
      {
        borderBottomWidth: hide_Saprator ? 0 : 0.2,
        backgroundColor: hide_Saprator
          ? '#fff'
          : selectedItem != null && selectedItem.name == Item.name
          ? '#fff'
          : '#F1F1F1',
      },
    ]}
    onPress={() => {
      if (!hide_Saprator) {
        onPress(Item);
      }
    }}>
    <Text style={{}}>{Item.name}</Text>
  </TouchableOpacity>
);

const Chat_Filter_FlatList = ({
  Chat_Data,
  hide_Saprator = false,
  onPress = null,
  isValueType = false,
}) => {
  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    name: 'Locations',
  });

  const renderItem = ({item}) => (
    <Item
      Item={item}
      hide_Saprator={hide_Saprator}
      onPress={value => {
        setSelectedItem(value);
        onPress(value);
      }}
      selectedItem={selectedItem}
    />
  );

  const renderItem_value = ({item}) => (
    <Item
      Item={item}
      hide_Saprator={hide_Saprator}
      onPress={value => {
        onPress(value);
      }}
      isValueType={true}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Chat_Data}
        renderItem={isValueType ? renderItem_value : renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Chat_Filter_FlatList;

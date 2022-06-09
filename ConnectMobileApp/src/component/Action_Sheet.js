import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

/**
 * Open action sheet
 */
export const openSheet = () => {
  SheetManager.show('helloworld_sheet');
};

/**
 * This class is for imcoming chat icon.
 * * Its visible when atleast incoming count is one.
 */

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d721',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7213',
    title: 'Third Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-febd91aa97f632',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1e45571e29d7213',
    title: 'Third Item',
  },
  {
    id: '3ac68afc-c6w05-48d3-a4f8-fbd91aa97f632',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3dae1-471f-bd96-145571e29d7213',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Action_Sheet = () => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <ActionSheet
      id="helloworld_sheet"
      gestureEnabled={true}
      ViewStyle={true}
      boolean={true}
      initialOffsetFromBottom={0.4}
      // headerAlwaysVisible={true}
      onMomentumScrollEnd={() => console.log('onMomentumScrollEnd')}
      // springOffset={300}
      overlayColor='gray'
      bottomOffset={50}
            >
      <View style={{maxHeight: '80%'}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Action_Sheet;

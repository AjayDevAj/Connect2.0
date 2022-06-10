import React, {useRef} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import fontFamily from '../utility/Font-Declarations';
// import Card from '../Card/Card';
// import CardIcon from '../Card/CardIcon';
// import CardNameMessage from '../Card/CardNameMessage';
// import CardLocationTime from '../Card/CardLocationTime';
import {Incoming_Chat_Card} from '../component/Incoming_Chat_Card'
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
  
];
/**
 * 
 * @param {*} title for Incoming chat 
 */
const Item = ({title}) => (
 <Incoming_Chat_Card title={"Abhishek Singh"} onclick={() => 
  SheetManager.hideAll()
}/>
);

const Action_Sheet = () => {
  const actionSheetRef = useRef();

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <ActionSheet
      id="helloworld_sheet"
      gestureEnabled={true}
      initialOffsetFromBottom={0.4}
      headerAlwaysVisible={true}
      extraScroll={DATA.length < 4 ? 250 :200}
      >
      <View style={{maxHeight: '80%'}}>
        <Text style={styles.headerStyle}>Incoming Chats</Text>
        <FlatList
          // ref={scrollViewRef}
          // nestedScrollEnabled={true}
          // onMomentumScrollEnd={() =>
          //   actionSheetRef.current?.handleChildScrollEnd()
          // }
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
  headerStyle: {
    color: '#000000',
    fontFamily: fontFamily.Alte_DIN,
    fontSize: 18,
    marginLeft: 16,
    marginTop: 30,
    marginBottom: 13,
  },
});

export default Action_Sheet;

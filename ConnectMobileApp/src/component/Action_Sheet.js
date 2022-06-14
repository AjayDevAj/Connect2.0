import React, {useRef} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import fontFamily from '../utility/Font-Declarations';
// import Card from '../Card/Card';
// import CardIcon from '../Card/CardIcon';
// import CardNameMessage from '../Card/CardNameMessage';
// import CardLocationTime from '../Card/CardLocationTime';
import {Incoming_Chat_Card} from '../component/Incoming_Chat_Card';
/**
 * Open action sheet
 */
export const openSheet = Incoming_Chat => {
  console.log('unassigned_Chat_Response:- openSheet', Incoming_Chat);

  DATA = Incoming_Chat;
  SheetManager.show('helloworld_sheet');
};

/**
 * This class is for imcoming chat icon.
 * * Its visible when atleast incoming count is one.
 */

var DATA = [];
/**
 *
 * @param {*} title for Incoming chat
 */
const Item = ({title, location, last_message}) => (
  <Incoming_Chat_Card
    title={title}
    location={location}
    onclick={() => SheetManager.hideAll()}
    last_message={last_message}
  />
);

const Action_Sheet = () => {
  const actionSheetRef = useRef();
  const renderItem = ({item}) => (
    
    <Item
      title={item.display_name}
      location={item.location_name}
      last_message={item.message}
    />
  );

  return (
    <ActionSheet
      id="helloworld_sheet"
      gestureEnabled={true}
      initialOffsetFromBottom={0.4}
      headerAlwaysVisible={true}
      extraScroll={DATA.length < 4 ? 250 : 200}>
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

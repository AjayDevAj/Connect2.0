import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';



export default function FilteRrightContainer() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const SLResponce = useSelector(store => store.StoreLocationDataResponse);
  const SlresponseData = SLResponce.data.locations;
  


  const Item = ({Locality}) => (
    <View style={styles.item}>
     <Text style={styles.title}>{Locality}</Text>
    
    </View>
  );

  const renderItem = ({item}) => (
    <Item Locality={item.locality} />
  );

  const keyExtractor = (item, index)  => index.toString()
 

  return (
    

    <SafeAreaView style={styles.container}>

       {/* <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  /> */}
      <FlatList
        keyExtractor={keyExtractor}
        data={SlresponseData}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
   
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
});

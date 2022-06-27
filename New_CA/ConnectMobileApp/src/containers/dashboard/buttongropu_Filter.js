import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import fontfaimily from '../../utility/Font-Declarations';
import FilteRrightContainer from '../../component/FilterRightContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';



const DATA = [
  {
    id: '1',
    title: 'Locations',
  },
  {
    id: '2',
    title: 'Entry Point',
  },
  {
    id: '3',
    title: 'Date',
  },
  {
    id: '4',
    title: 'Customer Intent',
  },
  {
    id: '5',
    title: 'Chat Status',
  },
  {
    id: '6',
    title: 'Contact Details',
  },
  {
    id: '7',
    title: 'Interested In',
  },
];




const Item = ({item, onPress, backgroundColor, textColor,}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

 const Buttongroup = (idselector) => {
const [selectedId, setSelectedId] = useState(null);


const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', selectedId)
  } catch (e) {
    // saving error
  }
}


const getData = async () => {
  try {
     value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      // value previously stored
      console.log('storage value========>', value)
    }
  } catch(e) {
    // error reading value
  }
}

 
storeData();
//getData();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#FFFFFF' : 'transparent';
    const color = item.id === selectedId ? '#000000' : '#657180';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
       
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      {console.log('item id ====' ,selectedId)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 15,
    marginVertical: 4,
    //marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fontfaimily.Alte_DIN,
  },
});

export default Buttongroup;

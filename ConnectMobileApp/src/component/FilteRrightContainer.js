import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import FontDeclarations from '../utility/Font-Declarations';
//import { ListItem, SearchBar} from 'react-native-elements';
import filter from 'lodash.filter';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function FilteRrightContainer() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const SLResponce = useSelector(store => store.StoreLocationDataResponse);
  const [data, setData] = useState(SLResponce.data.locations);

  const arrayholder = SLResponce.data.locations;

  //const SlresponseData = SLResponce.data.locations;

  const Item = ({Locality}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{Locality}</Text>
    </View>
  );

  const renderItem = ({item}) => <Item Locality={item.locality} />;

  const keyExtractor = (item, index) => index.toString();

  searchFunction = text => {
    const updatedData = arrayholder.filter(item => {
      const item_data = `${item.locality.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    //this.setState({ data: updatedData, searchValue: text });
    setData(updatedData);
    setSearchValue(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />

      <View style={styles.searchbarView}>
        <TextInput
          style={styles.item}
          placeholder="Search"
          value={searchValue}
          onChangeText={text => searchFunction(text)}
          autoCorrect={false}
        />

        <Icon name="search" size={20} color={'#657180'} />
      </View>

      <FlatList
        keyExtractor={keyExtractor}
        data={data}
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
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: FontDeclarations.Poppins,
  },

  searchbarView: {
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    height: 32,
    width: 176,
    padding: 5,
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#0000000D',
    justifyContent: 'space-between',
  },
});

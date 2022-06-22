import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
//import CheckBox from '@react-native-community/checkbox';
import FontDeclarations from '../utility/Font-Declarations';
//import { ListItem, SearchBar} from 'react-native-elements';
import filter from 'lodash.filter';
import {color, set} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getOtpResponse} from '../utility/StorageClass';
import {location_Data_Key} from '../utility/Constant';
import {HStack, Checkbox, Center, NativeBaseProvider} from 'native-base';

import {useEffect} from 'react';

export default function FilterRightContainer() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // ** Fetch Location data from  the saga Store
  //const SLResponce = useSelector(store => store.StoreLocationDataResponse);

  const [data, setData] = useState('');
  const [arrayholder, setarrayholder] = useState('');


  const [checkboxdata, setcheckboxdata] = useState(data);

  const handleChange = (Locality) => {
    let temp = checkboxdata.map((cheklist) => {
      if (Locality === cheklist.locality) {
       
       console.log(cheklist.locality)
      }
      return checkboxdata;
    });
    setcheckboxdata(temp);
  };

  //let selected = checkboxdata.filter((cheklist) => cheklist.locality);

  // useEffect(() => {
  //   if (
  //     SLResponce != null &&
  //     SLResponce != undefined &&
  //     SLResponce.data != undefined
  //   ) {
  //     // ** Master Data
  //     setData(SLResponce.data.locations);

  //     //** */ Filtered Data
  //     setarrayholder(SLResponce.data.locations);
  //   }
  // }, [SLResponce]);

  useEffect(() => {
    getdetas();
  }, []);

  const getdetas = async () => {
    const SlresponseData = await getOtpResponse(location_Data_Key);
    console.log(
      'Store  DATA from the async storage ========-=-=-=-=-=->>>>',
      SlresponseData,
    );

    if (
      SlresponseData != null &&
      SlresponseData != undefined &&
      SlresponseData.locations != undefined
    ) {
      // ** Master Data
      setData(SlresponseData.locations);

      console.log(
        'Store  DATA from the async storage after null and undefined check========-=-=-=-=-=->>>>',
        SlresponseData.locations,
      );

      //** */ Filtered Data
      setarrayholder(SlresponseData.locations);
    }
  };

  const Item = ({Locality}) => (
    <View style={styles.item}>
      {/* <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
        lineWidth={0.4}
        boxType={'square'}
        onTintColor={'rgba(90, 163, 247, 1)'}
      /> */}
      <NativeBaseProvider style={styles.item}>
        <HStack space={4}>
          <Checkbox
            value={Locality}
            colorScheme={'info'}
            onChange={() => {
              handleChange(Locality);
              console.log('change handler------------->',value)
            }}
          />
          <Text style={styles.title}>{Locality}</Text>
        </HStack>
      </NativeBaseProvider>
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

    flexDirection: 'row',
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

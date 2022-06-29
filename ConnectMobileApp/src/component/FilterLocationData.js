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

//import CheckBox from '@react-native-community/checkbox';
import FontDeclarations from '../utility/Font-Declarations';
//import { ListItem, SearchBar} from 'react-native-elements';
import filter from 'lodash.filter';
import {color, set} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getOtpResponse} from '../utility/StorageClass';
import {location_Data_Key} from '../utility/Constant';
import {HStack, Checkbox, Center, NativeBaseProvider} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {loadfilterdata} from '../actions/FilterAction';


import {useEffect} from 'react';

export default function FilterLocationData(appyFilter, applyfilter) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();


  
  // ** Fetch Location data from  the saga Store
  //const SLResponce = useSelector(store => store.StoreLocationDataResponse);

  const [data, setData] = useState('');
  const [arrayholder, setarrayholder] = useState('');

  const [checkboxdata, setcheckboxdata] = useState('');
  const [ischeckboxChecked ,setisChecked]=useState(false)

  console.log('checkboxDataaaa-------------------hook call', checkboxdata);

  const handleChange = Locality => {
    console.log(
      'handler locality before if contion in handlechae()---------------->',
      Locality,
    );
    // mapping the state data to object checklist
    let temp = data.map(cheklist => {
      // Locality == item.locality

      // checking item.locality == checklist.locality
      if (Locality == cheklist.locality) {
        console.log(
          'Location name from the in if condition---------------handeleChange()',
          cheklist.locality,
        );
        //return {cheklist};
       
        return cheklist.locality;
        
      }
      
    });
    setisChecked(true)
    setcheckboxdata(temp);
    console.log('chekbox data----------111111111111!!!!!!!!!!!!!!>',checkboxdata)
  };

  //let selected = checkboxdata.filter(cheklist => cheklist.locality);

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

  // Item function holds the components of flatlist item

  const Item = ({item, index, Locality}) => (
    <View style={styles.item}>
      <NativeBaseProvider style={styles.item}>
        <HStack space={4}>
          <Checkbox
            value={ischeckboxChecked} // Locality == item.locality from object data
            colorScheme={'info'}
            onChange={() => {
              handleChange(Locality);
              setisChecked(true)
              console.log('change handler---------inonChange()---->', Locality);
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

  console.log('FILTERAPPLY--------------', appyFilter);

  //Dispach an action to redux store 

  do {
    dispatch(loadfilterdata(checkboxdata));
    console.log('--------------Location filtered data dispached-----------');
  } while (appyFilter === true);

  //   const checkboxstoreFunction = () => {
  //     const updatedData = checkboxdata.filter(item => {
  //       //return item
  //       console.log('Filter item---------------------------------->', item);
  //     });

  //     console.log('outside the if statement-----------.', item);
  //   };

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

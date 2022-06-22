import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  TextInput,
  Alert,
  TouchableOpacity,
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
//import DatePicker from 'react-native-date-picker'
//import DateTimePicker from '@react-native-community/datetimepicker';

import {useEffect} from 'react';

export default function DateFilter() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [data, setData] = useState('');
  const [arrayholder, setarrayholder] = useState('');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
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

  const Item = ({FilterbyDays}) => (
    <View style={styles.item}>
      <NativeBaseProvider style={styles.item}>
        <HStack space={20}>
        <Checkbox
            style={{left: 50}}
            value="test"
            colorScheme={'info'}
            onChange={() => Alert.alert('check box selected')}
          />
          <Text style={styles.title}>{FilterbyDays}</Text>
          
        </HStack>
      </NativeBaseProvider>
    </View>
  );

  const renderItem = ({item}) => <Item FilterbyDays={item.filterbyDays} />;

  const keyExtractor = (item, index) => index.toString();

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        data={[
          {filterbyDays: 'Last 7 Days'},
          {filterbyDays: 'Last Month'},
          {filterbyDays: 'Last 2 Months'},
          {filterbyDays: 'Last 3 Months'},
        ]}
        renderItem={renderItem}
      />

      <View
        style={{
          width: 194,
          height: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.12)',
        }}></View>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Icon name="date-range" size={30}>
            {' '}
            <Text style={{fontSize: 14}}>Custom Range</Text>
          </Icon>
          {/* <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onChange}
          /> */}
        </View>
      </TouchableOpacity>

      <View
        style={{
          width: 178,
          height: 32,
          borderRadius: 1,
          borderColor: 'rgba(0, 0, 0, 0.05)',
          backgroundColor: 'rgba(241, 241, 241, 1)',
          margin:5,
         // alignItems:'center',
          justifyContent:'center'
        }}>
        <Text>From </Text>
      </View>
      <View
        style={{
          width: 178,
          height: 32,
          borderRadius: 1,
          borderColor: 'rgba(0, 0, 0, 0.05)',
          backgroundColor: 'rgba(241, 241, 241, 1)',
          margin:5,
          //alignItems:'center',
          justifyContent:'center'
        }}>
        <Text>To</Text>
      </View>
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

    justifyContent: 'space-evenly',
    alignItems: 'flex-start',

    // justifyContent: 'space-evenly',
    // padding: 5,
    // flexDirection: 'row',
    // width: '100%',
    // height: 48,
    // backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  title: {
    fontSize: 14,
    fontFamily: FontDeclarations.Poppins,
    color: 'rgba(32, 33, 36, 1)',
  },
});

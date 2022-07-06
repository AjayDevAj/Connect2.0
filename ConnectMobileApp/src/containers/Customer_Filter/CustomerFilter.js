import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import fontfaimly from '../../utility/Font-Declarations';
import filterstyle from '../dashboard/FilterStyle';
import {Customer_Filter_Btngroup_id} from '../../utility/Constant';
import FilterLocationData from '../../component/FilterLocationData';
import {location_Data_Key} from '../../utility/Constant';
import {getOtpResponse} from '../../utility/StorageClass';
import {useEffect} from 'react';
import {HStack, Checkbox, Center, NativeBaseProvider} from 'native-base';
import DateFilter from '../../component/DateFilter';
import EntryPointFilter from '../../component/EntryPointFilter';
import RadioButtonRN from 'radio-buttons-react-native';
import { useSelector } from 'react-redux';
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const CustomerFilter = () => {
  const [selectedId, setSelectedId] = useState('');
  console.log(' button id cliked ---->>>>', selectedId);

  const [locationlistdata, setData] = useState('');
  const [arrayholder, setarrayholder] = useState('');

  const [searchValue, setSearchValue] = useState('');
  const [checkboxdata, setcheckboxdata] = useState('');
  const [ischeckboxChecked ,setisChecked]=useState(false)
  const customerResponseData = useSelector(store => store.CustomerResponseData);
  console.log('viviviviviviviiviviviviivivCustomerResponceeeeeeeee>>>>>',customerResponseData.data)

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const SlresponseData = await getOtpResponse(location_Data_Key);
    console.log(SlresponseData);

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

  //search function

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

  const LocationList = () => {

    const handleChange = Locality => {
      console.log(
        'handler locality before if contion in handlechae()---------------->',
        Locality,
      );
      // mapping the state data to object checklist
      let temp = locationlistdata.map(cheklist => {
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
      
      setcheckboxdata(temp);
      console.log('chekbox data----------111111111111!!!!!!!!!!!!!!>',checkboxdata)
    };


    const LocationItem = ({item, index, Locality}) => (
      <View style={styles.item}>
        <NativeBaseProvider style={styles.item}>
          <HStack space={4}>
            <Checkbox
              value={ischeckboxChecked} 
              colorScheme={'info'}
              onChange={() => {
               // handleChange(Locality);
              setisChecked(true);
                console.log(
                  'change handler---------inonChange()---->',
                  Locality,
                );
              }}
            />
            <Text style={styles.title}>{Locality}</Text>
          </HStack>
        </NativeBaseProvider>
      </View>
    );

    const renderlocationItem = ({item}) => (
      <LocationItem Locality={item.locality} />
    );

    const keyExtractor = (item, index) => index.toString();
    const searchFunction = text => {
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
      <View>
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
        {/* <Text>{locationlistdata[0].name}</Text> */}

        <FlatList
          keyExtractor={keyExtractor}
          data={locationlistdata}
          renderItem={renderlocationItem}
        />
      </View>
    );
  };

  const EntryPoint = () => {
    return (
      
        <EntryPointFilter/>
     
    );
  };

  const DateHandler = () => {
    return (
      <View>
       <DateFilter/>
      </View>
    );
  };

  const CustomerIntenthandler = () => {
    return (
      <View>
        <Text>Intent handler</Text>
      </View>
    );
  };

  const ChatStatushandler = () => {

    const chatstataus = [
      {label: 'OPEN'},
      {label: 'CLOSE'},
     
    ];
    return (
      <View>
       <RadioButtonRN
          data={chatstataus}
          selectedBtn={e => {
            console.log(e);
            Alert.alert(e.label.toString());
          }}
          box={false}
          textStyle={styles.title}
          deactiveColor={'#657180'}
          activeColor={'#0E0071'}
          circleSize={13}
        />
      </View>
    );
  };

  const Contacthandler = () => {
    console.log('customer responce data',customerResponseData)
    return (
      <View>
        <Text>{customerResponseData} </Text>
      </View>
    );
  };

  const IntrestedInhandler = () => {
    return (
      <View>
        <Text>Intrested </Text>
      </View>
    );
  };

  const CheckSwitch = selectedId => {
    switch (selectedId) {
      case '1':
        return <LocationList />;

        break;
      case '2':
        return <EntryPoint />;
        break;
      case '3':
        return <DateHandler />;
        break;
      case '4':
        return <CustomerIntenthandler />;
        break;
      case '5':
        return <ChatStatushandler />;
        break;
      case '6':
        return <Contacthandler />;
        break;
      case '7':
        return <IntrestedInhandler />;
        break;
      default:
        return <LocationList />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* //Header */}
      <View
        style={{
          minWidth: 360,
          minHeight: 48,
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color={'#5F6368'} />
        </TouchableOpacity>

        <Icon.Button
          name="filter-alt"
          size={30}
          backgroundColor="transparent"
          color={'#000000'}
          alignItems="center"
          onPress={() => {
            Alert.alert('hello');
          }}>
          <Text style={{fontSize: 18, fontFamily: fontfaimly.Alte_DIN}}>
            Filters
          </Text>
        </Icon.Button>

        <View
          style={{
            width: 1,
            height: '100%',
            backgroundColor: '#657180',
            alignItems: 'center',
            alignSelf: 'center',
          }}></View>

        <Icon.Button
          name="sort"
          color={'#657180'}
          size={30}
          backgroundColor="rgba(255, 255, 255, 1)"
          onPress={() => {
            //navigation.navigate('RouteTabBar')
            //navigation.goBack(() => console.log());
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: fontfaimly.Alte_DIN,
              color: 'rgba(101, 113, 128, 1)',
            }}>
            Sorting
          </Text>
        </Icon.Button>
      </View>

      {/* //Body */}
      <View style={{flexDirection: 'row'}}>
        {/* //left container */}
        <View style={filterstyle.leftContainer}>
          <FlatList
            data={Customer_Filter_Btngroup_id}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
        </View>

        {/* /Right Container */}

        <View style={filterstyle.rightContainer}>
          {CheckSwitch(selectedId)}

          {/* {
            selectedId == 2 ? <Text>Entry Point</Text> : <Text>Location</Text>
           
          }
          {
            selectedId == 3 ? <Text>Date</Text> : <><Text></Text></>
           
          }
           {
            selectedId == 4? <Text>Customer Intent</Text> : <></>
           
          }
          {
            selectedId == 5? <Text>Chat status</Text> : <></>
           
          }
           {
            selectedId == 6? <Text>Contact Detail</Text> : <></>
           
          }
           {
            selectedId == 7 ? <Text>Intrested in</Text> : <></>
           
          }
               */}
        </View>
      </View>

      {/* //Footer */}

      <View
        style={{
          minWidth: '100%',
          minHeight: 48,
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => navigation.goBack()}>
          <Text style={filterstyle.clearAllBtnText}>CLEAR ALL</Text>
        </TouchableOpacity>

        <View
          style={{
            width: 2,
            height: '50%',
            backgroundColor: '#657180',
            alignItems: 'center',
          }}></View>

        <TouchableOpacity style={filterstyle.applyFilterBTN}>
          <Text style={filterstyle.applyFilterBtnText}>APPLY FILTERS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomerFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 15,
    marginVertical: 4,
    //marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fontfaimly.Alte_DIN,
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

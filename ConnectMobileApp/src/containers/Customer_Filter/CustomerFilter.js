import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  FlatList,
  TextInput,
  SectionList,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
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
import {useSelector} from 'react-redux';
import navigationstring from '../../utility/NavigationString';
import Sorting_Sheet from './Sorting_Sheet';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.leftcontaineritem, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const CustomerFilter = ({navigation}) => {
  const [selectedId, setSelectedId] = useState('');
  console.log(' button id cliked ---->>>>', selectedId);

  const [locationlistdata, setData] = useState('');
  const [arrayholder, setarrayholder] = useState('');

  const [searchValue, setSearchValue] = useState('');
  const [checkboxdata, setcheckboxdata] = useState('');
  const [ischeckboxChecked, setisChecked] = useState(false);
  const [isContactcheckboxChecked, setisContactChecked] = useState(false);
  const customerResponseData = useSelector(store => store.CustomerResponseData);
  const [opensheet, setopensheet] = useState(false);

  const [sortingsheetactive, setsortingsheetactive] = useState(true);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const SlresponseData = await getOtpResponse(location_Data_Key);
    console.log('SLResponce-----.... ------->', SlresponseData);

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
      console.log(
        'chekbox data----------111111111111!!!!!!!!!!!!!!>',
        checkboxdata,
      );
    };

    const LocationItem = ({item, index, Locality}) => (
      <View style={styles.item}>
        <NativeBaseProvider style={styles.item}>
          <HStack space={4}>
            <Checkbox
              value={ischeckboxChecked}
              colorScheme={'info'}
              onChange={() => {
                handleChange(Locality);
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
    console.log(
      'Entry point--------->',
      customerResponseData.data.filters.entry_points,
    );

    return (
      <EntryPointFilter
        entrypoints={customerResponseData.data.filters.entry_points}
      />
    );
  };

  const DateHandler = () => {
    return (
      <View>
        <DateFilter />
      </View>
    );
  };

  const CustomerIntenthandler = () => {
    const [enagementcheck, setenagmentcheck] = useState(false);
    const [Purchasecheck, setpurchasecheck] = useState(false);
    const engagement = [
      {label: customerResponseData.data.filters.intents[0].intent},
    ];
    const lead = [{label: customerResponseData.data.filters.intents[3].intent}];

    console.log(
      'Customer Intent------->',
      customerResponseData.data.filters.intents,
    );
    return (
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          paddingLeft: 10,
        }}>
        <NativeBaseProvider style={{}}>
          {/* //Purchase */}

          {/* <Checkbox
            shadow={2}
            value={Purchasecheck}
            accessibilityLabel="Purchasecheck"
            style={[styles.item, filterstyle.chekboxstyle]}
            onChange={e => {
              setpurchasecheck(e);
            }}>
            <Text style={styles.itemtitle}>
              {customerResponseData.data.filters.intents[4].intent}
            </Text>
          </Checkbox> */}
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginVertical:15}}>
            <CheckBox
              disabled={false}
              value={Purchasecheck}
              onValueChange={newValue => setpurchasecheck(newValue)}
              boxType="square"
              style={{
                backgroundColor: 'rgba(178, 214, 255, 1)',
                width: 20,
                height: 20,
                opacity: 500,
              }}
              onTintColor="#5AA3F7"
              tintColor="#5AA3F7"
            />
            <Text style={[styles.itemtitle, {paddingLeft: 10}]}>
              {customerResponseData.data.filters.intents[4].intent}
            </Text>
          </View>

          {Purchasecheck == true ? (
            <RadioButtonRN
              data={lead}
              selectedBtn={e => {
                console.log('selected radio btn', e);
                Alert.alert(e.label.toString());
              }}
              box={false}
              textStyle={styles.itemlist}
              deactiveColor={'#657180'}
              activeColor={'#ED4900'}
              circleSize={13}
              style={{padding: 5}}
            />
          ) : (
            <></>
          )}

          {/* //Enagement */}
          {/* <Checkbox
            shadow={0}
            value={isContactcheckboxChecked}
            accessibilityLabel="Mobile Number"
            style={[styles.item, filterstyle.chekboxstyle]}
            onChange={e => {
              setenagmentcheck(e);
            }}>
            <Text style={styles.itemtitle}>
              {customerResponseData.data.filters.intents[1].intent}
            </Text>
          </Checkbox> */}

          <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 15,}}>
            <CheckBox
              disabled={false}
              value={enagementcheck}
              onValueChange={newValue => setenagmentcheck(newValue)}
              boxType="square"
              style={{
                backgroundColor: 'rgba(178, 214, 255, 1)',
                width: 20,
                height: 20,
                opacity: 500,
              }}
              onTintColor="#5AA3F7"
              tintColor="#5AA3F7"
              
            />
            <Text style={[styles.itemtitle, {paddingLeft: 10}]}>
            {customerResponseData.data.filters.intents[1].intent}
            </Text>
          </View>



          {enagementcheck == true ? (
            <RadioButtonRN
              data={engagement}
              selectedBtn={e => {
                console.log('selected radio btn', e);
                Alert.alert(e.label.toString());
              }}
              box={false}
              textStyle={styles.itemlist}
              deactiveColor={'#657180'}
              activeColor={'#0070FC'}
              circleSize={13}
            />
          ) : null}
          {/* //Support */}
          <Checkbox
            shadow={2}
            value={isContactcheckboxChecked}
            accessibilityLabel="Mobile Number"
            style={[styles.item, filterstyle.chekboxstyle]}
            onChange={e => {}}>
            <Text style={styles.itemtitle}>
              {customerResponseData.data.filters.intents[2].intent}
            </Text>
          </Checkbox>
        </NativeBaseProvider>
      </View>
    );
  };

  const ChatStatushandler = () => {
    const chatstataus = [{label: 'OPEN'}, {label: 'CLOSE'}];
    return (
      <View>
        <RadioButtonRN
          data={chatstataus}
          selectedBtn={e => {
            console.log(e);
            Alert.alert(e.label.toString());
          }}
          box={false}
          textStyle={[styles.itemtitle, {marginVertical: 10}]}
          deactiveColor={'#657180'}
          activeColor={'#0E0071'}
          circleSize={13}
        />
      </View>
    );
  };

  const Contacthandler = () => {
    console.log(
      'customer Contact responce data',
      customerResponseData.data.filters,
    );
    return (
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <NativeBaseProvider style={{}}>
          <Checkbox
            shadow={2}
            value={isContactcheckboxChecked}
            accessibilityLabel="Mobile Number"
            style={styles.item}>
            Mobile Number
          </Checkbox>
          <Checkbox
            shadow={2}
            value={isContactcheckboxChecked}
            accessibilityLabel="E mail Id">
            E mail Id
          </Checkbox>
        </NativeBaseProvider>
      </View>
    );
  };
  const IntrestedInhandler = () => {
    console.log(
      'customer customer_interest responce data',
      customerResponseData.data.filters.customer_interest,
    );

    const CustomerIntrestItem = ({title}) => (
      <TouchableOpacity onPress={() => Alert.alert(title)}>
        <View
          style={{
            borderRadius: 8,
            margin: 5,
            alignItems: 'center',
            borderColor: '#2F6EF3',
            borderWidth: 1,
            justifyContent: 'center',
            padding: 3,
          }}>
          <Text style={{fontFamily: fontfaimly.Poppins, fontSize: 12}}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );

    const renderItem = ({item}) => <CustomerIntrestItem title={item} />;
    return (
      <View>
        <FlatList
          numColumns={2}
          data={customerResponseData.data.filters.customer_interest}
          renderItem={renderItem}
          keyExtractor={index => index.toString()}
        />
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
  const Sheethandler = () => {};
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
          paddingRight: 30,
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 0},
          shadowOpacity: 0.15,
          shadowRadius: 5,
          elevation: 5,
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
            height: '70%',
            backgroundColor: '#657180',
            //alignItems: 'center',
            alignSelf: 'center',
          }}></View>

        <Icon.Button
          name="sort"
          color={'#657180'}
          size={30}
          backgroundColor="rgba(255, 255, 255, 1)"
          onPress={() => {
            //setsortingsheetactive(true)
            //navigation.navigate(navigationstring.Customers,{sorting:true});
            //navigation.goBack(() => console.log());
            //navigation.navigate(navigationstring.Customers)
            //setopensheet(true);
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
          paddingLeft: 45,
          shadowColor: '#00000008',
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.15,
          shadowRadius: 10,
          elevation: 5,
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => navigation.navigate(navigationstring.Dashboard)}>
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
      {opensheet == true ? <Sorting_Sheet open={true} /> : null}
    </SafeAreaView>
  );
};

export default CustomerFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginVertical: 15,
    //marginHorizontal: 16,
  },
  leftcontaineritem: {
    padding: 15,
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
  itemtitle: {
    fontFamily: fontfaimly.Poppins,
    fontSize: 14,
    color: '#000000',
    opacity: 70,
  },
  itemlist: {
    fontFamily: fontfaimly.Poppins,
    fontSize: 12,
    color: '#000000',
    opacity: 70,
    
  },
});

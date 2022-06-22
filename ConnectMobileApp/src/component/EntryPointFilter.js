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
  
  export default function EntryPointFilter() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [searchValue, setSearchValue] = useState('');
  
    // ** Fetch Location data from  the saga Store
    //const SLResponce = useSelector(store => store.StoreLocationDataResponse);
  
    const [data, setData] = useState('');
    const [arrayholder, setarrayholder] = useState('');
  
    
  
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
  
    const Item = ({EntryPoints}) => (
      <View style={styles.item}>
        
        <NativeBaseProvider style={styles.item}>
          <HStack space={4}>
            <Checkbox
              value="test"
              colorScheme={'info'}
              onChange={()=>Alert.alert('check box selected')}
            />
            <Text style={styles.title}>{EntryPoints}</Text>
          </HStack>
        </NativeBaseProvider>
      </View>
    );
  
    const renderItem = ({item}) => <Item EntryPoints={item.entrypoint} />;
  
    const keyExtractor = (item, index) => index.toString();
  
    
  
    return (
      <SafeAreaView style={styles.container}>
       
  
        <FlatList
          keyExtractor={keyExtractor}
          data={[{  entrypoint: 'first entry' },
          {  entrypoint: 'second entry' },
          {  entrypoint: 'third entry'},
          {  entrypoint: 'fourth entry' },
         ]}
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
  
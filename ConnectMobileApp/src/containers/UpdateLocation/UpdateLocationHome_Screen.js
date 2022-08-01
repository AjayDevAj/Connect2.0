import {
  Alert,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import TopHeader from '../../Header/TopHeader';
import {location_Data_Key} from '../../utility/Constant';
import {getOtpResponse} from '../../utility/StorageClass';
//import ExpandableFlatlist from 'rn-weblineindia-expandable-flatlist';
//import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {List} from 'react-native-paper';
import BluePencilEdit from '../../../assets/svg/Edit_blue_24dp.svg';
import {color} from 'react-native-reanimated';
import FontDeclarations from '../../utility/Font-Declarations';

//import {useIsFocused} from '@react-navigation/native';

const UpdateLocationHome_Screen = ({navigation}) => {
  //const isFocused = useIsFocused();
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setsearchText] = useState(null);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [colapsicon, seticon] = useState('expand-more');
  const [listsize, setlistsize] = useState({width: 380, height: 48});

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  // get location list from the async storage

  const Getlocationdata = async () => {
    const SlresponseData = await getOtpResponse(location_Data_Key);
    console.log('SLResponce-----.... ------->', SlresponseData);
    console.log(getOtpResponse(location_Data_Key));

    if (
      SlresponseData != null &&
      SlresponseData != undefined &&
      SlresponseData.locations != undefined
    ) {
      // ** Master Data

      setMasterDataSource(SlresponseData.locations);

      //** */ Filtered Data

      setFilteredDataSource(SlresponseData.locations);
    }
  };

  useEffect(() => {
    Getlocationdata();
  }, []);

  /** Location list Filtering  */

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      console.log('Entered Text', text);
      const newData = masterDataSource.filter(item => {
        // Applying filter for the inserted text in search bar
        const itemData = item.locality
          ? item.locality.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setsearchText(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setsearchText(text);
    }
  };

  const menuHandler = () => {
    //  alert('Menu Handler');
    navigation.openDrawer();
  };

  const searchHandler = () => {
    setIsSearch(!isSearch);
  };

  const LocationSearchHandler = async searchTextParam => {
    setsearchText(searchTextParam);
    console.log(searchTextParam);
  };

  const getItem = newValue => {
    // Function for click on an item
    // seticon('expand-less')
    // setlistsize(500)
    // console.log('ChangeIcon------>',colapsicon)
    console.log('New Value from from the getItem----', newValue);
    //onValueChange={newValue => setenagmentcheck(newValue)}
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      // <TouchableOpacity
      //   style={{
      //     minWidth: listsize.width,
      //     minHeight: listsize.height,
      //     backgroundColor: '#FFFFFF',
      //     marginTop: 15,

      //     borderColor: '#0000002C',
      //     borderRadius:8,
      //     flexDirection:'row',
      //     alignItems:'center',
      //     justifyContent:'space-between'

      //   }}>
      //   <Text style={{paddingLeft: '5%'}} onPress={newValue => getItem(newValue)}>
      //     {item.locality.toUpperCase()}
      //   </Text>
      //   <Icon style={{paddingRight:10}} name={colapsicon} size={20} color='#657180'/>
      // </TouchableOpacity>
      <View
        style={{
          borderRadius: 8,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: 8,
        }}>
        <List.Accordion
          title={item.locality}
          titleStyle={{
            color: 'rgba(0, 0, 0, 1)',
            fontFamily: FontDeclarations.Alte_DIN,
            fontSize: 16,
          }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 8,
            margin: 10,
          }}>
          <List.Item
            description={
              <>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  margin: 20,
                }}>
                <Icon name="room" size={20} />
                <Text
                  style={{
                    fontFamily: FontDeclarations.Poppins,
                    color: 'rgba(0, 0, 0, 0.7)',
                    fontSize: 12,
                  }}>
                  {item.address1}, {item.address2} {item.locality} {item.city+' '+item.pincode+' '+item.state}
                   
                </Text>
                <TouchableOpacity style={{}}>
                  <BluePencilEdit width={20} height={40} />
                </TouchableOpacity>
               
              </View>
              <View style={{flexDirection:'row'}}>
                <Icon name='schedule' size={20} style={{paddingRight:10}}/>
                <Text>Sunday : 10:00 AM to 7:00 PM</Text>
               
                <BluePencilEdit width={20} height={40}  />
              </View>
              
             
              </>
            
            }
          />
        </List.Accordion>
      </View>
    );
  };
  // colasp view

  function handleItemClick({index}) {
    console.log(index);
  }

  function handleInnerItemClick({innerIndex, item, itemIndex}) {
    console.log(innerIndex);
  }

  return (
    <View style={styles.container}>
      <TopHeader
        firstIcon={'menu'}
        name={'Locations'}
        secondIcon={'search'}
        menuHandler={menuHandler}
        searchHandler={searchHandler} //Search handler (passed sesarch in  filter icon component )
        isSearchEnable={isSearch}
        chatSearchHandler={searchFilterFunction} //chatSearchHandler is commpon props to handler search data in input text
      />

      {console.log('Filter Data source ====>', filteredDataSource)}
      <FlatList
        data={filteredDataSource}
        // renderItem={({item}) => (
        //   <>
        //     <Text>{item.locality}</Text>
        //   </>
        // )}
        keyExtractor={(item, index) => index.toString()}
        // ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
    </View>
  );
};

export default UpdateLocationHome_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FCFF',
    opacity: 100,
  },
});

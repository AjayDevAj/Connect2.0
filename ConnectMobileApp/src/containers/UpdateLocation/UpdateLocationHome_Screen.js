import {
  Alert,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
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
import fontfamily from '../../utility/Font-Declarations';
import NavigationString from '../../utility/NavigationString';
import {Card} from 'react-native-paper';
import CollapsibleCard from './CollapsibleCard';

//import {useIsFocused} from '@react-navigation/native';

const UpdateLocationHome_Screen = ({navigation, defaultCollapsed}) => {
  //const isFocused = useIsFocused();
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setsearchText] = useState(null);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [colapsicon, seticon] = useState('expand-more');
  const [listsize, setlistsize] = useState({width: 380, height: 48});

  const [expanded, setExpanded] = React.useState(false);

  const [isCollapsed, setCollapsed] = useState(
    defaultCollapsed ? defaultCollapsed : true,
  );

  const handlePress = () => setExpanded(previousState => !previousState);

  // get location list from the async storage

  const Getlocationdata = async () => {
    const SlresponseData = await getOtpResponse(location_Data_Key, 'location');
    console.log('Update location SLResponce-----.... ------->', SlresponseData);
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
  const ItemView = ({item}) => {
    return (
      <CollapsibleCard title={item.locality} style={{marginBottom: 16}}>
        <View style={{padding: 15, paddingTop: 5, flexDirection: 'row'}}>
          <Icon name="room" size={20} />

          <Text
            style={{
              fontFamily: fontfamily.Poppins,
              color: 'rgba(0, 0, 0, 0.7)',
              fontSize: 12,
              paddingLeft: 10,
            }}>
            {item.address1}, {item.address2} {item.locality} {'\n'}
            {item.city}
            {'\n'}
            {item.state}
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(NavigationString.UpdateLocation, {
                currentindex: 0,
                Location_Data: item,
              });
            }}
            style={{position: 'absolute', left: '99%'}}>
            <BluePencilEdit width={20} height={40} />
          </TouchableOpacity>
        </View>
        <View style={{padding: 15, paddingTop: 5, flexDirection: 'row'}}>
          <Icon name="schedule" size={20} style={{paddingRight: 10}} />
          <Text style={styles.cardcontent}>Sunday : 10:00 AM to 7:00 PM</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(NavigationString.UpdateLocation, {
                currentindex: 1,
                Location_Data: item,
              });
            }}
            style={{position: 'absolute', left: '99%'}}>
            <BluePencilEdit width={20} height={40} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.cardcontent, {paddingLeft: 45, }]}>
          Monday : 10:00 AM to 7:00 PM
        </Text>
        <Text style={[styles.cardcontent, {paddingLeft: 45, paddingTop: 15}]}>
          Tuesday : 10:00 AM to 7:00 PM
        </Text>
        <Text style={[styles.cardcontent, {paddingLeft: 45, paddingTop: 15}]}>
          Wednesday : 10:00 AM to 7:00 PM{' '}
        </Text>
        <Text style={[styles.cardcontent, {paddingLeft: 45, paddingTop: 15}]}>
          Thursday : 10:00 AM to 7:00 PM
        </Text>
        <Text style={[styles.cardcontent, {paddingLeft: 45, paddingTop: 15}]}>
          Friday : 10:00 AM to 7:00 PM
        </Text>
        <Text style={[styles.cardcontent, {paddingLeft: 45, paddingTop: 15}]}>
          Saturday : 10:00 AM to 7:00 PM
        </Text>
      </CollapsibleCard>
    );
  };
  // colasp view

  return (
    <View style={styles.container}>
      <TopHeader
        firstIcon={'menu'}
        name={'Locations'}
        secondIcon={'search'}
        menuHandler={menuHandler}
        searchHandler={searchHandler}
        isSearchEnable={isSearch}
        chatSearchHandler={searchFilterFunction} //chatSearchHandler is commpon props to handler search data in input text
      />

      {console.log('Filter Data source ====>', filteredDataSource)}
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
    </View>
  );
};

export default UpdateLocationHome_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(247, 252, 255, 1)',
    opacity: 100,
  },
  cardcontent: {
    fontFamily: fontfamily.Poppins,
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 12,
  },
});

import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

import DropdownComponent from '../Post/Post_dropDown';
import {StateList, CityList} from '../../utility/Constant';
import styles from './UpdateLocationStyle';

import {updatelocationApi} from '../../api/updatelocationApi';

const Editlocation = ({navigation, route}) => {
  //React Hooks

  // Object has been duplicated in nested navigation hence re assigned the  destructrd params to the route

  route = route.params.route;
  console.log('Route Params ', route);
  const [name, setname_of_location] = useState(route.params.Location_Data.name);
  const [address1, setaddress1] = useState(route.params.Location_Data.address1);
  const [address2, setaddress2] = useState(route.params.Location_Data.address2);
  const [mobile_number, setmobile_number] = useState(route.params.Location_Data.mobile_number);
  const [pincode, setpincode] = useState(route.params.Location_Data.pincode);
  const [landmark, setlandmark] = useState(route.params.Location_Data.landmark);
  const [locality, setlocality] = useState(route.params.Location_Data.locality);
  const location_id = route.params.Location_Data.id;
  const [changedStatename, setStatename] = useState([]);
  const [changedCityename, setCityname] = useState([]);

  console.log('StateName', changedStatename.label);
  console.log('StateName', changedCityename.label);
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'}}>
      <View style={{padding: 15, backgroundColor: 'rgba(255, 255, 255, 1)'}}>
        <ScrollView>
          <Text style={styles.TitleTextlable}>Name Of Location</Text>
          <TextInput
            style={styles.InputText}
            onChangeText={text => setname_of_location(text)}
            value={name}
            placeholder={route.params.Location_Data.name}
          />
          <Text style={styles.TitleTextlable}>Address 1</Text>
          <TextInput
            style={styles.MultilineTextinout}
            multiline={true}
            numberOfLines={4}
            onChangeText={text => setaddress1(text)}
            value={address1}
            placeholder={route.params.Location_Data.address1}
          />
          <Text style={styles.TitleTextlable}>Address 2</Text>
          <TextInput
            style={styles.MultilineTextinout}
            multiline={true}
            numberOfLines={4}
            onChangeText={text => setaddress2(text)}
            value={address2}
            placeholder={route.params.Location_Data.address2}
          />

          <Text style={styles.TitleTextlable}>Locality</Text>
          <TextInput
            style={styles.InputText}
            numberOfLines={4}
            onChangeText={text => setlocality(text)}
            value={locality}
            placeholder={route.params.Location_Data.locality}
          />
          <Text style={styles.TitleTextlable}>Pincode</Text>
          <TextInput
            style={styles.InputText}
            numberOfLines={4}
            onChangeText={text => setoffertagline(text)}
            value={pincode}
            placeholder={route.params.Location_Data.pincode}
          />
          <View style={{paddingTop: 20}}>
            <DropdownComponent
              title={'State'}
              listvalue={StateList}
              onChange={item => {
                console.log('OnChange dropdown item', item);
                setStatename(item);
              }}
            />

            <View style={{paddingTop: 20}}>
              <DropdownComponent
                style={{minHeight: 40, minWidth: 328}}
                title={'City'}
                listvalue={CityList}
                onChange={item => {
                  console.log('OnChange dropdown item', item);
                  setCityname(item);
                }}
              />
            </View>
            <Text style={styles.TitleTextlable}>Latitude</Text>
            <TextInput
              style={styles.InputText}
              numberOfLines={4}
              //onChangeText={text => setoffertagline(text)}
              value={route.params.Location_Data.latitude}
            />
            <Text style={styles.TitleTextlable}>Longitude</Text>
            <TextInput
              style={styles.InputText}
              numberOfLines={4}
              //onChangeText={text => setoffertagline(text)}
              value={route.params.Location_Data.longitude}
            />
          </View>
          {/* // Map View  */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 20,
            }}>
            <Text>Drag Map To Reposition</Text>
            <TouchableOpacity>
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.map_view}
            source={{
              uri: 'https://www.singleinterface.com/files/OutletMapImage/105852/media_1629720091.png',
            }}
          />
        </ScrollView>

        <TouchableOpacity
          onPress={() =>
            updatelocationApi(
              location_id,
              address1,
              address2,
              mobile_number,
              name,
              pincode,
              landmark,
              locality,
            )
          }
          style={styles.UpdateButton}>
          <Text style={styles.UpdatebtnLebelText}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Editlocation;

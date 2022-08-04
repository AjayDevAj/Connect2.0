import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
  Switch,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import TopHeader from '../../Header/TopHeader';
import CommonButton from '../../Header/CommonButton';
import Icon, {IconButtonProps} from 'react-native-vector-icons/MaterialIcons';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import fontfamily from '../../utility/Font-Declarations';
import {Dropdown} from 'react-native-element-dropdown';
import DropdownComponent from '../Post/Post_dropDown';
import {StateList, CityList} from '../../utility/Constant';
import DatePicker from 'react-native-date-picker';
import CheckBox from '@react-native-community/checkbox';
import styles from './UpdateLocationStyle';
import { updatelocationApi } from '../../api/updatelocationApi';
import { navigationRef } from '../../navigation/RootNavigation';

const UpdateLocation = ({route,navigation}) => {
  const [currenttabIndex, setCurrentTabindex] = useState(0);
  const [changedStatename, setStatename] = useState([null]);
  const [changedCityename, setCityname] = useState([null]);
  const [isMondayEnabled, setIsMondayEnabled] = useState(false);
  const toggleSwitch_Monday = () =>
    setIsMondayEnabled(previousState => !previousState);
  const [isTuesdayEnabled, setIsTuesdayEnabled] = useState(false);
  const toggleSwitch_Tuesday = () =>
    setIsTuesdayEnabled(previousState => !previousState);
  const [isWednesdayEnabled, setIsWednesdayEnabled] = useState(false);
  const toggleSwitch_Wednesday = () =>
    setIsWednesdayEnabled(previousState => !previousState);
  const [isThursdayEnabled, setIsThursdayEnabled] = useState(false);
  const toggleSwitch_Thursday = () =>
    setIsThursdayEnabled(previousState => !previousState);
  const [isFridayEnabled, setIsFridayEnabled] = useState(false);
  const toggleSwitch_Friday = () =>
    setIsFridayEnabled(previousState => !previousState);
  const [isSaturdayEnabled, setIsSaturdayEnabled] = useState(false);
  const toggleSwitch_Saturday = () =>
    setIsSaturdayEnabled(previousState => !previousState);
  const [isSundayEnabled, setIsSundayEnabled] = useState(false);
  const toggleSwitch_Sunday = () =>
    setIsSundayEnabled(previousState => !previousState);

  //Time Picker
  
  console.log(route.params)

  useEffect(() => {
    setCurrentTabindex(route.params.currentindex)
  
    
  }, [])
  

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState([
    {
      Monday: {
        opens: null,
        close: null,
      },
      Tuesday: {
        opens: null,
        close: null,
      },
      Wednesday: {
        opens: null,
        close: null,
      },
      Thursday: {
        opens: null,
        close: null,
      },
      Friday: {
        opens: null,
        close: null,
      },
      Saturday: {
        opens: null,
        close: null,
      },
      Sunday: {
        opens: null,
        close: null,
      },
    },
  ]);

  const [open, setOpen] = useState({
    isOpen: false,
    trigerPointOpen: null,
    TuesdaytrigerPoint: null,
    Wednesdaytrigerpoint: null,
    Thursdaytrigerpoint: null,
    Fridaytrigerpoint: null,
    Saturdaytrigerpoint: null,
    Sundaytrigerpoint: null,
  });
 const[name, setname_of_location]=useState(null)
 const[address1, setaddress1]=useState(null)
 const[address2, setaddress2]=useState(null)
 const[mobile_number, setmobile_number]=useState(null)
 const[pincode, setpincode]=useState(null)
 const[landmark, setlandmark]=useState(null)
 const[locality, setlocality]=useState(null)
 const location_id =route.params.Location_Data.id
 

  console.log('StateName', changedStatename.label);
  console.log('StateName', changedCityename.label);
  const handleCustomIndexSelect = index => {
    // Tab selection for custom Tab Selection
    setCurrentTabindex(index);
  };

  const menuHandler =()=>{
    navigation.goBack();
  }
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(247, 252, 255, 1)'}}>
      <TopHeader name={route.params.Location_Data.locality} firstIcon={'arrow-back'}
       menuHandler={menuHandler} 
      />
      <SegmentedControlTab
        values={['Location', 'Hours', 'More']}
        tabStyle={styles.tabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabStyle={styles.activeTabStyle}
        //activeTabTextStyle={styles.activeTabTextStyle}
        selectedTabStyle={{ backgroundColor: '#fff' }}
        selectedIndex={currenttabIndex}
        activeTabTextStyle={{color:'rgba(0, 0, 0, 1)'}}
       
        // badges={[adminCount]}
        onTabPress={handleCustomIndexSelect}
      />
      {currenttabIndex === 0 ? (
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

          <TouchableOpacity onPress={()=>updatelocationApi(location_id,address1,address2,mobile_number,name,pincode,landmark,locality)} style={styles.UpdateButton}>
            <Text style={styles.UpdatebtnLebelText}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
      {currenttabIndex === 1 ? (
        <View
          style={{
            flex: 1,
            padding: 15,
            backgroundColor: 'rgba(255, 255, 255, 1)',
          }}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 20,
              }}>
              <Text style={styles.ToggleLabel}>Monday</Text>
              <Switch
                trackColor={{false: '#F4F4F4', true: '#0070FC'}}
                thumbColor={isMondayEnabled ? '#FFFFFF' : '#f4f3f4'}
                ios_backgroundColor="#F4F4F4"
                onValueChange={toggleSwitch_Monday}
                value={isMondayEnabled}
              />
            </View>
            {isMondayEnabled === true ? (
              <>
                <View style={{flexDirection: 'row', paddingBottom: 10}}>
                  <Text style={styles.TimerLabel}>Opens at</Text>
                  <Text style={styles.TimerLabel}>Close at</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        trigerPointOpen: true,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Monday.opens}
                    </Text>
                  </TouchableOpacity>
                  <View style={{paddingRight: 19}}></View>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        trigerPointOpen: false,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Monday.close}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <></>
            )}

            {/* //Tuesday */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 30,
              }}>
              <Text style={styles.ToggleLabel}>Tuesday</Text>
              <Switch
                trackColor={{false: '#F4F4F4', true: '#0070FC'}}
                thumbColor={isTuesdayEnabled ? '#FFFFFF' : '#f4f3f4'}
                ios_backgroundColor="#F4F4F4"
                onValueChange={toggleSwitch_Tuesday}
                value={isTuesdayEnabled}
              />
            </View>
            {isTuesdayEnabled === true ? (
              <>
                <View style={{flexDirection: 'row', paddingBottom: 10}}>
                  <Text style={styles.TimerLabel}>Opens at</Text>
                  <Text style={styles.TimerLabel}>Close at</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        TuesdaytrigerPoint: true,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Tuesday.opens}
                    </Text>
                  </TouchableOpacity>
                  <View style={{paddingRight: 19}}></View>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        TuesdaytrigerPoint: false,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Tuesday.close}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <></>
            )}
            {/* Wednesday */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 30,
              }}>
              <Text style={styles.ToggleLabel}>Wednesday</Text>
              <Switch
                trackColor={{false: '#F4F4F4', true: '#0070FC'}}
                thumbColor={isTuesdayEnabled ? '#FFFFFF' : '#f4f3f4'}
                ios_backgroundColor="#F4F4F4"
                onValueChange={toggleSwitch_Wednesday}
                value={isWednesdayEnabled}
              />
            </View>

            {isWednesdayEnabled === true ? (
              <>
                <View style={{flexDirection: 'row', paddingBottom: 10}}>
                  <Text style={styles.TimerLabel}>Opens at</Text>
                  <Text style={styles.TimerLabel}>Close at</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        Wednesdaytrigerpoint: true,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Wednesday.opens}
                    </Text>
                  </TouchableOpacity>
                  <View style={{paddingRight: 19}}></View>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        Wednesdaytrigerpoint: false,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Wednesday.close}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <></>
            )}

            {/* Thursday */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 30,
              }}>
              <Text style={styles.ToggleLabel}>Thursday</Text>
              <Switch
                trackColor={{false: '#F4F4F4', true: '#0070FC'}}
                thumbColor={isTuesdayEnabled ? '#FFFFFF' : '#f4f3f4'}
                ios_backgroundColor="#F4F4F4"
                onValueChange={toggleSwitch_Thursday}
                value={isThursdayEnabled}
              />
            </View>

            {isThursdayEnabled === true ? (
              <>
                <View style={{flexDirection: 'row', paddingBottom: 10}}>
                  <Text style={styles.TimerLabel}>Opens at</Text>
                  <Text style={styles.TimerLabel}>Close at</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        Thursdaytrigerpoint: true,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Thursday.opens}
                    </Text>
                  </TouchableOpacity>
                  <View style={{paddingRight: 19}}></View>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        Thursdaytrigerpoint: false,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Thursday.close}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <></>
            )}

            {/* Friday */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 30,
              }}>
              <Text style={styles.ToggleLabel}>Friday</Text>
              <Switch
                trackColor={{false: '#F4F4F4', true: '#0070FC'}}
                thumbColor={isTuesdayEnabled ? '#FFFFFF' : '#f4f3f4'}
                ios_backgroundColor="#F4F4F4"
                onValueChange={toggleSwitch_Friday}
                value={isFridayEnabled}
              />
            </View>
            {isFridayEnabled === true ? (
              <>
                <View style={{flexDirection: 'row', paddingBottom: 10}}>
                  <Text style={styles.TimerLabel}>Opens at</Text>
                  <Text style={styles.TimerLabel}>Close at</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        Fridaytrigerpoint: true,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Friday.opens}
                    </Text>
                  </TouchableOpacity>
                  <View style={{paddingRight: 19}}></View>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        Fridaytrigerpoint: false,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Friday.close}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <></>
            )}
            {/* Saturday */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 30,
              }}>
              <Text style={styles.ToggleLabel}>Saturday</Text>
              <Switch
                trackColor={{false: '#F4F4F4', true: '#0070FC'}}
                thumbColor={isSaturdayEnabled ? '#FFFFFF' : '#f4f3f4'}
                ios_backgroundColor="#F4F4F4"
                onValueChange={toggleSwitch_Saturday}
                value={isSaturdayEnabled}
              />
            </View>

            {isSaturdayEnabled === true ? (
              <>
                <View style={{flexDirection: 'row', paddingBottom: 10}}>
                  <Text style={styles.TimerLabel}>Opens at</Text>
                  <Text style={styles.TimerLabel}>Close at</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        Saturdaytrigerpoint: true,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Saturday.opens}
                    </Text>
                  </TouchableOpacity>
                  <View style={{paddingRight: 19}}></View>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        Saturdaytrigerpoint: false,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Saturday.close}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <></>
            )}

            {/* Sunday */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 30,
              }}>
              <Text style={styles.ToggleLabel}>Sunday</Text>
              <Switch
                trackColor={{false: '#F4F4F4', true: '#0070FC'}}
                thumbColor={isSundayEnabled ? '#FFFFFF' : '#f4f3f4'}
                ios_backgroundColor="#F4F4F4"
                onValueChange={toggleSwitch_Sunday}
                value={isSundayEnabled}
              />
            </View>

            {isSundayEnabled === true ? (
              <>
                <View style={{flexDirection: 'row', paddingBottom: 10}}>
                  <Text style={styles.TimerLabel}>Opens at</Text>
                  <Text style={styles.TimerLabel}>Close at</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        Sundaytrigerpoint: true,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Sunday.opens}
                    </Text>
                  </TouchableOpacity>
                  <View style={{paddingRight: 19}}></View>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen({
                        isOpen: true,
                        Sundaytrigerpoint: false,
                      });
                    }}
                    style={{
                      minHeight: 32,
                      minWidth: 96,
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: 'rgba(195, 199, 217, 1)',

                      //alignItems:'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.7)',

                        fontFamily: fontfamily.Poppins,
                      }}>
                      {time[0].Sunday.close}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <></>
            )}
          </ScrollView>
          <TouchableOpacity style={[styles.UpdateButton, {bottom: 15}]}>
            <Text style={styles.UpdatebtnLebelText}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
      {currenttabIndex === 2 ? (
        <View style={{padding: 15}}>
          
          <Text style={styles.TitleTextlable}>Contact No.</Text>
          <TextInput
            style={styles.InputText}
            numberOfLines={4}
            onChangeText={text => setmobile_number(text)}
            //value={route.params.Location_Data.mobile_number}
            placeholder={route.params.Location_Data.mobile_number}
            keyboardType='numeric'
          />

          <View style={{paddingTop: 20}}>
            <DropdownComponent
              style={{height: 20}}
              title={'Choose Primary Category'}
              listvalue={StateList}
              onChange={item => {
                console.log('OnChange dropdown item', item);
                setStatename(item);
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => Alert.alert('Category not available')}>
            <Text
              style={{
                color: 'rgba(0, 112, 252, 1)',
                fontFamily: fontfamily.Alte_DIN,
                fontSize: 12,
                paddingTop: 10,
              }}>
              Add Another Category{' '}
            </Text>
          </TouchableOpacity>
          <Text style={styles.TitleTextlable}>Add Services</Text>
          <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
            <CheckBox />
            <Text style={{paddingRight:40}}>Home Delivery</Text>
          </View>
          <TouchableOpacity style={[styles.UpdateButton, {bottom: -270}]}>
            <Text style={styles.UpdatebtnLebelText}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}

      <DatePicker
        modal
        open={open.isOpen}
        date={date}
        mode="time"
        onConfirm={date => {
          setOpen({
            isOpen: false,
            trigerPointOpen: null,
          });
          setDate(date);

          let hourse = date.getHours();
          let minutes = date.getMinutes();
          let ampm = hourse >= 12 ? 'PM' : 'AM';
          let strTime = hourse + ':' + minutes + ' ' + ampm;
          console.log(strTime);
          // setTime(strTime)
          if (open.trigerPointOpen) {
            alert('Monday');
            setTime(prev => {
              let test = [...prev];
              test[0].Monday.opens = strTime;
              return [...test];
            });
          } else {
            alert('Monday');
            setTime(prev => {
              let test = [...prev];
              test[0].Monday.close = strTime;
              return [...test];
            });
          }

          if (open.TuesdaytrigerPoint) {
            setTime(prev => {
              let test = [...prev];
              test[0].Tuesday.opens = strTime;
              return [...test];
            });
          } else {
            setTime(prev => {
              let test = [...prev];
              test[0].Tuesday.close = strTime;
              return [...test];
            });
          }

          if (open.Wednesdaytrigerpoint) {
            setTime(prev => {
              let test = [...prev];
              test[0].Wednesday.opens = strTime;
              return [...test];
            });
          } else {
            setTime(prev => {
              let test = [...prev];
              test[0].Wednesday.close = strTime;
              return [...test];
            });
          }

          if (open.Thursdaytrigerpoint) {
            setTime(prev => {
              let test = [...prev];
              test[0].Thursday.opens = strTime;
              return [...test];
            });
          } else {
            setTime(prev => {
              let test = [...prev];
              test[0].Thursday.close = strTime;
              return [...test];
            });
          }
          if (open.Fridaytrigerpoint) {
            setTime(prev => {
              let test = [...prev];
              test[0].Friday.opens = strTime;
              return [...test];
            });
          } else {
            setTime(prev => {
              let test = [...prev];
              test[0].Friday.close = strTime;
              return [...test];
            });
          }

          if (open.Saturdaytrigerpoint) {
            setTime(prev => {
              let test = [...prev];
              test[0].Saturday.opens = strTime;
              return [...test];
            });
          } else {
            setTime(prev => {
              let test = [...prev];
              test[0].Saturday.close = strTime;
              return [...test];
            });
          }
          if (open.Sundaytrigerpoint) {
            setTime(prev => {
              let test = [...prev];
              test[0].Sunday.opens = strTime;
              return [...test];
            });
          } else {
            setTime(prev => {
              let test = [...prev];
              test[0].Sunday.close = strTime;
              return [...test];
            });
          }
          return strTime;
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default UpdateLocation;

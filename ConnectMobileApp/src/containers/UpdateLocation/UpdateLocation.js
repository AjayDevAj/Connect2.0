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
} from 'react-native';
import React, {useState} from 'react';
import TopHeader from '../../Header/TopHeader';
import CommonButton from '../../Header/CommonButton';
import {SegmentComponent} from '../../component/SegmentComponent';
import {IconButtonProps} from 'react-native-vector-icons/MaterialIcons';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import fontfamily from '../../utility/Font-Declarations';
import {Dropdown} from 'react-native-element-dropdown';
import DropdownComponent from '../Post/Post_dropDown';
import {StateList, CityList} from '../../utility/Constant';
import DatePicker from 'react-native-date-picker';

const UpdateLocation = () => {
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

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState([{Monday: {opens: '', close: ''}}]);

  const [open, setOpen] = useState(false);


  const handletimerpicker = (boolval)=>{
   // setOpen(true);

   return( <DatePicker
        modal
        open={true}
        date={date}
        mode="time"
        onConfirm={date => {
          setOpen(false);
          setDate(date);

          let hourse = date.getHours();
          let minutes = date.getMinutes();
          let ampm = hourse >= 12 ? 'PM' : 'AM';
          let strTime = hourse + ':' + minutes + ' ' + ampm;
          console.log(strTime);
          setTime([{Monday: {opens: strTime}}]);
          return strTime;
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />);

  }



  console.log('StateName', changedStatename.label);
  console.log('StateName', changedCityename.label);
  const handleCustomIndexSelect = index => {
    // Tab selection for custom Tab Selection
    setCurrentTabindex(index);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(247, 252, 255, 1)'}}>
      <TopHeader name={'Santacruz'} firstIcon={'arrow-back'} />
      <SegmentedControlTab
        values={['Location', 'Hours', 'More']}
        tabStyle={styles.tabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
        selectedIndex={currenttabIndex}
        // badges={usercount.data.count[0].admin_count}
        // badges={[adminCount]}
        onTabPress={handleCustomIndexSelect}
      />
      {currenttabIndex === 0 ? (
        <View style={{padding: 15, backgroundColor: 'rgba(255, 255, 255, 1)'}}>
          <ScrollView>
            <Text style={styles.TitleTextlable}>Name Of Location</Text>
            <TextInput
              style={styles.InputText}
              numberOfLines={4}
              onChangeText={text => setoffertagline(text)}
              value={'Santacruz'}
            />
            <Text style={styles.TitleTextlable}>Address 1</Text>
            <TextInput
              style={styles.MultilineTextinout}
              multiline={true}
              numberOfLines={4}
              onChangeText={text => setofferdisclimer(text)}
              value={''}
            />
            <Text style={styles.TitleTextlable}>Address 2</Text>
            <TextInput
              style={styles.MultilineTextinout}
              multiline={true}
              numberOfLines={4}
              onChangeText={text => setofferdisclimer(text)}
              value={''}
            />

            <Text style={styles.TitleTextlable}>Locality</Text>
            <TextInput
              style={styles.InputText}
              numberOfLines={4}
              onChangeText={text => setoffertagline(text)}
              value={'Santacruz'}
            />
            <Text style={styles.TitleTextlable}>Pincode</Text>
            <TextInput
              style={styles.InputText}
              numberOfLines={4}
              onChangeText={text => setoffertagline(text)}
              value={'Santacruz'}
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
                onChangeText={text => setoffertagline(text)}
                value={'1.50777778'}
              />
              <Text style={styles.TitleTextlable}>Longitude</Text>
              <TextInput
                style={styles.InputText}
                numberOfLines={4}
                onChangeText={text => setoffertagline(text)}
                value={'1.50777778'}
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

          <TouchableOpacity style={styles.UpdateButton}>
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
                      setOpen(true);
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
                      handletimerpicker()
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
              <Text>Tuesday</Text>
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
                <View style={{flexDirection: 'row'}}>
                  <Text>Opens at</Text>
                  <Text style={{left: 60}}>Close at</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TextInput />
                </View>
              </>
            ) : (
              <></>
            )}
          </ScrollView>
          <TouchableOpacity style={styles.UpdateButton}>
            <Text style={styles.UpdatebtnLebelText}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
      {currenttabIndex === 2 ? <Text>More</Text> : <></>}

      
    </View>
  );
};

export default UpdateLocation;

const styles = StyleSheet.create({
  tabStyle: {
    minHeight: 50,
    borderRadius: 0,
    borderColor: '#F7FCFF',
    backgroundColor: '#F7FCFF',
  },
  tabTextStyle: {
    color: '#657180',
    fontFamily: fontfamily.Alte_DIN,
    fontSize: 18,
  },
  activeTabStyle: {
    borderBottomColor: '#0070FC',
    backgroundColor: '#F7FCFF',
  },
  activeTabTextStyle: {
    color: '#0070FC',
  },
  InputText: {
    minHeight: 40,
    minWidth: 328,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#C3C7D9',
    color: '#5F6368',
    fontSize: 12,
    fontFamily: fontfamily.Poppins,
    padding: 10,
  },
  MultilineTextinout: {
    minHeight: 75,
    minWidth: 328,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#C3C7D9',
    fontFamily: fontfamily.Poppins,
    padding: 10,
    paddingTop: 10,
    fontSize: 12,
    color: '#657180',
  },
  TitleTextlable: {
    fontSize: 14,
    color: '#657180',
    fontFamily: fontfamily.Alte_DIN,
    paddingTop: 24,
    paddingBottom: 10,
  },
  UpdateButton: {
    backgroundColor: 'rgba(14, 0, 113, 1)',
    //width: 328,
    //height: 40,
    minHeight: 40,
    minWidth: 328,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    bottom: 250,
  },
  UpdatebtnLebelText: {
    fontSize: 16,
    fontFamily: fontfamily.Alte_DIN,
    color: '#FFFFFF',
  },
  map_view: {
    minHeight: 132,
    minWidth: 328,
    paddingTop: 20,
  },
  ToggleLabel: {
    fontSize: 16,
    fontFamily: fontfamily.Alte_DIN,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  TimerLabel: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingRight: 60,
    fontFamily: fontfamily.Poppins,
  },
});

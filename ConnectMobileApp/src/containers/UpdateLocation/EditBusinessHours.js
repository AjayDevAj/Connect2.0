import {
  Text,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import fontfamily from '../../utility/Font-Declarations';

import DatePicker from 'react-native-date-picker';

import styles from './UpdateLocationStyle';

const EditBusinessHours = ({route, navigation}) => {
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
    trigerPointMondayclose: null,
    TuesdaytrigerPoint: null,
    TuesdaytrigerPointclose: null,
    Wednesdaytrigerpoint: null,
    Wednesdaytrigerpointclose: null,
    Thursdaytrigerpoint: null,
    Thursdaytrigerpointclose: null,
    Fridaytrigerpoint: null,
    Fridaytrigerpointclose: null,
    Saturdaytrigerpoint: null,
    Saturdaytrigerpointclose: null,
    Sundaytrigerpoint: null,
    Sundaytrigerpointclose: null,
  });

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'}}>
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
                      trigerPointMondayclose: true,
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
                      TuesdaytrigerPointclose: true,
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
                      Wednesdaytrigerpointclose: true,
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
                      Thursdaytrigerpointclose: true,
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
                      Thursdaytrigerpointclose: true,
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
                      Fridaytrigerpointclose: true,
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
                      Saturdaytrigerpointclose: true,
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
                      Sundaytrigerpointclose: true,
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
          } else if (open.trigerPointMondayclose) {
            setTime(prev => {
              Alert.alert('Monday close');
              let test = [...prev];
              test[0].Monday.close = strTime;
              return [...test];
            });
          } else if (open.TuesdaytrigerPoint) {
            setTime(prev => {
              Alert.alert('Tuesday open');
              let test = [...prev];
              test[0].Tuesday.opens = strTime;
              return [...test];
            });
          } else if (open.TuesdaytrigerPointclose) {
            setTime(prev => {
              Alert.alert('Tuesday close');
              let test = [...prev];
              test[0].Tuesday.close = strTime;
              return [...test];
            });
          } else if (open.Wednesdaytrigerpoint) {
            setTime(prev => {
              let test = [...prev];
              test[0].Wednesday.opens = strTime;
              return [...test];
            });
          } else if (open.Wednesdaytrigerpointclose) {
            setTime(prev => {
              let test = [...prev];
              test[0].Wednesday.close = strTime;
              return [...test];
            });
          } else if (open.Thursdaytrigerpoint) {
            setTime(prev => {
              let test = [...prev];
              test[0].Thursday.opens = strTime;
              return [...test];
            });
          } else if (open.Thursdaytrigerpointclose) {
            setTime(prev => {
              let test = [...prev];
              test[0].Thursday.close = strTime;
              return [...test];
            });
          } else if (open.Fridaytrigerpoint) {
            setTime(prev => {
              let test = [...prev];
              test[0].Friday.opens = strTime;
              return [...test];
            });
          } else if (open.Fridaytrigerpointclose) {
            setTime(prev => {
              let test = [...prev];
              test[0].Friday.close = strTime;
              return [...test];
            });
          } else if (open.Saturdaytrigerpoint) {
            setTime(prev => {
              let test = [...prev];
              test[0].Saturday.opens = strTime;
              return [...test];
            });
          } else if (open.Saturdaytrigerpointclose) {
            setTime(prev => {
              let test = [...prev];
              test[0].Saturday.close = strTime;
              return [...test];
            });
          } else if (open.Sundaytrigerpoint) {
            setTime(prev => {
              let test = [...prev];
              test[0].Sunday.opens = strTime;
              return [...test];
            });
          } else if (open.Sundaytrigerpointclose) {
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

export default EditBusinessHours;

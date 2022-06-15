import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import fontfaimily from '../../utility/Font-Declarations';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
export default Filter = () => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    openPanel: () => openPanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Top header buttons */}

      <View
        style={{
          justifyContent: 'space-evenly',
          padding: 5,
          flexDirection: 'row',
          width: '100%',
          height: 48,
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }}>
        <Icon.Button
          name="filter-alt"
          size={30}
          backgroundColor="transparent"
          color={'#000000'}>
          <Text style={{fontSize: 18, fontFamily: fontfaimily.Alte_DIN}}>
            Filters
          </Text>
        </Icon.Button>

        <View
          style={{
            width: 1,
            height: 38,
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
          }}></View>

        <Icon.Button
          name="sort"
          color={'#657180'}
          size={30}
          backgroundColor="transparent"
          onPress={() => {
            SheetManager.show('ConnectAppCommonBottomSheet');
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: fontfaimily.Alte_DIN,
              color: 'rgba(101, 113, 128, 1)',
            }}>
            {' '}
            Sorting
          </Text>
        </Icon.Button>
      </View>
      {/* Left and right containers  */}

      <View style={{flexDirection: 'row'}}>
        {/* Left Conatiner holds the Filters buttons   to   filter out the required data */}

        <View
          style={{
            height: 592,
            width: 144,
            backgroundColor: 'rgba(241, 241, 241, 1)',
            opacity: 40,
            padding: 10,
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity>
            <Text>Locations</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Entry Point</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Date</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Customer Intent</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Chat Status</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Contact Details</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Interested In</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 640,
            width: 360,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            opacity: 40,
          }}></View>
      </View>

      <View
        style={{
          paddingBottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          height: 48,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            {
            }
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fontfaimily.Alte_DIN,
              color: 'rgba(101, 113, 128, 1)',
              opacity: 50,
            }}>
            CLEAR ALL
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: 2,
            height: 19,
            backgroundColor: 'rgba(101, 113, 128, 1)',
          }}></View>
        <TouchableOpacity
          style={{
            width: 131,
            height: 31,
            backgroundColor: 'rgba(0, 112, 252, 1)',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          onPress={() => {
            {
            }
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fontfaimily.Alte_DIN,
              color: 'rgba(255, 255, 255, 1)',
              opacity: 50,
            }}>
            APPLY FILTERS
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  leftContainerButtonsText: {
    color: 'rgba(101, 113, 128, 1)',
    opacity: 100,
    fontFamily: fontfaimily.Alte_DIN,
    size: 16,
  },
});

import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SwipeablePanel} from 'rn-swipeable-panel';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RadioButtonRN from 'radio-buttons-react-native';
import fontfaimly from '../../utility/Font-Declarations';

const Sorting_Sheet = open => {
  const data = [
    {
      label: 'Newest First',
    },
    {
      label: 'Oldest First',
    },
    {
      label: 'Alphabet (A-Z)',
    },
    {
      label: 'Alphabet (Z-A)',
    },
  ];
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
    // showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = open => {
    setIsPanelActive(open);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };
  return (
    <View>
      <SwipeablePanel noBar={true} {...panelProps} isActive={setIsPanelActive}>
        <View style={{flexDirection: 'row', padding: 20}}>
          <Icon name="sort" size={20} color='#0E0071' />
          <Text style={styles.panelheader}>Sort by</Text>
        </View>
        <View
          style={{
            minWidth: 328,
            height: 1,
            backgroundColor: '#0000000D',
          }}></View>

        <View style={{marginTop: 20}}>
          <RadioButtonRN
            data={data}
            selectedBtn={e => {
              console.log('selected radio btn', e);
              Alert.alert(e.label.toString());
            }}
            box={false}
            textStyle={styles.title}
            deactiveColor={'#657180'}
            activeColor={'#0E0071'}
            circleSize={13}
          />
        </View>
      </SwipeablePanel>
    </View>
  );
};

export default Sorting_Sheet;

const styles = StyleSheet.create({
  title: {
    fontFamily: fontfaimly.Poppins,
    fontSize: 16,
    color: '#5F6368',
  },
  panelheader: {
    fontFamily: fontfaimly.Alte_DIN,
    color: '#000000',
    fontSize: 18,
    paddingLeft: 8,
    opacity:1,
    letterSpacing: 0.18
  },
});

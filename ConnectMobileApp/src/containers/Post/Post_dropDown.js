import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {AntDesign} from 'react-native-vector-icons/AntDesign';
import Fontfamily from '../../utility/Font-Declarations';
const DropdownComponent = ({title , listvalue}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  

  return (
    <View style={styles.container}>
    
      <Text style={{paddingBottom: 10,fontFamily:Fontfamily.Alte_DIN,color:'#657180',fontSize:14}}>{title}</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={listvalue}
       // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        //searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        //   renderLeftIcon={() => (
        //     <AntDesign
        //       style={styles.icon}
        //       color={isFocus ? 'blue' : 'black'}
        //       name="Safety"
        //       size={20}
        //     />
        //   )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
   // backgroundColor: 'white',
    //padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: '#C3C7D9',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 12,
    fontFamily:Fontfamily.Poppins,
    color:'#657180'
  },
  selectedTextStyle: {
    fontSize: 12,
    fontFamily:Fontfamily.Poppins,
    color:'#657180'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
});

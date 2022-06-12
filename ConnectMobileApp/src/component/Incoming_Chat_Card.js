import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import fontFamily from '../utility/Font-Declarations';
import Card from '../Card/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CardLocation from '../Card/CardLocation';

/**
 * This class is for imcoming chat icon.
 * * Its visible when atleast incoming count is one.
 */

export const Incoming_Chat_Card = ({title,location,onclick}) => {
  return (
    <View>
      <Card>
        <View style={styles.viewStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
          <CardLocation location={location} />
        </View>
        <Text style={styles.deception}>Do you have nike shoes at store?</Text>
        <TouchableOpacity onPress={() => onclick()}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <View
              style={styles.acpectButtonStyle}>
              <Text
                style={styles.acpectButtonTextStyle}>
                Acpect
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  titleStyle:{
    fontFamily:fontFamily.Alte_DIN,
    fontSize:16,
    color:'#333333',
    fontWeight:'600'
  },
  acpectButtonStyle:{
    backgroundColor: '#00C158',
    height: 30,
    width: 79,
    marginBottom: 20,
    borderRadius: 8,
    justifyContent: 'center',
  },
  acpectButtonTextStyle:{
    textAlign: 'center',
    fontFamily: fontFamily.Alte_DIN,
    fontSize: 14,
    color: '#FFFFFF',
  },
  deception:{
    fontFamily:fontFamily.Poppins,
    fontSize:14,
    color:'#666666'
  },

  headerStyle: {
    color: '#000000',
    fontFamily: fontFamily.Alte_DIN,
    fontSize: 18,
    marginLeft: 16,
    marginTop: 30,
    marginBottom: 13,
  },
});

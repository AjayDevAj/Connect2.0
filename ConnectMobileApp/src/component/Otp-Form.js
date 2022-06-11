// /*
// **
// *
// ** ========================================================
// **
// ** AppName: Connect2.0
// ** Version: X.0.0
// ** FileName: Otp-Form.js
// ** UsedFor: Otp Form at connect 2.0 app
// ** Author:
// **
// ** ========================================================
// *
// **
// **
// *
// ** ==========================================================
// ** Otp Form Component
// ** ==========================================================
// *
// **
// */

// /* eslint-disable react-hooks/exhaustive-deps */
// import React, {useState, useRef, useEffect} from 'react';
// import {View, TextInput, Dimensions} from 'react-native';

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

// import  styles  from '../component/Otp-Form-Style'

// const initCodes = [];
// export default function Otp({
//   containerStyle,
//   otpStyles,
//   codeCount = 4,
//   onTyping,
//   onFinish,
// }) {
//   const inputCodeRef = useRef(new Array());
//   const [codes, setCodes] = useState(initCodes);
//   useEffect(() => {
//     const codes = [];
//     for (let i = 0; i < codeCount; i++) {
//       codes.push('');
//     }
//     setCodes(codes);
//   }, []);

//   useEffect(() => {
//     onTyping && onTyping(getCodes());
//     const isTypeFinish = codes.every(function (i) {
//       return i !== '';
//     });
//     if (isTypeFinish) {
//       onFinish && onFinish(getCodes());
//     }
//   }, [codes]);

//   const getCodes = () => {
//     let codeString = '';
//     codes.forEach(code => {
//       codeString += code;
//     });
//     return codeString;
//   };

//   const onChangeCode = (code, index) => {
//     const typedCode = code.slice(-1);
//     const currentCodes = [...codes];
//     currentCodes[index] = typedCode;
//     setCodes(currentCodes);
//   };
//   const onKeyPress = (event, index) => {
//     const key = event.nativeEvent.key;
//     let destIndex = index;
//     if (key === 'Backspace') {
//       destIndex = index > 0 ? index - 1 : 0;
//     } else {
//       destIndex = index < codeCount - 1 ? index + 1 : codeCount - 1;
//     }
//     inputCodeRef.current[destIndex].focus();
//   };
//   return (
//     <View style={[styles.form, containerStyle]}>
//       {codes.map((code, index) => {
//         return (
//           <TextInput
//             ref={element => inputCodeRef.current.push(element)}
//             style={[
//               styles.input,
//               otpStyles,
//               //{width: width / (codeCount + 2), height: height / 14},
//               {width:'15%',height:'10%',padding:'8%'},
//              //{maxHeight:100,maxWidth:100}
//             ]}
//             onChangeText={text => onChangeCode(text, index)}
//             onKeyPress={event => onKeyPress(event, index)}
//             value={code}
//             keyboardType='numeric'
//           />
//         );
//       })}
//     </View>
//   );
// }



import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";
const styles = StyleSheet.create({
 container: {
  flexDirection: "row",
  justifyContent: "space-between",
  width:'60%'
   
 },
 textInput: {
  height: 42,
  width: 42,
  borderWidth:2,
  textAlign: "center",
  fontSize: 22,
  fontWeight: "500",
  color: "#000000",
  borderRadius:8,
  marginTop:16,
  backgroundColor:'rgba(239, 240, 242, 1)',
   
 },
});
const getOTPTextChucks = (inputCount, inputCellLength, text) => {
 let otpText =
  text.match(new RegExp(".{1," + inputCellLength + "}", "g")) || [];
 otpText = otpText.slice(0, inputCount);
 return otpText;
};
class OTPTextView extends Component {
 constructor(props) {
  super(props);
  this.state = {
   focusedInput: 0,
   otpText: getOTPTextChucks(
    props.inputCount,
    props.inputCellLength,
    props.defaultValue
   ),
  };
  this.inputs = [];
 }
 basicValidation = (text) => {
  const validText = /^[0-9a-zA-Z]+$/;
  return text.match(validText);
 };
 onTextChange = (text, i) => {
  const { inputCellLength, inputCount, handleTextChange } = this.props;
  if (text && !this.basicValidation(text)) {
   return;
  }
  this.setState(
   (prevState) => {
    let { otpText } = prevState;
    otpText[i] = text;
    return {
     otpText,
    };
   },
   () => {
    handleTextChange(this.state.otpText.join(""));
    if (text.length === inputCellLength && i !== inputCount - 1) {
     this.inputs[i + 1].focus();
    }
   }
  );
 };
 onInputFocus = (i) => {
  const { otpText } = this.state;
  const prevIndex = i - 1;
  if (prevIndex > -1 && !otpText[prevIndex] && !otpText.join("")) {
   this.inputs[prevIndex].focus();
   return;
  }
  this.setState({ focusedInput: i });
 };
 onKeyPress = (e, i) => {
  const val = this.state.otpText[i] || "";
  if (e.nativeEvent.key === "Backspace" && i !== 0 && val.length === 1) {
   this.inputs[i - 1].focus();
  }
 };
 clear = () => {
  this.setState(
   {
    otpText: [],
   },
   () => {
    this.inputs[0].focus();
    this.props.handleTextChange("");
   }
  );
 };
 setValue = (value) => {
  const { inputCount, inputCellLength } = this.props;
  const updatedFocusInput = value.length - 1;
  this.setState(
   {
    otpText: getOTPTextChucks(inputCount, inputCellLength, value),
   },
   () => {
    if (this.inputs[updatedFocusInput]) {
     this.inputs[updatedFocusInput].focus();
    }
    this.props.handleTextChange(value);
   }
  );
 };
 render() {
  const {
   inputCount,
   offTintColor,
   tintColor,
   defaultValue,
   inputCellLength,
   containerStyle,
   textInputStyle,
   keyboardType,
   ...textInputProps
  } = this.props;
  const { focusedInput, otpText } = this.state;
  const TextInputs = [];
  for (let i = 0; i < inputCount; i += 1) {
   const inputStyle = [
    styles.textInput,
    textInputStyle,
    { borderColor: offTintColor },
   ];
   if (focusedInput === i) {
    inputStyle.push({ borderColor: tintColor });
   }
   TextInputs.push(
    <TextInput
     ref={(e) => {
      this.inputs[i] = e;
     }}
     key={i}
     autoCorrect={false}
     keyboardType={keyboardType}
     autoFocus={i === 0}
     value={otpText[i] || ""}
     style={inputStyle}
     maxLength={this.props.inputCellLength}
     onFocus={() => this.onInputFocus(i)}
     onChangeText={(text) => this.onTextChange(text, i)}
     multiline={false}
     onKeyPress={(e) => this.onKeyPress(e, i)}
     {...textInputProps}
    />
   );
  }
  return <View style={[styles.container, containerStyle]}>{TextInputs}</View>;
 }
}
OTPTextView.propTypes = {
 defaultValue: PropTypes.string,
 inputCount: PropTypes.number,
 containerStyle: PropTypes.any,
 textInputStyle: PropTypes.any,
 inputCellLength: PropTypes.number,
 tintColor: PropTypes.string,
 offTintColor: PropTypes.string,
 handleTextChange: PropTypes.func,
 inputType: PropTypes.string,
 keyboardType: PropTypes.string,
};
OTPTextView.defaultProps = {
 defaultValue: "",
 inputCount: 4,
 tintColor: "rgba(239, 240, 242, 1)",
 offTintColor: "rgba(239, 240, 242, 1)",
 inputCellLength: 1,
 containerStyle: {},
 textInputStyle: {},
 handleTextChange: () => {},
 keyboardType: "numeric",
};
export default OTPTextView;
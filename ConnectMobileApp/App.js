
import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import configureStore  from './src/store/Store';
import Routes from './src/navigation/Routes';


const store = configureStore();

const App = () => {
  return (
    <Provider store ={store}>
      <Routes/>

      {/* <Login/> */}
    </Provider>
    
  );
}

export default App;

// import React,{useState} from 'react';
// import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

// import { SwipeablePanel } from 'rn-swipeable-panel';

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
// ];

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//     <Text style={[styles.title, textColor]}>{item.title}</Text>
//   </TouchableOpacity>
// );

// export default App = () => {
//   const [panelProps, setPanelProps] = useState({
//     fullWidth: true,
//     openLarge: true,
//     showCloseButton: true,
//     onClose: () => closePanel(),
//     onPressCloseButton: () => closePanel(),
//     // ...or any prop you want
//   });
//   const [isPanelActive, setIsPanelActive] = useState(true);

//   const openPanel = () => {
//     setIsPanelActive(true);
//   };

//   const closePanel = () => {
//     setIsPanelActive(false);
//   };
  
//   const [selectedId, setSelectedId] = useState(null);

//   const renderItem = ({ item }) => {
//     const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
//     const color = item.id === selectedId ? 'white' : 'black';

//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         backgroundColor={{ backgroundColor }}
//         textColor={{ color }}
//       />
//     );
//   };
  

//   return (
//     <SafeAreaView style={styles.container}>

//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text>Welcome to React Native!</Text>
//       <Text>To get started, edit App.js</Text>
//       <SwipeablePanel {...panelProps} isActive={isPanelActive}>
//         {/* <PanelContent /> */}
//         {/* <View style={{flex:1,justifyContent:'center',alignItems:'center'}}></View>
//         <View style={{flex:2,justifyContent:'center',alignItems:'center'}}></View>
//         <View style={{flex:3,justifyContent:'center',alignItems:'center'}}></View> */}
//         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         extraData={selectedId}
//       />
// </View>
//       </SwipeablePanel>
//     </View>
//     </SafeAreaView>

//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// import React, {useRef, useState } from 'react';
// import { View, Text, Button, StatusBar } from 'react-native';
// import SearchHeader from 'react-native-search-header';

// import HeaderSearchStyles from './styles/HeaderSearchStylesheet';

// const HeaderSearch = () => {
//     return (
//         <View style = { HeaderSearchStyles.container }>
//             <StatusBar barStyle = 'light-content' />
//             <View style = { HeaderSearchStyles.status }/>
//             <View style = { HeaderSearchStyles.header }>
//                 <Text style = { HeaderSearchStyles.label }> Demo </Text>
//                 <Button
//                     title = 'Search'
//                     color = '#f5fcff'
//                     onPress = {SearchHeader.show()}
//                 />
//             </View>
//             <SearchHeader
//                 ref = {() => {
//                     SearchHeader
//                 }}
//                 placeholder = 'Search...'
//                 placeholderColor = 'gray'
//                 onClear = {() => {
//                     console.log(`Clearing input!`);
//                 }}
//                 onGetAutocompletions = {async (text) => {
//                     if (text) {
//                         const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
//                             method: `get`
//                         });
//                         const data = await response.json();
//                         return data[1];
//                     } else {
//                         return [];
//                     }
//                 }}
//             />
//             <View style = { HeaderSearchStyles.button }>
//                 <Button
//                     title = 'Open Search'
//                     color = '#f5fcff'
//                     onPress = {() => SearchHeader.show()}
//                 />
//             </View>
//             <View style = { HeaderSearchStyles.button }>
//                 <Button
//                     title = 'Clear'
//                     color = '#f5fcff'
//                     onPress = {() => {
//                         SearchHeader.clear();
//                     }}
//                 />
//             </View>
//         </View>
//     );
// };

// export default HeaderSearch;
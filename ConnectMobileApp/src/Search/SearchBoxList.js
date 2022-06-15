import React from 'react';
import { FlatList, Text, View } from 'react-native';
import searchStyles from './styles/SearchStylesheet';

const SearchBoxList = () => {

    // const searchFilterFunction = (text) => {
    //     // Check if searched text is not blank
    //     if (text) {
    //       // Inserted text is not blank
    //       // Filter the masterDataSource and update FilteredDataSource
    //       const newData = masterDataSource.filter(function (item) {
    //         // Applying filter for the inserted text in search bar
    //         const itemData = item.title
    //           ? item.title.toUpperCase()
    //           : ''.toUpperCase();
    //         const textData = text.toUpperCase();
    //         return itemData.indexOf(textData) > -1;
    //       });
    //       setFilteredDataSource(newData);
    //       setSearch(text);
    //     } else {
    //       // Inserted text is blank
    //       // Update FilteredDataSource with masterDataSource
    //       setFilteredDataSource(masterDataSource);
    //       setSearch(text);
    //     }
    //   };
    
    //   const ItemView = ({ item }) => {
    //     return (
    //       // Flat List Item
    //       <Text style={styles.itemStyle} onPress={() => getItem(item)}>
    //         {item.id}
    //         {'.'}
    //         {item.title}
    //       </Text>
    //     );
    //   };
    
    //   const ItemSeparatorView = () => {
    //     return (
    //       // Flat List Item Separator
    //       <View
    //         style={{
    //           height: 0.5,
    //           width: '100%',
    //           backgroundColor: '#C8C8C8',
    //         }}
    //       />
    //     );
    //   };
    
    //   const getItem = (item) => {
    //     // Function for click on an item
    //     alert('Id : ' + item.id + ' Title : ' + item.title);
    //   };

    return (
      <View style={{ alignItems: 'flex-start', zIndex: 1, height: '100%'}}>
        <FlatList
            data={[
            {key: 'Sales Management'},
            {key: 'Finance Management'},
            {key: 'Live Stores Dashboard'},
            ]}
            renderItem={({item}) => <Text style={searchStyles.searchItemText}>{item.key}</Text>}
            style={searchStyles.searchItemList}
        />
      </View>
        
    );
};

export default SearchBoxList;
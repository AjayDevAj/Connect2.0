import React, { useState } from 'react';
import { Button, FlatList, Text, View, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import searchStyles from './styles/SearchStylesheet';

const SearchBoxList = () => {

  const [modalOpen, setModalOpen] = useState(false);
  // const [reviews, setReviews] = useState(data);

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
      <View style={searchStyles.searchListMainContainer}>
        {/* <Modal visible={modalOpen} animationType='slide'> */}
          <View style={searchStyles.searchItemListContainer}>
            <View style={searchStyles.searchResearchClearContainer}>
              <Text style={searchStyles.searchItemResearchText}>RECENT SEARCHES</Text>
              <Text style={searchStyles.searchItemClearAllText}>Clear all</Text>
            </View>

            <FlatList
              data={[
                {key: 'Sales Management'},
                {key: 'Finance Management'},
                {key: 'Live Stores Dashboard'},
              ]}
              renderItem={({item}) => <View>
              <Text style={searchStyles.searchItemText}>{item.key}</Text>
              <Text style={searchStyles.searchItemText}>x</Text>
              </View>}
              style={searchStyles.searchItemList}
            />   
          </View>
        {/* </Modal> */}
      </View>
    );
};

export default SearchBoxList;
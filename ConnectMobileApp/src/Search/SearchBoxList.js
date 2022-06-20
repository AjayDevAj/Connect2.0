import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import searchStyles from './styles/SearchStylesheet';
import {searchedListData} from '../utility/Constant';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchBoxList = () => {

  useEffect(() => {
    getItemList();
  }, []);

  const searchItemListData = [
    {
      id: 1,
      value: 'Sales Management',
    }, {
      id: 2,
      value: 'Finance Management',
    }, {
      id: 3,
      value: 'Live Stores Dashboard',
    },
  ];

  const getItemList = async () => {
    try {
      const searchItemListArrayData = await AsyncStorage.getItem(searchedListData);

      if (searchItemListArrayData !== null) {
        const searchItemListData = JSON.parse(searchItemListArrayData);
      }
    } catch (error) {
      console.log('Save searched item in list exception ', error);
    }
    
    console.log('Save searched item list ', searchItemListData);
  }

  
  const setSearchListItemInTextFieldHandler = async(searchedText) => {
    
    if (searchedText) {
      try {
        const searchItemListArrayData = await AsyncStorage.setItem(searchedListData, JSON.stringify([{value: searchedText}]));

        if (searchItemListArrayData !== null) {
          const searchItemListData = JSON.parse(searchItemListArrayData);
        }
      } catch (error) {
        console.log('Save searched item in list exception ', error);
      }
    }
  };

  

  // const [modalOpen, setModalOpen] = useState(false);
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

  const clearAllSearchDataHandler = () => {
    try {
      AsyncStorage.clear();
      // AsyncStorage.setItem('@searchedListData', JSON.stringify([]));
    } catch (error) {
      console.log('Clear all searched item list ', error);
    }
  }

  const clearParticularSearchDataHandler = async ({ value }) => {
    try {
      AsyncStorage.removeItem(searchedListData, JSON.stringify([]));
    } catch(err) {
      console.log('Clear particular searched item list ', error);
    }
  }
    return (
      <View style={searchStyles.searchListMainContainer}>
        {/* <Modal visible={modalOpen} animationType='slide'> */}
          <View style={searchStyles.searchItemListContainer}>
            <View style={searchStyles.searchResearchClearContainer}>
              <Text style={searchStyles.searchItemResearchText}>RECENT SEARCHES</Text>
              <Text style={searchStyles.searchItemClearAllText} onPress={clearAllSearchDataHandler}>Clear all</Text>
            </View>
            <View >
            <FlatList
              data={searchItemListData}
              renderItem={({item}) => 
              <View style={searchStyles.searchItemList}>
                <Text style={searchStyles.searchItemText} onPress={() => setSearchListItemInTextFieldHandler(item.value)}>{item.value}</Text>
                <Text style={searchStyles.searchItemCrossBtn} onPress={() => clearParticularSearchDataHandler(item.value)}>x</Text>
                </View>
              }
            />   
            </View>
          </View>
        {/* </Modal> */}
      </View>
    );
};

export default SearchBoxList;
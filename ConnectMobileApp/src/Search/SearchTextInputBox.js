import React from 'react';
import { TextInput, View } from 'react-native';

import searchStyles from './styles/SearchStylesheet';

const SearchTextInputBox = ({ searchText, chatSearchHandler }) => {
    return (
        <View style={searchStyles.searchTextinputView}>
            <TextInput
                style={searchStyles.searchTextinput}
                placeholderTextColor='#5F6368'
                placeholder="Search here..."
                value={searchText}
                onChangeText={(value) => chatSearchHandler(value)}
            />
        </View>
    );
};

export default SearchTextInputBox;
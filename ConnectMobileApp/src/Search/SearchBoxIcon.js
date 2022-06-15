import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBoxIcon = ({ rightIconName, searchIconSize, searchTextColor, searchHandler }) => {
    return (
        <Icon name={rightIconName} size={searchIconSize} color={searchTextColor} onPress={searchHandler} />
    );
};

export default SearchBoxIcon;
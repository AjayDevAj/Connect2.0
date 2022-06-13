import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBoxIcon = ({ rightIconName, searchIconSize, searchTextColor }) => {
    return (
        <Icon name={rightIconName} size={searchIconSize} color={searchTextColor} />
    );
};

export default SearchBoxIcon;
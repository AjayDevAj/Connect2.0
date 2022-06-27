import React from "react";
import { View } from 'react-native';

import cardStyles from "./styles/CardStylesheet";

const Card = (props) => {
    return (
        <View style={ cardStyles.card }>
            <View style={ cardStyles.cardContent }>
                { props.children }
                <View style={ cardStyles.borderShadow }></View>
            </View>
        </View>
    );
};

export default Card;
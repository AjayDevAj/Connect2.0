import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, } from "react-native";
import fontfaimily from "../../utility/Font-Declarations";

const DATA = [
  {
    id: "1",
    title: "Locations",
  },
  {
    id: "2",
    title: "Entry Point",
  },
  {
    id: "3",
    title: "Date",
  },
  {
    id: "4",
    title: "Customer Intent",
  },
  {
    id: "5",
    title: "Chat Status",
  },
  {
    id: "6",
    title: "Contact Details",
  },
  {
    id: "7",
    title: "Interested In",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const Buttongroup = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#FFFFFF" : "transparent";
    const color = item.id === selectedId ? '#000000' : '#657180';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 15,
    marginVertical: 4,
    //marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontFamily:fontfaimily.Alte_DIN
  },
});

export default Buttongroup;
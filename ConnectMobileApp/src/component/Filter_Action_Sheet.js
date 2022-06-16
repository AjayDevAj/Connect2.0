import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
const Filter_Action_Sheet = () => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    openPanel: () => openPanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };
  return (
    <ActionSheet
      id="sortingsheet"
      gestureEnabled={true}
      initialOffsetFromBottom={4}
      headerAlwaysVisible={true}
      // extraScroll={DATA.length < 4 ? 250 : 200}
    >
      <View style={{backgroundColor: 'red', maxHeight: '80%'}}>
        <Text>Hello World</Text>
      </View>
    </ActionSheet>
  );
};

export default Filter_Action_Sheet;

const styles = StyleSheet.create({});

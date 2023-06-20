import { TouchableOpacity, FlatList, Modal, View, Text } from 'react-native';
import dropdownStyles from '../DropDown.style';

const renderDropDown = ({
  data,
  visible,
  setVisible,
  dropdownTop,
  onItemPress,
}: RenderDropDownProps) => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={dropdownStyles.item}
      onPress={() => onItemPress(item)}
    >
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );
  return (
    <Modal visible={visible} transparent animationType='none'>
      <TouchableOpacity
        style={dropdownStyles.overlay}
        onPress={() => setVisible(false)}
      >
        <View style={[dropdownStyles.dropdown, { top: dropdownTop }]}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

type RenderDropDownProps = {
  data: any;
  visible: boolean;
  setVisible: (value: boolean) => void;
  dropdownTop: number;
  onItemPress: (item: any) => void;
};

export default renderDropDown;

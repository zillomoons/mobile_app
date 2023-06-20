import { Text, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import dropdownStyles from './DropDown.style';
import { renderDropDown } from './dropdownUtils';

const DropDown = ({ label, data, onSelect }: DropdownProps) => {
  const DropdownBtn = useRef<TouchableOpacity>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<{ label: string; value: string }>();
  const [dropdownTop, setDropdownTop] = useState(0);

  const openDropdown = () => {
    DropdownBtn.current &&
      DropdownBtn.current.measure(
        (
          _fx: number,
          _fy: number,
          _w: number,
          h: number,
          _px: number,
          py: number
        ) => {
          setDropdownTop(py + h);
        }
      );
    setVisible(true);
  };

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const onItemPress = (item: any) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  return (
    <TouchableOpacity
      ref={DropdownBtn}
      onPress={toggleDropdown}
      style={dropdownStyles.button}
    >
      {renderDropDown({ data, visible, setVisible, dropdownTop, onItemPress })}
      <Text style={dropdownStyles.buttonText}>
        {(!!selected && selected.label) || label}
      </Text>
    </TouchableOpacity>
  );
};

type DropdownProps = {
  data: Array<{ label: string; value: string }>;
  label: string;
  onSelect: (item: { label: string; value: string }) => void;
};

export default DropDown;

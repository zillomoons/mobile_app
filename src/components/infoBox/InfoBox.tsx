import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { InfoText } from './infoText';
import { Entypo } from '@expo/vector-icons';
import infoStyles from './infoBox.style';

const InfoContainer = React.memo(({ title, infoText }: InfoContainerProps) => {
  const [showInfo, setShowInfo] = useState(true);
  const toggleInfoBox = () => setShowInfo(!showInfo);

  return (
    <View style={infoStyles.container}>
      <TouchableOpacity style={infoStyles.heading} onPress={toggleInfoBox}>
        <Entypo name='info-with-circle' style={infoStyles.icon} />
        <Text style={infoStyles.headingText}>{title}</Text>
      </TouchableOpacity>
      {showInfo && (
        <View style={infoStyles.infoText}>
          <InfoText infoText={infoText} />
          <TouchableOpacity
            style={infoStyles.hideBtn}
            onPress={() => setShowInfo(false)}
          >
            <Text style={infoStyles.hideText}>hide</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
});

export default InfoContainer;

type InfoContainerProps = {
  title: string;
  infoText: string;
};

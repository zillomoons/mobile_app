import { Text } from 'react-native';

const InfoText = ({ infoText }: InfoProps) => {
  return <Text style={{ marginBottom: 15 }}>{infoText}</Text>;
};

export default InfoText;

type InfoProps = {
  infoText: string;
};

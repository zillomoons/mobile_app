import { StyleSheet, View, Image } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/evm_logo.png')}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoContainer: {
    margin: 50,
  },
  logo: {
    width: 150,
    height: 100,
  },
});

import { StyleSheet } from "react-native";
import theme from '../../../styles/theme.style';

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_BG
  },
  editNotifIconContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
  imageContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    fontSize: 36
  },
  label: {
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginBottom: 8,
    fontWeight: '600'
  },
  profileText: {
    marginBottom: 15,
    fontSize: theme.FONT_SIZE_MEDIUM
  },
  userIcon: {
    width: 150,
    height: 150,
    marginRight: 25,
    borderWidth: 2,
    borderColor: theme.PRIMARY_BG,
    borderRadius: 100
  },
 
  sumInfoText: {
    fontSize: 22,
    color: theme.DARK_GREY
  },
  accountInfo: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileInfo: {
    width: '80%',
    marginVertical: 25
  },
  checkIcon: {
    marginRight: 25,
    color: theme.PRIMARY_COLOR
  },
  notifIcon: {
    marginRight: 12,
    color: theme.PRIMARY_COLOR,
    fontSize: 24,
  },
  notifNumContainer: {
    backgroundColor: theme.RED,
    width: 22,
    height: 22,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  notifNum: { color: 'white', fontWeight: '600' }
});
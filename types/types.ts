import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';


export type RootStackParamList = {
  HomeStack: NavigatorScreenParams<HomeTabParamList>;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPass: undefined;
  ResetPass: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>

export type HomeTabParamList = {
  Home: undefined;
  Map: undefined;
  ChargeStack: NavigatorScreenParams<ChargeStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
  Settings: undefined;
};

export type ChargeStackParamList = {
  QR_Scan: undefined;
  ChargeInstructions: undefined;
  Payment: undefined;
  ChargeInProgress: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
  EditCard: undefined;
  PushNotif: undefined;
};

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> =
  CompositeScreenProps<
    StackScreenProps<ProfileStackParamList, T>,
    BottomTabScreenProps<HomeTabParamList>
  >
  
export type ChargeStackScreenProps<T extends keyof ChargeStackParamList> =
  CompositeScreenProps<
    StackScreenProps<ChargeStackParamList, T>,
    BottomTabScreenProps<HomeTabParamList>
  >
export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

//   declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }


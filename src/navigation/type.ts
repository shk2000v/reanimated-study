import { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * StartStackParamList
 */
export type StartStackParamList = {
  Start: undefined;
  Home: undefined;
  Event: undefined;
  WaveAnimation: undefined;
};

type StackParamList = StartStackParamList;

export type RootStackParamList = {
  [key in keyof StackParamList]: StackParamList[key] extends infer Param
    ? Param extends undefined
      ? undefined | StackParamList[key]
      : StackParamList[key]
    : never;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

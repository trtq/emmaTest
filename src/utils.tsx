import {Dimensions, StatusBar} from 'react-native';

export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;

const comparingScreenWidth: number = 414;
const comparingScreenHeight: number = 896;

export const horizontalScale = (size: number = 0): number =>
  (SCREEN_WIDTH / comparingScreenWidth) * size;
export const verticalScale = (size: number = 0): number =>
  ((SCREEN_HEIGHT - (StatusBar.currentHeight || 0)) / comparingScreenHeight) *
  size;

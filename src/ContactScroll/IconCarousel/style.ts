import {StyleSheet, Platform} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils';

export const s = StyleSheet.create({
  scrollItem: {
    marginHorizontal: horizontalScale(8),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollItemBorder: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#cce0f2',
  },
  shadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 1.5,
    borderColor: '#ececec',
    borderTopWidth: Platform.OS === 'ios' ? 0 : verticalScale(1),
    transform: [
      {
        rotate: '-180deg',
      },
    ],
  },
  iconCarContainer: {
    paddingTop: verticalScale(27),
    paddingBottom: verticalScale(10),
  },
});

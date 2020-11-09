import {Platform, StyleSheet} from 'react-native';
import {verticalScale} from '../utils';

export const s = StyleSheet.create({
  header: {
    width: '100%',
    height: Platform.OS === 'ios' ? verticalScale(101) : verticalScale(80),
    borderBottomWidth: verticalScale(2),
    borderColor: '#ededed',
    backgroundColor: '#f9f9f9',
    justifyContent: 'flex-end',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#222222',
    fontSize: verticalScale(20),
    marginBottom: verticalScale(13),
  },
  contentContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
});

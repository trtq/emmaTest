import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils';

export const s = StyleSheet.create({
  infoScrollContainer: {
    width: '100%',
    flex: 1,
  },
  MainScrollItem: {
    paddingHorizontal: horizontalScale(22),
    paddingTop: horizontalScale(24),
  },
  name: {
    width: '100%',
    textAlign: 'center',
    fontSize: verticalScale(21),
    color: '#222222',
  },
  firstName: {
    fontWeight: 'bold',
  },
  role: {
    width: '100%',
    textAlign: 'center',
    color: '#888888',
    fontSize: verticalScale(15),
    marginTop: verticalScale(6),
    marginBottom: verticalScale(33),
  },
  aboutMe: {
    color: '#222222',
    fontWeight: 'bold',
    fontSize: verticalScale(15),
    marginBottom: verticalScale(8),
  },
  description: {
    color: '#888888',
    fontSize: verticalScale(15),
  },
});

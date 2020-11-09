import {StyleSheet} from 'react-native';
import {verticalScale} from '../utils';

export const s = StyleSheet.create({
  modalAnim: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTouchable: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: 350,
    height: 160,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picContainer: {marginLeft: -10},
  pic: {
    width: 100,
    height: 100,
    borderRadius: 120,
    marginRight: 10,
    backgroundColor: 'red',
  },
  name: {
    width: 185,
    textAlign: 'center',
    fontSize: verticalScale(21),
    color: '#222222',
  },
  firstName: {
    fontWeight: 'bold',
  },
  role: {
    width: 185,
    textAlign: 'center',
    color: '#888888',
    fontSize: verticalScale(15),
    marginTop: verticalScale(6),
    marginBottom: verticalScale(3),
  },
  crossText: {
    fontWeight: 'normal',
    fontSize: 40,
    lineHeight: 40,
    width: 35,
    textAlign: 'center',
    transform: [{rotate: '45deg'}],
  },
  crossButton: {
    position: 'absolute',
    top: 5,
    right: 10,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

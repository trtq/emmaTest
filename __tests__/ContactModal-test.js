import 'react-native';
import React from 'react';
import {HomeScreen} from '../src/HomeScreen/HomeScreen';
import {ContactModal} from '../src/ContactModal/ContactModal';
import {IconCarousel} from '../src/ContactScroll/IconCarousel/IconCarousel';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import {Image, TouchableOpacity} from 'react-native';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

test('pressing on the icon passes info to ContactModal', () => {
  jest.useFakeTimers();
  const home = renderer.create(<HomeScreen />).root;
  const icons = home.findByType(IconCarousel).findAllByType(TouchableOpacity);
  act(icons[0].props.onPress);
  expect(icons[0].findByType(Image).props.source).toEqual(
    home.findByType(ContactModal).findByType(Image).props.source,
  );
});

import {
  GestureResponderEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {TContact} from '../../HomeScreen/types';

export type TIconCarouselProps = {
  data: TContact[];
  iconSize?: number;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onTouch?: (event: GestureResponderEvent) => void;
  onPress?: (index: number, item: TContact) => void;
};

export type TIndexScrollItemProps = {
  index: number;
  item: TContact;
};

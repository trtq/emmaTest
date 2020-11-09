import {
  GestureResponderEvent,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {TContact} from '../../HomeScreen/types';

export type TVerticalInfoScrollProps = {
  data: TContact[];
  scrollHeight: number;
  onTouch?: (event: GestureResponderEvent) => void;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onLayout?: (event: LayoutChangeEvent) => void;
};

export type TMainScrollItemProps = {
  item: TContact;
};

import {TContact} from 'src/HomeScreen/types';

export type TContactScrollProps = {
  data: TContact[];
  onCenterIconPress: (item: TContact) => void;
};

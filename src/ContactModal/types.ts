import {TContact} from '../HomeScreen/types';

export type TContactModalProps = {
  showModal?: boolean;
  item: TContact;
  onClose: () => void;
};

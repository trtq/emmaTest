import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ContactModal} from '../ContactModal/ContactModal';
import {ContactScroll} from '../ContactScroll/ContactScroll';
import {s} from './styles';
import {TContact} from './types';

export const HomeScreen = () => {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const [modalData, setModalData] = useState<TContact | null>(null);
  const onCenterIconPress = (item: TContact) => {
    setModalData(item);
    setIsModalShown(true);
  };
  return (
    <>
      <View style={s.header}>
        <Text style={s.title}>Contacts</Text>
      </View>
      <View style={s.contentContainer}>
        <ContactScroll
          data={require('../../assets/data.json')}
          onCenterIconPress={onCenterIconPress}
        />
      </View>
      {modalData && (
        <ContactModal
          item={modalData}
          showModal={isModalShown}
          onClose={() => setIsModalShown(false)}
        />
      )}
    </>
  );
};

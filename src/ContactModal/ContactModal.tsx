import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, Animated, Image, View} from 'react-native';
import {pullImage} from '../../assets/images/pullImage';
import {s} from './styles';
import {TContactModalProps} from './types';

export const ContactModal = ({
  showModal,
  item,
  onClose,
}: TContactModalProps) => {
  const [rendered, setRendered] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (showModal && !rendered) {
      setRendered(true);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else if (!showModal && rendered) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setRendered(false);
      });
    }
  }, [showModal, rendered, opacity, onClose]);

  return rendered ? (
    <Animated.View style={[s.modalAnim, {opacity}]}>
      <TouchableOpacity onPress={onClose} style={s.modalTouchable} />
      <View style={s.modalContainer}>
        <View style={s.picContainer}>
          <Image
            resizeMode={'cover'}
            style={s.pic}
            source={pullImage(item.image)}
          />
        </View>
        <View>
          <Text style={s.name} numberOfLines={1}>
            <Text style={s.firstName}>{item.firstName} </Text>
            {item.restOfName}
          </Text>
          <Text style={s.role}>{item.role}</Text>
        </View>
        <TouchableOpacity onPress={onClose} style={s.crossButton}>
          <Text numberOfLines={1} style={s.crossText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  ) : null;
};

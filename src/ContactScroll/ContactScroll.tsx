import React, {RefObject, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {IconCarousel} from './IconCarousel/IconCarousel';
import {VerticalInfoScroll} from './VerticalInfoScroll/VerticalInfoScroll';
import {TContact} from '../HomeScreen/types';
import {horizontalScale, SCREEN_HEIGHT} from '../utils';
import {TContactScrollProps} from './types';

export const ContactScroll = ({
  data,
  onCenterIconPress,
}: TContactScrollProps) => {
  const [scrollHeight, setScrollHeight] = useState<number>(SCREEN_HEIGHT);
  const [smallScrollActive, setSmallScrollActive] = useState<boolean>(false);

  const [activeIcon, setActiveIcon] = useState<number>(0);

  const bigScroll = useRef<FlatList<TContact>>();
  const smallScroll = useRef<FlatList<TContact>>();

  const iconSize = horizontalScale(97);

  const onPress = (index: number, item: TContact) => {
    if (activeIcon === index) {
      onCenterIconPress(item);
    } else {
      if (bigScroll && bigScroll.current) {
        bigScroll.current.scrollToOffset({
          offset: scrollHeight * index,
          animated: true,
        });
      }
      if (smallScroll && smallScroll.current) {
        smallScroll.current.scrollToOffset({
          offset: index * iconSize,
          animated: true,
        });
      }
    }
  };

  return (
    <>
      <IconCarousel
        ref={smallScroll as RefObject<FlatList<TContact>>}
        data={data}
        iconSize={iconSize}
        onScroll={(e) => {
          const active = Math.ceil(
            e.nativeEvent.contentOffset.x / iconSize - 0.5,
          );
          if (activeIcon !== active) {
            setActiveIcon(active);
          }
          if (smallScrollActive && bigScroll && bigScroll.current) {
            bigScroll.current.scrollToOffset({
              offset: e.nativeEvent.contentOffset.x * (scrollHeight / iconSize),
              animated: false,
            });
          }
        }}
        onTouch={() => {
          setSmallScrollActive(true);
        }}
        onPress={onPress}
      />

      <VerticalInfoScroll
        ref={bigScroll as RefObject<FlatList<TContact>>}
        data={data}
        scrollHeight={scrollHeight}
        onTouch={() => {
          setSmallScrollActive(false);
        }}
        onScroll={(e) => {
          if (!smallScrollActive && smallScroll && smallScroll.current) {
            smallScroll.current.scrollToOffset({
              offset: e.nativeEvent.contentOffset.y * (iconSize / scrollHeight),
              animated: false,
            });
          }
        }}
        onLayout={(e) => {
          setScrollHeight(e.nativeEvent.layout.height);
        }}
      />
    </>
  );
};

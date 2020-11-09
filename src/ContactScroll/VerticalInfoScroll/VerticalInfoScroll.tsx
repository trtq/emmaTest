import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {TContact} from '../../HomeScreen/types';
import {s} from './style';
import {TMainScrollItemProps, TVerticalInfoScrollProps} from './types';

export const VerticalInfoScroll = React.forwardRef(
  (
    {data, scrollHeight, onTouch, onScroll, onLayout}: TVerticalInfoScrollProps,
    ref:
      | React.RefObject<FlatList<TContact>>
      | ((instance: FlatList<TContact> | null) => void)
      | null,
  ) => {
    const MainScrollItem = ({item}: TMainScrollItemProps) => (
      <View
        style={[
          s.MainScrollItem,
          {
            height: scrollHeight,
          },
        ]}>
        <Text style={s.name}>
          <Text style={s.firstName}>{item.firstName} </Text>
          {item.restOfName}
        </Text>
        <Text style={s.role}>{item.role}</Text>
        <Text style={s.aboutMe}>About me</Text>
        <Text style={s.description}>{item.description}</Text>
      </View>
    );
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        data={data}
        renderItem={MainScrollItem}
        keyExtractor={(item) => item.firstName + item.restOfName}
        extraData={scrollHeight}
        snapToInterval={scrollHeight}
        ref={ref}
        scrollEventThrottle={16}
        onTouchStart={onTouch}
        onScroll={onScroll}
        onLayout={onLayout}
        style={s.infoScrollContainer}
      />
    );
  },
);

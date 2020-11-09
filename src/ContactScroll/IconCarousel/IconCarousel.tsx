import React, {useMemo, useRef} from 'react';
import {FlatList, TouchableOpacity, Animated, Image, View} from 'react-native';
import {verticalScale, SCREEN_WIDTH, horizontalScale} from '../../utils';
import {pullImage} from '../../../assets/images/pullImage';
import {s} from './style';
import {TIconCarouselProps, TIndexScrollItemProps} from './types';
import {TContact} from '../../HomeScreen/types';

export const IconCarousel = React.forwardRef(
  (
    {
      data,
      iconSize = horizontalScale(97),
      onScroll,
      onTouch,
      onPress,
    }: TIconCarouselProps,
    ref:
      | React.RefObject<FlatList<TContact>>
      | ((instance: FlatList<TContact> | null) => void)
      | null,
  ) => {
    const activeIconAnim = useRef(new Animated.Value(1)).current;
    const iconSizeNoMargin = iconSize - verticalScale(16);
    const iconSizeNoBorder = iconSize - verticalScale(25);

    const IndexScrollItem = ({index, item}: TIndexScrollItemProps) => (
      <TouchableOpacity
        style={[
          s.scrollItem,
          {
            width: iconSizeNoMargin,
            height: iconSizeNoMargin,
            borderRadius: iconSizeNoMargin,
          },
        ]}
        onPress={() => {
          if (onPress) {
            onPress(index, item);
          }
        }}>
        <Animated.View
          style={[
            s.scrollItemBorder,
            {
              borderRadius: iconSizeNoMargin,
              opacity: activeIconAnim.interpolate({
                inputRange: [
                  (index - 1) * iconSize,
                  index * iconSize,
                  (index + 1) * iconSize,
                ],
                outputRange: [0, 1, 0],
                extrapolate: 'clamp',
              }),
            },
          ]}
        />
        <Image
          resizeMode={'cover'}
          style={{
            width: iconSizeNoBorder,
            height: iconSizeNoBorder,
            borderRadius: iconSizeNoBorder,
          }}
          source={pullImage(item.image)}
        />
      </TouchableOpacity>
    );

    const shadowInput = useMemo(
      () =>
        data.flatMap((item, index) => [
          (index - 0.2) * iconSize,
          index * iconSize,
          (index + 0.2) * iconSize,
        ]),
      [iconSize, data],
    );
    const shadowOutput = useMemo(() => data.flatMap(() => [1, 0, 1]), [data]);

    return (
      <View style={s.iconCarContainer}>
        <Animated.View
          style={[
            s.shadow,
            {
              opacity: activeIconAnim.interpolate({
                inputRange: shadowInput,
                outputRange: shadowOutput,
                extrapolate: 'clamp',
              }),
            },
          ]}
        />
        <FlatList
          centerContent
          snapToInterval={iconSize}
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          data={data}
          renderItem={IndexScrollItem}
          keyExtractor={(item) => item.firstName + item.restOfName}
          horizontal
          ref={ref}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: activeIconAnim,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
              listener: onScroll,
            },
          )}
          onTouchStart={onTouch}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingHorizontal: (SCREEN_WIDTH - iconSize) / 2,
          }}
        />
      </View>
    );
  },
);

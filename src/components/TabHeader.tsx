import React, {JSX} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {COLORS} from '../utils/color';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

interface Title {
  title: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onPressLeft?: string;
  onPressRight?: string;
  goBack?: boolean;
}
const TabHeader = ({
  title,
  onPressRight,
  onPressLeft,
  iconRight,
  iconLeft,
  goBack,
}: Title): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          if (goBack) {
            navigation.goBack();
          } else if (onPressLeft) {
            navigation.navigate(onPressLeft);
          }
        }}>
        {iconLeft}
      </TouchableOpacity>

      <Text style={[styles.title, {marginLeft: iconRight ? 0 : -20}]}>
        {title}
      </Text>

      <TouchableOpacity
        onPress={() => {
          if (onPressRight) {
            navigation.navigate(onPressRight);
          }
        }}>
        {iconRight}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.white,
  },
});
export default TabHeader;

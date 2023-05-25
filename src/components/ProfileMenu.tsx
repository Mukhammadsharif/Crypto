import React, {SetStateAction} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../utils/color';
import {MenuProps} from '../pages/Profile';

interface ProfileMenuProps {
  menu: MenuProps;
  setMenu: React.Dispatch<SetStateAction<MenuProps>>;
}
const ProfileMenu = ({menu, setMenu}: ProfileMenuProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          setMenu({
            desoc: true,
            finance: false,
            reactions: false,
          })
        }
        style={menu.desoc ? styles.textContainerActive : styles.textContainer}>
        <Text style={menu.desoc ? styles.textActive : styles.text}>
          Desoc (12)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setMenu({
            desoc: false,
            finance: true,
            reactions: false,
          })
        }
        style={
          menu.finance ? styles.textContainerActive : styles.textContainer
        }>
        <Text style={menu.finance ? styles.textActive : styles.text}>
          Finance (2)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setMenu({
            desoc: false,
            finance: false,
            reactions: true,
          })
        }
        style={
          menu.reactions ? styles.textContainerActive : styles.textContainer
        }>
        <Text style={menu.reactions ? styles.textActive : styles.text}>
          Reactions (34)
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dividerBackground,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  textContainerActive: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: COLORS.mainBlue,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'SFProDisplay-Light',
    color: COLORS.darkGray,
  },
  textActive: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'SFProDisplay-Light',
    color: COLORS.mainBlue,
  },
});
export default ProfileMenu;

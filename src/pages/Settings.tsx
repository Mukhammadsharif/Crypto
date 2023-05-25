import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS} from '../utils/color';
import Avatar from '../assets/images/setting-ava.png';
import SettingsCard from '../components/SettingsCard';
import {
  ChevronRightSettingsIcon,
  SettingsColorThemeIcon,
  SettingsCopyIcon,
  SettingsDisconnectIcon,
  SettingsEditIcon,
  SettingsWalletIcon,
} from '../components/Svgs';
import EditProfileModal from '../components/EditProfileModal';

const Settings = (): JSX.Element => {
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={Avatar} style={styles.avatar} />

          <View style={styles.headerTextContainer}>
            <Text style={styles.username}>Name Profile</Text>
            <Text style={styles.userCode}>0x7eE3F543dsa3x0E0</Text>
          </View>
        </View>

        <SettingsCard icon={<SettingsCopyIcon />} title={'Copy address'} />

        <SettingsCard
          icon={<SettingsEditIcon />}
          title={'Edit profile'}
          toggle={edit}
          setToggle={setEdit}
        />

        <SettingsCard
          icon={<SettingsWalletIcon />}
          title={'Change wallet'}
          chevron={<ChevronRightSettingsIcon />}
        />
        <SettingsCard
          icon={<SettingsColorThemeIcon />}
          title={'Color theme'}
          chevron={<ChevronRightSettingsIcon />}
        />
        <SettingsCard
          icon={<SettingsDisconnectIcon />}
          title={'Disconnect'}
          chevron={<ChevronRightSettingsIcon />}
        />
      </ScrollView>

      <EditProfileModal modalVisible={edit} setModalVisible={setEdit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.profileImageBackground,
  },
  header: {
    padding: 20,
    borderBottomColor: COLORS.dividerBackground,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  headerTextContainer: {
    paddingLeft: 10,
  },
  username: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.mainBlack,
    fontFamily: 'SFProDisplay-Light',
  },
  userCode: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.mainBlue,
    fontFamily: 'SFProDisplay-Light',
    marginTop: 5,
  },
});

export default Settings;

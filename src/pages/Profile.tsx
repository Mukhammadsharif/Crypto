import React, {JSX, useContext, useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import {COLORS} from '../utils/color';
import Avatar from '../assets/images/avatar.png';
import {
  CurrencyDown,
  CurrencyUp,
  FinanceLeftIcon,
  FinanceRightIcon,
  ShareIcon,
  SushiIcon,
  TrashIcon,
  USDTIcon,
  VerifyIconProfile,
} from '../components/Svgs';
import Button from '../components/Button';
import ProfileCurrencyCard from '../components/ProfileCurrencyCard';
import {GlobalContext} from '../components/context/GlobalContext';
import ProfileMenu from '../components/ProfileMenu';
import ProfileImage from '../components/ProfileImage';
import ProfileVideo from '../components/ProfileVideo';
import ProfileAudio from '../components/ProfileAudio';
import ProfilePost from '../components/ProfilePost';
import FinanceCard from '../components/FinanceCard';

export interface MenuProps {
  desoc: boolean;
  finance: boolean;
  reactions: boolean;
}
const Profile = (): JSX.Element => {
  const {showTopNav, setShowTopNav} = useContext(GlobalContext);

  const [menu, setMenu] = useState<MenuProps>({
    desoc: true,
    finance: false,
    reactions: false,
  });
  const changeOnScroll = ({nativeEvent}: any) => {
    const heightValue = nativeEvent.contentOffset.y;

    if (heightValue < 117) {
      setShowTopNav(true);
    } else {
      setShowTopNav(false);
    }
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: !showTopNav
            ? COLORS.nativeBackground
            : COLORS.mainBlack,
        },
      ]}>
      <ScrollView
        nestedScrollEnabled={true}
        stickyHeaderIndices={[1]}
        scrollEventThrottle={16}
        onScroll={changeOnScroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 100, paddingBottom: 200}}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.avatarContainer}>
              <Image source={Avatar} style={styles.avatar} />
            </View>

            <Text style={styles.statusText}>
              Status: <Text style={styles.statusActiveText}>Hello World!</Text>
            </Text>
          </View>

          <View style={styles.verifyContainer}>
            <Text style={styles.verifyText}>0x7eE...3F5</Text>
            <VerifyIconProfile style={styles.verifyIcon} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>
              217 <Text style={styles.inputThinText}>Inputs</Text>
            </Text>

            <Text style={styles.inputText}>
              118 <Text style={styles.inputThinText}>Outputs</Text>
            </Text>

            <Text style={styles.inputText}>
              234 <Text style={styles.inputThinText}>Transaction</Text>
            </Text>
          </View>

          <Text style={styles.balanceKey}>
            Balance:
            <Text style={styles.balanceValue}> 0.814867124750270799 Ether</Text>
          </Text>

          <Text style={styles.balanceKey}>
            Value:
            <Text style={styles.balanceValue}>
              {'      '}
              $3,237.96 (@ $3,973.61/ETH)
            </Text>
          </Text>

          <View style={styles.buttonContainer}>
            <Button title={'Public item'} backgroundColor={COLORS.mainBlue} />
          </View>

          <View style={styles.currencyCardContainer}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              persistentScrollbar={true}
              pagingEnabled={false}
              nestedScrollEnabled={true}
              minimumZoomScale={10.0}
              horizontal={true}>
              <ProfileCurrencyCard
                icon={<USDTIcon />}
                title={'5.321'}
                description={'USDT'}
                percentage={'1.44%'}
                percentageIcon={<CurrencyUp />}
                amount={'11,2'}
                value={'2 237.24'}
              />

              <ProfileCurrencyCard
                icon={<SushiIcon />}
                title={'5.321'}
                description={'USDT'}
                percentage={'1.44%'}
                percentageIcon={<CurrencyDown />}
                amount={'11,2'}
                value={'2 237.24'}
                up={false}
              />

              <ProfileCurrencyCard
                icon={<USDTIcon />}
                title={'5.321'}
                description={'USDT'}
                percentage={'1.44%'}
                percentageIcon={<CurrencyDown />}
                amount={'11,2'}
                value={'2 237.24'}
                up={false}
              />

              <ProfileCurrencyCard
                icon={<USDTIcon />}
                title={'5.321'}
                description={'USDT'}
                percentage={'1.44%'}
                percentageIcon={<CurrencyDown />}
                amount={'11,2'}
                value={'2 237.24'}
                up={false}
              />

              <ProfileCurrencyCard
                icon={<USDTIcon />}
                title={'5.321'}
                description={'USDT'}
                percentage={'1.44%'}
                percentageIcon={<CurrencyDown />}
                amount={'11,2'}
                value={'2 237.24'}
                up={false}
              />
            </ScrollView>
          </View>
        </View>

        <ProfileMenu menu={menu} setMenu={setMenu} />

        <ScrollView nestedScrollEnabled={true}>
          {menu.desoc ? (
            <ScrollView
              stickyHeaderHiddenOnScroll={true}
              contentContainerStyle={{flex: 1}}
              nestedScrollEnabled={true}>
              <ProfileImage
                rightFirstIcon={<TrashIcon />}
                rightSecondIcon={<ShareIcon />}
                more={true}
                add={true}
              />
              <ProfileVideo />
              <ProfileAudio />
              <ProfilePost />
            </ScrollView>
          ) : menu.finance ? (
            <ScrollView
              stickyHeaderHiddenOnScroll={true}
              contentContainerStyle={{flex: 1, paddingBottom: 200}}
              nestedScrollEnabled={true}>
              <FinanceCard
                icon={<FinanceLeftIcon />}
                title={'Send USDT'}
                date={'Sep 2, 5:34 AM •'}
                dateIndex={'From: 0x6555...97cd'}
                rate={'-1186 USDT'}
                currentRate={'-$1,185.76 USD'}
              />

              <FinanceCard
                icon={<FinanceRightIcon />}
                title={'Send USDT'}
                date={'Sep 2, 5:34 AM •'}
                dateIndex={'From: 0x6555...97cd'}
                rate={'-1186 USDT'}
                currentRate={'-$1,185.76 USD'}
              />

              <FinanceCard
                icon={<FinanceLeftIcon />}
                title={'Send USDT'}
                date={'Sep 2, 5:34 AM •'}
                dateIndex={'From: 0x6555...97cd'}
                rate={'-1186 USDT'}
                currentRate={'-$1,185.76 USD'}
              />

              <FinanceCard
                icon={<FinanceRightIcon />}
                title={'Send USDT'}
                date={'Sep 2, 5:34 AM •'}
                dateIndex={'From: 0x6555...97cd'}
                rate={'-1186 USDT'}
                currentRate={'-$1,185.76 USD'}
              />
            </ScrollView>
          ) : (
            ''
          )}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.mainBlack,
    flex: 1,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    marginTop: -20,
    marginLeft: 20,
  },
  avatar: {
    width: 68,
    height: 68,
    zIndex: 100,
  },
  mainContainer: {
    backgroundColor: COLORS.nativeBackground,
  },
  headerContainer: {
    paddingRight: 20,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  statusText: {
    alignSelf: 'flex-end',
    marginTop: -20,
    color: COLORS.profileBlack,
    fontFamily: 'SFProDisplay-Light',
  },
  statusActiveText: {
    color: COLORS.profileBlue,
  },
  verifyContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingTop: 10,
    backgroundColor: COLORS.white,
  },
  verifyText: {
    fontSize: 22,
    color: COLORS.mainBlack,
    fontFamily: 'SFProDisplay-Light',
    fontWeight: '400',
  },
  verifyIcon: {
    marginLeft: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: COLORS.white,
  },
  inputText: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.darkGray,
    paddingLeft: 20,
  },
  inputThinText: {
    fontWeight: '300',
    fontFamily: 'SFProDisplay-Light',
  },
  balanceKey: {
    paddingLeft: 20,
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'SFProDisplay-Light',
    color: COLORS.mainBlack,
    backgroundColor: COLORS.white,
  },
  balanceValue: {
    paddingLeft: 5,
    color: COLORS.darkGray,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 28,
    backgroundColor: COLORS.white,
  },
  currencyCardContainer: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: COLORS.white,
  },
});
export default Profile;

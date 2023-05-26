import React, {SetStateAction, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Photo from '../assets/images/image-1.png';
import Avatar from '../assets/images/avatar.png';
import {COLORS} from '../utils/color';
import {AddIcon, DislikeIcon, LikeIcon, MoreIcon} from './Svgs';
import CustomModal from './Modal';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import CommentInput from './CommentInput';

interface ProfileDetailImageProps {
  rightFirstIcon?: React.ReactNode;
  rightSecondIcon?: React.ReactNode;
  more?: boolean;
  add?: boolean;
  comment?: boolean;
  commentToggle?: boolean;
  setCommentToggle?: React.Dispatch<SetStateAction<boolean>>;
}

const ProfileDetailImage = ({
  rightFirstIcon,
  rightSecondIcon,
  more,
  add,
  comment,
  commentToggle,
  setCommentToggle,
}: ProfileDetailImageProps): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setCommentToggle?.(!commentToggle)}>
      <View style={styles.header}>
        <View style={styles.headerLeftContainer}>
          <Image source={Avatar} style={styles.avatar} />

          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>17:11 / 18.12.2021</Text>
            <Text style={styles.headerTextActive}>To: 0x7eE...3F54</Text>
          </View>
        </View>

        {more ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NFTImageDetail');
            }}>
            <MoreIcon />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>

      <Image source={Photo} style={styles.image} />

      <Text style={styles.text}>
        Sometimes we face a problem that turns out to be more vicious than we
        imagined...
      </Text>

      <View style={styles.footer}>
        <View style={styles.footerMain}>
          <View style={styles.footerDetail}>
            <TouchableOpacity>
              <LikeIcon />
            </TouchableOpacity>

            <Text style={styles.footerDetailText}>8 607</Text>
          </View>

          <View style={styles.footerDetail}>
            <TouchableOpacity>
              <DislikeIcon />
            </TouchableOpacity>

            <Text style={styles.footerDetailText}>432</Text>
          </View>
        </View>

        <View style={styles.footerRightContainer}>
          {rightSecondIcon ? (
            <TouchableOpacity style={styles.share}>
              {rightSecondIcon}
            </TouchableOpacity>
          ) : (
            ''
          )}

          {rightFirstIcon ? (
            <TouchableOpacity>{rightFirstIcon}</TouchableOpacity>
          ) : (
            ''
          )}
        </View>
      </View>

      {add ? (
        <TouchableOpacity
          onPress={() => {
            setModal(true);
          }}
          style={styles.plus}>
          <AddIcon />
        </TouchableOpacity>
      ) : (
        ''
      )}

      {comment ? (
        <CommentInput
          paddingHorizontal={0}
          iconRight={10}
          setCommentToggle={setCommentToggle}
          commentToggle={commentToggle}
        />
      ) : (
        ''
      )}

      <CustomModal modalVisible={modal} setModalVisible={setModal} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.profileImageBackground,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dividerBackground,
  },
  header: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeftContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  headerTextContainer: {
    paddingLeft: 10,
  },
  avatar: {
    width: 30,
    height: 30,
  },
  image: {
    height: 179,
    width: '100%',
  },
  headerText: {
    fontFamily: 'SFProDisplay-Light',
    fontSize: 12,
    fontWeight: '300',
    color: COLORS.darkGray,
  },
  headerTextActive: {
    fontFamily: 'SFProDisplay-Light',
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.mainBlue,
  },
  text: {
    fontFamily: 'SFProDisplay-Light',
    fontSize: 12,
    fontWeight: '300',
    color: COLORS.mainBlack,
    paddingVertical: 10,
  },
  footer: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerDetail: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerDetailText: {
    fontFamily: 'SFProDisplay-Light',
    fontSize: 12,
    fontWeight: '300',
    color: COLORS.darkGray,
    paddingLeft: 8,
  },
  footerMain: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerRightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  share: {
    paddingRight: 15,
  },
  plus: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    backgroundColor: COLORS.mainBlue,
    borderRadius: 50,
    position: 'absolute',
    bottom: '20%',
    right: '3%',
  },
});
export default ProfileDetailImage;

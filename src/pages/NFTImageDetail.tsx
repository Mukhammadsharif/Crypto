import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {COLORS} from '../utils/color';
import {ExportIcon} from '../components/Svgs';
import ImageCommentCard from '../components/ImageCommentCard';
import Avatar1 from '../assets/images/Avatar3.png';
import Avatar2 from '../assets/images/Avatar2.png';
import Avatar3 from '../assets/images/Avatar1.png';
import ProfileDetailImage from '../components/ProfileDetailImage';

const NFTImageDetail = (): JSX.Element => {
  const [commentToggle, setCommentToggle] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileDetailImage
          rightFirstIcon={<ExportIcon />}
          comment={commentToggle}
          commentToggle={commentToggle}
          setCommentToggle={setCommentToggle}
        />

        <ImageCommentCard
          avatar={Avatar1}
          titleActive={'0x829...6a40'}
          title={'17:11 / 18.12.2021'}
          description={
            'Sometimes we face a problem that turns out to be more vicious than we imagined...'
          }
        />

        <ImageCommentCard
          avatar={Avatar2}
          titleActive={'0x829...6a40'}
          title={'17:11 / 18.12.2021'}
          description={
            'Sometimes we face a problem that turns out to be more vicious than we imagined...'
          }
        />

        <ImageCommentCard
          avatar={Avatar3}
          titleActive={'0x829...6a40'}
          title={'17:11 / 18.12.2021'}
          description={
            'Sometimes we face a problem that turns out to be more vicious than we imagined...'
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.profileImageBackground,
    paddingBottom: 200,
  },
});
export default NFTImageDetail;

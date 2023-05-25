import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import NotificationCard from '../components/NotificationCard';
import Avatar1 from '../assets/images/notification-ava.png';
import Avatar2 from '../assets/images/notification-ava2.png';

const Notification = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NotificationCard
          avatar={Avatar2}
          titleActive={'0x7eE...3F54'}
          title={'17:11 / 18.12.2021'}
          comment={
            '🔥 Are you using WordPress and migrating to the JAMstack? I wrote up a case study about' +
            ' how Smashing Magazine moved to JAMstack and saw great performance improvements and better security.\n' +
            '\n' +
            'smashingdrusteer.com/2020/01/migrat...'
          }
        />

        <NotificationCard
          avatar={Avatar1}
          titleActive={'0x7eE...3F54'}
          title={'17:11 / 18.12.2021'}
          comment={
            'Creating meaningful experiences: an Introduction to User Experience design >\n' +
            '\n' +
            'owww.ly/p0fx50y5CoO\n' +
            '\n' +
            '#ux #uxdesign #uxresearch #userresearch #research #productdesing #webdesign #userexperience #startup ' +
            '#digital #design #diseno #psychology #servicedesign #conversion pic.twitter.com/wgpLcbkomN '
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
  },
});

export default Notification;

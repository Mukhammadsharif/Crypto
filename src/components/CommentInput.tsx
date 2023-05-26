import React, {SetStateAction, useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import {
  CommentDislike,
  CommentInputLike,
  CommentInputSendIcon,
  CommentLike,
} from './Svgs';
import {COLORS} from '../utils/color';

interface CommentInputProps {
  paddingHorizontal?: number | string;
  iconRight?: number | string;
  commentToggle?: boolean;
  setCommentToggle?: React.Dispatch<SetStateAction<boolean>>;
}

const CommentInput = ({
  paddingHorizontal = 20,
  iconRight = 30,
  commentToggle,
  setCommentToggle,
}: CommentInputProps): JSX.Element => {
  const [text, onChangeText] = React.useState<string>('Non');
  const [like, setLike] = useState<boolean>(false);
  return (
    <KeyboardAvoidingView
      enabled={true}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={[styles.container, {paddingHorizontal}]}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            setLike(!like);
          }}>
          {!like ? <CommentLike /> : <CommentDislike />}
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        <TouchableOpacity
          onPress={() => {
            if (setCommentToggle) {
              setCommentToggle(!commentToggle);
            }
          }}
          style={[styles.iconSendContainer, {right: iconRight}]}>
          <CommentInputSendIcon />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 72,
    width: '100%',
    backgroundColor: COLORS.profileImageBackground,
    position: 'relative',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  input: {
    height: 52,
    width: '90%',
    borderStyle: 'solid',
    borderRadius: 5,
    borderColor: COLORS.inputBorder,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  iconSendContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default CommentInput;

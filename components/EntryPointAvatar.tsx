import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import {ImagePickerHeader} from './avatar/ImagePickerHeader';
import {ImagePickerModal} from './avatar/ImagePickerModal';
import {ImagePickerAvatar} from './avatar/ImageRowAvatar';
import {getValue} from '../asyncStorage/AsyncStorageApis';
import {
  getAllKeysFromAsyncStorage,
  getAvatarKey,
  saveUriInAsyncStorage,
} from './avatar/avatarLogic';

export default function EntryPointAvatar() {
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);
  const [pictureUri, setPictureUri] = useState<string | null | undefined>('');

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  useEffect(() => {
    getPictureFromAsyncStorage();
  }, []);

  useEffect(() => {
    !!uri && getPictureFromAsyncStorage();
  }, [uri]);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = React.useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);

  const getPictureFromAsyncStorage = async () => {
    const keys = await getAllKeysFromAsyncStorage();
    const avatarKey = getAvatarKey(keys);
    const avatarUri = await getValue(avatarKey);
    setPictureUri(avatarUri);
  };

  // const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
  if (uri) {
    saveUriInAsyncStorage(uri);
  }

  return (
    <View style={styles.screen}>
      <ImagePickerHeader />
      <ImagePickerAvatar uri={pictureUri} onPress={() => setVisible(true)} />
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f2fC',
  },
});

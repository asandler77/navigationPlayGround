import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import {ImagePickerHeader} from './avatar/ImagePickerHeader';
import {ImagePickerModal} from './avatar/ImagePickerModal';
import {ImagePickerAvatar} from './avatar/ImageRowAvatar';
import {
  getAllKeys,
  getMultiple,
  getValue,
  storeData,
} from '../asyncStorage/AsyncStorageApis';

export default function EntryPointAvatar() {
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);
  const [pictureUri, setPictureUri] = useState<string | null | undefined>('');

  useEffect(() => {
    getPictureFromAsyncStorage();
  }, []);

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

  const getAvatarKey = (keys: string[] | undefined) => {
    let avatarKey = '';
    keys?.forEach(key => {
      if (key?.includes('ava')) {
        avatarKey = key;
      }
    });
    return avatarKey;
  };

  const getAllKeysFromAsyncStorage = async () => {
    const keys = await getAllKeys();
    console.log('keys', keys);
    return keys;
  };

    const saveUriInAsyncStorage = (uri: string) => {
        console.log('uri', uri)
        storeData('ava', uri);
    };

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
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

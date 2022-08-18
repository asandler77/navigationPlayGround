import {getAllKeys, storeData} from '../../asyncStorage/AsyncStorageApis';

export const saveUriInAsyncStorage = (uri: string) => {
  storeData('ava', uri);
};

export const getAllKeysFromAsyncStorage = async () => {
  const keys = await getAllKeys();
  return keys;
};

export const getAvatarKey = (keys: string[] | undefined) => {
  let avatarKey = '';
  keys?.forEach(key => {
    if (key?.includes('ava')) {
      avatarKey = key;
    }
  });
  return avatarKey;
};

import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAllKeys = async (): Promise<string[] | undefined> => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (e) {
    console.log('error', e);
  }
};

export const storeData = async (index: string, value: any) => {
  try {
    await AsyncStorage.setItem(`@-${index}`, value);
  } catch (e) {
    console.log('error', e);
  }
};

export const getMultiple = async (keys: string[]) => {
  try {
    return await AsyncStorage.multiGet(keys);
  } catch (e) {
    console.log('error', e);
  }
};

export const clearAll = async () => {
  try {
    console.log('clearAll');

    await AsyncStorage.clear();
  } catch (e) {
    console.log('error', e);
  }
};

export const removeValue = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};


export const getValue = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch(e) {
    // read error
  }

  console.log('Done.')

}

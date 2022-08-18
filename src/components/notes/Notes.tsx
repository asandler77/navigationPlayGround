import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {DataType} from './types';
import {getCurrentTimeStamp} from './helpers';
import {
  clearAll,
  getAllKeys,
  getMultiple,
  removeValue,
  storeData,
} from '../../asyncStorage/AsyncStorageApis';
import MyButton from '../MyButton';
import Carousel from '../Carousel';
import {COLORS} from '../../constants/Colors';
import {FontSize, LineHeight, Spacing} from '../../constants/UiSize';

/*


Should be fixed:
getDataFromAsync on second useEffect is work around solution for shown new added note,
but it might be replaced by better solution.
 */

export default ({navigation, route}: any) => {
  const [data, setData] = useState<DataType[] | null>(null);
  const [counter, setCounter] = useState('');

  useEffect(() => {
    getDataFromAsync();
    setCounter(getCurrentTimeStamp);
    return () => {};
  }, []);

  useEffect(() => {
    createData(route.params?.data);
    getDataFromAsync();
  }, [route.params?.data]);

  const storeDataOnAsync = (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      storeData(counter, jsonValue);
      setCounter(getCurrentTimeStamp);
    } catch (e) {
      console.log('error storeDataOnAsync', e);
    }
  };

  const saveData = (values: [string, string | null][]) => {
    let dataArray: DataType[] = [];
    values.forEach(value => {
      if (value[1]) {
        const key = value[0];
        const dayNdata = JSON.parse(value[1]);
        const onPressClearNote = clearNote;
        dataArray?.push({...dayNdata, key, onPressClearNote});
      }
    });
    setData(dataArray);
  };

  const getDataFromAsync = async () => {
    return new Promise((resolve, reject) => {
      getAllKeys()
        .then(keys => {
          if (keys) {
            getMultiple(keys).then(values => {
              if (values) {
                saveData(values);
              }
            });
          }
        })
        .catch(error => reject(error));
    });
  };

  const createData = (note: any) => {
    if (!note) return;
    let dataObject: DataType = {};

    dataObject.day = note.day;
    dataObject.noteText = note.noteText;
    storeDataOnAsync(dataObject);
  };

  const clearNote = (id: string) => {
    removeValue(id).then(getDataFromAsync);
  };

  const addNote = () => {
    navigation.navigate('CreateNote');
  };

  const deleteAll = () => {
    clearAll();
    getDataFromAsync();
  };

  return (
    <SafeAreaView style={styles.container}>
      <MyButton
        text={'Add Note'}
        customTextStyle={styles.text}
        customButtonStyle={styles.button}
        onPress={addNote}
      />
      <MyButton
        text={'Delete all'}
        customTextStyle={styles.text}
        customButtonStyle={styles.button}
        onPress={deleteAll}
      />
      <Carousel data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    backgroundColor: COLORS.LIGHT_GREEN,
    margin: Spacing.M,
    lineHeight: LineHeight.M,
    borderRadius: 20,
    width: 250,
    height: 50,
  },
  text: {
    textAlign: 'center',
    fontSize: FontSize['2XL'],
    fontWeight: 'bold',
  },
});

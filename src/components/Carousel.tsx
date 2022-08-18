import React from 'react';
import {FlatList, View} from 'react-native';
import {DataType} from "./notes/types";
import Note from "./notes/Note";

interface Props {
  data: DataType[] | null;
}

export default ({data}: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return (
          <View>
            <Note data={item} />
          </View>
        );
      }}
    />
  );
};

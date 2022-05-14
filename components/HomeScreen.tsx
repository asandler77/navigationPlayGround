import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

function HomeScreen({navigation, route}) {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    if (route.params?.timeStamp > currentTime) {
        console.log(route.params?.timeStamp)
      setCurrentTime(route.params?.timeStamp);
    }
  }, route.params?.timeStamp);
  const onPress = () => {
    navigation.navigate('NoteApplication', {name: 'Alexey'});
  };
  return (
    <View style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
      <Text>HomeScreen</Text>
      <Button title={'Go to notes'} onPress={onPress} />
      <Text>{currentTime}</Text>
    </View>
  );
}

export default HomeScreen;

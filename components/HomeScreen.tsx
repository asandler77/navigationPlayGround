import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import ProfileSettings from './ProfileSettings';

// @ts-ignore
function HomeScreen({navigation, route}) {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    if (route.params?.timeStamp > currentTime) {
      setCurrentTime(route.params?.timeStamp);
    }
  }, route.params?.timeStamp);
  const onPressGoToNotes = () => {
    navigation.navigate('NoteApplication', {name: 'Alexey'});
  };

  const onPressGoToProfileSettings = () => {
    navigation.navigate('ProfileSettings');
  };

  return (
    <View style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
      <Text>HomeScreen</Text>
      <Button title={'Go to notes1'} onPress={onPressGoToNotes} />
      <Button
        title={'Go to profile settings'}
        onPress={onPressGoToProfileSettings}
      />
      <Text>{currentTime}</Text>
    </View>
  );
}

export default HomeScreen;

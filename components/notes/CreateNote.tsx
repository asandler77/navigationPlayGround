import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MyCalendar from './MyCalendar';
import MyButton from './MyButton';

export default ({navigation}: any) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState('');
  const [input, setInput] = useState('');

  const goToNotes = () => {
    navigation.navigate({
      name: 'Notes',
      // the next solution to pass inside params the object is working but its anti pattern - the params should be simple and not complicated object,
      // maybe use the redux the next time.
      params: {data: {day: date, noteText: input}},
      merge: true,
    });
    navigation.navigate('Notes');
  };

  const onChangeText = (text: string) => setInput(text);

  const setTheDate = (date: string) => {
    setDate(date);
  };

  const closeCalendar = () => {
    setShowCalendar(false);
  };

  const openCalendar = () => {
    setShowCalendar(true);
  };

  const renderCalendar = () => {
    return (
      showCalendar && (
        <MyCalendar modalClose={closeCalendar} onSelectDate={setTheDate} />
      )
    );
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>Create Note</Text>
      </View>
      <TextInput
        style={{
          margin: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'grey',
        }}
        autoFocus={true}
        multiline
        value={input}
        placeholder={'Write the note...'}
        onChangeText={onChangeText}
      />
      <TextInput
        style={{
          margin: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'grey',
        }}
        autoFocus={true}
        multiline
        value={date}
        placeholder={'Click here to choose the date on Calendar...'}
        onPressIn={openCalendar}
      />
      <TouchableOpacity style={styles.button} onPress={goToNotes}>
        <Text style={styles.text}> Save the note</Text>
      </TouchableOpacity>
      {renderCalendar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#ffd700',
    margin: 5,
    borderRadius: 10,
    height: 50,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 40,
  },
});

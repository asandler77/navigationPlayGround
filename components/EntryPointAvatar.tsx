import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import {ImagePickerHeader} from './avatar/ImagePickerHeader';
import {ImagePickerModal} from './avatar/ImagePickerModal';
import {ImagePickerAvatar} from './avatar/ImageRowAvatar';

export default function EntryPointAvatar() {
    const [pickerResponse, setPickerResponse] = useState(null);
    const [visible, setVisible] = useState(false);

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

    const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

    return (
        <View style={styles.screen}>
            <ImagePickerHeader />
            <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
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
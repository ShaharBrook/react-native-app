import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MyButton({text, iconName}) {
    return (
        <View style={{
            flexDirection: 'row',
            }}>
            <MaterialIcons
                name={iconName}
                size={24}
                color={'red'}
            />
            <Text style={{fontWeight: 'bold', marginLeft: 6}}>{text}</Text>
      </View>
    );
}
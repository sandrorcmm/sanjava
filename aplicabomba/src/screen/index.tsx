import React, {useState} from 'react';
import { View, Text,TextInput } from 'react-native';
import { styles } from './styles';


export function SingnIn() {
    const [text, setText] = useState ("chama");


    return(
        <View style={styles.container}>
            <Text>A vida é um eterno oscilar entre a ânsia de ter e o tédio de possuir</Text>


            <TextInput style={styles.input} onChangeText={setText} />

            <Text>
                Você digitou: {text}
            </Text>
        </View>
    )
}
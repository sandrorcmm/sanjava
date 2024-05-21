import React, {useState} from 'react';
import { View, Text,Image } from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';



export function SingnIn() {
    const [text, setText] = useState ("chama");


    return(
        <View style={styles.container}>
            


           <Image source={IllustrationImg}/>

            
        </View>
    )
}
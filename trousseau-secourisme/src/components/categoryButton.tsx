import { Text, Pressable, Image, ImageSourcePropType } from "react-native";
import React from "react";


export default function CategoryButton({title, onPress, image}: {title: string, onPress: () => void, image: ImageSourcePropType}) {
    return (
        <Pressable onPress={onPress} style={{ alignItems: "center", justifyContent: "center", margin: 10, }}>
            
            <Image 
                source={image} 
                style={{ width: 100, height: 100, resizeMode: "contain" }} 
            />
            <Text>{title}</Text>
        </Pressable>
    );
}
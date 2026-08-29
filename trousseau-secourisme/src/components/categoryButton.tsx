import { Text, Pressable, Image } from "react-native";
export default function categoryButton({title, onPress, image}: {title: string, onPress:() => void, image: string}) {

    return (
        <Pressable onPress={onPress} style={{alignItems: "center", justifyContent: "center", margin: 10}}>
            <Image source={{uri: image}} style={{width: 100, height: 100}} />
            <Text>{title}</Text>
        </Pressable>
    )
}
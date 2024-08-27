import { Pressable, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
export const BackButton=()=>{
    return (
        <Pressable onPress={()=>router.back()}>
         <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
    )
}
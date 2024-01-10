import { Icon } from "@rneui/themed"
import { Image, TextInput, View } from "react-native"
import { styles } from "./style"
import { Images } from "../../utils/media"
import { GlobalStyles } from "../../utils/constants"

export const IconInputField= ({size,Iconname,placeholder,type})=>{
    const inputField=()=>{
        return(
            <View>
                <TextInput placeholder={placeholder} style={styles.field} placeholderTextColor={"#000000"}/>
            </View>
        )
    }
    const inputICon=()=>{
return(
    <View style={styles.iconstyleview}>
            <Icon name={Iconname} size={size} type={type}/>
            </View>
)
    }
    return(
        <View style={styles.inputFieldview}>
            {inputICon()}
            {inputField()}
        </View>
    )
}

export const SearchInput=()=>{
    const Input=()=>{
        return(
        <TextInput style={{width:"85%"}} placeholder="What do you want"/>
    )}
    const SearchIncon=()=>{
        return(
        <Image source={Images.appImages.searchicon}/>
    )}
    return(
<View style={[styles.searchinputView,GlobalStyles.shadow]}>
    {Input()}
{SearchIncon()}
</View>
    )
}
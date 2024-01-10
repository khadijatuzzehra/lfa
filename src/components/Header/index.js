import { Image, View } from "react-native"
import { Icon } from "react-native-vector-icons/Icon"
import { Images } from "../../utils/media"
import HTText from "../text/HTText"
import { styles } from "./style"
import { TouchableOpacity } from "react-native"
import { goBack } from "../../navigation/rootNavigation"
import Fonts from "../../../android/app/src/main/assets/custom/Fonts"
import HTButton from "../buttons/HTButton"
import { Colors } from "../../theme"
import { Dimensions, GlobalStyles } from "../../utils/constants"

export const AuthHeader=({title,onBackPress})=>{
    return(
        <View style={styles.headerView}>
            <TouchableOpacity onPress={onBackPress}>
            <Image style={styles.iconstyle} source={Images.appImages.leftArrow} />
            </TouchableOpacity>
            <HTText size={Fonts.size.font15} bold styles={styles.titlestyle} text={title}/>
        </View>
    )
}

export const HomeHeader=()=>{
return(
    <View style={styles.homeheader}>
<Image source={Images.appImages.logo} style={styles.logostyle} resizeMethod="contain"/>
<HTButton 
//  onClick={()=>navigation.navigate("StudentRegistration")}
 text={"Login"}
 textSize={12}
 textColor={Colors.TextColor}
 style={[GlobalStyles.marginVerticalLarge]}
  height={Dimensions.Height * 0.04}
   width={Dimensions.Width * 0.3}
   backgroundColor={Colors.buttonColor}
/>
    </View>
)
} 
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { HTButton, HTInput, HTText, HTWrapper } from '../../../../components'
import { AuthHeader } from '../../../../components/Header'
import { goBack } from '../../../../navigation/rootNavigation'
import { TouchableOpacity } from 'react-native'
import { styles } from './style'
import { Icon } from '@rneui/themed';
import { Dimensions, GlobalStyles } from '../../../../utils/constants'
import { Colors, Fonts } from '../../../../theme'
import { IconInputField } from '../../../../components/inputField'
import PhonInputComponent from '../../../../components/phoneInput'

const InstructerRegistration = ({navigation}) => {
  return (
   <HTWrapper>
    <AuthHeader  title={"Fill your Profile"} onBackPress={()=>navigation.navigate("GetStarted")}/>
    <ScrollView>
  <TouchableOpacity style={styles.addprofile}>
  <Icon name='plus' type='entypo' color='#000000'/>
  </TouchableOpacity>
  
  <View style={styles.fieledView}>
 <IconInputField placeholder={" Full Name"} Iconname={'user'} type={'font-awesome'} size={15} />
 <IconInputField placeholder={"Date of birth"} Iconname={'date-range'} type={'material'} size={15} />
  </View>
  <PhonInputComponent/>
  <IconInputField placeholder={"Gender"} Iconname={'date-range'} type={'material'} size={15} />
  <View style={styles.textView}>
    <HTText styles={styles.text} size={Fonts.size.font13} text={"Agree to terms & Condition"}/>
  </View>
  <View style={styles.regbtn}>
  <HTButton
        onClick={()=>navigation.navigate("StudentRegistration")}
        text={"Register"}
        textSize={12}
        textColor={Colors.TextColor}
         height={Dimensions.Height * 0.043}
          width={Dimensions.Width * 0.52}
          backgroundColor={Colors.buttonColor}
        />
        </View>
  </ScrollView>
   </HTWrapper>
  )
}

export default InstructerRegistration
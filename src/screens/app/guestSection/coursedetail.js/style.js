import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Dimensions } from "../../../../utils/constants";
import { Colors,Fonts } from "../../../../theme";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    container1:{
      backgroundColor:Colors.Primary,
      height :Dimensions.Height * 0.06,
      width : Dimensions.Width * 0.8,
      borderRadius: 10,
      justifyContent:'center',
    },
    text:{
      fontSize: Fonts.size.font16,
      color: Colors.White,
      textAlign: 'center',
      fontWeight:'500',
      
    },
    text1:{
      fontSize: Fonts.size.font8,
      color: Colors.White,
      textAlign: 'center',

    },

    imageContainer: {
        height: Dimensions.Height * 0.35,
        width: Dimensions.Height * 0.48,
        position: 'relative',
    },
    img: {
        height: '100%',
        width: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)', // Adjust the opacity for the desired grayscale effect
        justifyContent:'flex-end', 
    },
    title:{
          
      marginLeft:responsiveWidth(5),


    },title1:{
      textAlign:'justify',
      marginLeft:responsiveWidth(5),
      marginRight:responsiveWidth(12),
    },
    stars:{
        flexDirection:"row",
        gap:4,
        marginTop:responsiveHeight(.5),
        alignItems:'center',
        marginLeft:responsiveWidth(5),

      },
      detailtxt:{
        
        marginLeft:responsiveWidth(5),
        marginTop:responsiveHeight(1),
      },
      iconcontainers:{
        marginLeft:responsiveWidth(5),
        flexDirection:'column',
        gap:20,
        
      },
      paratxt:{
        marginLeft:responsiveWidth(5),
        textAlign:'justify',
        marginRight:responsiveWidth(7),

      },
      titletxt:{
        marginTop:responsiveHeight(2),
        marginLeft:responsiveWidth(5),

      },
      coursetxt:{
        
      }
     ,
     coursename:{
        marginLeft:responsiveWidth(3),
     },
     uni:{
      marginLeft:responsiveWidth(5),
      marginBottom:responsiveHeight(1),

     },
     icon:{
      marginLeft:responsiveWidth(5),
      marginTop:responsiveHeight(8),

     },
     skilltitle:{
      marginTop:responsiveHeight(3),
      marginLeft:responsiveWidth(5),

     },
     coursetitle:{
      fontWeight:"bold",
      marginTop:responsiveHeight(3),
      marginLeft:responsiveWidth(5),

     },
    
     button:{
      marginLeft:responsiveWidth(5),

     },
     skillscontainer:{
      flexDirection:'row',
      flexWrap:'wrap',
      gap:15,
      marginTop:responsiveHeight(1.5),

     },
     
      specializationtitle:{
        marginLeft:responsiveWidth(5),
      },
     specializationdetail:{
      marginTop:responsiveHeight(1.5),
      flexDirection:'column',
      
      gap:15,
     }, 
     arrow:{
      marginTop:responsiveHeight(1.5),
      flexDirection:'column',
      gap:17,
      

     },
     specializationcontainer:{
      flexDirection:"row",
      justifyContent: 'space-between',
      paddingRight: 10,

     },
     iconimg:{
      
      height: Dimensions.Height * 0.07,
      width: Dimensions.Height * 0.07,
      
     },
     specializationdetail1:{
      marginTop:responsiveHeight(1.5),
      flexDirection:'column',
      marginLeft:responsiveWidth(3),
      gap:15
     }, 
     right_arrow:{
      marginTop:responsiveHeight(1.5),
      flexDirection:'column',
      gap:50,

     },

     coursecontainer:{
     marginTop:responsiveHeight(1.5),
     flexDirection:"row",
     alignContent:'center',
     gap:10,
     paddingLeft:20,
     },
     buttonbox:{
      marginTop:responsiveHeight(3),
        alignContent:'center',
        alignItems:'center',
        marginBottom:responsiveHeight(2),
     },
     box:{
      flexDirection:"row",
     },

});

// import React from "react";
// import {Text, TouchableOpacity, View} from "react-native";
// import Icon from 'react-native-vector-icons/AntDesign';
// import backButtonStyles from "../../stylesheets/backButton.styles";
// Icon.loadFont()
//
// import translations from "../../translations";
//
// interface ButtonProps
// {
//     onPress: () => void,
//     title: string
// }
//
// const BackButton = ({ onPress, title }: ButtonProps) =>
// {
//     return (
//         <View style={backButtonStyles.container}>
//             <View style={backButtonStyles.row}>
//                 <TouchableOpacity style={[backButtonStyles.backButton, backButtonStyles.row]} onPress={onPress}>
//                     <Icon name={'left'} style={backButtonStyles.arrowLeft}/>
//                     <Text style={backButtonStyles.buttonText}>{translations["ts-backButton"]}</Text>
//                 </TouchableOpacity>
//                 <Text style={backButtonStyles.navigationText}>{title}</Text>
//             </View>
//         </View>
//     )
// }
//
// export default BackButton;

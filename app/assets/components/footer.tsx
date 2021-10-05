// import React, {useState} from "react";
// import {
//     View,
//     Image,
//     TouchableOpacity,
//     Linking,
//     Modal,
//     Text,
//     ScrollView,
//     ImageBackground
// } from "react-native";
// import footerStyle from '../stylesheets/footer.styles'
// //import translations from "../../translations";
// import { Button } from "react-native-elements";
// import Icon from 'react-native-vector-icons/Feather';
// Icon.loadFont()
//
// const footer = () => {
//     const [isModalVisible, setIsModalVisible] = useState(false)
//
//     const faqModal = () => {
//         return (
//             <View>
//                 <Modal animationType={"fade"}>
//                     <View style={{backgroundColor: '#00275c'}}>
//                         <ImageBackground
//                             source={require('../../../assets/images/background-bubbles.png')}
//                             style={{width: "100%", height: "100%"}}
//                         >
//                             <TouchableOpacity activeOpacity={1}
//                                               style={footerStyle.modalContainer}
//                                               onPress={() => setIsModalVisible(prevState => !prevState)}
//                             >
//                                 <TouchableOpacity activeOpacity={1} style={footerStyle.modalInfo}>
//                                     <View style={footerStyle.modalRow}>
//                                         <View style={footerStyle.exitButtonContainer}/>
//                                         <View style={footerStyle.faqContainer}>
//                                             <Text style={footerStyle.faq}>F.A.Q.</Text>
//                                         </View>
//                                         <View style={footerStyle.exitButtonContainer}>
//                                             <Button icon={<Icon name={'x'} size={20} color={'white'}/>}
//                                                     onPress={() => setIsModalVisible(prevState => !prevState)}
//                                                     type={"clear"}
//                                             />
//                                         </View>
//                                     </View>
//                                     <ScrollView>
//                                         <Text style={footerStyle.title}>{translations["ts-infoModalStartupTitle"]}</Text>
//                                         <Text style={footerStyle.text}>{translations["ts-infoModalStartupText"]}</Text>
//
//                                         <Text style={footerStyle.title}>{translations["ts-infoModalAppUsageTitle"]}</Text>
//                                         <Text style={footerStyle.text}>{translations["ts-infoModalAppUsageText"]}</Text>
//
//                                         <Text style={footerStyle.title}>{translations["ts-infoModalAddEsmTitle"]}</Text>
//                                         <Text style={footerStyle.text}>{translations["ts-infoModalAddEsmText"]}</Text>
//
//                                         <Text style={footerStyle.title}>{translations["ts-infoModalEsmListTitle"]}</Text>
//                                         <Text style={footerStyle.text}>{translations["ts-infoModalEsmListText"]}</Text>
//
//                                         <Text style={footerStyle.title}>{translations["ts-infoModalECoinsTitle"]}</Text>
//                                         <Text style={footerStyle.text}>{translations["ts-infoModalECoinsText"]}</Text>
//
//                                         <Text style={footerStyle.title}>{translations["ts-infoModalDataTitle"]}</Text>
//                                         <Text style={footerStyle.text}>{translations["ts-infoModalDataText"]}</Text>
//
//                                     </ScrollView>
//                                 </TouchableOpacity>
//                             </TouchableOpacity>
//                         </ImageBackground>
//                     </View>
//                 </Modal>
//             </View>
//         )
//     }
//
//     const infoFooter = () => {
//         return (
//             <View style={footerStyle.container}>
//                 <View style={footerStyle.row}>
//                     <View style={footerStyle.line}/>
//                     <View style={footerStyle.containerLogos}>
//                         <View style={footerStyle.row}>
//                             <View style={footerStyle.containerImage}>
//                                 <TouchableOpacity activeOpacity={0.8} onPress={() => setIsModalVisible(prevState => !prevState)}>
//                                     <Image
//                                         source={require('../../../assets/images/logo-eknip.png')}
//                                         style={footerStyle.image}
//                                     />
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={footerStyle.containerImage}>
//                                 <TouchableOpacity activeOpacity={0.8}
//                                                   onPress={() => Linking.openURL('https://gemeente.emmen.nl/')}>
//                                     <Image
//                                         source={require('../../../assets/images/logo-gemeente-emmen.png')}
//                                         style={footerStyle.image}
//                                     />
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={footerStyle.containerImage}>
//                                 <TouchableOpacity activeOpacity={0.8}
//                                                   onPress={() => Linking.openURL('https://northsearegion.eu/bling/')}>
//                                     <Image
//                                         source={require('../../../assets/images/logo-bling.png')}
//                                         style={footerStyle.image}
//                                     />
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={footerStyle.containerImage}>
//                                 <TouchableOpacity activeOpacity={0.8}
//                                                   onPress={() => Linking.openURL('https://www.bcld.nl/en/home-2/')}>
//                                     <Image
//                                         source={require('../../../assets/images/logo-bcld.png')}
//                                         style={footerStyle.image}
//                                     />
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                     <View style={footerStyle.line}/>
//                 </View>
//             </View>
//         )
//     }
//
//     if (isModalVisible)
//     {
//         return faqModal()
//     }
//     else
//     {
//         return infoFooter()
//     }
// }
//
// export default footer

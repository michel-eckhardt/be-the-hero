import React from 'react';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons'
import css from './styles'
import logoImg from '../../assets/logo.png'
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'

export default function Detail() {
    const route = useRoute();
    const incident = route.params.incident
    const navigation = useNavigation();
    const message = `ola ${incident.name}, estou entrando em contato pois gostaria de ajudar com o caso ${incident.title}`;

    function navigationToDetail(){
        navigation.goBack();
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: `Heroi do caso: ${incident.title}`,
            recipients: [incident.title],
            body: message
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)
    }

    return (
        <View style={css.container}>
            <View style={css.header}>
                <Image source={logoImg} />

                <TouchableOpacity
                    style={css.detailsButton}
                    onPress={navigationToDetail}>
                    <Feather name="arrow-left" size={40} color="#E02041" />
                </TouchableOpacity>

            </View>

            <View style={css.incident}>
                <Text style={css.incidentProperty, {marginTop: 0}}>ONG:</Text>
                <Text style={css.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={css.incidentProperty}>CASO:</Text>
                <Text style={css.incidentValue}>{incident.description}</Text>

                <Text style={css.incidentProperty}>valor:</Text>
                <Text style={css.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
            </View>

            <View style={css.contactBox}>
                <Text style={css.heroTitle}>Salve o dia!</Text>
                <Text style={css.heroTitle}>Seja o heroi desse caso.</Text>
                <Text style={css.heroDescription}>Entre em contato:</Text>

                <View style={css.actions}>
                    <TouchableOpacity style={css.action} onPress={sendWhatsapp}>
                        <Text style={css.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.action} onPress={sendEmail}>
                        <Text style={css.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}
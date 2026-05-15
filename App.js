import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import HabilidadesScreen from './screens/HabilidadesScreen';
import ProjetosScreen from './screens/ProjetosScreen';


const Tab = createBottomTabNavigator();


function PerfilScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={require('./assets/image.png')} style={styles.fotoPerfil} />
                <Text style={styles.nome}>Maria Eduarda de Andrade</Text>
                <Text style={styles.cargo}>Estudante de Desenvolvimento de Sistemas</Text>
                <Text style={styles.title}>SOBRE MIM</Text>
                <Text style={styles.sobreMim}>
                    Estudante focada em aprender novas tecnologias e criar soluções criativas.
                </Text>
            </View>
            <StatusBar style="light" />
        </View>
    );
}


export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#0044ff',
                    tabBarInactiveTintColor: '#666',
                    tabBarStyle: {
                        backgroundColor: '#3a3a50',
                        borderTopColor: '#2a2a3e',
                        borderTopWidth: 1,
                    },
                }}>
                <Tab.Screen
                    name="Perfil"
                    component={PerfilScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="person" size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Habilidades"
                    component={HabilidadesScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="construct" size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Projetos"
                    component={ProjetosScreen}
                    options={{
                        tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282938',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 40,
        alignItems: 'center',
        width: '85%',
    },
    fotoPerfil: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
    },
    nome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1c1e21',
        textAlign: 'center',
    },
    cargo: {
        fontSize: 14,
        color: '#65676b',
        marginBottom: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#242424',
        marginTop: 10,
    },
    sobreMim: {
        fontSize: 14,
        color: '#65676b',
        textAlign: 'center',
    },
});

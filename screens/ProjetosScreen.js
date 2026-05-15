import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ProjetosScreen() {
    const [mensagem, setMensagem] = useState('');

    const projetos = [
        {
            id: 1,
            nome: 'App GoodVibes',
            descricao:
                'Aplicativo que permite mandar frases motivacionais para compartilhar inspiração com amigos',
            tecnologias: 'HTML, CSS, JavaScript',
            status: 'Concluído',
        },
    ];

    const getStatusColor = (status) => {
        return status === 'Concluído' ? '#4CAF50' : '#FF9800';
    };

    const enviarContato = () => {
        if (mensagem.trim() === '') {
            Alert.alert('Aviso', 'Por favor, preencha a mensagem antes de enviar.');
            return;
        }
        Alert.alert('Sucesso', 'Sua mensagem foi enviada com sucesso!');
        setMensagem('');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>MEUS PROJETOS</Text>
            </View>

            <View style={styles.conteudo}>
                {projetos.map((projeto) => (
                    <TouchableOpacity
                        key={projeto.id}
                        style={styles.cartaProjeto}
                        activeOpacity={0.8}>
                        <View style={styles.headerCarta}>
                            <Text style={styles.nomeProjeto}>{projeto.nome}</Text>
                            <View
                                style={[
                                    styles.badge,
                                    { backgroundColor: getStatusColor(projeto.status) },
                                ]}>
                                <Text style={styles.textoStatus}>{projeto.status}</Text>
                            </View>
                        </View>

                        <Text style={styles.descricao}>{projeto.descricao}</Text>

                        <View style={styles.tecnologiasContainer}>
                            <Text style={styles.labelTecnologias}>Tecnologias:</Text>
                            <Text style={styles.tecnologias}>{projeto.tecnologias}</Text>
                        </View>

                        <TouchableOpacity style={styles.botaoVer}>
                            <Text style={styles.textoBotao}>Ver Detalhes</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </View>

            {/* SEÇÃO DE CONTATO */}
            <View style={styles.secaoContato}>
                <Text style={styles.tituloContato}>ENTRE EM CONTATO</Text>

                <View style={styles.contatosContainer}>
                    <TouchableOpacity style={styles.itemContato}>
                        <Text style={styles.labelItem}>📧 E-mail</Text>
                        <Text style={styles.valorItem}>maria.e.andrade17@aluno.senai.br</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemContato}>
                        <Text style={styles.labelItem}>🐙 GitHub</Text>
                        <Text style={styles.valorItem}>https://github.com/mariaeandrade</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemContato}>
                        <Text style={styles.labelItem}>💼 LinkedIn</Text>
                        <Text style={styles.valorItem}>
                            https://www.linkedin.com/in/maria-eduarda-andrade-6878a2349?utm_source=share_via&utm_content=profile&utm_medium=member_ios
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemContato}>
                        <Text style={styles.labelItem}>🌐 Portfólio</Text>
                        <Text style={styles.valorItem}>blablabla</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formularioContainer}>
                    <Text style={styles.labelFormulario}>Envie uma mensagem:</Text>

                    <TextInput
                        style={styles.campoMensagem}
                        placeholder="Digite sua mensagem aqui..."
                        placeholderTextColor="#999"
                        value={mensagem}
                        onChangeText={setMensagem}
                        multiline
                        numberOfLines={5}
                    />

                    <TouchableOpacity style={styles.botaoEnviar} onPress={enviarContato}>
                        <Text style={styles.textoEnviar}>Enviar Contato</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282938', 
    },
    header: {
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF',
        letterSpacing: 1,
    },
    conteudo: {
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    cartaProjeto: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    headerCarta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    nomeProjeto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#282938',
        flex: 1,
    },
    badge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginLeft: 10,
    },
    textoStatus: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    descricao: {
        fontSize: 14,
        color: '#444',
        marginBottom: 15,
        lineHeight: 20,
    },
    tecnologiasContainer: {
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
        marginBottom: 15,
    },
    labelTecnologias: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#0044ff',
        marginBottom: 4,
    },
    tecnologias: {
        fontSize: 13,
        color: '#666',
        fontStyle: 'italic',
    },
    botaoVer: {
        backgroundColor: '#282938',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },

    // SEÇÃO DE CONTATO
    secaoContato: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingHorizontal: 25,
        paddingVertical: 30,
        marginTop: 10,
    },
    tituloContato: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#282938',
        marginBottom: 20,
        textAlign: 'center',
    },
    contatosContainer: {
        marginBottom: 10,
    },
    itemContato: {
        backgroundColor: '#F8F9FA',
        borderRadius: 12,
        padding: 15,
        marginBottom: 10,
        borderLeftWidth: 5,
        borderLeftColor: '#0044ff',
    },
    labelItem: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#0044ff',
        marginBottom: 2,
    },
    valorItem: {
        fontSize: 13,
        color: '#333',
    },
    formularioContainer: {
        marginTop: 10,
    },
    labelFormulario: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#282938',
        marginBottom: 10,
    },
    campoMensagem: {
        backgroundColor: '#F1F3F5',
        borderRadius: 12,
        padding: 15,
        fontSize: 14,
        color: '#333',
        textAlignVertical: 'top',
        minHeight: 100,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#E9ECEF',
    },
    botaoEnviar: {
        backgroundColor: '#0044ff',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#0044ff',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
    },
    textoEnviar: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

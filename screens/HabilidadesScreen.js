import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    View,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

export default function HabilidadesScreen() {
    const [novaHabilidade, setNovaHabilidade] = useState('');
    const [listaHabilidades, setListaHabilidades] = useState([]);

    const adicionarHabilidade = () => {
        if (novaHabilidade.trim() === '') return;

        const habilidadeObjeto = {
            id: String(Date.now()),
            texto: novaHabilidade,
        };

        setListaHabilidades((prevLista) => [habilidadeObjeto, ...prevLista]);
        setNovaHabilidade('');
        Keyboard.dismiss();
    };

    const removerHabilidade = (idParaRemover) => {
        const listaFiltrada = listaHabilidades.filter((item) => item.id !== idParaRemover);
        setListaHabilidades(listaFiltrada);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Minhas Habilidades</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: React Native, Python..."
                    placeholderTextColor="#999"
                    value={novaHabilidade}
                    onChangeText={setNovaHabilidade}
                />
                <TouchableOpacity
                    style={styles.botaoAdicionar}
                    onPress={adicionarHabilidade}
                    activeOpacity={0.7}>
                    <Text style={styles.textoBotaoAdicionar}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={listaHabilidades}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.itemLista}>
                        <Text style={styles.textoItem}>{item.texto}</Text>
                        <TouchableOpacity
                            style={styles.botaoRemover}
                            onPress={() => removerHabilidade(item.id)}>
                            <Text style={styles.textoBotaoRemover}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.informações}>
                        Back-end, Front-end, Mobile.</Text>
                )}
            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F7',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1C1C1E',
        marginBottom: 20,
    },
    informações: {
        fontSize: 16,
        color: '#6E6E73',
        lineHeight: 24,
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 25,
    },
    input: {
        flex: 1,
        height: 55,
        backgroundColor: '#FFF',
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#E5E5EA',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
    },
    botaoAdicionar: {
        width: 55,
        height: 55,
        backgroundColor: '#007AFF',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    textoBotaoAdicionar: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    itemLista: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        padding: 18,
        borderRadius: 12,
        marginBottom: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        // Sombra leve
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
    },
    textoItem: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3A3A3C',
        flex: 1,
    },
    botaoRemover: {
        backgroundColor: '#FF3B30',
        width: 30,
        height: 30,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotaoRemover: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    textoVazio: {
        textAlign: 'center',
        color: '#8E8E93',
        fontSize: 16,
        marginTop: 50,
    },
});

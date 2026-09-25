import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';

const professoresMock = [
  { id_professores: 1, nome: 'Carlos Eduardo Moreira', cpf: '49281536702' },
  { id_professores: 4, nome: 'Mariana Silva Valandro', cpf: '91357284611' },
  { id_professores: 7, nome: 'Roberto Albuquerque Neto', cpf: '34271859603' },
  { id_professores: 9, nome: 'Patricia Sampaio Resende', cpf: '75162839412' },
];

export default function ConsultarProfessores({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = professoresMock.filter((p) => p.nome.toLowerCase().includes(busca.toLowerCase()));

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consultar Professores</Text>
      <TextInput style={styles.busca} placeholder="Buscar por nome..." value={busca} onChangeText={setBusca} />
      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_professores)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.detalhe}>CPF: {item.cpf}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum professor encontrado.</Text>}
      />
      <TouchableOpacity style={styles.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotaoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center', paddingTop: 60, paddingHorizontal: 20 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#1565C0', marginBottom: 20 },
  busca: { width: '100%', borderWidth: 1, borderColor: '#CCC', borderRadius: 8, padding: 12, fontSize: 16, backgroundColor: '#F9F9F9', marginBottom: 15 },
  card: { width: '100%', backgroundColor: '#E3F2FD', borderRadius: 10, padding: 15, marginBottom: 10 },
  nome: { fontSize: 18, fontWeight: 'bold', color: '#1565C0' },
  detalhe: { fontSize: 14, color: '#444' },
  vazio: { marginTop: 30, fontSize: 16, color: '#999', textAlign: 'center' },
  botaoSecundario: { padding: 15, marginBottom: 10, alignItems: 'center' },
  textoBotaoSecundario: { fontSize: 16, color: '#1976D2' },
});

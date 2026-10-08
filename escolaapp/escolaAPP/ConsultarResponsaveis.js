import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';

const responsaveisMock = [
  { id_responsaveis: 1, nome: 'Ricardo Augusto Barbosa', cpf: '45291837601', parentesco: 'PAI' },
  { id_responsaveis: 2, nome: 'Camila Eduarda Antunes', cpf: '91347526802', parentesco: 'MÃE' },
  { id_responsaveis: 3, nome: 'Marcos Pedro Paschoal', cpf: '34271958603', parentesco: 'PAI' },
  { id_responsaveis: 7, nome: 'Luiz Felipe Beltrão', cpf: '23867149507', parentesco: 'TIO' },
];

export default function ConsultarResponsaveis({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = responsaveisMock.filter((r) => r.nome.toLowerCase().includes(busca.toLowerCase()));

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consultar Responsáveis</Text>
      <TextInput style={styles.busca} placeholder="Buscar por nome..." value={busca} onChangeText={setBusca} />
      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_responsaveis)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.detalhe}>CPF: {item.cpf}</Text>
            <Text style={styles.detalhe}>Parentesco: {item.parentesco}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum responsável encontrado.</Text>}
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

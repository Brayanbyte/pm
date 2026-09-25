import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';

const cursosMock = [
  { id_curso: 1, nome_do_curso: 'Análise e Desenvolvimento de Sistemas', carga_horaria: 2000, duracao: '24 meses' },
  { id_curso: 2, nome_do_curso: 'Recursos Humanos', carga_horaria: 1800, duracao: '18 meses' },
  { id_curso: 3, nome_do_curso: 'Comércio Exterior', carga_horaria: 2400, duracao: '24 meses' },
  { id_curso: 4, nome_do_curso: 'Farmácia', carga_horaria: 4000, duracao: '48 meses' },
  { id_curso: 5, nome_do_curso: 'Agronegócio', carga_horaria: 2200, duracao: '24 meses' },
];

export default function ConsultarCursos({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = cursosMock.filter((c) => c.nome_do_curso.toLowerCase().includes(busca.toLowerCase()));

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consultar Cursos</Text>
      <TextInput style={styles.busca} placeholder="Buscar por nome do curso..." value={busca} onChangeText={setBusca} />
      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_curso)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome_do_curso}</Text>
            <Text style={styles.detalhe}>Carga horária: {item.carga_horaria}h</Text>
            <Text style={styles.detalhe}>Duração: {item.duracao}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum curso encontrado.</Text>}
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

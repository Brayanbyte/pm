import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';

const cursosMock = {
  1: 'Análise e Desenvolvimento de Sistemas',
  2: 'Recursos Humanos',
  3: 'Comércio Exterior',
  4: 'Farmácia',
  5: 'Agronegócio',
};

const turmasMock = [
  { id_turmas: 1, id_cursos: 1, ano_letivo: '2026', turno: 'Matutino', sala: 'Sala 101' },
  { id_turmas: 2, id_cursos: 2, ano_letivo: '2026', turno: 'Matutino', sala: 'Sala 102' },
  { id_turmas: 3, id_cursos: 3, ano_letivo: '2026', turno: 'Matutino', sala: 'Sala 103' },
  { id_turmas: 4, id_cursos: 2, ano_letivo: '2026', turno: 'Matutino', sala: 'Sala 104' },
  { id_turmas: 5, id_cursos: 3, ano_letivo: '2026', turno: 'Matutino', sala: 'Sala 105' },
];

export default function ConsultarTurmas({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = turmasMock.filter((t) => t.sala.toLowerCase().includes(busca.toLowerCase()));

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consultar Turmas</Text>
      <TextInput style={styles.busca} placeholder="Buscar por sala..." value={busca} onChangeText={setBusca} />
      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_turmas)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.sala}</Text>
            <Text style={styles.detalhe}>Curso: {cursosMock[item.id_cursos] ?? 'Não informado'}</Text>
            <Text style={styles.detalhe}>Ano letivo: {item.ano_letivo}</Text>
            <Text style={styles.detalhe}>Turno: {item.turno}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma turma encontrada.</Text>}
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

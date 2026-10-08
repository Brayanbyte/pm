import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';

const cursosMock = {
  1: 'Análise e Desenvolvimento de Sistemas',
  2: 'Recursos Humanos',
  3: 'Comércio Exterior',
  4: 'Farmácia',
  5: 'Agronegócio',
};

const alunosMock = [
  { id_alunos: 1, nome: 'Enzo Gabriel Santos', cpf: '18469273510', data_de_nascimento: '2008-04-12', email: 'enzo.santos08@gmail.com', id_curso: 1 },
  { id_alunos: 2, nome: 'Maria Eduarda Costa', cpf: '92358147602', data_de_nascimento: '2009-11-23', email: 'duda.costa09@gmail.com', id_curso: 1 },
  { id_alunos: 51, nome: 'Bernardo Henrique Rocha', cpf: '25419387602', data_de_nascimento: '2008-05-19', email: 'bernardo.h.rocha@gmail.com', id_curso: 2 },
];

export default function ConsultarAlunos({ navigation }) {
  const [busca, setBusca] = useState('');
  const alunosFiltrados = alunosMock.filter((aluno) => aluno.nome.toLowerCase().includes(busca.toLowerCase()));

  const renderAluno = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nomeAluno}>{item.nome}</Text>
      <Text style={styles.detalhe}>CPF: {item.cpf}</Text>
      <Text style={styles.detalhe}>Nascimento: {item.data_de_nascimento}</Text>
      <Text style={styles.detalhe}>E-mail: {item.email}</Text>
      <Text style={styles.detalhe}>Curso: {cursosMock[item.id_curso] ?? 'Não informado'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consultar Alunos</Text>

      <TextInput style={styles.busca} placeholder="Buscar por nome..." value={busca} onChangeText={setBusca} />

      <FlatList
        data={alunosFiltrados}
        keyExtractor={(item) => String(item.id_alunos)}
        renderItem={renderAluno}
        style={{ width: '100%' }}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum aluno encontrado.</Text>}
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
  nomeAluno: { fontSize: 18, fontWeight: 'bold', color: '#1565C0', marginBottom: 4 },
  detalhe: { fontSize: 14, color: '#444' },
  vazio: { marginTop: 30, fontSize: 16, color: '#999', textAlign: 'center' },
  botaoSecundario: { padding: 15, marginBottom: 10, alignItems: 'center' },
  textoBotaoSecundario: { fontSize: 16, color: '#1976D2' },
});

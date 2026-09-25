import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { estilos } from './theme';

// Mock baseado na tabela `matricula` do banco `escola`
const matriculasMock = [
  { id_matricula: 1, id_alunos: 1, id_turmas: 1, data_matricula: '2026-06-11', situacao_da_matricula: 'SUSPENSA' },
  { id_matricula: 2, id_alunos: 2, id_turmas: 1, data_matricula: '2026-06-11', situacao_da_matricula: 'ATIVA' },
  { id_matricula: 7, id_alunos: 7, id_turmas: 1, data_matricula: '2026-06-11', situacao_da_matricula: 'CANCELADA' },
  { id_matricula: 12, id_alunos: 12, id_turmas: 1, data_matricula: '2026-06-11', situacao_da_matricula: 'TRANSFERIDA' },
];

export default function ConsultarMatriculas({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = matriculasMock.filter((m) => String(m.id_alunos).includes(busca));

  return (
    <View style={estilos.containerLista}>
      <Text style={estilos.titulo}>Consultar Matrículas</Text>

      <TextInput
        style={estilos.busca}
        placeholder="Buscar por ID do aluno..."
        keyboardType="numeric"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_matricula)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nomeCard}>Aluno #{item.id_alunos} — Turma #{item.id_turmas}</Text>
            <Text style={estilos.detalheCard}>Data: {item.data_matricula}</Text>
            <Text style={estilos.detalheCard}>Situação: {item.situacao_da_matricula}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={estilos.listaVazia}>Nenhuma matrícula encontrada.</Text>}
      />

      <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

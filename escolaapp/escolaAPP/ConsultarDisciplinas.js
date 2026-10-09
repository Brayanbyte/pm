import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { estilos } from './theme';

// Mock baseado na tabela `disciplinas` do banco `escola`
const disciplinasMock = [
  { id_disciplinas: 1, nome_disciplina: 'Algoritmos e Lógica de Programação', carga_horaria: 80, curso: 'ADS' },
  { id_disciplinas: 2, nome_disciplina: 'Modelagem e Banco de Dados', carga_horaria: 80, curso: 'ADS' },
  { id_disciplinas: 6, nome_disciplina: 'Estrutura de Dados', carga_horaria: 80, curso: 'ADS' },
  { id_disciplinas: 11, nome_disciplina: 'Rotinas de Departamento Pessoal', carga_horaria: 80, curso: 'RH' },
  { id_disciplinas: 31, nome_disciplina: 'Anatomia e Fisiologia Humana', carga_horaria: 80, curso: 'Farmácia' },
];

export default function ConsultarDisciplinas({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = disciplinasMock.filter((d) =>
    d.nome_disciplina.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={estilos.containerLista}>
      <Text style={estilos.titulo}>Consultar Disciplinas</Text>

      <TextInput
        style={estilos.busca}
        placeholder="Buscar por nome da disciplina..."
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_disciplinas)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nomeCard}>{item.nome_disciplina}</Text>
            <Text style={estilos.detalheCard}>Curso: {item.curso}</Text>
            <Text style={estilos.detalheCard}>Carga horária: {item.carga_horaria}h</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={estilos.listaVazia}>Nenhuma disciplina encontrada.</Text>}
      />

      <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

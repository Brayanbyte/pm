import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { estilos } from './theme';

// Mock baseado na tabela `avaliacoes` do banco `escola`
const avaliacoesMock = [
  { id_avaliacoes: 1, descricao: 'Avaliação 1', id_disciplinas: 1, data_da_avaliacao: '2026-06-23', valor_da_avaliacao: 25.0 },
  { id_avaliacoes: 2, descricao: 'Avaliação 2', id_disciplinas: 1, data_da_avaliacao: '2026-06-23', valor_da_avaliacao: 25.0 },
  { id_avaliacoes: 5, descricao: 'Avaliação 1', id_disciplinas: 2, data_da_avaliacao: '2026-06-23', valor_da_avaliacao: 25.0 },
  { id_avaliacoes: 9, descricao: 'Avaliação 1', id_disciplinas: 3, data_da_avaliacao: '2026-06-23', valor_da_avaliacao: 25.0 },
];

export default function ConsultarAvaliacoes({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = avaliacoesMock.filter((a) =>
    a.descricao.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={estilos.containerLista}>
      <Text style={estilos.titulo}>Consultar Avaliações</Text>

      <TextInput
        style={estilos.busca}
        placeholder="Buscar por descrição..."
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_avaliacoes)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nomeCard}>{item.descricao}</Text>
            <Text style={estilos.detalheCard}>Disciplina (ID): {item.id_disciplinas}</Text>
            <Text style={estilos.detalheCard}>Data: {item.data_da_avaliacao}</Text>
            <Text style={estilos.detalheCard}>Valor: {item.valor_da_avaliacao.toFixed(2)}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={estilos.listaVazia}>Nenhuma avaliação encontrada.</Text>}
      />

      <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { estilos } from './theme';

// Mock baseado na tabela `boletins` do banco `escola`
const boletinsMock = [
  { id_boletim: 1, id_alunos: 1, media_final: 8.7, situacao: 'Aprovado', frequencia: '96' },
  { id_boletim: 3, id_alunos: 3, media_final: 6.5, situacao: 'Recuperação', frequencia: '78' },
  { id_boletim: 5, id_alunos: 5, media_final: 5.3, situacao: 'Reprovado', frequencia: '68' },
  { id_boletim: 9, id_alunos: 9, media_final: 9.5, situacao: 'Aprovado', frequencia: '100' },
];

export default function ConsultarBoletins({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = boletinsMock.filter((b) =>
    String(b.id_alunos).includes(busca)
  );

  return (
    <View style={estilos.containerLista}>
      <Text style={estilos.titulo}>Consultar Boletins</Text>

      <TextInput
        style={estilos.busca}
        placeholder="Buscar por ID do aluno..."
        keyboardType="numeric"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_boletim)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nomeCard}>Aluno #{item.id_alunos}</Text>
            <Text style={estilos.detalheCard}>Média final: {item.media_final.toFixed(2)}</Text>
            <Text style={estilos.detalheCard}>Frequência: {item.frequencia}%</Text>
            <Text style={estilos.detalheCard}>Situação: {item.situacao}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={estilos.listaVazia}>Nenhum boletim encontrado.</Text>}
      />

      <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

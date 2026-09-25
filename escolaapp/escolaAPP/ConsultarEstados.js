import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { estilos } from './theme';

// Mock baseado na tabela `estados` do banco `escola`
const estadosMock = [{ id_estado: 1, nome_do_estado: 'São Paulo', sigla: 'SP' }];

export default function ConsultarEstados({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = estadosMock.filter((e) =>
    e.nome_do_estado.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={estilos.containerLista}>
      <Text style={estilos.titulo}>Consultar Estados</Text>

      <TextInput
        style={estilos.busca}
        placeholder="Buscar por nome do estado..."
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_estado)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nomeCard}>{item.nome_do_estado}</Text>
            <Text style={estilos.detalheCard}>Sigla: {item.sigla}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={estilos.listaVazia}>Nenhum estado encontrado.</Text>}
      />

      <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

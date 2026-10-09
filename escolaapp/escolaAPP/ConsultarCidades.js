import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { estilos } from './theme';

// Mock baseado na tabela `cidades` do banco `escola`
const cidadesMock = [{ id_cidade: 1, id_estado: 1, nome_da_cidade: 'São José dos Campos' }];

export default function ConsultarCidades({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = cidadesMock.filter((c) =>
    c.nome_da_cidade.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={estilos.containerLista}>
      <Text style={estilos.titulo}>Consultar Cidades</Text>

      <TextInput
        style={estilos.busca}
        placeholder="Buscar por nome da cidade..."
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_cidade)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nomeCard}>{item.nome_da_cidade}</Text>
            <Text style={estilos.detalheCard}>Estado (ID): {item.id_estado}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={estilos.listaVazia}>Nenhuma cidade encontrada.</Text>}
      />

      <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

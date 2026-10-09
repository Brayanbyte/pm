import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { estilos } from './theme';

// Mock baseado na tabela `bairros` do banco `escola`
const bairrosMock = [
  { id_bairro: 1, id_cidade: 1, nome: 'Jardim Satélite' },
  { id_bairro: 2, id_cidade: 1, nome: 'Bosque dos Eucaliptos' },
  { id_bairro: 3, id_cidade: 1, nome: 'Residencial União' },
  { id_bairro: 4, id_cidade: 1, nome: 'Campo dos Alemães' },
];

export default function ConsultarBairros({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = bairrosMock.filter((b) =>
    b.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={estilos.containerLista}>
      <Text style={estilos.titulo}>Consultar Bairros</Text>

      <TextInput
        style={estilos.busca}
        placeholder="Buscar por nome do bairro..."
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_bairro)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nomeCard}>{item.nome}</Text>
            <Text style={estilos.detalheCard}>Cidade (ID): {item.id_cidade}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={estilos.listaVazia}>Nenhum bairro encontrado.</Text>}
      />

      <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

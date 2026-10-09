import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { estilos } from './theme';

// Mock baseado na tabela `telefones` do banco `escola`
const telefonesMock = [
  { id_telefone: 1, id_dados: 1, numero_tel: '(12) 99100-0001', tipo: 'Celular' },
  { id_telefone: 2, id_dados: 2, numero_tel: '(12) 99100-0002', tipo: 'Celular' },
  { id_telefone: 3, id_dados: 3, numero_tel: '(12) 99100-0003', tipo: 'Celular' },
];

export default function ConsultarTelefones({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = telefonesMock.filter((t) => t.numero_tel.includes(busca));

  return (
    <View style={estilos.containerLista}>
      <Text style={estilos.titulo}>Consultar Telefones</Text>

      <TextInput
        style={estilos.busca}
        placeholder="Buscar por número..."
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_telefone)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nomeCard}>{item.numero_tel}</Text>
            <Text style={estilos.detalheCard}>Tipo: {item.tipo}</Text>
            <Text style={estilos.detalheCard}>Vinculado a (ID): {item.id_dados}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={estilos.listaVazia}>Nenhum telefone encontrado.</Text>}
      />

      <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

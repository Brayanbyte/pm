import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { estilos } from './theme';

// Mock baseado na tabela `ruas` do banco `escola`
const ruasMock = [
  { id_rua: 1, id_bairro: 1, nome_da_rua: 'Rua Polaris', cep: '12231000' },
  { id_rua: 2, id_bairro: 1, nome_da_rua: 'Rua Antares', cep: '12231010' },
  { id_rua: 11, id_bairro: 2, nome_da_rua: 'Rua Ipê', cep: '12232000' },
  { id_rua: 21, id_bairro: 3, nome_da_rua: 'Rua das Acácias', cep: '12233000' },
];

export default function ConsultarRuas({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = ruasMock.filter((r) =>
    r.nome_da_rua.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={estilos.containerLista}>
      <Text style={estilos.titulo}>Consultar Ruas</Text>

      <TextInput
        style={estilos.busca}
        placeholder="Buscar por nome da rua..."
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_rua)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nomeCard}>{item.nome_da_rua}</Text>
            <Text style={estilos.detalheCard}>CEP: {item.cep}</Text>
            <Text style={estilos.detalheCard}>Bairro (ID): {item.id_bairro}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={estilos.listaVazia}>Nenhuma rua encontrada.</Text>}
      />

      <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

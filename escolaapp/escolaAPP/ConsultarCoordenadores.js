import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { estilos } from './theme';

const cursosMock = {
  1: 'Análise e Desenvolvimento de Sistemas',
  2: 'Recursos Humanos',
  3: 'Comércio Exterior',
  4: 'Farmácia',
  5: 'Agronegócio',
};

// Mock baseado na tabela `coordenadores` do banco `escola`
const coordenadoresMock = [
  { id_coordenador: 1, id_cursos: 1, nome: 'Marcos Antônio Souza', cpf: '12345678901' },
  { id_coordenador: 2, id_cursos: 2, nome: 'Fernanda Lima Rocha', cpf: '23456789012' },
  { id_coordenador: 3, id_cursos: 3, nome: 'Roberto Alves Gomes', cpf: '34567890123' },
  { id_coordenador: 4, id_cursos: 4, nome: 'Beatriz Mendes Cruz', cpf: '45678901234' },
  { id_coordenador: 5, id_cursos: 5, nome: 'Ricardo Nunes Silva', cpf: '57689012345' },
];

export default function ConsultarCoordenadores({ navigation }) {
  const [busca, setBusca] = useState('');
  const filtrados = coordenadoresMock.filter((c) =>
    c.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={estilos.containerLista}>
      <Text style={estilos.titulo}>Consultar Coordenadores</Text>

      <TextInput
        style={estilos.busca}
        placeholder="Buscar por nome..."
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id_coordenador)}
        style={{ width: '100%' }}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Text style={estilos.nomeCard}>{item.nome}</Text>
            <Text style={estilos.detalheCard}>CPF: {item.cpf}</Text>
            <Text style={estilos.detalheCard}>Curso: {cursosMock[item.id_cursos] ?? 'Não informado'}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={estilos.listaVazia}>Nenhum coordenador encontrado.</Text>}
      />

      <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { estilos } from './theme';

export default function CadastroAvaliacao({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const [idDisciplina, setIdDisciplina] = useState('');
  const [dataAvaliacao, setDataAvaliacao] = useState('');
  const [valor, setValor] = useState('');

  const salvar = () => {
    if (!descricao.trim() || !idDisciplina.trim() || !dataAvaliacao.trim() || !valor.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    console.log('Avaliação cadastrada (mock):', {
      descricao,
      id_disciplinas: idDisciplina,
      data_da_avaliacao: dataAvaliacao,
      valor_da_avaliacao: valor,
    });
    Alert.alert('Sucesso', `Avaliação "${descricao}" cadastrada com sucesso!`);
    setDescricao('');
    setIdDisciplina('');
    setDataAvaliacao('');
    setValor('');
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Cadastrar Avaliação</Text>

      <View style={estilos.form}>
        <Text style={estilos.label}>Descrição</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: Avaliação 1"
          value={descricao}
          onChangeText={setDescricao}
        />

        <Text style={estilos.label}>ID da disciplina</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: 6 (Estrutura de Dados)"
          keyboardType="numeric"
          value={idDisciplina}
          onChangeText={setIdDisciplina}
        />

        <Text style={estilos.label}>Data da avaliação</Text>
        <TextInput
          style={estilos.input}
          placeholder="AAAA-MM-DD"
          value={dataAvaliacao}
          onChangeText={setDataAvaliacao}
        />

        <Text style={estilos.label}>Valor da avaliação</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: 25.00"
          keyboardType="decimal-pad"
          value={valor}
          onChangeText={setValor}
        />

        <TouchableOpacity style={estilos.botao} onPress={salvar}>
          <Text style={estilos.textoBotao}>Salvar Avaliação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
          <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

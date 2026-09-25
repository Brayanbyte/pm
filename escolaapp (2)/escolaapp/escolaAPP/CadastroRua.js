import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { estilos } from './theme';

export default function CadastroRua({ navigation }) {
  const [nomeRua, setNomeRua] = useState('');
  const [cep, setCep] = useState('');
  const [idBairro, setIdBairro] = useState('');

  const salvar = () => {
    if (!nomeRua.trim() || cep.trim().length !== 8 || !idBairro.trim()) {
      Alert.alert('Atenção', 'Preencha Nome da rua, CEP (8 números) e ID do bairro.');
      return;
    }
    console.log('Rua cadastrada (mock):', { nome_da_rua: nomeRua, cep, id_bairro: idBairro });
    Alert.alert('Sucesso', `Rua ${nomeRua} cadastrada com sucesso!`);
    setNomeRua('');
    setCep('');
    setIdBairro('');
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Cadastrar Rua</Text>

      <View style={estilos.form}>
        <Text style={estilos.label}>Nome da rua</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: Rua Polaris"
          value={nomeRua}
          onChangeText={setNomeRua}
        />

        <Text style={estilos.label}>CEP</Text>
        <TextInput
          style={estilos.input}
          placeholder="Somente números"
          keyboardType="numeric"
          maxLength={8}
          value={cep}
          onChangeText={setCep}
        />

        <Text style={estilos.label}>ID do bairro</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: 1 (Jardim Satélite)"
          keyboardType="numeric"
          value={idBairro}
          onChangeText={setIdBairro}
        />

        <TouchableOpacity style={estilos.botao} onPress={salvar}>
          <Text style={estilos.textoBotao}>Salvar Rua</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
          <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { estilos } from './theme';

export default function CadastroBairro({ navigation }) {
  const [nomeBairro, setNomeBairro] = useState('');
  const [idCidade, setIdCidade] = useState('');

  const salvar = () => {
    if (!nomeBairro.trim() || !idCidade.trim()) {
      Alert.alert('Atenção', 'Preencha o Nome do bairro e o ID da cidade.');
      return;
    }
    console.log('Bairro cadastrado (mock):', { nome: nomeBairro, id_cidade: idCidade });
    Alert.alert('Sucesso', `Bairro ${nomeBairro} cadastrado com sucesso!`);
    setNomeBairro('');
    setIdCidade('');
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Cadastrar Bairro</Text>

      <View style={estilos.form}>
        <Text style={estilos.label}>Nome do bairro</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: Jardim Satélite"
          value={nomeBairro}
          onChangeText={setNomeBairro}
        />

        <Text style={estilos.label}>ID da cidade</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: 1 (São José dos Campos)"
          keyboardType="numeric"
          value={idCidade}
          onChangeText={setIdCidade}
        />

        <TouchableOpacity style={estilos.botao} onPress={salvar}>
          <Text style={estilos.textoBotao}>Salvar Bairro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
          <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

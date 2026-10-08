import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { estilos } from './theme';

export default function CadastroEstado({ navigation }) {
  const [nomeEstado, setNomeEstado] = useState('');
  const [sigla, setSigla] = useState('');

  const salvar = () => {
    if (!nomeEstado.trim() || sigla.trim().length !== 2) {
      Alert.alert('Atenção', 'Preencha o Nome do estado e a Sigla (2 letras).');
      return;
    }
    console.log('Estado cadastrado (mock):', { nome_do_estado: nomeEstado, sigla: sigla.toUpperCase() });
    Alert.alert('Sucesso', `Estado ${nomeEstado} cadastrado com sucesso!`);
    setNomeEstado('');
    setSigla('');
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Cadastrar Estado</Text>

      <View style={estilos.form}>
        <Text style={estilos.label}>Nome do estado</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: São Paulo"
          value={nomeEstado}
          onChangeText={setNomeEstado}
        />

        <Text style={estilos.label}>Sigla (UF)</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: SP"
          maxLength={2}
          autoCapitalize="characters"
          value={sigla}
          onChangeText={setSigla}
        />

        <TouchableOpacity style={estilos.botao} onPress={salvar}>
          <Text style={estilos.textoBotao}>Salvar Estado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
          <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { estilos } from './theme';

const tipos = ['Celular', 'Fixo', 'Comercial'];

export default function CadastroTelefone({ navigation }) {
  const [numero, setNumero] = useState('');
  const [idDados, setIdDados] = useState('');
  const [tipo, setTipo] = useState(null);

  const salvar = () => {
    if (!numero.trim() || !idDados.trim() || !tipo) {
      Alert.alert('Atenção', 'Preencha o Número, o ID da pessoa vinculada e selecione o Tipo.');
      return;
    }
    console.log('Telefone cadastrado (mock):', { numero_tel: numero, id_dados: idDados, tipo });
    Alert.alert('Sucesso', 'Telefone cadastrado com sucesso!');
    setNumero('');
    setIdDados('');
    setTipo(null);
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Cadastrar Telefone</Text>

      <View style={estilos.form}>
        <Text style={estilos.label}>Número</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: (12) 99100-0001"
          keyboardType="phone-pad"
          value={numero}
          onChangeText={setNumero}
        />

        <Text style={estilos.label}>ID da pessoa vinculada</Text>
        <TextInput
          style={estilos.input}
          placeholder="ID em dados pessoais"
          keyboardType="numeric"
          value={idDados}
          onChangeText={setIdDados}
        />

        <Text style={estilos.label}>Tipo</Text>
        <View style={estilos.listaOpcoesLinha}>
          {tipos.map((t) => (
            <TouchableOpacity
              key={t}
              style={[estilos.opcaoPill, tipo === t && estilos.opcaoSelecionada]}
              onPress={() => setTipo(t)}
            >
              <Text style={[estilos.textoOpcaoPill, tipo === t && estilos.textoOpcaoSelecionada]}>
                {t}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={estilos.botao} onPress={salvar}>
          <Text style={estilos.textoBotao}>Salvar Telefone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
          <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

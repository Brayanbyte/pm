import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { estilos } from './theme';

const estados = [{ id: 1, nome: 'São Paulo (SP)' }];

export default function CadastroCidade({ navigation }) {
  const [nomeCidade, setNomeCidade] = useState('');
  const [estadoSelecionado, setEstadoSelecionado] = useState(null);

  const salvar = () => {
    if (!nomeCidade.trim() || !estadoSelecionado) {
      Alert.alert('Atenção', 'Preencha o Nome da cidade e selecione o Estado.');
      return;
    }
    console.log('Cidade cadastrada (mock):', { nome_da_cidade: nomeCidade, id_estado: estadoSelecionado });
    Alert.alert('Sucesso', `Cidade ${nomeCidade} cadastrada com sucesso!`);
    setNomeCidade('');
    setEstadoSelecionado(null);
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Cadastrar Cidade</Text>

      <View style={estilos.form}>
        <Text style={estilos.label}>Nome da cidade</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: São José dos Campos"
          value={nomeCidade}
          onChangeText={setNomeCidade}
        />

        <Text style={estilos.label}>Estado</Text>
        <View style={estilos.listaOpcoes}>
          {estados.map((estado) => (
            <TouchableOpacity
              key={estado.id}
              style={[estilos.opcao, estadoSelecionado === estado.id && estilos.opcaoSelecionada]}
              onPress={() => setEstadoSelecionado(estado.id)}
            >
              <Text style={[estilos.textoOpcao, estadoSelecionado === estado.id && estilos.textoOpcaoSelecionada]}>
                {estado.nome}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={estilos.botao} onPress={salvar}>
          <Text style={estilos.textoBotao}>Salvar Cidade</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
          <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

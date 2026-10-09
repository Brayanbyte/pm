import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { estilos } from './theme';

const cursos = [
  { id: 1, nome: 'Análise e Desenvolvimento de Sistemas' },
  { id: 2, nome: 'Recursos Humanos' },
  { id: 3, nome: 'Comércio Exterior' },
  { id: 4, nome: 'Farmácia' },
  { id: 5, nome: 'Agronegócio' },
];

export default function CadastroCoordenador({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [cursoSelecionado, setCursoSelecionado] = useState(null);

  const salvar = () => {
    if (!nome.trim() || !cpf.trim() || !cursoSelecionado) {
      Alert.alert('Atenção', 'Preencha Nome, CPF e selecione o Curso coordenado.');
      return;
    }
    if (cpf.trim().length !== 11) {
      Alert.alert('Atenção', 'O CPF deve conter 11 números.');
      return;
    }
    console.log('Coordenador cadastrado (mock):', { nome, cpf, id_cursos: cursoSelecionado });
    Alert.alert('Sucesso', `Coordenador ${nome} cadastrado com sucesso!`);
    setNome('');
    setCpf('');
    setCursoSelecionado(null);
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Cadastrar Coordenador</Text>

      <View style={estilos.form}>
        <Text style={estilos.label}>Nome completo</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: Marcos Antônio Souza"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={estilos.label}>CPF</Text>
        <TextInput
          style={estilos.input}
          placeholder="Somente números"
          keyboardType="numeric"
          maxLength={11}
          value={cpf}
          onChangeText={setCpf}
        />

        <Text style={estilos.label}>Curso coordenado</Text>
        <View style={estilos.listaOpcoes}>
          {cursos.map((curso) => (
            <TouchableOpacity
              key={curso.id}
              style={[estilos.opcao, cursoSelecionado === curso.id && estilos.opcaoSelecionada]}
              onPress={() => setCursoSelecionado(curso.id)}
            >
              <Text style={[estilos.textoOpcao, cursoSelecionado === curso.id && estilos.textoOpcaoSelecionada]}>
                {curso.nome}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={estilos.botao} onPress={salvar}>
          <Text style={estilos.textoBotao}>Salvar Coordenador</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
          <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

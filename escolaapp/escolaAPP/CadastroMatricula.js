import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { estilos } from './theme';

const situacoes = ['ATIVA', 'SUSPENSA', 'CANCELADA', 'TRANSFERIDA', 'INATIVA'];

export default function CadastroMatricula({ navigation }) {
  const [idAluno, setIdAluno] = useState('');
  const [idTurma, setIdTurma] = useState('');
  const [dataMatricula, setDataMatricula] = useState('');
  const [situacao, setSituacao] = useState(null);

  const salvar = () => {
    if (!idAluno.trim() || !idTurma.trim() || !dataMatricula.trim() || !situacao) {
      Alert.alert('Atenção', 'Preencha ID do aluno, ID da turma, Data e selecione a Situação.');
      return;
    }
    console.log('Matrícula cadastrada (mock):', {
      id_alunos: idAluno,
      id_turmas: idTurma,
      data_matricula: dataMatricula,
      situacao_da_matricula: situacao,
    });
    Alert.alert('Sucesso', 'Matrícula cadastrada com sucesso!');
    setIdAluno('');
    setIdTurma('');
    setDataMatricula('');
    setSituacao(null);
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Cadastrar Matrícula</Text>

      <View style={estilos.form}>
        <Text style={estilos.label}>ID do aluno</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: 1117532567"
          keyboardType="numeric"
          value={idAluno}
          onChangeText={setIdAluno}
        />

        <Text style={estilos.label}>ID da turma</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: 1"
          keyboardType="numeric"
          value={idTurma}
          onChangeText={setIdTurma}
        />

        <Text style={estilos.label}>Data da matrícula</Text>
        <TextInput
          style={estilos.input}
          placeholder="DD-MM-AAAA"
            maxLength={8}
          value={dataMatricula}
          onChangeText={setDataMatricula}
        />

        <Text style={estilos.label}>Situação</Text>
        <View style={estilos.listaOpcoesLinha}>
          {situacoes.map((s) => (
            <TouchableOpacity
              key={s}
              style={[estilos.opcaoPill, situacao === s && estilos.opcaoSelecionada]}
              onPress={() => setSituacao(s)}
            >
              <Text style={[estilos.textoOpcaoPill, situacao === s && estilos.textoOpcaoSelecionada]}>
                {s}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={estilos.botao} onPress={salvar}>
          <Text style={estilos.textoBotao}>Salvar Matrícula</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
          <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

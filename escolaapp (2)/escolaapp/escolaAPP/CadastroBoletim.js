import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { estilos } from './theme';

const situacoes = ['Aprovado', 'Recuperação', 'Reprovado'];

export default function CadastroBoletim({ navigation }) {
  const [idAluno, setIdAluno] = useState('');
  const [idDisciplina, setIdDisciplina] = useState('');
  const [mediaFinal, setMediaFinal] = useState('');
  const [frequencia, setFrequencia] = useState('');
  const [situacao, setSituacao] = useState(null);

  const salvar = () => {
    if (!idAluno.trim() || !idDisciplina.trim() || !mediaFinal.trim() || !situacao) {
      Alert.alert('Atenção', 'Preencha ID do aluno, ID da disciplina, Média final e selecione a Situação.');
      return;
    }
    console.log('Boletim cadastrado (mock):', {
      id_alunos: idAluno,
      id_disciplina: idDisciplina,
      media_final: mediaFinal,
      frequencia,
      situacao,
    });
    Alert.alert('Sucesso', 'Boletim cadastrado com sucesso!');
    setIdAluno('');
    setIdDisciplina('');
    setMediaFinal('');
    setFrequencia('');
    setSituacao(null);
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Cadastrar Boletim</Text>

      <View style={estilos.form}>
        <Text style={estilos.label}>ID do aluno</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: 1"
          keyboardType="numeric"
          value={idAluno}
          onChangeText={setIdAluno}
        />

        <Text style={estilos.label}>ID da disciplina</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: 1"
          keyboardType="numeric"
          value={idDisciplina}
          onChangeText={setIdDisciplina}
        />

        <Text style={estilos.label}>Média final</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: 8.70"
          keyboardType="decimal-pad"
          value={mediaFinal}
          onChangeText={setMediaFinal}
        />

        <Text style={estilos.label}>Frequência (%)</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: 96"
          keyboardType="numeric"
          value={frequencia}
          onChangeText={setFrequencia}
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
          <Text style={estilos.textoBotao}>Salvar Boletim</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
          <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

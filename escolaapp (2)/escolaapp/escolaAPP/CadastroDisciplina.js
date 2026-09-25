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

export default function CadastroDisciplina({ navigation }) {
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');
  const [cursoSelecionado, setCursoSelecionado] = useState(null);

  const salvar = () => {
    if (!nomeDisciplina.trim() || !cargaHoraria.trim() || !cursoSelecionado) {
      Alert.alert('Atenção', 'Preencha Nome da disciplina, Carga horária e selecione o Curso.');
      return;
    }
    console.log('Disciplina cadastrada (mock):', {
      nome_disciplina: nomeDisciplina,
      carga_horaria: cargaHoraria,
      id_cursos: cursoSelecionado,
    });
    Alert.alert('Sucesso', `Disciplina ${nomeDisciplina} cadastrada com sucesso!`);
    setNomeDisciplina('');
    setCargaHoraria('');
    setCursoSelecionado(null);
  };

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Cadastrar Disciplina</Text>

      <View style={estilos.form}>
        <Text style={estilos.label}>Nome da disciplina</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: Estrutura de Dados"
          value={nomeDisciplina}
          onChangeText={setNomeDisciplina}
        />

        <Text style={estilos.label}>Carga horária (horas)</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ex: 80"
          keyboardType="numeric"
          value={cargaHoraria}
          onChangeText={setCargaHoraria}
        />

        <Text style={estilos.label}>Curso</Text>
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
          <Text style={estilos.textoBotao}>Salvar Disciplina</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoSecundario} onPress={() => navigation.goBack()}>
          <Text style={estilos.textoBotaoSecundario}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

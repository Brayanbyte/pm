import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function CadastroCurso({ navigation }) {
  const [nomeDoCurso, setNomeDoCurso] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');
  const [duracao, setDuracao] = useState('');
  const [descricao, setDescricao] = useState('');

  const salvar = () => {
    if (!nomeDoCurso.trim() || !cargaHoraria.trim() || !duracao.trim()) {
      Alert.alert('Atenção', 'Preencha Nome do curso, Carga horária e Duração.');
      return;
    }
    console.log('Curso cadastrado (mock):', { nome_do_curso: nomeDoCurso, carga_horaria: cargaHoraria, duracao, descricao });
    Alert.alert('Sucesso', `Curso ${nomeDoCurso} cadastrado com sucesso!`);
    setNomeDoCurso('');
    setCargaHoraria('');
    setDuracao('');
    setDescricao('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastrar Curso</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nome do curso</Text>
        <TextInput style={styles.input} placeholder="Ex: Análise e Desenvolvimento de Sistemas" value={nomeDoCurso} onChangeText={setNomeDoCurso} />
        <Text style={styles.label}>Carga horária (horas)</Text>
        <TextInput style={styles.input} placeholder="Ex: 2000" keyboardType="numeric" value={cargaHoraria} onChangeText={setCargaHoraria} />
        <Text style={styles.label}>Duração</Text>
        <TextInput style={styles.input} placeholder="Ex: 24 meses" value={duracao} onChangeText={setDuracao} />
        <Text style={styles.label}>Descrição</Text>
        <TextInput style={[styles.input, styles.inputMultilinha]} placeholder="Descreva o curso..." multiline numberOfLines={4} value={descricao} onChangeText={setDescricao} />
        <TouchableOpacity style={styles.botao} onPress={salvar}>
          <Text style={styles.textoBotao}>Salvar Curso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoSecundario} onPress={() => navigation.goBack()}>
          <Text style={styles.textoBotaoSecundario}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#FFFFFF', alignItems: 'center', paddingTop: 60, paddingBottom: 40 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#1565C0', marginBottom: 30 },
  form: { width: '85%' },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 5, marginTop: 12 },
  input: { borderWidth: 1, borderColor: '#CCC', borderRadius: 8, padding: 12, fontSize: 16, backgroundColor: '#F9F9F9' },
  inputMultilinha: { height: 90, textAlignVertical: 'top' },
  botao: { backgroundColor: '#1976D2', padding: 15, borderRadius: 10, marginTop: 25, alignItems: 'center' },
  textoBotao: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' },
  botaoSecundario: { padding: 15, marginTop: 10, alignItems: 'center' },
  textoBotaoSecundario: { fontSize: 16, color: '#1976D2' },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function CadastroProfessor({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  const salvar = () => {
    if (!nome.trim() || !cpf.trim()) {
      Alert.alert('Atenção', 'Preencha Nome e CPF.');
      return;
    }
    if (cpf.trim().length !== 11) {
      Alert.alert('Atenção', 'O CPF deve conter 11 números.');
      return;
    }
    console.log('Professor cadastrado (mock):', { nome, cpf });
    Alert.alert('Sucesso', `Professor ${nome} cadastrado com sucesso!`);
    setNome('');
    setCpf('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastrar Professor</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nome completo</Text>
        <TextInput style={styles.input} placeholder="Ex: Carlos Eduardo Moreira" value={nome} onChangeText={setNome} />
        <Text style={styles.label}>CPF</Text>
        <TextInput style={styles.input} placeholder="Somente números" keyboardType="numeric" maxLength={11} value={cpf} onChangeText={setCpf} />
        <TouchableOpacity style={styles.botao} onPress={salvar}>
          <Text style={styles.textoBotao}>Salvar Professor</Text>
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
  botao: { backgroundColor: '#1976D2', padding: 15, borderRadius: 10, marginTop: 25, alignItems: 'center' },
  textoBotao: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' },
  botaoSecundario: { padding: 15, marginTop: 10, alignItems: 'center' },
  textoBotaoSecundario: { fontSize: 16, color: '#1976D2' },
});

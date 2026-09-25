import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

const parentescos = ['PAI', 'MÃE', 'AVÔ', 'AVÓ', 'TIO', 'TIA', 'OUTRO'];

export default function CadastroResponsavel({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [parentesco, setParentesco] = useState(null);

  const salvar = () => {
    if (!nome.trim() || !cpf.trim() || !parentesco) {
      Alert.alert('Atenção', 'Preencha Nome, CPF e selecione o Parentesco.');
      return;
    }
    if (cpf.trim().length !== 11) {
      Alert.alert('Atenção', 'O CPF deve conter 11 números.');
      return;
    }
    console.log('Responsável cadastrado (mock):', { nome, cpf, parentesco });
    Alert.alert('Sucesso', `Responsável ${nome} cadastrado com sucesso!`);
    setNome('');
    setCpf('');
    setParentesco(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastrar Responsável</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nome completo</Text>
        <TextInput style={styles.input} placeholder="Ex: Ricardo Augusto Barbosa" value={nome} onChangeText={setNome} />
        <Text style={styles.label}>CPF</Text>
        <TextInput style={styles.input} placeholder="Somente números" keyboardType="numeric" maxLength={11} value={cpf} onChangeText={setCpf} />
        <Text style={styles.label}>Parentesco</Text>
        <View style={styles.listaOpcoes}>
          {parentescos.map((p) => (
            <TouchableOpacity key={p} style={[styles.opcao, parentesco === p && styles.opcaoSelecionada]} onPress={() => setParentesco(p)}>
              <Text style={[styles.textoOpcao, parentesco === p && styles.textoOpcaoSelecionada]}>{p}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.botao} onPress={salvar}>
          <Text style={styles.textoBotao}>Salvar Responsável</Text>
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
  listaOpcoes: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 6, gap: 8 },
  opcao: { borderWidth: 1, borderColor: '#CCC', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 14, backgroundColor: '#F9F9F9' },
  opcaoSelecionada: { borderColor: '#1976D2', backgroundColor: '#E3F2FD' },
  textoOpcao: { fontSize: 13, color: '#333' },
  textoOpcaoSelecionada: { color: '#1565C0', fontWeight: 'bold' },
  botao: { backgroundColor: '#1976D2', padding: 15, borderRadius: 10, marginTop: 25, alignItems: 'center' },
  textoBotao: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' },
  botaoSecundario: { padding: 15, marginTop: 10, alignItems: 'center' },
  textoBotaoSecundario: { fontSize: 16, color: '#1976D2' },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

const cursos = [
  { id_curso: 1, nome_do_curso: 'Análise e Desenvolvimento de Sistemas' },
  { id_curso: 2, nome_do_curso: 'Recursos Humanos' },
  { id_curso: 3, nome_do_curso: 'Comércio Exterior' },
  { id_curso: 4, nome_do_curso: 'Farmácia' },
  { id_curso: 5, nome_do_curso: 'Agronegócio' },
];

export default function CadastroTurma({ navigation }) {
  const [anoLetivo, setAnoLetivo] = useState('');
  const [turno, setTurno] = useState('');
  const [sala, setSala] = useState('');
  const [cursoSelecionado, setCursoSelecionado] = useState(null);

  const salvar = () => {
    if (!anoLetivo.trim() || !turno.trim() || !sala.trim() || !cursoSelecionado) {
      Alert.alert('Atenção', 'Preencha Ano letivo, Turno, Sala e selecione um Curso.');
      return;
    }
    console.log('Turma cadastrada (mock):', { ano_letivo: anoLetivo, turno, sala, id_cursos: cursoSelecionado });
    Alert.alert('Sucesso', `Turma da sala ${sala} cadastrada com sucesso!`);
    setAnoLetivo('');
    setTurno('');
    setSala('');
    setCursoSelecionado(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastrar Turma</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Ano letivo</Text>
        <TextInput style={styles.input} placeholder="Ex: 2026" keyboardType="numeric" value={anoLetivo} onChangeText={setAnoLetivo} />
        <Text style={styles.label}>Turno</Text>
        <TextInput style={styles.input} placeholder="Ex: Matutino" value={turno} onChangeText={setTurno} />
        <Text style={styles.label}>Sala</Text>
        <TextInput style={styles.input} placeholder="Ex: Sala 101" value={sala} onChangeText={setSala} />
        <Text style={styles.label}>Curso</Text>
        <View style={styles.listaCursos}>
          {cursos.map((curso) => (
            <TouchableOpacity
              key={curso.id_curso}
              style={[styles.opcaoCurso, cursoSelecionado === curso.id_curso && styles.opcaoCursoSelecionada]}
              onPress={() => setCursoSelecionado(curso.id_curso)}
            >
              <Text style={[styles.textoOpcaoCurso, cursoSelecionado === curso.id_curso && styles.textoOpcaoCursoSelecionada]}>
                {curso.nome_do_curso}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.botao} onPress={salvar}>
          <Text style={styles.textoBotao}>Salvar Turma</Text>
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
  listaCursos: { marginTop: 6 },
  opcaoCurso: { borderWidth: 1, borderColor: '#CCC', borderRadius: 8, padding: 12, marginTop: 8, backgroundColor: '#F9F9F9' },
  opcaoCursoSelecionada: { borderColor: '#1976D2', backgroundColor: '#E3F2FD' },
  textoOpcaoCurso: { fontSize: 14, color: '#333' },
  textoOpcaoCursoSelecionada: { color: '#1565C0', fontWeight: 'bold' },
  botao: { backgroundColor: '#1976D2', padding: 15, borderRadius: 10, marginTop: 25, alignItems: 'center' },
  textoBotao: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' },
  botaoSecundario: { padding: 15, marginTop: 10, alignItems: 'center' },
  textoBotaoSecundario: { fontSize: 16, color: '#1976D2' },
});

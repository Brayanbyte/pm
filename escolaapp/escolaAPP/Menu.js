import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';


const opcoes = [
  { titulo: 'Professores', cadastro: './escolaAPP/CadastroProfessor', consulta: 'ConsultarProfessores' },
  { titulo: 'Cursos', cadastro: 'CadastroCurso', consulta: 'ConsultarCursos' },
  { titulo: 'Turmas', cadastro: 'CadastroTurma', consulta: 'ConsultarTurmas' },
  { titulo: 'Responsáveis', cadastro: 'CadastroResponsavel', consulta: 'ConsultarResponsaveis' },
  { titulo: 'Disciplinas', cadastro: 'CadastroDisciplina', consulta: 'ConsultarDisciplinas' },
  { titulo: 'Avaliações', cadastro: 'CadastroAvaliacao', consulta: 'ConsultarAvaliacoes' },
  { titulo: 'Boletins', cadastro: 'CadastroBoletim', consulta: 'ConsultarBoletins' },
  { titulo: 'Coordenadores', cadastro: 'CadastroCoordenador', consulta: 'ConsultarCoordenadores' },
  { titulo: 'Matrícula', cadastro: 'CadastroMatricula', consulta: 'ConsultarMatriculas' },
  { titulo: 'Estados', cadastro: 'CadastroEstado', consulta: 'ConsultarEstados' },
  { titulo: 'Cidades', cadastro: 'CadastroCidade', consulta: 'ConsultarCidades' },
  { titulo: 'Bairros', cadastro: 'CadastroBairro', consulta: 'ConsultarBairros' },
  { titulo: 'Ruas', cadastro: 'CadastroRua', consulta: 'ConsultarRuas' },
  { titulo: 'Telefones', cadastro: 'CadastroTelefone', consulta: 'ConsultarTelefones' },
];

export default function Menu({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Outros Cadastros</Text>

      {opcoes.map((op) => (
        <View key={op.titulo} style={styles.grupo}>
          <Text style={styles.grupoTitulo}>{op.titulo}</Text>
          <View style={styles.linha}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(op.cadastro)}>
              <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, styles.botaoOutline]} onPress={() => navigation.navigate(op.consulta)}>
              <Text style={styles.textoBotaoOutline}>Consultar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotaoVoltar}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#FFFFFF', alignItems: 'center', paddingTop: 60, paddingBottom: 40, paddingHorizontal: 20 },
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#1565C0', marginBottom: 25 },
  grupo: { width: '100%', marginBottom: 18 },
  grupoTitulo: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 8 },
  linha: { flexDirection: 'row', justifyContent: 'space-between' },
  botao: { flex: 1, backgroundColor: '#1976D2', padding: 12, borderRadius: 8, marginRight: 8, alignItems: 'center' },
  botaoOutline: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#1976D2', marginRight: 0 },
  textoBotao: { color: '#FFFFFF', fontWeight: 'bold' },
  textoBotaoOutline: { color: '#1976D2', fontWeight: 'bold' },
  botaoVoltar: { marginTop: 15, padding: 12 },
  textoBotaoVoltar: { color: '#1976D2', fontSize: 16 },
});

import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./macedo.png')} style={styles.logo} />

      <Text style={styles.titulo}>APP escolar</Text>
      <Text style={styles.subtitulo}>Sistema Acadêmico Mobile</Text>

      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroAluno')}
      >
        <Text style={styles.textoBotao}>Cadastrar Aluno</Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('ConsultarAlunos')}
      >
        <Text style={styles.textoBotao}>Consultar Alunos</Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={styles.textoBotao}>Sobre</Text>
      </Pressable>

      <Pressable
        style={[styles.botao, { backgroundColor: '#0D47A1' }]}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.textoBotao}>Outros Cadastros</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: 150, height: 150, marginBottom: 20 },
  titulo: { fontSize: 32, fontWeight: 'bold', color: '#1565C0' },
  subtitulo: { fontSize: 18, marginBottom: 40, color: '#666' },
  botao: {
    width: '80%',
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  textoBotao: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF' },
});








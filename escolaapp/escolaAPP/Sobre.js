import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

const totalAlunos = 250;
const totalCursos = 5;
const cursosOferecidos = [
  'Análise e Desenvolvimento de Sistemas',
  'Recursos Humanos',
  'Comércio Exterior',
  'Farmácia',
  'Agronegócio',
];

export default function Sobre({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('/macedo.png')} style={styles.logo} />

      <Text style={styles.titulo}>APP Scholar</Text>
      <Text style={styles.versao}>Versao 1.0.0</Text>

      <View style={styles.card}>
        <Text style={styles.secaoTitulo}>Sobre o sistema</Text>
        <Text style={styles.texto}>
          O APP Scholar é um sistema acadêmico mobile para gerenciamento de alunos, permitindo o cadastro e a
          consulta rápida de informações acadêmicas, com base no banco de dados "escola".
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.secaoTitulo}>Números do sistema</Text>
        <Text style={styles.texto}>• {totalAlunos} alunos cadastrados</Text>
        <Text style={styles.texto}>• {totalCursos} cursos oferecidos</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.secaoTitulo}>Cursos oferecidos</Text>
        {cursosOferecidos.map((curso, index) => (
          <Text key={index} style={styles.texto}>• {curso}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.secaoTitulo}>Funcionalidades</Text>
        <Text style={styles.texto}>• Cadastro de alunos e demais entidades</Text>
        <Text style={styles.texto}>• Consulta com busca</Text>
      </View>

      <TouchableOpacity style={styles.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotaoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#FFFFFF', alignItems: 'center', paddingTop: 50, paddingBottom: 40, paddingHorizontal: 20 },
  logo: { width: 100, height: 100, marginBottom: 10 },
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#1565C0' },
  versao: { fontSize: 14, color: '#999', marginBottom: 20 },
  card: { width: '100%', backgroundColor: '#F5F5F5', borderRadius: 10, padding: 15, marginBottom: 15 },
  secaoTitulo: { fontSize: 16, fontWeight: 'bold', color: '#1976D2', marginBottom: 8 },
  texto: { fontSize: 14, color: '#444', lineHeight: 20, marginBottom: 4 },
  botaoSecundario: { padding: 15, marginTop: 10, alignItems: 'center' },
  textoBotaoSecundario: { fontSize: 16, color: '#1976D2' },
});

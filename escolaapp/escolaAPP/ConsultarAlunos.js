import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, ActivityIndicator, Alert } from 'react-native';

// =========================================================================
// ATENÇÃO: Substitua o IP abaixo pelo IPv4 real do seu computador (obtido no CMD)
// =========================================================================
const API_URL = 'http://10.121.184.91';

const cursosMock = {
  1: 'Análise e Desenvolvimento de Sistemas',
  2: 'Recursos Humanos',
  3: 'Comércio Exterior',
  4: 'Farmácia',
  5: 'Agronegócio',
};

export default function ConsultarAlunos({ navigation }) {
  const [busca, setBusca] = useState('');
  const [alunos, setAlunos] = useState([]); // Pega a lista do MySQL
  const [carregando, setCarregando] = useState(false);

  // Função que faz o fetch() na sua API PHP
  const buscarAlunosDoBanco = async () => {
    try {
      setCarregando(true);
      const resposta = await fetch(`${API_URL}/alunos.php`);
      
      if (!resposta.ok) {
        throw new Error('Erro de resposta do servidor.');
      }
      
      const dados = await resposta.json();
      setAlunos(dados); // Salva os alunos do banco no estado
    } catch (erro) {
      console.log(erro);
      Alert.alert('Erro de Conexão', 'Não foi possível buscar os alunos do banco. Verifique se o IP está correto e o Apache ativo.');
    } finally {
      setCarregando(false);
    }
  };

  // Executa a busca automaticamente quando o usuário entra na tela
  useEffect(() => {
    buscarAlunosDoBanco();
  }, []);

  // Filtro de pesquisa por nome
  const alunosFiltrados = alunos.filter((aluno) => 
    aluno.nome?.toLowerCase().includes(busca.toLowerCase())
  );

  const renderAluno = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nomeAluno}>{item.nome}</Text>
      <Text style={styles.detalhe}>CPF: {item.cpf}</Text>
      <Text style={styles.detalhe}>Nascimento: {item.data_de_nascimento}</Text>
      <Text style={styles.detalhe}>E-mail: {item.email}</Text>
      <Text style={styles.detalhe}>Curso: {cursosMock[item.id_curso] ?? 'Não informado'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consultar Alunos</Text>
      <TextInput 
        style={styles.busca} 
        placeholder="Buscar por nome..." 
        value={busca} 
        onChangeText={setBusca} 
      />

      {carregando ? (
        <ActivityIndicator size="large" color="#1565C0" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={alunosFiltrados}
          keyExtractor={(item) => String(item.id_alunos)}
          renderItem={renderAluno}
          style={{ width: '100%' }}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={<Text style={styles.vazio}>Nenhum aluno encontrado no MySQL.</Text>}
        />
      )}

      <TouchableOpacity style={styles.botaoSecundario} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotaoSecundario}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center', paddingTop: 40, paddingHorizontal: 20 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#1565C0', marginBottom: 20 },
  busca: { width: '100%', borderWidth: 1, borderColor: '#CCC', borderRadius: 8, padding: 12, fontSize: 16, backgroundColor: '#F9F9F9', marginBottom: 15 },
  card: { width: '100%', backgroundColor: '#E3F2FD', borderRadius: 10, padding: 15, marginBottom: 10 },
  nomeAluno: { fontSize: 18, fontWeight: 'bold', color: '#1565C0', marginBottom: 4 },
  detalhe: { fontSize: 14, color: '#444' },
  vazio: { marginTop: 30, fontSize: 16, color: '#999', textAlign: 'center' },
  botaoSecundario: { padding: 15, marginBottom: 10, alignItems: 'center' },
  textoBotaoSecundario: { fontSize: 16, color: '#1976D2' }
});

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';

const cursos = [
  { id_curso: 1, nome_do_curso: 'Análise e Desenvolvimento de Sistemas' },
  { id_curso: 2, nome_do_curso: 'Recursos Humanos' },
  { id_curso: 3, nome_do_curso: 'Comércio Exterior' },
  { id_curso: 4, nome_do_curso: 'Farmácia' },
  { id_curso: 5, nome_do_curso: 'Agronegócio' },
];

const estados = [
  { id_estado: 1, nome: 'São Paulo (SP)' },
];

export default function CadastroAluno({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [cursoSelecionado, setCursoSelecionado] = useState(null);

  const [cep, setCep] = useState('');
  const [nomeRua, setNomeRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [nomeBairro, setNomeBairro] = useState('');
  const [nomeCidade, setNomeCidade] = useState('');
  const [estadoSelecionado, setEstadoSelecionado] = useState(null);

  const salvarAluno = () => {
    if (
      !nome.trim() ||
      !cpf.trim() ||
      !dataNascimento.trim()
    ) {
      Alert.alert(
        'Atenção',
        'Preencha Nome, CPF e Data de Nascimento.'
      );
      return;
    }

    if (cpf.trim().length !== 11) {
      Alert.alert(
        'Atenção',
        'O CPF deve conter 11 números (sem pontos ou traços).'
      );
      return;
    }

    if (
      !cep.trim() ||
      !nomeRua.trim() ||
      !numero.trim() ||
      !nomeBairro.trim() ||
      !nomeCidade.trim() ||
      !estadoSelecionado
    ) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos obrigatórios do endereço.'
      );
      return;
    }

    if (cep.trim().length !== 8) {
      Alert.alert(
        'Atenção',
        'O CEP deve conter 8 números.'
      );
      return;
    }

    const novoAluno = {
      cpf,
      nome,
      data_de_nascimento: dataNascimento,
      email,
      id_curso: cursoSelecionado,

      endereco: {
        cep,
        rua: nomeRua,
        numero,
        complemento,
        bairro: nomeBairro,
        cidade: nomeCidade,
        id_estado: estadoSelecionado
      }
    };

    console.log('Aluno cadastrado (mock):', novoAluno);

    Alert.alert(
      'Sucesso',
      `Aluno ${nome} cadastrado com sucesso!`
    );

    setNome('');
    setCpf('');
    setDataNascimento('');
    setEmail('');
    setCursoSelecionado(null);

    setCep('');
    setNomeRua('');
    setNumero('');
    setComplemento('');
    setNomeBairro('');
    setNomeCidade('');
    setEstadoSelecionado(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        Cadastrar Aluno
      </Text>

      <Text style={styles.subtitulo}>
        Preencha os dados abaixo
      </Text>

      <View style={styles.form}>

        <Text style={styles.tituloSecao}>
          DADOS DO ALUNO
        </Text>

        <Text style={styles.label}>
          Nome completo
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Enzo Gabriel Santos"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>
          CPF
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Somente números"
          keyboardType="numeric"
          maxLength={11}
          value={cpf}
          onChangeText={setCpf}
        />

        <Text style={styles.label}>
          Data de nascimento
        </Text>

        <TextInput
          style={styles.input}
          placeholder="DD-MM-AAAA"
          maxLength={10}
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />

        <Text style={styles.label}>
          E-mail
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: aluno@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>
          Curso
        </Text>

        <View style={styles.listaCursos}>

          {cursos.map((curso) => (
            <TouchableOpacity
              key={curso.id_curso}
              style={[
                styles.opcaoCurso,
                cursoSelecionado === curso.id_curso &&
                  styles.opcaoCursoSelecionada
              ]}
              onPress={() =>
                setCursoSelecionado(curso.id_curso)
              }
            >

              <Text
                style={[
                  styles.textoOpcaoCurso,
                  cursoSelecionado === curso.id_curso &&
                    styles.textoOpcaoCursoSelecionada
                ]}
              >
                {curso.nome_do_curso}
              </Text>

            </TouchableOpacity>
          ))}

        </View>


        <Text style={styles.tituloSecao}>
          ENDEREÇO
        </Text>


        <Text style={styles.label}>
          CEP
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Somente números"
          keyboardType="numeric"
          maxLength={8}
          value={cep}
          onChangeText={setCep}
        />


        <Text style={styles.label}>
          Rua
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Rua Polaris"
          value={nomeRua}
          onChangeText={setNomeRua}
        />


        <Text style={styles.label}>
          Número
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: 123"
          keyboardType="numeric"
          value={numero}
          onChangeText={setNumero}
        />


        <Text style={styles.label}>
          Complemento
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Apartamento 12"
          value={complemento}
          onChangeText={setComplemento}
        />


        <Text style={styles.label}>
          Bairro
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Jardim Satélite"
          value={nomeBairro}
          onChangeText={setNomeBairro}
        />


        <Text style={styles.label}>
          Cidade
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: São José dos Campos"
          value={nomeCidade}
          onChangeText={setNomeCidade}
        />


        <Text style={styles.label}>
          Estado
        </Text>

        <View style={styles.listaCursos}>

          {estados.map((estado) => (
            <TouchableOpacity
              key={estado.id_estado}
              style={[
                styles.opcaoCurso,
                estadoSelecionado === estado.id_estado &&
                  styles.opcaoCursoSelecionada
              ]}
              onPress={() =>
                setEstadoSelecionado(estado.id_estado)
              }
            >

              <Text
                style={[
                  styles.textoOpcaoCurso,
                  estadoSelecionado === estado.id_estado &&
                    styles.textoOpcaoCursoSelecionada
                ]}
              >
                {estado.nome}
              </Text>

            </TouchableOpacity>
          ))}

        </View>


        <TouchableOpacity
          style={styles.botao}
          onPress={salvarAluno}
        >
          <Text style={styles.textoBotao}>
            Salvar Aluno
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textoBotaoSecundario}>
            Voltar
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1565C0'
  },

  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30
  },

  form: {
    width: '85%'
  },

  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1565C0',
    marginTop: 25,
    marginBottom: 15
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    marginTop: 12
  },

  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F9F9F9'
  },

  listaCursos: {
    marginTop: 6
  },

  opcaoCurso: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    backgroundColor: '#F9F9F9'
  },

  opcaoCursoSelecionada: {
    borderColor: '#1976D2',
    backgroundColor: '#E3F2FD'
  },

  textoOpcaoCurso: {
    fontSize: 14,
    color: '#333'
  },

  textoOpcaoCursoSelecionada: {
    color: '#1565C0',
    fontWeight: 'bold'
  },

  botao: {
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center'
  },

  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

  botaoSecundario: {
    padding: 15,
    marginTop: 10,
    alignItems: 'center'
  },

  textoBotaoSecundario: {
    fontSize: 16,
    color: '#1976D2'
  }

});
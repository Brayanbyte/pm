import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// ===============================
// CADASTROS
// ===============================

import CadastroAluno from './escolaAPP/CadastroAluno';
import CadastroAvaliacao from './escolaAPP/CadastroAvaliacao';

import CadastroBoletim from './escolaAPP/CadastroBoletim';

import CadastroCoordenador from './escolaAPP/CadastroCoordenador';
import CadastroCurso from './escolaAPP/CadastroCurso';
import CadastroDisciplina from './escolaAPP/CadastroDisciplina';

import CadastroMatricula from './escolaAPP/CadastroMatricula';
import CadastroProfessor from './escolaAPP/CadastroProfessor';
import CadastroResponsavel from './escolaAPP/CadastroResponsavel';

import CadastroTelefone from './escolaAPP/CadastroTelefone';
import CadastroTurma from './escolaAPP/CadastroTurma';


// ===============================
// CONSULTAS
// ===============================

import ConsultarAlunos from './escolaAPP/ConsultarAlunos';
import ConsultarAvaliacao from './escolaAPP/ConsultarAvaliacoes';

import ConsultarBoletins from './escolaAPP/ConsultarBoletins';

import ConsultarCoordenadores from './escolaAPP/ConsultarCoordenadores';
import ConsultarCursos from './escolaAPP/ConsultarCursos';
import ConsultarDisciplinas from './escolaAPP/ConsultarDisciplinas';

import ConsultarMatriculas from './escolaAPP/ConsultarMatriculas';
import ConsultarProfessores from './escolaAPP/ConsultarProfessores';
import ConsultarResponsaveis from './escolaAPP/ConsultarResponsaveis';

import ConsultarTelefones from './escolaAPP/ConsultarTelefones';
import ConsultarTurmas from './escolaAPP/ConsultarTurmas';


// ===============================
// OUTRAS TELAS
// ===============================

import Sobre from './escolaAPP/Sobre';


const Stack = createNativeStackNavigator();


// ======================================
// TELA INICIAL
// ======================================

function TelaInicial({ navigation }) {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={require('./escolaAPP/macedo.png')}
        style={styles.logo}
      />

      <Text style={styles.titulo}>
        APP Scholar
      </Text>

      <Text style={styles.subtitulo}>
        Sistema Academico Mobile
      </Text>


      {/* =========================
          CADASTROS
      ========================== */}

      <Text style={styles.tituloSecao}>
        CADASTROS
      </Text>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroAluno')}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Aluno
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroAvaliacao')}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Avaliação
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroBoletim')}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Boletim
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroCoordenador')}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Coordenador
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroCurso')}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Curso
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroDisciplina')}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Disciplina
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroMatricula')}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Matrícula
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroProfessor')}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Professor
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroResponsavel')}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Responsável
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroTelefone')}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Telefone
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroTurma')}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Turma
        </Text>
      </TouchableOpacity>


      {/* =========================
          CONSULTAS
      ========================== */}

      <Text style={styles.tituloSecao}>
        CONSULTAS
      </Text>


      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => navigation.navigate('ConsultarAlunos')}
      >
        <Text style={styles.textoBotao}>
          Consultar Alunos
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => navigation.navigate('ConsultarAvaliacao')}
      >
        <Text style={styles.textoBotao}>
          Consultar Avaliações
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => navigation.navigate('ConsultarBoletins')}
      >
        <Text style={styles.textoBotao}>
          Consultar Boletins
        </Text>
      </TouchableOpacity>



      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => navigation.navigate('ConsultarCoordenadores')}
      >
        <Text style={styles.textoBotao}>
          Consultar Coordenadores
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => navigation.navigate('ConsultarCursos')}
      >
        <Text style={styles.textoBotao}>
          Consultar Cursos
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => navigation.navigate('ConsultarDisciplinas')}
      >
        <Text style={styles.textoBotao}>
          Consultar Disciplinas
        </Text>
      </TouchableOpacity>



      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => navigation.navigate('ConsultarMatriculas')}
      >
        <Text style={styles.textoBotao}>
          Consultar Matrículas
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => navigation.navigate('ConsultarProfessores')}
      >
        <Text style={styles.textoBotao}>
          Consultar Professores
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => navigation.navigate('ConsultarResponsaveis')}
      >
        <Text style={styles.textoBotao}>
          Consultar Responsáveis
        </Text>
      </TouchableOpacity>



      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => navigation.navigate('ConsultarTelefones')}
      >
        <Text style={styles.textoBotao}>
          Consultar Telefones
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botaoConsulta}
        onPress={() => navigation.navigate('ConsultarTurmas')}
      >
        <Text style={styles.textoBotao}>
          Consultar Turmas
        </Text>
      </TouchableOpacity>


      {/* =========================
          OUTRAS TELAS
      ========================== */}

      <Text style={styles.tituloSecao}>
        OUTROS
      </Text>



      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={styles.textoBotao}>
          Sobre
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}


// ======================================
// APP / NAVEGAÇÃO
// ======================================

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Inicio"
          component={TelaInicial}
          options={{
            title: 'APP Scholar'
          }}
        />


        {/* =========================
            CADASTROS
        ========================== */}

        <Stack.Screen
          name="CadastroAluno"
          component={CadastroAluno}
          options={{
            title: 'Cadastro de Aluno'
          }}
        />

        <Stack.Screen
          name="CadastroAvaliacao"
          component={CadastroAvaliacao}
          options={{
            title: 'Cadastro de Avaliação'
          }}
        />


        <Stack.Screen
          name="CadastroBoletim"
          component={CadastroBoletim}
          options={{
            title: 'Cadastro de Boletim'
          }}
        />


        <Stack.Screen
          name="CadastroCoordenador"
          component={CadastroCoordenador}
          options={{
            title: 'Cadastro de Coordenador'
          }}
        />

        <Stack.Screen
          name="CadastroCurso"
          component={CadastroCurso}
          options={{
            title: 'Cadastro de Curso'
          }}
        />

        <Stack.Screen
          name="CadastroDisciplina"
          component={CadastroDisciplina}
          options={{
            title: 'Cadastro de Disciplina'
          }}
        />


        <Stack.Screen
          name="CadastroMatricula"
          component={CadastroMatricula}
          options={{
            title: 'Cadastro de Matrícula'
          }}
        />

        <Stack.Screen
          name="CadastroProfessor"
          component={CadastroProfessor}
          options={{
            title: 'Cadastro de Professor'
          }}
        />

        <Stack.Screen
          name="CadastroResponsavel"
          component={CadastroResponsavel}
          options={{
            title: 'Cadastro de Responsável'
          }}
        />

        <Stack.Screen
          name="CadastroTelefone"
          component={CadastroTelefone}
          options={{
            title: 'Cadastro de Telefone'
          }}
        />

        <Stack.Screen
          name="CadastroTurma"
          component={CadastroTurma}
          options={{
            title: 'Cadastro de Turma'
          }}
        />


        {/* =========================
            CONSULTAS
        ========================== */}

        <Stack.Screen
          name="ConsultarAlunos"
          component={ConsultarAlunos}
          options={{
            title: 'Consultar Alunos'
          }}
        />

        <Stack.Screen
          name="ConsultarAvaliacao"
          component={ConsultarAvaliacao}
          options={{
            title: 'Consultar Avaliações'
          }}
        />

        <Stack.Screen
          name="ConsultarBoletins"
          component={ConsultarBoletins}
          options={{
            title: 'Consultar Boletins'
          }}
        />

        <Stack.Screen
          name="ConsultarCoordenadores"
          component={ConsultarCoordenadores}
          options={{
            title: 'Consultar Coordenadores'
          }}
        />

        <Stack.Screen
          name="ConsultarCursos"
          component={ConsultarCursos}
          options={{
            title: 'Consultar Cursos'
          }}
        />

        <Stack.Screen
          name="ConsultarDisciplinas"
          component={ConsultarDisciplinas}
          options={{
            title: 'Consultar Disciplinas'
          }}
        />

        <Stack.Screen
          name="ConsultarMatriculas"
          component={ConsultarMatriculas}
          options={{
            title: 'Consultar Matrículas'
          }}
        />

        <Stack.Screen
          name="ConsultarProfessores"
          component={ConsultarProfessores}
          options={{
            title: 'Consultar Professores'
          }}
        />

        <Stack.Screen
          name="ConsultarResponsaveis"
          component={ConsultarResponsaveis}
          options={{
            title: 'Consultar Responsáveis'
          }}
        />

        <Stack.Screen
          name="ConsultarTelefones"
          component={ConsultarTelefones}
          options={{
            title: 'Consultar Telefones'
          }}
        />

        <Stack.Screen
          name="ConsultarTurmas"
          component={ConsultarTurmas}
          options={{
            title: 'Consultar Turmas'
          }}
        />


        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: 'Sobre'
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}


// ======================================
// ESTILOS
// ======================================

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1565C0'
  },

  subtitulo: {
    fontSize: 18,
    marginBottom: 40,
    color: '#666'
  },

  tituloSecao: {
    width: '90%',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1565C0',
    marginTop: 25,
    marginBottom: 20,
    textAlign: 'center'
  },

  botao: {
    width: '80%',
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center'
  },

  botaoConsulta: {
    width: '80%',
    backgroundColor: '#388E3C',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center'
  },

  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }

});
import { StyleSheet } from 'react-native';

// Paleta e estilos compartilhados por todas as telas do APP Scholar,
// para manter o mesmo design da Home em todo o app.
export const cores = {
  azulEscuro: '#1565C0',
  azulPrincipal: '#1976D2',
  azulClaro: '#E3F2FD',
  fundo: '#FFFFFF',
  textoSecundario: '#666',
  textoDetalhe: '#444',
  borda: '#CCC',
  inputBg: '#F9F9F9',
  vazio: '#999',
};

export const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: cores.fundo,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  containerLista: {
    flex: 1,
    backgroundColor: cores.fundo,
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: cores.azulEscuro,
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 16,
    color: cores.textoSecundario,
    marginBottom: 30,
  },
  form: {
    width: '85%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: cores.inputBg,
  },
  inputMultilinha: {
    height: 90,
    textAlignVertical: 'top',
  },
  listaOpcoes: {
    marginTop: 6,
  },
  listaOpcoesLinha: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
    gap: 8,
  },
  opcao: {
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    backgroundColor: cores.inputBg,
  },
  opcaoPill: {
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: cores.inputBg,
  },
  opcaoSelecionada: {
    borderColor: cores.azulPrincipal,
    backgroundColor: cores.azulClaro,
  },
  textoOpcao: {
    fontSize: 14,
    color: '#333',
  },
  textoOpcaoPill: {
    fontSize: 13,
    color: '#333',
  },
  textoOpcaoSelecionada: {
    color: cores.azulEscuro,
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: cores.azulPrincipal,
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  botaoSecundario: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  textoBotaoSecundario: {
    fontSize: 16,
    color: cores.azulPrincipal,
  },
  busca: {
    width: '100%',
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: cores.inputBg,
    marginBottom: 15,
  },
  card: {
    width: '100%',
    backgroundColor: cores.azulClaro,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  nomeCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.azulEscuro,
    marginBottom: 2,
  },
  detalheCard: {
    fontSize: 14,
    color: cores.textoDetalhe,
  },
  listaVazia: {
    marginTop: 30,
    fontSize: 16,
    color: cores.vazio,
    textAlign: 'center',
  },
});

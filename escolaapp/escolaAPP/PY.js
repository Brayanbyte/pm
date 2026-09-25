import os, json

ROOT = "/home/claude/appscholar"
API = f"{ROOT}/api/app_scholar_api"
APP = f"{ROOT}/app/escolaAPP"
os.makedirs(API, exist_ok=True)
os.makedirs(APP, exist_ok=True)
os.makedirs(f"{ROOT}/app/services", exist_ok=True)

# ---------------------------------------------------------------
# Metadados das entidades, 100% fiéis às colunas do dump escola.sql
# type: text | number | decimal | date | textarea
# ---------------------------------------------------------------
ENTIDADES = [
    dict(key="aluno", table="alunos", pk="id_alunos", sing="Aluno", plural="Alunos",
         titulo="Aluno", titulo_plural="Alunos",
         fields=[
             ("nome", "Nome completo", "text", True),
             ("cpf", "CPF", "text", True),
             ("data_de_nascimento", "Data de nascimento", "date", False),
             ("email", "E-mail", "text", False),
             ("id_curso", "ID do curso", "number", False),
         ]),
    dict(key="professor", table="professores", pk="id_professores", sing="Professor", plural="Professores",
         titulo="Professor", titulo_plural="Professores",
         fields=[
             ("nome", "Nome completo", "text", True),
             ("cpf", "CPF", "text", True),
             ("id_disciplinas", "ID da disciplina", "number", False),
         ]),
    dict(key="turma", table="turmas", pk="id_turmas", sing="Turma", plural="Turmas",
         titulo="Turma", titulo_plural="Turmas",
         fields=[
             ("id_cursos", "ID do curso", "number", True),
             ("ano_letivo", "Ano letivo", "text", True),
             ("turno", "Turno", "text", False),
             ("sala", "Sala", "text", False),
         ]),
    dict(key="curso", table="cursos", pk="id_curso", sing="Curso", plural="Cursos",
         titulo="Curso", titulo_plural="Cursos",
         fields=[
             ("nome_do_curso", "Nome do curso", "text", True),
             ("carga_horaria", "Carga horária (horas)", "decimal", False),
             ("duracao", "Duração", "text", False),
             ("descricao", "Descrição", "textarea", False),
         ]),
    dict(key="disciplina", table="disciplinas", pk="id_disciplinas", sing="Disciplina", plural="Disciplinas",
         titulo="Disciplina", titulo_plural="Disciplinas",
         fields=[
             ("nome_disciplina", "Nome da disciplina", "text", True),
             ("id_cursos", "ID do curso", "number", False),
             ("id_professores", "ID do professor", "number", False),
             ("carga_horaria", "Carga horária (horas)", "decimal", False),
         ]),
    dict(key="matricula", table="matricula", pk="id_matricula", sing="Matricula", plural="Matriculas",
         titulo="Matrícula", titulo_plural="Matrículas",
         fields=[
             ("id_alunos", "ID do aluno", "number", True),
             ("id_turmas", "ID da turma", "number", True),
             ("data_matricula", "Data da matrícula", "date", False),
             ("situacao_da_matricula", "Situação (ATIVA/SUSPENSA/CANCELADA/TRANSFERIDA/INATIVA)", "text", False),
         ]),
    dict(key="responsavel", table="responsaveis", pk="id_responsaveis", sing="Responsavel", plural="Responsaveis",
         titulo="Responsável", titulo_plural="Responsáveis",
         fields=[
             ("nome", "Nome completo", "text", True),
             ("cpf", "CPF", "text", True),
             ("parentesco", "Parentesco", "text", False),
         ]),
    dict(key="avaliacao", table="avaliacoes", pk="id_avaliacoes", sing="Avaliacao", plural="Avaliacoes",
         titulo="Avaliação", titulo_plural="Avaliações",
         fields=[
             ("id_disciplinas", "ID da disciplina", "number", True),
             ("descricao", "Descrição", "text", True),
             ("data_da_avaliacao", "Data da avaliação", "date", False),
             ("valor_da_avaliacao", "Valor da avaliação", "decimal", False),
         ]),
    dict(key="coordenador", table="coordenadores", pk="id_coordenador", sing="Coordenador", plural="Coordenadores",
         titulo="Coordenador", titulo_plural="Coordenadores",
         fields=[
             ("id_cursos", "ID do curso", "number", False),
             ("nome", "Nome completo", "text", True),
             ("cpf", "CPF", "text", True),
         ]),
    dict(key="boletim", table="boletins", pk="id_boletim", sing="Boletim", plural="Boletins",
         titulo="Boletim", titulo_plural="Boletins",
         fields=[
             ("media_final", "Média final", "decimal", False),
             ("situacao", "Situação", "text", False),
             ("frequencia", "Frequência (%)", "text", False),
             ("id_disciplina", "ID da disciplina", "number", True),
             ("id_alunos", "ID do aluno", "number", True),
         ]),
]

with open("/home/claude/entidades.json", "w", encoding="utf-8") as f:
    json.dump(ENTIDADES, f, ensure_ascii=False, indent=2)

print("OK - metadados gerados:", len(ENTIDADES), "entidades")
// ============ Dados iniciais (seed) ============
// Espelha os funcionários e EPIs embutidos no index.html.

const SEED_EMPLOYEES = [
  { id: 1, nome: 'JOAO DA SILVA', matricula: '100001', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL PLENO', admissao: '2024-07-01', telefone: '' },
  { id: 2, nome: 'MARIA SANTOS', matricula: '100002', cargo: 'ASSISTENTE ADMINISTRATIVO', admissao: '2025-11-11', telefone: '' },
  { id: 3, nome: 'PEDRO OLIVEIRA', matricula: '100003', cargo: 'TECNICO DE SEGURANCA NO TRABALHO', admissao: '2026-06-01', telefone: '' },
  { id: 4, nome: 'ANA SOUZA', matricula: '100004', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL SÊNIOR', admissao: '2024-12-12', telefone: '' },
  { id: 5, nome: 'CARLOS FERREIRA', matricula: '100005', cargo: 'ANALISTA DE REDES JR II', admissao: '2021-06-21', telefone: '' },
  { id: 6, nome: 'LUCIA LIMA', matricula: '100006', cargo: 'ANALISTA DE REDE SENIOR II', admissao: '2018-06-15', telefone: '' },
  { id: 7, nome: 'ROBERTO ALMEIDA', matricula: '100007', cargo: 'TECNICO DE TELECOMUNICAÇÕES', admissao: '2021-12-03', telefone: '' },
  { id: 8, nome: 'PATRICIA COSTA', matricula: '100008', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL SENIOR', admissao: '2026-03-30', telefone: '' },
  { id: 9, nome: 'FERNANDO MARTINS', matricula: '100009', cargo: 'TECNICO DE CABEAMENTO', admissao: '2024-08-01', telefone: '' },
  { id: 10, nome: 'JULIANA PEREIRA', matricula: '100010', cargo: 'TÉCNICO DE REDE DE TELECOMUNICAÇÕES JR II', admissao: '2012-11-12', telefone: '' },
  { id: 11, nome: 'GUSTAVO RODRIGUES', matricula: '100011', cargo: 'TECNICO DE FIBRA OPTICA', admissao: '2026-05-19', telefone: '' },
  { id: 12, nome: 'CAMILA BARBOSA', matricula: '100012', cargo: 'TÉCNICO DE FIBRA ÓPTICA', admissao: '2018-10-23', telefone: '' },
  { id: 13, nome: 'RAFAEL ARAUJO', matricula: '100013', cargo: 'TÉCNICO DE FIBRA ÓTICA', admissao: '2021-06-21', telefone: '' },
  { id: 14, nome: 'BEATRIZ CORREIA', matricula: '100014', cargo: 'TECNICO DE AUTOMAÇÃO INDUSTRIAL PLENO', admissao: '2024-12-12', telefone: '' },
  { id: 15, nome: 'THIAGO NUNES', matricula: '100015', cargo: 'TÉCNICO DE AUTOMAÇÃO INDUSTRIAL SÊNIOR', admissao: '2024-11-01', telefone: '' },
  { id: 16, nome: 'DANIELA MOREIRA', matricula: '100016', cargo: 'ANALISTA DE REDES JR II', admissao: '2024-05-08', telefone: '' },
  { id: 17, nome: 'LEONARDO CARDOSO', matricula: '100017', cargo: 'TECNICO EM AUTOMAÇÃO INDUSTRIAL PLENO', admissao: '2026-06-08', telefone: '' },
  { id: 18, nome: 'AMANDA RIBEIRO', matricula: '100018', cargo: 'TECNICO DE AUTOMAÇÃO INDUSTRIAL SENIOR', admissao: '2021-03-22', telefone: '' },
  { id: 19, nome: 'BRUNO CARVALHO', matricula: '100019', cargo: 'TÉCNICO DE AUTOMAÇÃO INDUSTRIAL PLENO', admissao: '2022-03-14', telefone: '' },
  { id: 20, nome: 'TATIANA MELO', matricula: '100020', cargo: 'COORDENADOR TECNICO DE TI', admissao: '2013-01-02', telefone: '' },
  { id: 21, nome: 'MARCOS GOMES', matricula: '100021', cargo: 'ANALISTA DE REDES SR II', admissao: '2025-05-14', telefone: '' },
  { id: 22, nome: 'PRISCILA TEIXEIRA', matricula: '100022', cargo: 'TÉCNICO DE AUTOMAÇÃO INDUSTRIAL PLENO', admissao: '2021-03-19', telefone: '' },
  { id: 23, nome: 'ALEXANDRE DIAS', matricula: '100023', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL PLENO', admissao: '2025-12-12', telefone: '' },
  { id: 24, nome: 'VANESSA CASTRO', matricula: '100024', cargo: 'TECNICO EM SEGURANÇA DO TRABALHO', admissao: '2024-10-11', telefone: '' },
  { id: 25, nome: 'DIEGO NASCIMENTO', matricula: '100025', cargo: 'ANALISTA DE REDES JR II', admissao: '2025-07-08', telefone: '' },
  { id: 26, nome: 'RENATA SILVEIRA', matricula: '100026', cargo: 'COORDENADOR DE TECNICO', admissao: '2020-10-01', telefone: '' },
  { id: 27, nome: 'FABIO TEIXEIRA', matricula: '100027', cargo: 'TECNICO DE CABEAMENTO', admissao: '2025-09-18', telefone: '' },
  { id: 28, nome: 'ISABELA DUARTE', matricula: '100028', cargo: 'ANALISTA DE REDES PLENO', admissao: '2023-09-20', telefone: '' },
  { id: 29, nome: 'ANDRE LOPES', matricula: '100029', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL SÊNIOR', admissao: '2024-11-01', telefone: '' },
  { id: 30, nome: 'CARLA MONTEIRO', matricula: '100030', cargo: 'TÉCNICO DE FIBRA ÓTICA', admissao: '2022-02-02', telefone: '' },
  { id: 31, nome: 'MURILO BATISTA', matricula: '100031', cargo: 'TECNICO DE CABEAMENTO', admissao: '2026-03-18', telefone: '' },
  { id: 32, nome: 'NATALIA FREITAS', matricula: '100032', cargo: 'ASSISTENTE ADMINISTRATIVO', admissao: '2023-10-02', telefone: '' },
  { id: 33, nome: 'RICARDO PINTO', matricula: '100033', cargo: 'TECNICO DE AUTOMAÇÃO INDUSTRIAL SENIOR', admissao: '2025-09-09', telefone: '' },
  { id: 34, nome: 'LARISSA CAMPOS', matricula: '100034', cargo: 'TÉCNICO DE AUTOMAÇÃO INDUSTRIAL PLENO', admissao: '2024-12-19', telefone: '' },
  { id: 35, nome: 'HENRIQUE RAMOS', matricula: '100035', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL SÊNIOR', admissao: '2026-03-13', telefone: '' },
  { id: 36, nome: 'SANDRA MACEDO', matricula: '100036', cargo: 'ANALISTA DE REDE SR II', admissao: '2021-03-18', telefone: '' },
  { id: 37, nome: 'DANIEL FERNANDES', matricula: '100037', cargo: 'TECNICO DE AUTOMACAO INDUSTRIAL SÊNIOR', admissao: '2024-06-21', telefone: '' },
  { id: 38, nome: 'VIVIANE ARAUJO', matricula: '100038', cargo: 'ANALISTA DE REDE SENIOR', admissao: '2024-04-15', telefone: '' }
];

const SEED_EPIS = [
  { id: 1, nome: 'Capacete de Segurança Classe B 3M', ca: '12345', caVal: '2028-06-30', tamanhos: ['Único'], estoque: { 'Único': 30 }, renovacaoDias: null },
  { id: 2, nome: 'Abafador Concha Acuplastic 3M', ca: '34567', caVal: '2027-12-15', tamanhos: ['Único'], estoque: { 'Único': 30 }, renovacaoDias: null },
  { id: 3, nome: 'Óculos de Segurança Lente Incolor', ca: '45678', caVal: '2027-11-05', tamanhos: ['Único'], estoque: { 'Único': 50 }, renovacaoDias: null },
  { id: 4, nome: 'Botina Manobreira Metatarso Composite', ca: '56789', caVal: '2027-09-20', tamanhos: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'], estoque: { '36': 3, '37': 4, '38': 5, '39': 6, '40': 7, '41': 6, '42': 5, '43': 4, '44': 3, '45': 2 }, renovacaoDias: null },
  { id: 5, nome: 'Camisa Retardante a Chamas ATPV', ca: '67890', caVal: '2027-08-22', tamanhos: ['P', 'M', 'G', 'GG', 'XG'], estoque: { P: 10, M: 15, G: 12, GG: 8, XG: 5 }, renovacaoDias: null },
  { id: 6, nome: 'Calça Retardante a Chamas ATPV', ca: '78901', caVal: '2027-08-22', tamanhos: ['P', 'M', 'G', 'GG', 'XG'], estoque: { P: 10, M: 15, G: 12, GG: 8, XG: 5 }, renovacaoDias: null },
  { id: 7, nome: 'Luva Anti-corte EPI', ca: '89012', caVal: '2028-04-18', tamanhos: ['P', 'M', 'G', 'GG'], estoque: { P: 20, M: 25, G: 20, GG: 10 }, renovacaoDias: null },
  { id: 8, nome: 'Luva Anti-impacto', ca: '90123', caVal: '2028-03-10', tamanhos: ['P', 'M', 'G', 'GG'], estoque: { P: 10, M: 12, G: 10, GG: 6 }, renovacaoDias: null },
  { id: 9, nome: 'Touca Balaclava Hercules', ca: '90234', caVal: '2028-05-01', tamanhos: ['Único'], estoque: { 'Único': 20 }, renovacaoDias: null }
];

module.exports = { SEED_EMPLOYEES, SEED_EPIS };
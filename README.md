# App EPI - Controle de Entrega de Equipamentos de Proteção Individual

Sistema completo para gerenciamento de entrega de EPIs (Equipamentos de Proteção Individual) para colaboradores. Inclui frontend PWA offline-ready e backend REST API com autenticação.

## Funcionalidades

- **Cadastro de Funcionários** - Gerenciar colaboradores com dados básicos
- **Cadastro de EPIs** - Controle de estoque, validade de CA e tamanhos
- **Entrega de EPIs** - Registro completo com assinatura digital (dupla)
- **QR Code** - Geração de QR Code para ficha do colaborador + leitura por câmera
- **Histórico** - Consulta de todas as entregas realizadas
- **Backup/Restore** - Exportação e importação de dados em JSON
- **Tema Escuro** - Alternância entre tema claro e escuro
- **PDF** - Geração de ficha de entrega em PDF
- **WhatsApp** - Envio rápido de fichas via WhatsApp
- **Modo Offline** - Funciona sem conexão com a internet (PWA)
- **Autenticação** - Login com token seguro (crypto.randomBytes) e rate limiting
- **Backups Automáticos** - Backups diários com retenção configurável

## Tecnologias

### Frontend
- HTML5 / CSS3 / JavaScript vanilla
- PWA (Service Worker + Manifest)
- jsPDF (geração de PDF)
- QRCode.js (geração de QR Code)

### Backend
- Node.js + Express
- SQLite (better-sqlite3)
- Autenticação via token seguro (scrypt + crypto.randomBytes)
- Rate limiting

## Pré-requisitos

- [Node.js](https://nodejs.org/) v18+ (recomendado v20+)
- npm

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/SEU-USER/app-epi.git
cd app-epi

# Instalar dependências do servidor
cd server
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env e defina sua senha:
# ADMIN_PASSWORD=sua_senha_segura

# Iniciar o servidor
npm start
```

Acesse http://localhost:3000 no navegador.

## Configuração

Edite o arquivo `server/.env` para personalizar:

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `PORT` | Porta do servidor | 3000 |
| `ADMIN_PASSWORD` | Senha do admin (obrigatório) | - |
| `ALLOWED_ORIGIN` | Domínio CORS permitido | http://localhost:3000 |
| `TOKEN_TTL_MIN` | Validade do token (min) | 720 |
| `BACKUP_INTERVAL_MIN` | Intervalo entre backups (min) | 1440 |
| `BACKUP_RETENTION` | Quantidade de backups mantidos | 10 |

## Uso

1. Acesse http://localhost:3000
2. Faça login com `admin` e a senha definida no `.env`
3. Cadastre funcionários e EPIs
4. Registre entregas com assinatura digital
5. Gere fichas em PDF ou envie via WhatsApp

## Dados Reais de Funcionários (Opcional)

Para usar seus funcionários reais em vez dos dados de exemplo:

```bash
# Copie o template
cp server/data/real-employees.example.json server/data/real-employees.json

# Edite o arquivo com seus dados reais
# O arquivo NÃO é enviado ao GitHub (excluído pelo .gitignore)
```

**Importante:** Delete o banco atual antes de importar dados reais:
```bash
rm -rf server/data/app.db*
npm start
```

## Estrutura do Projeto

```
app_epi/
├── index.html          # Página principal
├── app.js              # Lógica do frontend
├── styles.css          # Estilos CSS
├── sw.js               # Service Worker (offline)
├── manifest.webmanifest # Manifest PWA
├── logo.png            # Logo do app
├── server/
│   ├── server.js       # Servidor Express
│   ├── db.js           # Banco de dados SQLite
│   ├── auth.js         # Autenticação (token + scrypt)
│   ├── backup.js       # Sistema de backup
│   ├── seed.js         # Dados iniciais (EPIs)
│   ├── .env.example    # Template de configuração
│   └── routes/
│       ├── api.js      # Rotas gerais
│       ├── authRoutes.js # Rotas de autenticação
│       ├── employees.js # Rotas de funcionários
│       ├── epis.js     # Rotas de EPIs
│       └── public.js   # Rotas públicas
└── package.json
```

## Licença

ISC

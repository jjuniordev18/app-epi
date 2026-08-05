# SondaGuard - Controle de Entrega de Equipamentos de Proteção Individual

Sistema completo para gerenciamento de entrega de EPIs (Equipamentos de Proteção Individual) para colaboradores. PWA offline-first com sincronização em tempo real via Firebase Firestore.

## Acesse

**https://jjuniordev18.github.io/safeguard-epi/**

## Funcionalidades

- **Cadastro de Funcionários** - Gerenciar colaboradores com dados básicos
- **Cadastro de EPIs** - Controle de estoque, validade de CA e tamanhos
- **Entrega de EPIs** - Registro completo com assinatura digital (dupla) ou digitação
- **QR Code** - Geração de QR Code para ficha do colaborador + leitura por câmera
- **Histórico** - Consulta de todas as entregas realizadas com exclusão
- **Backup/Restore** - Exportação e importação de dados em JSON
- **Tema Escuro** - Alternância entre tema claro e escuro
- **PDF** - Geração de ficha de entrega formatada em PDF
- **WhatsApp** - Envio rápido de fichas via WhatsApp
- **Modo Offline** - Funciona sem conexão com a internet (PWA)
- **Sincronização em Tempo Real** - Dados sincronizados automaticamente entre dispositivos via Firestore
- **Auth Anônima** - Acesso sem login, banco protegido por rules

## Tecnologias

- HTML5 / CSS3 / JavaScript vanilla
- PWA (Service Worker + Manifest)
- Firebase Firestore (bananco de dados em tempo real)
- Firebase Authentication (auth anônima)
- jsPDF (geração de PDF)
- QRCode.js (geração de QR Code)
- GitHub Pages (hospedagem)

## Uso

1. Acesse https://jjuniordev18.github.io/safeguard-epi/
2. Cadastre funcionários e EPIs
3. Registre entregas com assinatura digital ou digitação do nome
4. Gere fichas em PDF ou envie via WhatsApp

## Estrutura do Projeto

```
safeguard-epi/
├── index.html              # Página principal
├── app.js                  # Lógica do frontend + Firebase
├── styles.css              # Estilos CSS
├── sw.js                   # Service Worker (offline/cache)
├── manifest.webmanifest    # Manifest PWA
├── firebase-config.js      # Configuração Firebase
├── logo.png                # Logo do app
└── server/                 # Backend legado (não utilizado)
```

## Deploy

O app é hospedado automaticamente no GitHub Pages a cada push na branch `main`.

## Licença

ISC

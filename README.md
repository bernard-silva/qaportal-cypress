# QA Portal - Automação de Testes com Cypress

Projeto de automação de testes E2E desenvolvido com Cypress utilizando Page Objects, Fixtures e Variáveis de Ambiente.

---

## Pré-requisitos

### Node.js

Verifique se o Node.js está instalado:

```bash
node -v
```

Verifique se o NPM está instalado:

```bash
npm -v
```

Caso não possua o Node.js instalado, faça o download em:

https://nodejs.org

---

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd <nome-do-projeto>
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env` na raiz do projeto:

```env
BASE_URL=

ADMIN_EMAIL=
ADMIN_PASSWORD=

INVALID_EMAIL=
WRONG_PASSWORD=
WEAK_PASSWORD=
WRONG_EMAIL=

LOCKED_EMAIL=
ERROR_EMAIL=
```

---

## Execução

### Abrir Cypress em modo interface gráfica

```bash
npx cypress open
```

---

### Executar todos os testes

```bash
npx cypress run
```

---

### Executar um teste específico

```bash
npx cypress run --spec "cypress/e2e/login/login-success.cy.js"
```

---

### Executar todos os testes de Login

```bash
npx cypress run --spec "cypress/e2e/login/*.cy.js"
```

---

### Executar todos os testes de Recuperação de Senha

```bash
npx cypress run --spec "cypress/e2e/forgot-password/*.cy.js"
```

---

### Executar todos os testes de Dashboard

```bash
npx cypress run --spec "cypress/e2e/dashboard/*.cy.js"
```

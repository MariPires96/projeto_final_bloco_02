# 💊 GeraSaúde - Sistema de E-commerce Farmacêutico

O **GeraSaúde** é um sistema de Comércio Eletrônico desenvolvido para modernizar a gestão de uma farmácia, focando na organização eficiente de produtos e categorias. A aplicação utiliza o framework **NestJS** e foi estruturada seguindo as melhores práticas de desenvolvimento back-end, incluindo um CRUD completo para o gerenciamento de categorias.

## 🎯 Objetivo do Projeto
Oferecer uma solução robusta para o setor farmacêutico que facilite o controle de estoque e a categorização de produtos, garantindo agilidade no atendimento e organização dos dados.

## 🚀 Tecnologias Utilizadas
* **NestJS**: Framework Node.js progressivo para a construção de aplicações escaláveis.
* **TypeScript**: Adiciona tipagem estática ao JavaScript, aumentando a segurança do código.
* **TypeORM**: ORM para integração simplificada com o Banco de Dados.
* **MySQL/PostgreSQL**: (Ajuste conforme o seu banco de dados).
* **Insomnia/Postman**: Para testes e validação das rotas da API.

## 🛠️ Funcionalidades (Recurso Categoria)
O sistema permite a gestão completa das categorias de produtos (ex: Medicamentos, Higiene, Cosméticos) através dos seguintes endpoints:
* ✅ **Listar todas as categorias** (GET `/categorias`)
* ✅ **Consultar por ID** (GET `/categorias/:id`)
* ✅ **Consultar por Descrição** (GET `/categorias/descricao/:descricao`)
* ✅ **Criar Categoria** (POST `/categorias`)
* ✅ **Atualizar Categoria** (PUT `/categorias`)
* ✅ **Deletar Categoria** (DELETE `/categorias/:id`)

## 📂 Estrutura de Desenvolvimento
O projeto foi dividido em marcos lógicos para organização do fluxo de trabalho:
1.  **Configuração:** Setup do ambiente NestJS e conexão com o banco de dados.
2.  **Módulo Categoria:** Implementação da Entidade, Repositório, Serviço e Controlador.

## 🔧 Como Executar
1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/gerasaude-ecommerce.git](https://github.com/seu-usuario/gerasaude-ecommerce.git)
    ```
2.  **Instale as dependências:**
    ```bash
3.  **Inicie o servidor:**
    ```bash
    npm run start:dev
    ```

---
*Este projeto integra a avaliação de Performance Goal Check - Bloco 02 da Generation Brasil.*
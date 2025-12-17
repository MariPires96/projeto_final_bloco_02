# 🏥 Projeto GeraSaúde - Documentação da API

Este módulo é responsável pelo gerenciamento completo do catálogo da farmácia **GeraSaúde**. A API permite a organização de categorias e o controle rigoroso de produtos, marcas e níveis de estoque através de um sistema robusto e relacionado.

---

## 🏗️ Estrutura das Entidades (Models)

As entidades foram mapeadas utilizando **TypeORM** e validadas com **Class Validator**, garantindo a integridade dos dados desde a entrada até a persistência no banco de dados.



### 1. Categoria (`tb_categorias`)
Entidade mestre que agrupa os produtos e gerencia a disponibilidade de grupos inteiros no sistema.

| Atributo | Tipo | Decoradores / Validação | Descrição |
| :--- | :--- | :--- | :--- |
| **id** | `number` | `@PrimaryGeneratedColumn()` | Identificador único gerado automaticamente. |
| **nome** | `string` | `@IsNotEmpty()` (L: 100) | Nome da categoria (ex: Medicamentos). |
| **descricao**| `string` | `@IsNotEmpty()` (L: 1000) | Explicação detalhada da categoria. |
| **status** | `boolean` | `@Column({ default: true })` | Define se a categoria está ativa. |
| **data** | `Date` | `@UpdateDateColumn()` | Timestamp da última atualização. |
| **produto** | `Rel` | `@OneToMany` | Relacionamento com a lista de produtos. |

### 2. Produto (`tb_produtos`)
Entidade detalhada que armazena os dados comerciais e técnicos de cada item.

| Atributo | Tipo | Decoradores / Validação | Descrição |
| :--- | :--- | :--- | :--- |
| **id** | `number` | `@PrimaryGeneratedColumn()` | Identificador único do produto. |
| **titulo** | `string` | `@IsNotEmpty()` (L: 255) | Título comercial do item. |
| **marca** | `string` | `@IsNotEmpty()` (L: 255) | Fabricante ou Marca do produto. |
| **preco** | `number` | `decimal (10,2)` | Valor unitário com precisão decimal. |
| **quantidade** | `number` | `int` | Saldo físico em estoque. |
| **foto** | `string` | `@IsOptional()`, `@IsUrl()` | Link da imagem (L: 5000). |
| **categoria** | `Rel` | `@ManyToOne` (CASCADE) | Categoria à qual o produto pertence. |

---

## 🛠️ Regras de Negócio e Métodos do CRUD

O Service e o Controller foram implementados com as seguintes lógicas:

### 🔍 Métodos de Listagem e Busca
* **`findAll`**: Retorna todos os registros. No recurso de Produtos, os dados da Categoria são carregados automaticamente.
* **`findById`**: Localiza um registro específico por ID. Retorna erro `404 (Not Found)` caso não exista.
* **`Busca Textual`**: 
    * **Categorias**: Busca parcial pelo campo `nome`.
    * **Produtos**: Busca parcial pelos campos `titulo` ou `marca`.

### ⚙️ Persistência e Integridade
* **Relacionamento Bidirecional**: As entidades estão conectadas para permitir consultas cruzadas eficientes.
* **Exclusão em Cascata (`onDelete: "CASCADE"`)**: Definido na entidade Produto. Ao excluir uma categoria, todos os produtos vinculados a ela são removidos para evitar inconsistência de dados (registros órfãos).
* **Data Automática**: O campo `data` em Categoria utiliza `@UpdateDateColumn()`, atualizando-se sozinho a cada modificação.

---

## 📥 Exemplos de JSON (Payloads)

### Cadastro de Categoria
```json
{
  "nome": "Higiene Pessoal",
  "descricao": "Produtos para cuidados diários, banho e perfumaria.",
  "status": true
}
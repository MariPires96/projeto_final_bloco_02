# 🏥 Projeto GeraSaúde - Recurso Categoria

Este módulo é responsável pelo gerenciamento das categorias de produtos da farmácia **GeraSaúde**. Através deste recurso, é possível organizar o catálogo e controlar a visibilidade de grupos de produtos.

---

## 🏗️ Estrutura da Entidade (Model)

A entidade foi mapeada utilizando **TypeORM** para a tabela `tb_categorias`, garantindo a integridade dos dados e validação técnica.

| Atributo | Tipo | Validação | Descrição |
| :--- | :--- | :--- | :--- |
| **id** | `number` | Primary Key | Identificador único gerado automaticamente. |
| **nome** | `string` | Not Empty | Nome da categoria (Máx: 100 caracteres). |
| **descricao**| `string` | Not Empty | Descrição detalhada (Máx: 1000 caracteres). |
| **status** | `boolean` | Default: `true` | Indica se a categoria está ativa ou inativa. |
| **data** | `Date` | UpdateDate | Armazena automaticamente a data da última alteração. |

---

## 🛠️ Métodos do CRUD

O Service e o Controller foram implementados com os seguintes métodos de manipulação de dados:

### 🔍 Métodos de Listagem e Busca
* **`findAll`**: Retorna todas as categorias registradas no sistema.
* **`findById`**: Localiza uma categoria específica utilizando o `id`. Caso não encontre, retorna erro `404 (Not Found)`.
* **`findByAllNome`**: Realiza uma busca textual por categorias que contenham o nome pesquisado (ignora maiúsculas e minúsculas).
* **`findByStatus`**: Filtra os registros com base no campo booleano (útil para listar apenas categorias ativas no Front-end).

### ⚙️ Métodos de Persistência
* **`criar`**: Registra uma nova categoria no banco de dados. Graças ao `@Column({ default: true })`, novas categorias nascem como ativas por padrão.
* **`atualizar`**: Altera os dados de uma categoria existente. O método valida a existência do ID antes de salvar as mudanças.
* **`deletar`**: Remove definitivamente a categoria do sistema. Possui validação para garantir que o registro existe antes da exclusão.

---

## 📥 Exemplo de JSON para Cadastro
```json
{
  "nome": "Suplementos Alimentares",
  "descricao": "Vitaminas, Whey Protein e complementos nutricionais.",
  "status": true
}
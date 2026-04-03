# Econverse - Frontend E-commerce

Frontend de um e-commerce desenvolvido como teste para a Econverse. A aplicacao possui catalogo de produtos, carrinho de compras, sistema de autenticacao e perfil de usuario, com persistencia de dados via Supabase.

## Funcionalidades

- **Catalogo de produtos** com carrossel e filtro por categorias
- **Modal de produto** com controle de quantidade
- **Carrinho de compras** persistido no banco de dados
- **Autenticacao** com cadastro e login via Supabase Auth
- **Perfil do usuario** com edicao de dados pessoais e endereco
- **Protecao de rotas** para paginas privadas (perfil, favoritos, carrinho)
- **Newsletter** com formulario de inscricao
- **Layout responsivo** para desktop, tablet e mobile

## Tecnologias

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estatica
- **Vite** - Build tool
- **React Router DOM** - Roteamento SPA
- **Zustand** - Gerenciamento de estado
- **Supabase** - Autenticacao e banco de dados
- **Sass** - Pre-processador CSS
- **React Toastify** - Notificacoes

## Como rodar o projeto

### Pre-requisitos

- Node.js 18+
- npm
- Conta no [Supabase](https://supabase.com) com um projeto criado

### Instalacao

```bash
# Clone o repositorio
git clone https://github.com/HLima02/Encoverse-frontend-teste.git

# Acesse a pasta do projeto
cd Encoverse-frontend-teste

# Instale as dependencias
npm install
```

### Configuracao do Supabase

1. Crie um arquivo `.env.local` na raiz do projeto:

```
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-anon-key
```

2. No SQL Editor do Supabase, execute as tabelas:

```sql
-- Tabela de perfis
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  nome text,
  email text,
  telefone text default '',
  rua text default '',
  bairro text default '',
  cidade text default '',
  estado text default '',
  cep text default '',
  created_at timestamp with time zone default now()
);

alter table profiles enable row level security;

create policy "Users can view own profile" on profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles
  for update using (auth.uid() = id);
create policy "Users can insert own profile" on profiles
  for insert with check (auth.uid() = id);

-- Tabela do carrinho
create table cart_items (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  name text not null,
  image text not null,
  price numeric not null,
  quantity integer not null default 1,
  created_at timestamp with time zone default now()
);

alter table cart_items enable row level security;

create policy "Users can view own cart" on cart_items
  for select using (auth.uid() = user_id);
create policy "Users can insert own cart" on cart_items
  for insert with check (auth.uid() = user_id);
create policy "Users can update own cart" on cart_items
  for update using (auth.uid() = user_id);
create policy "Users can delete own cart" on cart_items
  for delete using (auth.uid() = user_id);
```

3. Em **Authentication > Providers > Email**, desative "Confirm email" para cadastro sem verificacao.

### Executar

```bash
# Modo desenvolvimento
npm run dev

# Build de producao
npm run build

# Preview do build
npm run preview
```

O projeto estara disponivel em `http://localhost:5173`.

# Funcionalidades

## Recuperação de senha

### Requisitos Funcionais

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha

### Requisitos Não Funcionais

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio dos e-mails deve acontecer em segundo plano (background job);

### Regras de Negócio

- O link enviado por e-mail para resetar a senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar a senha;

## Atualização do perfil

### Requisitos Funcionais

- O usuário deve poder atualizar seu nome, email e senha;

### Regras de Negócio

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar a senha, o usuário deve informar a senha antiga;
- Para atualizar a senha, o usuário precisa confirmar a nova senha;

## Painel do Prestador

### Requisitos Funcionais

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que ouver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

### Requisitos Não Funcionais

- Os agendamentos do prestador do dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

### Regras de Negócio

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

## Agendamento de serviços

### Requisitos Funcionais

- O usuário deve poder listar todos os prestadores de serviço cadastrado;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar os horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

### Requisitos Não Funcionais

- A listagem de prestadores deve ser armazenada em cache;

### Regras de Negócio

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis estre 8h e 18h (primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
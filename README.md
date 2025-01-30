# 🏢 Portaria Remota

![Sistema de Agendamento de Visitas](.src/preview/inicio.png)

## 📖 Sobre o Projeto

O **Portaria Remota** é uma plataforma web intuitiva e eficiente para o gerenciamento de visitas em condomínios, empresas e instituições. Ele permite aos usuários **cadastrar, editar e cancelar visitas**, além de oferecer recursos avançados como **filtros, ordenação, paginação e confirmações automáticas**.

Este projeto foi desenvolvido utilizando **React + Vite**, garantindo alto desempenho e uma experiência fluida para o usuário.

---

## 🚀 **Funcionalidades do Sistema**

### 📌 **1. Header, Footer e Tabela Principal**  
- **Header:** Contém o logotipo, navegação intuitiva e acesso rápido às principais funcionalidades.  
- **Footer:** Exibe links úteis, contatos e informações legais.  
- **Tabela Principal:** Exibe todas as visitas cadastradas de forma organizada, permitindo ações rápidas como edição, cancelamento e confirmação.  
- **Filtros e Pesquisa Avançada:** Filtragem de visitas por status (pendente, confirmada ou cancelada), proporcionando facilidade para encontrar e gerenciar visitas rapidamente.  
- **Paginação:** Implementação de paginação para facilitar a visualização de grandes volumes de visitas.  
- **Otimização de Performance:** Melhorias na eficiência do sistema ao carregar e renderizar os dados de forma otimizada.  

![Header e Footer](.src/preview/Inicio.png)
![Header e Footer](.src/preview/Tabela.png)
![Header e Footer](.src/preview/footer.png)

A **Tabela Principal** é o centro do sistema, onde os usuários podem visualizar todas as visitas agendadas de forma clara e organizada. Ela conta com:  

- **Colunas estruturadas**, permitindo a leitura eficiente dos dados.  
- **Botões interativos** para ações rápidas, como edição e cancelamento.  
- **Status das visitas** destacados por cores (Realizada, Não Realizada, Cancelada), facilitando a identificação visual.  
- **Ordenação automática por data**, garantindo uma exibição cronológica que melhora o planejamento e a gestão dos agendamentos.  
---


### 📌 **2. Interação Dinâmica com a Lista**
- Os botões de ação (**Editar, Confirmar, Excluir**) só aparecem quando o usuário passa o mouse sobre a linha correspondente.
- Interface **limpa e organizada** para evitar poluição visual.

![Interação Dinâmica](.src/preview/botoes.png)

---

### 📌 **3. Confirmação de Visitas**
- O botão de **"Confirmar Visita"** só fica disponível **5 minutos antes do horário agendado**.
- Ao tentar cancelar uma visita, um **modal de confirmação** é exibido para evitar erros acidentais.

![Confirmação de Visitas](.src/preview/botoes02.png)

---

### 📌 **4. Exclusão de Visitas**  
- O botão de **"Excluir Visita"** só fica disponível após a visita ter sido cancelada ou confirmada, evitando remoções acidentais.  
- Antes da exclusão definitiva, um **modal de confirmação** é exibido para garantir que o usuário realmente deseja remover a visita.  

![Exclusão de Visitas](.src/preview/botoes03.png)  

---

### 📌 **5. Gestão de Visitas**
- **Adicionar Visita:** Formulário para cadastro de visitas com campos essenciais.
- **Editar Visita:** Permite a edição de detalhes já cadastrados.

![Gestão de Visitas](.src/preview/AddVisita.png)
![Gestão de Visitas](.src/preview/AddVisitaTable.png)
![Gestão de Visitas](.src/preview/EditVisita.png)
![Gestão de Visitas](.src/preview/EditVisitaTable.png)

---

### 📌 **6. Validação de Agendamentos**
- O sistema impede o agendamento de **horários inválidos** ou **datas no passado**.
- Todas as informações inseridas são validadas para garantir **integridade e precisão dos dados**.

![Validação de Agendamentos](.src/preview/Validacao.png)

---

### 📌 **7. Modal de Confirmação da Exclusão**  
- Antes de excluir uma visita, um **modal de confirmação** é exibido, garantindo que o usuário tenha certeza da ação.  
- Esse modal evita exclusões acidentais, tornando o processo mais seguro e confiável.  
- O usuário pode optar por **cancelar a ação** ou **confirmar a exclusão**.  

![Modal de Confirmação da Exclusão](.src/preview/ModalConfirmacao.png)  

---

### 📌 **8. Feedback ao Excluir um Usuário**  
- Após a exclusão de uma visita, o sistema exibe um **feedback visual e textual** para informar o usuário sobre a ação realizada com sucesso.  
- Essa notificação pode ser exibida como um **alerta na tela** ou um **toast de sucesso**, garantindo uma experiência clara e informativa.  

![Feedback ao Excluir](.src/preview/Notification.png)  

---


## 🛠 **Tecnologias Utilizadas**
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- ⚛️ **React** + **Vite** (Framework Frontend)
- 🎨 **CSS** para estilização personalizada
- 📦 **LocalStorage** para persistência de dados no navegador
- 📍 **React Router** para navegação entre páginas

---

## 📥 **Instalação e Uso**
Para rodar o projeto localmente, siga as etapas abaixo:

### 1️⃣ **Clone este repositório**
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd nome-do-projeto
npm install
npm run dev

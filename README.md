👑 Samilla Maia – Estética Avançada

> Landing page institucional premium e responsiva desenvolvida para a clínica de estética avançada e integrativa **Samilla Maia**. O projeto foi desenhado com foco na experiência do usuário (UX), sofisticação visual e conversão de clientes.

---

## 📸 Prévia do Projeto

![Prévia do projeto](src/assets/homeReadmi.png)

O design do projeto utiliza uma paleta de cores de alto padrão (Preto, Tons Terrosos, Ouro e Off-White) combinando tipografias clássicas serifadas para títulos e elementos *clean* para leitura dinâmica.

* **Seção Hero imponente** com imagem de fundo tratada e otimizada com overlays.
* **Menu Dropdown (Hambúrguer) totalmente funcional** e otimizado para dispositivos móveis.
* **Seção institucional "Quem Somos"** com foco em conversão e escaneabilidade de tratamentos (Rejuvenescimento Íntimo, Estrias, etc.).
* **Rodapé Unificado** e integrado com APIs de redirecionamento direto para atendimento.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as melhores práticas do ecossistema front-end moderno:

* **[React](https://react.dev/)** – Biblioteca JavaScript para construção de interfaces modulares e reativas.
* **[Tailwind CSS](https://tailwindcss.com/)** – Framework utilitário de CSS para estilização rápida, responsiva e de alta performance.
* **[React Icons](https://react-icons.github.io/react-icons/)** – Biblioteca de ícones vetoriais integrados de forma limpa.
* **Google Fonts** – Fontes integradas (`Playfair Display` para elegância e `Montserrat`/`Sans-Serif` para legibilidade).

---

## 🛠️ Funcionalidades Implementadas

* [x] **Navegação Inteligente:** Navbar fixa (`fixed top-0`) com opacidade, efeito *blur* suave e transições de cor (`hover:text-gold`).
* [x] **Responsividade Total (Mobile-First):** Menu lateral responsivo controlado via estado do React (`useState`).
* [x] **Integração com WhatsApp API:** Botões de "Agendar Avaliação" que direcionam o usuário com mensagens automáticas e personalizadas.
* [x] **Clean Code:** Estruturação de listas utilizando grids do Tailwind (`grid-cols-2`) evitando redundâncias de código HTML.

---

## 💻 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação em sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/venilsongomes/clinica.git](https://github.com/venilsongomes/clinica.git)
```
2. **Navegue até o diretório do projeto:**
   ```bash
   cd clinica
   ```
3. **Instale as dependências:**
   ```bash
    npm install
    ```
4. **Inicie o servidor de desenvolvimento:**
   ```bash
    npm run dev 
    ou 
    yarn dev
    ```
    Abra http://localhost:5173 (ou a porta indicada no terminal) no seu navegador para ver o resultado.

---
## 📂 Estrutura do Projeto resumida

```
    src/
     ├── assets/          # Imagens de fundo, logos e ícones locais
     ├── components/      # Componentes reutilizáveis (Navegacao, Hero, QuemSomos, Footer)
     ├── App.jsx          # Componente principal unificador das seções
     ├── main.jsx         # Ponto de entrada do React
     └── index.css        # Configurações globais e diretivas do Tailwind
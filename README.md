# Hairday V2 💈

Sistema de agendamento para salão de beleza desenvolvido com React, TypeScript e Tailwind CSS.

## 📋 Sobre o Projeto

Hairday V2 é uma aplicação completa de gerenciamento de agendamentos para salões de beleza. O sistema permite criar, visualizar e remover agendamentos organizados por períodos do dia (manhã, tarde e noite), com validações e persistência de dados.

## ✨ Funcionalidades

- ✅ Criar agendamentos com nome do cliente, data e horário
- ✅ Visualizar agendamentos organizados por período (manhã, tarde, noite)
- ✅ Filtrar agendamentos por data selecionada
- ✅ Remover agendamentos
- ✅ Validação de nome (mínimo 3 caracteres)
- ✅ Bloqueio de datas passadas
- ✅ Horários ocupados ficam desabilitados
- ✅ Persistência de dados com localStorage
- ✅ Interface responsiva e moderna

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS v4** - Framework CSS utility-first
- **React Router v7** - Roteamento de páginas
- **React Datepicker** - Seletor de data
- **CVA (Class Variance Authority)** - Gerenciamento de variantes de componentes
- **date-fns** - Manipulação de datas

## 📁 Estrutura do Projeto

```
src/
├── assets/
│   ├── icons/          # Ícones SVG
│   └── images/         # Imagens e logo
├── components/         # Componentes de negócio
│   ├── appointment-form.tsx
│   └── period-card.tsx
├── core-components/    # Componentes base reutilizáveis
│   ├── button.tsx
│   ├── button-icon.tsx
│   ├── date-select.tsx
│   ├── icon.tsx
│   ├── input-text.tsx
│   ├── text.tsx
│   └── time-select.tsx
├── constants/          # Constantes da aplicação
│   └── schedule.ts
├── helpers/            # Funções auxiliares
│   ├── appointment-utils.ts
│   └── validation.ts
├── hooks/              # Hooks customizados
│   └── use-appointment.ts
├── models/             # Modelos de dados
│   └── appointment.ts
├── pages/              # Páginas da aplicação
│   ├── layout-main.tsx
│   ├── page-home.tsx
│   └── page-components.tsx
└── main.tsx
```

## 🎨 Sistema de Design

O projeto utiliza um sistema de componentes base construído com CVA (Class Variance Authority):

### Componentes Base

- **Text** - Textos com variantes de tamanho, peso e cor
- **Icon** - Wrapper para ícones SVG
- **Button** - Botões com estados (hover, disabled)
- **ButtonIcon** - Botões circulares apenas com ícone
- **InputText** - Campo de texto com suporte a ícone
- **DateSelect** - Seletor de data customizado
- **TimeSelection** - Botões de seleção de horário

### Componentes de Negócio

- **AppointmentForm** - Formulário completo de agendamento
- **PeriodCard** - Card mostrando agendamentos de um período

## 🔧 Instalação e Uso

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta
cd hairday-v2

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build de produção
npm run lint         # Executa linter
```

## 📚 Principais Funcionalidades Técnicas

### Hook useAppointments

Hook customizado que gerencia o estado dos agendamentos com localStorage:

```typescript
const { appointments, addAppointment, removeAppointment } = useAppointments();
```

### Filtros de Agendamentos

Funções helper para filtrar agendamentos:

- `filterByDate()` - Filtra por data
- `filterByPeriod()` - Filtra por período (manhã/tarde/noite)
- `isTimeSlotBooked()` - Verifica se horário está ocupado

### Validações

Sistema de validação completo:

- Nome do cliente (mínimo 3 caracteres)
- Data não pode ser no passado
- Horário obrigatório
- Horários já ocupados ficam desabilitados

### Períodos do Dia

Configuração centralizada dos períodos:

```typescript
SCHEDULE_PERIODS = {
  MORNING: { name: "Manhã", schedule: "09h-12h", times: [...] },
  AFTERNOON: { name: "Tarde", schedule: "13h-18h", times: [...] },
  EVENING: { name: "Noite", schedule: "19h-21h", times: [...] }
}
```

## 🎯 Padrões de Código

- **TypeScript** - Tipagem estrita em todos os arquivos
- **CVA** - Gerenciamento de variantes de componentes
- **Props Interface** - Interfaces explícitas para todos os componentes
- **Helpers** - Funções utilitárias separadas em módulos
- **Constants** - Valores fixos centralizados
- **Models** - Tipos de dados da aplicação

## 🌈 Design System

### Paleta de Cores

```css
/* Cores do Produto (Amarelos) */
--color-yellow-light: #dbc170
--color-yellow: #bb952e
--color-yellow-dark: #846f2e

/* Cores Base (Cinzas) */
--color-gray-100: #f5f4f5
--color-gray-200: #b2afb6
--color-gray-300: #98959d
--color-gray-400: #7a767f
--color-gray-500: #3e3c41
--color-gray-600: #2e2c30
--color-gray-700: #232225
--color-gray-800: #19181b
--color-gray-900: #050505

/* Cor de Feedback */
--color-red-500: #ef4444
```

### Tipografia

**Fonte:** Catamaran (Google Fonts)

**Tamanhos de Título:**
- `title-lg`: 24px / line-height: 32px
- `title-md`: 16px / line-height: 32px
- `title-sm`: 14px / line-height: 32px

**Tamanhos de Texto:**
- `text-md`: 16px / line-height: 20px
- `text-sm`: 14px / line-height: 20px

**Pesos:**
- Regular: 400
- Medium: 500
- Bold: 700

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.

---

Desenvolvido com ❤️ usando React + TypeScript + Tailwind CSS

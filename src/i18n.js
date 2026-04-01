import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                page: { title: "Portfolio | Matheus Conceicion" },
                header: {
                    logo: "Portfolio",
                    inicio: "Home",
                    sobre: "About",
                    habilidades: "Skills",
                    projetos: "Projects",
                    contato: "Contact",
                },
                hero: {
                    ola: "Hi, I'm Matheus!",
                    titulo: "SENAI Student",
                    subtitulo: "Web Developer",
                    descricao: "Learning to create incredible digital experiences through code.",
                    verProjetos: "See Projects",
                    contato: "Contact",
                },
                sobre: {
                    titulo: "About Me",
                    p1: "I'm a web development student at <strong>SENAI</strong>, passionate about technology and creating modern digital experiences.",
                    p2: "I'm currently focused on growing as a full-stack developer, building hands-on projects with JavaScript, React, and Node.js.",
                    p3: "My goal is to create applications that combine intuitive design, performance, and best development practices — generating real impact for users and companies.",
                    anoLabel: "Year of Study",
                    projetosLabel: "Projects",
                    formacaoLabel: "Education",
                },
                habilidades: {
                    titulo: "Skills",
                    niveis: {
                        Intermediário: "Intermediate",
                        Básico: "Basic",
                    },
                },
                projetos: {
                    titulo: "Projects",
                    subtitulo: "Check out some of my most recent projects",
                    featuresTitle: "Main Features",
                    techStack: "Tech Stack",
                    verSite: "Live Site",
                    projetosLabel: "Projects",
                    tecnologiasLabel: "Technologies",
                    items: [
                        {
                            nome: "Landing Page",
                            descricao: "Responsive presentation page using HTML and C#",
                            descricaoLonga: "Modern landing page with responsive design, integrated contact forms and smooth animations. Developed with a focus on conversion and performance.",
                            features: ["Responsive Design", "Integrated Forms", "CSS Animations", "SEO Optimization"],
                        },
                        {
                            nome: "Task Master",
                            descricao: "Interactive task list with pure JavaScript",
                            descricaoLonga: "Complete task management app with local persistence, dynamic filters and intuitive interface. Zero external dependencies.",
                            features: ["Drag & Drop", "Local Storage", "Applied Filters", "Dark/Light Mode"],
                        },
                        {
                            nome: "Portfolio",
                            descricao: "This website you're viewing, built with React",
                            descricaoLonga: "Personal website with advanced animations, custom 3D carousel and modern design. Fully responsive and performance-optimized.",
                            features: ["3D Carousel", "Animations", "Responsive Design", "Optimized"],
                        },
                        {
                            nome: "GGS Tournament",
                            descricao: "Tournament website for Guilty Gear Strive",
                            descricaoLonga: "Fighting game tournament management platform with brackets, rankings and real-time registration system.",
                            features: ["Auto Brackets", "Rankings", "Online Registration", "Integrated Streaming"],
                        },
                    ],
                },
                contato: {
                    titulo: "Contact",
                    descricao: "Interested in working together or exchanging ideas? Get in touch!",
                    assunto: "Subject",
                    assuntoPlaceholder: "What is it about?",
                    mensagem: "Message",
                    mensagemPlaceholder: "Leave your message here...",
                    enviar: "Send Message",
                    enviando: "Sending...",
                    sucesso: "Message sent successfully! 🎉",
                    erro: "Error sending message. Please try again.",
                },
                footer: {
                    dev: "Developed by a young SENAI Student",
                    feito: "Made with React",
                },
            },
        },
        pt: {
            translation: {
                page: { title: "Portfólio | Matheus Conceicion" },
                header: {
                    logo: "Portfólio",
                    inicio: "Início",
                    sobre: "Sobre",
                    habilidades: "Habilidades",
                    projetos: "Projetos",
                    contato: "Contato",
                },
                hero: {
                    ola: "Olá, eu sou Matheus!",
                    titulo: "Estudante SENAI",
                    subtitulo: "Desenvolvedor Web",
                    descricao: "Aprendendo a criar experiências digitais incríveis através do código.",
                    verProjetos: "Ver Projetos",
                    contato: "Contato",
                },
                sobre: {
                    titulo: "Sobre Mim",
                    p1: "Sou estudante de desenvolvimento web no <strong>SENAI</strong>, apaixonado por tecnologia e pela criação de experiências digitais modernas.",
                    p2: "Atualmente estou focado em evoluir como desenvolvedor full-stack, desenvolvendo projetos práticos com JavaScript, React e Node.js.",
                    p3: "Meu objetivo é criar aplicações que combinem design intuitivo, performance e boas práticas de desenvolvimento, gerando impacto real para usuários e empresas.",
                    anoLabel: "Ano de Estudo",
                    projetosLabel: "Projetos",
                    formacaoLabel: "Formação",
                },
                habilidades: {
                    titulo: "Habilidades",
                    niveis: {
                        Intermediário: "Intermediário",
                        Básico: "Básico",
                    },
                },
                projetos: {
                    titulo: "Projetos",
                    subtitulo: "Confira alguns dos meus projetos mais recentes",
                    featuresTitle: "Features Principais",
                    techStack: "Tech Stack",
                    verSite: "Ver Site",
                    projetosLabel: "Projetos",
                    tecnologiasLabel: "Tecnologias",
                    items: [
                        {
                            nome: "Landing Page",
                            descricao: "Página de apresentação responsiva usando HTML e C#",
                            descricaoLonga: "Landing page moderna com design responsivo, formulários de contato integrados e animações suaves. Desenvolvida com foco em conversão e performance.",
                            features: ["Design Responsivo", "Formulários Integrados", "Animações CSS", "Otimização SEO"],
                        },
                        {
                            nome: "Task Master",
                            descricao: "Lista de tarefas interativa com JavaScript puro",
                            descricaoLonga: "Aplicação completa de gerenciamento de tarefas com persistência local, filtros dinâmicos e interface intuitiva. Zero dependências externas.",
                            features: ["Drag & Drop", "Local Storage", "Filtros Aplicados", "Modo Escuro/Claro"],
                        },
                        {
                            nome: "Portfólio",
                            descricao: "Este site que você está vendo, feito com React",
                            descricaoLonga: "Site pessoal com animações avançadas, carrossel 3D customizado e design moderno. Totalmente responsivo e otimizado para performance.",
                            features: ["Carrossel 3D", "Animações", "Design Responsivo", "Otimizado"],
                        },
                        {
                            nome: "Torneio GGS",
                            descricao: "Site de torneio para Guilty Gear Strive",
                            descricaoLonga: "Plataforma de gerenciamento de torneios de fighting games com brackets, rankings e sistema de inscrição em tempo real.",
                            features: ["Brackets Automáticos", "Rankings", "Inscrição Online", "Streaming Integrado"],
                        },
                    ],
                },
                contato: {
                    titulo: "Contato",
                    descricao: "Interessado em trabalhar junto ou trocar ideias? Entre em contato!",
                    assunto: "Assunto",
                    assuntoPlaceholder: "Qual é o assunto?",
                    mensagem: "Mensagem",
                    mensagemPlaceholder: "Deixe sua mensagem aqui...",
                    enviar: "Enviar Mensagem",
                    enviando: "Enviando...",
                    sucesso: "Mensagem enviada com sucesso! 🎉",
                    erro: "Erro ao enviar mensagem. Tente novamente.",
                },
                footer: {
                    dev: "Desenvolvido por um jovem Estudante do SENAI",
                    feito: "Feito com React",
                },
            },
        },
    },
});

export default i18n;
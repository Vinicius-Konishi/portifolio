// Estrutura de decisão: Saudação baseada no horário
function saudacao() {
    const hora = new Date().getHours();
    let mensagem;
    if (hora < 12) {
        mensagem = "Bom dia!";
    } else if (hora < 18) {
        mensagem = "Boa tarde!";
    } else {
        mensagem = "Boa noite!";
    }
    document.getElementById('saudacao').textContent = mensagem;
}

// Comando de repetição: Gerar lista de cursos a partir de array
const cursos = [
    { nome: 'Introdução ao HTML', carga: '20h', ano: 2023 },
    { nome: 'CSS Avançado', carga: '30h', ano: 2024 },
    { nome: 'JavaScript Básico', carga: '25h', ano: 2024 }
];

function renderCursos() {
    const lista = document.getElementById('lista-cursos');
    for (let curso of cursos) {
        const item = document.createElement('li');
        item.textContent = `${curso.nome} - ${curso.carga} - ${curso.ano}`;
        lista.appendChild(item);
    }
}

// Função: Renderizar projetos dinamicamente
const projetos = [
    {
        nome: 'API 1° Semestre',
        descricao: 'Um site para divulgação das informações dos candidatos a vereadores da cidade de São José dos Campos',
        tecnologias: 'HTML, CSS, Python, Docker, AWS, MySQL',
        link: 'https://github.com/AgileKrakens/DemoQuerycy'
    },
    {
        nome: 'Calculadora JS',
        descricao: 'Calculadora básica em JavaScript.',
        tecnologias: 'JavaScript',
        link: 'https://github.com/viniciussilva/calculadora'
    },
    {
        nome: 'App ToDo',
        descricao: 'Aplicativo de lista de tarefas.',
        tecnologias: 'HTML, CSS, JS',
        link: 'https://github.com/viniciussilva/todo-app'
    }
];

function renderProjetos() {
    const container = document.getElementById('lista-projetos');
    for (let projeto of projetos) {
        const div = document.createElement('div');
        div.classList.add('projeto');
        div.innerHTML = `
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <p>Tecnologias: ${projeto.tecnologias}</p>
            <a href="${projeto.link}">Link</a>
        `;
        container.appendChild(div);
    }
}

// Função: Renderizar cards de links dinamicamente
const links = [
    {
        nome: 'GitHub',
        url: 'https://github.com/Vinicius-Konishi',
        icon: 'fab fa-github'
    },
    {
        nome: 'LinkedIn',
        url: 'https://www.linkedin.com/in/vin%C3%ADcius-greg%C3%B3rio-406640232/',
        icon: 'fab fa-linkedin'
    },
    {
        nome: 'WhatsApp',
        url: 'https://web.whatsapp.com/',
        icon: 'fab fa-whatsapp'
    }
];

function renderLinks() {
    const container = document.getElementById('lista-links');
    for (let link of links) {
        const div = document.createElement('div');
        div.classList.add('card-link');
        div.innerHTML = `
            <i class="${link.icon} fa-3x"></i>
            <h3>${link.nome}</h3>
            <a href="${link.url}">Contato</a>
        `;
        container.appendChild(div);
    }
}

// Função para alternar tema
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    // Opcional: Salvar preferência no localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Chamar as funções ao carregar a página
window.onload = function() {
    // Carregar tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    saudacao();
    renderCursos();
    renderProjetos();
    renderLinks();
    
    // Adicionar event listener ao botão
    document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
};
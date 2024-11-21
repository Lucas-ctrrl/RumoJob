const professions = [
    {
        name: "Técnico em Automação Industrial",
        interests: ["Resolver Problemas", "Trabalhar com as mãos","Eletronica", "Automação"],  // Únicos
        salary: "R$ 3.000 - R$ 5.000",
        description: "Implementa e mantém sistemas automatizados em indústrias para melhorar a eficiência e reduzir custos.",
        howToBecome: "Formação técnica em Automação Industrial ou cursos técnicos similares.",
        skills: ["Conhecimento em sistemas automatizados", "Eletrônica e mecânica básica", "Programação básica de controladores"],
        progression: "Técnico Sênior → Supervisor Técnico → Gerente de Operações."
    },
    {
        name: "Engenheiro de Controle e Automação",
        interests: ["Liderança", "Criativo", "Resolver Problemas","Progamacao","Gerencia", "Automação"],  // Únicos
        salary: "R$ 7.000 - R$ 15.000",
        description: "Projeta, desenvolve e gerencia sistemas de automação para otimizar processos industriais.",
        howToBecome: "Graduação em Engenharia de Controle e Automação.",
        skills: ["Matemática avançada", "Gestão de projetos", "Programação em linguagens como Python e Ladder"],
        progression: "Engenheiro Pleno → Engenheiro Sênior → Gerente de Engenharia."
    },
    {
        name: "Programador de CLP",
        interests: ["Programacao", "Resolver Problemas","Eletronica", "Automação"],  // Únicos
        salary: "R$ 4.000 - R$ 8.000",
        description: "Especialista em programação de controladores lógicos programáveis (CLPs) usados na automação industrial.",
        howToBecome: "Curso técnico ou superior em áreas relacionadas à automação ou eletrônica.",
        skills: ["Programação de CLPs", "Conhecimento em protocolos de comunicação industrial", "Análise de sistemas"],
        progression: "Analista de Automação → Programador Sênior → Coordenador de Automação."
    },
    {
        name: "Engenheiro de Manutenção",
        interests: ["Trabalhar com as mãos","Liderança","Gerencia","Trabalhar com pessoas", "Automação"],  // Únicos
        salary: "R$ 6.000 - R$ 12.000",
        description: "Planeja e executa manutenções preventivas e corretivas em sistemas industriais.",
        howToBecome: "Graduação em Engenharia Mecânica, Elétrica ou de Automação.",
        skills: ["Diagnóstico de falhas", "Planejamento de manutenção", "Gestão de equipes"],
        progression: "Engenheiro Júnior → Engenheiro Sênior → Gerente de Manutenção."
    },
    {
        name: "Analista de Tecnologia Industrial",
        interests: ["Trabalhar com Dados", "Criativo","Gerencia", "Automação"],  // Únicos
        salary: "R$ 5.000 - R$ 10.000",
        description: "Analisa e implementa tecnologias para melhorar os processos industriais.",
        howToBecome: "Graduação em Engenharia ou áreas afins, com especialização em tecnologia industrial.",
        skills: ["Análise de dados", "Conhecimento em sistemas MES e ERP", "Planejamento estratégico"],
        progression: "Analista Sênior → Coordenador de Tecnologia → Gerente de Inovação."
    },
    {
        name: "Consultor de Automação",
        interests: ["Liderança", "Resolver Problemas", "Trabalhar com pessoas","Gerencia", "Automação"],  // Únicos
        salary: "R$ 8.000 - R$ 20.000",
        description: "Orienta empresas na escolha e implementação de soluções automatizadas.",
        howToBecome: "Graduação em Engenharia de Automação, com experiência em projetos industriais.",
        skills: ["Comunicação eficaz", "Gestão de projetos", "Visão estratégica"],
        progression: "Consultor Sênior → Especialista → Sócio ou Diretor Técnico."
    },
    {
        name: "Projetista de Automação",
        interests: ["Criativo", "Resolver Problemas", "Trabalhar com pessoas","Gerencia", "Automação"],  // Únicos
        salary: "R$ 4.500 - R$ 9.000",
        description: "Desenvolve projetos detalhados para sistemas de automação industrial.",
        howToBecome: "Formação técnica ou superior em Automação ou Engenharia Elétrica.",
        skills: ["Conhecimento em softwares CAD", "Desenho técnico", "Integração de sistemas"],
        progression: "Projetista Sênior → Coordenador de Projetos → Gerente de Engenharia."
    },
    {
        name: "Especialista em Automação",
        interests: ["Trabalhar com Dados", "Resolver Problemas","Criativo", "Automação"],  // Únicos
        salary: "R$ 10.000 - R$ 25.000",
        description: "Lida com sistemas complexos de automação e otimização de processos industriais.",
        howToBecome: "Pós-graduação ou experiência avançada em automação industrial.",
        skills: ["Conhecimento avançado em automação", "Programação de alto nível", "Gerenciamento de sistemas"],
        progression: "Especialista Pleno → Consultor Especialista → Diretor Técnico."
    },
    // NOVAS PROFISSÕES ADICIONADAS
    {
        name: "Developer Junior",
        interests: ["Trabalhar com Dados", "Criativo","Programacao", "Informatica"],  // Únicos
        salary: "R$ 3.000 - R$ 4.000",
        description: "Desenvolve e mantém sistemas e aplicações de software sob orientação de desenvolvedores mais experientes.",
        howToBecome: "Graduação em Ciência da Computação, Engenharia de Software ou áreas afins.",
        skills: ["Programação básica", "Conhecimento em JavaScript, Python", "Versionamento de código"],
        progression: "Developer Pleno → Developer Sênior → Líder Técnico."
    },
    {
        name: "Developer Senior",
        interests: ["Criativo", "Resolver Problemas","Programacao","Gerencia", "Liderança", "Informatica"],  // Únicos
        salary: "R$ 6.000 - R$ 12.000",
        description: "Responsável pelo desenvolvimento completo de sistemas e aplicações complexas, além de liderar equipes de desenvolvimento.",
        howToBecome: "Graduação em Ciência da Computação ou áreas afins com experiência avançada em desenvolvimento de software.",
        skills: ["Programação avançada", "Arquitetura de sistemas", "Gestão de projetos ágeis"],
        progression: "Tech Lead → Engenheiro de Software → CTO."
    },
    {
        name: "Administrador de Banco de Dados",
        interests: ["Trabalhar com Dados", "Gerencia","Cibersegurança", "Informatica"],  // Únicos
        salary: "R$ 4.500 - R$ 8.000",
        description: "Gerencia e mantém bancos de dados, assegurando a integridade, segurança e desempenho dos dados armazenados.",
        howToBecome: "Graduação em Sistemas de Informação, Ciência da Computação ou áreas relacionadas.",
        skills: ["SQL", "Gestão de servidores de banco de dados", "Backup e recuperação de dados"],
        progression: "Analista de Banco de Dados → DBA Sênior → Arquiteto de Banco de Dados."
    },
    {
        name: "Cientista de Dados",
        interests: ["Trabalhar com Dados", "Resolver Problemas","Programacao", "Informatica"],  // Únicos
        salary: "R$ 8.000 - R$ 15.000",
        description: "Analisa grandes volumes de dados para encontrar padrões e gerar insights para a empresa.",
        howToBecome: "Graduação em Estatística, Ciência de Dados ou áreas afins.",
        skills: ["Programação (Python, R)", "Machine Learning", "Big Data"],
        progression: "Data Analyst → Cientista de Dados Pleno → Data Engineer."
    },
    {
        name: "Analista Forense Digital",
        interests: ["Cibersegurança", "Trabalhar com Dados", "Trabalhar com pessoas", "Informatica"],  // Únicos
        salary: "R$ 6.000 - R$ 12.000",
        description: "Investiga crimes digitais e realiza a análise de dados de dispositivos para coletar evidências.",
        howToBecome: "Graduação em Segurança da Informação, Sistemas de Informação ou áreas correlatas.",
        skills: ["Análise forense", "Conhecimento em sistemas operacionais", "Recuperação de dados"],
        progression: "Analista Forense Júnior → Especialista Forense → Consultor de Segurança."
    },
    {
        name: "Gerente de Projetos de TI",
        interests: ["Liderança", "Gerencia", "Trabalhar com pessoas", "Informatica"],  // Únicos
        salary: "R$ 8.000 - R$ 16.000",
        description: "Gerencia projetos de TI, garantindo o cumprimento de prazos, custos e qualidade dos projetos.",
        howToBecome: "Graduação em Tecnologia da Informação, Engenharia ou Administração com experiência em gestão de projetos.",
        skills: ["Gestão de projetos", "Liderança de equipes", "Planejamento estratégico"],
        progression: "Coordenador de Projetos → Gerente de TI → Diretor de TI."
    },
    {
        name: "Engenheiro de Redes",
        interests: ["Trabalhar com Dados","Criativo","Resolver Problemas", "Gerencia", "Rede", "Informatica"],  // Únicos
        salary: "R$ 7.000 - R$ 13.000",
        description: "Desenvolve e gerencia a infraestrutura de redes de comunicação de uma organização.",
        howToBecome: "Graduação em Redes de Computadores, Sistemas de Informação ou áreas afins.",
        skills: ["Configuração de redes", "Segurança de redes", "Gestão de servidores"],
        progression: "Engenheiro Júnior → Engenheiro de Redes Sênior → Arquiteto de Redes."
    },
    {
        name: "Analista de Sistemas",
        interests: ["Resolver Problemas", "Criativo","Trabalhar com Dados", "Programacao", "Informatica"],  // Únicos
        salary: "R$ 4.500 - R$ 8.000",
        description: "Analisa as necessidades dos usuários e cria soluções através do desenvolvimento de sistemas.",
        howToBecome: "Graduação em Ciência da Computação, Análise de Sistemas ou áreas afins.",
        skills: ["Análise de requisitos", "Modelagem de dados", "Desenvolvimento de sistemas"],
        progression: "Analista de Sistemas Pleno → Analista de Sistemas Sênior → Gerente de TI."
    }
];


document.addEventListener("DOMContentLoaded", () => {
    // Página do formulário
    const submitButton = document.getElementById("submitBtn");
    if (submitButton) {
        submitButton.addEventListener("click", () => {
            const selectedInterests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
                .map(input => input.value);

            if (selectedInterests.length === 0) { 
                alert("Por favor, escolha pelo menos uma opção.");
                return;
            }
            if (selectedInterests.length > 4) { 
                alert("Por favor, escolha apenas 4 opções.");
                return;
            }

            const bestMatch = professions.find(profession =>
                selectedInterests.every(interest => profession.interests.includes(interest))
            );

            if (bestMatch) {
                localStorage.setItem("selectedProfession", JSON.stringify(bestMatch));
                window.location.href = "resultado.html";
            } else {
                alert("Nenhuma profissão corresponde aos interesses selecionados.");
            }
        });
    }

    // Página de resultado
    if (window.location.pathname.endsWith("resultado.html")) {
        const profession = JSON.parse(localStorage.getItem("selectedProfession"));
        if (profession) {
            const detailsContainer = document.getElementById("professionDetails");
            detailsContainer.innerHTML = `
                <h2>${profession.name}</h2>
                <p><strong>Salário:</strong> ${profession.salary}</p>
                <p>${profession.description}</p>
                <p><strong>Como se tornar:</strong> ${profession.howToBecome}</p>
                <p><strong>Habilidades Necessárias:</strong> ${profession.skills.join(", ")}</p>
                <p><strong>Progressão da Carreira:</strong> ${profession.progression}</p>
            `;

            const relatedList = document.getElementById("relatedProfessions");
            professions
                .filter(p => p.name !== profession.name)
                .slice(0, 3)
                .forEach(related => {
                    const listItem = document.createElement("li");
                    listItem.innerHTML = `<a href="#" onclick="viewProfession('${related.name}')">${related.name}</a>`;
                    relatedList.appendChild(listItem);
                });
        }
    }
});

function viewProfession(professionName) {
    const profession = professions.find(p => p.name === professionName);
    if (profession) {
        localStorage.setItem("selectedProfession", JSON.stringify(profession));
        window.location.href = "resultado.html";
    }
}

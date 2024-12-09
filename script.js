let objecto = localStorage.getItem('NewProfession');
let newprofession = JSON.parse(objecto);

const professions = [
  {
    name: "Técnico em Automação Industrial",
    interests: [
      "Resolver Problemas",
      "Trabalhar com as mãos",
      "Eletronica",
      "Automação",
    ], // Únicos
    salary: "R$ 3.000 - R$ 5.000",
    description:
      "Implementa e mantém sistemas automatizados em indústrias para melhorar a eficiência e reduzir custos.",
    howToBecome:
      "Curso Técnico em Automação Industrial: Disponível em instituições como SENAI, IFSP, e outras escolas técnicas. (Duração: 3-4 anos)",
    skills: [
      "Conhecimento em sistemas automatizados",
      "Eletrônica e mecânica básica",
      "Programação básica de controladores",
    ],
    area: "Auto",
    video: "https://www.youtube.com/embed/m5xJIsfWJqQ?si=5J1s68YQTf6y0Vr-",
    progression: "Técnico Sênior → Supervisor Técnico → Gerente de Operações.",
  },
  {
    name: "Engenheiro de Controle e Automação",
    interests: [
      "Liderança",
      "Criativo",
      "Resolver Problemas",
      "Progamacao",
      "Gerencia",
      "Automação",
    ], // Únicos
    salary: "R$ 7.000 - R$ 15.000",
    description:
      "Projeta, desenvolve e gerencia sistemas de automação para otimizar processos industriais.",
    howToBecome: "Curso de Engenharia de Controle e Automação: Oferecido por universidades como USP, UNICAMP, UFRJ, UFSC, PUC, e outras. (Duração: 5 anos).",
    skills: [
      "Matemática avançada",
      "Gestão de projetos",
      "Programação em linguagens como Python e Ladder",
    ],
    area: "Auto",
    video: "https://www.youtube.com/embed/iEAITYSA-Jg?si=nBQX2ickFtzyywiv",
    progression:
      "Engenheiro Pleno → Engenheiro Sênior → Gerente de Engenharia.",
  },
  {
    name: "Programador de CLP",
    interests: ["Programacao", "Resolver Problemas", "Eletronica", "Automação"], // Únicos
    salary: "R$ 4.000 - R$ 8.000",
    description:
      "Especialista em programação de controladores lógicos programáveis (CLPs) usados na automação industrial.",
    howToBecome:
      "[Pré-requisito: Formação técnica ou superior na área de automação, eletrônica ou mecatrônica.] Cursos de Especialização em Programação de CLPs: Disponíveis no SENAI (300h), CETEC, e em outras escolas técnicas e centros de treinamento industrial.",
    skills: [
      "Programação de CLPs",
      "Conhecimento em protocolos de comunicação industrial",
      "Análise de sistemas",
    ],
    area: "Auto",
    video: "https://www.youtube.com/embed/4D8QNrCyqck?si=xPYXnERAHuIjJQEY",
    progression:
      "Analista de Automação → Programador Sênior → Coordenador de Automação.",
  },
  {
    name: "Engenheiro de Manutenção",
    interests: [
      "Trabalhar com as mãos",
      "Liderança",
      "Gerencia",
      "Trabalhar com pessoas",
      "Automação",
    ], // Únicos
    salary: "R$ 6.000 - R$ 12.000",
    description:
      "Planeja e executa manutenções preventivas e corretivas em sistemas industriais.",
    howToBecome: "Engenharia Mecânica, Elétrica ou de Controle e Automação: Universidades como PUC-RIO,UFMG, USP, e UFRGS oferecem essas formações. (Duração média: 5 anos ou mais) Certificações específicas: Cursos de manutenção industrial e planejamento estratégico de manutenção (disponíveis em SENAI e outras escolas técnicas).",
    skills: [
      "Diagnóstico de falhas",
      "Planejamento de manutenção",
      "Gestão de equipes",
    ],
    area: "Auto",
    video: "https://www.youtube.com/embed/qHvj7sboNWM?si=C8EyiMYcvhCB2_uK",
    progression:
      "Engenheiro Júnior → Engenheiro Sênior → Gerente de Manutenção.",
  },
  {
    name: "Técnico em Eletromecânica",
    interests: ["Trabalhar com as mãos", "Trabalhar com pessoas", "Resolver Problemas", "Automação"], // Únicos
    salary: "R$ 2.500 - R$ 8.000",
    description:
      "O Técnico em Eletromecânica atua na manutenção, montagem, instalação e operação de sistemas que combinam componentes elétricos e mecânicos. Ele também realiza testes em equipamentos industriais, acompanha processos produtivos e implementa melhorias.",
    howToBecome:
      "Curso Técnico em Eletromecânica oferecido por SENAI e Institutos Federais com Duração média de 2 anos. Automação Industrial ou Manutenção Eletromecânica: Também disponíveis em instituições como SENAI ou CETEC.",
    skills: [
      "Habilidade com ferramentas de manutenção e softwares CAD.",
      "Domínio de normas de segurança (NR-10, NR-12).",
      "Conhecimentos em eletricidade, mecânica, pneumática e hidráulica.",
    ],
    area: "Auto",
    video: "https://www.youtube.com/embed/VG8diqikBaM?si=GomHkbKmYw74O7yZ",
    progression:
      "Técnico de manutenção → Supervisor de manutenção → Consultor técnico, instrutor em instituições de ensino ou gerente de manutenção.",
  },
  {
    name: "Especialista em Robótica Industrial",
    interests: [
      "Programacao",
      "Resolver Problemas",
      "Trabalhar com as mãos",
      "Eletronica",
      "Automação",
    ], // Únicos
    salary: "R$ 6.000 - R$ 18.000",
    description:
      "Um especialista em Robótica Industrial trabalha na programação, configuração e manutenção de robôs usados na automação de processos industriais. Ele também desenvolve soluções para integração entre sistemas robóticos e processos de produção.",
    howToBecome:
      "Graduação em Engenharia Mecatrônica ou Controle e Automação em instituições como USP, UNICAMP, UFRJ, UFSC, UFPE, entre outras (Duração média de 5 anos). Especialização em Robótica Colaborativa e Automação Avançada: SENAI-SP e instituições privadas como FIAP. (Duração de 1-2 anos). Programação de Robôs Industriais: Focado em marcas como FANUC, ABB, KUKA e Mitsubishi, disponível em centros de treinamento SENAI, Siemens ou ABB.",
    skills: ["Conhecimento em programação de robôs industriais (FANUC, KUKA, ABB, Yaskawa).", "Domínio de linguagens como Python, C++, e softwares de simulação", "Habilidades em eletrônica, mecânica e integração de sistemas.", "Experiência com segurança de sistemas automatizados (normas ISO 10218)."],
    area: "Auto",
    video: "https://www.youtube.com/embed/j--Vj9wPdys?si=Bw_kaQKISWOWD22N",
    progression: "Programador de robôs → Especialista em integração robótica → Consultor Sênior em Robótica ou Desenvolvedor de novas tecnologias robóticas.",
  },
  {
    name: "Projetista de Automação",
    interests: [
      "Criativo",
      "Resolver Problemas",
      "Trabalhar com pessoas",
      "Gerencia",
      "Automação",
    ], // Únicos
    salary: "R$ 4.500 - R$ 9.000",
    description:
      "Desenvolve projetos detalhados para sistemas de automação industrial.",
    howToBecome:
      "Curso Técnico ou Superior em Automação Industrial, Engenharia de Controle e Automação ou Engenharia Mecatrônica. (Duração: 3-5 anos) Especializações em CAD/CAM e softwares de automação: Instituições como SENAI e FIAP.",
    skills: [
      "Conhecimento em softwares CAD",
      "Desenho técnico",
      "Integração de sistemas",
    ],
    area: "Auto",
    video: "https://www.youtube.com/embed/tpM8x1fHriE?si=HRjvjJV3h6Z3eA7T",
    progression:
      "Projetista Sênior → Coordenador de Projetos → Gerente de Engenharia.",
  },
  {
    name: "Especialista em Automação",
    interests: [
      "Trabalhar com Dados",
      "Resolver Problemas",
      "Criativo",
      "Automação",
    ], // Únicos
    salary: "R$ 10.000 - R$ 25.000",
    description:
      "Lida com sistemas complexos de automação e otimização de processos industriais.",
    howToBecome:
      "MMestrado ou MBA em Automação e Controle de Processos, Robótica ou Transformação Digital: Oferecidos por instituições como USP, UNICAMP, e UFPR. (Duração: 5 anos + 1-2 anos de especialização) Certificações específicas: Cursos em automação avançada, como os da Rockwell, Siemens, e ABB.",
    skills: [
      "Conhecimento avançado em automação",
      "Programação de alto nível",
      "Gerenciamento de sistemas",
    ],
    area: "Auto",
    video: "https://www.youtube.com/embed/kX6vOpFueUc?si=Fi6cgIHqllc9inZy",
    progression:
      "Especialista Pleno → Consultor Especialista → Diretor Técnico.",
  },
  // NOVAS PROFISSÕES ADICIONADAS
  {
    name: "Developer Junior",
    interests: [
      "Trabalhar com Dados",
      "Criativo",
      "Programacao",
      "Informatica",
    ], // Únicos
    salary: "R$ 3.000 - R$ 4.000",
    description:
      "Desenvolve e mantém sistemas e aplicações de software sob orientação de desenvolvedores mais experientes.",
    howToBecome:
      "Graduação em Ciência da Computação, Engenharia de Software ou Sistemas de Informação: Disponível em universidades como USP, UFRJ, UNICAMP, UFSCAR, e PUC (Duração: 3 anos). Bootcamps em Programação: Oferecidos por plataformas como Alura, Rocketseat, DIO, ou Cubos Academy.",
    skills: [
      "Programação básica",
      "Conhecimento em JavaScript, Python",
      "Versionamento de código",
    ],
    area: "TI",
    video: "https://www.youtube.com/embed/ap-mxR8TX1U?si=trrDbyBZ5kvviVAv",
    progression: "Developer Pleno → Developer Sênior → Líder Técnico.",
  },
  {
    name: "Developer Senior",
    interests: [
      "Criativo",
      "Resolver Problemas",
      "Programacao",
      "Gerencia",
      "Liderança",
      "Informatica",
    ], // Únicos
    salary: "R$ 6.000 - R$ 12.000",
    description:
      "Responsável pelo desenvolvimento completo de sistemas e aplicações complexas, além de liderar equipes de desenvolvimento.",
    howToBecome:
      "[Necessário experiência profissional significativa (5-8 anos)] Graduação em Ciência da Computação, Engenharia de Software ou Sistemas de Informação: Oferecido em instituições como UNICAMP, UFSC, e PUC. Especializações em Arquitetura de Software ou Cloud Computing: Disponíveis em FIAP, SENAC, ou PUC.",
    skills: [
      "Programação avançada",
      "Arquitetura de sistemas",
      "Gestão de projetos ágeis",
    ],
    area: "TI",
    video: "https://www.youtube.com/embed/DYz3A9DT-Qc?si=auqf2KNsQQQBE9L_",
    progression: "Tech Lead → Engenheiro de Software → CTO.",
  },
  {
    name: "Administrador de Banco de Dados",
    interests: [
      "Trabalhar com Dados",
      "Gerencia",
      "Cibersegurança",
      "Informatica",
    ], // Únicos
    salary: "R$ 4.500 - R$ 8.000",
    description:
      "Gerencia e mantém bancos de dados, assegurando a integridade, segurança e desempenho dos dados armazenados.",
    howToBecome:
      "Graduação em Tecnologia da Informação ou Ciência da Computação: Disponível em universidades como USP, UFRGS, e UNESP (Duração: 3-4 anos). Cursos de Especialização em Banco de Dados: Oferecidos por instituições como FIAP, SENAC, ou SENAI.",
    skills: [
      "SQL",
      "Gestão de servidores de banco de dados",
      "Backup e recuperação de dados",
    ],
    area: "TI",
    video: "https://www.youtube.com/embed/BaVSXv5cPtY?si=G9MKzfPz_aQKvQjX",
    progression:
      "Analista de Banco de Dados → DBA Sênior → Arquiteto de Banco de Dados.",
  },
  {
    name: "Cientista de Dados",
    interests: [
      "Trabalhar com Dados",
      "Resolver Problemas",
      "Programacao",
      "Informatica",
    ], // Únicos
    salary: "R$ 8.000 - R$ 15.000",
    description:
      "Analisa grandes volumes de dados para encontrar padrões e gerar insights para a empresa.",
    howToBecome: "Graduação em Estatística, Matemática Aplicada ou Ciência da Computação: Disponível em USP, UNICAMP, UFRJ, e UFPE (Duração: 4-5 anos + 2 anos de especialização ou pós-graduação). Pós-graduação em Ciência de Dados ou Big Data: Oferecida por instituições como FIAP, PUC, e SENAC.",
    skills: ["Programação (Python, R)", "Machine Learning", "Big Data"],
    area: "TI",
    video: "https://www.youtube.com/embed/_365KpviZ9o?si=w8OdAovRBi_3LiAq",
    progression: "Data Analyst → Cientista de Dados Pleno → Data Engineer.",
  },
  {
    name: "Analista Forense Digital",
    interests: [
      "Cibersegurança",
      "Trabalhar com Dados",
      "Trabalhar com pessoas",
      "Informatica",
    ], // Únicos
    salary: "R$ 6.000 - R$ 12.000",
    description:
      "Investiga crimes digitais e realiza a análise de dados de dispositivos para coletar evidências.",
    howToBecome:
      "Graduação em Segurança da Informação ou Engenharia de Computação: Disponível em instituições como UNIVALI, UFPE, e PUC (Duração: 3-4 anos + 1-2 anos de especialização). Especialização em Perícia Forense Digital: Oferecida em universidades como UFPE e SENAI.",
    skills: [
      "Análise forense",
      "Conhecimento em sistemas operacionais",
      "Recuperação de dados",
    ],
    area: "TI",
    video: "https://www.youtube.com/embed/BocTBCT11WI?si=iigRdA6pcqcZd0I1",
    progression:
      "Analista Forense Júnior → Especialista Forense → Consultor de Segurança.",
  },
  {
    name: "Gerente de Projetos de TI",
    interests: [
      "Liderança",
      "Gerencia",
      "Trabalhar com pessoas",
      "Informatica",
    ], // Únicos
    salary: "R$ 8.000 - R$ 16.000",
    description:
      "Gerencia projetos de TI, garantindo o cumprimento de prazos, custos e qualidade dos projetos.",
    howToBecome:
      "Graduação em Gestão de Tecnologia da Informação ou Engenharia da Computação: Oferecida em instituições como USP, UNICAMP, e FIAP (Duração: 3-4 anos + 1-2 anos de especialização). Certificações em Gerenciamento de Projetos: PMP (PMI) ou Scrum Master (Agile Alliance).",
    skills: [
      "Gestão de projetos",
      "Liderança de equipes",
      "Planejamento estratégico",
    ],
    area: "TI",
    video: "https://www.youtube.com/embed/78sdpaKvblQ?si=PGKbNr3gipZVhHwO",
    progression: "Coordenador de Projetos → Gerente de TI → Diretor de TI.",
  },
  {
    name: "Engenheiro de Redes",
    interests: [
      "Trabalhar com Dados",
      "Criativo",
      "Resolver Problemas",
      "Gerencia",
      "Rede",
      "Informatica",
    ], // Únicos
    salary: "R$ 7.000 - R$ 13.000",
    description:
      "Desenvolve e gerencia a infraestrutura de redes de comunicação de uma organização.",
    howToBecome:
      "Graduação em Engenharia de Redes, Engenharia de Telecomunicações ou Engenharia da Computação: Oferecida em universidades como UFRJ, UFSC, e PUC (Duração: 3-4 anos). Certificações Técnicas: Cisco CCNA/CCNP, Juniper Networks, ou Mikrotik.",
    skills: [
      "Configuração de redes",
      "Segurança de redes",
      "Gestão de servidores",
    ],
    area: "TI",
    video: "https://www.youtube.com/embed/42LA6MZBzJQ?si=hZAceQoVtwVxMJ0I",
    progression:
      "Engenheiro Júnior → Engenheiro de Redes Sênior → Arquiteto de Redes.",
  },
  {
    name: "Analista de Sistemas",
    interests: [
      "Resolver Problemas",
      "Criativo",
      "Trabalhar com Dados",
      "Programacao",
      "Informatica",
    ], // Únicos
    salary: "R$ 4.500 - R$ 8.000",
    description:
      "Analisa as necessidades dos usuários e cria soluções através do desenvolvimento de sistemas.",
    howToBecome:
      "Graduação em Análise e Desenvolvimento de Sistemas ou Ciência da Computação: Disponível em instituições como IFSP, FIAP, e USP (Duração: 3-4 anos). Especialização em Arquitetura de Sistemas ou Gestão de TI: Oferecida por FIAP e PUC.",
    skills: [
      "Análise de requisitos",
      "Modelagem de dados",
      "Desenvolvimento de sistemas",
    ],
    area: "TI",
    video: "https://www.youtube.com/embed/5K7OGSsWlzU?si=uQrQG8RZVb2zI_Yc",
    progression:
      "Analista de Sistemas Pleno → Analista de Sistemas Sênior → Gerente de TI.",
  },
];
if (newprofession !== null){
  professions.push(JSON.parse(newprofession))
}
console.log(professions)
console.log(newprofession)

document.addEventListener("DOMContentLoaded", () => {
  // Página do formulário
  const submitButton = document.getElementById("submitBtn");
  if (submitButton) {
    submitButton.addEventListener("click", () => {
      const selectedInterests = Array.from(
        document.querySelectorAll('input[name="interests"]:checked')
      ).map((input) => input.value);

      console.log(selectedInterests);

      if (selectedInterests.length === 0) {
        alert("Por favor, escolha pelo menos uma opção.");
        return;
      }
      if (selectedInterests.length > 4) {
        alert("Por favor, escolha apenas 4 opções.");
        return;
      }

      if (selectedInterests.includes("Automação") && selectedInterests.includes("Informatica") ){
        alert("Por Favor, escolha apenas uma área.");
        return;
      }

      const bestMatch = professions.find((profession) =>
        selectedInterests.every((interest) =>
          profession.interests.includes(interest)
        )
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
                <g> ${profession.description}</g>
                <h3><strong>Salário:</strong> ${profession.salary}</h3>
                <button class="accordion">Como se Tornar</button>
                <div class="panel"><p><strong>Como se tornar:</strong> ${
                  profession.howToBecome
                }</p></div>
                <button class="accordion">Habilidades Necessárias</button>
                <div class="panel"><p><strong>Habilidades Necessárias:</strong> <ol> ${profession.skills.map(skills =>
                  `<li>${skills}</li>`).join('')}
                        </ol></div>
                <button class="accordion">Progressão da Carreira</button>
                <div class="panel"><p><strong>Progressão da Carreira:</strong> ${
                  profession.progression
                }</p></div><br>
                <center><h4><strong>Vídeo sobre a Carreira:</strong></h4></center><br>
                <center><iframe width="560" height="315" src="${profession.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>
            `;

      const relatedList = document.getElementById("relatedProfessions");
      professions
        .filter((p) => p.interests.find(interest => profession.interests.includes(interest)) && p.area == profession.area && p.name !== profession.name)
        .slice(0, 4)
        .forEach((related) => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<a href="#" onclick="viewProfession('${related.name}')">${related.name}</a>`;
          relatedList.appendChild(listItem);
        });
    }
  }
});

function viewProfession(professionName) {
  const profession = professions.find((p) => p.name === professionName);
  if (profession) {
    localStorage.setItem("selectedProfession", JSON.stringify(profession));
    window.location.href = "resultado.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      // Toggle the active class to show or hide the panel
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
});

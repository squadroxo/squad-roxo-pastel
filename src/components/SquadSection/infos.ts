//import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid" ;

const data = [
  {
    id: uuidv4(),
    nomeMembro: "Priscilla Kleine",
    funcao: "Product Owner",
    linkLinkedin: "https://www.linkedin.com/in/prikleine/",
    foto: "devs/priscilla-po.png",
    sobreMembro: "Product Owner do time, mas também já atuei como Scrum Master (2023). Esta experiência está sendo muito enriquecedora pois, unindo minhas experiências anteriores em Gestão de Projetos, consigo aplicar meus conhecimentos na área de produtos/negócios, metodologias ágeis e ferramentas de tecnologia. Juntamente com a equipe, estou desenvolvendo um produto do zero para auxiliar na saúde bucal da família. Não deixo de me envolver nas outras atividades do time pois sou muito curiosa, quero aproveitar o máximo esta experiência e aprimorar meus soft skills ;).",
    primario: false
  },
  {
    id: uuidv4(),
    nomeMembro: "Cleberson Emidio",
    funcao: "Scrum Master",
    linkLinkedin: "https://www.linkedin.com/in/cleberson-emidio/",
    foto: "devs/emidio-sm.png",
    sobreMembro: "Estou aqui para orientar e capacitar nossa squad a alcançar todo o seu potencial. Quero garantir que todos tenham voz e que possamos enfrentar desafios juntos, sempre em busca das melhores práticas e soluções criativas.Meu objetivo é criar um ambiente onde a inovação floresça e onde todos se sintam capacitados a contribuir com suas habilidades únicas.",
    primario: true
  },
  {
    id: uuidv4(),
    nomeMembro:"Janaina Lamas Filgueiras",
    funcao: "Scrum Master",
    linkLinkedin: "https://www.linkedin.com/in/janainalamas/",
    foto:"devs/janaina-sm.png",
    sobreMembro:"Texto janaina",
    primario: false
  },
  {
    id: uuidv4(),
    nomeMembro: "Cassiane Ginez",
    funcao: "UX/UI Designer",
    linkLinkedin: "https://www.linkedin.com/in/cassianeginez/",
    foto: "devs/cassi-ux.png",
    sobreMembro: "UX/UI designer do time. Meu papel no projeto se dá principalmente em atuar na criação de um produto digital que proporciona uma experiência intuitiva e agradável para os usuários, gerando satisfação no uso e alcançando metas de negócios. As atividades envolvem entender as necessidades e comportamentos dos usuários e traduzir essa compreensão em interações intuitivas e eficientes dentro da interface digital.",
    primario: true
  },
  {
    id: uuidv4(),
    nomeMembro:"Rafhael Silveira",
    funcao: "UX/UI Designer",
    LinkLinkedin: "link",
    foto:"devs/raphael-ux.png",
    sobreMembro:"Texto rafhael",
    primario:false
  },
  {
    id: uuidv4(),
    nomeMembro: "Daniela Alves",
    funcao: "Desenvolvedora Front End",
    linkLinkedin: "https://www.linkedin.com/in/daniela-dos-santos-alves/",
    foto: "devs/dani-dev.png",
    sobreMembro: "Sou graduanda em Engenharia de Software e possuo conhecimento nas linguagens de programação C, Java, JavaScript, SQL e Python. E nas linguagens de marcação e estilização, como HTML e CSS.",
    primario: true
  },
  {
    id: uuidv4(),
    nomeMembro: "Lucas Baptista",
    funcao: "Desenvolvedor Front End",
    linkLinkedin: "https://www.linkedin.com/in/lucas-baptista-da-silva-133779233/",
    foto: "devs/lucas-dev.png",
    sobreMembro: "Tenho 19 anos de idade e estou cursando o 5° e último semestre de Análise e Desenvolvimento de Sistema na faculdade UNIBR no período noturno e no meu tempo livre estudo as tecnologias voltadas à área de front-end. Acredito que o cenário tecnológico mundial está em permanente evolução. Por esse motivo, empenho 110% do meu tempo e energia, uma vez que meu objetivo de vida é seguir minha paixão: a PROGRAMAÇÃO!",
    primario: false
  },
  {
    id: uuidv4(),
    nomeMembro: "Vitória Melo",
    funcao: "Quality Assurance/Tester",
    linkLinkedin: "https://www.linkedin.com/in/vitoria-melo-2b107b194/",
    foto: "devs/vitoria-qa.png",
    sobreMembro: "Sou apaixonada por tecnologia e busco constantemente me aprimorar para construir uma carreira sólida na área. Como acadêmica em Sistemas de Informação, com forte foco em qualidade de software, faço parte do time Pipoca Ágil, onde garanto que nossos produtos atendam aos mais altos padrões de qualidade e às necessidades dos nossos clientes.",
    primario: true
  },
  {
    id: uuidv4(),
    nomeMembro: "Gustavo",
    funcao: "Quality Assurance/Tester",
    linkLinkedin: "link",
    foto: "devs/gustavo-qa.png",
    sobreMembro: "Graduado em Sistemas para Internet pela FATEC Jahu, com experiência como desenvolvedor e suporte técnico, atualmente estou em processo de transição de carreira para a área de Garantia de Qualidade (QA). Estou constantemente buscando aprimorar meus conhecimentos e habilidades para garantir entregas de alta qualidade e satisfação do usuário.",
    primario: false
  },
 
];

export default data;
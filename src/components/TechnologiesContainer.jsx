import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di'

import { SiTypescript } from "react-icons/si";

import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id: 'html', name: 'HTML5', icon: <DiHtml5/>, text: 'Aprendi que o HTML é a base de toda página web, responsável por estruturar o conteúdo. Entendi a importância do uso da semântica, que melhora a acessibilidade e SEO, e como criar uma hierarquia clara utilizando tags apropriadas para organizar textos, imagens, links e outros elementos.'},
  {id: 'css', name: 'CSS3', icon: <DiCss3/>, text: 'Aprendi como o CSS é essencial para estilizar páginas web, criando uma experiência visual agradável e responsiva. Com ele, entendi a importância do layout, da tipografia e de conceitos como flexbox e grid para organizar o design de forma fluida e adaptável a diferentes dispositivos.'},
  {id: 'js', name: 'JavaScript', icon: <DiJsBadge/>, text: 'Descobri o potencial do JavaScript para tornar as páginas dinâmicas e interativas. Com essa linguagem, aprendi a manipular o DOM, lidar com eventos e criar funcionalidades que melhoram a experiência do usuário.'},
  {id: 'node', name: 'Node.js', icon: <DiNodejsSmall/>, text: ' Entendi como o Node.js permite criar servidores eficientes com JavaScript, viabilizando a construção de back-ends escaláveis e performáticos. Aprendi sobre módulos, rotas e a importância do ambiente de execução para aplicações web.'},
  {id: 'typescript', name: 'TypeScript', icon: <SiTypescript/>, text: 'Aprendi como o TypeScript adiciona segurança ao desenvolvimento, com tipagem estática que ajuda a evitar erros comuns em tempo de execução. Ele permite um código mais robusto e previsível, especialmente em projetos maiores.'},
  {id: 'react', name: 'React', icon: <DiReact/>, text: 'Com o React, aprendi a construir interfaces de usuário de maneira modular e eficiente. Conheci o conceito de componentes, o uso do estado e das props para gerenciar dados e como o React facilita o desenvolvimento de interfaces interativas e reativas.'},
]

const TechnologiesContainer = () => {
  return(
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech)=> (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer
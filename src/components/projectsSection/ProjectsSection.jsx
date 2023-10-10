import './ProjectsSection.css'

const ProjectsSection = () => {

    const projects = [
        { id: 1, title: 'App de gestão financeira', description: 'App em ReactJS de criação do orçamento financeiro com calculo de receitas, despesas e saldo total.', image: 'https://i.ibb.co/PWQmy8d/projeto1.jpg', link:'https://app-gestao-financeira.vercel.app/'},
        { id: 2, title: 'Lista de filmes', description: 'App em ReactJS consumindo uma API de filmes, com informações atuais dos filmes e funcionalidades de salvar e assistir os trailers', image: 'https://i.ibb.co/JxrKV5K/projeto2.png', link: 'https://pipoca-flix.vercel.app/'},
        { id: 3, title: 'Lista de tarefas', description: 'To do list com NodeJS, dados armazenados em banco MongoDB e view engine Handlebars', image: 'https://i.ibb.co/GJfd86g/projeto3.png', link: 'https://to-do-list-nodeapp.vercel.app/'},
        { id: 4, title: 'Bloco de notas', description: 'Bloco de notas em NodeJS + Bootstrap com Login e autenticação JWT', image: 'https://i.ibb.co/2FftYfh/projeto4.png', link: 'https://appdenotasnodejs.vercel.app/'},
    ]

    return (
        <section className='projects-section'>
            <h2>Meus Projetos:</h2>
            <div className='projects-container'>
                {projects.map(project =>(
                    <div key={project.id} className='project-box'>
                        <a href={project.link} target='_blank' rel="noopener noreferrer">
                        <img src={`${project.image}`}alt={project.title}/>
                        </a>
                        <h3>
                            <a href={project.link} target='_blank' rel="noopener noreferrer">
                            {project.title}
                            </a>
                        </h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection
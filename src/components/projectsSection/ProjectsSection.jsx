import './ProjectsSection.css'

const ProjectsSection = () => {

    const projects = [
        { id: 1, title: 'App de gestão financeira', description: 'Descrição do projeto 1', image: 'projeto1.jpg', link:'https://app-gestao-financeira.vercel.app/'},
        { id: 2, title: 'Lista de filmes', description: 'App em ReactJS consuminto uma API de filmes', image: 'projeto2.jpg', link: 'https://pipoca-flix.vercel.app/'},
        { id: 3, title: 'Lista de tarefas', description: 'To do list com NodeJS MongoDB e Handlebars', image: 'projeto3.jpg', link: 'https://to-do-list-nodeapp.vercel.app/'},
        { id: 4, title: 'Bloco de notas', description: 'Bloco de notas com Login e autenticação JWT', image: 'projeto4.jpg', link: 'https://appdenotasnodejs.vercel.app/'},
    ]

    return (
        <section className='projects-section'>
            <h2>Meus Projetos</h2>
            <div className='projects-container'>
                {projects.map(project =>(
                    <div key={project.id} className='project-box'>
                        <a href={project.link} target='_blank' rel="noopener noreferrer">
                        <img src={`/src/images/${project.image}`}alt={project.title}/>
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
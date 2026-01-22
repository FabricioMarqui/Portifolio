function Projects() {
  return (
    <section>
      <h2>Projetos</h2>

      <div className="projects">
        <div className="card">
          <h3>CRUD React + Laravel</h3>
          <p>
            Sistema de cadastro completo com autenticação e integração com API.
          </p>
          <p><strong>Tecnologias:</strong> React, Laravel, MySQL</p>
          <a href="https://github.com/FabricioMarqui/CrudLivro" target="_blank" rel="noreferrer">
            Ver no GitHub →
          </a>
        </div>

        <div className="card">
          <h3>App finaceiro</h3>
          <p>
            Aplicativo desenvolvido para gerenciar finanças pessoais.
          </p>
          <p><strong>Tecnologias:</strong> React Native</p>
          <a href="https://github.com/FabricioMarqui/appfinanceiro" target="_blank" rel="noreferrer">
            Ver no GitHub →
          </a>
        </div>

        <div className="card">
          <h3>Bankrup</h3>
          <p>
           Este projeto é um simulador do jogo Bankrup, compara diferentes estratégias de jogadores por meio de simulações.
          </p>
          <p><strong>Tecnologias:</strong> Java</p>
          <a href="https://github.com/FabricioMarqui/trabalhoPOO" target="_blank" rel="noreferrer">
            Ver no GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

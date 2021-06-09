import './Formation.css';

const Formation = () => {
  const formationInfo = {
    image:
      'https://cdn1.institut-kinesitherapie.paris/wp-content/uploads/2018/10/epaule.jpg',
    name: 'Vive les épaules!',
    description: 'Apprenez à masser une épaule.',
    author: 'Corinne Farmin',
    price: 'voir le site',
    website: 'http://chirurgie-epaule-fontvert.fr/reeduc_prev.html',
  };

  return (
    <div>
      <h1 className="title-contenu">Formations :</h1>
      <div className="doc-container">
        <img src={formationInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{formationInfo.name}</h2>
        <p className="author">par {formationInfo.author}</p>
        <p className="description">{formationInfo.description}</p>
        <a href={formationInfo.website} className="website">
          Voir la formation
        </a>
      </div>
      <div className="doc-container">
        <img src={formationInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{formationInfo.name}</h2>
        <p className="author">par {formationInfo.author}</p>
        <p className="description">{formationInfo.description}</p>
        <a href={formationInfo.website} className="website">
          Voir la formation
        </a>
      </div>
      <div className="doc-container">
        <img src={formationInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{formationInfo.name}</h2>
        <p className="author">par {formationInfo.author}</p>
        <p className="description">{formationInfo.description}</p>
        <a href={formationInfo.website} className="website">
          Voir la formation
        </a>
      </div>
      <div className="doc-container">
        <img src={formationInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{formationInfo.name}</h2>
        <p className="author">par {formationInfo.author}</p>
        <p className="description">{formationInfo.description}</p>
        <a href={formationInfo.website} className="website">
          Voir la formation
        </a>
      </div>
      <div className="doc-container">
        <img src={formationInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{formationInfo.name}</h2>
        <p className="author">par {formationInfo.author}</p>
        <p className="description">{formationInfo.description}</p>
        <a href={formationInfo.website} className="website">
          Voir la formation
        </a>
      </div>
      <div className="doc-container">
        <img src={formationInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{formationInfo.name}</h2>
        <p className="author">par {formationInfo.author}</p>
        <p className="description">{formationInfo.description}</p>
        <a href={formationInfo.website} className="website">
          Voir la formation
        </a>
      </div>
      <div className="doc-container">
        <img src={formationInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{formationInfo.name}</h2>
        <p className="author">par {formationInfo.author}</p>
        <p className="description">{formationInfo.description}</p>
        <a href={formationInfo.website} className="website">
          Voir la formation
        </a>
      </div>
    </div>
  );
};

export default Formation;

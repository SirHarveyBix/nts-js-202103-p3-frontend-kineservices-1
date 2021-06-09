import './Service.css';

const Service = () => {
  const serviceInfo = {
    image:
      'https://www.rmingenierie.net/wp-content/uploads/2017/09/doc-avenue-agenda-connecte-rmingenierie.png',
    name: 'Gérer mon agenda',
    description: 'Une application pratique pour tous les kinés.',
    author: 'Katia Kako',
    price: '2.99',
    linkToAppli:
      'https://suite.maiia.com/solution-personnalisee/pratique/kinesitherapeute?utm_source=google&utm_medium=search&utm_campaign=maiia-gestion-suite&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQzQqI2jzt5VCtMOSVtn8W4-uNpAZzDQNa8qi1_yL03YCnN8q3oc6v0aAhcbEALw_wcB',
  };

  return (
    <div>
      <h1 className="title-contenu">Services :</h1>
      <div className="doc-container">
        <img src={serviceInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{serviceInfo.name}</h2>
        <p className="author">par {serviceInfo.author}</p>
        <p className="description">{serviceInfo.description}</p>
        <a href={serviceInfo.linkToAppli} className="linkToAppli">
          Voir le site
        </a>
      </div>
      <div className="doc-container">
        <img src={serviceInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{serviceInfo.name}</h2>
        <p className="author">par {serviceInfo.author}</p>
        <p className="description">{serviceInfo.description}</p>
        <a href={serviceInfo.linkToAppli} className="linkToAppli">
          Voir le site
        </a>
      </div>
      <div className="doc-container">
        <img src={serviceInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{serviceInfo.name}</h2>
        <p className="author">par {serviceInfo.author}</p>
        <p className="description">{serviceInfo.description}</p>
        <a href={serviceInfo.linkToAppli} className="linkToAppli">
          Voir le site
        </a>
      </div>
      <div className="doc-container">
        <img src={serviceInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{serviceInfo.name}</h2>
        <p className="author">par {serviceInfo.author}</p>
        <p className="description">{serviceInfo.description}</p>
        <a href={serviceInfo.linkToAppli} className="linkToAppli">
          Voir le site
        </a>
      </div>
      <div className="doc-container">
        <img src={serviceInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{serviceInfo.name}</h2>
        <p className="author">par {serviceInfo.author}</p>
        <p className="description">{serviceInfo.description}</p>
        <a href={serviceInfo.linkToAppli} className="linkToAppli">
          Voir le site
        </a>
      </div>
      <div className="doc-container">
        <img src={serviceInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{serviceInfo.name}</h2>
        <p className="author">par {serviceInfo.author}</p>
        <p className="description">{serviceInfo.description}</p>
        <a href={serviceInfo.linkToAppli} className="linkToAppli">
          Voir le site
        </a>
      </div>
      <div className="doc-container">
        <img src={serviceInfo.image} className="image" alt="doc pieds" />
        <h2 className="titre">{serviceInfo.name}</h2>
        <p className="author">par {serviceInfo.author}</p>
        <p className="description">{serviceInfo.description}</p>
        <a href={serviceInfo.linkToAppli} className="linkToAppli">
          Voir le site
        </a>
      </div>
    </div>
  );
};

export default Service;

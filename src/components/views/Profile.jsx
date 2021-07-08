import { useState, useEffect, useContext, useHistory } from 'react';
import axios from 'axios';
import { TokenContext } from '../../contexts/TokenContext';
import './Profile.css';

function Profile() {
  const { setToken } = useContext(TokenContext);
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [updateUser, setUpdateUser] = useState({
    RPPS: '',
    SIRET: '',
    address: '',
    birthdate: '',
    country: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phone: '',
    picture: '',
    role_id: '',
    website: '',
  });
  const userId = localStorage.getItem('USERID');

  const getUser = async () => {
    try {
      await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/profil/${userId}`, {
          userId,
        })
        .then((response) => {
          setUser(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const putUser = async () => {
    await axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/profil/${userId}`, {
        userId,
      })
      .then((response) => {
        setUpdateUser(response);
      });
  };
  // updateUser : preaparation de la route de mise a jour du profile
  console.log(updateUser);

  const handleLogout = () => {
    localStorage.removeItem('TOKEN');
    setToken(null);
    history.push('/login');
  };
  useEffect(() => {
    getUser();
    putUser();
  }, []);

  return (
    <div className="Container_profil">
      <div>
        <h1>Mon Profil</h1>
      </div>
      {!user ? (
        <p>loading ...</p>
      ) : (
        <div className="container_image_avatar">
          <div className="texte">
            <div>prenom : {user[0].firstname}</div>
            <div>nom : {user[0].lastname}</div>
            <div>email: {user[0].email}</div>
            <div>telephone : {user[0].phone}</div>
            <div>adresse : {user[0].address}</div>
            <div>Date de naissance :{user[0].birthdate}</div>
            <div>Pays : {user[0].country}</div>{' '}
            <div>site web : {user[0].website}</div>
            <div>RPPS : {user[0].RPPS}</div>
            <div>(role) :{user[0].role_id}</div>
            <div>Siret : {user[0].SIRET}</div>
          </div>
          {/* en attente de pouvoir recuperer envoyer la photo > bdd */}
          {/* <img
          src={user[0].picture}
          alt={user[0].firstname}
          className="style_avatar"
        /> */}
        </div>
      )}
      <div className="container_bouton">
        <button type="button" className="bouton">
          Partager mes connaissances
        </button>
        <button type="button" className="bouton">
          Partager mes fomrations
        </button>
        <button type="button" className="bouton">
          Partager mes services
        </button>
        <button onClick={handleLogout} type="button" className="bouton">
          Deconexion
        </button>
      </div>
    </div>
  );
}

export default Profile;

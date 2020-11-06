import config from '@/firebase';
import axios from 'axios';

const headersConfig = {
  headers: {
    Authorization: `Bearer ${config.token}`
  }
}

/* USUARIOS */
const getUsuarios = () => {
  return axios.get(`${config.apiUrl}/projects/${config.projectId}/databases/(default)/documents/usuarios/`,{},headersConfig);
};

const getUsuario = (id) => {
  return axios.get(`${config.apiUrl}/projects/${config.projectId}/databases/(default)/documents/usuarios/${id}`,{},headersConfig);
};

const createUsuario = (usuario) => {
  var data = null;
  if(usuario.id){
    data={"writes":[{"update":{"name":`projects/${config.projectId}/databases/(default)/documents/usuarios/${usuario.id}`,"fields":{"nombre":{"stringValue":usuario.nombre},"email":{"stringValue":usuario.email}}}}]};
  } else {
    data={"writes":[{"update":{"name":`projects/${config.projectId}/databases/(default)/documents/usuarios/${Date.now()}`,"fields":{"nombre":{"stringValue":usuario.nombre},"email":{"stringValue":usuario.email}}}}]};
  }
    return axios.post(`${config.apiUrl}/projects/${config.projectId}/databases/(default)/documents:commit`,data,headersConfig);
};

export {
  getUsuarios,
  getUsuario,
  createUsuario
};
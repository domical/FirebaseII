import { createStore } from "vuex";
import { getFirestore, collection, onSnapshot, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import firebaseApp from '../firebaseconfig.js';
const db = getFirestore(firebaseApp);
const usuariosRef = collection(db, 'usuarios');

const store = createStore({
  state() {
    return {
      usuarios: []
    };
  },
  mutations: {
    setUsuarios(state, usuarios) {
      state.usuarios = usuarios;
    }
  },
  actions: {
    fetchUsuarios({commit}){
      onSnapshot(usuariosRef,(snapshot) => {
        const usuarios = snapshot.docs.map((doc) => ({
          id:doc.id,
          ...doc.data()
        }));
        commit('setUsuarios', usuarios);
      });
    },
    async addUsuario({dispatch}, nuevoUsuario){
      const { nombre, correo, colorFavorito } = nuevoUsuario;
      if (nombre.trim() === '' || correo.trim() === '' || colorFavorito.trim() === '') return;
      await addDoc(usuariosRef, { nombre, correo, colorFavorito });
      dispatch('fetchUsuarios');
    },
    async deleteUsuario({dispatch},UsuarioId){
      const usuariosRef=doc(db,'usuarios',UsuarioId);
      await deleteDoc(usuariosRef);
      dispatch('fetchUsuarios');
    },
    async editUsuario({dispatch},usuario){
      const {id,nombre,correo,colorFavorito}=usuario;
      const usuariosRef=doc(db,'usuarios',id);
      await updateDoc(usuariosRef,{nombre,correo,colorFavorito});
      dispatch('fetchUsuarios');
    }
  },
  getters:{
    usuarios:(state)=>state.usuarios
  }
});

export default store
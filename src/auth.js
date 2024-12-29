import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
  } from 'firebase/auth';
  import firebaseApp from '../firebaseconfig';
  
  const auth = getAuth(firebaseApp);
  const logout = async () => {
    try {
      await signOut(auth);
      console.log('Sesión cerrada correctamente');
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };
  export {
    auth,
    logout,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
  };
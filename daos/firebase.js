import admin from 'firebase-admin'
import { firebaseData } from '../config.js'
import ContenedorFirebase from '../contenedores/firebase.js'

class Mensajes extends ContenedorFirebase {
    constructor(db) {
        super(db.collection('mensajes'))
    }
}

admin.initializeApp({
  credential: admin.credential.cert(firebaseData),
  databaseURL: "https://basefirebase-b567c-firebase-adminsdk-hnuqn-d153643a45.com"
});


const db = admin.firestore()

export const mensajes = new Mensajes(db)

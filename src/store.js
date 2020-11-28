import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, compose } from 'redux';
import {
    ReactReduxFirebaseProvider,
    firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'; // <- needed if using firestore

const fbConfig = {
    apiKey: "AIzaSyCimnrPgtI1oKRir46xzRV_ByU3GdobjWc",
    authDomain: "student-database-9d0c7.firebaseapp.com",
    databaseURL: "https://student-database-9d0c7.firebaseio.com",
    projectId: "student-database-9d0c7",
    storageBucket: "student-database-9d0c7.appspot.com",
    messagingSenderId: "237720581159",
    appId: "1:237720581159:web:1022d9487778ae14724a02",
    measurementId: "G-G6CCCG2QPN"
}

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState, composeWithDevTools())

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}

export default store;
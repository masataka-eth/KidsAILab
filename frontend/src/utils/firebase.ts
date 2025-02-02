import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "@/config/project";

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const functions = getFunctions(firebaseApp, "asia-northeast1");
export const provider = new GoogleAuthProvider();
//export const functions = getFunctions(firebaseApp);

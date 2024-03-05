import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export async function loginEmailPassword(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
}

export async function logout() {
  await signOut(auth);
}

export async function signupEmailPassword(email: string, password: string) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
}

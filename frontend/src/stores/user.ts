import { defineStore } from "pinia";
import { User } from "firebase/auth";

interface UserState {
  uid: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    uid: null,
    displayName: null,
    photoURL: null,
  }),
  actions: {
    setUser(user: User) {
      this.uid = user.uid;
      this.displayName = user.displayName;
      this.photoURL = user.photoURL;
    },
    clearUser() {
      this.uid = null;
      this.displayName = null;
      this.photoURL = null;
    },
  },
});

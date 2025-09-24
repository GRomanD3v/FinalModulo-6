import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null, // o inicializa con el usuario guardado si existe
    }),
    actions: {
        login(userData) {
            this.user = userData;
        },
        logout(userData) {
            this.user = null;
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
    },
});
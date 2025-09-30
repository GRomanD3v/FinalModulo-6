import { defineStore } from "pinia";
import { login as authServiceLogin } from '../services/Auth.js';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null, 
    }),
    actions: {
        async login(credentials) {
            try {
                const userData = await authServiceLogin(credentials); 
                
                this.user = userData;
                return true; 
                
            } catch (error) {
                this.user = null;
                throw error; 
            }
        },
        logout() {
            this.user = null;
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
    },
});
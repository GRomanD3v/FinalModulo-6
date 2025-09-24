const validUser = {
    email: "usuario1@mitienda.com",
    password: "123456",
    name: "Usuario"
};

export const login = (creds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (creds.email === validUser.email && creds.password === validUser.password) {
                resolve({ name: creds.name, email: validUser.email });
            } else {
                reject(new Error("Credenciales inválidas. Por favor inténtelo de nuevo."));
            }
        }, 1000);
    });
};
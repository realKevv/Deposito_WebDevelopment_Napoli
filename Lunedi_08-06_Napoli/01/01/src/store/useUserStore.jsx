import { create } from 'zustand';

export const useUserStore = create((set) => ({
username: "Ospite",
role: "Visitatore",
isLoggedIn: false,

login: (name, userRole) => set({
username: name,
role: userRole,
isLoggedIn: true
}),

logout: () => set({
username: "Ospite",
role: "Visitatore",
isLoggedIn: false
})
}));
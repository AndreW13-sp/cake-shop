import { create } from "zustand";

import supabase from "../supabase";

const useAuth = create((set) => ({
   user: null,
   session: null,

   signup: async (credentials, cb) => {
      const { data, error } = await supabase.auth.signUp({
         email: credentials.email,
         password: credentials.password,
         options: {
            data: {
               firstName: credentials.firstName,
               lastName: credentials.lastName,
               role: credentials?.isAdmin ? "ADMIN" : "USER",
            },
         },
      });

      if (error) {
         set({ user: null });
         if (cb) cb(error, null);
         return;
      }

      set({ user: data.user });
      if (cb) cb(null, data.user);
   },

   login: async (credentials, cb) => {
      const { data, error } = await supabase.auth.signInWithPassword({
         email: credentials.email,
         password: credentials.password,
      });

      if (error) {
         if (cb) cb(error, null);
         return;
      }

      set({ user: data.user });
      if (cb) cb(null, data.user);
   },

   logout: async (cb) => {
      const { error } = await supabase.auth.signOut();
      if (error) {
         if (cb) cb(error);
         return;
      }
      set({ user: null });
      if (cb) cb(null);
   },

   getSession: async (cb) => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
         set({ session: null, user: null });
         if (cb) cb(null, error);
         return;
      }
      set({ session: data.session, user: data.session?.user });
      if (cb) cb(data.session, error);
   },

   setSession: (session) => set({ session, user: session?.user }),
}));

export default useAuth;

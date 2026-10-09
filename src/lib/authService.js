
import { supabase } from "./supabaseClient";

export async function loginAdmin(email, password) {
  if (!email || !password) {
    throw new Error("Введи email и пароль");
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Ошибка входа:", error.message);
    throw error;
  }

  return data;
}

export async function logoutAdmin() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Ошибка выхода:", error.message);
    throw error;
  }
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Ошибка проверки сессии:", error.message);
    throw error;
  }

  return data.session?.user ?? null;
}

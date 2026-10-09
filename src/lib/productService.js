
import { supabase } from "./supabaseClient";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Ошибка загрузки товаров:", error.message);
    throw error;
  }

  return data ?? [];
}

export async function addProduct(product) {
  if (!product || !product.name) {
    throw new Error("Укажи название товара");
  }

  const { data, error } = await supabase
    .from("products")
    .insert([product])
    .select()
    .single();

  if (error) {
    console.error("Ошибка добавления товара:", error.message);
    throw error;
  }

  return data;
}

export async function updateProduct(id, product) {
  if (!id || !product) {
    throw new Error("Не указан товар для обновления");
  }

  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Ошибка обновления товара:", error.message);
    throw error;
  }

  return data;
}

export async function deleteProduct(id) {
  if (!id) {
    throw new Error("Не указан ID товара");
  }

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Ошибка удаления товара:", error.message);
    throw error;
  }
}
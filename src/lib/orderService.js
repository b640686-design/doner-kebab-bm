
import { supabase } from "./supabaseClient";

export async function createOrder(order) {
  if (!order) {
    throw new Error("Заказ не указан");
  }

  const { error } = await supabase
    .from("orders")
    .insert([order]);

  if (error) {
    console.error("Ошибка создания заказа:", error.message);
    throw error;
  }

  return {
    ...order,
    id: `local-${Date.now()}`,
  };
}

export async function getOrders() {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Ошибка загрузки заказов:", error.message);
    throw error;
  }

  return data ?? [];
}

export async function updateOrderStatus(id, status) {
  if (!id || !status) {
    throw new Error("Не указан ID заказа или статус");
  }

  const { data, error } = await supabase
    .from("orders")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Ошибка обновления статуса:", error.message);
    throw error;
  }

  return data;
}

import { supabase } from "./supabaseClient";

export async function createOrder(order) {
  if (!order) throw new Error("Заказ не указан");

  const { data, error } = await supabase.functions.invoke(
    "bright-action",
    {
      body: {
        action: "create",
        order,
      },
    }
  );

  if (error) throw error;
  if (data?.error) throw new Error(data.error);

  if (!data?.order || !data?.trackingToken) {
    throw new Error("Не удалось получить данные заказа");
  }

  return {
    ...order,
    ...data.order,
    trackingToken: data.trackingToken,
  };
}

export async function getOrderStatus(trackingToken) {
  if (!trackingToken) {
    throw new Error("Нет кода отслеживания");
  }

  const { data, error } = await supabase.functions.invoke(
    "bright-action",
    {
      body: {
        action: "track",
        trackingToken,
      },
    }
  );

  if (error) throw error;
  if (data?.error) throw new Error(data.error);

  return data.order;
}

export async function getOrders() {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

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

  if (error) throw error;

  return data;
}
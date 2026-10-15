import type { ContactData } from "../types";
export async function sendContactMessage(
  data: ContactData,
  endpoint?: string,
): Promise<"demo" | "sent"> {
  if (!endpoint) return "demo";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Contact request failed");
  return "sent";
}

import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { sendContactMessage } from "../services";
import type {
  ContactData,
  ContactField,
  ContactMessages,
  ContactStatus,
} from "../types";

const initialValues: ContactData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
function isField(value: string): value is ContactField {
  return (
    value === "name" ||
    value === "email" ||
    value === "subject" ||
    value === "message"
  );
}
export interface ContactFormModel {
  readonly values: ContactData;
  readonly status: ContactStatus;
  readonly feedback: string | null;
  readonly onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  readonly onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}
export function useContactForm(
  messages: ContactMessages,
  endpoint?: string,
): ContactFormModel {
  const [values, setValues] = useState<ContactData>(initialValues);
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);
  const pending = useRef(false);
  function onChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.currentTarget;
    if (isField(name)) setValues((current) => ({ ...current, [name]: value }));
  }
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    setStatus("sending");
    setFeedback(null);
    try {
      const result = await sendContactMessage(values, endpoint);
      setStatus("success");
      setFeedback(result === "demo" ? messages.demoSuccess : messages.success);
      setValues(initialValues);
    } catch {
      setStatus("error");
      setFeedback(messages.error);
    } finally {
      pending.current = false;
    }
  }
  return { values, status, feedback, onChange, onSubmit };
}

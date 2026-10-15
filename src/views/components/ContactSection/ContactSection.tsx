import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import type { ConstructionSite } from "../../../types";
import type { ContactFormModel } from "../../../hooks";
import "./ContactSection.css";
export function ContactSection({
  content,
  form,
}: {
  readonly content: ConstructionSite["contact"];
  readonly form: ContactFormModel;
}) {
  return (
    <section
      className="build-contact container"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="build-contact__intro">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="contact-title">{content.title}</h2>
        <p>{content.text}</p>
        <p className="contact-region">
          <FiMapPin aria-hidden="true" />
          {content.region}
        </p>
        <div className="contact-note">
          <FiArrowUpRight aria-hidden="true" />
          <p>{content.note}</p>
        </div>
      </div>
      <form
        className="contact-form"
        onSubmit={(event) => {
          void form.onSubmit(event);
        }}
        aria-describedby="contact-privacy"
      >
        <div className="contact-form__row">
          <label>
            {content.form.nameLabel}
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              maxLength={120}
              value={form.values.name}
              onChange={form.onChange}
            />
          </label>
          <label>
            {content.form.emailLabel}
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              maxLength={254}
              value={form.values.email}
              onChange={form.onChange}
            />
          </label>
        </div>
        <label>
          {content.form.subjectLabel}
          <input
            name="subject"
            type="text"
            required
            maxLength={200}
            value={form.values.subject}
            onChange={form.onChange}
          />
        </label>
        <label>
          {content.form.messageLabel}
          <textarea
            name="message"
            rows={5}
            required
            maxLength={5000}
            value={form.values.message}
            onChange={form.onChange}
          />
        </label>
        <button
          className="button"
          type="submit"
          disabled={form.status === "sending"}
        >
          <span>
            {form.status === "sending"
              ? content.form.sending
              : content.form.submit}
          </span>
          <FiArrowUpRight aria-hidden="true" />
        </button>
        <p className="contact-privacy" id="contact-privacy">
          {content.form.privacyNotice}
        </p>
        {form.feedback && (
          <p
            className={`contact-feedback contact-feedback--${form.status}`}
            role={form.status === "error" ? "alert" : "status"}
          >
            {form.feedback}
          </p>
        )}
      </form>
    </section>
  );
}

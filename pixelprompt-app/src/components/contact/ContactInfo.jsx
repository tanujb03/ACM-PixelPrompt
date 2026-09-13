import { contact } from "../../data/mockData";
import SocialLinks from "../shared/SocialLinks";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <h2 className="text-lg font-semibold">Get in Touch</h2>
      <dl className="flex flex-col gap-3 text-sm">
        <div>
          <dt className="text-[var(--color-text-muted)]">Email</dt>
          <dd>
            <a href={`mailto:${contact.info.email}`} className="hover:text-[var(--color-accent)]">
              {contact.info.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-[var(--color-text-muted)]">Phone</dt>
          <dd>{contact.info.phone}</dd>
        </div>
        <div>
          <dt className="text-[var(--color-text-muted)]">Address</dt>
          <dd>{contact.info.address}</dd>
        </div>
        <div>
          <dt className="text-[var(--color-text-muted)]">Weekly Meeting</dt>
          <dd>{contact.info.meetingTime}</dd>
        </div>
      </dl>
      <div>
        <p className="mb-3 text-sm text-[var(--color-text-muted)]">Follow us</p>
        <SocialLinks />
      </div>
    </div>
  );
}

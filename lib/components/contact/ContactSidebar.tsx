import type { ContactSidebarTranslations } from "@/infrastructure/types/translations/screens";
import ContactCard from "./ContactCard";
import TrustIndicator from "./TrustIndicator";

interface ContactSidebarProps {
  t: ContactSidebarTranslations;
}

const ContactSidebar = ({ t }: ContactSidebarProps) => {
  return (
    <div className="lg:col-span-5 space-y-8 sticky top-32">
      <ContactCard t={t.contactCard} />
      <TrustIndicator t={t.trustIndicator} />
    </div>
  );
};

export default ContactSidebar;

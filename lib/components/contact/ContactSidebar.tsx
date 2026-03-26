import type { ContactDictionary } from "@/infrastructure/types";
import ContactCard from "./ContactCard";
import TrustIndicator from "./TrustIndicator";

interface ContactSidebarProps {
  t: ContactDictionary;
}

const ContactSidebar = ({ t }: ContactSidebarProps) => {
  return (
    <div className="lg:col-span-5 space-y-8 sticky top-32">
      <ContactCard t={t} />
      <TrustIndicator t={t} />
    </div>
  );
};

export default ContactSidebar;

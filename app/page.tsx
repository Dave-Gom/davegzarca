import { redirect } from "next/navigation";
import { defaultLocale } from "@/infrastructure/translations/dictionaries";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}

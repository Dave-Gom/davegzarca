import type { Locale } from "@/infrastructure/types/locale";
import type { CommonTranslations } from "@/infrastructure/types/translations/common";
import type { NavigationTranslations } from "@/infrastructure/types/translations/navigation";
import type { ScreensTranslations } from "@/infrastructure/types/translations/screens";

export type Dictionary = CommonTranslations &
  NavigationTranslations &
  ScreensTranslations;

type LocaleModules = {
  common: () => Promise<{ default: CommonTranslations }>;
  navigation: () => Promise<{ default: NavigationTranslations }>;
  screens: () => Promise<{ default: ScreensTranslations }>;
};

const localeModules: Record<Locale, LocaleModules> = {
  en: {
    common: () => import("./common/en"),
    navigation: () => import("./navigation/en"),
    screens: () => import("./screens/en"),
  },
  es: {
    common: () => import("./common/es"),
    navigation: () => import("./navigation/es"),
    screens: () => import("./screens/es"),
  },
  de: {
    common: () => import("./common/de"),
    navigation: () => import("./navigation/de"),
    screens: () => import("./screens/de"),
  },
};

const loadLocale = async (locale: Locale): Promise<Dictionary> => {
  const modules = localeModules[locale];
  const [common, navigation, screens] = await Promise.all([
    modules.common().then((m) => m.default),
    modules.navigation().then((m) => m.default),
    modules.screens().then((m) => m.default),
  ]);

  return { ...common, ...navigation, ...screens };
};

export default loadLocale;

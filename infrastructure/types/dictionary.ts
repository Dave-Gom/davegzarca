import type { getDictionary } from "../translations/dictionaries";

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

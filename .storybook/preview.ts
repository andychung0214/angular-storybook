import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

setCompodocJson(docJson);

const THEME_CLASS = {
  forest: "theme-forest",
  londonBlue: "theme-london-blue",
  wine: "theme-wine",
  luxuryGold: "theme-luxury-gold",
} as const;

const DEFAULT_THEME = "forest";

const STORAGE_KEY = "sb-preferred-theme";

const readStoredTheme = (): keyof typeof THEME_CLASS => {
  try {
    const stored = globalThis.localStorage?.getItem(STORAGE_KEY) as keyof typeof THEME_CLASS | null;
    if (stored && stored in THEME_CLASS) {
      return stored;
    }
  } catch {
    // Ignore storage access error in restricted environments.
  }

  return DEFAULT_THEME;
};

const writeStoredTheme = (themeKey: keyof typeof THEME_CLASS): void => {
  try {
    globalThis.localStorage?.setItem(STORAGE_KEY, themeKey);
  } catch {
    // Ignore storage access error in restricted environments.
  }
};

const applyThemeClass = (themeKey: keyof typeof THEME_CLASS) => {
  const classes = Object.values(THEME_CLASS);
  const nextClass = THEME_CLASS[themeKey] ?? THEME_CLASS[DEFAULT_THEME];

  document.documentElement.classList.remove(...classes);
  document.body.classList.remove(...classes);

  document.documentElement.classList.add(nextClass);
  document.body.classList.add(nextClass);
};

const initialTheme = readStoredTheme();

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global high-tech theme",
      defaultValue: initialTheme,
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "forest", title: "Forest Green" },
          { value: "londonBlue", title: "London Blue" },
          { value: "wine", title: "Wine Red" },
          { value: "luxuryGold", title: "Luxury Gold" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (storyFn, context) => {
      const selectedTheme = (context.globals["theme"] as keyof typeof THEME_CLASS) ?? initialTheme;
      applyThemeClass(selectedTheme);
      writeStoredTheme(selectedTheme);
      return storyFn();
    },
  ],
  parameters: {
    backgrounds: {
      default: "tech-grid",
      values: [
        { name: "tech-grid", value: "#07130d" },
        { name: "london-blue", value: "#091526" },
        { name: "wine-red", value: "#1c0710" },
        { name: "luxury-gold", value: "#1f1708" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

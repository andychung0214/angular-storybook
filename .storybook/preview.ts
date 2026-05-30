import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { create } from "@storybook/theming";
import docJson from "../documentation.json";

setCompodocJson(docJson);

const THEME_CLASS = {
  forest: "theme-forest",
  londonBlue: "theme-london-blue",
  wine: "theme-wine",
  luxuryGold: "theme-luxury-gold",
} as const;

const DEFAULT_THEME = "forest";

const docsTheme = create({
  base: "dark",
  brandTitle: "Angular Storybook Tech Theme",
  appBg: "#07130d",
  appContentBg: "#0f2d1f",
  appBorderColor: "rgba(95, 216, 148, 0.34)",
  appBorderRadius: 10,
  textColor: "#e6ffef",
  textInverseColor: "#031108",
  barBg: "#0a2315",
  barTextColor: "#baf8d2",
  barSelectedColor: "#5fd894",
  colorPrimary: "#28b165",
  colorSecondary: "#9ef0bf",
  inputBg: "#0b2518",
  inputBorder: "rgba(95, 216, 148, 0.32)",
  inputTextColor: "#e6ffef",
  inputBorderRadius: 8,
});

const applyThemeClass = (themeKey: keyof typeof THEME_CLASS) => {
  const classes = Object.values(THEME_CLASS);
  const nextClass = THEME_CLASS[themeKey] ?? THEME_CLASS[DEFAULT_THEME];

  document.documentElement.classList.remove(...classes);
  document.body.classList.remove(...classes);

  document.documentElement.classList.add(nextClass);
  document.body.classList.add(nextClass);
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global high-tech theme",
      defaultValue: DEFAULT_THEME,
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
      const selectedTheme = (context.globals["theme"] as keyof typeof THEME_CLASS) ?? DEFAULT_THEME;
      applyThemeClass(selectedTheme);
      return storyFn();
    },
  ],
  parameters: {
    docs: {
      theme: docsTheme,
    },
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

import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { SwitchComponent } from 'src/app/components/switch/switch.component';
// import { TextFieldComponent } from '../app/text-field/text-field.component';
import { moduleMetadata } from '@storybook/angular';
import { RadioComponent } from 'src/app/components/radio/radio.component';
import { FormControlComponent } from 'src/app/components/form-control/form-control.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldComponent } from 'src/app/components/text-field/text-field.component';

const meta: Meta<FormControlComponent> = {
  title: 'Data-Input-Components/FormControl',
  component: FormControlComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {  },
  // decorators: [
  //   applicationConfig({
  //     providers: [
  //       importProvidersFrom(BrowserAnimationsModule),
  //       // 添加其他全局模块或服务
  //     ],
  //   }),
  // ],
  decorators: [
    moduleMetadata({
      declarations: [TextFieldComponent, RadioComponent, SwitchComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<FormControlComponent>;


export const WithLabel : Story = {
  args: {
    label: 'Label',
  isRequired: true,
  isError: false,
  errorMessage: 'Error message',
  maxLength: 10,
  placement: 'top-left',
  },
};

export const Required  : Story = {
  args: {
    label: 'Label',
  isRequired: true,
  isError: false,
  errorMessage: 'Error message',
  maxLength: 10,
  placement: 'top-left',
  },
};

export const LimitMaxLength  : Story = {
  args: {
    label: 'Label',
  isRequired: true,
  isError: false,
  errorMessage: 'Error message',
  maxLength: 10,
  placement: 'top-left',
  },
};

export const ErrorMessage  : Story = {
  args: {
    label: 'Label',
  isRequired: true,
  isError: false,
  errorMessage: 'Error message',
  maxLength: 10,
  placement: 'top-left',
  },
};

export const WithDiffPlacementLabel  : Story = {
  args: {
    label: 'Label',
  isRequired: true,
  isError: false,
  errorMessage: 'Error message',
  maxLength: 10,
  placement: 'top-left',
  },
};

export const RadioWithLabel  : Story = {
  args: {
    label: 'Label',
  isRequired: true,
  isError: false,
  errorMessage: 'Error message',
  maxLength: 10,
  placement: 'top-left',
  },
};

export const SwitchWithLabel  : Story = {
  args: {
    label: 'Label',
  isRequired: true,
  isError: false,
  errorMessage: 'Error message',
  maxLength: 10,
  placement: 'top-left',
  },
};

// Repeat for Required, LimitMaxLength, ErrorMessage, etc.

export const ThemePlayground = {
  name: "Theme Playground",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
  render: (_args: unknown, context: { componentId?: string; id?: string }) => {
    const componentId = context.componentId ?? (context.id ? context.id.split("--")[0] : "");
    const baseStoryId = `${componentId}--withlabel`;
    const makeSrc = (theme: string) => `iframe.html?id=${baseStoryId}&viewMode=story&globals=theme:${theme}`;

    return {
      template: `
        <section class="theme-playground-wrap">
          <style>
            .theme-playground-wrap { padding: 16px; }
            .theme-playground-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(340px, 1fr));
              gap: 14px;
            }
            .theme-playground-card {
              border: 1px solid var(--line, rgba(95, 216, 148, 0.3));
              border-radius: 12px;
              overflow: hidden;
              background: var(--surface, #0b2518);
              box-shadow: 0 10px 22px rgba(0, 0, 0, 0.32);
            }
            .theme-playground-head {
              padding: 10px 12px;
              font-family: "Orbitron", "Rajdhani", sans-serif;
              font-size: 12px;
              letter-spacing: .05em;
              border-bottom: 1px solid var(--line, rgba(95, 216, 148, 0.3));
            }
            .theme-playground-frame {
              width: 100%;
              height: 320px;
              border: 0;
              display: block;
              background: transparent;
            }
            @media (max-width: 980px) {
              .theme-playground-grid { grid-template-columns: 1fr; }
            }
          </style>
          <div class="theme-playground-grid">
            <article class="theme-playground-card">
              <header class="theme-playground-head">森林綠</header>
              <iframe class="theme-playground-frame" src="${makeSrc("forest")}" loading="lazy"></iframe>
            </article>
            <article class="theme-playground-card">
              <header class="theme-playground-head">倫敦藍</header>
              <iframe class="theme-playground-frame" src="${makeSrc("londonBlue")}" loading="lazy"></iframe>
            </article>
            <article class="theme-playground-card">
              <header class="theme-playground-head">酒紅色</header>
              <iframe class="theme-playground-frame" src="${makeSrc("wine")}" loading="lazy"></iframe>
            </article>
            <article class="theme-playground-card">
              <header class="theme-playground-head">奢華金</header>
              <iframe class="theme-playground-frame" src="${makeSrc("luxuryGold")}" loading="lazy"></iframe>
            </article>
          </div>
        </section>
      `,
    };
  },
};

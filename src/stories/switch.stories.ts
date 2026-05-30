import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwitchComponent } from 'src/app/components/switch/switch.component';

const meta: Meta<SwitchComponent> = {
  title: 'Data-Input-Components/Switch',
  component: SwitchComponent,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      control: 'color',
    },
  },
  args: { onChange: fn() },
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
        // 添加其他全局模块或服务
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<SwitchComponent>;

export const Default: Story = {
  args: {

  isChecked: false,
  isDisabled: false,
  size: 'default',
  themeColor: 'primary',
  checkedChildren: '開',
  unCheckedChildren: '關',
  },
};


export const CustomColor: Story = {
  args: {

  isChecked: false,
  isDisabled: false,
  size: 'default',
  themeColor: 'gold',
  checkedChildren: 'On',
  unCheckedChildren: 'Off',
  },
};

export const DisabledSwitch: Story = {
  args: {

  isChecked: false,
  isDisabled: true,
  size: 'default',
  themeColor: 'primary',
  checkedChildren: 'On',
  unCheckedChildren: 'Off',
  },
};

// export const SwitchWithSize: Story = {
//   args: {

//   isChecked: false,
//   isDisabled: false,
//   size: 'default',
//   themeColor: 'primary',
//   checkedChildren: 'On',
//   unCheckedChildren: 'Off',
//   },
// };


// export const SwitchWithChildrenLabel: Story = {
//   args: {

//   isChecked: false,
//   isDisabled: false,
//   size: 'default',
//   themeColor: 'primary',
//   checkedChildren: 'On',
//   unCheckedChildren: 'Off',
//   },
// };

// export const Checked: Story = {
//   args: {

//     ...Default.args,
//     isChecked: true,
//   },
// };


export const ThemePlayground = {
  name: "Theme Playground",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
  render: (_args: unknown, context: { componentId?: string; id?: string }) => {
    const componentId = context.componentId ?? (context.id ? context.id.split("--")[0] : "");
    const baseStoryId = `${componentId}--default`;
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

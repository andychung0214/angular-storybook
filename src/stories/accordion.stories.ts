import { Meta, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionComponent } from 'src/app/components/accordion/accordion.component';
import { AccordionHeaderComponent } from 'src/app/components/accordion-header/accordion-header.component';
import { AccordionPanelComponent } from 'src/app/components/accordion-panel/accordion-panel.component';

export default {
  title: 'Data-Display-Components/Accordion',
  component: AccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
    }),
  ],
} as Meta<AccordionComponent>;

export const Default = {
  args: {
    header: 'Header Content Here',
    isExpand: false,
    items :[
      { question: 'Who is your favorite artist?', answer: 'Leonardo da Vinci.' },
    ],
  },
  template: `
    <app-accordion
      [header]="header"
      [isExpand]="isExpand"
      (onClick)="onClick()">
      <div>Panel Content Here</div>
    </app-accordion>
  `,
  props: {
    onClick: () => console.log('Accordion header clicked'),
  },
};

export const ShowSingleAccordion = {
  args: {
    title: 'Section 1',
    header: 'Header Content Here',
    isExpand: true,
  },
  template: `
  <app-accordion title="Section 1">
  This is the content of the first section.
</app-accordion>

<app-accordion title="Section 2">
  This is the content of the second section.
</app-accordion>
  `,
  props: {
    onClick: () => console.log('Accordion header clicked'),
  },
};

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

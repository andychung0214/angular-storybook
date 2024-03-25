import { Component, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  // No need for 'inputs' property to import CommonModule, remove it.
})
export class AccordionComponent {

@Input() items= [
  { question: 'Who is your favorite artist?', answer: 'Leonardo da Vinci.' },
  { question: 'What is your favorite movie genre?', answer: 'Science fiction.' },
  { question: 'What is your favorite book?', answer: '"To Kill a Mockingbird" by Harper Lee.' },
  { question: 'Do you have any pets?', answer: 'Yes, I have a dog named Max.' }
];

  // items = [
  //   { question: 'Who is your favorite artist?', answer: 'Leonardo da Vinci.' },
  //   { question: 'What is your favorite movie genre?', answer: 'Science fiction.' },
  //   { question: 'What is your favorite book?', answer: '"To Kill a Mockingbird" by Harper Lee.' },
  //   { question: 'Do you have any pets?', answer: 'Yes, I have a dog named Max.' }
  // ];

  constructor(private renderer: Renderer2) {}

  toggleAccordion(item: any, index: number): void {
    const isActive = item.classList.toggle('active'); // This toggles and returns the new state
    const content = item.querySelector('.item-content');
    const icon = item.querySelector('.item-icon i');

    this.renderer.setStyle(content, 'maxHeight', isActive ? `${content.scrollHeight}px` : null);
    console.log(`Accordion ${index} is now ${isActive ? 'open' : 'closed'}.`);
  }

}

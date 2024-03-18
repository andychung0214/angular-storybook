import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  @Input() resetKey: number = 0;
  @Input() accept?: string;
  @Input() multiple: boolean = false;
  @Output() change: EventEmitter<FileList | null> = new EventEmitter<FileList | null>();
  @ViewChild('inputFileRef')
  inputFileRef!: ElementRef<HTMLInputElement>;

  handleOnClickUpload(): void {
    this.inputFileRef.nativeElement.click();
  }

  handleOnChange(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    this.change.emit(files);
  }
}

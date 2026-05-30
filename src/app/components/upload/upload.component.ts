import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
onReset() {
throw new Error('Method not implemented.');
}
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  isOver: boolean = false;
  message: string = 'No Files Selected';

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isOver = true;
  }

  onDragLeave() {
    this.isOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.updateDropzoneFileList(files[0]);
      if (this.fileInput?.nativeElement) {
        this.fileInput.nativeElement.files = files;
      }
    }
    this.isOver = false;
  }
  updateDropzoneFileList(arg0: File) {
    throw new Error('Method not implemented.');
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.updateDropzoneFileList(input.files[0]);
    }
  }

  onSubmit() {
    const fileInput = this.fileInput?.nativeElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      console.log(file);
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  makeColor({ themeColor, isDisabled }: { themeColor: string; isDisabled?: boolean }): string {
    // Placeholder logic - adjust as per your actual color logic
    if (isDisabled) return '#cccccc'; // Example disabled color
    switch (themeColor) {
      case 'primary': return '#007bff'; // Example primary color
      case 'secondary': return '#6c757d'; // Example secondary color
      default: return themeColor; // Custom color
    }
  }
}

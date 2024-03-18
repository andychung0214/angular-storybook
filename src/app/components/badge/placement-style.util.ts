// placement-style.util.ts
export type BadgePlacement = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface PlacementStyle {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  transform: string;
}

export function getPlacementStyle(placement: BadgePlacement): PlacementStyle {
  const styleMap: { [key in BadgePlacement]: PlacementStyle } = {
    'top-left': { top: '0', left: '0', transform: 'translate(-50%, -50%)' },
    'top-right': { top: '0', right: '0', transform: 'translate(50%, -50%)' },
    'bottom-left': { bottom: '0', left: '0', transform: 'translate(-50%, 50%)' },
    'bottom-right': { bottom: '0', right: '0', transform: 'translate(50%, 50%)' },
  };

  return styleMap[placement];
}

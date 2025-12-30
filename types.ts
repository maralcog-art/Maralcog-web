
export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  year: string;
  medium: string;
  dimensions: string;
  isTopSale?: boolean;
  isSold?: boolean;
  category: 'portrait' | 'symbolic' | 'realism';
}

export interface NavLink {
  label: string;
  path: string;
}

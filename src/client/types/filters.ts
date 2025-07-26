export interface FilterProps {
  activeKey: string;
  onChange: (value: string) => void;
}

export interface FilterTagProps {
  activeKeys: string[];
  onToggle: (value: string) => void;
}

export interface FilterVal {
  sortBy: string;
  price: string;
  color: string;
  tags: string[];
}

export type Category = {
  id: string;
  name: string;
};

export interface CategoryTabsProps {
  active: string;
  onChange: (id: string) => void;
}

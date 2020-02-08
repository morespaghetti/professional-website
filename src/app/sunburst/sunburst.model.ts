export interface Sunburst {
  name: string;
  size?: number; // Required on elements with no children
  children?: Sunburst[];
}

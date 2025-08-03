export const colorOptions = [
  { label: "Black", value: "#000" },
  { label: "Blue", value: "#3b82f6" },
  { label: "Grey", value: "#9ca3af" },
  { label: "Green", value: "#22c55e" },
  { label: "Red", value: "#ef4444" },
  { label: "White", value: "#fff" },
];

export const sizeOptions = [
  { label: "XL", value: "xl" },
  { label: "L", value: "l" },
  { label: "M", value: "m" },
  { label: "S", value: "s" },
  { label: "XS", value: "xs" },
  ...Array.from({ length: 15 }, (_, i) => {
    const value = 28 + i;
    return { label: value.toString(), value };
  }),
];

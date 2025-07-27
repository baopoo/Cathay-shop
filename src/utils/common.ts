export const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize("NFD") // tách dấu tiếng Việt
    .replace(/[\u0300-\u036f]/g, "") // xoá dấu
    .replace(/[^a-z0-9\s-]/g, "") // loại ký tự đặc biệt
    .trim() // xoá khoảng trắng đầu/cuối
    .replace(/\s+/g, "-") // thay khoảng trắng bằng "-"
    .replace(/-+/g, "-"); // loại trùng dấu "-"
};

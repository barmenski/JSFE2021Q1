import { Category } from "./category";

const categories: Category[] = [
  {
    id: 0,
    text: "Action (set A)",
    image: "img/dance.jpg",
    url: "0",
  },
  {
    id: 1,
    text: "Action (set B)",
    image: "img/play.jpg",
    url: "1",
  },
  {
    id: 2,
    text: "Animal (set A)",
    image: "img/chick.jpg",
    url: "2",
  },
  {
    id: 3,
    text: "Animal (set B)",
    image: "img/fish1.jpg",
    url: "3",
  },
  {
    id: 4,
    text: "Clothes",
    image: "img/pants.jpg",
    url: "4",
  },
  {
    id: 5,
    text: "Emotions",
    image: "img/angry.jpg",
    url: "5",
  },
  {
    id: 6,
    text: "Electronics",
    image: "img/chip.jpg",
    url: "6",
  },
  {
    id: 7,
    text: "Garage",
    image: "img/press.jpg",
    url: "7",
  },
];

const newId = (function () {
  let id = categories.length;
  return () => id++;
})();

export function getCategories(): Promise<Category[]> {
  return Promise.resolve(categories);
}

export function getCategoryById(id: number): Promise<Category | undefined> {
  const category = categories.find((cat) => cat.id === id);
  return Promise.resolve(category);
}

export function deleteCategory(id: number): Promise<void> {
  const categoryIndex = categories.findIndex((cat) => cat.id === id);
  if (categoryIndex < 0) return Promise.reject(new Error("category not found"));
  categories.splice(categoryIndex, 1);
  return Promise.resolve();
}

export function createCategory(data: Category): Promise<Category> {
  const isExists = categories.findIndex((cat) => cat.text === data.text) >= 0;
  if (isExists) {
    return Promise.reject(
      new Error(`Category with name ${data.text} already exists`)
    );
  }
  const newCategory: Category = {
    ...data,
    id: newId(),
  };
  categories.push(newCategory);
  return Promise.resolve(newCategory);
}

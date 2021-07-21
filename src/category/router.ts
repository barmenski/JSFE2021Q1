import { Router } from "express";
import { Category } from "./category";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
} from "./repository";

const router = Router();

router.get("/", async (req, res) => {
  const categories = await getCategories();
  res.json(categories);
});

router.get("/:id", async (req, res) => {
  const catId = Number(req.params.id);
  if (!catId) {
    return res.sendStatus(400);
  }
  const cat = await getCategoryById(catId);
  if (!cat) {
    return res.sendStatus(404);
  }
  return res.json(cat);
});

router.delete("/:id", async (req, res) => {
  const catId = Number(req.params.id);
  if (!catId) {
    return res.sendStatus(400);
  }
  try {
    await deleteCategory(catId);
    return res.sendStatus(200);
  } catch (e) {
    return res.status(404).send(e);
  }
});
router.post("/", async (req, res) => {
  const data = req.body as Category;
  if (!data.text) return res.sendStatus(400);
  try {
    const newCategory = await createCategory(data);
    return res.json(newCategory);
  } catch (e) {
    return res.status(400).send(400).send(e);
  }
});

export default router;

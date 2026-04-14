import { Router } from "express";
import { create, list, remove, update } from "../controllers/taskController";

const router = Router();

router.post("/", create);
router.get("/", list);
router.delete("/:id", remove);
router.put("/:id", update);

export default router;

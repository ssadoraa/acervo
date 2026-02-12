import { Router } from "express";
import { Category } from "../enums/Category";

const categoryRouter = Router();

categoryRouter.get('/', (req, res) => {
    res.json(Object.values(Category));
});

export default categoryRouter;
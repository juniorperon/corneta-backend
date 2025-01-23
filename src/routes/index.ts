import { Router } from "express";
import playerRoutes from "./player.routes";
import GroupRoutes from "./group.routes";

const router = Router();

router.use("/player", playerRoutes);
router.use("/group", GroupRoutes);

export default router;

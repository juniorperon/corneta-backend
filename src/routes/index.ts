import { Router } from "express";
import playerRoutes from "./player.routes";
import GroupRoutes from "./group.routes";
import PlayRoutes from "./play.routes";
import PairRoutes from "./pair.routes";

const router = Router();

router.use("/player", playerRoutes);
router.use("/group", GroupRoutes);
router.use("/play", PlayRoutes);
router.use("/pair", PairRoutes);

export default router;

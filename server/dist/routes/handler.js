import { Router } from 'express';
const router = Router();
router.get("/api", (req, res) => {
    res.send({ message: "Hello World" });
});
export default router;
//# sourceMappingURL=handler.js.map
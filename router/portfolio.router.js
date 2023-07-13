import express from "express";
import PortfolioService from "../services/portfolio.service.js";

const router = express.Router();
const service = new PortfolioService();

router.get("/english", async (req, res) => {
  try {
    const data = await service.getEnglishData();
    res.json(data);
  } catch (error) {
    console.error(
      'Error al obtener archivos de la colección "english":',
      error.message
    );
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.get("/spanish", async (req, res) => {
  try {
    const data = await service.getSpanishData();
    res.json(data);
  } catch (error) {
    console.error(
      'Error al obtener archivos de la colección "spanish":',
      error.message
    );
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;

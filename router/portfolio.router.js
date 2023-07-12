import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.get("/english", async (req, res) => {
  try {
    const englishFiles = await mongoose.connection.db
      .collection("english")
      .find()
      .toArray();
    res.json(englishFiles);
  } catch (error) {
    console.error(
      'Error al obtener archivos de la colección "english":',
      error.message
    );
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.get("/spanish", (req, res) => {
  res.send("Spanish");
});

export default router;

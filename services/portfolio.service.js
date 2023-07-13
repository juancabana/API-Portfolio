import mongoose from "mongoose";

class PortfolioService {
  constructor() {}

  async getEnglishData() {
    const englishFiles = await mongoose.connection.db.collection("english").findOne();
    return englishFiles;
  }
  async getSpanishData() {
    const englishFiles = await mongoose.connection.db.collection("spanish").findOne();
    return englishFiles;
  }
}

export default PortfolioService;
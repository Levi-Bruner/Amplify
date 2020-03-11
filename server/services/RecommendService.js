import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class RecommendService {
  getAll(email) {
    throw new Error("Method not implemented.");
  }
  // NOTE  make sure to acess right db
  async findAll(query = {}) {
    let values = await dbContext.Recommend.find(query).populate(
      "creator",
      "name picture"
    );
    return values;
  }
  async findById(id) {
    let value = await dbContext.Recommend.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const recommendService = new RecommendService();

import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class RecommendssService {
  async getAll(userEmail) {
    return await dbContext.Recommends.find({ creatorEmail: userEmail }).populate("creator", "name picture")
  }

  async getById(id, userEmail) {
    let data = await dbContext.Recommends.findOne({ _id: id, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
    return data
  }
 
  async create(rawData) {
    let data = await dbContext.Recommends.create(rawData)
    return data
  }

 

  async delete(id, userEmail) {
    let data = await dbContext.Recommends.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID");
    }
  }

}


export const recommendsService = new RecommendssService()
import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class FavoritesService {
  async getAll(userEmail) {
    return await dbContext.Favorites.find({ creatorEmail: userEmail }).populate("creator", "name picture")
  }

  async getById(id, userEmail) {
    let data = await dbContext.Favorites.findOne({ _id: id, creatorEmail: userEmail }).populate("creator", "name picture")
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
    return data
  }
 
  async create(rawData) {
    let data = await dbContext.Favorites.create(rawData)
    return data
  }

 

  async delete(id, userEmail) {
    let data = await dbContext.Favorites.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID");
    }
  }

}


export const favoritesService = new FavoritesService()
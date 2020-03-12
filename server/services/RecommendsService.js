import {
  dbContext
} from "../db/DbContext"
import {
  BadRequest
} from "../utils/Errors"


class RecommendsService {
  async getByRecevierEmail(email) {
    let recommends = await dbContext.Recommends.find({ recevier: email })
    if (!recommends) {
      throw new BadRequest("Invalid email")
    }
    return recommends
  }
  async getAll(userEmail) {
    return await dbContext.Recommends.find({
      creatorEmail: userEmail
    }).populate("creator", "name picture")
  }

  async getById(id, userEmail) {
    let data = await dbContext.Recommends.findOne({
      _id: id,
      creatorEmail: userEmail
    }).populate("creator", "name picture")
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
    let data = await dbContext.Recommends.findOneAndRemove({
      _id: id,
      creatorEmail: userEmail
    });
    if (!data) {
      throw new BadRequest("Invalid ID");
    }
  }

}


export const recommendsService = new RecommendsService()
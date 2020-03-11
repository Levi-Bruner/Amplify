import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class UserDataService {
  async create(rawData) {
    let data = await dbContext.UserData.create(rawData)
    return data
  }
  async editUserName(id, userEmail, update) {
    let data = await dbContext.UserData.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
    return data;
  }
  async editTotal(id, userEmail, update) {
    let data = await dbContext.UserData.findOneAndUpdate({ _id: id, creatorEmail: userEmail, }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID")
    }
    return data;
  }
  async editPositive(id, data) {
    let postiveRecommend = await dbContext.UserData.findByIdAndUpdate(id, { postiveRecommends: data }, { new: true })
    return postiveRecommend;
  }
  async getAll(userEmail) {
    return await dbContext.UserData.find({ creatorEmail: userEmail }).populate("creator", "name picture")
  }
  async getAllUserData(email) {
    let UserData = await dbContext.UserData.find({ creatorEmail: email })
    if (!UserData) {
      throw new BadRequest("Invalid email");
    }
    return UserData;
  }
  async findAll(query = {}) {
    let values = await dbContext.UserData.find(query).populate(
      "creator",
      "name picture"
    );
    return values;
  }
  async findById(id) {
    let value = await dbContext.UserData.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const userDataService = new UserDataService();

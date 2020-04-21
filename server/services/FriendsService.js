import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class FriendsService {
  async getFriendsByEmail(email) {
    let friends = await dbContext.Friends.find({ owner: email })
    if (!friends) {
      throw new BadRequest("Invalid email")
    }
    return friends
  }
  async findAll(query = {}) {
    let values = await dbContext.Values.find(query).populate(
      "creator",
      "name picture"
    );
    return values;
  }
  async findById(id) {
    let value = await dbContext.Values.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const friendsService = new FriendsService();

import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

// Private Methods

/**
 * Creates profile if one does not exist
 * @param {any} profile
 * @param {any} user
 */
async function createProfileIfNeeded(profile, user) {
  if (!profile) {
    profile = await dbContext.Profile.create({
      ...user,
      subs: [user.sub]
    });
  }
  return profile;
}

/**
 * Adds sub to profile if not already on profile
 * @param {any} profile
 * @param {any} user
 */
async function mergeSubsIfNeeded(profile, user) {
  if (!profile.subs.includes(user.sub)) {
    // @ts-ignore
    profile.subs.push(user.sub);
    await profile.save();
  }
}
/**
 * Restricts changes to the body of the profile object
 * @param {any} body
 */
function sanitizeBody(body) {
  let writable = {
    name: body.name,
    picture: body.picture
  };
  return writable;
}

class ProfileService {
  async addPositive(email) {
    let profile = await dbContext.Profile.findOne({ email })
    if (!profile) {
      throw new BadRequest("Invalid Id")
    }
    // @ts-ignore
    profile.positiveRecommend++
    await profile.save()
    return profile;
  }
  async edit(email, data) {
    let positive = await dbContext.Profile.findOneAndUpdate({ email }, { positiveRecommend: data }, { new: true })
    return positive;
  }
  async editTotal(email, data) {
    let total = await dbContext.Profile.findOneAndUpdate({ email }, { totalRecommends: data }, { new: true })
    return total;
  }
  async editUsername(email, data) {
    let username = await dbContext.Profile.findOneAndUpdate({ email }, { username: data }, { new: true })
    return username;
  }

  async create(rawData) {
    let data = await dbContext.Profile.create(rawData)
    return data
  }
  async getById(id, userEmail) {
    let data = await dbContext.Profile.findOne({ _id: id, creatorEmail: userEmail })
    return data
  }



  /**
   * Provided an array of user emails will return an array of user profiles with email picture and name
   * @param {String[]} emails Array of email addresses to lookup users by
   */
  async getProfiles(emails = []) {
    let profiles = await dbContext.Profile.find({
      email: { $in: emails }
    }).select("email picture name");
    return profiles;
  }

  /**
   * Returns a user profile from the Auth0 user object
   *
   * Creates user if none exists
   *
   * Adds sub of Auth0 account to profile if not currently on profile
   * @param {any} user
   */
  async getProfile(user) {
    let profile = await dbContext.Profile.findOne({
      email: user.email
    });
    profile = await createProfileIfNeeded(profile, user);
    await mergeSubsIfNeeded(profile, user);
    return profile;
  }
  /**
​    * Updates profile with the request body, will only allow changes to editable fields
​    * @param {any} user Auth0 user object
​    * @param {any} body Updates to apply to user object
​    */
  async updateProfile(user, body) {
    let update = sanitizeBody(body);
    let profile = await dbContext.Profile.findOneAndUpdate(
      { email: user.email },
      { $set: update },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    );
    return profile;
  }
}
export const profilesService = new ProfileService();

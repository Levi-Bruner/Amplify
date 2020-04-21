import express from "express";
import BaseController from "../utils/BaseController";
import { friendsService } from "../services/FriendsService";
import auth0Provider from "@bcwdev/auth0provider";

export class FriendsController extends BaseController {
  constructor() {
    super("api/friends");
    this.router
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      let data = await friendsService.getFriendsByEmail(req.userInfo.email)
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creator = req.user.email;
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}

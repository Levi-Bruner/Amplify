import express from "express";
import BaseController from "../utils/BaseController";
import { userDataService } from "../services/UserDataService";
import auth0Provider from "@bcwdev/auth0provider";

export class UserDataController extends BaseController {
  constructor() {
    super("api/UserData");
    this.router
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("/:creatorEmail/favorites", this.getFavorites)
      .get("/:creatorEmail/postiveRecommends", this.getPositiveRecommends)
      .get("/:creatorEmail/totalRecommends", this.getTotalRecommends)
      .put("/creatorEmail/editPostiveRecommends", this.editPositiveReccommends)
      .put("/creatorEmail/editTotalRecommends", this.editTotalReccommends)
      .put("/creatorEmail/editUserName", this.editUserName)
      .post("/creatorEmail/setUserName", this.setUserName)
      .post("", this.create);
  }
  async getFavorites(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      let UserData = await userDataService.getFavorites(req.userinfo.email)
    } catch (error) {
      next(error);
    }
  }

  async getPositiveRecommends(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      let UserData = await userDataService.getPositiveRecommends(req.body.creatorEmail)
    } catch (error) {
      next(error);
    }
  }

  async getTotalRecommends(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      let UserData = await userDataService.getTotalRecommends(req.userInfo.email)
    } catch (error) {
      next(error);
    }
  }

  async editPositiveReccommends(req, res, next) {
    try {
      let UserData = await userDataService.editPositive(req.params.id, req.userinfo.email, req.body)
      return res.send(UserData)
    } catch (error) {
      next(error)
    }
  }

  async editTotalReccommends(req, res, next) {
    try {
      let UserData = await userDataService.editTotal(req.params.id, req.userinfo.email, req.body)
      return res.send(UserData)
    } catch (error) {
      next(error)
    }
  }
  async editUserName(req, res, next) {
    try {
      let UserData = await userDataService.editUserName(req.params.id, req.userinfo.email, req.body)
      return res.send(UserData)
    } catch (error) {
      next(error)
    }
  }
  async setUserName(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let UserData = await userDataService.create(req.body)
      return res.status(201).send(UserData)
    } catch (error) { next(error) }
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

import express from "express";
import BaseController from "../utils/BaseController";
import { userDataService } from "../services/UserDataService";
import auth0Provider from "@bcwdev/auth0provider";
import UserData from "../models/UserData";

export class UserDataController extends BaseController {
  constructor() {
    super("api/userData");
    this.router
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAll)
      .get(":/creatorEmail/email", this.getAllUserData)
      .put("/:id/editPositive", this.editPositiveRecommend)
      .put("/:creatorEmail/editTotalRecommends", this.editTotalRecommends)
      .put("/:creatorEmail/editUserName", this.editUserName)
      .post("/:creatorEmail/setUserName", this.setUserName)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      let data = await userDataService.getAll(req.userInfo.email)
      return res.sent(data)
    } catch (error) { next(error) }
  }

  async getAllUserData(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      let UserData = await userDataService.getAllUserData(req.body.creatorEmail);
      res.send(UserData);
    } catch (error) {
      next(error);
    }
  }

  async editPositiveRecommend(req, res, next) {
    try {

      let data = req.body.postiveRecommend
      let postiveRecommend = await userDataService.editPositive(req.params.id, data)
      return res.send(postiveRecommend)
    } catch (error) {
      next(error)
    }
  }

  async editTotalRecommends(req, res, next) {
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




import express from "express";
import BaseController from "../utils/BaseController";
import { recommendService } from "../services/RecommendService";
import auth0Provider from "@bcwdev/auth0provider";

export class RecommendController extends BaseController {
 
  constructor() {
    super("api/recommend");
    this.router
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
    .use(auth0Provider.getAuthorizedUserInfo)
    .get("", this.getAll)
    .get('/:id', this.getById)
    .post("", this.create)
    .delete("/:id",this.delete )
  }
  async getAll(userEmail) {
    return await dbContext.Boards.find({ creatorEmail: userEmail }).populate("creator", "name picture")
  }
  async getById(req, res, next) {
    try {
      //req.body.creatorEmail = req.userInfo.email
      let data = await recommendService.getById(req.params.id, req.userInfo.email)
      return res.send(data)
    } catch (error) { next(error) }
  }
  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await recommendService.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }
  async delete(req, res, next) {
    try {
      await recommendService.delete(req.params.id, req.userInfo.email)
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
  }


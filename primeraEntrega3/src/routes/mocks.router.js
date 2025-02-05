import { Router } from "express";
import mockManager from "../dao/users.manager.js";

const mocksRouter = Router();
const manager = mockManager();

mocksRouter.get('/mockingusers', async (req, res) =>{});

mocksRouter.post('/generateData', async (req, res) => {});

mocksRouter.post('/pets', async (req, res) => {});
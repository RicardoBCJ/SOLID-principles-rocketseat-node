import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    let id = user_id.toString();

    try {
      const list = this.listAllUsersUseCase.execute({ user_id: id });
      return response.status(201).json(list);
    } catch (e) {
      return response.status(400).json({ error: e });
    }
  }
}

export { ListAllUsersController };

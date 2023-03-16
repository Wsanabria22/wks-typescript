import { Request, Response, Router, NextFunction } from "express";
import { sequelize } from '../db';

const router = Router();
const {User} = sequelize.models;

router.get('/', (req: Request, res: Response,  next: NextFunction) => {
  User.findAll()
  .then((users) => {
   res.send(users);
  })
  .catch((error) => next(error));
});

router.post('/', (req: Request, res: Response,  next: NextFunction) => {
  const user = req.body;
  User.create(user)
   .then((createdUser) => {
    res.send(createdUser);
   })
   .catch((error) => next(error));
})

export default router;
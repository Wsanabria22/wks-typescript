import { Request, Response, Router, NextFunction } from "express";
import { sequelize } from '../db';

const router = Router();
const {User} = sequelize.models;

router.get('/', (req: Request, res: Response,  next: NextFunction) => {
  User.findAll()
  .then((users) => {
    console.log(users);
    res.send(users);
  })
  .catch((error) => next(error));
});

router.post('/', (req: Request, res: Response,  next: NextFunction) => {
  const user = req.body;
  User.create(user)
    .then((createdUser) => {
    res.status(200).send(createdUser);
  })
  .catch((error) => next(error));
})

router.delete('/:id', (req: Request, res: Response,  next: NextFunction) => {
  const idUser = req.params.id;
  console.log('borrando')
  User.destroy({ where: { id: idUser}})
    .then((result) => {
    console.log('result',result);
    res.sendStatus(201).send(result);
  })
  .catch((error) => next(error));
})

export default router;

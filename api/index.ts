import app from './src/app';
import { sequelize }  from './src/db';


sequelize.sync({ force: true, logging: false})
  .then(() => {
    console.log('base de datos conectada! :D');
    app.listen(3001, () => {
        console.log('App is listening in port 3001!')
    });
  })
  .catch((err) => { console.log(err) })




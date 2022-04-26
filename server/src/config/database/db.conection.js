import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    host: 'localhost',
    database: 'memes_app',
    username: 'postgres',
    password: 'freddy',
    dialect: 'postgres'
})

const testDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('The database is connected');
    } catch (err) {
        console.log(err);
    }
}
testDb();

export default sequelize;
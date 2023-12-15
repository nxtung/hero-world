class HeroCarRepository {

    constructor(dao) {
        this.dao = dao
    }

    create(heroCar) {
        const { carId, heroId, relation } = heroCar
        return this.dao.insertQuery(
            `INSERT INTO HeroCar (carId, heroId, relation) VALUES (?, ?, ?)`,
            [carId, heroId, relation])
    }

    update(heroCar) {
        const { id, carId, heroId, relation } = heroCar
        return this.dao.runQuery(
            `UPDATE HeroCar SET carId = ?, heroId = ?, relation = ? WHERE id = ?`,
            [carId, heroId, relation, id]
        )
    }

    delete(id) {
        return this.dao.runQuery(
            `DELETE FROM HeroCar WHERE id = ?`,
            [id]
        )
    }

    getById(id) {
        return this.dao.get(
            `SELECT * FROM HeroCar WHERE id = ?`,
            [id])
    }

    getAll() {
        return this.dao.all(`SELECT * FROM HeroCar`)
    }

    getSome(number) {
        if(number === undefined || number > 100 || number < 10) number = 10
        return this.dao.all(`SELECT * FROM HeroCar LIMIT ${number};`)
    }

    empty(){
        return this.dao.runQuery(`DELETE FROM HeroCar`)
    }

}

export default HeroCarRepository
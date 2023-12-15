class CarsRepository {

    constructor(dao) {
        this.dao = dao
    }

    create(car) {
        const { link, name, image, doors, years, type } = car
        return this.dao.runQuery(
            'INSERT INTO cars (link, name, image, doors, years, type) VALUES (?, ?, ?, ?, ?, ?)',
            [link, name, image, doors, years, type])
    }

    update(car) {
        const { id, link, name, image, doors, years, type } = car
        return this.dao.runQuery(
            `UPDATE cars SET link = ? , name = ?, image = ?, doors = ?, years = ?, type = ?  WHERE id = ?`,
            [link, name, image, doors, years, type, id]
        )
    }

    updateVote(car) {
        const { id } = car
        return this.dao.runQuery(
            `UPDATE cars SET vote = vote + 1 WHERE id = ?`,
            [id]
        )
    }

    delete(id) {
        return this.dao.runQuery(
            `DELETE FROM cars WHERE id = ?`,
            [id]
        )
    }

    getById(id) {
        return this.dao.get(
            `SELECT * FROM cars WHERE id = ?`,
            [id])
    }

    getAll() {
        return this.dao.all(`SELECT * FROM cars`)
    }

    getSome(number) {
        if (number === undefined || number > 100 || number < 10) number = 10
        return this.dao.all(`SELECT * FROM Cars LIMIT ${number};`)
    }

    empty() {
        return this.dao.runQuery(`DELETE FROM cars`)
    }

    drop() {
        return this.dao.runQuery(`DROP TABLE IF EXISTS vote`)
    }

}

export default CarsRepository
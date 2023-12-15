class FactsRepository {

    constructor(dao) {
        this.dao = dao
    }

    create(fact) {
        const { heroId, name, value } = fact
        return this.dao.insertQuery(
            'INSERT INTO facts (heroId, name, value) VALUES (?, ?, ?)',
            [heroId, name, value])
    }

    update(fact) {
        const { heroId, name, value } = fact
        return this.dao.runQuery(
            `UPDATE facts SET heroId = ?, name = ? , value = ? WHERE id = ?`,
            [heroId, name, value]
        )
    }

    delete(id) {
        return this.dao.runQuery(
            `DELETE FROM facts WHERE id = ?`,
            [id]
        )
    }

    getById(id) {
        return this.dao.get(
            `SELECT * FROM facts WHERE id = ?`,
            [id])
    }

    getByHeroId(heroId) {
        return this.dao.all(
            `SELECT * FROM facts WHERE heroId = ?`,
            [heroId])
    }

    getAll() {
        return this.dao.all(`SELECT * FROM facts`)
    }

    getSome(number) {
        if(number === undefined || number > 100 || number < 0) number = 10
        return this.dao.all(`SELECT * FROM facts LIMIT ${number}`)
    }

    empty() {
        return this.dao.runQuery(`DELETE FROM facts`)
    }

}

export default FactsRepository
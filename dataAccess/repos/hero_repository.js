class HeroesRepository {

    constructor(dao) {
        this.dao = dao
    }
  
    create(hero) {
        const { name, link, image, desc } = hero
        return this.dao.insertQuery(
            'INSERT INTO heroes (name, link, image, desc) VALUES (?, ?, ?, ?)',
            [name, link, image, desc])
    }

    update(hero) {
        const { id, name, link, image, desc } = hero
        return this.dao.runQuery(
            `UPDATE heroes SET name = ?, link = ? , image = ?, desc = ? WHERE id = ?`,
            [name, link, image, desc, id]
        )
    }

    delete(id) {
        return this.dao.runQuery(
            `DELETE FROM heroes WHERE id = ?`,
            [id]
        )
    }

    getById(id) {
        return this.dao.get(
            `SELECT * FROM heroes WHERE id = ?`,
            [id])
    }

    getAll() {
        return this.dao.all(`SELECT * FROM heroes`)
    }

    getSome(number) {
        if(number === undefined || number > 100 || number < 10) number = 10
        return this.dao.all(`SELECT * FROM Heroes LIMIT ${number};`)
    }

    empty(){
        return this.dao.runQuery(`DELETE FROM heroes`)
    }

}

export default HeroesRepository
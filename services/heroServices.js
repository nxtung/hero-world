class HeroServices {
    constructor(heroRepo) {
        this.heroRepo = heroRepo
    }
    async getAll() {
        return this.heroRepo.getAll().then((rows) => { 
            let heroes = []
            rows.forEach(c => {
                heroes.push(c)
            })
            return heroes
        })
    }

    async getSome(number) {
        return this.heroRepo.getSome(number).then((rows) => { 
            let heroes = []
            rows.forEach(c => {
                heroes.push(c)
            })
            return heroes
        })
    }

    async getHeroDetails(id) {
        return this.heroRepo.getById(id)
    }

    async create(hero) {
        return await this.heroRepo.create(hero)
    }
    
    async delete(id) {
        return await this.heroRepo.delete(id)
    }

    async update(hero) {
        return await this.heroRepo.update(hero)
    }

}

export default HeroServices
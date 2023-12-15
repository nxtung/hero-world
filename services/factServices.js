class FactServices {
    constructor(factRepo) {
        this.factRepo = factRepo
    }
    async getAll() {
        return this.factRepo.getAll().then((rows) => { 
            let facts = []
            rows.forEach(c => {
                facts.push(c)
            })
            return facts
        })
    }

    async getSome(number) {
        return this.factRepo.getSome(number).then((rows) => { 
            let facts = []
            rows.forEach(c => {
                facts.push(c)
            })
            return facts
        })
    }

    async getFact(id) {
        return this.factRepo.getById(id)
    }

    async create(fact) {
        return await this.factRepo.create(fact)
    }
    
    async delete(id) {
        return await this.factRepo.delete(id)
    }

    async update(fact) {
        return await this.factRepo.update(fact)
    }

    async getHeroFact(heroId) {
        return await this.factRepo.getByHeroId(heroId)
    }

}

export default FactServices
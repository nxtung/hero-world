class HeroCarServices {
    constructor(heroCarRepo) {
        this.heroCarRepo = heroCarRepo
    }
    async getAll() {
        return this.heroCarRepo.getAll().then((rows) => { 
            let heroCars = []
            rows.forEach(c => {
                heroCars.push(c)
            })
            return heroCars
        })
    }

    async getSome(number) {
        return this.heroCarRepo.getSome(number).then((rows) => { 
            let heroCars = []
            rows.forEach(c => {
                heroCars.push(c)
            })
            return heroCars
        })
    }

    async getHeroCarDetails(id) {
        return this.heroCarRepo.getById(id)
    }

    async create(heroCar) {
        return await this.heroCarRepo.create(heroCar)
    }
    
    async delete(id) {
        return await this.heroCarRepo.delete(id)
    }

    async update(heroCar) {
        return await this.heroCarRepo.update(heroCar)
    }

}

export default HeroCarServices
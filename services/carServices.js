class CarServices {
    
    constructor(carRepo) {
        this.carRepo = carRepo
    }

    async getCars() {
        return this.carRepo.getSome(3).then((rows) => {
            let cars = []
            rows.forEach(c => {
                cars.push(c)
            })
            return cars
        })
    }

    async getById(id) {
        return await this.carRepo.getById(id)
    }

    async create(car) {
        return await this.carRepo.create(car)
    }

    async delete(id) {
        return await this.carRepo.delete(id)
    }

    async update(car) {
        return await this.carRepo.update(car)
    }

    async updateVote(car) {
        return await this.carRepo.updateVote(car)
    }
}

export default CarServices
import HeroworldDao from '../dataAccess/repos/dao.js';
import CarsRepository from '../dataAccess/repos/car_repository.js';
import CarServices from '../services/carServices.js';

const dao = HeroworldDao.getInstance()
const carRepo = new CarsRepository(dao)
const carServices = new CarServices(carRepo)

export async function getCarsHandler(req, res) {
    res.status(200).json(await carServices.getCars())
}

export async function getCarHandler(req, res) {
    const _cars = await carServices.getById(req.params.id)

    if (_cars === undefined) {
        res.status(400).json('Not found')
    } else res.status(200).json(_cars)
}

export async function addCarHandler(req, res) {
    const r = await carServices.create(req.body)
    res.status(200).json(r)
}

export async function deleteCarHandler(req, res) {
    const r = await carServices.delete(req.params.id)
    res.status(200).json(r)

}

export async function editCarHandler(req, res) {
    const r = await carServices.update(req.body)
    res.status(200).json(r)
}

export async function updateVoteHandler(req, res) {
    const r = await carServices.updateVote({ id: req.params.id })
    res.status(200).json(r)
}
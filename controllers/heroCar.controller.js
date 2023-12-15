import HeroworldDao from '../dataAccess/repos/dao.js';
import HeroCarRepository from '../dataAccess/repos/hero_car_repository.js';
import HeroCarServices from '../services/heroCarServices.js';

const dao = HeroworldDao.getInstance()
const heroCarRepo = new HeroCarRepository(dao)
const heroCarServices = new HeroCarServices(heroCarRepo)

export async function getAllHandler(req, res) {
    res.status(200).json(await heroCarServices.getAll())
}

export async function getSomeHandler(req, res) {
    res.status(200).json(await heroCarServices.getSome(req.params.number))
}

export async function getHeroCarDetailHandler(req, res) {
    res.status(200).json(await heroCarServices.getHeroCarDetails(req.params.id))
}

export async function addHeroCarHandler(req, res) {
    const r = await heroCarServices.create(req.body)
    res.status(200).json(r)
}

export async function deleteHeroCarHandler(req, res) {
    const r = await heroCarServices.delete(req.params.id)
    res.status(200).json(r)
}

export async function editHeroCarHandler(req, res) {
    const r = await heroCarServices.update(req.body)
    res.status(200).json(r)
}

import HeroworldDao from '../dataAccess/repos/dao.js';
import HeroesRepository from '../dataAccess/repos/hero_repository.js';
import HeroServices from '../services/heroServices.js';

const dao = HeroworldDao.getInstance()
const heroRepo = new HeroesRepository(dao)
const heroServices = new HeroServices(heroRepo)

export async function getAllHandler(req, res) {
    res.status(200).json(await heroServices.getAll())
}

export async function getSomeHandler(req, res) {
    res.status(200).json(await heroServices.getSome(req.params.number))
}

export async function getHeroDetailHandler(req, res) {
    res.status(200).json(await heroServices.getHeroDetails(req.params.id))
}

export async function addHeroHandler(req, res) {
    const r = await heroServices.create(req.body)
    res.status(200).json(r)

}

export async function deleteHeroHandler(req, res) {
    const r = await heroServices.delete(req.params.id)
    res.status(200).json(r)
}

export async function editHeroHandler(req, res) {
    const r = await heroServices.update(req.body)
    res.status(200).json(r)
}

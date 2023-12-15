import HeroworldDao from '../dataAccess/repos/dao.js';
import FactsRepository from '../dataAccess/repos/fact_repository.js';
import FactServices from '../services/factServices.js';

const dao = HeroworldDao.getInstance()
const factRepo = new FactsRepository(dao)
const factServices = new FactServices(factRepo)

export async function getAllHandler(req, res) {
    res.status(200).json(await factServices.getAll())
}

export async function getSomeHandler(req, res) {
    res.status(200).json(await factServices.getSome(req.params.number))
}

export async function getFactHandler(req, res) {
    res.status(200).json(await factServices.getFact(req.params.id))
}

export async function addFactHandler(req, res) {
    const r = await factServices.create(req.body)
    res.status(200).json(r)
}

export async function deleteFactHandler(req, res) {
    const r = await factServices.delete(req.params.id)
    res.status(200).json(r)
}

export async function editFactHandler(req, res) {
    const r = await factServices.update(req.body)
    res.status(200).json(r)
}

export async function getHeroFactHandler(req, res) {
    const r = await factServices.getHeroFact(req.params.heroId)
    res.status(200).json(r)
}
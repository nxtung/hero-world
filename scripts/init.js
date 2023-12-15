import HeroworldDao from '../dataAccess/repos/dao.js';
import HeroCarRepository from '../dataAccess/repos/hero_car_repository.js';

async function main() {
  const dao = HeroworldDao.getInstance()
  const repo = new HeroCarRepository(dao)
  // repo.alterTable()
  repo.createTable()

}

await main()
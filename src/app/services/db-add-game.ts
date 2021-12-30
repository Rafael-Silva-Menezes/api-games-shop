import {Game} from 'domain/entities/game';
import {AddGame, AddGameParams} from 'domain/usecases/add-game';
import {AddGameRepository} from '../contracts/game-repository';

export class DbAddGameServices implements AddGame {
  private readonly repository: AddGameRepository;
  constructor(repository: AddGameRepository) {
    this.repository = repository;
  }

  async add(data: AddGameParams): Promise<Game> {
    await this.repository.insert(data);

    return new Promise((resolve) => resolve(null));
  }
}

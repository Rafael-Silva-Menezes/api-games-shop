import {Game} from '@/domain/entities/game';
import {AddGameParams} from '@/domain/usecases/add-game';
import {AddGameRepository} from '../contracts/game-repository';
import {DbAddGameServices} from './db-add-game';


describe('Database AddGames Services', () => {
  it('Should AddGameRepository method insert calls with correct values', async () => {
    class AddGameRepositoryStub implements AddGameRepository {
      insert(game: AddGameParams): Promise<Game> {
        return new Promise((resolve) => resolve(null));
      }
    }

    const gameData: AddGameParams = {
      name: 'any_name',
      type: ['any_type'],
    };

    const addGameRepositoryStub = new AddGameRepositoryStub();
    const addSpy = jest.spyOn(addGameRepositoryStub, 'insert');

    const sut = new DbAddGameServices(addGameRepositoryStub);

    await sut.add(gameData);

    expect(addSpy).toHaveBeenCalledWith(gameData);
  });
});

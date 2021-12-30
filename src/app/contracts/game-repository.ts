import {Game} from 'domain/entities/game';
import {AddGameParams} from 'domain/usecases/add-game';

export interface AddGameRepository {
  insert(game:AddGameParams): Promise<Game>
}

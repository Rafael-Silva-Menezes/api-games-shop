import {Game} from 'domain/entities/game';

export interface AddGame {
  add(data: AddGameParams): Promise<Game>
}

export type AddGameParams = {
  name: string;
  type: string[];
}

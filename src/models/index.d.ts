import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Team {
  GOOD = "GOOD",
  EVIL = "EVIL"
}

export enum Character {
  EMPATH = "EMPATH",
  LIBRARIAN = "LIBRARIAN",
  FORTUNETELLER = "FORTUNETELLER",
  MONK = "MONK",
  SOLDIER = "SOLDIER",
  VIRGIN = "VIRGIN"
}



type PlayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlayerSessionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SessionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Player {
  readonly id: string;
  readonly name: string;
  readonly playerSession: PlayerSession[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Player, PlayerMetaData>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player, PlayerMetaData>) => MutableModel<Player, PlayerMetaData> | void): Player;
}

export declare class PlayerSession {
  readonly id: string;
  readonly player: Player;
  readonly session: Session;
  readonly character: Character | keyof typeof Character;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PlayerSession, PlayerSessionMetaData>);
  static copyOf(source: PlayerSession, mutator: (draft: MutableModel<PlayerSession, PlayerSessionMetaData>) => MutableModel<PlayerSession, PlayerSessionMetaData> | void): PlayerSession;
}

export declare class Session {
  readonly id: string;
  readonly sessionDate: string;
  readonly winningTeam: Team | keyof typeof Team;
  readonly playerSession: PlayerSession[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Session, SessionMetaData>);
  static copyOf(source: Session, mutator: (draft: MutableModel<Session, SessionMetaData>) => MutableModel<Session, SessionMetaData> | void): Session;
}
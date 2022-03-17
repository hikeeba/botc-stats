// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Team = {
  "GOOD": "GOOD",
  "EVIL": "EVIL"
};

const Character = {
  "EMPATH": "EMPATH",
  "LIBRARIAN": "LIBRARIAN",
  "FORTUNETELLER": "FORTUNETELLER",
  "MONK": "MONK",
  "SOLDIER": "SOLDIER",
  "VIRGIN": "VIRGIN"
};

const { Player, PlayerSession, Session } = initSchema(schema);

export {
  Player,
  PlayerSession,
  Session,
  Team,
  Character
};
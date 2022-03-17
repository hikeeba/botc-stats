/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      name
      playerSession {
        items {
          id
          character
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          playerPlayerSessionId
          sessionPlayerSessionId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        playerSession {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlayers = /* GraphQL */ `
  query SyncPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlayers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        playerSession {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPlayerSession = /* GraphQL */ `
  query GetPlayerSession($id: ID!) {
    getPlayerSession(id: $id) {
      id
      player {
        id
        name
        playerSession {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      session {
        id
        sessionDate
        winningTeam
        playerSession {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      character
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      playerPlayerSessionId
      sessionPlayerSessionId
    }
  }
`;
export const listPlayerSessions = /* GraphQL */ `
  query ListPlayerSessions(
    $filter: ModelPlayerSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        player {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        session {
          id
          sessionDate
          winningTeam
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        character
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        playerPlayerSessionId
        sessionPlayerSessionId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlayerSessions = /* GraphQL */ `
  query SyncPlayerSessions(
    $filter: ModelPlayerSessionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlayerSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        player {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        session {
          id
          sessionDate
          winningTeam
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        character
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        playerPlayerSessionId
        sessionPlayerSessionId
      }
      nextToken
      startedAt
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
      id
      sessionDate
      winningTeam
      playerSession {
        items {
          id
          character
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          playerPlayerSessionId
          sessionPlayerSessionId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sessionDate
        winningTeam
        playerSession {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSessions = /* GraphQL */ `
  query SyncSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sessionDate
        winningTeam
        playerSession {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;

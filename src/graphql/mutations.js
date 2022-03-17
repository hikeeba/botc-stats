/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createPlayerSession = /* GraphQL */ `
  mutation CreatePlayerSession(
    $input: CreatePlayerSessionInput!
    $condition: ModelPlayerSessionConditionInput
  ) {
    createPlayerSession(input: $input, condition: $condition) {
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
export const updatePlayerSession = /* GraphQL */ `
  mutation UpdatePlayerSession(
    $input: UpdatePlayerSessionInput!
    $condition: ModelPlayerSessionConditionInput
  ) {
    updatePlayerSession(input: $input, condition: $condition) {
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
export const deletePlayerSession = /* GraphQL */ `
  mutation DeletePlayerSession(
    $input: DeletePlayerSessionInput!
    $condition: ModelPlayerSessionConditionInput
  ) {
    deletePlayerSession(input: $input, condition: $condition) {
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
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
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
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
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
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
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

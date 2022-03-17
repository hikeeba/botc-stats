/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreatePlayerSession = /* GraphQL */ `
  subscription OnCreatePlayerSession {
    onCreatePlayerSession {
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
export const onUpdatePlayerSession = /* GraphQL */ `
  subscription OnUpdatePlayerSession {
    onUpdatePlayerSession {
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
export const onDeletePlayerSession = /* GraphQL */ `
  subscription OnDeletePlayerSession {
    onDeletePlayerSession {
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession {
    onCreateSession {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession {
    onUpdateSession {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession {
    onDeleteSession {
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

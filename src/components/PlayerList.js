import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'sessionCount', headerName: 'Plays', flex: 1 },
  { field: 'winCount', headerName: 'Wins', flex: 1 },
  { field: 'lossCount', headerName: 'Losses', flex: 1 },
  { field: 'winPercentage', headerName: 'Win %', flex: 1 },
  { field: 'rank', headerName: 'Rank', flex: 1 },
];

const rows = [
  { id: 1, name: 'Bob', sessionCount: 2 },
  { id: 2, name: 'Catharine', sessionCount: 5 },
  { id: 3, name: 'Jameson', sessionCount: 8 },
];

const PlayerList = () => {
  return (
    <div style={{ display: 'flex', height: '300px' }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          columns={columns}
          rows={rows}
        />
      </div>
    </div>
  );
};

export default PlayerList;
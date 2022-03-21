import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DataStore } from 'aws-amplify';

import { Player } from '../models';

const columns = [
  { field: 'rank', headerName: 'Rank', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'winPercentage', headerName: 'Win %', flex: 1 },
  { field: 'sessionCount', headerName: 'Plays', flex: 1 },
  { field: 'winCount', headerName: 'Wins', flex: 1 },
  { field: 'lossCount', headerName: 'Losses', flex: 1 },
];

const PlayerList = () => {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const players = await DataStore.query(Player);

      setGridData(players);
    };

    fetchData();
  }, []);

  return (
    <>
    <div style={{ display: 'flex', height: '300px' }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          columns={columns}
          rows={gridData}
        />
      </div>
    </div>
    </>
  );
};

export default PlayerList;
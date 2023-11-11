import React, { useCallback, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import update from 'immutability-helper';

import { AppState } from 'store/reducer';
import { useDrag, useDrop } from 'react-dnd';
import { teamA, teamB } from 'constants/playerList';
import { IoIosShirt } from 'react-icons/io';
import { exportComponentAsPNG } from 'react-component-export-image';
import BaseInput from 'components/Input';
import BaseButton from 'components/Button';
import { AiOutlineDownload, AiOutlineSetting } from 'react-icons/ai';
import Switch from 'components/Switch';
import BaseToggleSwitch from 'components/ToggleSwitch';

const ItemTypes = {
  BOX: 'box',
};

const DraggableItem = ({ name, index, jersey_color, id, team, top, left }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, team, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, team, left, top],
  );
  return (
    <div style={{ left, top }} ref={drag} className="teamA_player">
      <div>
        <IoIosShirt style={{ fill: `${jersey_color}`, fontSize: '3rem' }} />
      </div>

      <div style={{ color: 'white' }}>{name}</div>
    </div>
  );
};

const Index: React.FC<PropsFromRedux> = ({}) => {
  const [teamAPlayers, setTeamAPlayers] = useState(teamA);
  const [teamBPlayers, setTeamBPlayers] = useState(teamB);

  const ItemTypes = {
    BOX: 'box',
  };

  const moveBox = useCallback(
    (id, team, left, top) => {
      if (team == 'A') {
        setTeamAPlayers(
          update(teamAPlayers, {
            [id - 1]: {
              $merge: { left, top },
            },
          }),
        );
      } else {
        setTeamBPlayers(
          update(teamBPlayers, {
            [id - 1]: {
              $merge: { left, top },
            },
          }),
        );
      }
    },
    [teamAPlayers, setTeamAPlayers, teamBPlayers, setTeamBPlayers],
  );
  const componentRef = useRef();
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, item?.team, left, top);
        return undefined;
      },
    }),
    [moveBox],
  );

  const handleNameChange = (index, newName) => {
    const updatedPlayers = [...teamAPlayers];
    updatedPlayers[index].name = newName;
    setTeamAPlayers(updatedPlayers);
  };
  const handleNameChangeB = (index, newName) => {
    const updatedPlayers = [...teamBPlayers];
    updatedPlayers[index].name = newName;
    setTeamBPlayers(updatedPlayers);
  };
  const [showTeamB, setShowTeamB] = useState(true);
  console.log(showTeamB, 'Sdf ');
  return (
    <div id="playground">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '300px', borderRight: '1px solid silver' }}>
          <div style={{ borderBottom: '1px solid silver', padding: '0.75rem' }}>Team A</div>
          {teamAPlayers.map((player, index) => (
            <div style={{ margin: '1rem' }}>
              <BaseInput
                value={player.name}
                onChange={(e) => handleNameChange(index, e.target.value)}
              />
            </div>
          ))}
          <input
            type="color"
            value={teamAPlayers[0]?.jersey_color}
            onChange={(e) =>
              setTeamAPlayers(
                teamAPlayers.map((player) => ({ ...player, jersey_color: e.target.value })),
              )
            }
          />
        </div>
        <div>
          <div
            style={{
              padding: '0.75rem 0',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '1rem',
            }}>
            {/* <BaseButton btnType={'outlined'} onClick={() => exportComponentAsPNG(componentRef)}>
              Download
            </BaseButton> */}
            <AiOutlineDownload onClick={() => exportComponentAsPNG(componentRef)} />
            <AiOutlineSetting />
          </div>
          <div ref={componentRef}>
            <div ref={drop} className="container">
              <div>
                {showTeamB &&
                  teamBPlayers.map((player, index) => (
                    <DraggableItem
                      key={index}
                      id={player.id}
                      left={player.left}
                      top={player.top}
                      index={index}
                      name={player.name}
                      team={player.team}
                      jersey_color={player.jersey_color}
                    />
                  ))}
                {teamAPlayers.map((player, index) => (
                  <DraggableItem
                    key={index}
                    id={player.id}
                    left={player.left}
                    top={player.top}
                    index={index}
                    name={player.name}
                    team={player.team}
                    jersey_color={player.jersey_color}
                  />
                ))}
              </div>
              <div className="line"></div>
              <div className="half"></div>
              <div className="panelty left"></div>
              <div className="panelty right"></div>
              <div className="p-spot left">&nbsp;</div>
              <div className="p-spot right">&nbsp;</div>
              <div className="center"></div>
              <div className="p-place left"></div>
              <div className="p-place right"></div>
            </div>
          </div>
        </div>

        <div style={{ width: '300px', borderLeft: '1px solid silver' }}>
          <div style={{ borderBottom: '1px solid silver', padding: '0.75rem' }}>Team B</div>

          {/* <BaseToggleSwitch checked={showTeamB} onClick={() => setShowTeamB(!showTeamB)} /> */}
          {teamBPlayers.map((player, index) => (
            <div style={{ margin: '1rem' }}>
              <BaseInput
                value={player.name}
                onChange={(e) => handleNameChange(index, e.target.value)}
              />
            </div>
          ))}
          <input
            type="color"
            value={teamBPlayers[0]?.jersey_color}
            onChange={(e) =>
              setTeamBPlayers(
                teamBPlayers.map((player) => ({ ...player, jersey_color: e.target.value })),
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ appState: { me } }: AppState) => ({
  me,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Index);

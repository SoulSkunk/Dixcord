import AllUsers from "../../data/users.json"; //bon chemin
import styled from "styled-components";
import discordLogo from "../../images/discord.png";
import Status from "../../images/Status.png";

//Style Function

//ONlineTable Style

const ONStylesTable = styled.table`
  //div chaque pseudo
  th {
    font-size: 1vw;
    color: rgb(124 124 124);
    width: 10vw;
    height: auto;
  }

  td {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0% 5% 0% 5%;
    width: 100%;
    height: auto;
  }
  //hover div chaque pseudo
  td:hover {
    background-color: var(--hover-color);
    transition: 0.3s;
    border-radius: 7px;
    p {
      font-size: 1.1vw;
    }
  }
  //Username text
  p {
    font-size: 1vw;
    margin-left: 0.5vw;
    font-family: "Noto Sans";
    color: rgb(138 141 153);
  }

  //img
  .discord_logo {
    width: 1.5vw;
    height: 1.5vw;
    border-radius: 100%;
  }

  #box_img_parent {
    position: relative;
  }

  #box_img_enfant {
    position: absolute;
    top: 35%;
    left: 45%;
  }

  .status_logo {
    width: 15px;
    height: 15px;
  }
`;
//////////////////////////////////////////////////////////////////////////////////
//OFFlineTable Style
const OFFLineStylesTable = styled.table`
  //div chaque pseudo
  th {
    font-size: 1vw;
    color: rgb(124 124 124);
    width: 10vw;
    height: auto;
  }

  td {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0% 5% 0% 5%;
    width: 100%;
    height: auto;
    opacity: 0.3;
  }

  td:hover {
    background-color: var(--hover-color);
    transition: 0.3s;
    border-radius: 7px;
    opacity: 1;
    p {
      font-size: 1.1vw;
    }
  }
  p {
    font-size: 1vw;
    color: rgb(138 141 153);
    margin-left: 0.5vw;
  }

  .discord_logo {
    width: 1.5vw;
    height: 1.5vw;
    border-radius: 100%;
  }

  //
`;

function UsersStatus() {
  const users_online = AllUsers.filter((user) => user.online); //ca affiche que les users online
  console.log(users_online);
  const users_offline = AllUsers.filter((user) => !user.online); //ca affiche que les users offline
  console.log(users_offline);

  //création des tableau Online et Offline
  let tab_online = [];
  let tab_offline = [];

  tab_online.push(users_online); //tous ceux qui ont true dans online
  tab_offline.push(users_offline); //tous ceux qui ont false dans offline

  console.log(tab_online);
  console.log(tab_offline);

  return (
    <div id="users_left_bar">
      {/* Affichage Online */}
      <ONStylesTable>
        <thead>
          <tr>
            <th>En ligne — {tab_online[0].length} </th>
          </tr>
        </thead>
        <tbody>
          {tab_online[0].map((user) => (
            <tr>
              <td>
                <div id="box_img_parent">
                  <img className="discord_logo" src={discordLogo} alt="" />
                  <div id="box_img_enfant">
                    <img className="status_logo" src={Status} alt="" />
                  </div>
                </div>
                <p>{user.name}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </ONStylesTable>
      {/* Affichage HorsLine */}
      <OFFLineStylesTable>
        <thead>
          <tr>
            <th>Hors ligne — {tab_offline[0].length}</th>
          </tr>
        </thead>
        <tbody>
          {tab_offline[0].map((user) => (
            <tr>
              <td>
                <img className="discord_logo" src={discordLogo} alt="" />
                <p>{user.name}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </OFFLineStylesTable>
    </div>
  );
}

export default UsersStatus;

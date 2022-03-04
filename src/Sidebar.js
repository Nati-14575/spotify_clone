import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";
function Sidebar() {
  const [{ playlists }] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />
      <SidebarOption optionLabel={"Home"} Icon={HomeIcon} />
      <SidebarOption optionLabel={"Search"} Icon={SearchIcon} />
      <SidebarOption optionLabel={"Your Library"} Icon={LibraryMusicIcon} />
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        return <SidebarOption optionLabel={playlist.name} />;
      })}
    </div>
  );
}

export default Sidebar;

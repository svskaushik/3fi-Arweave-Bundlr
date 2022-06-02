import React from "react";
import { useAlbum } from "../hooks/useAlbum";
import { useLocation } from "react-router";
import "./Album.css";
import Opensea from "../images/opensea.png";
import { ClockCircleOutlined } from "@ant-design/icons";
import { message, Spin } from 'antd';
import FavoriteButton from "../components/FavoriteButton";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";


const Album = ({ setNftAlbum }) => {
  const { state: albumDetails } = useLocation();
  const { album } = useAlbum(albumDetails.contract);
  const { Moralis, account } = useMoralis();
  const [favoriteList, setFavoritelist] = useState();
  const [fullAlbum, setFullAlbum] = useState();
  const [testAudio, setTestAudio] = useState(false);

  const fetchData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    
    return data
  }

  useEffect(() => {
    async function appendMeta () {
      if (album) {
      const songlist = await Promise.all(album.map(async(song) => {
        const url = song.token_uri.replace('http://arweave.net/', '');
        const data = await fetchData(`https://hhuie7qnkuazjnm5gvuohfi6tqfzeydzgg4vxs2la3czrjo3j4.arweave.net/${url}`)
        song.metadata = data
        return song
      }))
      setFullAlbum(songlist)
    }}

    appendMeta()
  }, [album])

  useEffect(() => {
    async function fetchFavorites() {
      await Moralis.start({
        serverUrl: "https://gkx1aszh57hy.usemoralis.com:2053/server",
        appId: "nhXoWGlnxP7U1RUeVuANk0AJEH0dzvYqsa1TR07n",
      });

      try {
        const favList = await Moralis.Cloud.run("getFavorites", { addrs: account }); 
        setFavoritelist(favList);
      } catch (error) {
        console.error(error)
      }
    }

    fetchFavorites();

  }, [account, Moralis])

  const handleNoContract = () => {
    message.error("Album does not have associated contract")
  };

  return (
    <>
      <div className="albumContent" style={{ "--background": albumDetails.image}} >
        <div className="topBan">
          <img
            src={albumDetails.image}
            alt="albumcover"
            className="albumCover"
          ></img>
          <div className="albumDeets">
            <div>ALBUM</div>
            <div className="title">{albumDetails.title}</div>
            <div className="artist">
              {fullAlbum && albumDetails.contract && fullAlbum[0].metadata.artist}
            </div>
            <div>
              {fullAlbum && albumDetails.contract && fullAlbum[0].metadata.year} •{" "}
              {fullAlbum && albumDetails.contract && album.length} Songs
            </div>
          </div>
        </div>
        <div className="topBan">
          <div className="playButton" onClick={() => albumDetails.contract ? setNftAlbum(fullAlbum) : handleNoContract() }>
            PLAY
          </div>
          <div
            className="openButton"
            onClick={() =>
              window.open(
                `https://testnets.opensea.io/assets/mumbai/${albumDetails.contract}/1`
              )
            }
          >
            OpenSea
            <img src={Opensea} className="openLogo" alt="Opensea link"/>
          </div>
          <div className="addFav">{favoriteList ? <FavoriteButton title={albumDetails.title} favList={favoriteList}/> : <Spin/> }</div>
        </div>
        <div className="tableHeader">
          <div className="numberHeader">#</div>
          <div className="titleHeader">TITLE</div>
          <div className="numberHeader">
            <ClockCircleOutlined />
          </div>
        </div>
        {fullAlbum &&
          fullAlbum.map((nft, i) => {
            nft = nft.metadata;
            return (
              <>
                <div className="tableContent">
                  <div className="numberHeader">{i + 1}</div>
                  <div
                    className="titleHeader"
                    style={{ color: "rgb(205, 203, 203)" }}
                  >
                    {nft.name}
                  </div>
                  <div className="numberHeader">{nft.duration}</div>
                </div>
              </>
            );
          })}
      </div>
      {testAudio &&
        <div>
          <audio controls autoplay>
            <source src="https://m24sgiq6yjsmjzbsvnoyvxb3za5gjy2caoxid5zkfysisadj.arweave.net/ZrkjIh7CZMTkMqt_ditw7yDpk40IDroH3-Ki4kiQBpM/" type="audio/mp3" />
          </audio>
        </div>
      }
    </>
  );
};

export default Album;

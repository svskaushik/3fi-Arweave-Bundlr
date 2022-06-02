import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import React, { useState, useEffect, useRef } from "react";

const ArweavePlayer = (url) => {
    const [audios, setAudios] = useState(url);
    const [audioList, setAudioList] = useState();

    useEffect(() => {
        const list = audios.url.map((song) => {
            const name = song.metadata.name
            const musicSrc = song.metadata.animation_url
            const cover = song.metadata.image
            const singer = song.metadata.artist
            const duration = song.metadata.duration

            return ({name, musicSrc, cover, singer, duration})
        })
        setAudioList(list);
        
    }, [ , url])

    const options = {
        // audio lists model
        audioLists: audioList,
      
        // default play index of the audio player  [type `number` default `0`]
        defaultPlayIndex: 0,
      
        // if you want dynamic change current play audio you can change it [type `number` default `0`]
        // playIndex: 0,
      
        // color of the music player theme    [ type: 'light' | 'dark' | 'auto'  default `dark` ]
        theme: 'dark',
      
        // Specifies movement boundaries. Accepted values:
        // - `parent` restricts movement within the node's offsetParent
        //    (nearest node with position relative or absolute), or
        // - a selector, restricts movement within the targeted node
        // - An object with `left, top, right, and bottom` properties.
        //   These indicate how far in each direction the draggable
        //   can be moved.
        // Ref: https://github.com/STRML/react-draggable#draggable-api
        bounds: 'parent',
      
        /**
         * Don't interrupt current playing state when audio list updated
         * audioLists eg. (A) is current playing...
         * [A,B] => [A,C,B]
         * [A,B] => [A,B,C]
         *
         * if (A) not in updated audio lists
         * [A,B] => [C]
         * (C) is playing
         */
        // [type `boolean`, default `false`]
        quietUpdate: false,
      
        // Replace a new playlist with the first loaded playlist
        // instead of adding it at the end of it.
        // [type `boolean`, default `false`]
        clearPriorAudioLists: false,
      
        // Play your new play list right after your new play list is loaded turn false.
        // [type `boolean`, default `false`]
        autoPlayInitLoadPlayList: false,
      
        // Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
        // "auto|metadata|none" "true| false"
        preload: false,
      
        // Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
        glassBg: false,
      
        // The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
        remember: false,
      
        // The Audio Can be deleted  [type `Boolean`, default `true`]
        remove: true,
      
        // audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
        defaultPosition: {
          right: 100,
          bottom: 120,
        },
      
        // if you want dynamic change current play mode you can change it
        // [type`order | orderLoop | singleLoop | shufflePlay`, default `order`]
        // playMode: 'order',
        defaultPlayMode: 'order',
      
        // audio mode        mini | full          [type `String`  default `mini`]
        mode: 'full',
      
        /**
         * [ type `Boolean` default 'false' ]
         * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
         */
        once: false,
      
        // Whether the audio is played after loading is completed. [type `Boolean` default 'true']
        autoPlay: true,
      
        // Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
        toggleMode: true,
      
        // audio cover is show of the "mini" mode [type `Boolean` default 'true']
        showMiniModeCover: true,
      
        // audio playing progress is show of the "mini"  mode
        showMiniProcessBar: false,
      
        // audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
        drag: true,
      
        // drag the audio progress bar [type `Boolean` default `true`]
        seeked: true,
      
        // Display chrome media session.  [type `Boolean` default `false`]
        showMediaSession: true,
      
        // Displays the audio load progress bar.  [type `Boolean` default `true`]
        showProgressLoadBar: true,
      
        // play button display of the audio player panel   [type `Boolean` default `true`]
        showPlay: true,
      
        // reload button display of the audio player panel   [type `Boolean` default `true`]
        showReload: true,
      
        // download button display of the audio player panel   [type `Boolean` default `true`]
        showDownload: false,
      
        // loop button display of the audio player panel   [type `Boolean` default `true`]
        showPlayMode: true,
      
        // theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
        showThemeSwitch: false,
      
        // lyric display of the audio player panel   [type `Boolean` default `false`]
        showLyric: false,
      
        // destroy player button display  [type `Boolean` default `false`]
        showDestroy: true,
      
        // Extensible custom content       [type 'Array' default '-' ]
        extendsContent: null,
      
        defaultVolume: 1,
      
        playModeShowTime: 600,
      
        loadAudioErrorPlayNext: true,
      
        autoHiddenCover: false,
 
        spaceBar: true,
      
        responsive: true,
      
        mobileMediaQuery: '(max-width: 1024px)',
      
        volumeFade: {
          fadeIn: 1000,
          fadeOut: 1000,
        },
        
        restartCurrentOnPrev: false,
    }

    return (
        <div>
            <ReactJkMusicPlayer {...options} />
        </div>
    )
   
}

export default ArweavePlayer;
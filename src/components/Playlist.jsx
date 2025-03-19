import { useRef, useState, useEffect } from "react";
import "./styles/songs.css";

const songs = [
    { id: 1, title: "Chiptune", path: "/songs/chiptune.wav" },
    { id: 2, title: "Lofi", path: "/songs/lofi.wav" },
    { id: 3, title: "Metal", path: "/songs/metal.wav" },
    { id: 4, title: "Moombahton", path: "/songs/moombahton.wav" },
    { id: 5, title: "Orchestral", path: "/songs/orchestral.wav" },
    { id: 6, title: "Rock", path: "/songs/rock.wav" },
    { id: 7, title: "Sci-Fi", path: "/songs/scifi.wav" },
    { id: 8, title: "Synthpop", path: "/songs/synthpop.wav" },
    { id: 9, title: "Trap", path: "/songs/trap.wav" },
];

const Playlist = () => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false); 
    const audioRef = useRef(new Audio());

    useEffect(() => {
        const audio = audioRef.current;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleEnded = () => {
            setIsPlaying(false);
            setCurrentSong(null);
        };

        audio.addEventListener("play", handlePlay);
        audio.addEventListener("pause", handlePause);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("play", handlePlay);
            audio.removeEventListener("pause", handlePause);
            audio.removeEventListener("ended", handleEnded);
        };
    }, []);

    const togglePlay = (song) => {
        if (currentSong?.id === song.id) {
            if (audioRef.current.paused) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        } else {
            setCurrentSong(song);
            audioRef.current.src = song.path;
            audioRef.current.play();
        }
    };

    return (
        <section className="playlist">
            <div className="playlist__body">
                {songs.map((song) => (
                    <div 
                        key={song.id} 
                        className={`song ${currentSong?.id === song.id ? "current-song" : ""}`}
                        onClick={() => togglePlay(song)}
                    >   
                        <div className="song-thumbnail">
                            <img src="https://images.unsplash.com/photo-1626428091984-48f9ffbf927c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDNkJTIwZWZmZWN0fGVufDB8fDB8fHww" alt="song-thumbnail" />
                        </div>
                        <div className="song-details">
                            <span className="song-title">{song.title}</span>
                            <span className="song-genre">Lorem Ipsum</span>
                        </div>
                        <button 
                            className={`play-button ${currentSong?.id === song.id && isPlaying ? "playing" : ""}`}   
                        >
                            {currentSong?.id === song.id && isPlaying ? "⏸" : "▶"}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Playlist;

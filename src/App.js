import React from "react";
import "./styles.css";
import { useState } from "react";

const MusicList = {
  ShreyaGoshal: [
    { name: "Munbe Vaa - Sillunu Oru Kaadhal", rating: "5/5" },
    { name: "Saans - Jab Tak Hai Jaan", rating: "4.8/5" },
    { name: "Chikni Chameli - Agneepath", rating: "4.7/5" }
  ],
  Rahman: [
    { name: "Vennelave Vennelave", rating: "5/5" },
    { name: "Yemi cheyamandhuve", rating: "4.8/5" },
    { name: "Naa Cheli rojave", rating: "4.5/5" }
  ],
  SidSriram: [
    { name: "Adiga Adiga - Ninnu Kori", rating: "5/5" },
    { name: "Emai Poyave - padi padi leche manasu", rating: "4.8/5" },
    { name: "Emo Emo - Raahu", rating: "4.2/5" }
  ],
  ArijitSingh: [
    { name: "Tum Hi Ho - Aashiqui 2", rating: "5/5" },
    { name: "Humdard - Villian", rating: "4.9/5" },
    { name: "Phir Mohabbat - Murder 2", rating: "4.5/5" }
  ],
  SonuNigam: [
    { name: "Suraj Hua Maddham", rating: "4.9/5" },
    { name: "Kal Ho Naa Ho", rating: "4.7/5" },
    { name: "Abhi Mujh Mein Kahin ", rating: "4.3/5" }
  ]
};

export default function App() {
  const [selectedsinger, setSinger] = useState("ArijitSingh");
  function genreClickHandler(singer) {
    setSinger(singer);
  }
  return (
    <div className="App">
      <h1> 🎶 Best Music Hits </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        <b> Checkout my favorite songs. Select a singer to get started </b>{" "}
      </p>

      <div>
        {Object.keys(MusicList).map((singer) => (
          <button
            onClick={() => genreClickHandler(singer)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "5rem",
              padding: "0.5rem  1rem",
              border: "1.5px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {singer}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {MusicList[selectedsinger].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "5px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "1.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

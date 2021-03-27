import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import SearchPageGame from './pages/SearchPageGame'
import Categorie from './pages/categorie/Categorie'
import GamePage from "./pages/gamePage/gamePage";

const router = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="search" element={<SearchPage />  }/>
        <Route path="searchgame" element={<SearchPageGame />  }/>
        <Route path="categorie/:id" element={<Categorie /> } />
        <Route path="game/:id" element={<GamePage /> } />
      </Routes>
    );
  };
  
  export default router;
  
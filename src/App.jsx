import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Treandingcard from "./components/Treandingcard";
import AIcard from "./components/AIcard";
import Newreselise from "./components/Newreselise";
import ViewRelise from "./components/viewRelise";
import ViewAIPower from "./components/viewAIPower";
import ViewTreand from "./components/viewTreand";
import ViewAIRecommendations from "./components/viewAIRecommendations";
import ViewNewReleases from "./components/viewNewReleases";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Subscription from "./components/Subscription";
import ContinueWatching from "./components/ContinueWatching";
import WatchHistory from "./components/WatchHistory";
import MoviePlayer from "./components/MoviePlayer";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./components/Account";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ContinueWatching />
              <Treandingcard />
              <AIcard />
              <Newreselise />
            </>
          } />
          <Route path="/Release" element={
            <ProtectedRoute>
              <ViewRelise />
            </ProtectedRoute>
          } />
          <Route path="/ai-power" element={
            <ProtectedRoute>
              <ViewAIPower />
            </ProtectedRoute>
          } />
          <Route path="/trending" element={
            <ProtectedRoute>
              <ViewTreand />
            </ProtectedRoute>
          } />
          <Route path="/view-ai-recommendations" element={
            <ProtectedRoute>
              <ViewAIRecommendations />
            </ProtectedRoute>
          } />
          <Route path="/view-new-releases" element={
            <ProtectedRoute>
              <ViewNewReleases />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/subscription" element={
            <ProtectedRoute>
              <Subscription />
            </ProtectedRoute>
          } />
          <Route path="/account" element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
          <Route path="/watch-history" element={
            <ProtectedRoute>
              <WatchHistory />
            </ProtectedRoute>
          } />
          <Route path="/movie/:id" element={
            <ProtectedRoute>
              <MoviePlayer />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ChatBox from './components/ChatBox/ChatBox';
import './App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <ChatBox />
            <Footer />
        </div>
    );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Game } from './components/Game/Game'
import { GameLogoName } from './components/MetaData/GameLogoName'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<GameLogoName />
		<Game />
	</React.StrictMode>,
)

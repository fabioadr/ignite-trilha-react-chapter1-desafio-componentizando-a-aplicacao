import { useState } from 'react'

import { SideBar } from './components/SideBar'
import { Content } from './components/Content'

import './styles/global.scss'

import './styles/sidebar.scss'
import './styles/content.scss'

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1)
  const [selectedGenreTitle, setSelectedGenreTitle] = useState('')

  function handleSelectGenre(id: number, title: string) {
    setSelectedGenreId(id)
    setSelectedGenreTitle(title)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar onSelectGenre={handleSelectGenre} />

      <Content genreId={selectedGenreId} genreTitle={selectedGenreTitle} />
    </div>
  )
}

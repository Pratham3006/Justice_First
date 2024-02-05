import React from 'react'
import './Pil.css'
import File from './components/File'

export default function Pil() {
    const caseData = {
        head: 'State vs District',
        desc: 'Lorem Ipsum...',
        judge: 'Judge Name',
        filer: 'Filing Party',
        timeline: [
          { date: '2024-02-05', description: 'Event 1' },
          { date: '2024-02-10', description: 'Event 2' },
          { date: '2024-02-05', description: 'Event 1' },
          { date: '2024-02-10', description: 'Event 2' },
          { date: '2024-02-05', description: 'Event 1' },
          { date: '2024-02-10', description: 'Event 2' },
          // Add more events as needed
        ],
      };
  return (
    <div className='Pil-head'>
        <h1 className='Pil-header'>Case Updates and acknowledgements</h1>

        <File {...caseData} />

    </div>
  )
}

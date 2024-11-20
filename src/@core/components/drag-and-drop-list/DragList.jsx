import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

import { DndProvider, TouchTransition, MouseTransition } from 'react-dnd-multi-backend'

const DragList = ({ children }) => {
  return (
    <DndProvider
      options={{
        backends: [
          {
            id: 'html5',
            backend: HTML5Backend,
            transition: MouseTransition
          },
          {
            id: 'touch',
            backend: TouchBackend,
            options: { enableMouseEvents: true },
            preview: true,
            transition: TouchTransition
          }
        ]
      }}
    >
      {children}
    </DndProvider>
  )
}

export default DragList

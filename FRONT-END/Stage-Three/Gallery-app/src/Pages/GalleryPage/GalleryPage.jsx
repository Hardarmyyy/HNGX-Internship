import React from 'react'
import { useState } from 'react'
import { Images } from '../../Services/Images/Image'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from '../../Components/LogoutButton/LogoutButton'
import {DragDropContext, Draggable} from 'react-beautiful-dnd'
import { StrictModeDroppable as Droppable } from '../../Helpers/StrictModeDroppadble'
import './GalleryPage.css'


const GalleryPage = () => {

const {isAuthenticated} = useAuth0()

const [gallery, setGallery] = useState(Images || [])

const handleOnDragEnd = (result) => {

    if (!result.destination) {
        return
    }

    const photos = [...Images]

    const [reorderedPhotos] = photos.splice(result.source.index, 1)

    photos.splice(result.destination.index, 0, reorderedPhotos)

    setGallery(photos)
}

return (

    isAuthenticated &&

    <>
        <h1> Player gallery </h1>

        <section>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='images'>
                    {(provided) => (
                        <section {...provided.droppableProps} ref={provided.innerRef}>
                            <section className='gridContainer'>
                                {gallery.map((image, index) => 
                                    <Draggable key={image.id} draggableId={image.id.toString()} index={index}>
                                        {(provided) => (
                                            <section {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <img src={image.img} alt={image.alt}/>
                                            </section>
                                        )}
                                    </Draggable>
                                )}
                                
                            </section>
                            {provided.placeholder}
                        </section>
                    )}
                </Droppable>
            </DragDropContext>
        </section>

        <LogoutButton></LogoutButton>

    </>

)
}

export default GalleryPage
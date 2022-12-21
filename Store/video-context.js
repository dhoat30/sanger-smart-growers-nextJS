import { createContext, useState, useEffect } from 'react'

const VideoContext = createContext({
    videoModal: null,
    getVideoModal: function (videoModal) { },
})

export function VideoContextProvider(props) {
    const [videoModal, setVideoModal] = useState(false)

    // get contact data
    function getVideoModalHandler(showVideo) {
        setVideoModal(showVideo)
    }
    const context = {
        videoModal: videoModal,
        getVideoModal: getVideoModalHandler,
    }

    return (<VideoContext.Provider value={context}>
        {props.children}
    </VideoContext.Provider>)
}

export default VideoContext
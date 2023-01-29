import React from 'react'
import { motion } from 'framer-motion'
import Paragraph from '../../Typography/Paragraph'
function Content({ id, singleListRow, content }, ref) {
    return (
        <motion.div
            ref={ref}
            id={id}
            className='content'
        >
            <Paragraph singleListRow={singleListRow}
            >{content}</Paragraph>
        </motion.div>
    )
}

export default Content
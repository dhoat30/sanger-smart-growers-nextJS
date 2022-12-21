import React from 'react'
import Image from 'next/image'
function SingleTestimonial({title, designation, content, imageData}) {
  return (
    <div>
        <div className="testimonial-img">
          <Image
            src={imageData.url}
            alt={title}
            layout="fixed"
            width={imageData.width}
            height={imageData.height}
          />
        </div>
        <div className="testimonial-text">
          <h5>{title}</h5>
          <h6>{designation} </h6>
          <div dangerouslySetInnerHTML={{__html: content}}/>

        </div>
      </div>
  )
}

export default SingleTestimonial
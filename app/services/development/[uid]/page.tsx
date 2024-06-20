import React from 'react'

const page = ({ params }: { params: { uid: string } }) => {
  return (
    <div>
        {params.uid}
    </div>
  )
}

export default page
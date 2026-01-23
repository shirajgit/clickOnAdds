import Hero3D from '@/components/Hero3D'
import React from 'react'

const page = () => {
  return (
    <div>
      <div
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[600px] h-[600px]
                     bg-cyan-400/10 blur-[140px]
                     pointer-events-none"
                       >
                        <Hero3D></Hero3D>
      
                      </div>
      
    </div>
  )
}

export default page

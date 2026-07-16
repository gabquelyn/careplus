import React from 'react'
import SpecializedCareHero from './components/Hero'
import CoreSpecializedPrograms from './components/CoreSpecialProgram'
import ComplexCareMatrix from './components/ComplexCareMatrix'
import MultidisciplinaryCoordination from './components/MultiDisciplinaryCordination'

export default function page() {
  return (
    <div>
      <SpecializedCareHero/>
      <CoreSpecializedPrograms/>
      <ComplexCareMatrix/>
      <MultidisciplinaryCoordination/>
    </div>
  )
}

import React from 'react'
import CareJourneyHero from './components/CareJourney'
import CareJourneyTimeline from './components/TimelineSection'
import ExpectationsPromise from './components/ExpectationsPromise'

export default function page() {
  return (
    <div>
      <CareJourneyHero/>
      <CareJourneyTimeline/>
      <ExpectationsPromise/>
    </div>
  )
}

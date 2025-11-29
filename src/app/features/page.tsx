import React from 'react'
import { Navbar } from '@/components'
import Hero from '@/components/features/hero'
import FeatureStep from '@/components/features/feature-step'
import ImpactfullDifference from '@/components/features/impactful-difference'
import Tools from '@/components/features/tools'
import Pricing from '@/components/features/Pricing'


export default function Feature() {
    return (
        <>
            <Navbar />
            <Hero />
            <FeatureStep />
            <ImpactfullDifference />
            <Tools />
            <Pricing />
        </>
    )
}

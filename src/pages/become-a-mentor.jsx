import { FooterSection, SignUpSection } from 'components/layouts';
import React, { useState } from 'react'

const FindMentor = () => {

    return (
        <>
            <section className="w-full flex lg:flex-row flex-col items-center justify-between">
                <SignUpSection />
            </section>
            <footer className="w-full flex flex-col justify-start xl:items-start items-center">
                <FooterSection />
            </footer>
        </>
    )
}

export default FindMentor
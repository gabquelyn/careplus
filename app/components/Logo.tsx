import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href = "/">
      <Image src="/assets/logo.png" height={90} width={130} alt="logo" />
    </Link>
  )
}

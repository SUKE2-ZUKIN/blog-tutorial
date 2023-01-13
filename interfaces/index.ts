// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import { ReactNode } from "react"

export type PostType = {
  title: string
  publish: string
  slug: string
  eyecatch: Eyecatch
  content?: string
  categories?: Category[]
  description?: string
  prevPost: {
    title: string
    slug: string
  }
  nextPost: {
    title: string
    slug: string
  }
}

type Eyecatch = {
  url: string
  blurDataURL: string
  width: number
  height: number
}

export type Category = {
  id: string
  name: string
  slug: string
}

export type ReactNodeChildren = {
  children: ReactNode
}
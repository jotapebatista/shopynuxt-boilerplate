export interface Media {
  id?: string
  type: string
  url: string
  alt?: string
  title?: string
  description?: string
}

export interface Section {
  id?: string
  type: string
  title?: string
  content: string
  order: number
  isActive: boolean
  media: Media[]
}

export interface SEO {
  id?: string
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
}

export interface Page {
  id?: string
  title: string
  slug: string
  description?: string
  content?: Record<string, any>
  isPublished: boolean
  sections: Section[]
  seo: SEO
  createdAt?: string
  updatedAt?: string
} 
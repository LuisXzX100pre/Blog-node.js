"use client"

import { useState } from "react"
import { Container } from "../components/general/Container"
import SearchHomeBlog from "../components/blog-home/SearchHomeBlog"
import FilterHomeBlog from "../components/blog-home/FilterHomeBlog"
import NewsHomeBlog from "../components/blog-home/NewsHomeBlog"
import ListingBlog from "../components/blog-home/ListingBlog"
import { useLanguage } from "../context/LanguageContext"

export default function BlogHomeLayout({ lang }) {
  const { lang: contextLang } = useLanguage()
  const currentLang = lang || contextLang || "es"
  const [selectedCategories, setSelectedCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const handleFilterChange = (categories) => {
    setSelectedCategories(categories)
  }

  const handleSearchChange = (term) => {
    setSearchTerm(term)
  }

  return (
    <>
      {/* Hero Banner */}
      <div
        className="relative h-[280px] w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1400&h=600&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center w-full">
          <div className="text-center text-white px-6 max-w-6xl mx-auto">
            <h1 className="text-fs-56 m-b mb-4 leading-tight">
              {currentLang === "en" ? "Explore Mexico through our Blog" : "Explora México a través de nuestro Blog"}
            </h1>
            <p className="text-fs-22 m-m max-w-4xl mx-auto leading-relaxed">
              {currentLang === "en"
                ? "Discover tips, stories and unforgettable experiences for your next getaway in this beautiful country"
                : "Descubre consejos, historias y experiencias inolvidables para tu próxima escapada por este hermoso país"}
            </p>
          </div>
        </div>
      </div>

      <Container>
        <div className="py-8">
          <div className="flex flex-col lg:flex-row gap-x-8">
            {/* Sidebar izquierdo */}
            <div className="max-md:w-full md:w-[300px]">
              <SearchHomeBlog lang={currentLang} onSearchChange={handleSearchChange} />
              <FilterHomeBlog lang={currentLang} onFilterChange={handleFilterChange} />
              <NewsHomeBlog lang={currentLang} />
            </div>

            {/* Área principal de contenido */}
            <div className="flex-1">
              <ListingBlog lang={currentLang} selectedCategories={selectedCategories} searchTerm={searchTerm} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
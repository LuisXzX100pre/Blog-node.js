"use client"

import { useRouter } from "next/navigation"

export default function CardsHomeBlog({ blog, lang = "es", TruncateLetters }) {
  const router = useRouter()

  const getCategoryName = (type) => {
    const categories = {
      hotel: lang === "en" ? "Hotels" : "Hoteles",
      tour: lang === "en" ? "Tours" : "Tours",
      climate: lang === "en" ? "Climate" : "Clima",
      transport: lang === "en" ? "Transport" : "Transporte",
    }
    return categories[type] || type
  }

  const getTemplateLabel = (templateNumber) => {
    const labels = {
      1: lang === "en" ? "Hotel Guide" : "Guía de Hoteles",
      2: lang === "en" ? "Tour Guide" : "Guía de Tours",
      3: lang === "en" ? "Climate Guide" : "Guía del Clima",
    }
    return labels[templateNumber] || (lang === "en" ? "Guide" : "Guía")
  }

  const handleCardClick = () => {
    const destinationPath = `/${lang}/${blog.slug || blog.id}`
    console.log("🔍 Navegando a:", destinationPath)
    router.push(destinationPath)
  }

  return (
    <div className="flex gap-2 flex-wrap max-lg:justify-center">
      <div
        onClick={handleCardClick}
        className="relative flex flex-col w-[220px] h-[260px] border border-[#ebebeb] px-2 pt-2 pb-3 rounded-lg shadow-3xl justify-between max-xl:w-[200px] max-md:w-full cursor-pointer hover:shadow-xl group transition-shadow duration-300"
      >
        {blog.template && (
          <div className="absolute top-1 right-1 bg-blue-500 text-white px-1 py-0.5 rounded-full text-fs-8 m-s-b z-20">
            {getTemplateLabel(blog.template)}
          </div>
        )}
        <div className="flex flex-col gap-2">
          <div className="h-[90px] overflow-hidden rounded-lg relative z-10">
            <img
              src={blog.image || "/placeholder.svg"}
              alt="blog card"
              className="rounded-lg w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out select-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[#d1d2d5] text-fs-10 m-m">{blog.date}</span>
            <span className="text-fs-12 m-b">
              {TruncateLetters(blog.mainTitle?.[lang] || blog.mainTitle?.es || "...", 6)}
            </span>
            <span className="text-fs-10 m-m text-gry-100 text-justify">
              {TruncateLetters(blog.description?.[lang] || blog.description?.es || "...", 12) + " ..."}
            </span>
          </div>
        </div>
        <div className="flex gap-1 flex-wrap">
          {blog.type.slice(0, 2).map((blogT, index) => (
            <div key={index} className="rounded-full bg-gry-50 text-gry-100 px-1.5 py-0.5 w-fit text-fs-8">
              {getCategoryName(blogT)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
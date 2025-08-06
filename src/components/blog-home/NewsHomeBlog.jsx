"use client"

import { useState, useEffect } from "react"

export default function NewsHomeBlog({ lang = "es" }) {
  const [displayedNews, setDisplayedNews] = useState([])

  // Array completo de 15 noticias
  const allNewsItems = [
    {
      id: 1,
      title: lang === "en" ? "New destinations available" : "Nuevos destinos disponibles",
      date: "2024-01-15",
      excerpt: lang === "en" ? "Discover amazing new places..." : "Descubre increíbles lugares nuevos...",
    },
    {
      id: 2,
      title: lang === "en" ? "Travel tips for 2024" : "Consejos de viaje para 2024",
      date: "2024-01-10",
      excerpt: lang === "en" ? "Essential tips for travelers..." : "Consejos esenciales para viajeros...",
    },
    {
      id: 3,
      title: lang === "en" ? "Best hotels of the season" : "Mejores hoteles de la temporada",
      date: "2024-01-05",
      excerpt: lang === "en" ? "Top rated accommodations..." : "Alojamientos mejor valorados...",
    },
    {
      id: 4,
      title: lang === "en" ? "Hidden beaches in Mexico" : "Playas escondidas en México",
      date: "2024-01-20",
      excerpt: lang === "en" ? "Explore pristine coastlines..." : "Explora costas vírgenes...",
    },
    {
      id: 5,
      title: lang === "en" ? "Cultural festivals this month" : "Festivales culturales este mes",
      date: "2024-01-18",
      excerpt: lang === "en" ? "Experience local traditions..." : "Vive las tradiciones locales...",
    },
    {
      id: 6,
      title: lang === "en" ? "Adventure sports in Riviera Maya" : "Deportes de aventura en Riviera Maya",
      date: "2024-01-12",
      excerpt: lang === "en" ? "Thrilling activities await..." : "Actividades emocionantes te esperan...",
    },
    {
      id: 7,
      title: lang === "en" ? "Gastronomic routes in Oaxaca" : "Rutas gastronómicas en Oaxaca",
      date: "2024-01-08",
      excerpt: lang === "en" ? "Taste authentic Mexican flavors..." : "Prueba sabores mexicanos auténticos...",
    },
    {
      id: 8,
      title: lang === "en" ? "Eco-friendly accommodations" : "Alojamientos ecológicos",
      date: "2024-01-25",
      excerpt: lang === "en" ? "Sustainable tourism options..." : "Opciones de turismo sostenible...",
    },
    {
      id: 9,
      title: lang === "en" ? "Photography spots in Chiapas" : "Lugares fotográficos en Chiapas",
      date: "2024-01-22",
      excerpt: lang === "en" ? "Capture stunning landscapes..." : "Captura paisajes impresionantes...",
    },
    {
      id: 10,
      title: lang === "en" ? "Budget travel guide" : "Guía de viaje económico",
      date: "2024-01-14",
      excerpt: lang === "en" ? "Travel more for less money..." : "Viaja más por menos dinero...",
    },
    {
      id: 11,
      title: lang === "en" ? "Wellness retreats in Tulum" : "Retiros de bienestar en Tulum",
      date: "2024-01-28",
      excerpt: lang === "en" ? "Rejuvenate body and mind..." : "Rejuvenece cuerpo y mente...",
    },
    {
      id: 12,
      title: lang === "en" ? "Archaeological sites to visit" : "Sitios arqueológicos por visitar",
      date: "2024-01-30",
      excerpt: lang === "en" ? "Discover ancient civilizations..." : "Descubre civilizaciones antiguas...",
    },
    {
      id: 13,
      title: lang === "en" ? "Cenotes exploration guide" : "Guía de exploración de cenotes",
      date: "2024-01-26",
      excerpt: lang === "en" ? "Dive into crystal clear waters..." : "Sumérgete en aguas cristalinas...",
    },
    {
      id: 14,
      title: lang === "en" ? "Local markets and crafts" : "Mercados locales y artesanías",
      date: "2024-01-16",
      excerpt: lang === "en" ? "Find unique handmade treasures..." : "Encuentra tesoros únicos hechos a mano...",
    },
    {
      id: 15,
      title: lang === "en" ? "Transportation tips for tourists" : "Consejos de transporte para turistas",
      date: "2024-01-11",
      excerpt: lang === "en" ? "Navigate Mexico like a local..." : "Navega por México como un local...",
    },
  ]

  // Función para seleccionar 3 noticias aleatorias
  const getRandomNews = () => {
    const shuffled = [...allNewsItems].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 3)
  }

  // Seleccionar noticias aleatorias al cargar el componente
  useEffect(() => {
    setDisplayedNews(getRandomNews())
  }, [lang]) // Se ejecuta cuando cambia el idioma también

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 className="text-fs-16 m-s-b mb-4 text-gray-700">
        {lang === "en" ? "Latest News" : "Últimas Noticias"}
      </h3>
      <div className="space-y-4">
        {displayedNews.map((item) => (
          <div key={item.id} className="border-b border-gray-100 pb-3 last:border-b-0">
            <h4 className="text-fs-14 m-s-b text-gray-800 mb-1">{item.title}</h4>
            <p className="text-fs-12 text-gray-500 mb-2">{item.date}</p>
            <p className="text-fs-12 text-gray-600">{item.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
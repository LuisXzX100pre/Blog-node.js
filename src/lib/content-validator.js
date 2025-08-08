/**
 * Validador global de contenido para componentes de blog
 * No requiere modificar componentes existentes
 */
export class GlobalContentValidator {
  
  // Configuraciones de validación por tipo de componente
  static validationRules = {
    // Template 1 Components
    familyHotels: {
      required: ['title'],
      arrays: ['hotelList', 'introductionParagraphs'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasHotels = GlobalContentValidator.hasValidArray(data?.hotelList)
        const hasIntro = GlobalContentValidator.hasValidArray(data?.introductionParagraphs, (p) => 
          GlobalContentValidator.hasValidText(p, lang))
        const hasImage = GlobalContentValidator.hasValidImage(data?.mainImage)
        
        return hasTitle && (hasHotels || hasIntro || hasImage)
      }
    },

    favoriteActivities: {
      required: ['sectionTitle'],
      arrays: ['activities'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.sectionTitle, lang)
        const hasActivities = GlobalContentValidator.hasValidArray(data?.activities, (activity) => 
          GlobalContentValidator.hasValidText(activity?.title, lang) && 
          GlobalContentValidator.hasValidText(activity?.description, lang))
        
        return hasTitle && hasActivities
      }
    },

    fromToBlog: {
      required: ['title'],
      arrays: ['routes'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasRoutes = GlobalContentValidator.hasValidArray(data?.routes, (route) =>
          GlobalContentValidator.hasValidText(route?.title, lang) &&
          GlobalContentValidator.hasValidText(route?.description, lang))
        
        return hasTitle && hasRoutes
      }
    },

    whereLocated: {
      required: ['title'],
      arrays: ['introductionParagraphs'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasIntro = GlobalContentValidator.hasValidArray(data?.introductionParagraphs, (p) =>
          GlobalContentValidator.hasValidText(p, lang))
        const hasMap = GlobalContentValidator.hasValidImage(data?.mapSection?.image)
        
        return hasTitle && (hasIntro || hasMap)
      }
    },

    howToGet: {
      required: [],
      arrays: ['sections'],
      validator: (data, lang) => {
        return GlobalContentValidator.hasValidArray(data?.sections, (section) => {
          const hasTitle = GlobalContentValidator.hasValidText(section?.title, lang)
          const hasParagraphs = GlobalContentValidator.hasValidArray(section?.paragraphs, (p) => {
            if (typeof p === 'string') return GlobalContentValidator.hasValidText(p, lang)
            return GlobalContentValidator.hasValidText(p?.text, lang)
          })
          return hasTitle || hasParagraphs
        })
      }
    },

    howToBook: {
      required: ['title', 'introduction'],
      arrays: ['steps'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasIntro = GlobalContentValidator.hasValidText(data?.introduction, lang)
        const hasSteps = GlobalContentValidator.hasValidArray(data?.steps, (step) =>
          GlobalContentValidator.hasValidText(step?.text, lang))
        
        return hasTitle && hasIntro && hasSteps
      }
    },

    videoPlace: {
      required: ['title'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasVideo = data?.video?.embedUrl && data.video.embedUrl.trim().length > 0
        const hasDescription = GlobalContentValidator.hasValidArray(data?.descriptionParagraphs, (p) =>
          GlobalContentValidator.hasValidText(p, lang))
        
        return hasTitle && (hasVideo || hasDescription)
      }
    },

    photoGallery: {
      validator: (data, lang) => {
        const hasLargeImage = GlobalContentValidator.hasValidImage(data?.largeImage)
        const hasSmallImages = GlobalContentValidator.hasValidArray(data?.smallImages, (img) =>
          GlobalContentValidator.hasValidImage(img))
        
        return hasLargeImage || hasSmallImages
      }
    },

    whatWillYouFind: {
      required: ['title'],
      arrays: ['items'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasItems = GlobalContentValidator.hasValidArray(data?.items, (item) =>
          GlobalContentValidator.hasValidText(item?.name, lang) &&
          GlobalContentValidator.hasValidText(item?.description, lang))
        
        return hasTitle && hasItems
      }
    },

    scheduleBlog: {
      required: ['title'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasTable = data?.scheduleTable?.rows && data.scheduleTable.rows.length > 0
        
        return hasTitle && hasTable
      }
    },

    // Template 2 Components
    placesToVisit: {
      required: ['sectionTitle'],
      arrays: ['placesList'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.sectionTitle, lang)
        const hasPlaces = GlobalContentValidator.hasValidArray(data?.placesList, (place) => {
          const hasPlaceTitle = GlobalContentValidator.hasValidText(place?.title, lang)
          const hasDescription = GlobalContentValidator.hasValidArray(place?.descriptionParagraphs, (p) =>
            GlobalContentValidator.hasValidText(p, lang))
          return hasPlaceTitle && hasDescription
        })
        
        return hasTitle && hasPlaces
      }
    },

    factBox: {
      required: ['title', 'fact'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasFact = GlobalContentValidator.hasValidText(data?.fact, lang)
        
        return hasTitle && hasFact
      }
    },

    mapView: {
      required: ['title'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasMap = GlobalContentValidator.hasValidImage(data?.fallbackImage) ||
                      (data?.mapConfiguration?.markers && data.mapConfiguration.markers.length > 0)
        
        return hasTitle && hasMap
      }
    },

    recommendationsBeforeVisit: {
      required: ['sectionTitle'],
      arrays: ['recommendations'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.sectionTitle, lang)
        const hasRecommendations = GlobalContentValidator.hasValidArray(data?.recommendations, (rec) =>
          GlobalContentValidator.hasValidText(rec?.text, lang))
        
        return hasTitle && hasRecommendations
      }
    },

    routesRecommendations: {
      required: ['title'],
      arrays: ['routes'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasRoutes = GlobalContentValidator.hasValidArray(data?.routes, (route) =>
          GlobalContentValidator.hasValidText(route?.origin, lang) &&
          GlobalContentValidator.hasValidText(route?.destination, lang))
        
        return hasTitle && hasRoutes
      }
    },

    // Template 3 Components
    weatherRecommendations: {
      arrays: ['contentBlocks'],
      validator: (data, lang) => {
        return GlobalContentValidator.hasValidArray(data?.contentBlocks, (block) =>
          GlobalContentValidator.hasValidText(block?.text, lang))
      }
    },

    infoByMonth: {
      arrays: ['seasons'],
      validator: (data, lang) => {
        return GlobalContentValidator.hasValidArray(data?.seasons, (season) => {
          const hasTitle = GlobalContentValidator.hasValidText(season?.seasonTitle, lang)
          const hasMonths = GlobalContentValidator.hasValidArray(season?.monthsData, (month) =>
            GlobalContentValidator.hasValidText(month?.monthTitle, lang))
          return hasTitle && hasMonths
        })
      }
    },

    currentQuestions: {
      required: ['sectionTitle'],
      arrays: ['faqList'],
      validator: (data, lang) => {
        const hasTitle = GlobalContentValidator.hasValidText(data?.sectionTitle, lang)
        const hasFaqs = GlobalContentValidator.hasValidArray(data?.faqList, (faq) =>
          GlobalContentValidator.hasValidText(faq?.question, lang) &&
          GlobalContentValidator.hasValidText(faq?.answer, lang))
        
        return hasTitle && hasFaqs
      }
    }
  }

  /**
   * Valida si una sección debe renderizarse
   */
  static shouldRenderSection(sectionName, sectionData, lang = 'es') {
    if (!sectionData) return false

    const rule = this.validationRules[sectionName]
    if (!rule) {
      // Si no hay regla específica, usar validación genérica
      return this.hasValidObject(sectionData)
    }

    // Usar validador personalizado si existe
    if (rule.validator) {
      return rule.validator(sectionData, lang)
    }

    // Validación basada en campos requeridos
    let isValid = true

    if (rule.required) {
      isValid = rule.required.some(field => 
        this.hasValidText(sectionData[field], lang))
    }

    if (rule.arrays && isValid) {
      isValid = rule.arrays.some(field => 
        this.hasValidArray(sectionData[field]))
    }

    return isValid
  }

  /**
   * Mapeo de nombres de sección a nombres de componente
   */
  static getSectionComponentName(sectionKey) {
    const mapping = {
      // Template 1
      'familyHotels': 'familyHotels',
      'favoriteActivities': 'favoriteActivities', 
      'routesFrom': 'fromToBlog',
      'locationInfo': 'whereLocated',
      'howToGetThere': 'howToGet',
      'howToBookTransport': 'howToBook',
      'journeyVideo': 'videoPlace',
      'photoGallery': 'photoGallery',
      'whatToFind': 'whatWillYouFind',
      'ferrySchedule': 'scheduleBlog',

      // Template 2
      'placesToVisit': 'placesToVisit',
      'quickFact': 'factBox',
      'touristMap': 'mapView',
      'beforeYouVisitRecommendations': 'recommendationsBeforeVisit',
      'routesRecommendations': 'routesRecommendations',

      // Template 3
      'climateOverview': 'weatherRecommendations',
      'monthlyWeatherInfo': 'infoByMonth',
      'frequentlyAskedQuestions': 'currentQuestions'
    }

    return mapping[sectionKey] || sectionKey
  }

  // Utilidades de validación
  static hasValidText(textObj, lang = 'es') {
    if (typeof textObj === 'string') {
      return textObj.trim().length > 0
    }
    
    if (typeof textObj === 'object' && textObj !== null) {
      const languages = [lang, 'es', 'en']
      return languages.some(l => 
        textObj[l] && typeof textObj[l] === 'string' && textObj[l].trim().length > 0)
    }
    
    return false
  }

  static hasValidArray(arr, validator) {
    if (!Array.isArray(arr) || arr.length === 0) return false
    
    if (!validator) {
      return arr.some(item => {
        if (typeof item === 'string') return item.trim().length > 0
        if (typeof item === 'object' && item !== null) return Object.keys(item).length > 0
        return item != null
      })
    }
    
    return arr.some(validator)
  }

  static hasValidImage(imageObj) {
    if (typeof imageObj !== 'object' || imageObj === null) return false
    
    return imageObj.src && 
           typeof imageObj.src === 'string' &&
           imageObj.src.trim().length > 0 &&
           !imageObj.src.includes('placeholder') &&
           imageObj.src !== '/placeholder.svg'
  }

  static hasValidObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false
    
    return Object.values(obj).some(value => {
      if (typeof value === 'string') return value.trim().length > 0
      if (Array.isArray(value)) return this.hasValidArray(value)
      if (typeof value === 'object' && value !== null) return Object.keys(value).length > 0
      return value != null
    })
  }
}

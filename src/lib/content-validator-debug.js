
export class GlobalContentValidator {
  
  
  static validationRules = {
    familyHotels: {
      validator: (data, lang) => {
        console.log('🔍 Validando familyHotels:', data)
        
        // Solo requiere que tenga título O hoteles O párrafos O imagen
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasHotels = data?.hotelList && Array.isArray(data.hotelList) && data.hotelList.length > 0
        const hasIntro = data?.introductionParagraphs && Array.isArray(data.introductionParagraphs) && data.introductionParagraphs.length > 0
        const hasImage = data?.mainImage?.src && !data.mainImage.src.includes('placeholder')
        
        const result = hasTitle || hasHotels || hasIntro || hasImage
        console.log('✅ familyHotels result:', { hasTitle, hasHotels, hasIntro, hasImage, result })
        return result
      }
    },

    favoriteActivities: {
      validator: (data, lang) => {
        console.log('🔍 Validando favoriteActivities:', data)
        
        const hasTitle = GlobalContentValidator.hasValidText(data?.sectionTitle, lang)
        const hasActivities = data?.activities && Array.isArray(data.activities) && data.activities.length > 0
        
        const result = hasTitle || hasActivities
        console.log('✅ favoriteActivities result:', { hasTitle, hasActivities, result })
        return result
      }
    },

    fromToBlog: {
      validator: (data, lang) => {
        console.log('🔍 Validando fromToBlog:', data)
        
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasRoutes = data?.routes && Array.isArray(data.routes) && data.routes.length > 0
        
        const result = hasTitle || hasRoutes
        console.log('✅ fromToBlog result:', { hasTitle, hasRoutes, result })
        return result
      }
    },

    whereLocated: {
      validator: (data, lang) => {
        console.log('🔍 Validando whereLocated:', data)
        
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasIntro = data?.introductionParagraphs && Array.isArray(data.introductionParagraphs) && data.introductionParagraphs.length > 0
        
        const result = hasTitle || hasIntro
        console.log('✅ whereLocated result:', { hasTitle, hasIntro, result })
        return result
      }
    },

    howToGet: {
      validator: (data, lang) => {
        console.log('🔍 Validando howToGet:', data)
        
        const hasSections = data?.sections && Array.isArray(data.sections) && data.sections.length > 0
        
        const result = hasSections
        console.log('✅ howToGet result:', { hasSections, result })
        return result
      }
    },

    howToBook: {
      validator: (data, lang) => {
        console.log('🔍 Validando howToBook:', data)
        
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasIntro = GlobalContentValidator.hasValidText(data?.introduction, lang)
        const hasSteps = data?.steps && Array.isArray(data.steps) && data.steps.length > 0
        
        const result = hasTitle || hasIntro || hasSteps
        console.log('✅ howToBook result:', { hasTitle, hasIntro, hasSteps, result })
        return result
      }
    },

    videoPlace: {
      validator: (data, lang) => {
        console.log('🔍 Validando videoPlace:', data)
        
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasVideo = data?.video?.embedUrl && data.video.embedUrl.trim().length > 0
        const hasDescription = data?.descriptionParagraphs && Array.isArray(data.descriptionParagraphs) && data.descriptionParagraphs.length > 0
        
        const result = hasTitle || hasVideo || hasDescription
        console.log('✅ videoPlace result:', { hasTitle, hasVideo, hasDescription, result })
        return result
      }
    },

    photoGallery: {
      validator: (data, lang) => {
        console.log('🔍 Validando photoGallery:', data)
        
        const hasLargeImage = data?.largeImage?.src && !data.largeImage.src.includes('placeholder')
        const hasSmallImages = data?.smallImages && Array.isArray(data.smallImages) && data.smallImages.length > 0
        
        const result = hasLargeImage || hasSmallImages
        console.log('✅ photoGallery result:', { hasLargeImage, hasSmallImages, result })
        return result
      }
    },

    whatWillYouFind: {
      validator: (data, lang) => {
        console.log('🔍 Validando whatWillYouFind:', data)
        
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasItems = data?.items && Array.isArray(data.items) && data.items.length > 0
        
        const result = hasTitle || hasItems
        console.log('✅ whatWillYouFind result:', { hasTitle, hasItems, result })
        return result
      }
    },

    scheduleBlog: {
      validator: (data, lang) => {
        console.log('🔍 Validando scheduleBlog:', data)
        
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasTable = data?.scheduleTable?.rows && data.scheduleTable.rows.length > 0
        
        const result = hasTitle || hasTable
        console.log('✅ scheduleBlog result:', { hasTitle, hasTable, result })
        return result
      }
    },

    // Template 2
    placesToVisit: {
      validator: (data, lang) => {
        console.log('🔍 Validando placesToVisit:', data)
        
        const hasTitle = GlobalContentValidator.hasValidText(data?.sectionTitle, lang)
        const hasPlaces = data?.placesList && Array.isArray(data.placesList) && data.placesList.length > 0
        
        const result = hasTitle || hasPlaces
        console.log('✅ placesToVisit result:', { hasTitle, hasPlaces, result })
        return result
      }
    },

    factBox: {
      validator: (data, lang) => {
        console.log('🔍 Validando factBox:', data)
        
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasFact = GlobalContentValidator.hasValidText(data?.fact, lang)
        
        const result = hasTitle || hasFact
        console.log('✅ factBox result:', { hasTitle, hasFact, result })
        return result
      }
    },

    mapView: {
      validator: (data, lang) => {
        console.log('🔍 Validando mapView:', data)
        
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasMap = data?.fallbackImage?.src || (data?.mapConfiguration?.markers && data.mapConfiguration.markers.length > 0)
        
        const result = hasTitle || hasMap
        console.log('✅ mapView result:', { hasTitle, hasMap, result })
        return result
      }
    },

    recommendationsBeforeVisit: {
      validator: (data, lang) => {
        console.log('🔍 Validando recommendationsBeforeVisit:', data)
        
        const hasTitle = GlobalContentValidator.hasValidText(data?.sectionTitle, lang)
        const hasRecommendations = data?.recommendations && Array.isArray(data.recommendations) && data.recommendations.length > 0
        
        const result = hasTitle || hasRecommendations
        console.log('✅ recommendationsBeforeVisit result:', { hasTitle, hasRecommendations, result })
        return result
      }
    },

    routesRecommendations: {
      validator: (data, lang) => {
        console.log('🔍 Validando routesRecommendations:', data)
        
        const hasTitle = GlobalContentValidator.hasValidText(data?.title, lang)
        const hasRoutes = data?.routes && Array.isArray(data.routes) && data.routes.length > 0
        
        const result = hasTitle || hasRoutes
        console.log('✅ routesRecommendations result:', { hasTitle, hasRoutes, result })
        return result
      }
    },

    // Template 3
    weatherRecommendations: {
      validator: (data, lang) => {
        console.log('🔍 Validando weatherRecommendations:', data)
        
        const hasBlocks = data?.contentBlocks && Array.isArray(data.contentBlocks) && data.contentBlocks.length > 0
        
        const result = hasBlocks
        console.log('✅ weatherRecommendations result:', { hasBlocks, result })
        return result
      }
    },

    infoByMonth: {
      validator: (data, lang) => {
        console.log('🔍 Validando infoByMonth:', data)
        
        const hasSeasons = data?.seasons && Array.isArray(data.seasons) && data.seasons.length > 0
        
        const result = hasSeasons
        console.log('✅ infoByMonth result:', { hasSeasons, result })
        return result
      }
    },

    currentQuestions: {
      validator: (data, lang) => {
        console.log('🔍 Validando currentQuestions:', data)
        
        const hasTitle = GlobalContentValidator.hasValidText(data?.sectionTitle, lang)
        const hasFaqs = data?.faqList && Array.isArray(data.faqList) && data.faqList.length > 0
        
        const result = hasTitle || hasFaqs
        console.log('✅ currentQuestions result:', { hasTitle, hasFaqs, result })
        return result
      }
    }
  }

 shouldRenderSection(sectionName, sectionData, lang = 'es') {
    console.log(`🚀 Validando sección: ${sectionName}`)
    console.log('📊 Datos recibidos:', sectionData)
    
    if (!sectionData) {
      console.log('❌ No hay datos para la sección')
      return false
    }

    const rule = this.validationRules[sectionName]
    if (!rule) {
      console.log('⚠️ No hay regla específica, usando validación genérica')
      const result = this.hasValidObject(sectionData)
      console.log('📝 Resultado genérico:', result)
      return result
    }


    if (rule.validator) {
      const result = rule.validator(sectionData, lang)
      console.log(`✨ Resultado final para ${sectionName}:`, result)
      return result
    }

    console.log('❓ No se encontró validador')
    return false
  }

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

    const result = mapping[sectionKey] || sectionKey
    console.log(`🔄 Mapeo de sección: ${sectionKey} -> ${result}`)
    return result
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

  static hasValidObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false
    
    return Object.values(obj).some(value => {
      if (typeof value === 'string') return value.trim().length > 0
      if (Array.isArray(value)) return value.length > 0
      if (typeof value === 'object' && value !== null) return Object.keys(value).length > 0
      return value != null
    })
  }
}

import { GlobalContentValidator } from '@/lib/content-validator-debug'


export class LayoutHelpers {
  
  
  static shouldRenderSection(sections, sectionKey, lang = 'es') {
    console.log(`🎯 LayoutHelpers.shouldRenderSection called with:`)
    console.log('- sectionKey:', sectionKey)
    console.log('- lang:', lang)
    console.log('- sections:', sections)
    
    const sectionData = sections?.[sectionKey]?.data
    console.log(`- sectionData for ${sectionKey}:`, sectionData)
    
    if (!sectionData) {
      console.log(`❌ No data found for section: ${sectionKey}`)
      return false
    }

    const componentName = GlobalContentValidator.getSectionComponentName(sectionKey)
    const result = GlobalContentValidator.shouldRenderSection(componentName, sectionData, lang)
    
    console.log(`🏁 Final result for ${sectionKey}: ${result}`)
    console.log('---')
    
    return result
  }

  
  static debugAllSections(sections, lang = 'es') {
    console.log('🔍 DEBUG: Todas las secciones disponibles:')
    
    if (!sections) {
      console.log('❌ No hay sections')
      return
    }
    
    Object.keys(sections).forEach(sectionKey => {
      console.log(`📁 Sección: ${sectionKey}`)
      console.log('  - Data:', sections[sectionKey]?.data)
      console.log('  - Should render:', this.shouldRenderSection(sections, sectionKey, lang))
      console.log('---')
    })
  }
}

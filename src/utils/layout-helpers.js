import { GlobalContentValidator } from '../lib/content-validator'


export class LayoutHelpers {
  
  
  static shouldRenderSection(sections, sectionKey, lang = 'es') {
    const sectionData = sections?.[sectionKey]?.data
    if (!sectionData) return false

    const componentName = GlobalContentValidator.getSectionComponentName(sectionKey)
    return GlobalContentValidator.shouldRenderSection(componentName, sectionData, lang)
  }

  
  static getValidSectionData(sections, sectionKey, lang = 'es') {
    if (!this.shouldRenderSection(sections, sectionKey, lang)) {
      return null
    }
    return sections[sectionKey].data
  }

  
  static getValidSections(sections, lang = 'es') {
    if (!sections) return {}

    const validSections = {}
    
    Object.keys(sections).forEach(sectionKey => {
      if (this.shouldRenderSection(sections, sectionKey, lang)) {
        validSections[sectionKey] = sections[sectionKey]
      }
    })

    return validSections
  }

  static countValidSections(sections, lang = 'es') {
    return Object.keys(this.getValidSections(sections, lang)).length
  }

  
  static hasValidContent(sections, lang = 'es') {
    return this.countValidSections(sections, lang) > 0
  }
}

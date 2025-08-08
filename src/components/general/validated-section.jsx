"use client"

import { GlobalContentValidator } from '@/lib/content-validator'

/**
 * Componente wrapper que valida contenido antes de renderizar
 * No requiere modificar componentes existentes
 */
export default function ValidatedSection({ 
  sectionKey, 
  sectionData, 
  component: Component, 
  lang = 'es',
  showDebug = false,
  ...props 
}) {
  // Obtener el nombre del componente para validación
  const componentName = GlobalContentValidator.getSectionComponentName(sectionKey)
  
  // Validar si debe renderizarse
  const shouldRender = GlobalContentValidator.shouldRenderSection(
    componentName, 
    sectionData, 
    lang
  )

  // Debug info (solo en desarrollo)
  if (showDebug && process.env.NODE_ENV === 'development') {
    console.log(`[ValidatedSection] ${sectionKey}:`, {
      componentName,
      shouldRender,
      hasData: !!sectionData,
      dataKeys: sectionData ? Object.keys(sectionData) : []
    })
  }

  // No renderizar si no pasa la validación
  if (!shouldRender) {
    return null
  }

  // Renderizar el componente original con sus props
  return <Component data={sectionData} lang={lang} {...props} />
}

'use client'

import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

interface GoogleMapProps {
  apiKey: string
  center: { lat: number; lng: number }
  zoom?: number
  className?: string
  height?: string
}

declare global {
  interface Window {
    google: any
  }
}

export default function GoogleMap({ 
  apiKey, 
  center, 
  zoom = 15, 
  className = "w-full h-96",
  height = "h-96"
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  useEffect(() => {
    if (!apiKey) {
      setError('Google Maps API key is required')
      setIsLoading(false)
      return
    }

    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly',
      libraries: ['places']
    })

    loader.load()
      .then(() => {
        if (mapRef.current && window.google) {
          const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom,
            styles: [
              {
                featureType: 'poi.business',
                stylers: [{ visibility: 'simplified' }]
              },
              {
                featureType: 'transit',
                elementType: 'labels.icon',
                stylers: [{ visibility: 'off' }]
              }
            ]
          })

          // Add marker for office location
          new window.google.maps.Marker({
            position: center,
            map: map,
            title: 'Dubai Business Setup Consulting',
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#1F2937" stroke="#3B82F6" stroke-width="4"/>
                  <circle cx="20" cy="20" r="8" fill="#3B82F6"/>
                </svg>
              `),
              scaledSize: new window.google.maps.Size(40, 40),
              anchor: new window.google.maps.Point(20, 20)
            }
          })

          // Add info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; max-width: 200px;">
                <h3 style="margin: 0 0 8px 0; color: #1F2937; font-size: 16px; font-weight: 600;">
                  Dubai Business Setup Consulting
                </h3>
                <p style="margin: 0; color: #6B7280; font-size: 14px;">
                  Business Bay, Dubai, UAE
                </p>
                <p style="margin: 8px 0 0 0; color: #6B7280; font-size: 14px;">
                  Your trusted partner for business setup in Dubai
                </p>
              </div>
            `
          })

          // Show info window on marker click
          const marker = new window.google.maps.Marker({
            position: center,
            map: map,
            title: 'Dubai Business Setup Consulting'
          })

          marker.addListener('click', () => {
            infoWindow.open(map, marker)
          })

          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.error('Error loading Google Maps:', err)
        setError('Failed to load Google Maps')
        setIsLoading(false)
      })
  }, [apiKey, center, zoom])

  if (error) {
    return (
      <div className={`${className} bg-gray-100 rounded-lg flex items-center justify-center`}>
        <div className="text-center text-gray-600">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-sm font-medium">Map unavailable</p>
          <p className="text-xs text-gray-500">{error}</p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={`${className} bg-gray-100 rounded-lg flex items-center justify-center`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-sm text-gray-600">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <div ref={mapRef} className={`w-full ${height} rounded-lg`} />
    </div>
  )
}

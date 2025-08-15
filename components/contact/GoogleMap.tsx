'use client'

import React from 'react'
import { MapPin, Building, Globe } from 'lucide-react'

const OfficeLocation: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
      <div className="w-full h-96 bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
        <div className="text-center text-gray-600 p-8">
          <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Office Location</h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5 text-primary-600" />
              <span className="font-medium">Al Twar, Dubai, UAE</span>
            </div>
            <p className="text-sm text-gray-600 max-w-md">
              Located in the vibrant Al Twar district, our office provides easy access 
              for clients from across Dubai and the UAE.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Globe className="w-4 h-4" />
              <span>Strategic location in Dubai's business hub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfficeLocation

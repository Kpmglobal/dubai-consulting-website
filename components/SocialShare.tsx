'use client'

import React, { useState } from 'react'
import { 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Link as LinkIcon,
  CheckCircle,
  Copy
} from 'lucide-react'

interface SocialShareProps {
  url: string
  title: string
  description: string
  image?: string
  hashtags?: string[]
  className?: string
}

export default function SocialShare({ 
  url, 
  title, 
  description, 
  image, 
  hashtags = ['DubaiBusiness', 'BusinessSetup', 'UAE'],
  className = ""
}: SocialShareProps) {
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleShare = async (platform: string) => {
    let shareUrl = ''
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        const twitterText = `${title} - ${description}`
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(url)}&hashtags=${hashtags.join(',')}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case 'copy':
        try {
          await navigator.clipboard.writeText(url)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
          return
        } catch (err) {
          console.error('Failed to copy URL:', err)
          // Fallback for older browsers
          const textArea = document.createElement('textarea')
          textArea.value = url
          document.body.appendChild(textArea)
          textArea.select()
          document.execCommand('copy')
          document.body.removeChild(textArea)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
          return
        }
      default:
        return
    }

    // Open share dialog in new window
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes')
    }
    
    setShowShareMenu(false)
  }

  const shareButtons = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      action: () => handleShare('facebook')
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-sky-500 hover:bg-sky-600',
      action: () => handleShare('twitter')
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-blue-700 hover:bg-blue-800',
      action: () => handleShare('linkedin')
    },
    {
      name: copied ? 'Copied!' : 'Copy Link',
      icon: copied ? CheckCircle : Copy,
      color: copied ? 'bg-green-600' : 'bg-gray-600 hover:bg-gray-700',
      action: () => handleShare('copy')
    }
  ]

  return (
    <div className={`relative ${className}`}>
      {/* Main Share Button */}
      <button
        onClick={() => setShowShareMenu(!showShareMenu)}
        className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
      >
        <Share2 className="w-4 h-4" />
        <span>Share</span>
      </button>

      {/* Share Menu */}
      {showShareMenu && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setShowShareMenu(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-20 min-w-[200px]">
            <div className="space-y-3">
              {shareButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.action}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-white transition-colors duration-200 ${button.color}`}
                >
                  <button.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{button.name}</span>
                </button>
              ))}
            </div>
            
            {/* URL Display */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Share this URL:</p>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={url}
                  readOnly
                  className="flex-1 text-xs bg-gray-50 border border-gray-200 rounded px-2 py-1 text-gray-600"
                />
                <button
                  onClick={() => handleShare('copy')}
                  className="p-1 text-gray-500 hover:text-gray-700"
                  title="Copy URL"
                >
                  <Copy className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// OpenGraph Meta Tags Component for Next.js
export function OpenGraphMeta({ 
  title, 
  description, 
  url, 
  image, 
  type = 'article',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags
}: {
  title: string
  description: string
  url: string
  image?: string
  type?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}) {
  return (
    <>
      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}
      {publishedTime && <meta property="og:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="og:modified_time" content={modifiedTime} />}
      {author && <meta property="og:author" content={author} />}
      {section && <meta property="og:section" content={section} />}
      {tags && tags.map((tag, index) => (
        <meta key={index} property="og:tag" content={tag} />
      ))}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Additional Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={tags?.join(', ')} />
      <link rel="canonical" href={url} />
    </>
  )
}

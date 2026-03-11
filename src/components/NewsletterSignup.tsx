"use client"

import React, { useState } from "react"

type Variant = "inline" | "banner" | "sidebar"

interface NewsletterSignupProps {
  variant?: Variant
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  variant = "inline",
}) => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email.trim()) {
      setError("Please enter your email")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    // Log success (no actual API call)
    console.log("Newsletter signup:", email)
    setIsSubmitted(true)

    // Reset after 5 seconds
    setTimeout(() => {
      setEmail("")
      setIsSubmitted(false)
    }, 5000)
  }

  const getContainerStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: "#1f2937",
    }

    if (variant === "banner") {
      return {
        ...baseStyles,
        background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
        padding: "32px 24px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        color: "white",
        width: "100%",
        boxSizing: "border-box",
      }
    }

    if (variant === "sidebar") {
      return {
        ...baseStyles,
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "20px",
        width: "100%",
        maxWidth: "300px",
      }
    }

    // inline variant (default)
    return {
      ...baseStyles,
      background: "white",
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      padding: "40px 32px",
      maxWidth: "500px",
      margin: "0 auto",
      textAlign: "center",
    }
  }

  const getHeadingStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      margin: variant === "banner" ? "0" : "0 0 12px 0",
      fontSize: variant === "banner" ? "20px" : "24px",
      fontWeight: 700,
      letterSpacing: "-0.5px",
    }

    if (variant === "banner") {
      return { ...baseStyles, color: "white" }
    }

    return {
      ...baseStyles,
      background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }
  }

  const getSubtextStyles = (): React.CSSProperties => {
    return {
      margin: variant === "banner" ? "0" : "0 0 24px 0",
      fontSize: "14px",
      lineHeight: "1.6",
      color: variant === "banner" ? "rgba(255, 255, 255, 0.9)" : "#6b7280",
    }
  }

  const getFormStyles = (): React.CSSProperties => {
    if (variant === "banner") {
      return {
        display: "flex",
        gap: "8px",
        flex: 1,
        minWidth: "300px",
      }
    }

    if (variant === "sidebar") {
      return {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }
    }

    return {
      display: "flex",
      gap: "8px",
      width: "100%",
    }
  }

  const getInputStyles = (): React.CSSProperties => {
    return {
      flex: 1,
      padding: "10px 16px",
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      fontSize: "14px",
      fontFamily: 'inherit',
      outline: "none",
      transition: "all 0.3s ease",
      backgroundColor: "white",
      color: "#1f2937",
    }
  }

  const getButtonStyles = (): React.CSSProperties => {
    return {
      padding: variant === "sidebar" ? "10px 16px" : "10px 24px",
      background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontSize: "14px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      whiteSpace: "nowrap",
      fontFamily: 'inherit',
    }
  }

  const getErrorStyles = (): React.CSSProperties => {
    return {
      color: "#ef4444",
      fontSize: "12px",
      marginTop: "8px",
      textAlign: variant === "sidebar" ? "left" : "center",
    }
  }

  const getSuccessStyles = (): React.CSSProperties => {
    return {
      color: "#10b981",
      fontSize: "14px",
      marginTop: "16px",
      fontWeight: 500,
    }
  }

  return (
    <>
      <style>{`
        input[type="email"]:hover {
          border-color: #d1d5db !important;
        }
        
        input[type="email"]:focus {
          border-color: #6366f1 !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1) !important;
        }
        
        button:hover {
          filter: brightness(1.1) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4) !important;
        }
        
        button:active {
          transform: translateY(0) !important;
        }
      `}</style>

      <div style={getContainerStyles()}>
        <div style={{ flex: variant === "banner" ? 0 : 1 }}>
          {isSubmitted ? (
            <div style={getSuccessStyles()}>✅ You're in! Check your inbox.</div>
          ) : (
            <>
              <h2 style={getHeadingStyles()}>Get Weekly Crypto Picks</h2>
              <p style={getSubtextStyles()}>
                Join 50,000+ investors. No spam, unsubscribe anytime.
              </p>
              <form onSubmit={handleSubmit} style={getFormStyles()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={getInputStyles()}
                  disabled={isSubmitted}
                />
                <button
                  type="submit"
                  style={getButtonStyles()}
                  disabled={isSubmitted}
                >
                  Subscribe
                </button>
              </form>
              {error && <div style={getErrorStyles()}>{error}</div>}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default NewsletterSignup

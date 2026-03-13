"use client"

import React, { useState, useEffect } from "react"

const ExitIntentPopup: React.FC = () => {
  // Disabled: removes exit intent popup
  return null

  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Check if popup was already shown — only show once ever
    const hasShown = localStorage.getItem("exit_popup_shown")
    if (hasShown) {
      return
    }

    let triggered = false
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving from the top of the viewport — only trigger once
      if (e.clientY <= 0 && !triggered) {
        triggered = true
        setIsVisible(true)
        localStorage.setItem("exit_popup_shown", "true")
        document.removeEventListener("mouseleave", handleMouseLeave)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

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
    console.log("Exit intent newsletter signup:", email)
    setIsSubmitted(true)

    // Close popup after 3 seconds
    setTimeout(() => {
      handleClose()
    }, 3000)
  }

  const handleClose = () => {
    setIsVisible(false)
    setEmail("")
    setIsSubmitted(false)
    setError("")
  }

  if (!isVisible) {
    return null
  }

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        input[type="email"]:hover {
          border-color: #d1d5db !important;
        }

        input[type="email"]:focus {
          border-color: #6366f1 !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1) !important;
          outline: none !important;
        }

        button:hover {
          filter: brightness(1.1) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4) !important;
        }

        button:active {
          transform: translateY(0) !important;
        }

        .exit-intent-overlay {
          animation: fadeIn 0.3s ease-out;
        }

        .exit-intent-modal {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>

      {/* Overlay */}
      <div
        className="exit-intent-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9998,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
        onClick={handleClose}
      >
        {/* Modal */}
        <div
          className="exit-intent-modal"
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "40px",
            maxWidth: "450px",
            width: "90%",
            zIndex: 9999,
            position: "relative",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#9ca3af",
              padding: "0",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#1f2937"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9ca3af"
            }}
            aria-label="Close popup"
          >
            ×
          </button>

          {isSubmitted ? (
            // Success State
            <div
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "16px",
                }}
              >
                ✅
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1f2937",
                  margin: "0 0 12px 0",
                }}
              >
                You're in!
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: 0,
                  lineHeight: "1.6",
                }}
              >
                Check your inbox for your FREE Crypto Picks newsletter.
              </p>
            </div>
          ) : (
            <>
              {/* Emoji */}
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                🎁
              </div>

              {/* Heading */}
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#1f2937",
                  margin: "0 0 12px 0",
                  letterSpacing: "-0.5px",
                }}
              >
                Before you go...
              </h2>

              {/* Subtext */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: "0 0 24px 0",
                  lineHeight: "1.6",
                }}
              >
                Get our FREE Crypto Picks newsletter. Join 50,000+ investors and
                never miss market-moving opportunities.
              </p>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: "12px 16px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    color: "#1f2937",
                    backgroundColor: "#fff",
                    transition: "all 0.3s ease",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "12px 24px",
                    background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit",
                  }}
                >
                  Get Free Newsletter
                </button>
              </form>

              {/* Error */}
              {error && (
                <div
                  style={{
                    color: "#ef4444",
                    fontSize: "12px",
                    marginTop: "8px",
                    textAlign: "center",
                  }}
                >
                  {error}
                </div>
              )}

              {/* Footer text */}
              <p
                style={{
                  fontSize: "12px",
                  color: "#9ca3af",
                  margin: "16px 0 0 0",
                  textAlign: "center",
                  lineHeight: "1.4",
                }}
              >
                We respect your privacy. Unsubscribe at any time.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ExitIntentPopup

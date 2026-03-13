"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  LogOut,
  Copy,
  Check,
  BarChart3,
  Star,
  Bell,
  Settings,
} from "lucide-react";
import { truncateAddress, generateIdenticon, getNetworkBadgeColor } from "@/lib/wallet-auth";

interface UserProfileDropdownProps {
  address: string;
  blockchain: "solana" | "ethereum";
  network?: string;
  onSignOut: () => void;
  onPortfolio?: () => void;
  onWatchlist?: () => void;
  onAlerts?: () => void;
  onSettings?: () => void;
}

export default function UserProfileDropdown({
  address,
  blockchain,
  network = "mainnet",
  onSignOut,
  onPortfolio,
  onWatchlist,
  onAlerts,
  onSettings,
}: UserProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyAddress = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMenuClick = (callback?: () => void) => {
    setIsOpen(false);
    callback?.();
  };

  const networkBadgeColor = getNetworkBadgeColor(network);
  const displayNetwork =
    network.toLowerCase() === "mainnet"
      ? "Mainnet"
      : network.charAt(0).toUpperCase() + network.slice(1);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-all duration-200 text-white"
      >
        <img
          src={generateIdenticon(address)}
          alt="Profile"
          className="w-6 h-6 rounded-full"
        />
        <span className="text-sm font-medium hidden sm:inline">
          {truncateAddress(address, 4)}
        </span>
        <span className="text-sm font-medium sm:hidden">
          {truncateAddress(address, 3)}
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-gray-900 border border-gray-800 rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Profile Header */}
          <div className="px-4 py-3 border-b border-gray-800 bg-gray-800/50">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={generateIdenticon(address)}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400">Connected Wallet</p>
                <p className="text-sm font-mono font-bold text-white truncate">
                  {truncateAddress(address, 6)}
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`px-2 py-1 rounded text-xs font-medium ${networkBadgeColor}`}
              >
                {displayNetwork}
              </span>
              <span className="px-2 py-1 bg-purple-900 text-purple-200 rounded text-xs font-medium capitalize">
                {blockchain}
              </span>
            </div>

            {/* Copy Address */}
            <button
              onClick={handleCopyAddress}
              className="w-full mt-3 px-2 py-1.5 bg-gray-700 hover:bg-gray-600 rounded text-xs font-medium text-gray-200 flex items-center justify-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={14} />
                  Copy Address
                </>
              )}
            </button>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <MenuItem
              icon={<BarChart3 size={16} />}
              label="Portfolio"
              onClick={() => handleMenuClick(onPortfolio)}
            />
            <MenuItem
              icon={<Star size={16} />}
              label="Watchlist"
              onClick={() => handleMenuClick(onWatchlist)}
            />
            <MenuItem
              icon={<Bell size={16} />}
              label="Alerts"
              onClick={() => handleMenuClick(onAlerts)}
            />
            <MenuItem
              icon={<Settings size={16} />}
              label="Settings"
              onClick={() => handleMenuClick(onSettings)}
            />
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800" />

          {/* Sign Out */}
          <div className="py-2">
            <MenuItem
              icon={<LogOut size={16} />}
              label="Sign Out"
              onClick={() => handleMenuClick(onSignOut)}
              variant="danger"
            />
          </div>
        </div>
      )}
    </div>
  );
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: "default" | "danger";
}

function MenuItem({ icon, label, onClick, variant = "default" }: MenuItemProps) {
  const baseClasses =
    "w-full px-4 py-2 flex items-center gap-3 text-sm font-medium transition-colors";
  const variantClasses = {
    default:
      "text-gray-300 hover:bg-gray-800 hover:text-white",
    danger:
      "text-red-400 hover:bg-red-900/20 hover:text-red-300",
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]}`}>
      {icon}
      {label}
    </button>
  );
}

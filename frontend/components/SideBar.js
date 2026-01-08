"use client";

import Image from "next/image";
import {
    LayoutDashboard,
    ShieldCheck,
    Store,
    CreditCard,
    Megaphone,
    FileText,
    Wallet,
    LogOut
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
    const pathname = usePathname();
    const menuItems = [
        { name: "Home", icon: <LayoutDashboard size={20} />, href: "/" },
        { name: "Admins", icon: <ShieldCheck size={20} />, href: "/admins" },
        { name: "Merchants", icon: <Store size={20} />, href: "/merchants" },
        { name: "Card Holders", icon: <CreditCard size={20} />, href: "/card-holders" },
        { name: "EMI Application", icon: <CreditCard size={20} />, href: "/emi-application" }
    ];

    return (
        <div className="h-screen w-[15%] bg-white border-r border-gray-200 flex flex-col justify-between fixed left-0 top-0">
            <div>
                {/* Logo Section */}
                <div className="p-6">
                    <Image
                        src="/OPBLC_LOGO.png"
                        alt="One Bank Logo"
                        width={150}
                        height={50}
                        priority
                        className="w-auto h-auto"
                    />
                </div>

                {/* Navigation Menu */}
                <nav className="flex flex-col gap-2 px-4">
                    {menuItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={index}
                                href={item.href || "#"}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                            >
                                <span className={isActive ? "opacity-100" : "opacity-60"}>
                                    {item.icon}
                                </span>
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Footer / Sign Out */}
            <div className="p-4 border-t border-gray-100 grid gap-4">
                <button className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors text-white shadow-md">
                    <LogOut size={16} />
                    <span className="text-xs font-bold tracking-wider">SIGNOUT</span>
                </button>

            </div>
        </div>
    );
}

"use client";

import {
    Plus,
    Search,
    Settings,
    Pencil,
    Trash2,
    CreditCard,
    Save,
    Lock
} from "lucide-react";

export default function CardHolders() {
    return (
        <div className="p-8 bg-gray-50 min-h-screen text-gray-800 font-sans">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Lock className="w-6 h-6 text-gray-700" />
                <h1 className="text-2xl font-bold text-gray-800">Manage Card Holders</h1>
            </div>

            {/* Section 1: Register Card Holder */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                        <Plus className="w-5 h-5 text-blue-600" />
                        <h2 className="text-lg font-bold text-gray-800">Register Card Holder</h2>
                    </div>
                    <p className="text-xs text-gray-500 mb-6">Fill out the form to create a new card holder profile.</p>

                    <FormSection title="IDENTITY & CARD INFORMATION" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <Input placeholder="Card Holder ID" />
                        <Input placeholder="Full Name" />
                        <Input placeholder="Card Number" />
                        <Input placeholder="Mobile Number" />
                        <div className="md:col-span-1">
                            <Input placeholder="Email Address" type="email" />
                        </div>
                    </div>

                    <FormSection title="MAILING ADDRESS" />
                    <div className="w-full mb-6">
                        <Input placeholder="Mailing Address" />
                    </div>
                </div>
                <div className="p-4 bg-gray-50 flex justify-end">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-bold text-xs shadow-sm transition-colors uppercase tracking-wide">
                        <Save className="w-4 h-4" />
                        Save Holder
                    </button>
                </div>
            </div>

            {/* Section 2: Existing Card Holders */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 pb-2">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Existing Card Holders</h2>
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                        <input
                            type="text"
                            placeholder="Search by email, name, ID, or phone..."
                            className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-blue-300 transition-all"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase">Client ID</th>
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase">Name</th>
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase">Email</th>
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase">Mobile</th>
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase">Card Number</th>
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase">Address</th>
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: "12348561", name: "Tumpa apu", email: "tumpa@gmail.com", mobile: "01712345678", card: "1234567812345679", address: "Birulia, Savar, Dhaka-1340" },
                                { id: "11111111", name: "Mridul", email: "lamridul.leo@gmail.com", mobile: "01617776079", card: "1234567898745612", address: "Birulia, Savar, Dhaka-1340" },
                                { id: "123485615", name: "LUTFAR AHMED", email: "lamridul.leo2@gmail.com", mobile: "01617776079", card: "1234567812345678", address: "Birulia, Savar, Dhaka-1340" },
                                { id: "12500102", name: "SIBIL SADIK RONY", email: "siblisadikrony@gmail.com", mobile: "01312536489", card: "123456******1234", address: "Garail, Rajitpur, Tangail Sadar" },
                                { id: "10101010", name: "Zafirul Islam", email: "zafir.smuct@gmail.com", mobile: "01712630666", card: "1234567812345678", address: "Nandi Para, Dhaka" },
                                { id: "124634633", name: "LA Mridul", email: "mridulahmed262@gmail.com", mobile: "01617776079", card: "5555555555555555", address: "Khilkhet, Dhaka" },
                                { id: "33333333", name: "Atia Afrin", email: "atia@gmail.com", mobile: "01674033288", card: "1234567812345678", address: "300 Feet" },
                                { id: "99999999", name: "Atia Afrin", email: "radia@gmail.com", mobile: "01674033288", card: "1234567812345678", address: "Khilgaon" },
                                { id: "13458645", name: "Bedesh Bose", email: "bedesh@bose.com", mobile: "01617776079", card: "1234567812345678", address: "Khilgaon, Dhaka" },
                                { id: "46546546", name: "Prithibi Sarker", email: "prithibisarker@gmail.com", mobile: "01307582563", card: "1234567812345678", address: "Jalalabad Bhaban" },
                            ].map((holder, index) => (
                                <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 py-3 text-xs text-gray-600 font-medium">{holder.id}</td>
                                    <td className="p-4 py-3 text-xs text-gray-800 font-bold">{holder.name}</td>
                                    <td className="p-4 py-3 text-xs text-gray-600">{holder.email}</td>
                                    <td className="p-4 py-3 text-xs text-gray-600 font-mono">{holder.mobile}</td>
                                    <td className="p-4 py-3 text-xs text-gray-600 font-mono">{holder.card}</td>
                                    <td className="p-4 py-3 text-xs text-gray-600">{holder.address}</td>
                                    <td className="p-4 py-3">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="p-1.5 text-blue-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
                                                <Settings className="w-3.5 h-3.5" />
                                            </button>
                                            <button className="p-1.5 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors">
                                                <Pencil className="w-3.5 h-3.5" />
                                            </button>
                                            <button className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination Placeholder */}
                <div className="p-4 border-t border-gray-100 flex justify-end items-center gap-4 text-xs text-gray-500">
                    <span>Rows per page: 10</span>
                    <div className="flex items-center gap-2">
                        <span>1-10 of 12</span>
                        <span className="cursor-pointer hover:text-gray-800">&lt;</span>
                        <span className="cursor-pointer hover:text-gray-800">&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Sub-components
function FormSection({ title }) {
    return <h3 className="text-[10px] font-bold text-blue-500 tracking-widest uppercase mb-3 mt-6">{title}</h3>;
}

function Input({ placeholder, type = "text" }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400"
        />
    );
}
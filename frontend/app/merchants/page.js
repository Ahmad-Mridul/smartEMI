"use client";

import { useState } from "react";
import {
    Plus,
    Search,
    Settings,
    Pencil,
    Trash2,
    Store,
    Save
} from "lucide-react";

export default function Merchants() {
    const [tenures, setTenures] = useState([{ tenure: "", percentage: "" }]);

    const addTenure = () => {
        setTenures([...tenures, { tenure: "", percentage: "" }]);
    };

    const removeTenure = (index) => {
        const newTenures = tenures.filter((_, i) => i !== index);
        setTenures(newTenures);
    };

    const handleTenureChange = (index, field, value) => {
        const newTenures = [...tenures];
        newTenures[index][field] = value;
        setTenures(newTenures);
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen text-gray-800 font-sans">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Store className="w-6 h-6 text-gray-700" />
                <h1 className="text-2xl font-bold text-gray-800">Manage Merchants</h1>
            </div>

            {/* Section 1: Register New Merchant */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                        <Plus className="w-5 h-5 text-blue-600" />
                        <h2 className="text-lg font-bold text-gray-800">Register New Merchant</h2>
                    </div>
                    <p className="text-xs text-gray-500 mb-6">Fill out all required details and upload the agreement document (optional).</p>

                    <FormSection title="IDENTITY & SECURITY" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <Input placeholder="Merchant Name" />
                        <Input placeholder="Email Address" type="email" />
                        <Input placeholder="Mobile Number" />
                        <Input placeholder="Password" type="password" />
                    </div>

                    <FormSection title="BUSINESS ADDRESS" />
                    <div className="w-full mb-6">
                        <Input placeholder="Head Office Address" />
                    </div>

                    <FormSection title="COMMUNICATION OFFICER" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <Input placeholder="Officer Name" />
                        <Input placeholder="Nickname" />
                        <Input placeholder="Mobile" />
                        <Input placeholder="Email" type="email" />
                        <Input placeholder="Telephone" />
                        <Input placeholder="Extension" />
                    </div>

                    <FormSection title="SMART EMI DETAILS" />
                    <div className="space-y-4 mb-6">
                        {tenures.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-1">
                                    <select
                                        value={item.tenure}
                                        onChange={(e) => handleTenureChange(index, 'tenure', e.target.value)}
                                        className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-600 bg-white"
                                    >
                                        <option value="" disabled>Select Tenure</option>
                                        {[
                                            { value: "3", label: "3 Months" },
                                            { value: "6", label: "6 Months" },
                                            { value: "9", label: "9 Months" },
                                            { value: "12", label: "12 Months" },
                                            { value: "18", label: "18 Months" },
                                            { value: "24", label: "24 Months" },
                                            { value: "36", label: "36 Months" },
                                        ].map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                                disabled={tenures.some((t, i) => i !== index && t.tenure === option.value)}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex-1 relative">
                                    <input
                                        type="number"
                                        value={item.percentage}
                                        onChange={(e) => handleTenureChange(index, 'percentage', e.target.value)}
                                        placeholder="Commission Percentage"
                                        className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400"
                                    />
                                    <span className="absolute right-4 top-3 text-gray-400 text-sm">%</span>
                                </div>
                                {tenures.length > 1 && (
                                    <button
                                        onClick={() => removeTenure(index)}
                                        className="p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Remove Tenure"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            onClick={addTenure}
                            className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mt-2"
                        >
                            <Plus className="w-4 h-4" />
                            Add Another Tenure
                        </button>
                    </div>

                    <FormSection title="PAYMENT METHOD" />
                    <div className="w-full mb-6">
                        <select className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-600 bg-white">
                            <option>Bank Transfer</option>
                            <option>Check</option>
                        </select>
                    </div>

                    <FormSection title="FINANCIAL INFORMATION" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <Input placeholder="Account Name" />
                        <Input placeholder="Branch Name" />
                        <Input placeholder="Routing Number" />
                        <Input placeholder="Bank Account Number" />
                    </div>

                    <FormSection title="DOCUMENTATION" />
                    <div className="border border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
                        <div className="mb-2 text-xs font-bold text-gray-700">Upload Agreement PDF (Optional)</div>
                        <div className="flex items-center gap-2">
                            <input type="button" value="Choose File" className="px-3 py-1.5 text-xs font-medium bg-gray-200 hover:bg-gray-300 rounded cursor-pointer transition-colors text-gray-700" />
                            <span className="text-xs text-gray-500">No file chosen</span>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2">Max 10MB PDF file.</p>
                    </div>
                </div>
                <div className="p-4 bg-gray-50 flex justify-end">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-bold text-xs shadow-sm transition-colors uppercase tracking-wide">
                        <Save className="w-4 h-4" />
                        Save Merchant
                    </button>
                </div>
            </div>

            {/* Section 2: Existing Merchants */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 pb-2">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Existing Merchants</h2>
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                        <input
                            type="text"
                            placeholder="Search by ID, email, mobile, or account..."
                            className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-blue-300 transition-all"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase">ID</th>
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase">Name</th>
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase">Email</th>
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase">Mobile</th>
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase">Account Number</th>
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: 5, name: "Walton", email: "walton@gmail.com", mobile: "01311111111", account: "1234567812345678" },
                                { id: 6, name: "Jony Telicom", email: "jony@gmail.com", mobile: "01999999999", account: "1234567812345678" },
                                { id: 8, name: "Kavazo", email: "kavazo@gmail.com", mobile: "01617776079", account: "1234567812345678" },
                                { id: 9, name: "Arong", email: "arong@gmail.com", mobile: "01617776079", account: "1234567812345678" },
                                { id: 10, name: "Test Merchant 6", email: "testmerchant6@example.com", mobile: "01700000005", account: "123456789" },
                                { id: 12, name: "Test Merchant PDF", email: "testmerchantpdf@example.com", mobile: "01711111112", account: "1234567890" },
                                { id: 13, name: "Dylan Dawson", email: "sugynona@mailinator.com", mobile: "01718564155", account: "1234567812345678" },
                                { id: 14, name: "Wall Mart", email: "wallmart@gmail.com", mobile: "01718564155", account: "1234567812345678" },
                                { id: 15, name: "Khulshi Mart", email: "merchant@gmail.com", mobile: "01617776079", account: "1234567812345678" },
                            ].map((merchant, index) => (
                                <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 py-3 text-xs text-gray-600 font-medium">{merchant.id}</td>
                                    <td className="p-4 py-3 text-xs text-gray-800 font-bold">{merchant.name}</td>
                                    <td className="p-4 py-3 text-xs text-gray-600">{merchant.email}</td>
                                    <td className="p-4 py-3 text-xs text-gray-600 font-mono">{merchant.mobile}</td>
                                    <td className="p-4 py-3 text-xs text-gray-600 font-mono">{merchant.account}</td>
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
                        <span>1-9 of 15</span>
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
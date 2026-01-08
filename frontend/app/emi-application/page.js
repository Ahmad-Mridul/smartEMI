"use client";

import { FileText, Calendar, CreditCard, Search, PlusCircle } from "lucide-react";
import { useState } from "react";

export default function EmiApplication() {
    // State for card number parts
    const [cardFirst6, setCardFirst6] = useState("");
    const [cardLast4, setCardLast4] = useState("");

    // State for Merchant Search
    const [merchantSearch, setMerchantSearch] = useState("");
    const [merchantFound, setMerchantFound] = useState(null); // null = initial, false = not found, true = found
    const [showMerchantForm, setShowMerchantForm] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    // State for Installment Plan
    const [selectedTenure, setSelectedTenure] = useState(null);

    const handleMerchantSearch = (e) => {
        e.preventDefault();

        if (!merchantSearch.trim()) {
            setShowTooltip(true);
            return;
        }

        // Mock search logic: Only find if query is "123"
        // In reality, this would check the backend
        if (merchantSearch === "123") {
            setMerchantFound(true);
            setShowMerchantForm(true);
        } else {
            setMerchantFound(false);
            setShowMerchantForm(false);
        }
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen text-gray-800 font-sans">
            <div className="max-w-4xl mx-auto">

                {/* Header Section */}
                <div className="flex justify-between items-end mb-6">
                    <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-blue-900" />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">Smart EMI Application Form</h1>
                            <p className="text-xs text-gray-500">Please fill out the form details below.</p>
                        </div>
                    </div>
                    {/* Date at Top */}
                    <div className="flex items-center bg-white border border-gray-300 rounded px-3 py-2">
                        <span className="text-xs font-bold text-gray-500 mr-2 uppercase">Date:</span>
                        <input type="date" className="text-sm font-bold text-gray-800 focus:outline-none bg-transparent" />
                    </div>
                </div>

                {/* Form Container mimicking paper */}
                <form className="bg-white shadow-lg border border-gray-200 p-8 rounded-sm">

                    {/* Section: Cardholder Details */}
                    <div className="mb-8 border-b-2 border-gray-100 pb-8">
                        <h2 className="text-sm font-bold text-gray-900 uppercase border-b border-gray-200 pb-2 mb-4">Cardholder Details</h2>

                        <div className="grid gap-4">
                            <InputRow label="Cardholder Name">
                                <input type="text" className="w-full border-b border-dashed border-gray-300 focus:border-blue-500 outline-none py-1 text-sm bg-blue-50/20 px-2" />
                            </InputRow>

                            <InputRow label="Cardholder Address">
                                <input type="text" className="w-full border-b border-dashed border-gray-300 focus:border-blue-500 outline-none py-1 text-sm bg-blue-50/20 px-2" />
                            </InputRow>

                            {/* Split Credit Card Number */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                                <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Credit Card Number</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            maxLength={6}
                                            value={cardFirst6}
                                            onChange={(e) => setCardFirst6(e.target.value)}
                                            placeholder="123456"
                                            className="w-24 text-center border border-gray-300 rounded px-2 py-1.5 focus:border-blue-500 outline-none text-sm font-mono tracking-widest"
                                        />
                                        <div className="flex gap-1 text-gray-400 text-xs font-mono select-none">
                                            <span className="bg-gray-100 px-1 rounded border border-gray-200">X</span>
                                            <span className="bg-gray-100 px-1 rounded border border-gray-200">X</span>
                                            <span className="bg-gray-100 px-1 rounded border border-gray-200">X</span>
                                            <span className="bg-gray-100 px-1 rounded border border-gray-200">X</span>
                                            <span className="bg-gray-100 px-1 rounded border border-gray-200">X</span>
                                            <span className="bg-gray-100 px-1 rounded border border-gray-200">X</span>
                                        </div>
                                        <input
                                            type="text"
                                            maxLength={4}
                                            value={cardLast4}
                                            onChange={(e) => setCardLast4(e.target.value)}
                                            placeholder="7890"
                                            className="w-20 text-center border border-gray-300 rounded px-2 py-1.5 focus:border-blue-500 outline-none text-sm font-mono tracking-widest"
                                        />
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-1">Enter first 6 and last 4 digits</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 mb-1">Card Expiry Date</label>
                                        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                                            <input type="text" placeholder="MM" className="w-10 p-1.5 text-center text-sm outline-none border-r border-gray-200" maxLength={2} />
                                            <input type="text" placeholder="YY" className="w-10 p-1.5 text-center text-sm outline-none" maxLength={2} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-600 mb-1">Mobile</label>
                                        <input type="text" className="w-full border border-gray-300 rounded px-2 py-1.5 focus:border-blue-500 outline-none text-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section: Merchant Details */}
                    <div className="mb-8 border-b-2 border-gray-100 pb-8">
                        <h2 className="text-sm font-bold text-gray-900 uppercase border-b border-gray-200 pb-2 mb-4">Merchant Details</h2>

                        {!showMerchantForm ? (
                            <div className="max-w-xl">
                                <div className="flex items-end gap-2">
                                    <div className="flex-grow">
                                        <label className="block text-xs font-bold text-gray-600 mb-1 bg-white">
                                            Search Merchant Details <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                                            <input
                                                type="text"
                                                required
                                                value={merchantSearch}
                                                onChange={(e) => {
                                                    setMerchantSearch(e.target.value);
                                                    if (showTooltip) setShowTooltip(false);
                                                }}
                                                placeholder="Enter Client ID, Phone Number, or Email..."
                                                className="w-full border border-gray-300 rounded pl-9 pr-3 py-2 text-sm focus:border-blue-500 outline-none invalid:border-red-300 focus:invalid:border-red-500"
                                            />
                                            {/* Tooltip */}
                                            {showTooltip && (
                                                <div className="absolute left-0 -top-10 bg-gray-800 text-white text-[10px] px-2 py-1 rounded shadow-lg animate-in fade-in slide-in-from-bottom-1 z-10">
                                                    Please enter a value to search.
                                                    <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleMerchantSearch}
                                        type="button" // Prevent form submission
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-xs font-bold uppercase transition-colors"
                                    >
                                        Search
                                    </button>
                                </div>

                                {merchantFound === false && (
                                    <div className="mt-3 p-3 bg-yellow-50 border border-yellow-100 rounded flex justify-between items-center animate-in fade-in slide-in-from-top-2">
                                        <span className="text-xs text-yellow-700 font-medium">Merchant not found within our system.</span>
                                        <button
                                            onClick={() => setShowMerchantForm(true)}
                                            type="button"
                                            className="text-blue-600 hover:text-blue-800 text-xs font-bold flex items-center gap-1"
                                        >
                                            <PlusCircle className="w-3.5 h-3.5" />
                                            ADD MERCHANT
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="animate-in fade-in slide-in-from-top-4">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded">
                                        {merchantFound ? "✓ Merchant Found" : "+ Adding New Merchant"}
                                    </span>
                                    <button
                                        onClick={() => {
                                            setShowMerchantForm(false);
                                            setMerchantFound(null);
                                            setMerchantSearch("");
                                        }}
                                        type="button"
                                        className="text-[10px] text-gray-400 hover:text-red-500 un"
                                    >
                                        CANCEL / SEARCH AGAIN
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputBox label="Merchant Name" />
                                    <InputBox label="Outlet Name/Address" />
                                    <InputBox label="Merchant Phone" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <InputBox label="Transaction Approval Code" />
                                        <InputBox label="Transaction Date" type="date" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section: Purchase & Installment */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Purchase Info */}
                        <div className="border border-gray-300 p-4 rounded bg-gray-50/50">
                            <h3 className="text-xs font-bold text-gray-700 uppercase mb-4 text-center border-b border-gray-200 pb-2">Purchase Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Purchase Amount (BDT)</label>
                                    <input type="number" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-blue-500 outline-none bg-white" placeholder="0.00" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Item Description</label>
                                    <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-blue-500 outline-none bg-white h-20 resize-none"></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Installment Plan */}
                        <div className="border border-gray-300 p-4 rounded bg-gray-50/50">
                            <h3 className="text-xs font-bold text-gray-700 uppercase mb-4 text-center border-b border-gray-200 pb-2">Installment Plan @ 0% Interest</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {[3, 6, 9, 12, 18, 24, 36].map((month) => {
                                    const isSelected = selectedTenure === month;

                                    return (
                                        <label
                                            key={month}
                                            className={`flex flex-col items-center justify-center p-2 border rounded cursor-pointer transition-all group relative
                                            ${isSelected ? 'border-blue-500 bg-blue-50 shadow-sm' : 'border-blue-100 bg-white hover:border-blue-400 hover:shadow-sm'}
                                        `}>
                                            <span className={`text-xs font-bold mb-1 ${isSelected ? 'text-blue-700' : 'text-gray-700'} group-hover:text-blue-600`}>
                                                {month} months
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                                                name="installment"
                                                checked={isSelected}
                                                onChange={() => {
                                                    // Toggle logic: if already selected, unselect. Else, select new.
                                                    setSelectedTenure(isSelected ? null : month);
                                                }}
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Footer / Terms */}
                    <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded mb-8">
                        <input type="checkbox" id="terms" className="mt-0.5 w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                        <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed cursor-pointer select-none">
                            I understand and agree to the <span className="font-bold text-blue-700">Terms and Conditions</span> (as mentioned overleaf) of this program.
                            I authorize the bank to convert my transaction into EMI as per the plan selected above.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-wider shadow-md transition-transform hover:scale-105">
                            Submit Application
                        </button>
                    </div>


                </form>
            </div >
        </div>
    )
};

// Helper Components for Cleaner Form
function InputRow({ label, children }) {
    return (
        <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="w-48 text-xs font-bold text-gray-600 uppercase flex-shrink-0">{label}:</label>
            <div className="flex-grow">
                {children}
            </div>
        </div>
    );
}

function InputBox({ label, type = "text" }) {
    return (
        <div>
            <label className="block text-xs font-bold text-gray-600 mb-1">{label}</label>
            <input type={type} className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-blue-500 outline-none" />
        </div>
    );
}

import {
    Plus,
    Search,
    Settings,
    Pencil,
    Trash2,
    UserPlus,
    Shield
} from "lucide-react";

export default function Admins() {
    return (
        <div className="p-8 bg-gray-50 min-h-screen text-gray-800 font-sans">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Shield className="w-6 h-6 text-gray-700" />
                <h1 className="text-2xl font-bold text-gray-800">Manage Admins</h1>
            </div>

            {/* Section 1: Register New Admin */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                            <UserPlus className="w-5 h-5 text-blue-600" />
                            <h2 className="text-lg font-bold text-gray-800">Register New Admin</h2>
                        </div>
                        <button className="text-[10px] font-bold text-blue-500 hover:text-blue-700 tracking-wider uppercase">
                            GO TO SUPER ADMINS
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mb-6">Fill out the details below to create a new system administrator.</p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-[10px] font-bold text-blue-500 tracking-widest uppercase mb-3">IDENTITY & SECURITY</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Admin Name"
                                    className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Mobile Number"
                                    className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400"
                                />
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400"
                                    />
                                    <p className="text-[10px] text-gray-400 mt-1 ml-1">Leave blank if not changing</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[10px] font-bold text-blue-500 tracking-widest uppercase mb-3">LOCATION</h3>
                            <div className="w-full">
                                <input
                                    type="text"
                                    placeholder="Physical Address"
                                    className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-gray-50 flex justify-end">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-bold text-xs shadow-sm transition-colors uppercase tracking-wide">
                        <Plus className="w-4 h-4" />
                        Create Admin
                    </button>
                </div>
            </div>

            {/* Section 2: Existing Admins */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 pb-2">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Existing Admins</h2>
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                        <input
                            type="text"
                            placeholder="Search by ID, name, email, or mobile..."
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
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase">Address</th>
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase">Role</th>
                                <th className="p-4 py-3 text-xs font-bold text-gray-500 uppercase text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: 2, name: "Admin", email: "admin@gmail.com", mobile: "01312345678", address: "Chattogram", role: "admin" },
                                { id: 5, name: "Bedesh Bose", email: "bedesh@bose.com", mobile: "01617776079", address: "Kawran Bazar, Dhaka", role: "admin" },
                                { id: 8, name: "Test Admin", email: "test.admin@gmail.com", mobile: "01718564155", address: "Kawran Bazar", role: "admin" },
                                { id: 9, name: "Abdul Khalek Rony", email: "rony@gmail.com", mobile: "01718564155", address: "Kawran Bazar", role: "admin" },
                                { id: 11, name: "Abdul Khalek Rony", email: "rony2@gmail.com", mobile: "0123456789", address: "Kawran Bazar", role: "admin" },
                                { id: 1, name: "LA Mridul", email: "mridul@gmail.com", mobile: "01232222222", address: "Khilkhet", role: "super_admin" },
                            ].map((admin, index) => (
                                <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 py-3 text-xs text-gray-600 font-medium">{admin.id}</td>
                                    <td className="p-4 py-3 text-xs text-gray-800 font-bold">{admin.name}</td>
                                    <td className="p-4 py-3 text-xs text-gray-600">{admin.email}</td>
                                    <td className="p-4 py-3 text-xs text-gray-600 font-mono">{admin.mobile}</td>
                                    <td className="p-4 py-3 text-xs text-gray-600">{admin.address}</td>
                                    <td className="p-4 py-3">
                                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${admin.role === 'super_admin'
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'bg-blue-50 text-blue-600'
                                            }`}>
                                            {admin.role}
                                        </span>
                                    </td>
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
                        <span>1-6 of 6</span>
                        <span className="cursor-pointer hover:text-gray-800">&lt;</span>
                        <span className="cursor-pointer hover:text-gray-800">&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

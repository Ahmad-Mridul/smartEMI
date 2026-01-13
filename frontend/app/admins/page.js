"use client";
import {
    Plus,
    Search,
    Settings,
    Pencil,
    Trash2,
    UserPlus,
    Shield
} from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Admins() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobile, setMobile] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');
    const isFormValid =
        name.trim() &&
        email.trim() &&
        mobile.trim() &&
        password.trim() &&
        address.trim() &&
        !nameError &&
        !emailError &&
        !mobileError &&
        !passwordError &&
        !addressError;
    const validate = () => {
        let valid = true;

        // Name
        if (!name.trim()) {
            setNameError("Admin name is required");
            valid = false;
        } else {
            setNameError("");
        }

        // Email
        if (!email.trim()) {
            setEmailError("Email is required");
            valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            setEmailError("Invalid email format");
            valid = false;
        } else {
            setEmailError("");
        }

        // Mobile
        if (!mobile.trim()) {
            setMobileError("Mobile number is required");
            valid = false;
        } else if (!/^[0-9]{10,15}$/.test(mobile)) {
            setMobileError("Invalid mobile number");
            valid = false;
        } else {
            setMobileError("");
        }

        // Password
        if (!password) {
            setPasswordError("Password is required");
            valid = false;
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            valid = false;
        } else {
            setPasswordError("");
        }

        // Address
        if (!address.trim()) {
            setAddressError("Address is required");
            valid = false;
        } else {
            setAddressError("");
        }

        return valid;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        const admin = {
            name,
            email,
            mobile,
            password,
            address
        }
        const res = await fetch("http://localhost:5000/admins", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(admin)
        });
        if (res.ok) {
            Swal.fire({
                title: "Admin Added Successfully!",
                // text: "You clicked the button!",
                icon: "success"
            });
            setName('');
            setEmail('');
            setMobile('');
            setPassword('');
            setAddress('');
        }

    }
    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        const fetchAdmins = async () => {
            const res = await fetch("http://localhost:5000/admins");
            const data = await res.json();
            setAdmins(data);
        }
        fetchAdmins();
    }, [admins])
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

                    <form className="space-y-6" method="POST">
                        <div>
                            <h3 className="text-[10px] font-bold text-blue-500 tracking-widest uppercase mb-3">IDENTITY & SECURITY</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            if (e.target.value.trim()) setNameError("");
                                        }}
                                        onBlur={() => {
                                            if (!name.trim()) setNameError("Admin name is required");
                                        }}
                                        placeholder="Admin Name"
                                        className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400"
                                    />
                                    {
                                        nameError && <p className="text-red-500 text-xs mt-1">{nameError}</p>
                                    }
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (e.target.value.trim()) setEmailError("");
                                        }}
                                        onBlur={() => {
                                            if (!email.trim()) setEmailError("Email is required");
                                        }}
                                        placeholder="Email Address"
                                        className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400"
                                    />
                                    {
                                        emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>
                                    }
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={mobile}
                                        onChange={(e) => {
                                            setMobile(e.target.value);
                                            if (e.target.value.trim()) setMobileError("");
                                        }}
                                        onBlur={() => {
                                            if (!mobile.trim()) setMobileError("Mobile number is required");
                                        }}
                                        placeholder="Mobile Number"
                                        className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400"
                                    />
                                    {
                                        mobileError && <p className="text-red-500 text-xs mt-1">{mobileError}</p>
                                    }
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            if (e.target.value.trim()) setPasswordError("");
                                        }}
                                        onBlur={() => {
                                            if (!password.trim()) setPasswordError("Password is required");
                                        }}
                                        placeholder="Password"
                                        className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400"
                                    />
                                    {
                                        passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                                    }
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[10px] font-bold text-blue-500 tracking-widest uppercase mb-3">LOCATION</h3>
                            <div className="w-full">
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                        if (e.target.value.trim()) setAddressError("");
                                    }}
                                    onBlur={() => {
                                        if (!address.trim()) setAddressError("Address is required");
                                    }}
                                    placeholder="Physical Address"
                                    className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400"
                                />
                                {
                                    addressError && <p className="text-red-500 text-xs mt-1">{addressError}</p>
                                }
                            </div>
                        </div>
                        <div className="p-4 flex justify-end">
                            <button
                                type="submit"
                                disabled={!isFormValid}
                                onClick={handleSubmit}
                                className={`px-6 py-2.5 rounded-lg flex items-center gap-2 font-bold text-xs uppercase tracking-wide
                                    ${isFormValid
                                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                            >
                                Create admin
                            </button>
                        </div>
                    </form>

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
                            {admins.map((admin, index) => (
                                <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 py-3 text-xs text-gray-600 font-medium">{admin.id}</td>
                                    <td className="p-4 py-3 text-xs text-gray-800 font-bold">{admin.name}</td>
                                    <td className="p-4 py-3 text-xs text-gray-600">{admin.email}</td>
                                    <td className="p-4 py-3 text-xs text-gray-600 font-mono">{admin.mobile}</td>
                                    <td className="p-4 py-3 text-xs text-gray-600">{admin.address}</td>
                                    <td className="p-4 py-3">
                                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${admin.user?.role === 'super_admin'
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'bg-blue-50 text-blue-600'
                                            }`}>
                                            {admin.user?.role}
                                        </span>
                                    </td>
                                    <td className="p-4 py-3">
                                        <div className="flex items-center justify-center gap-2">
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

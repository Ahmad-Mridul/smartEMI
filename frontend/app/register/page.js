"use client";
import { useState } from "react";

const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/register',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({email,password})
        });
        const data = await response.json()
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center h-150">
            <form onSubmit={handleSubmit} className="space-y-4 text-center">
                <div className="space-x-2">
                    <label>Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="border p-2 rounded-xl"
                    />
                </div>
                <div className="space-x-2">
                    <label>Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="border p-2 rounded-xl"
                    />
                </div>
                <button type="submit" className="btn btn-success border rounded-xl p-1">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;

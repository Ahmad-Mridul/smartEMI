// import LoginForm from "@/components/login/LoginForm"
export const metadata = {
    title: "Login - Smart EMI Application System",
    description: "Login to your Smart EMI account",
};

const LoginForm = () => {
    return (
        <form className="space-y-6" action="#" method="POST">
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 "
                >
                    Email address
                </label>
                <div className="mt-1">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 text-black  rounded-md shadow-sm placeholder-gray-600 color-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
                        placeholder="you@example.com"
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 "
                >
                    Password
                </label>
                <div className="mt-1">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black "
                        placeholder="••••••••"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                {/* <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900 "
                    >
                        Remember me
                    </label>
                </div> */}

                <div className="text-sm">
                    <a
                        href="#"
                        className="font-medium text-blue-600 hover:text-blue-500"
                    >
                        Forgot your password?
                    </a>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Sign in
                </button>
                
            </div>
        </form>
    );
};
export default function LoginPage() {
    return (
        <div className="min-h-screen flex bg-gray-50 ">
            {/* Left side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex flex-col justify-center px-12 text-white">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold mb-6">
                            Smart EMI Application System
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Streamline your EMI application process with our
                            comprehensive management system.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-300 rounded-full" />
                                <span className="text-blue-100">
                                    Fast application processing
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-300 rounded-full" />
                                <span className="text-blue-100">
                                    Real-time status tracking
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-300 rounded-full" />
                                <span className="text-blue-100">
                                    Comprehensive reporting
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
            </div>

            {/* Right side - Login form */}
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 bg-white">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start mb-8">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">
                                    S
                                </span>
                            </div>
                            <span className="ml-3 text-2xl font-bold text-gray-900">
                                Smart EMI
                            </span>
                        </div>

                        {/* Mobile branding - shown only on small screens */}
                        <div className="lg:hidden mb-8 text-center">
                            <h1 className="text-2xl font-bold text-gray-900  mb-2">
                                Smart EMI Application System
                            </h1>
                            <p className="text-gray-600 ">
                                Streamline your EMI application process.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 ">
                            Welcome back
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 ">
                            Sign in to your account to continue
                        </p>
                    </div>

                    <div className="mt-8">
                        <LoginForm />
                    </div>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 " />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-50  text-gray-500">
                                    Need help?
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-xs text-gray-500 ">
                                Contact your administrator for account access or
                                technical support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

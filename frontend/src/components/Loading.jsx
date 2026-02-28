const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Blur background */}
            <div className="absolute inset-0 backdrop-blur-sm bg-white/5" />

            {/* Loader card */}
            <div className="relative flex flex-col items-center gap-3 rounded-2xl bg-white/70 px-8 py-6 shadow-lg">
                {/* Brand spinner */}
                <div className="w-14 h-14 rounded-full border-4 border-pink-200 border-t-pink-600 animate-spin" />
                <p className="text-sm font-medium text-gray-700">Loading...</p>
            </div>
        </div>
    )
}

export default Loader
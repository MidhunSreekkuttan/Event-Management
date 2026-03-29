const Navbar = () => {

    const redGlass =
        "border border-red-200/60 bg-gradient-to-br from-white/80 via-red-50/70 to-red-100/60 backdrop-blur-2xl shadow-[0_25px_100px_rgba(220,38,38,0.18)]";

    return (
        <header className={`rounded-[28px] p-5 ${redGlass} mt-6 mx-5 mr-13`}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Admin Dashboard</h2>
                    <p className="text-sm text-black/60">
                        Monitor events, bookings, enquiries, and platform growth.
                    </p>
                </div>

            </div>
        </header>
    )
}

export default Navbar
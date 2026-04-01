export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">


                <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6 flex h-24 w-24 items-center justify-center">

                        <div className="absolute inset-0 rounded-full border-4 border-white/10" />
                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-fuchsia-400 border-r-indigo-400 animate-spin" />
                        <div className="absolute inset-3 rounded-full border-4 border-transparent border-t-cyan-400 animate-spin [animation-duration:1.6s] [animation-direction:reverse]" />

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 text-lg font-bold shadow-lg">
                            A
                        </div>

                    </div>

                    <p className="mb-2 text-sm uppercase tracking-[0.35em] text-white">
                        Adhithi
                    </p>

                </div>


        </div>
    );
}
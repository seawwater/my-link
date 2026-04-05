export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-50">
      <main className="relative p-6 text-center">
        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="group relative overflow-hidden rounded-3xl bg-white/70 p-10 shadow-xl shadow-slate-200/50 backdrop-blur-xl ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 dark:bg-zinc-900/80 dark:shadow-none dark:ring-zinc-800 sm:p-16">
          
          {/* Avatar Placeholder */}
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 ring-4 ring-white transition-transform duration-500 group-hover:scale-110 dark:bg-indigo-950/50 dark:text-indigo-400 dark:ring-zinc-900">
             <span className="text-3xl font-black tracking-tight">해수</span>
          </div>

          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            김해수
          </h1>
          
          <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-80" />
          
          <p className="mx-auto max-w-[280px] break-keep text-base font-medium leading-relaxed text-slate-600 dark:text-zinc-400 sm:max-w-sm sm:text-lg">
            안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
          </p>
        </div>
      </main>
    </div>
  );
}

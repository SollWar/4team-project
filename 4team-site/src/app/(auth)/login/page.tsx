import Link from 'next/link'
import InputField from '../_components/inputField'

const LoginPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-1">
        <div className="animate-glow absolute top-[-20%] left-[-20%] w-[40%] h-[40%] bg-(--accent-2) opacity-[0.03] blur-[120px] rounded-full"></div>
        <div className="animate-glow absolute bottom-[-20%] right-[-20%] w-[40%] h-[40%] bg-(--accent) opacity-[0.02] blur-[120px] rounded-full"></div>
      </div>
      <div className="relative z-10 w-full max-w-105 px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-32 h-32 mb-4">
            <img src={'/logo-192-white.png'} />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            4Team Task Manager
          </h1>
          <p className="text-(--muted) text-sm mt-2">
            Войдите, чтобы продолжить работу
          </p>
        </div>
        <div className="glass-card rounded-2xl shadow-2xl p-8">
          <form action="#" className="space-y-5" method="POST">
            <div className="space-y-1.5">
              <div className="space-y-1.5">
                <InputField
                  label="Email"
                  id="email"
                  name="email"
                  placeholder="name@domain.com"
                  required={true}
                  type="email"
                  icon="/mail.svg"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <InputField
                label="Пароль"
                id="password"
                name="password"
                placeholder="••••••••"
                required={true}
                type="password"
                recover={true}
                icon="/password.svg"
              />
            </div>
            <button
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-(--accent-2) hover:bg-(--accent-2-hover) focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-(--accent-2) focus:ring-offset-[#0b0f14] transition-all transform active:scale-[0.98]"
              type="submit"
            >
              Войти
            </button>
          </form>
          <div className="mt-6">
            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-(--border)"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-(--card) text-(--muted) text-xs">
                  Или войдите с помощью
                </span>
              </div>
            </div> */}
            <div className="mt-4 text-center">
              <span className="font-medium text-(--muted) text-sm">
                Нет акканута?
              </span>
              <span> </span>
              <Link
                className="font-medium text-(--accent-2) hover:text-white transition-colors text-sm"
                href="/register"
              >
                Зарегистрироваться
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-(--muted) opacity-60 font-mono">
          © 2026 ED4M.
        </div>
      </div>
    </div>
  )
}

export default LoginPage

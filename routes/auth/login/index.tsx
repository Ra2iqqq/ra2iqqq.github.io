import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";

type LocationState = {
  from?: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginAsDemo } = useAuthContext();

  const state = location.state as LocationState | null;
  const destination = state?.from || "/dashboard/profile";

  return (
    <main className="min-h-screen grid place-items-center p-6">
      <section className="w-full max-w-[420px] rounded-xl border border-slate-200 p-6">
        <h1 className="mb-2 text-[1.4rem] font-bold">Login</h1>
        <p className="mb-4 text-slate-600">Demo login to access dashboard pages.</p>
        <button
          type="button"
          onClick={() => {
            loginAsDemo();
            navigate(destination, { replace: true });
          }}
          className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-white"
        >
          Continue as Demo User
        </button>
      </section>
    </main>
  );
}

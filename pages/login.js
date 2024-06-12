import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Inicia sesión en Apuntes UDP</h1>
      <button onClick={() => signIn("google")}>Continuar con Google</button>
    </div>
  );
}

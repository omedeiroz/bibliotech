import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthPage.css';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", isLogin ? "login" : "register");
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={`auth-container ${isLogin ? 'login-mode' : 'register-mode'}`}>
      <div className="auth-card">
        {/* Painel da imagem (muda de lado com a transição) */}
        <div className="auth-panel image-panel">
          <div className="panel-content">
            <h2>{isLogin ? "Novo por aqui?" : "Bem-vindo de volta!"}</h2>
            <p>
              {isLogin 
                ? "Registre-se e descubra um mundo de conhecimento e aventuras literárias." 
                : "Entre com sua conta para continuar sua jornada literária."}
            </p>
            <button onClick={toggleMode} className="btn-toggle">
              {isLogin ? "Registrar" : "Entrar"}
            </button>
          </div>
        </div>

        {/* Painel do formulário (muda de lado com a transição) */}
        <div className="auth-panel form-panel">
          <div className="panel-content">
            {isLogin ? (
              // Formulário de Login
              <>
                <h2>Bem-vindo de volta</h2>
                <p className="auth-subtitle">Entre com sua conta para continuar</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email-login">Email</label>
                    <input 
                      id="email-login" 
                      type="email" 
                      placeholder="seu@email.com" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password-login">Senha</label>
                    <input 
                      id="password-login" 
                      type="password" 
                      placeholder="••••••••" 
                      required 
                    />
                  </div>
                  <div className="form-options">
                    <div className="remember-me">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Lembrar-me</label>
                    </div>
                    <a href="#" className="forgot-password">Esqueceu a senha?</a>
                  </div>
                  <button type="submit" className="btn-submit">Entrar</button>
                </form>
                <div className="social-login">
                  <p>Ou entre com</p>
                  <div className="social-buttons">
                    <button className="social-btn google">
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    </button>
                    <button className="social-btn facebook">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </button>
                    <button className="social-btn apple">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="toggle-mode-mobile">
                  Não tem uma conta? <button onClick={toggleMode}>Registre-se</button>
                </p>
              </>
            ) : (
              // Formulário de Registro
              <>
                <h2>Crie sua conta</h2>
                <p className="auth-subtitle">Junte-se à nossa comunidade de leitores</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name-register">Nome completo</label>
                    <input 
                      id="name-register" 
                      type="text" 
                      placeholder="Seu nome" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email-register">Email</label>
                    <input 
                      id="email-register" 
                      type="email" 
                      placeholder="seu@email.com" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password-register">Senha</label>
                    <input 
                      id="password-register" 
                      type="password" 
                      placeholder="••••••••" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirm-password">Confirmar senha</label>
                    <input 
                      id="confirm-password" 
                      type="password" 
                      placeholder="••••••••" 
                      required 
                    />
                  </div>
                  <div className="terms-checkbox">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms">
                      Eu concordo com os <a href="#">Termos de Serviço</a> e <a href="#">Política de Privacidade</a>
                    </label>
                  </div>
                  <button type="submit" className="btn-submit">Criar conta</button>
                </form>
                <p className="toggle-mode-mobile">
                  Já tem uma conta? <button onClick={toggleMode}>Entre</button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <Link to="/" className="home-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        Voltar para a página inicial
      </Link>
    </div>
  );
}

export default AuthPage;

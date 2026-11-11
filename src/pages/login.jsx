import React, { useState } from 'react';

export default function LoginPage() {
  // Estados para controlar os inputs e mensagens do formulário
  const [cpf, setCPF] = useState('');
  const [nome, setnome] = useState('');
  const [celular, setCelular] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Função disparada ao submeter o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setCelular

    // Validação simples no lado do cliente
    if(!cpf || !nome || !celular) {
      setError('Por favor, preencha todos os campos.');
      setIsLoading(false);
      return;
    }

    try {
      // Simulação de uma requisição de autenticação para uma API
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (cpf !== " "  && nome !== " " && celular!== " ") {
            resolve();
          } else {
            reject(new Error('cpf ou nome então vazios'));
          }
        }, 1500);
      });

      alert('Login realizado com sucesso!');
      // Aqui você pode redirecionar o usuário ou salvar o token no localStorage
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Estilos inline básicos para visualização imediata (pode ser substituído por CSS/Tailwind)
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    //   backgroundColor: '#f77700',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      with: "100%",
      backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyA3K_MH9FElS612ur3d3kPtb4VFiBLOJk5hMLe4FhAFpLBPWoqzvJmqoh&s=10")`,
      fontFamily: 'Arial, sans-serif'
    },
    card: {
      backgroundColor: 'rgb(255,255,255,0.7)',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
    },
    title: {
      textAlign: 'center',
      marginBottom: '24px',
      color: '#1f2937'
    },
    inputGroup: {
      marginBottom: '16px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#4b5563',
      fontSize: '14px'
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #d1d5db',
      fontSize: '16px',
      boxSizing: 'border-box'
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#f6923b',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '10px',
      transition: 'background-color 0.2s'
    },
    buttonDisabled: {
      backgroundColor: '#9ca3af',
      cursor: 'not-allowed'
    },
    error: {
      color: '#ef4444',
      fontSize: '14px',
      marginBottom: '16px',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>LOGIN</h2>
        
        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="CPF">CPF</label>
            <input
              id="CPF"
              type='CPF'
              placeholder="SEU CPF"
              value={cpf}
              onChange={(e) => setCPF (e.target.value)}
              style={styles.input}
              disabled={isLoading}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="nome">Senha</label>
            <input
              id="nome"
              type='nome'
              placeholder="NOME"
              value={nome}
              onChange={(e) => setnome(e.target.value)}
              style={styles.input}
              disabled={isLoading}
            />
          </div> 

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="celular">celular</label>
            <input
              id="celular"
              type='celular'
              placeholder="CELULAR"
              value={celular}
              onChange={(e) => setCelular (e.target.value)}
              style={styles.input}
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            style={{ ...styles.button, ...(isLoading ? styles.buttonDisabled : {}) }}
            disabled={isLoading}>

            {isLoading ? 'Carregando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}
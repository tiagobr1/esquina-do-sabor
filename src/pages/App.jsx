import React, { useState } from 'react';
import '../css/App.css';

// const restaurantes = [
//   { id: 1, nome: "McDonald's", categoria: 'Lanches', cor: '#db0007', sigla: 'M' },
//   { id: 2, nome: 'Coco Bambu', categoria: 'Frutos Do Mar', cor: '#4a2c18', sigla: 'CB' },
//   { id: 3, nome: 'China in Box', categoria: 'Chinesa', cor: '#d32f2f', sigla: 'CIB' },
//   { id: 4, nome: "Habib's", categoria: 'Lanches', cor: '#e53935', sigla: "H" },
// ];

// const mercados = [
//   { id: 1, nome: 'Dia Supermercado', cor: '#3be535', sigla: 'Dia' },
//   { id: 2, nome: 'Big', cor: '#1565c0', sigla: 'BIG' },
//   { id: 3, nome: 'Eataly', cor: '#2e7d32', sigla: 'Eataly' },
// ];

export default function Home() {
  const [endereco, setEndereco] = useState('');

  const handleBuscar = (e) => {
    e.preventDefault();
    alert(`Buscando lojas próximas a: ${endereco || 'Endereço não informado'}`);
  };

  return (
    <div className="ifood-container">
      {/* Cabeçalho */}
      <header className="ifood-header">
        <div className="header-left">
        <div className="logo">ESQUINA DO SABOR</div>
          <nav className="nav-links">
            <a href="#entregador">Entregador</a>
            <a href="#restaurante">Restaurante e Mercado</a>  
          </nav>
        </div>

        <div className="header-right">
          <button className="btn-criar-conta"> CARRINHO</button>
          <button className="btn-entrar">Entrar</button>
        </div>
      </header>

      {/* Seção Hero / Busca */}
      <section className="hero-section">
        <h1>Tudo pra facilitar seu dia a dia</h1>
        <p>O que você precisa está aqui. Peça e receba onde estiver.</p>

        <form className="search-bar" onSubmit={handleBuscar}>
          <div className="input-wrapper">
            <span className="pin-icon">📍</span>
            <input
              type="text"
              placeholder="Endereço de entrega e número"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-buscar">
            Buscar
          </button>
        </form>
      </section>

      {/* Cartões Principais */}
      <section className="main-cards">
        <div className="card-destaque card-restaurante">
          <div className="card-info">
            <h2>Restaurante</h2>
            <button className="btn-card">Ver opções &rsaquo;</button>
          </div>
          <div className="card-emoji">🍔</div>
        </div>

        <div className="card-destaque card-mercado">
          <div className="card-info">
            <h2>Mercado</h2>
            <button className="btn-card">Buscar lojas &rsaquo;</button>
          </div>
          <div className="card-emoji">🛒</div>
        </div>
      </section>

      
      <hr className="divider" />

      {/* Os melhores restaurantes */}
      {/* <section className="lojas-section">
        <h3>Os melhores restaurantes</h3>
        <div className="lojas-grid">
          {restaurantes.map((rest) => (
            <div key={rest.id} className="loja-card">
              <div className="loja-avatar" style={{ backgroundColor: rest.cor }}>
                {rest.sigla}
              </div>
              <div className="loja-detalhes">
                <strong>{rest.nome}</strong>
                <span>{rest.categoria}</span>
              </div>
              <span className="badge-verificado">✔</span>
            </div>
          ))}
        </div>
      </section> */}

      {/* Banners Promocionais */}
      <section className="promo-banners">
        <div className="promo-card promo-almoco">
          <div className="promo-texto">
            <span>ALMOÇO</span>
            <small>A PARTIR DE</small>
            <strong>R$ 10</strong>
          </div>
          <div className="faixa-gratis">ENTREGA GRÁTIS</div>
        </div>

        <div className="promo-card promo-desconto">
          <div className="promo-texto">
            <span>PRATOS COM ATÉ</span>
            <strong>70% OFF</strong>
          </div>
          <div className="faixa-gratis">ENTREGA GRÁTIS</div>
        </div>

        <div className="promo-card promo-super">
          <div className="promo-texto">
            <span>SUPER</span>
            <strong>RESTAURANTES</strong>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Os melhores mercados
      <section className="lojas-section">
        <h3>Os melhores mercados</h3>
        <div className="lojas-grid">
          {mercados.map((merc) => (
            <div key={merc.id} className="loja-card">
              <div className="loja-avatar" style={{ backgroundColor: merc.cor }}>
                {merc.sigla}
              </div>
              <div className="loja-detalhes">
                <strong>{merc.nome}</strong>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
import cuLogin from '../../assets/cu-login.jpg';

// Ilustração gerada a partir do SVG do portfólio original.
export function CoreUpMockup() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 600 440" preserveAspectRatio="xMidYMid slice">
      <defs>
      <radialGradient id="cg" cx=".5" cy="0" r=".8"><stop offset="0" stopColor="#7cc6a0" stopOpacity=".18"/><stop offset="1" stopColor="#7cc6a0" stopOpacity="0"/></radialGradient>
      <linearGradient id="cl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7cc6a0" stopOpacity=".35"/><stop offset="1" stopColor="#7cc6a0" stopOpacity="0"/></linearGradient>
      </defs>
      <rect width="600" height="440" fill="url(#cg)"/>
      {/* Celular 1: Início */}
      <g transform="translate(118 34) rotate(-4)">
      <rect width="190" height="388" rx="30" fill="#050605" stroke="#2a332e" strokeWidth="2"/>
      <rect x="8" y="8" width="174" height="372" rx="23" fill="#0b0d0c"/>
      <rect x="70" y="16" width="50" height="8" rx="4" fill="#050605"/>
      <g transform="translate(22 40)">
        <path d="M15.75 7.9a7.9 7.9 0 1 0 0 11.5" fill="none" stroke="#7cc6a0" strokeWidth="4.2" strokeLinecap="round" transform="scale(.9)"/>
        <circle cx="15" cy="12.2" r="2.1" fill="#7cc6a0"/>
        <text x="28" y="16" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="13" fill="#eef1ef">CoreUp</text>
      </g>
      <text x="22" y="86" fontFamily="Poppins, sans-serif" fontSize="8.5" fill="#7cc6a0">Treino de hoje · Peito e tríceps</text>
      <rect x="20" y="94" width="150" height="86" rx="14" fill="#121614" stroke="#1f2a24"/>
      <text x="32" y="116" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="12" fill="#eef1ef">Treino A</text>
      <text x="32" y="131" fontFamily="Poppins, sans-serif" fontSize="8" fill="#8a948e">6 exercícios · 50 min</text>
      <rect x="32" y="146" width="126" height="22" rx="11" fill="#7cc6a0"/>
      <text x="95" y="160.5" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="8.5" fill="#0a1a12">Começar treino</text>
      <g fontFamily="Poppins, sans-serif">
        <rect x="20" y="192" width="72" height="54" rx="12" fill="#121614" stroke="#1f2a24"/><text x="30" y="216" fontWeight="700" fontSize="16" fill="#eef1ef">4</text><text x="30" y="234" fontSize="7.5" fill="#8a948e">treinos/sem.</text>
        <rect x="98" y="192" width="72" height="54" rx="12" fill="#121614" stroke="#1f2a24"/><text x="108" y="216" fontWeight="700" fontSize="16" fill="#eef1ef">200</text><text x="108" y="234" fontSize="7.5" fill="#8a948e">exercícios</text>
        <rect x="20" y="252" width="72" height="54" rx="12" fill="#121614" stroke="#1f2a24"/><text x="30" y="276" fontWeight="700" fontSize="16" fill="#eef1ef">210</text><text x="30" y="294" fontSize="7.5" fill="#8a948e">min/semana</text>
        <rect x="98" y="252" width="72" height="54" rx="12" fill="#121614" stroke="#1f2a24"/><text x="108" y="276" fontWeight="700" fontSize="16" fill="#7cc6a0">7</text><text x="108" y="294" fontSize="7.5" fill="#8a948e">grupos</text>
      </g>
      <rect x="8" y="330" width="174" height="50" rx="0" fill="#0e1110"/>
      <g fill="#59625d"><rect x="24" y="344" width="14" height="14" rx="4" fill="#7cc6a0"/><rect x="56" y="344" width="14" height="14" rx="4"/><rect x="88" y="344" width="14" height="14" rx="4"/><rect x="120" y="344" width="14" height="14" rx="4"/><rect x="152" y="344" width="14" height="14" rx="4"/></g>
      </g>
      {/* Celular 2: tela real de login */}
      <g transform="translate(318 62) rotate(5)">
      <rect width="178" height="362" rx="28" fill="#050605" stroke="#2a332e" strokeWidth="2"/>
      <clipPath id="cuClip"><rect x="8" y="8" width="162" height="346" rx="21"/></clipPath>
      <image href={cuLogin} x="8" y="8" width="162" height="346" preserveAspectRatio="xMidYMid slice" clipPath="url(#cuClip)"/>
      <rect x="64" y="16" width="50" height="8" rx="4" fill="#050605"/>
      </g>
      </svg>
  );
}

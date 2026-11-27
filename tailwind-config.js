// Konfigurasi Tailwind (warna dan font identitas SMAIT SMART YBN)
// Harus dimuat SETELAH script Tailwind CDN di index.html
tailwind.config = { theme: { extend: {
  colors: { cream:'#F2EADF', sand:'#E8DBC9', terra:'#B3442A', teal:'#0F4A4F', gold:'#F2B01E' },
  fontFamily: { head:['"Bricolage Grotesque"','sans-serif'], body:['Figtree','sans-serif'] }
}}};
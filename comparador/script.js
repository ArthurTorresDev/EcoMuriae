// ==========================================
// 1. BASE DE DADOS: PEGADA ECOLÓGICA POR PAÍS (ISO-3)
// ==========================================
// BASE DE DADOS — Pegada Ecológica por País (ATUALIZADA)
// Fonte: Global Footprint Network via World Population Review
// Organizado por Rank Real (Maior Pegada = Rank 1)
// =========================================================================
const pegadaPorPais = {
  // ── RANK 1–10 ─────────────────────────────────────────────────────────────
  "QAT": { rank: 1,   pegada: 15.00, biocap: 1.00,  deficit: -14.00, nome: "Catar" },
  "LUX": { rank: 2,   pegada: 12.80, biocap: 1.30,  deficit: -11.50, nome: "Luxemburgo" },
  "SGP": { rank: 3,   pegada: 10.60, biocap: 0.03,  deficit: -10.57, nome: "Singapura" },
  "ARE": { rank: 4,   pegada: 9.20,  biocap: 0.60,  deficit: -8.60,  nome: "Emirados Árabes Unidos" },
  "EST": { rank: 4,   pegada: 9.00,  biocap: 9.90,  deficit: 0.90,   nome: "Estônia" },
  "MNG": { rank: 5,   pegada: 8.80,  biocap: 13.50, deficit: 4.70,   nome: "Mongólia" },
  "CAN": { rank: 6,   pegada: 8.40,  biocap: 14.40, deficit: 6.00,   nome: "Canadá" },
  "LVA": { rank: 7,   pegada: 8.10,  biocap: 9.30,  deficit: 1.20,   nome: "Letônia" },
  "USA": { rank: 8,   pegada: 7.90,  biocap: 3.80,  deficit: -4.10,  nome: "Estados Unidos" },
  "BHR": { rank: 9,   pegada: 7.70,  biocap: 0.50,  deficit: -7.20,  nome: "Bahrein" },

  // ── RANK 11–20 ────────────────────────────────────────────────────────────
  "DNK": { rank: 10,  pegada: 7.50,  biocap: 4.30,  deficit: -3.20,  nome: "Dinamarca" },
  "FLK": { rank: 10,  pegada: 7.50,  biocap: 70.00, deficit: 62.50,  nome: "Ilhas Malvinas" },
  "FRO": { rank: 11,  pegada: 7.50,  biocap: 12.00, deficit: 4.50,   nome: "Ilhas Faroé" },
  "KWT": { rank: 11,  pegada: 7.50,  biocap: 0.50,  deficit: -7.00,  nome: "Kuwait" },
  "AUS": { rank: 12,  pegada: 7.30,  biocap: 12.30, deficit: 5.00,   nome: "Austrália" },
  "GRL": { rank: 12,  pegada: 6.80,  biocap: 15.00, deficit: 8.20,   nome: "Groenlândia" },
  "LTU": { rank: 13,  pegada: 6.70,  biocap: 5.70,  deficit: -1.00,  nome: "Lituânia" },
  "FIN": { rank: 14,  pegada: 6.40,  biocap: 12.00, deficit: 5.60,   nome: "Finlândia" },
  "BHS": { rank: 15,  pegada: 6.40,  biocap: 8.60,  deficit: 2.20,   nome: "Bahamas" },
  "ISL": { rank: 15,  pegada: 6.40,  biocap: 14.50, deficit: 8.10,   nome: "Islândia" },

  // ── RANK 21–30 ────────────────────────────────────────────────────────────
  "SPM": { rank: 15,  pegada: 6.40,  biocap: 4.00,  deficit: -2.40,  nome: "São Pedro e Miquelão" },
  "AUT": { rank: 16,  pegada: 6.30,  biocap: 2.90,  deficit: -3.40,  nome: "Áustria" },
  "TKM": { rank: 17,  pegada: 6.20,  biocap: 2.30,  deficit: -3.90,  nome: "Turcomenistão" },
  "RUS": { rank: 18,  pegada: 6.10,  biocap: 7.50,  deficit: 1.40,   nome: "Rússia" },
  "SWE": { rank: 19,  pegada: 6.10,  biocap: 8.70,  deficit: 2.60,   nome: "Suécia" },
  "BEL": { rank: 20,  pegada: 6.00,  biocap: 1.00,  deficit: -5.00,  nome: "Bélgica" },
  "GIB": { rank: 20,  pegada: 6.00,  biocap: 0.01,  deficit: -5.99,  nome: "Gibraltar" },
  "OMN": { rank: 21,  pegada: 6.00,  biocap: 1.50,  deficit: -4.50,  nome: "Omã" },
  "CZE": { rank: 22,  pegada: 5.80,  biocap: 2.60,  deficit: -3.20,  nome: "Chéquia" },
  "HKG": { rank: 22,  pegada: 5.80,  biocap: 0.02,  deficit: -5.78,  nome: "Hong Kong" },

  // ── RANK 31–40 ────────────────────────────────────────────────────────────
  "ATG": { rank: 23,  pegada: 5.70,  biocap: 0.90,  deficit: -4.80,  nome: "Antígua e Barbuda" },
  "KOR": { rank: 24,  pegada: 5.60,  biocap: 0.60,  deficit: -5.00,  nome: "Coreia do Sul" },
  "SAU": { rank: 24,  pegada: 5.60,  biocap: 0.40,  deficit: -5.20,  nome: "Arábia Saudita" },
  "CYM": { rank: 25,  pegada: 5.60,  biocap: 0.20,  deficit: -5.40,  nome: "Ilhas Cayman" },
  "NZL": { rank: 25,  pegada: 5.60,  biocap: 8.50,  deficit: 2.90,   nome: "Nova Zelândia" },
  "PLW": { rank: 26,  pegada: 5.50,  biocap: 2.00,  deficit: -3.50,  nome: "Palau" },
  "SVN": { rank: 26,  pegada: 5.40,  biocap: 2.40,  deficit: -3.00,  nome: "Eslovênia" },
  "FRA": { rank: 27,  pegada: 5.10,  biocap: 2.60,  deficit: -2.50,  nome: "França" },
  "MLT": { rank: 28,  pegada: 5.10,  biocap: 0.40,  deficit: -4.70,  nome: "Malta" },
  "ISR": { rank: 29,  pegada: 5.00,  biocap: 0.20,  deficit: -4.80,  nome: "Israel" },

  // ── RANK 41–50 ────────────────────────────────────────────────────────────
  "KAZ": { rank: 28,  pegada: 4.90,  biocap: 3.20,  deficit: -1.70,  nome: "Cazaquistão" },
  "POL": { rank: 30,  pegada: 4.90,  biocap: 2.10,  deficit: -2.80,  nome: "Polônia" },
  "CYP": { rank: 31,  pegada: 4.80,  biocap: 0.40,  deficit: -4.40,  nome: "Chipre" },
  "BRB": { rank: 32,  pegada: 4.80,  biocap: 0.20,  deficit: -4.60,  nome: "Barbados" },
  "BMU": { rank: 33,  pegada: 4.70,  biocap: 0.10,  deficit: -4.60,  nome: "Bermudas" },
  "HRV": { rank: 33,  pegada: 4.70,  biocap: 2.60,  deficit: -2.10,  nome: "Croácia" },
  "MAC": { rank: 34,  pegada: 4.70,  biocap: 0.01,  deficit: -4.69,  nome: "Macau" },
  "PYF": { rank: 34,  pegada: 4.70,  biocap: 1.10,  deficit: -3.60,  nome: "Polinésia Francesa" },
  "DEU": { rank: 35,  pegada: 4.60,  biocap: 1.60,  deficit: -3.00,  nome: "Alemanha" },
  "GUM": { rank: 35,  pegada: 4.60,  biocap: 0.50,  deficit: -4.10,  nome: "Guam" },

  // ── RANK 51–60 ────────────────────────────────────────────────────────────
  "BLR": { rank: 36,  pegada: 4.60,  biocap: 3.30,  deficit: -1.30,  nome: "Belarus" },
  "BGR": { rank: 37,  pegada: 4.60,  biocap: 3.50,  deficit: -1.10,  nome: "Bulgária" },
  "PRI": { rank: 37,  pegada: 4.60,  biocap: 0.20,  deficit: -4.40,  nome: "Porto Rico" },
  "BIH": { rank: 38,  pegada: 4.60,  biocap: 2.50,  deficit: -2.10,  nome: "Bósnia e Herzegovina" },
  "KNA": { rank: 38,  pegada: 4.60,  biocap: 0.50,  deficit: -4.10,  nome: "São Cristóvão e Névis" },
  "ITA": { rank: 39,  pegada: 4.50,  biocap: 0.90,  deficit: -3.60,  nome: "Itália" },
  "CHE": { rank: 40,  pegada: 4.50,  biocap: 1.10,  deficit: -3.40,  nome: "Suíça" },
  "CUW": { rank: 40,  pegada: 4.50,  biocap: 0.10,  deficit: -4.40,  nome: "Curaçao" },
  "NOR": { rank: 41,  pegada: 4.50,  biocap: 6.90,  deficit: 2.40,   nome: "Noruega" },
  "SXM": { rank: 41,  pegada: 4.50,  biocap: 0.10,  deficit: -4.40,  nome: "São Martinho" },

  // ── RANK 61–70 ────────────────────────────────────────────────────────────
  "ABW": { rank: 42,  pegada: 4.50,  biocap: 0.10,  deficit: -4.40,  nome: "Aruba" },
  "IRL": { rank: 42,  pegada: 4.50,  biocap: 3.30,  deficit: -1.20,  nome: "Irlanda" },
  "AIA": { rank: 43,  pegada: 4.50,  biocap: 0.30,  deficit: -4.20,  nome: "Anguila" },
  "BTN": { rank: 43,  pegada: 4.50,  biocap: 4.90,  deficit: 0.40,   nome: "Butão" },
  "LIE": { rank: 44,  pegada: 4.50,  biocap: 0.70,  deficit: -3.80,  nome: "Liechtenstein" },
  "MNE": { rank: 44,  pegada: 4.50,  biocap: 2.70,  deficit: -1.80,  nome: "Montenegro" },
  "MCO": { rank: 45,  pegada: 4.50,  biocap: 0.01,  deficit: -4.49,  nome: "Mônaco" },
  "PRT": { rank: 45,  pegada: 4.40,  biocap: 1.50,  deficit: -2.90,  nome: "Portugal" },
  "SVK": { rank: 46,  pegada: 4.40,  biocap: 2.60,  deficit: -1.80,  nome: "Eslováquia" },
  "JPN": { rank: 47,  pegada: 4.30,  biocap: 0.60,  deficit: -3.70,  nome: "Japão" },

  // ── RANK 71–80 ────────────────────────────────────────────────────────────
  "MYS": { rank: 48,  pegada: 4.20,  biocap: 2.00,  deficit: -2.20,  nome: "Malásia" },
  "VGB": { rank: 48,  pegada: 4.20,  biocap: 0.40,  deficit: -3.80,  nome: "Ilhas Virgens Britânicas" },
  "VIR": { rank: 49,  pegada: 4.20,  biocap: 0.30,  deficit: -3.90,  nome: "Ilhas Virgens Americanas" },
  "SWZ": { rank: 49,  pegada: 4.20,  biocap: 0.90,  deficit: -3.30,  nome: "Eswatini" },
  "SRB": { rank: 50,  pegada: 4.10,  biocap: 1.80,  deficit: -2.30,  nome: "Sérvia" },
  "TCA": { rank: 50,  pegada: 4.10,  biocap: 0.50,  deficit: -3.60,  nome: "Ilhas Turks e Caicos" },
  "GBR": { rank: 51,  pegada: 4.00,  biocap: 1.10,  deficit: -2.90,  nome: "Reino Unido" },
  "NCL": { rank: 52,  pegada: 4.00,  biocap: 6.50,  deficit: 2.50,   nome: "Nova Caledônia" },
  "TTO": { rank: 52,  pegada: 4.00,  biocap: 1.40,  deficit: -2.60,  nome: "Trinidad e Tobago" },
  "CHL": { rank: 53,  pegada: 3.90,  biocap: 3.20,  deficit: -0.70,  nome: "Chile" },

  // ── RANK 81–90 ────────────────────────────────────────────────────────────
  "AND": { rank: 54,  pegada: 3.90,  biocap: 0.90,  deficit: -3.00,  nome: "Andorra" },
  "LCA": { rank: 54,  pegada: 3.90,  biocap: 0.40,  deficit: -3.50,  nome: "Santa Lúcia" },
  "GRC": { rank: 55,  pegada: 3.70,  biocap: 1.40,  deficit: -2.30,  nome: "Grécia" },
  "CHN": { rank: 56,  pegada: 3.60,  biocap: 0.70,  deficit: -2.90,  nome: "China" },
  "GLP": { rank: 56,  pegada: 3.60,  biocap: 0.50,  deficit: -3.10,  nome: "Guadalupe" },
  "ESP": { rank: 57,  pegada: 3.60,  biocap: 1.30,  deficit: -2.30,  nome: "Espanha" },
  "MTQ": { rank: 57,  pegada: 3.60,  biocap: 0.40,  deficit: -3.20,  nome: "Martinica" },
  "NLD": { rank: 58,  pegada: 3.60,  biocap: 0.90,  deficit: -2.70,  nome: "Países Baixos" },
  "LBY": { rank: 59,  pegada: 3.60,  biocap: 0.70,  deficit: -2.90,  nome: "Líbia" },
  "MSR": { rank: 60,  pegada: 3.60,  biocap: 0.50,  deficit: -3.10,  nome: "Montserrat" },

  // ── RANK 91–100 ───────────────────────────────────────────────────────────
  "SYC": { rank: 60,  pegada: 3.60,  biocap: 1.20,  deficit: -2.40,  nome: "Seychelles" },
  "TON": { rank: 60,  pegada: 3.60,  biocap: 1.40,  deficit: -2.20,  nome: "Tonga" },
  "IRN": { rank: 61,  pegada: 3.50,  biocap: 0.70,  deficit: -2.80,  nome: "Irã" },
  "TUR": { rank: 62,  pegada: 3.50,  biocap: 1.60,  deficit: -1.90,  nome: "Turquia" },
  "HUN": { rank: 63,  pegada: 3.50,  biocap: 2.00,  deficit: -1.50,  nome: "Hungria" },
  "MUS": { rank: 64,  pegada: 3.50,  biocap: 0.70,  deficit: -2.80,  nome: "Maurício" },
  "URY": { rank: 64,  pegada: 3.50,  biocap: 10.20, deficit: 6.70,   nome: "Uruguai" },
  "REU": { rank: 65,  pegada: 3.40,  biocap: 0.50,  deficit: -2.90,  nome: "Reunião" },
  "ROU": { rank: 65,  pegada: 3.40,  biocap: 2.60,  deficit: -0.80,  nome: "Romênia" },
  "ARG": { rank: 66,  pegada: 3.20,  biocap: 5.80,  deficit: 2.60,   nome: "Argentina" },

  // ── RANK 101–110 ──────────────────────────────────────────────────────────
  "UKR": { rank: 67,  pegada: 3.20,  biocap: 3.20,  deficit: 0.00,   nome: "Ucrânia" },
  "PAN": { rank: 68,  pegada: 3.20,  biocap: 2.60,  deficit: -0.60,  nome: "Panamá" },
  "GEO": { rank: 69,  pegada: 3.20,  biocap: 1.40,  deficit: -1.80,  nome: "Geórgia" },
  "NAM": { rank: 70,  pegada: 3.20,  biocap: 6.10,  deficit: 2.90,   nome: "Namíbia" },
  "MKD": { rank: 71,  pegada: 3.10,  biocap: 1.50,  deficit: -1.60,  nome: "Macedônia do Norte" },
  "SUR": { rank: 72,  pegada: 3.00,  biocap: 45.00, deficit: 42.00,  nome: "Suriname" },
  "ZAF": { rank: 72,  pegada: 3.00,  biocap: 1.20,  deficit: -1.80,  nome: "África do Sul" },
  "BRN": { rank: 73,  pegada: 3.00,  biocap: 1.60,  deficit: -1.40,  nome: "Brunei" },
  "BOL": { rank: 74,  pegada: 2.80,  biocap: 13.50, deficit: 10.70,  nome: "Bolívia" },
  "NRU": { rank: 74,  pegada: 2.80,  biocap: 0.20,  deficit: -2.60,  nome: "Nauru" },

  // ── RANK 111–120 ──────────────────────────────────────────────────────────
  "FJI": { rank: 75,  pegada: 2.80,  biocap: 2.40,  deficit: -0.40,  nome: "Fiji" },
  "MEX": { rank: 76,  pegada: 2.60,  biocap: 1.20,  deficit: -1.40,  nome: "México" },
  "VNM": { rank: 77,  pegada: 2.60,  biocap: 0.80,  deficit: -1.80,  nome: "Vietnã" },
  "MRT": { rank: 78,  pegada: 2.60,  biocap: 3.60,  deficit: 1.00,   nome: "Mauritânia" },
  "CRI": { rank: 79,  pegada: 2.60,  biocap: 1.50,  deficit: -1.10,  nome: "Costa Rica" },
  "ARM": { rank: 80,  pegada: 2.60,  biocap: 0.80,  deficit: -1.80,  nome: "Armênia" },
  "PER": { rank: 81,  pegada: 2.50,  biocap: 3.70,  deficit: 1.20,   nome: "Peru" },
  "DOM": { rank: 82,  pegada: 2.50,  biocap: 0.70,  deficit: -1.80,  nome: "República Dominicana" },
  "MDV": { rank: 82,  pegada: 2.50,  biocap: 0.10,  deficit: -2.40,  nome: "Maldivas" },
  "BRA": { rank: 83,  pegada: 2.40,  biocap: 8.10,  deficit: 5.70,   nome: "Brasil" },

  // ── RANK 121–130 ──────────────────────────────────────────────────────────
  "THA": { rank: 84,  pegada: 2.40,  biocap: 1.10,  deficit: -1.30,  nome: "Tailândia" },
  "GUF": { rank: 164, pegada: 2.40,  biocap: 100.0, deficit: 97.60,  nome: "Guiana Francesa" },
  "DZA": { rank: 85,  pegada: 2.40,  biocap: 0.60,  deficit: -1.80,  nome: "Argélia" },
  "LBN": { rank: 86,  pegada: 2.40,  biocap: 0.30,  deficit: -2.10,  nome: "Líbano" },
  "UZB": { rank: 87,  pegada: 2.30,  biocap: 0.80,  deficit: -1.50,  nome: "Uzbequistão" },
  "AZE": { rank: 88,  pegada: 2.30,  biocap: 0.90,  deficit: -1.40,  nome: "Azerbaijão" },
  "SLV": { rank: 89,  pegada: 2.30,  biocap: 0.50,  deficit: -1.80,  nome: "El Salvador" },
  "GAB": { rank: 90,  pegada: 2.30,  biocap: 17.20, deficit: 14.90,  nome: "Gabão" },
  "VCT": { rank: 90,  pegada: 2.30,  biocap: 0.60,  deficit: -1.70,  nome: "São Vicente e Granadinas" },
  "PRY": { rank: 91,  pegada: 2.20,  biocap: 8.20,  deficit: 6.00,   nome: "Paraguai" },

  // ── RANK 131–140 ──────────────────────────────────────────────────────────
  "ALB": { rank: 92,  pegada: 2.20,  biocap: 1.20,  deficit: -1.00,  nome: "Albânia" },
  "JOR": { rank: 92,  pegada: 2.20,  biocap: 0.20,  deficit: -2.00,  nome: "Jordânia" },
  "BWA": { rank: 93,  pegada: 2.20,  biocap: 2.80,  deficit: 0.60,   nome: "Botsuana" },
  "IRQ": { rank: 94,  pegada: 2.10,  biocap: 0.30,  deficit: -1.80,  nome: "Iraque" },
  "GHA": { rank: 95,  pegada: 2.10,  biocap: 1.10,  deficit: -1.00,  nome: "Gana" },
  "GTM": { rank: 96,  pegada: 2.10,  biocap: 0.90,  deficit: -1.20,  nome: "Guatemala" },
  "COL": { rank: 97,  pegada: 2.00,  biocap: 3.30,  deficit: 1.30,   nome: "Colômbia" },
  "VEN": { rank: 98,  pegada: 2.00,  biocap: 3.00,  deficit: 1.00,   nome: "Venezuela" },
  "WLF": { rank: 99,  pegada: 2.00,  biocap: 1.20,  deficit: -0.80,  nome: "Wallis e Futuna" },
  "WSM": { rank: 99,  pegada: 2.00,  biocap: 1.30,  deficit: -0.70,  nome: "Samoa" },

  // ── RANK 141–150 ──────────────────────────────────────────────────────────
  "DMA": { rank: 100, pegada: 1.90,  biocap: 1.00,  deficit: -0.90,  nome: "Dominica" },
  "ECU": { rank: 100, pegada: 1.90,  biocap: 1.90,  deficit: 0.00,   nome: "Equador" },
  "SHN": { rank: 100, pegada: 1.90,  biocap: 1.50,  deficit: -0.40,  nome: "Santa Helena" },
  "TUN": { rank: 101, pegada: 1.90,  biocap: 0.80,  deficit: -1.10,  nome: "Tunísia" },
  "JAM": { rank: 102, pegada: 1.90,  biocap: 0.40,  deficit: -1.50,  nome: "Jamaica" },
  "KGZ": { rank: 102, pegada: 1.90,  biocap: 1.20,  deficit: -0.70,  nome: "Quirguistão" },
  "IDN": { rank: 103, pegada: 1.80,  biocap: 1.20,  deficit: -0.60,  nome: "Indonésia" },
  "BLZ": { rank: 104, pegada: 1.80,  biocap: 3.20,  deficit: 1.40,   nome: "Belize" },
  "MAR": { rank: 104, pegada: 1.80,  biocap: 0.60,  deficit: -1.20,  nome: "Marrocos" },
  "MDA": { rank: 105, pegada: 1.80,  biocap: 0.70,  deficit: -1.10,  nome: "Moldávia" },

  // ── RANK 151–160 ──────────────────────────────────────────────────────────
  "NIC": { rank: 105, pegada: 1.80,  biocap: 2.30,  deficit: 0.50,   nome: "Nicarágua" },
  "GUY": { rank: 162, pegada: 1.70,  biocap: 24.10, deficit: 22.40,  nome: "Guiana" },
  "GIN": { rank: 163, pegada: 1.70,  biocap: 23.30, deficit: 21.60,  nome: "Guiné" },
  "KHM": { rank: 106, pegada: 1.70,  biocap: 1.10,  deficit: -0.60,  nome: "Camboja" },
  "HND": { rank: 107, pegada: 1.70,  biocap: 1.60,  deficit: -0.10,  nome: "Honduras" },
  "CUB": { rank: 108, pegada: 1.70,  biocap: 1.10,  deficit: -0.60,  nome: "Cuba" },
  "GNQ": { rank: 109, pegada: 1.70,  biocap: 4.70,  deficit: 3.00,   nome: "Guiné Equatorial" },
  "CPV": { rank: 110, pegada: 1.70,  biocap: 0.40,  deficit: -1.30,  nome: "Cabo Verde" },
  "FSM": { rank: 110, pegada: 1.70,  biocap: 1.10,  deficit: -0.60,  nome: "Micronésia" },
  "MHL": { rank: 111, pegada: 1.60,  biocap: 0.50,  deficit: -1.10,  nome: "Ilhas Marshall" },

  // ── RANK 161–170 ──────────────────────────────────────────────────────────
  "SDN": { rank: 111, pegada: 1.60,  biocap: 1.60,  deficit: 0.00,   nome: "Sudão" },
  "LAO": { rank: 112, pegada: 1.60,  biocap: 1.40,  deficit: -0.20,  nome: "Laos" },
  "SEN": { rank: 112, pegada: 1.60,  biocap: 1.00,  deficit: -0.60,  nome: "Senegal" },
  "SSD": { rank: 113, pegada: 1.60,  biocap: 1.80,  deficit: 0.20,   nome: "Sudão do Sul" },
  "EGY": { rank: 114, pegada: 1.40,  biocap: 0.20,  deficit: -1.20,  nome: "Egito" },
  "SYR": { rank: 114, pegada: 1.40,  biocap: 0.40,  deficit: -1.00,  nome: "Síria" },
  "NER": { rank: 115, pegada: 1.40,  biocap: 1.00,  deficit: -0.40,  nome: "Níger" },
  "TCD": { rank: 116, pegada: 1.40,  biocap: 1.40,  deficit: 0.00,   nome: "Chade" },
  "CAF": { rank: 117, pegada: 1.40,  biocap: 6.80,  deficit: 5.40,   nome: "República Centro-Africana" },
  "VUT": { rank: 117, pegada: 1.40,  biocap: 3.20,  deficit: 1.80,   nome: "Vanuatu" },

  // ── RANK 171–180 ──────────────────────────────────────────────────────────
  "DJI": { rank: 118, pegada: 1.30,  biocap: 0.50,  deficit: -0.80,  nome: "Djibuti" },
  "PHL": { rank: 118, pegada: 1.30,  biocap: 0.40,  deficit: -0.90,  nome: "Filipinas" },
  "MLI": { rank: 119, pegada: 1.30,  biocap: 1.50,  deficit: 0.20,   nome: "Mali" },
  "ZMB": { rank: 120, pegada: 1.30,  biocap: 1.60,  deficit: 0.30,   nome: "Zâmbia" },
  "PSE": { rank: 121, pegada: 1.30,  biocap: 0.10,  deficit: -1.20,  nome: "Palestina" },
  "TUV": { rank: 122, pegada: 1.30,  biocap: 0.60,  deficit: -0.70,  nome: "Tuvalu" },
  "CIV": { rank: 122, pegada: 1.20,  biocap: 1.30,  deficit: 0.10,   nome: "Costa do Marfim" },
  "PRK": { rank: 123, pegada: 1.20,  biocap: 0.50,  deficit: -0.70,  nome: "Coreia do Norte" },
  "LKA": { rank: 124, pegada: 1.20,  biocap: 0.40,  deficit: -0.80,  nome: "Sri Lanka" },
  "ZWE": { rank: 125, pegada: 1.20,  biocap: 0.60,  deficit: -0.60,  nome: "Zimbábue" },

  // ── RANK 181–194 ──────────────────────────────────────────────────────────
  "BEN": { rank: 126, pegada: 1.20,  biocap: 0.60,  deficit: -0.60,  nome: "Benim" },
  "TJK": { rank: 127, pegada: 1.20,  biocap: 0.50,  deficit: -0.70,  nome: "Tajiquistão" },
  "PNG": { rank: 128, pegada: 1.20,  biocap: 2.90,  deficit: 1.70,   nome: "Papua-Nova Guiné" },
  "COG": { rank: 129, pegada: 1.20,  biocap: 7.90,  deficit: 6.70,   nome: "República do Congo" },
  "LBR": { rank: 130, pegada: 1.20,  biocap: 2.80,  deficit: 1.60,   nome: "Libéria" },
  "MYT": { rank: 130, pegada: 1.20,  biocap: 0.30,  deficit: -0.90,  nome: "Mayotte" },
  "LSO": { rank: 131, pegada: 1.20,  biocap: 0.80,  deficit: -0.40,  nome: "Lesoto" },
  "STP": { rank: 132, pegada: 1.20,  biocap: 0.70,  deficit: -0.50,  nome: "São Tomé e Príncipe" },
  "IND": { rank: 133, pegada: 1.10,  biocap: 0.40,  deficit: -0.70,  nome: "Índia" },
  "MMR": { rank: 134, pegada: 1.10,  biocap: 1.40,  deficit: 0.30,   nome: "Myanmar" },
  "UGA": { rank: 135, pegada: 1.10,  biocap: 0.50,  deficit: -0.60,  nome: "Uganda" },
  "CMR": { rank: 136, pegada: 1.10,  biocap: 1.50,  deficit: 0.40,   nome: "Camarões" },
  "BFA": { rank: 137, pegada: 1.10,  biocap: 0.70,  deficit: -0.40,  nome: "Burkina Faso" },
  "TGO": { rank: 138, pegada: 1.10,  biocap: 0.60,  deficit: -0.50,  nome: "Togo" },
  "GNB": { rank: 139, pegada: 1.10,  biocap: 2.20,  deficit: 1.10,   nome: "Guiné-Bissau" },
  "KIR": { rank: 140, pegada: 1.00,  biocap: 1.20,  deficit: 0.20,   nome: "Kiribati" },
  "TZA": { rank: 140, pegada: 1.00,  biocap: 0.80,  deficit: -0.20,  nome: "Tanzânia" },
  "SLE": { rank: 141, pegada: 1.00,  biocap: 0.90,  deficit: -0.10,  nome: "Serra Leoa" },
  "ETH": { rank: 142, pegada: 0.90,  biocap: 0.50,  deficit: -0.40,  nome: "Etiópia" },
  "KEN": { rank: 143, pegada: 0.90,  biocap: 0.40,  deficit: -0.50,  nome: "Quênia" },
  "MDG": { rank: 144, pegada: 0.90,  biocap: 2.00,  deficit: 1.10,   nome: "Madagascar" },
  "NPL": { rank: 145, pegada: 0.90,  biocap: 0.30,  deficit: -0.60,  nome: "Nepal" },
  "SOM": { rank: 146, pegada: 0.90, biocap: 0.70, deficit: -0.20, nome: "Somália" },
  "SOL": { rank: 146, pegada: 0.90, biocap: 0.70, deficit: -0.20, nome: "Somalilândia" },
  "GMB": { rank: 147, pegada: 0.90,  biocap: 0.50,  deficit: -0.40,  nome: "Gâmbia" },
  "TLS": { rank: 148, pegada: 0.90,  biocap: 1.60,  deficit: 0.70,   nome: "Timor-Leste" },
  "PAK": { rank: 149, pegada: 0.80,  biocap: 0.30,  deficit: -0.50,  nome: "Paquistão" },
  "COM": { rank: 150, pegada: 0.80,  biocap: 0.30,  deficit: -0.50,  nome: "Comores" },
  "NGA": { rank: 150, pegada: 0.80,  biocap: 0.40,  deficit: -0.40,  nome: "Nigéria" },
  "BGD": { rank: 151, pegada: 0.80,  biocap: 0.20,  deficit: -0.60,  nome: "Bangladesh" },
  "AFG": { rank: 152, pegada: 0.80,  biocap: 0.50,  deficit: -0.30,  nome: "Afeganistão" },
  "AGO": { rank: 153, pegada: 0.80,  biocap: 1.40,  deficit: 0.60,   nome: "Angola" },
  "MOZ": { rank: 154, pegada: 0.80,  biocap: 1.40,  deficit: 0.60,   nome: "Moçambique" },
  "COD": { rank: 155, pegada: 0.70,  biocap: 1.90,  deficit: 1.20,   nome: "RD Congo" },
  "MWI": { rank: 156, pegada: 0.70,  biocap: 0.60,  deficit: -0.10,  nome: "Malaui" },
  "RWA": { rank: 157, pegada: 0.70,  biocap: 0.30,  deficit: -0.40,  nome: "Ruanda" },
  "ERI": { rank: 158, pegada: 0.70,  biocap: 1.90,  deficit: 1.20,   nome: "Eritreia" },
  "YEM": { rank: 159, pegada: 0.60,  biocap: 0.40,  deficit: -0.20,  nome: "Iêmen" },
  "BDI": { rank: 160, pegada: 0.60,  biocap: 0.30,  deficit: -0.30,  nome: "Burundi" },
  "HTI": { rank: 161, pegada: 0.50,  biocap: 0.20,  deficit: -0.30,  nome: "Haiti" }
};
let hoveredPolygon = null;
let featurresCarregadas = []; // Guarda as geometrias para a busca global

// ==========================================
// 2. FUNÇÃO EXTRATORA DE ISO (CORREÇÃO DO BUG)
// ==========================================
function obterCodigoISO(feat) {
  if (!feat || !feat.properties) return null;
  const p = feat.properties;
  const candidatos = [p.ISO_A3_EH, p.ISO_A3, p.ADM0_A3, p.SOV_A3];
  
  for (let c of candidatos) {
    if (c && c !== "-99" && c !== -99 && c !== "99") {
      return c.toUpperCase();
    }
  }
  return null;
}

// ==========================================
// 3. INICIALIZAÇÃO DO GLOBO 3D
// ==========================================
const meuGlobo = Globe()
  (document.getElementById('lista-paises').parentElement.querySelector('#globo') || document.getElementById('id-da-sua-div-do-planeta')) 
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
  .backgroundImageUrl(null)
  .showAtmosphere(true);

meuGlobo
  .polygonAltitude(feat => feat === hoveredPolygon ? 0.06 : 0.01)
  .polygonCapColor(feat => obterCorPais(feat, feat === hoveredPolygon))
  .polygonSideColor(() => 'rgba(0, 100, 150, 0.15)')
  .polygonStrokeColor(() => '#ffffff')
  .polygonLabel(feat => obterCardHTML(feat))
  .onPolygonHover(feat => {
    hoveredPolygon = feat;
    meuGlobo
      .polygonAltitude(f => f === feat ? 0.06 : 0.01)
      .polygonCapColor(f => obterCorPais(f, f === feat));
  });

meuGlobo.controls().autoRotate = false;
meuGlobo.controls().enableZoom = true;

// ==========================================
// 4. CARREGAMENTO DOS MAPAS (GEOJSON)
// ==========================================
fetch('https://cdn.jsdelivr.net/npm/ne-110m-admin-0-countries@3/data/countries.geojson')
  .then(res => res.json())
  .then(geojson => {
    featurresCarregadas = geojson.features;
    meuGlobo.polygonsData(geojson.features);
    inicializarListaRanking(geojson.features); 
  })
  .catch(() => {
    fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(geojson => {
        featurresCarregadas = geojson.features;
        meuGlobo.polygonsData(geojson.features);
        inicializarListaRanking(geojson.features);
      });
  });

// ==========================================
// 5. FUNÇÕES DE SUPORTE
// ==========================================
function obterCorPais(feat, isHovered) {
  if (isHovered) return '#00ff00'; 
  
  const codigoIso = obterCodigoISO(feat);
  const dados = pegadaPorPais[codigoIso];
  
  if (!dados) return '#7a7a7a'; 
  
  const pegada = dados.pegada;
  if (pegada > 8) return '#dc2626';   
  if (pegada > 5) return '#ea580c';   
  if (pegada > 2.7) return '#eab308'; 
  return '#16a34a';                   
}

function obterCardHTML(feat) {
  if (!feat || !feat.properties) return '';
  
  const codigoIso = obterCodigoISO(feat);
  const dados = pegadaPorPais[codigoIso];
  const nomeLocal = feat.properties.NAME || feat.properties.NAME_SORT || "Território";
  
  if (!dados) {
    return `
      <div style="background: rgba(0,0,0,0.85); color: #fff; padding: 10px; border-radius: 8px; font-family: sans-serif;">
        <b style="font-size:14px;">${nomeLocal}</b><br/>
        <span style="color: #aaa; font-size: 11px;">ISO detectado: ${codigoIso || 'N/A'}</span><br/>
        <hr style="border:0; border-top:1px solid #444; margin: 5px 0;"/>
        <span style="color:#eab308;">Dados Indisponíveis</span>
      </div>
    `;
  }
  
  const exibicaoNome = dados.nome.toLowerCase() === nomeLocal.toLowerCase() ? dados.nome : `${nomeLocal} (${dados.nome})`;

  return `
    <div style="background: rgba(255,255,255,0.95); color: #111; padding: 12px; border-radius: 8px; font-family: sans-serif; box-shadow: 0 4px 15px rgba(0,0,0,0.3); border-left: 5px solid ${dados.pegada > 5 ? '#dc2626' : '#16a34a'}; min-width: 180px;">
      <span style="float: right; background: #333; color: #fff; padding: 2px 6px; font-size: 11px; border-radius: 4px; font-weight: bold;">
        Rank #${dados.rank}
      </span>
      <b style="font-size: 14px; color: #000; display: block; margin-bottom: 2px;">${exibicaoNome}</b>
      <span style="color: #666; font-size: 11px; display:block; margin-bottom: 8px;">Código ISO Utilizado: ${codigoIso}</span>
      
      <div style="font-size: 12px; line-height: 1.6;">
        <b>👣 Pegada:</b> <span style="font-weight:bold; color:#be123c;">${dados.pegada} gha</span>/pess<br/>
        <b>🌱 Biocapacidade:</b> <span style="font-weight:bold; color:#15803d;">${dados.biocap} gha</span>/pess<br/>
        <b>📉 Défice:</b> <span style="font-weight:bold; color:${dados.deficit < 0 ? '#b91c1c' : '#166534'};">${dados.deficit} gha</span>
      </div>
    </div>
  `;
}

function obterCentroPoligono(feature) {
  const coords = feature.geometry.type === 'Polygon' 
    ? feature.geometry.coordinates[0] 
    : feature.geometry.coordinates[0][0];
  
  let totalLng = 0, totalLat = 0;
  coords.forEach(coord => {
    totalLng += coord[0];
    totalLat += coord[1];
  });
  
  return {
    lng: totalLng / coords.length,
    lat: totalLat / coords.length
  };
}

// Função global para poder disparar o foco via cliques em IDs string de outros métodos
window.focarPais = function(codigoIso) {
  if (!featurresCarregadas) return;
  const feat = featurresCarregadas.find(f => obterCodigoISO(f) === codigoIso);
  if (feat) {
    const centro = obterCentroPoligono(feat);
    meuGlobo.pointOfView({ lat: centro.lat, lng: centro.lng, alt: 0.4 }, 2000);
    hoveredPolygon = feat;
    meuGlobo.polygonCapColor(f => obterCorPais(f, f === feat));
    setTimeout(() => {
      if (hoveredPolygon === feat) {
        hoveredPolygon = null;
        meuGlobo.polygonCapColor(f => obterCorPais(f, false));
      }
    }, 3000);
  }
}

// ==========================================
// 6. ADICIONAR SEU CARD DE COMPARAÇÃO DO QUIZ
// ==========================================
function injetarCardUsuarioNoPainel(containerLista) {
  const pegadaSalva = localStorage.getItem("pegadaUsuario");
  if (!pegadaSalva) return; // Se não fez o quiz, não renderiza o card especial

  const pegadaNum = parseFloat(pegadaSalva);

  // Calcula dinamicamente o Rank Simulado com base no seu objeto atualizado
  const listaUnica = Object.values(pegadaPorPais).sort((a, b) => b.pegada - a.pegada);
  let rankSimulado = 162; // Posição padrão caso seja menor que o último país

  for (let i = 0; i < listaUnica.length; i++) {
    if (pegadaNum >= listaUnica[i].pegada) {
      rankSimulado = listaUnica[i].rank;
      break;
    }
  }

  // Cria o bloco visual estilizado do Usuário
  const cardUsuario = document.createElement('div');
  cardUsuario.style.background = 'linear-gradient(135deg, #2563eb, #1d4ed8)';
  cardUsuario.style.padding = '12px';
  cardUsuario.style.marginBottom = '15px';
  cardUsuario.style.borderRadius = '8px';
  cardUsuario.style.boxShadow = '0 4px 10px rgba(37,99,235,0.3)';
  cardUsuario.style.color = '#ffffff';
  cardUsuario.style.fontFamily = 'sans-serif';

  cardUsuario.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 5px;">
      <b style="font-size:15px; text-transform:uppercase; letter-spacing:0.5px;">Sua Pegada Real</b>
      <span style="background:rgba(255,255,255,0.25); padding:2px 8px; border-radius:20px; font-size:11px; font-weight:bold;">
        Rank Simulado: ${rankSimulado}º
      </span>
    </div>
    <div style="font-size: 22px; font-weight: 800; margin-bottom: 3px;">
      ${pegadaNum.toFixed(2)} <span style="font-size:13px; font-weight:400;">gha/pess</span>
    </div>
    <p style="margin:0; font-size:11px; color:rgba(255,255,255,0.85); font-style:italic;">
      Se todas as pessoas consumissem igual a você, o seu rank global seria esse!
    </p>
  `;

  // Coloca no primeiríssimo lugar do container, antes de listar os países
  containerLista.prepend(cardUsuario);
}

// ==========================================
// 7. GERAR LISTA DE RANKING LATERAL COM SUPORTE AO CLICK
// ==========================================
function inicializarListaRanking(features) {
  const containerLista = document.getElementById('lista-paises');
  if (!containerLista) return;

  // Limpa o container para evitar execuções duplicadas
  containerLista.innerHTML = "";

  // 1. Injeta o card do Usuário no topo (se existir o dado no navegador)
  injetarCardUsuarioNoPainel(containerLista);

  // 2. Filtra registros duplicados (como Somália/Somalilândia) na listagem visual
  const vistos = new Set();
  const listaOrdenada = [];

  Object.keys(pegadaPorPais).forEach(iso => {
    const dados = pegadaPorPais[iso];
    if (!vistos.has(dados.nome)) {
      vistos.add(dados.nome);
      listaOrdenada.push({ iso, ...dados });
    }
  });

  // Ordena rigorosamente pelo Rank (1 ao último)
  listaOrdenada.sort((a, b) => a.rank - b.rank);

  // 3. Monta e insere as linhas dos países
  listaOrdenada.forEach(pais => {
    const featureCorrespondente = features.find(f => obterCodigoISO(f) === pais.iso);
    if (!featureCorrespondente) return;

    const item = document.createElement('div');
    
    // Mantendo os estilos flex e hover idênticos ao padrão do seu projeto
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.padding = "8px 10px";
    item.style.marginBottom = "4px";
    item.style.borderRadius = "6px";
    item.style.cursor = "pointer";
    item.style.fontSize = "14px";
    item.style.transition = "background 0.2s";
    item.className = "ranking-item"; 

    item.innerHTML = `
      <span style="font-weight: bold; color: #ef4444; min-width: 35px;">${pais.rank}º</span>
      <span style="flex: 1; color: #f1f5f9;">${pais.nome}</span>
      <span style="color: #94a3b8; font-size: 12px;">${pais.pegada.toFixed(2)} gha</span>
    `;

    // Evento de clique unificado: gira a câmera e aplica o destaque temporário
    item.addEventListener('click', () => {
      window.focarPais(pais.iso);
    });


    containerLista.appendChild(item);
  });
/**
 * Função para atualizar e mostrar o card de resultado do quiz
 * @param {number} pegadaCalculada - O valor final calculado pelo teu quiz (ex: 3.20)
 */
function exibirResultadoDoQuiz(pegadaCalculada) {
  // 1. Lógica para simular o Rank baseado no valor da pegada
  // Quanto maior a pegada, mais perto do 1º lugar (Catar - pior pegada) a pessoa fica.
  let rankSimulado = 150; // Padrão se for muito baixa
  
  if (pegadaCalculada > 12) {
    rankSimulado = 2; // Perto do Luxemburgo
  } else if (pegadaCalculada > 8) {
    rankSimulado = 5; 
  } else if (pegadaCalculada > 5) {
    rankSimulado = 20;
  } else if (pegadaCalculada > 4) {
    rankSimulado = 39; // O teu valor antigo agora só aparece se a pegada for realista!
  } else if (pegadaCalculada > 2.7) {
    rankSimulado = 75;
  } else {
    rankSimulado = 115; // Pegada ecológica baixa (boa)
  }

  // 2. Injeta os dados calculados dentro das tags do HTML
  document.getElementById('valor-pegada').innerText = pegadaCalculada.toFixed(2);
  document.getElementById('rank-simulado').innerText = rankSimulado;

  // 3. O TOGGLE: Faz o card azul aparecer magicamente na barra lateral
  const cardResultado = document.getElementById('card-resultado-quiz');
  if (cardResultado) {
    cardResultado.style.display = 'block';
    // Opcional: faz um efeito de scroll suave até ao card para o utilizador ver
    cardResultado.scrollIntoView({ behavior: 'smooth' });
  }
}
// Exemplo de teste: Se o utilizador fez o quiz e tirou 80 pontos, a função roda e mostra a div
// aoTerminarOQuiz(80);
// ==========================================================
// PONTE: CONECTA O QUIZ AO GLOBO
// ==========================================================
window.finalizarQuizEMostrarNota = function(pegadaCalculada) {
  // 1. Salva o resultado no navegador
  localStorage.setItem("pegadaUsuario", pegadaCalculada);

  // 2. Força a lista lateral a atualizar e mostrar o card azul na hora
  if (featurresCarregadas && featurresCarregadas.length > 0) {
    inicializarListaRanking(featurresCarregadas);
  } else {
    console.error("O mapa ainda não carregou totalmente.");
  }
};
}
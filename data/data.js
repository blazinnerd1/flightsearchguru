const regions = [
  'Europe',
  'South & South East Asia',
  'East Asia',
  'Central America',
  'Middle East',
  'South America',
  'Sub-Saharan Africa',
  'North Africa',
  'North America',
  'Oceania',
  'Caribbean',
  'North Asia',
];

const countries = [
  { name: 'Netherlands', region: 'Europe', id: 'NLD' }, { name: 'Sweden', region: 'Europe', id: 'SWE' }, { name: 'Switzerland', region: 'Europe', id: 'CHE' }, { name: 'Sri Lanka', region: 'South & South East Asia', id: 'LKA' }, { name: 'Denmark', region: 'Europe', id: 'DNK' }, { name: 'Japan', region: 'East Asia', id: 'JPN' }, { name: 'United Kingdom', region: 'Europe', id: 'GBR' }, { name: 'Mexico', region: 'Central America', id: 'MEX' }, { name: 'Oman', region: 'Middle East', id: 'OMN' }, { name: 'Uruguay', region: 'South America', id: 'URY' }, { name: 'Norway', region: 'Europe', id: 'NOR' }, { name: 'Liechtenstein', region: 'Europe', id: 'LIE' }, { name: 'Namibia', region: 'Sub-Saharan Africa', id: 'NAM' }, { name: 'Slovakia', region: 'Europe', id: 'SVK' }, { name: "Cote d'Ivoire", region: 'Sub-Saharan Africa', id: 'CIV' }, { name: 'Nigeria', region: 'Sub-Saharan Africa', id: 'NGA' }, { name: 'Ghana', region: 'Sub-Saharan Africa', id: 'GHA' }, { name: 'Ethiopia', region: 'Sub-Saharan Africa', id: 'ETH' }, { name: 'Greece', region: 'Europe', id: 'GRC' }, { name: 'Algeria', region: 'North Africa', id: 'DZA' }, { name: 'Jordan', region: 'Middle East', id: 'JOR' }, { name: 'Samoa', region: 'Oceania', id: 'WSM' }, { name: 'Turkmenistan', region: 'Middle East', id: 'TKM' }, { name: 'Eritrea', region: 'Sub-Saharan Africa', id: 'ERI' }, { name: 'Paraguay', region: 'South America', id: 'PRY' }, { name: 'United Arab Emirates', region: 'Middle East', id: 'ARE' }, { name: 'Bahrain', region: 'Middle East', id: 'BHR' }, { name: 'Argentina', region: 'South America', id: 'ARG' }, { name: 'Belize', region: 'Central America', id: 'BLZ' }, { name: 'Serbia', region: 'Europe', id: 'SRB' }, { name: 'Lebanon', region: 'Middle East', id: 'LBN' }, { name: 'Central African Republic', region: 'Sub-Saharan Africa', id: 'CAF' }, { name: 'Barbados', region: 'Caribbean', id: 'BRB' }, { name: 'Iraq', region: 'Middle East', id: 'IRQ' }, { name: 'The Gambia', region: 'Sub-Saharan Africa', id: 'GMB' }, { name: 'Burundi', region: 'Sub-Saharan Africa', id: 'BDI' }, { name: 'Fiji', region: 'Oceania', id: 'FJI' }, { name: 'Mali', region: 'Sub-Saharan Africa', id: 'MLI' }, { name: 'Germany', region: 'Europe', id: 'DEU' }, { name: 'Colombia', region: 'South America', id: 'COL' }, { name: 'Benin', region: 'Sub-Saharan Africa', id: 'BEN' }, { name: 'Brazil', region: 'South America', id: 'BRA' }, { name: 'Hungary', region: 'Europe', id: 'HUN' }, { name: 'Brunei', region: 'South & South East Asia', id: 'BRN' }, { name: 'Congo, Republic of the', region: 'Sub-Saharan Africa', id: 'COG' }, { name: 'Egypt', region: 'North Africa', id: 'EGY' }, { name: 'Australia', region: 'Oceania', id: 'AUS' }, { name: 'Venezuela', region: 'South America', id: 'VEN' }, { name: 'Indonesia', region: 'South & South East Asia', id: 'IDN' }, { name: 'Vatican City', region: 'Europe', id: 'VAT' }, { name: 'Guinea', region: 'Sub-Saharan Africa', id: 'GIN' }, { name: 'South Africa', region: 'Sub-Saharan Africa', id: 'ZAF' }, { name: 'Belgium', region: 'Europe', id: 'BEL' }, { name: 'Seychelles', region: 'Sub-Saharan Africa', id: 'SYC' }, { name: 'Bangladesh', region: 'South & South East Asia', id: 'BGD' }, { name: 'Syria', region: 'Middle East', id: 'SYR' }, { name: 'Tanzania', region: 'Sub-Saharan Africa', id: 'TZA' }, { name: 'India', region: 'South & South East Asia', id: 'IND' }, { name: 'East Timor', region: 'South & South East Asia', id: 'TLS' }, { name: 'Senegal', region: 'Sub-Saharan Africa', id: 'SEN' }, { name: 'Thailand', region: 'South & South East Asia', id: 'THA' }, { name: 'Qatar', region: 'Middle East', id: 'QAT' }, { name: 'Ireland', region: 'Europe', id: 'IRL' }, { name: 'Tajikistan', region: 'Middle East', id: 'TJK' }, { name: 'Uganda', region: 'Sub-Saharan Africa', id: 'UGA' }, { name: 'Turkey', region: 'Middle East', id: 'TUR' }, { name: 'Armenia', region: 'Middle East', id: 'ARM' }, { name: 'Congo, Democratic Republic of the', region: 'Sub-Saharan Africa', id: 'COD' }, { name: 'Sierra Leone', region: 'Sub-Saharan Africa', id: 'SLE' }, { name: 'Korea, North', region: 'East Asia', id: 'PRK' }, { name: 'Kyrgyzstan', region: 'Middle East', id: 'KGZ' }, { name: 'Tuvalu', region: 'Oceania', id: 'TUV' }, { name: 'Botswana', region: 'Sub-Saharan Africa', id: 'BWA' }, { name: 'Guyana', region: 'South America', id: 'GUY' }, { name: 'Guatemala', region: 'Central America', id: 'GTM' }, { name: 'Vietnam', region: 'South & South East Asia', id: 'VNM' }, { name: 'Cuba', region: 'Caribbean', id: 'CUB' }, { name: 'Finland', region: 'Europe', id: 'FIN' }, { name: 'Solomon Islands', region: 'Oceania', id: 'SLB' }, { name: 'Zimbabwe', region: 'Sub-Saharan Africa', id: 'ZWE' }, { name: 'United States of America', region: 'North America', id: 'USA' }, { name: 'Korea, South', region: 'East Asia', id: 'KOR' }, { name: 'Ukraine', region: 'North Asia', id: 'UKR' }, { name: 'Nauru', region: 'Oceania', id: 'NRU' }, { name: 'Pakistan', region: 'Middle East', id: 'PAK' }, { name: 'Azerbaijan', region: 'Middle East', id: 'AZE' }, { name: 'Vanuatu', region: 'Oceania', id: 'VUT' }, { name: 'Djibouti', region: 'Sub-Saharan Africa', id: 'DJI' }, { name: 'South Sudan', region: 'Sub-Saharan Africa', id: 'SSD' }, { name: 'Afghanistan', region: 'Middle East', id: 'AFG' }, { name: 'Rwanda', region: 'Sub-Saharan Africa', id: 'RWA' }, { name: 'Moldova', region: 'North Asia', id: 'MDA' }, { name: 'Sudan', region: 'Sub-Saharan Africa', id: 'SDN' }, { name: 'Nepal', region: 'South & South East Asia', id: 'NPL' }, { name: 'Malaysia', region: 'South & South East Asia', id: 'MYS' }, { name: 'Kuwait', region: 'Middle East', id: 'KWT' }, { name: 'Angola', region: 'Sub-Saharan Africa', id: 'AGO' }, { name: 'Gabon', region: 'Sub-Saharan Africa', id: 'GAB' }, { name: 'Cyprus', region: 'Middle East', id: 'CYP' }, { name: 'Andorra', region: 'Europe', id: 'AND' }, { name: 'Togo', region: 'Sub-Saharan Africa', id: 'TGO' }, { name: 'Portugal', region: 'Europe', id: 'PRT' }, { name: 'Slovenia', region: 'Europe', id: 'SVN' }, { name: 'Peru', region: 'South America', id: 'PER' }, { name: 'Malawi', region: 'Sub-Saharan Africa', id: 'MWI' }, { name: 'Bolivia', region: 'South America', id: 'BOL' }, { name: 'Zambia', region: 'Sub-Saharan Africa', id: 'ZMB' }, { name: 'Luxembourg', region: 'Europe', id: 'LUX' }, { name: 'Spain', region: 'Europe', id: 'ESP' }, { name: 'Marshall Islands', region: 'Oceania', id: 'MHL' }, { name: 'Nicaragua', region: 'Central America', id: 'NIC' }, { name: 'Somalia', region: 'Sub-Saharan Africa', id: 'SOM' }, { name: 'Belarus', region: 'North Asia', id: 'BLR' }, { name: 'Malta', region: 'Europe', id: 'MLT' }, { name: 'Maldives', region: 'South & South East Asia', id: 'MDV' }, { name: 'Philippines', region: 'South & South East Asia', id: 'PHL' }, { name: 'Mozambique', region: 'Sub-Saharan Africa', id: 'MOZ' }, { name: 'Mauritius', region: 'Sub-Saharan Africa', id: 'MUS' }, { name: 'Lesotho', region: 'Sub-Saharan Africa', id: 'LSO' }, { name: 'Monaco', region: 'Europe', id: 'MCO' }, { name: 'Cape Verde', region: 'Sub-Saharan Africa', id: 'CPV' }, { name: 'The Bahamas', region: 'Caribbean', id: 'BHS' }, { name: 'Chad', region: 'Sub-Saharan Africa', id: 'TCD' }, { name: 'Niger', region: 'Sub-Saharan Africa', id: 'NER' }, { name: 'Mauritania', region: 'Sub-Saharan Africa', id: 'MRT' }, { name: 'Romania', region: 'Europe', id: 'ROU' }, { name: 'Burkina Faso', region: 'Sub-Saharan Africa', id: 'BFA' }, { name: 'Guinea-Bissau', region: 'Sub-Saharan Africa', id: 'GNB' }, { name: 'Haiti', region: 'Caribbean', id: 'HTI' }, { name: 'Bhutan', region: 'South & South East Asia', id: 'BTN' }, { name: 'Suriname', region: 'South America', id: 'SUR' }, { name: 'China', region: 'East Asia', id: 'CHN' }, { name: 'San Marino', region: 'Europe', id: 'SMR' }, { name: 'Cambodia', region: 'South & South East Asia', id: 'KHM' }, { name: 'Micronesia, Federated States of', region: 'Oceania', id: 'FSM' }, { name: 'Papua New Guinea', region: 'Oceania', id: 'PNG' }, { name: 'Trinidad and Tobago', region: 'Caribbean', id: 'TTO' }, { name: 'France', region: 'Europe', id: 'FRA' }, { name: 'Czech Republic', region: 'Europe', id: 'CZE' }, { name: 'Kosovo', region: 'Europe', id: 'XKX' }, { name: 'Panama', region: 'Central America', id: 'PAN' }, { name: 'Russia', region: 'North Asia', id: 'RUS' }, { name: 'Morocco', region: 'Europe', id: 'MAR' }, { name: 'Italy', region: 'Europe', id: 'ITA' }, { name: 'Myanmar', region: 'South & South East Asia', id: 'MMR' }, { name: 'Latvia', region: 'Europe', id: 'LVA' }, { name: 'Iceland', region: 'Europe', id: 'ISL' }, { name: 'Liberia', region: 'Sub-Saharan Africa', id: 'LBR' }, { name: 'Palau', region: 'Oceania', id: 'PLW' }, { name: 'Dominica', region: 'Caribbean', id: 'DMA' }, { name: 'Saudi Arabia', region: 'Middle East', id: 'SAU' }, { name: 'Yemen', region: 'Middle East', id: 'YEM' }, { name: 'Chile', region: 'South America', id: 'CHL' }, { name: 'Dominican Republic', region: 'Caribbean', id: 'DOM' }, { name: 'Grenada', region: 'Caribbean', id: 'GRD' }, { name: 'Swaziland', region: 'Sub-Saharan Africa', id: 'SWZ' }, { name: 'Singapore', region: 'South & South East Asia', id: 'SGP' }, { name: 'Costa Rica', region: 'Central America', id: 'CRI' }, { name: 'Bosnia and Herzegovina', region: 'Europe', id: 'BIH' }, { name: 'Saint Kitts and Nevis', region: 'Caribbean', id: 'KNA' }, { name: 'Macedonia', region: 'Europe', id: 'MKD' }, { name: 'Bulgaria', region: 'Europe', id: 'BGR' }, { name: 'Equatorial Guinea', region: 'Sub-Saharan Africa', id: 'GNQ' }, { name: 'Saint Vincent and the Grenadines', region: 'Caribbean', id: 'VCT' }, { name: 'Uzbekistan', region: 'Middle East', id: 'UZB' }, { name: 'Georgia', region: 'Middle East', id: 'GEO' }, { name: 'Tonga', region: 'Oceania', id: 'TON' }, { name: 'Montenegro', region: 'Europe', id: 'MNE' }, { name: 'Honduras', region: 'Central America', id: 'HND' }, { name: 'Iran', region: 'Middle East', id: 'IRN' }, { name: 'Albania', region: 'Europe', id: 'ALB' }, { name: 'Libya', region: 'North Africa', id: 'LBY' }, { name: 'Estonia', region: 'Europe', id: 'EST' }, { name: 'Israel', region: 'Middle East', id: 'ISR' }, { name: 'Sao Tome and Principe', region: 'Sub-Saharan Africa', id: 'STP' }, { name: 'Madagascar', region: 'Sub-Saharan Africa', id: 'MDG' }, { name: 'Kiribati', region: 'Oceania', id: 'KIR' }, { name: 'Taiwan', region: 'East Asia', id: 'TWN' }, { name: 'Kazakhstan', region: 'Middle East', id: 'KAZ' }, { name: 'Tunisia', region: 'North Africa', id: 'TUN' }, { name: 'Ecuador', region: 'South America', id: 'ECU' }, { name: 'Mongolia', region: 'East Asia', id: 'MNG' }, { name: 'Saint Lucia', region: 'Caribbean', id: 'LCA' }, { name: 'Austria', region: 'Europe', id: 'AUT' }, { name: 'Lithuania', region: 'Europe', id: 'LTU' }, { name: 'Laos', region: 'South & South East Asia', id: 'LAO' }, { name: 'Kenya', region: 'Sub-Saharan Africa', id: 'KEN' }, { name: 'New Zealand', region: 'Oceania', id: 'NZL' }, { name: 'Poland', region: 'Europe', id: 'POL' }, { name: 'Cameroon', region: 'Sub-Saharan Africa', id: 'CMR' }, { name: 'Jamaica', region: 'Caribbean', id: 'JAM' }, { name: 'Canada', region: 'North America', id: 'CAN' }, { name: 'Antigua and Barbuda', region: 'Caribbean', id: 'ATG' }, { name: 'Comoros', region: 'Sub-Saharan Africa', id: 'COM' }, { name: 'Croatia', region: 'Europe', id: 'HRV' }, { name: 'El Salvador', region: 'Central America', id: 'SLV' }];

const cities = [
  { name: 'Amsterdam', id_countries: 'NLD' }, { name: 'Stockholm', id_countries: 'SWE' }, { name: 'Bern', id_countries: 'CHE' }, { name: 'Colombo', id_countries: 'LKA' }, { name: 'Copenhagen', id_countries: 'DNK' }, { name: 'Tokyo', id_countries: 'JPN' }, { name: 'London', id_countries: 'GBR' }, { name: 'Mexico City', id_countries: 'MEX' }, { name: 'Muscat', id_countries: 'OMN' }, { name: 'Montevideo', id_countries: 'URY' }, { name: 'Oslo', id_countries: 'NOR' }, { name: 'Vaduz', id_countries: 'LIE' }, { name: 'Windhoek', id_countries: 'NAM' }, { name: 'Bratislava', id_countries: 'SVK' }, { name: 'Abidjan', id_countries: 'CIV' }, { name: 'Abuja', id_countries: 'NGA' }, { name: 'Accra', id_countries: 'GHA' }, { name: 'Addis Ababa', id_countries: 'ETH' }, { name: 'Athens', id_countries: 'GRC' }, { name: 'Algiers', id_countries: 'DZA' }, { name: 'Amman', id_countries: 'JOR' }, { name: 'Apia', id_countries: 'WSM' }, { name: 'Ashgabat', id_countries: 'TKM' }, { name: 'Asmara', id_countries: 'ERI' }, { name: 'Asuncion', id_countries: 'PRY' }, { name: 'Abu Dhabi', id_countries: 'ARE' }, { name: 'Manama', id_countries: 'BHR' }, { name: 'Buenos Aires', id_countries: 'ARG' }, { name: 'Belmopan', id_countries: 'BLZ' }, { name: 'Belgrade', id_countries: 'SRB' }, { name: 'Beirut', id_countries: 'LBN' }, { name: 'Bangui', id_countries: 'CAF' }, { name: 'Bridgetown', id_countries: 'BRB' }, { name: 'Baghdad', id_countries: 'IRQ' }, { name: 'Banjul', id_countries: 'GMB' }, { name: 'Bujumbura', id_countries: 'BDI' }, { name: 'Suva', id_countries: 'FJI' }, { name: 'Bamako', id_countries: 'MLI' }, { name: 'Berlin', id_countries: 'DEU' }, { name: 'Bogota', id_countries: 'COL' }, { name: 'Porto', id_countries: 'BEN' }, { name: 'Brasilia', id_countries: 'BRA' }, { name: 'Budapest', id_countries: 'HUN' }, { name: 'Bandar Seri Begawan', id_countries: 'BRN' }, { name: 'Brazzaville', id_countries: 'COG' }, { name: 'Cairo', id_countries: 'EGY' }, { name: 'Canberra', id_countries: 'AUS' }, { name: 'Caracas', id_countries: 'VEN' }, { name: 'Jakarta', id_countries: 'IDN' }, { name: 'Vatican City', id_countries: 'VAT' }, { name: 'Conakry', id_countries: 'GIN' }, { name: 'Cape Town', id_countries: 'ZAF' }, { name: 'Brussels', id_countries: 'BEL' }, { name: 'Victoria', id_countries: 'SYC' }, { name: 'Dhaka', id_countries: 'BGD' }, { name: 'Damascus', id_countries: 'SYR' }, { name: 'Dar es Salaam', id_countries: 'TZA' }, { name: 'New Delhi', id_countries: 'IND' }, { name: 'Dili', id_countries: 'TLS' }, { name: 'Dakar', id_countries: 'SEN' }, { name: 'Bangkok', id_countries: 'THA' }, { name: 'Doha', id_countries: 'QAT' }, { name: 'Dublin', id_countries: 'IRL' }, { name: 'Dushanbe', id_countries: 'TJK' }, { name: 'Kampala', id_countries: 'UGA' }, { name: 'Ankara', id_countries: 'TUR' }, { name: 'Yerevan', id_countries: 'ARM' }, { name: 'Kinshasa', id_countries: 'COD' }, { name: 'Freetown', id_countries: 'SLE' }, { name: 'Pyongyang', id_countries: 'PRK' }, { name: 'Bishkek', id_countries: 'KGZ' }, { name: 'Vaiaku village', id_countries: 'TUV' }, { name: 'Gaborone', id_countries: 'BWA' }, { name: 'Georgetown', id_countries: 'GUY' }, { name: 'Guatemala City', id_countries: 'GTM' }, { name: 'Hanoi', id_countries: 'VNM' }, { name: 'Havana', id_countries: 'CUB' }, { name: 'Helsinki', id_countries: 'FIN' }, { name: 'Honiara', id_countries: 'SLB' }, { name: 'Harare', id_countries: 'ZWE' }, { name: 'Washington D.C.', id_countries: 'USA' }, { name: 'Seoul', id_countries: 'KOR' }, { name: 'Kyiv', id_countries: 'UKR' }, { name: 'Yaren District', id_countries: 'NRU' }, { name: 'Islamabad', id_countries: 'PAK' }, { name: 'Baku', id_countries: 'AZE' }, { name: 'Port', id_countries: 'VUT' }, { name: 'Djibouti', id_countries: 'DJI' }, { name: 'Juba ', id_countries: 'SSD' }, { name: 'Kabul', id_countries: 'AFG' }, { name: 'Kigali', id_countries: 'RWA' }, { name: 'Chisinau', id_countries: 'MDA' }, { name: 'Khartoum', id_countries: 'SDN' }, { name: 'Kathmandu', id_countries: 'NPL' }, { name: 'Kuala Lumpur', id_countries: 'MYS' }, { name: 'Kuwait City', id_countries: 'KWT' }, { name: 'Luanda', id_countries: 'AGO' }, { name: 'Libreville', id_countries: 'GAB' }, { name: 'Nicosia', id_countries: 'CYP' }, { name: 'Andorra la Vella', id_countries: 'AND' }, { name: 'Lome', id_countries: 'TGO' }, { name: 'Lisbon', id_countries: 'PRT' }, { name: 'Ljubljana', id_countries: 'SVN' }, { name: 'Lima', id_countries: 'PER' }, { name: 'Lilongwe', id_countries: 'MWI' }, { name: 'La Paz', id_countries: 'BOL' }, { name: 'Lusaka', id_countries: 'ZMB' }, { name: 'Luxembourg', id_countries: 'LUX' }, { name: 'Madrid', id_countries: 'ESP' }, { name: 'Majuro', id_countries: 'MHL' }, { name: 'Managua', id_countries: 'NIC' }, { name: 'Mogadishu', id_countries: 'SOM' }, { name: 'Minsk', id_countries: 'BLR' }, { name: 'Valletta', id_countries: 'MLT' }, { name: 'Male', id_countries: 'MDV' }, { name: 'Manila', id_countries: 'PHL' }, { name: 'Maputo', id_countries: 'MOZ' }, { name: 'Port Louis', id_countries: 'MUS' }, { name: 'Maseru', id_countries: 'LSO' }, { name: 'Monaco', id_countries: 'MCO' }, { name: 'Praia', id_countries: 'CPV' }, { name: 'Nassau', id_countries: 'BHS' }, { name: "N'Djamena", id_countries: 'TCD' }, { name: 'Niamey', id_countries: 'NER' }, { name: 'Nouakchott', id_countries: 'MRT' }, { name: 'Bucharest', id_countries: 'ROU' }, { name: 'Ouagadougou', id_countries: 'BFA' }, { name: 'Bissau', id_countries: 'GNB' }, { name: 'Port-au-Prince', id_countries: 'HTI' }, { name: 'Thimphu', id_countries: 'BTN' }, { name: 'Paramaribo', id_countries: 'SUR' }, { name: 'Beijing', id_countries: 'CHN' }, { name: 'San Marino', id_countries: 'SMR' }, { name: 'Phnom Penh', id_countries: 'KHM' }, { name: 'Palikir', id_countries: 'FSM' }, { name: 'Port Moresby', id_countries: 'PNG' }, { name: 'Port Spain', id_countries: 'TTO' }, { name: 'Paris', id_countries: 'FRA' }, { name: 'Prague', id_countries: 'CZE' }, { name: 'Pristina', id_countries: 'XKX' }, { name: 'Panama City', id_countries: 'PAN' }, { name: 'Moscow', id_countries: 'RUS' }, { name: 'Rabat', id_countries: 'MAR' }, { name: 'Rome', id_countries: 'ITA' }, { name: 'Rangoon', id_countries: 'MMR' }, { name: 'Riga', id_countries: 'LVA' }, { name: 'Reykjavik', id_countries: 'ISL' }, { name: 'Monrovia', id_countries: 'LBR' }, { name: 'Melekeok', id_countries: 'PLW' }, { name: 'Roseau', id_countries: 'DMA' }, { name: 'Riyadh', id_countries: 'SAU' }, { name: 'Sanaa', id_countries: 'YEM' }, { name: 'Santiago', id_countries: 'CHL' }, { name: 'Santo Domingo', id_countries: 'DOM' }, { name: "Saint George's", id_countries: 'GRD' }, { name: 'Mbabane', id_countries: 'SWZ' }, { name: 'Singapore', id_countries: 'SGP' }, { name: 'San Jose', id_countries: 'CRI' }, { name: 'Sarajevo', id_countries: 'BIH' }, { name: 'Basseterre', id_countries: 'KNA' }, { name: 'Skopje', id_countries: 'MKD' }, { name: 'Sofia', id_countries: 'BGR' }, { name: 'Malabo', id_countries: 'GNQ' }, { name: 'Kingstown', id_countries: 'VCT' }, { name: 'Tashkent', id_countries: 'UZB' }, { name: 'Tbilisi', id_countries: 'GEO' }, { name: "Nuku'alofa", id_countries: 'TON' }, { name: 'Podgorica', id_countries: 'MNE' }, { name: 'Tegucigalpa', id_countries: 'HND' }, { name: 'Tehran', id_countries: 'IRN' }, { name: 'Tirana', id_countries: 'ALB' }, { name: 'Tripoli', id_countries: 'LBY' }, { name: 'Tallinn', id_countries: 'EST' }, { name: 'Jerusalem', id_countries: 'ISR' }, { name: 'Sao Tome', id_countries: 'STP' }, { name: 'Antananarivo', id_countries: 'MDG' }, { name: 'Tarawa Atoll', id_countries: 'KIR' }, { name: 'Taipei', id_countries: 'TWN' }, { name: 'Astana', id_countries: 'KAZ' }, { name: 'Tunis', id_countries: 'TUN' }, { name: 'Quito', id_countries: 'ECU' }, { name: 'Ulaanbaatar', id_countries: 'MNG' }, { name: 'Castries', id_countries: 'LCA' }, { name: 'Vienna', id_countries: 'AUT' }, { name: 'Vilnius', id_countries: 'LTU' }, { name: 'Vientiane', id_countries: 'LAO' }, { name: 'Nairobi', id_countries: 'KEN' }, { name: 'Wellington', id_countries: 'NZL' }, { name: 'Warsaw', id_countries: 'POL' }, { name: 'Yaounde', id_countries: 'CMR' }, { name: 'Kingston', id_countries: 'JAM' }, { name: 'Ottawa', id_countries: 'CAN' }, { name: "Saint John's", id_countries: 'ATG' }, { name: 'Moroni', id_countries: 'COM' }, { name: 'Zagreb', id_countries: 'HRV' }, { name: 'San Salvador', id_countries: 'SLV' }];

const airports = [{
  id: 'AMS', name: 'Amsterdam Airport Schiphol', city_name: 'Amsterdam', lat: '4.76388978958', lon: '52.3086013794',
}, {
  id: 'ARN', name: 'Stockholm-Arlanda Airport', city_name: 'Stockholm', lat: '17.918600082397', lon: '59.651901245117',
}, {
  id: 'BRN', name: 'Bern Belp Airport', city_name: 'Bern', lat: '7.49714994431', lon: '46.914100647',
}, {
  id: 'CMB', name: 'Bandaranaike International Colombo Airport', city_name: 'Colombo', lat: '79.8841018676758', lon: '7.1807599067688',
}, {
  id: 'CPH', name: 'Copenhagen Kastrup Airport', city_name: 'Copenhagen', lat: '12.656000137329', lon: '55.617900848389',
}, {
  id: 'HND', name: 'Tokyo Haneda International Airport', city_name: 'Tokyo', lat: '139.779999', lon: '35.552299',
}, {
  id: 'LHR', name: 'London Heathrow Airport', city_name: 'London', lat: '-0.461941', lon: '51.4706',
}, {
  id: 'MEX', name: 'Licenciado Benito Juarez International Airport', city_name: 'Mexico City', lat: '-99.072098', lon: '19.4363',
}, {
  id: 'MCT', name: 'Muscat International Airport', city_name: 'Muscat', lat: '58.2844009399414', lon: '23.5932998657227',
}, {
  id: 'MVD', name: 'Carrasco International /General C L Berisso Airport', city_name: 'Montevideo', lat: '-56.0308', lon: '-34.838402',
}, {
  id: 'OSL', name: 'Oslo Gardermoen Airport', city_name: 'Oslo', lat: '11.100399971008', lon: '60.193901062012',
}, {
  id: 'ZRH', name: 'Zürich Airport', city_name: 'Vaduz', lat: '8.54917', lon: '47.464699',
}, {
  id: 'WDH', name: 'Hosea Kutako International Airport', city_name: 'Windhoek', lat: '17.4709', lon: '-22.4799',
}, {
  id: 'BTS', name: 'M. R. Štefánik Airport', city_name: 'Bratislava', lat: '17.2126998901367', lon: '48.1702003479004',
}, {
  id: 'ABJ', name: 'Port Bouet Airport', city_name: 'Abidjan', lat: '-3.9262900352478', lon: '5.261390209198',
}, {
  id: 'ABV', name: 'Nnamdi Azikiwe International Airport', city_name: 'Abuja', lat: '7.26316976547241', lon: '9.00679016113281',
}, {
  id: 'ACC', name: 'Kotoka International Airport', city_name: 'Accra', lat: '-0.166786000132561', lon: '5.60518980026245',
}, {
  id: 'ADD', name: 'Addis Ababa Bole International Airport', city_name: 'Addis Ababa', lat: '38.7993011475', lon: '8.97789001465',
}, {
  id: 'AHN', name: 'Athens Ben Epps Airport', city_name: 'Athens', lat: '-83.326301574707', lon: '33.948600769043',
}, {
  id: 'ALG', name: 'Houari Boumediene Airport', city_name: 'Algiers', lat: '3.21540999412537', lon: '36.6910018920898',
}, {
  id: 'AMM', name: 'Queen Alia International Airport', city_name: 'Amman', lat: '35.9931983948', lon: '31.7226009369',
}, {
  id: 'API', name: 'Gomez Nino Apiay Air Base', city_name: 'Apia', lat: '-73.5627', lon: '4.07607',
}, {
  id: 'ASB', name: 'Ashgabat Airport', city_name: 'Ashgabat', lat: '58.3610000610352', lon: '37.9868011474609',
}, {
  id: 'ASM', name: 'Asmara International Airport', city_name: 'Asmara', lat: '38.910701751709', lon: '15.2918996810913',
}, {
  id: 'ASU', name: 'Silvio Pettirossi International Airport', city_name: 'Asuncion', lat: '-57.5200004577637', lon: '-25.2399997711182',
}, {
  id: 'AUH', name: 'Abu Dhabi International Airport', city_name: 'Abu Dhabi', lat: '54.6511001586914', lon: '24.4330005645752',
}, {
  id: 'BAH', name: 'Bahrain International Airport', city_name: 'Manama', lat: '50.6335983276367', lon: '26.2707996368408',
}, {
  id: 'BAI', name: 'Buenos Aires Airport', city_name: 'Buenos Aires', lat: '-83.330171', lon: '9.163949',
}, {
  id: 'BCV', name: 'Hector Silva Airstrip', city_name: 'Belmopan', lat: '-88.776496', lon: '17.269603',
}, {
  id: 'BEG', name: 'Belgrade Nikola Tesla Airport', city_name: 'Belgrade', lat: '20.3090991974', lon: '44.8184013367',
}, {
  id: 'BEY', name: 'Beirut Rafic Hariri International Airport', city_name: 'Beirut', lat: '35.4883995056152', lon: '33.8208999633789',
}, {
  id: 'BGF', name: "Bangui M'Poko International Airport", city_name: 'Bangui', lat: '18.5188007354736', lon: '4.39847993850708',
}, {
  id: 'BGI', name: 'Sir Grantley Adams International Airport', city_name: 'Bridgetown', lat: '-59.4925003052', lon: '13.0746002197',
}, {
  id: 'BGW', name: 'Baghdad International Airport', city_name: 'Baghdad', lat: '44.2346000671', lon: '33.2625007629',
}, {
  id: 'BJL', name: 'Banjul International Airport', city_name: 'Banjul', lat: '-16.6522006988525', lon: '13.3380002975464',
}, {
  id: 'BJM', name: 'Bujumbura International Airport', city_name: 'Bujumbura', lat: '29.3185005187988', lon: '-3.32401990890503',
}, {
  id: 'BKK', name: 'Suvarnabhumi Airport', city_name: 'Suva', lat: '100.747001647949', lon: '13.6810998916626',
}, {
  id: 'BKO', name: 'Senou Airport', city_name: 'Bamako', lat: '-7.94994020462036', lon: '12.5334997177124',
}, {
  id: 'BML', name: 'Berlin Regional Airport', city_name: 'Berlin', lat: '-71.17590332', lon: '44.57540131',
}, {
  id: 'BOG', name: 'El Dorado International Airport', city_name: 'Bogota', lat: '-74.1469', lon: '4.70159',
}, {
  id: 'BPS', name: 'Porto Seguro Airport', city_name: 'Porto', lat: '-39.0808982849121', lon: '-16.4386005401611',
}, {
  id: 'BSB', name: 'Presidente Juscelino Kubistschek International Airport', city_name: 'Brasilia', lat: '-47.9208335876465', lon: '-15.8691673278809',
}, {
  id: 'BUD', name: 'Budapest Ferenc Liszt International Airport', city_name: 'Budapest', lat: '19.2555999756', lon: '47.4369010925',
}, {
  id: 'BWN', name: 'Brunei International Airport', city_name: 'Bandar Seri Begawan', lat: '114.928001403809', lon: '4.94420003890991',
}, {
  id: 'BZV', name: 'Maya-Maya Airport', city_name: 'Brazzaville', lat: '15.2530002593994', lon: '-4.25169992446899',
}, {
  id: 'CAI', name: 'Cairo International Airport', city_name: 'Cairo', lat: '31.4055995941162', lon: '30.1219005584717',
}, {
  id: 'CBR', name: 'Canberra International Airport', city_name: 'Canberra', lat: '149.195007324219', lon: '-35.3069000244141',
}, {
  id: 'CCS', name: 'Simón Bolívar International Airport', city_name: 'Caracas', lat: '-66.991222', lon: '10.601194',
}, {
  id: 'CGK', name: 'Soekarno-Hatta International Airport', city_name: 'Jakarta', lat: '106.65599823', lon: '-6.1255698204',
}, {
  id: 'CIA', name: 'Ciampino–G. B. Pastine International Airport', city_name: 'Vatican City', lat: '12.5949', lon: '41.7994',
}, {
  id: 'CKY', name: 'Conakry International Airport', city_name: 'Conakry', lat: '-13.612', lon: '9.57689',
}, {
  id: 'CPT', name: 'Cape Town International Airport', city_name: 'Cape Town', lat: '18.6016998291', lon: '-33.9648017883',
}, {
  id: 'CRL', name: 'Brussels South Charleroi Airport', city_name: 'Brussels', lat: '4.45382', lon: '50.459202',
}, {
  id: 'CVM', name: 'General Pedro Jose Mendez International Airport', city_name: 'Victoria', lat: '-98.9564971924', lon: '23.7033004761',
}, {
  id: 'DAC', name: 'Dhaka / Hazrat Shahjalal International Airport', city_name: 'Dhaka', lat: '90.397783', lon: '23.843347',
}, {
  id: 'DAM', name: 'Damascus International Airport', city_name: 'Damascus', lat: '36.5155982971191', lon: '33.4114990234375',
}, {
  id: 'DAR', name: 'Julius Nyerere International Airport', city_name: 'Dar es Salaam', lat: '39.202599', lon: '-6.87811',
}, {
  id: 'DEL', name: 'Indira Gandhi International Airport', city_name: 'New Delhi', lat: '77.103104', lon: '28.5665',
}, {
  id: 'DIL', name: 'Presidente Nicolau Lobato International Airport', city_name: 'Dili', lat: '125.526000977', lon: '-8.54640007019',
}, {
  id: 'DKR', name: 'Léopold Sédar Senghor International Airport', city_name: 'Dakar', lat: '-17.4902000427246', lon: '14.7397003173828',
}, {
  id: 'DMK', name: 'Don Mueang International Airport', city_name: 'Bangkok', lat: '100.607002258', lon: '13.9125995636',
}, {
  id: 'DOH', name: 'Hamad International Airport', city_name: 'Doha', lat: '51.608056', lon: '25.273056',
}, {
  id: 'DUB', name: 'Dublin Airport', city_name: 'Dublin', lat: '-6.27007', lon: '53.421299',
}, {
  id: 'DYU', name: 'Dushanbe Airport', city_name: 'Dushanbe', lat: '68.8249969482', lon: '38.5433006287',
}, {
  id: 'EBB', name: 'Entebbe International Airport', city_name: 'Kampala', lat: '32.4435005187988', lon: '0.042385999113321',
}, {
  id: 'ESB', name: 'Esenboğa International Airport', city_name: 'Ankara', lat: '32.995098114', lon: '40.1281013489',
}, {
  id: 'EVN', name: 'Zvartnots International Airport', city_name: 'Yerevan', lat: '44.3959007263', lon: '40.1473007202',
}, {
  id: 'FIH', name: 'Ndjili International Airport', city_name: 'Kinshasa', lat: '15.4446001053', lon: '-4.38574981689',
}, {
  id: 'FNA', name: 'Lungi International Airport', city_name: 'Freetown', lat: '-13.1955003738403', lon: '8.61643981933594',
}, {
  id: 'FNJ', name: 'Pyongyang Sunan International Airport', city_name: 'Pyongyang', lat: '125.669998', lon: '39.224098',
}, {
  id: 'FRU', name: 'Manas International Airport', city_name: 'Bishkek', lat: '74.4776000977', lon: '43.0612983704',
}, {
  id: 'FUN', name: 'Funafuti International Airport', city_name: 'Vaiaku village', lat: '179.195999', lon: '-8.525',
}, {
  id: 'GBE', name: 'Sir Seretse Khama International Airport', city_name: 'Gaborone', lat: '25.9181995391846', lon: '-24.5552005767822',
}, {
  id: 'GGE', name: 'Georgetown County Airport', city_name: 'Georgetown', lat: '-79.3196029663', lon: '33.3116989136',
}, {
  id: 'GUA', name: 'La Aurora Airport', city_name: 'Guatemala City', lat: '-90.5274963378906', lon: '14.5832996368408',
}, {
  id: 'HAN', name: 'Noi Bai International Airport', city_name: 'Hanoi', lat: '105.806999206543', lon: '21.2212009429932',
}, {
  id: 'HAV', name: 'José Martí International Airport', city_name: 'Havana', lat: '-82.4091033935547', lon: '22.989200592041',
}, {
  id: 'HEL', name: 'Helsinki Vantaa Airport', city_name: 'Helsinki', lat: '24.963300704956', lon: '60.317199707031',
}, {
  id: 'HIR', name: 'Honiara International Airport', city_name: 'Honiara', lat: '160.05499267578', lon: '-9.4280004501343',
}, {
  id: 'HRE', name: 'Harare International Airport', city_name: 'Harare', lat: '31.0928001403809', lon: '-17.9318008422852',
}, {
  id: 'IAD', name: 'Washington Dulles International Airport', city_name: 'Washington D.C.', lat: '-77.45580292', lon: '38.94449997',
}, {
  id: 'ICN', name: 'Incheon International Airport', city_name: 'Seoul', lat: '126.450996398926', lon: '37.4691009521484',
}, {
  id: 'IEV', name: 'Kiev Zhuliany International Airport', city_name: 'Kyiv', lat: '30.45194', lon: '50.40194',
}, {
  id: 'INU', name: 'Nauru International Airport', city_name: 'Yaren District', lat: '166.919006', lon: '-0.547458',
}, {
  id: 'ISB', name: 'New Islamabad International Airport', city_name: 'Islamabad', lat: '72.851613', lon: '33.560713',
}, {
  id: 'IXL', name: 'Leh Kushok Bakula Rimpochee Airport', city_name: 'Baku', lat: '77.5465011597', lon: '34.1358985901',
}, {
  id: 'IXZ', name: 'Vir Savarkar International Airport', city_name: 'Port', lat: '92.7296981811523', lon: '11.6412000656128',
}, {
  id: 'JIB', name: 'Djibouti-Ambouli Airport', city_name: 'Djibouti', lat: '43.1595001220703', lon: '11.5473003387451',
}, {
  id: 'JUB', name: 'Juba International Airport', city_name: 'Juba ', lat: '31.6011009216', lon: '4.87201023102',
}, {
  id: 'KBL', name: 'Kabul International Airport', city_name: 'Kabul', lat: '69.2123031616211', lon: '34.5658988952637',
}, {
  id: 'KGL', name: 'Kigali International Airport', city_name: 'Kigali', lat: '30.1394996643', lon: '-1.96862995625',
}, {
  id: 'KIV', name: 'Chişinău International Airport', city_name: 'Chisinau', lat: '28.9309997558594', lon: '46.9277000427246',
}, {
  id: 'KRT', name: 'Khartoum International Airport', city_name: 'Khartoum', lat: '32.5531997680664', lon: '15.5895004272461',
}, {
  id: 'KTM', name: 'Tribhuvan International Airport', city_name: 'Kathmandu', lat: '85.3591003418', lon: '27.6965999603',
}, {
  id: 'KUL', name: 'Kuala Lumpur International Airport', city_name: 'Kuala Lumpur', lat: '101.70999908447', lon: '2.745579957962',
}, {
  id: 'KWI', name: 'Kuwait International Airport', city_name: 'Kuwait City', lat: '47.9688987731934', lon: '29.2266006469727',
}, {
  id: 'LAD', name: 'Quatro de Fevereiro Airport', city_name: 'Luanda', lat: '13.2312002182', lon: '-8.85836982727',
}, {
  id: 'LBV', name: "Libreville Leon M'ba International Airport", city_name: 'Libreville', lat: '9.4122800827', lon: '0.458600014448',
}, {
  id: 'LCA', name: 'Larnaca International Airport', city_name: 'Nicosia', lat: '33.6249008178711', lon: '34.8750991821289',
}, {
  id: 'LEU', name: "Pirineus - la Seu d'Urgel Airport", city_name: 'Andorra la Vella', lat: '1.40917', lon: '42.3386',
}, {
  id: 'LFW', name: 'Lomé-Tokoin Airport', city_name: 'Lome', lat: '1.25451004505157', lon: '6.16560983657837',
}, {
  id: 'LIS', name: 'Humberto Delgado Airport (Lisbon Portela Airport)', city_name: 'Lisbon', lat: '-9.13592', lon: '38.7813',
}, {
  id: 'LJU', name: 'Ljubljana Jože Pučnik Airport', city_name: 'Ljubljana', lat: '14.4576', lon: '46.223701',
}, {
  id: 'LLH', name: 'Reginaldo Hammer Airport', city_name: 'Lima', lat: '-87.8988', lon: '15.4422',
}, {
  id: 'LLW', name: 'Lilongwe International Airport', city_name: 'Lilongwe', lat: '33.78099823', lon: '-13.7894001007',
}, {
  id: 'LPB', name: 'El Alto International Airport', city_name: 'La Paz', lat: '-68.1922988891602', lon: '-16.5132999420166',
}, {
  id: 'LUN', name: 'Kenneth Kaunda International Airport Lusaka', city_name: 'Lusaka', lat: '28.4526004791', lon: '-15.3308000565',
}, {
  id: 'LUX', name: 'Luxembourg-Findel International Airport', city_name: 'Luxembourg', lat: '6.2044444', lon: '49.6233333',
}, {
  id: 'MAD', name: 'Adolfo Suárez Madrid–Barajas Airport', city_name: 'Madrid', lat: '-3.56264', lon: '40.471926',
}, {
  id: 'MAJ', name: 'Marshall Islands International Airport', city_name: 'Majuro', lat: '171.272003173828', lon: '7.06476020812988',
}, {
  id: 'MGA', name: 'Augusto C. Sandino (Managua) International Airport', city_name: 'Managua', lat: '-86.1681976318359', lon: '12.1415004730225',
}, {
  id: 'MGQ', name: 'Aden Adde International Airport', city_name: 'Mogadishu', lat: '45.3046989440918', lon: '2.01444005966187',
}, {
  id: 'MHP', name: 'Minsk 1 Airport', city_name: 'Minsk', lat: '27.5396995544434', lon: '53.8644981384277',
}, {
  id: 'MLA', name: 'Malta International Airport', city_name: 'Valletta', lat: '14.4775', lon: '35.857498',
}, {
  id: 'MLE', name: 'Malé International Airport', city_name: 'Male', lat: '73.5290985107422', lon: '4.19183015823364',
}, {
  id: 'MNL', name: 'Ninoy Aquino International Airport', city_name: 'Manila', lat: '121.019997', lon: '14.5086',
}, {
  id: 'MPM', name: 'Maputo Airport', city_name: 'Maputo', lat: '32.5726013183594', lon: '-25.9207992553711',
}, {
  id: 'MRU', name: 'Sir Seewoosagur Ramgoolam International Airport', city_name: 'Port Louis', lat: '57.6836013793945', lon: '-20.4302005767822',
}, {
  id: 'MSU', name: 'Moshoeshoe I International Airport', city_name: 'Maseru', lat: '27.5524997711182', lon: '-29.4622993469238',
}, {
  id: 'MUC', name: 'Munich Airport', city_name: 'Monaco', lat: '11.7861', lon: '48.353802',
}, {
  id: 'MZB', name: 'Mocímboa da Praia Airport', city_name: 'Praia', lat: '40.3549003601074', lon: '-11.3618001937866',
}, {
  id: 'NAS', name: 'Lynden Pindling International Airport', city_name: 'Nassau', lat: '-77.4662017822', lon: '25.0389995575',
}, {
  id: 'NDJ', name: "N'Djamena International Airport", city_name: "N'Djamena", lat: '15.0340003967285', lon: '12.1337003707886',
}, {
  id: 'NIM', name: 'Diori Hamani International Airport', city_name: 'Niamey', lat: '2.18360996246338', lon: '13.481499671936',
}, {
  id: 'NKC', name: 'Nouakchott–Oumtounsy International Airport', city_name: 'Nouakchott', lat: '-15.9697222', lon: '18.31',
}, {
  id: 'OTP', name: 'Henri Coandă International Airport', city_name: 'Bucharest', lat: '26.085', lon: '44.5711111',
}, {
  id: 'OUA', name: 'Ouagadougou Airport', city_name: 'Ouagadougou', lat: '-1.51242005825043', lon: '12.3531999588013',
}, {
  id: 'OXB', name: 'Osvaldo Vieira International Airport', city_name: 'Bissau', lat: '-15.6536998748779', lon: '11.8948001861572',
}, {
  id: 'PAP', name: 'Toussaint Louverture International Airport', city_name: 'Port-au-Prince', lat: '-72.2925033569336', lon: '18.5799999237061',
}, {
  id: 'PBH', name: 'Paro Airport', city_name: 'Thimphu', lat: '89.4245986938', lon: '27.4032001495',
}, {
  id: 'PBM', name: 'Johan Adolf Pengel International Airport', city_name: 'Paramaribo', lat: '-55.1878013611', lon: '5.4528298378',
}, {
  id: 'PEK', name: 'Beijing Capital International Airport', city_name: 'Beijing', lat: '116.584999084473', lon: '40.0801010131836',
}, {
  id: 'PMV', name: 'Del Caribe Santiago Mariño International Airport', city_name: 'San Marino', lat: '-63.9665985107422', lon: '10.9126033782959',
}, {
  id: 'PNH', name: 'Phnom Penh International Airport', city_name: 'Phnom Penh', lat: '104.84400177002', lon: '11.5466003417969',
}, {
  id: 'PNI', name: 'Pohnpei International Airport', city_name: 'Palikir', lat: '158.208999633789', lon: '6.98509979248047',
}, {
  id: 'POM', name: 'Port Moresby Jacksons International Airport', city_name: 'Port Moresby', lat: '147.220001220703', lon: '-9.44338035583496',
}, {
  id: 'POS', name: 'Piarco International Airport', city_name: 'Port Spain', lat: '-61.3372001647949', lon: '10.5953998565674',
}, {
  id: 'POX', name: 'Pontoise - Cormeilles-en-Vexin Airport', city_name: 'Paris', lat: '2.0408333', lon: '49.0966667',
}, {
  id: 'PRG', name: 'Václav Havel Airport Prague', city_name: 'Prague', lat: '14.26', lon: '50.1008',
}, {
  id: 'PRN', name: 'Priština International Airport', city_name: 'Pristina', lat: '21.035801', lon: '42.5728',
}, {
  id: 'PTY', name: 'Tocumen International Airport', city_name: 'Panama City', lat: '-79.3834991455', lon: '9.0713596344',
}, {
  id: 'PUW', name: 'Pullman Moscow Regional Airport', city_name: 'Moscow', lat: '-117.110001', lon: '46.7439',
}, {
  id: 'RBA', name: 'Rabat-Salé Airport', city_name: 'Rabat', lat: '-6.75152', lon: '34.051498',
}, {
  id: 'REO', name: 'Rome State Airport', city_name: 'Rome', lat: '-117.885002136', lon: '42.5777015686',
}, {
  id: 'RGN', name: 'Yangon International Airport', city_name: 'Rangoon', lat: '96.1332015991', lon: '16.9073009491',
}, {
  id: 'RIX', name: 'Riga International Airport', city_name: 'Riga', lat: '23.9710998535156', lon: '56.9235992431641',
}, {
  id: 'RKV', name: 'Reykjavik Airport', city_name: 'Reykjavik', lat: '-21.9405994415', lon: '64.1299972534',
}, {
  id: 'ROB', name: 'Roberts International Airport', city_name: 'Monrovia', lat: '-10.3622999191284', lon: '6.23378992080689',
}, {
  id: 'ROR', name: 'Babelthuap Airport', city_name: 'Melekeok', lat: '134.544236', lon: '7.36731',
}, {
  id: 'ROX', name: 'Roseau Municipal Rudy Billberg Field', city_name: 'Roseau', lat: '-95.6969986', lon: '48.85599899',
}, {
  id: 'RUH', name: 'King Khaled International Airport', city_name: 'Riyadh', lat: '46.6987991333008', lon: '24.9575996398926',
}, {
  id: 'SAH', name: "Sana'a International Airport", city_name: 'Sanaa', lat: '44.2196998596191', lon: '15.476300239563',
}, {
  id: 'SCQ', name: 'Santiago de Compostela Airport', city_name: 'Santiago', lat: '-8.41514015197754', lon: '42.8963012695313',
}, {
  id: 'SDQ', name: 'Las Américas International Airport', city_name: 'Santo Domingo', lat: '-69.668899536133', lon: '18.42970085144',
}, {
  id: 'SGU', name: 'St George Municipal Airport', city_name: "Saint George's", lat: '-113.510306', lon: '37.036389',
}, {
  id: 'SHO', name: 'King Mswati III International Airport', city_name: 'Mbabane', lat: '31.716944', lon: '-26.358611',
}, {
  id: 'SIN', name: 'Singapore Changi Airport', city_name: 'Singapore', lat: '103.994003', lon: '1.35019',
}, {
  id: 'SJC', name: 'Norman Y. Mineta San Jose International Airport', city_name: 'San Jose', lat: '-121.929001', lon: '37.362598',
}, {
  id: 'SJJ', name: 'Sarajevo International Airport', city_name: 'Sarajevo', lat: '18.3314990997314', lon: '43.8246002197266',
}, {
  id: 'SKB', name: 'Robert L. Bradshaw International Airport', city_name: 'Basseterre', lat: '-62.7187004089356', lon: '17.3111991882324',
}, {
  id: 'SKP', name: 'Skopje Alexander the Great Airport', city_name: 'Skopje', lat: '21.621401', lon: '41.961601',
}, {
  id: 'SOF', name: 'Sofia Airport', city_name: 'Sofia', lat: '23.4114360809326', lon: '42.6966934204102',
}, {
  id: 'SSG', name: 'Malabo Airport', city_name: 'Malabo', lat: '8.70872020721436', lon: '3.75527000427246',
}, {
  id: 'SVD', name: 'Argyle International Airport', city_name: 'Kingstown', lat: '-61.149945', lon: '13.156695',
}, {
  id: 'TAS', name: 'Tashkent International Airport', city_name: 'Tashkent', lat: '69.2811965942', lon: '41.257900238',
}, {
  id: 'TBS', name: 'Tbilisi International Airport', city_name: 'Tbilisi', lat: '44.95470047', lon: '41.6692008972',
}, {
  id: 'TBU', name: "Fua'amotu International Airport", city_name: "Nuku'alofa", lat: '-175.149993896484', lon: '-21.2411994934082',
}, {
  id: 'TGD', name: 'Podgorica Airport', city_name: 'Podgorica', lat: '19.2519', lon: '42.359402',
}, {
  id: 'TGU', name: 'Toncontín International Airport', city_name: 'Tegucigalpa', lat: '-87.2172012329102', lon: '14.0608997344971',
}, {
  id: 'THR', name: 'Mehrabad International Airport', city_name: 'Tehran', lat: '51.3134002685547', lon: '35.6892013549805',
}, {
  id: 'TIA', name: 'Tirana International Airport Mother Teresa', city_name: 'Tirana', lat: '19.7206001282', lon: '41.4146995544',
}, {
  id: 'TIP', name: 'Tripoli International Airport', city_name: 'Tripoli', lat: '13.1590003967', lon: '32.6635017395',
}, {
  id: 'TLL', name: 'Lennart Meri Tallinn Airport', city_name: 'Tallinn', lat: '24.8327999115', lon: '59.4132995605',
}, {
  id: 'TLV', name: 'Ben Gurion International Airport', city_name: 'Jerusalem', lat: '34.8866996765137', lon: '32.0113983154297',
}, {
  id: 'TMS', name: 'São Tomé International Airport', city_name: 'Sao Tome', lat: '6.71215009689331', lon: '0.378174990415573',
}, {
  id: 'TNR', name: 'Ivato Airport', city_name: 'Antananarivo', lat: '47.4788017273', lon: '-18.7968997955',
}, {
  id: 'TRW', name: 'Bonriki International Airport', city_name: 'Tarawa Atoll', lat: '173.147003173828', lon: '1.38163995742798',
}, {
  id: 'TSA', name: 'Taipei Songshan Airport', city_name: 'Taipei', lat: '121.552001953125', lon: '25.0694007873535',
}, {
  id: 'TSE', name: 'Astana International Airport', city_name: 'Astana', lat: '71.4669036865234', lon: '51.0222015380859',
}, {
  id: 'TUN', name: 'Tunis Carthage International Airport', city_name: 'Tunis', lat: '10.2271995544434', lon: '36.851001739502',
}, {
  id: 'UIO', name: 'Mariscal Sucre International Airport', city_name: 'Quito', lat: '-78.3575', lon: '-0.129166666667',
}, {
  id: 'ULN', name: 'Chinggis Khaan International Airport', city_name: 'Ulaanbaatar', lat: '106.766998291016', lon: '47.8431015014648',
}, {
  id: 'UVF', name: 'Hewanorra International Airport', city_name: 'Castries', lat: '-60.952599', lon: '13.7332',
}, {
  id: 'VIE', name: 'Vienna International Airport', city_name: 'Vienna', lat: '16.569700241089', lon: '48.110298156738',
}, {
  id: 'VNO', name: 'Vilnius International Airport', city_name: 'Vilnius', lat: '25.285801', lon: '54.634102',
}, {
  id: 'VTE', name: 'Wattay International Airport', city_name: 'Vientiane', lat: '102.56300354', lon: '17.9883003235',
}, {
  id: 'WIL', name: 'Nairobi Wilson Airport', city_name: 'Nairobi', lat: '36.8148002624512', lon: '-1.32172000408173',
}, {
  id: 'WLG', name: 'Wellington International Airport', city_name: 'Wellington', lat: '174.804992676', lon: '-41.3272018433',
}, {
  id: 'WMI', name: 'Modlin Airport', city_name: 'Warsaw', lat: '20.6518001556', lon: '52.4510993958',
}, {
  id: 'YAO', name: 'Yaoundé Airport', city_name: 'Yaounde', lat: '11.5235004425049', lon: '3.83604001998901',
}, {
  id: 'YGK', name: 'Kingston Norman Rogers Airport', city_name: 'Kingston', lat: '-76.5969009399414', lon: '44.2252998352051',
}, {
  id: 'YOW', name: 'Ottawa Macdonald-Cartier International Airport', city_name: 'Ottawa', lat: '-75.6691970825195', lon: '45.3224983215332',
}, {
  id: 'YSJ', name: 'Saint John Airport', city_name: "Saint John's", lat: '-65.8902969360352', lon: '45.3161010742187',
}, {
  id: 'YVA', name: 'Iconi Airport', city_name: 'Moroni', lat: '43.2439002991', lon: '-11.7108001709',
}, {
  id: 'ZAG', name: 'Zagreb Airport', city_name: 'Zagreb', lat: '16.0687999725', lon: '45.7429008484',
}, {
  id: 'ZSA', name: 'San Salvador Airport', city_name: 'San Salvador', lat: '-74.5240020751953', lon: '24.0632991790771',
}];

module.exports.regions = regions;
module.exports.countries = countries;
module.exports.cities = cities;
module.exports.airports = airports;

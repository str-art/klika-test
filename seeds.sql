--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Debian 14.5-1.pgdg110+1)
-- Dumped by pg_dump version 14.5 (Debian 14.5-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.uuid
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.uuid OWNER TO root;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: File; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."File" (
    id integer DEFAULT nextval('public.uuid'::regclass) NOT NULL,
    name character varying(256)
);


ALTER TABLE public."File" OWNER TO root;

--
-- Name: Person; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."Person" (
    id integer DEFAULT nextval('public.uuid'::regclass) NOT NULL,
    name character varying(32)
);


ALTER TABLE public."Person" OWNER TO root;

--
-- Name: Song; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."Song" (
    id integer DEFAULT nextval('public.uuid'::regclass) NOT NULL,
    title character varying(64),
    author integer,
    year integer,
    genre character varying(64)
);


ALTER TABLE public."Song" OWNER TO root;

--
-- Data for Name: File; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."File" (id, name) FROM stdin;
\.


--
-- Data for Name: Person; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."Person" (id, name) FROM stdin;
1	Артем Стрелков
14	Bob Marley
24	Abyse Junction
26	Led Zeppelin
27	Metallica
28	Steve Vai
29	ZZ Top
30	Slash
33	Élisabeth Jacquet de La Guerre
34	Siegfried Wagner
35	Ludolf Nielsen
36	Henri Sauguet
37	Per Nørgård
38	Frederic Hymen Cowen
39	Max Reger
40	Jurriaan Andriessen
41	Natanael Berg
42	Chevalier de Saint-Georges
43	Lutz Landwehr von Pragenau
44	Bradley Joseph
45	Johann Christian Bach
46	Abram Chasins
47	Francis Thorne
48	Johann Bernhard Bach
49	Johannes Ockeghem
50	Vernon Duke
51	Hector Ayala
52	Alfredo Casella
53	Robin Holloway
54	Jaakko Mäntyjärvi
55	André Boucourechliev
56	Peter Cornelius
57	Eric Whitacre
58	Leonhard Kleber
59	Scott Bradley
60	Hal Hopson
61	Robert Stolz
62	Lewis Spratlan
63	Franz Waxman
64	John Hartford
65	Dave Bartholomew
66	Troy Banarzi
67	Catalina Berroa
68	Gunnar Berg
69	Kurt Schwertsik
70	Peter Bruun
71	Andrew Schultz
72	Emilios Riadis
73	Mogens Pedersøn
74	Franz Lauska
75	Granville Bantock
76	Klaus Schedl
77	Anton Schweitzer
78	Lauro Rossi
79	Francis Jackson
80	Mauro Giuliani
81	Cyril Scott
82	Reinhard Febel
83	Modest Mussorgsky
84	André Grétry
85	Frederic Rzewski
86	Moritz Moszkowski
87	Pietro Filippo Scarlatti
88	Ketil Hvoslef
89	Atso Almila
90	Hieronymus Praetorius
91	Johannes Bernardus van Bree
92	Isidore de Lara
93	Nicolaus à Kempis
94	Andrew Norman
95	Glenn Gould
96	Manuel de Zumaya
97	Nicola Fago
98	Bernard Rands
99	Francesca Caccini
100	Amélie-Julie Candeille
101	Henry VIII of England
102	Johann Wanning
103	Rudolph Simonsen
104	Francesco Corteccia
105	Mikis Theodorakis
106	Kosaku Yamada
107	Gwyneth Van Anden Walker
108	Morton Feldman
109	Emanuele d'Astorga
110	Philip Martin
111	Leoš Janáček
112	Nikita Bogoslovsky
113	William Grant Still
114	Vincenzo da Rimini
115	Peter Mennin
116	Georg Joseph Vogler
117	Richard Rodgers
118	Johann Gottlieb Janitsch
119	Jerry Ross
120	Ludvík Podéšť
121	Harry Somers
122	Marian Arkwright
123	Domenico Gabrielli
124	Maria Brizzi Giorgi
125	Nicolaus Zacharie
126	Jean Titelouze
127	Paul Le Flem
128	Jean Guillou
129	Claude Debussy
130	Thomas Adams
131	Georg Friedrich Kauffmann
132	Charles Camilleri
\.


--
-- Data for Name: Song; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public."Song" (id, title, author, year, genre) FROM stdin;
2	Первая песня	1	2022	\N
3	Первая песня	1	2022	\N
4	Первая песня	1	2022	\N
5	Первая песня	1	2022	\N
6	Первая песня	1	2022	\N
7	Первая песня	1	2022	\N
8	Первая песня	1	2022	\N
9	Первая песня	1	2022	\N
10	Первая песня	1	2022	\N
11	Первая песня	1	2022	\N
12	Вторая  песня	1	2022	\N
13	Третья песня	1	2022	\N
15	Put it on	14	1965	\N
16	I need you	14	1965	\N
17	Lonesome Feeling	14	1965	\N
18	One Love	14	1965	\N
19	When the Well Runs Drye	14	1965	\N
20	Ten Commandments of Love	14	1965	\N
21	Rude Boy	14	1965	\N
22	It Hurts to Be Alone	14	1965	\N
23	Love and Affection	14	1965	\N
25	Kokoroko	24	2018	\N
31	Stairway to Heaven	26	1971	\N
32	Paradise city	30	1988	\N
133	F-Series Super Duty	93	1950	Rap
134	Camry	97	2010	Jazz
135	xB	116	1960	Metal
136	SLR McLaren	100	1973	HipHop
137	HS	128	2006	Trap
138	Passat	128	1969	HipHop
139	S40	90	2010	Blues
140	4000CS Quattro	103	1949	Jazz
141	Trans Sport	91	1939	Metal
142	Nuova 500	106	1941	Blues
143	Sonata	112	1955	Trap
144	M-Class	122	1968	HipHop
145	Jetta	90	1965	Trap
146	Elantra	128	2001	Rap
147	Challenger	99	2008	Blues
148	RL	94	1980	Blues
149	Sundance	124	1935	HipHop
150	GS	117	1941	Rap
151	XF	121	2008	Blues
152	CTS-V	121	1992	Trap
153	Suburban 1500	111	1996	Metal
154	Prizm	108	1949	Metal
155	Ram 3500	103	1941	HipHop
156	XC90	87	1982	Jazz
157	Aerio	127	1945	HipHop
158	CLS-Class	90	2006	Rap
159	Savana 3500	106	1964	Jazz
160	i-Series	116	1931	Trap
161	944	87	1943	Rap
162	Fillmore	88	1966	Jazz
163	911	129	1946	Metal
164	Murano	121	2006	Trap
165	Talon	106	1936	Metal
166	Escalade EXT	93	1952	HipHop
167	RAV4	104	2003	Jazz
168	240SX	108	1931	Rap
169	Savana 3500	113	1983	Blues
170	Avalanche	94	1977	Jazz
171	Tiburon	130	1945	Rap
172	Firebird	122	1949	Trap
173	Town Car	99	1972	Blues
174	Outlook	96	1952	Rap
175	Electra	108	1977	Trap
176	Aerostar	116	2006	Trap
177	Pathfinder	100	1949	Jazz
178	Mazda3	95	1944	HipHop
179	Park Avenue	95	1984	Trap
180	Tundra	121	2003	Metal
181	4000s	121	1985	Rap
182	Bonneville	88	1974	Blues
183	Miata MX-5	129	2002	HipHop
184	F250	121	1948	Trap
185	Electra	98	1991	Jazz
186	Explorer Sport Trac	124	2004	Jazz
187	6000	113	1977	Jazz
188	Sedona	99	1942	Blues
189	Camaro	97	1979	Trap
190	i-350	128	1973	Blues
191	TSX	116	1984	Blues
192	B-Series Plus	120	1946	Trap
193	Veracruz	102	1962	HipHop
194	Ram 3500 Club	128	1937	Metal
195	Cayman	104	1999	Rap
196	Blazer	114	1986	Blues
197	Navigator	114	2006	Trap
198	Axiom	125	1958	Rap
199	2500 Club Coupe	126	1941	Metal
200	M3	101	1964	Trap
201	Firefly	94	1933	HipHop
202	164	129	2000	Blues
203	Thunderbird	115	1988	Blues
204	Ascender	118	1987	Metal
205	Yukon	104	2005	HipHop
206	Leganza	88	1971	Rap
207	S-Type	96	1946	Trap
208	M3	115	1982	Rap
209	Regal	101	1932	Trap
210	Grand Marquis	128	1970	Jazz
211	Tucson	105	1940	Jazz
212	S2000	90	1987	Jazz
213	XJ Series	112	1950	HipHop
214	Suburban	129	1950	Trap
215	Elantra	109	1959	Blues
216	LeSabre	98	1972	Trap
217	Nitro	95	1978	Rap
218	M-Class	93	2006	Jazz
219	Cutlass Supreme	110	1962	Rap
220	Canyon	121	1990	Metal
221	Malibu	111	1994	Trap
222	Loyale	120	1988	Metal
223	M-Class	89	1969	Blues
224	LHS	102	2002	Trap
225	Camry	119	1953	Trap
226	S-Class	129	1950	Rap
227	Cabriolet	103	1975	Blues
228	Discovery Series II	106	1936	Blues
229	Ciera	101	1990	Trap
230	A6	117	1931	Metal
231	XC90	91	2004	Rap
232	Navigator	125	1973	Trap
233	Frontier	112	1966	HipHop
234	Explorer	127	1940	Jazz
235	Rogue	106	1949	HipHop
236	Pajero	106	1989	Metal
237	90	118	1935	Trap
238	Liberty	112	1954	Jazz
239	Town & Country	103	2001	Jazz
240	Jimmy	105	1974	Metal
241	S40	119	1995	HipHop
242	G-Series 2500	116	1954	Metal
243	C30	112	1946	Trap
244	F250	118	2006	HipHop
245	i-290	128	2010	Jazz
246	Firefly	113	1985	HipHop
247	HHR	108	2003	HipHop
248	Cutlass Cruiser	123	1971	Trap
249	Celica	107	1963	Rap
250	Accent	126	1948	Metal
251	Wrangler	126	1955	HipHop
252	Discovery	122	1983	Trap
253	C-Class	101	1943	Jazz
254	Challenger	102	1999	Jazz
255	Forenza	95	1951	Metal
256	Corvette	119	1955	Trap
257	Challenger	125	1999	Rap
258	Jetta	108	1950	Metal
259	Frontier	125	2011	Trap
260	Festiva	104	1942	Rap
261	Explorer Sport	125	1950	Trap
262	Ranger	127	1953	HipHop
263	Highlander	105	2007	HipHop
264	9000	89	2010	Trap
265	500SEC	130	1989	Jazz
266	Coupe GT	116	1987	Jazz
267	Vanquish S	90	2007	Trap
268	9-7X	89	1957	HipHop
269	Durango	88	1936	Jazz
270	Frontier	97	2011	Metal
271	Eurovan	95	1975	Metal
272	NSX	108	1942	HipHop
273	Land Cruiser	103	1970	HipHop
274	Achieva	130	2002	Metal
275	LS	99	2005	Blues
276	Patriot	122	1946	HipHop
277	W201	112	1954	Metal
278	CL-Class	122	1932	Trap
279	Suburban	124	1945	Blues
280	EXP	120	2008	Metal
281	V50	110	1973	Rap
282	Echo	124	1929	Metal
283	Crown Victoria	95	1962	Trap
284	Q7	113	1997	Metal
285	929	104	1951	Trap
286	Firebird Formula	102	1956	HipHop
287	Range Rover	96	1936	Blues
288	Somerset	112	1985	Blues
289	Regal	121	2003	Blues
290	Cooper Clubman	121	2007	Blues
291	626	102	1936	Blues
292	X6	111	1961	Blues
293	Voyager	119	1997	Jazz
294	Aerio	111	1954	Jazz
295	Avalon	93	1933	Blues
296	Versa	123	1936	Metal
297	CR-V	104	1990	Metal
298	GS	120	1982	Rap
299	Express 3500	100	1954	HipHop
300	Raider	110	1933	HipHop
301	S10	93	1952	Metal
302	3500	113	1951	Jazz
303	Intrepid	87	2006	Blues
304	Grand Prix	94	1998	Jazz
305	E-Class	92	1945	Rap
306	Yukon	109	1986	Blues
307	B-Series Plus	88	1952	Rap
308	Explorer	123	1928	Jazz
309	Supra	99	2002	HipHop
310	Caravan	117	1982	Rap
311	Monaco	125	1949	Trap
312	Escort	111	1948	Trap
313	Sierra 1500	129	1981	HipHop
314	928	112	1969	Trap
315	FR-S	120	1932	Rap
316	ES	119	1930	Metal
317	XJ	89	1962	Rap
318	Sedona	120	1993	Metal
319	Silverado 1500	106	2008	HipHop
320	Durango	130	1981	Blues
321	SLK-Class	95	1935	Metal
322	900	97	1928	Blues
323	Civic	114	2012	Rap
324	H1	128	1969	Trap
325	Accent	100	2012	Rap
326	Passat	115	1928	Metal
327	Defender	110	1988	Jazz
328	458 Italia	120	1971	Rap
329	2500	116	1986	Metal
330	Sierra 2500	119	1948	Blues
331	Outback Sport	121	1993	Jazz
332	Eldorado	88	1952	HipHop
333	GT350	118	1957	Metal
334	LeSabre	110	2008	Trap
335	5 Series	118	1957	Rap
336	Monte Carlo	90	1939	HipHop
337	Discovery	123	1964	Blues
338	Venture	91	1969	Blues
339	Trans Sport	107	2010	Metal
340	Avalon	114	1940	Trap
341	Corvette	102	1972	HipHop
342	Fox	115	1976	Blues
343	F450	88	2005	Rap
344	S-Class	127	1934	Trap
345	Cougar	109	2008	Blues
346	X-Type	101	1941	Rap
347	Cayenne	93	1999	HipHop
348	Seville	105	1960	HipHop
349	Explorer Sport Trac	107	1933	Rap
350	Prizm	99	1985	Metal
351	Mazda5	121	2011	Trap
352	Land Cruiser	110	1952	Jazz
353	8 Series	94	1967	HipHop
354	Diamante	92	2000	Jazz
355	E-Series	107	1951	Rap
356	Mustang	117	1970	Trap
357	Enclave	118	1968	Rap
358	Miata MX-5	130	1960	Blues
359	Cressida	97	1953	Rap
360	Neon	94	1938	Metal
361	FX	129	1975	Rap
362	Savana 1500	95	1953	Blues
363	CL-Class	104	1948	Rap
364	Quest	117	1958	HipHop
365	Eclipse	93	2012	Rap
366	Xterra	119	1941	Jazz
367	Forester	110	1987	Trap
368	Grand Prix	128	1940	Jazz
369	Rainier	114	1991	Trap
370	GS	92	1950	Metal
371	TT	102	1963	Blues
372	Freestyle	99	1980	HipHop
373	GranTurismo	104	1987	Rap
374	XC70	121	1948	Blues
375	Rodeo	87	1961	Trap
376	Savana 3500	105	1977	Trap
377	Civic	122	1958	Metal
378	350Z	105	2009	Trap
379	Camaro	95	1946	Rap
380	Quattroporte	89	2010	Blues
381	Corolla	88	1955	Blues
382	Grand Prix	126	1974	Trap
383	Cooper	113	1976	HipHop
384	Escalade	129	1971	Metal
385	F150	92	1974	Blues
386	Yukon	95	1937	Blues
387	Fleetwood	118	1957	HipHop
388	Avalon	121	2006	Jazz
389	FJ Cruiser	96	1999	Rap
390	MKX	98	1971	Metal
391	F250	127	1971	Blues
392	Aerostar	95	1994	Jazz
393	Montero Sport	91	1956	HipHop
394	4Runner	98	1938	Trap
395	F350	103	1997	HipHop
396	GT500	99	1970	Metal
397	Supra	106	1933	Trap
398	G-Class	111	2000	HipHop
399	F250	88	1959	Rap
400	3000GT	121	1983	Metal
401	Malibu	118	1983	Metal
402	Tracer	129	1947	HipHop
403	4Runner	110	1995	HipHop
404	Roadster	100	2007	Rap
405	Phantom	97	1990	Jazz
406	911	115	1990	Trap
407	Sunbird	116	1951	HipHop
408	GS	113	1943	HipHop
409	xD	108	1982	Rap
410	Prizm	113	1943	Blues
411	Range Rover	106	1999	Blues
412	Suburban 2500	95	1988	Jazz
413	i-280	117	1958	Rap
414	MKS	119	1929	Trap
415	S-Type	123	1995	HipHop
416	Parisienne	120	1972	Blues
417	Forte	96	1990	Metal
418	Mazda3	120	1994	Metal
419	Grand Am	97	1979	Blues
420	A6	87	1973	Trap
421	3000GT	107	1995	Trap
422	Sierra 1500	112	1946	Blues
423	Crown Victoria	130	1994	HipHop
424	Escape	118	2004	Metal
425	5 Series	94	1972	Rap
426	MDX	108	1929	HipHop
427	MKT	95	1952	Rap
428	Yukon XL	93	1976	Trap
429	Savana 1500	97	1973	Rap
430	Sierra 2500	100	1965	Trap
431	Talon	88	2001	Jazz
432	Freestar	130	1957	HipHop
\.


--
-- Name: uuid; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.uuid', 432, true);


--
-- Name: File File_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."File"
    ADD CONSTRAINT "File_pkey" PRIMARY KEY (id);


--
-- Name: Person Person_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Person"
    ADD CONSTRAINT "Person_pkey" PRIMARY KEY (id);


--
-- Name: Song Song_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Song"
    ADD CONSTRAINT "Song_pkey" PRIMARY KEY (id);


--
-- Name: Song Song_author_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Song"
    ADD CONSTRAINT "Song_author_fkey" FOREIGN KEY (author) REFERENCES public."Person"(id);


--
-- PostgreSQL database dump complete
--


create database bookworld;
use bookworld;


drop table if exist user;
create table user(
    id int not null auto_increment primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null
)


drop table if exist category;

create table category(
    id int not null PRIMARY KEY,
    title VARCHAR(255) not null,
    image VARCHAR(255) not null
)

drop table if exist book;
create table book(
    id int not null PRIMARY KEY,
    title varchar(255) not null,
    age int not null,
    description varchar(255) not null,
    price DECIMAL(10,2) not null,
    author VARCHAR(255) not null,
    image VARCHAR(255) not null,
    id_category int,
    foreign key (id_category) references category(id)
)


Insert into category(id, title, image) values 
(
    1, 'Avventura', './src/imgs/Category/prova/avventura.jpg'   
),
(
    2, 'Fantascienza', './src/imgs/Category/prova/fantascienza.jpg'
),
(
    3, 'Fantasy', './src/imgs/Category/prova/fantasy.jpg'
),
(
    4, 'Giallo', './src/imgs/Category/prova/giallo.jpg'
),
(
    5, 'Romance', './src/imgs/Category/prova/romance.jpg'
),
(
    6, 'Thriller', './src/imgs/Category/prova/thriller.jpg'
)

Insert into book(id, title, image,age, description, price, author, id_category) values
(
    0, 'L\'isola misteriosa', './src/imgs/avventura/avventura1.jpg', 12, 'Un gruppo di naufraghi si ritrova su un\'isola apparentemente deserta, ma presto scoprono che nasconde molti segreti e pericoli.', 10.5, 'Jules Verne', 1
),
(
    1, 'L\'isola del tesoro', './src/imgs/avventura/avventura2.jpg', 12, 'Un giovane ragazzo, Jim Hawkins, trova una mappa del tesoro e parte per una straordinaria avventura alla ricerca di ricchezze nascoste e pirati spietati.',
    11.5, 'Robert Louis Stevenson', 1
),
(
    2, 'Le montagne della follia',
    './src/imgs/avventura/avventura3.jpg', 14,
    'Una spedizione scientifica in Antartide scopre antiche rovine e creature misteriose, portando alla luce orrori che sfidano la comprensione umana.', 12.5, 'H.P. Lovecraft', 1
),
(
    3, 'Le avventure di Tom Sawyer', './src/imgs/avventura/avventura4.jpg', 12, 'Le avventure di un giovane ragazzo ribelle nel Sud degli Stati Uniti nel XIX secolo, tra ingegnose bravate e misteri da risolvere.', 9.5, 'Mark Twain', 1
),
(
    4, 'Le mille e una notte', './src/imgs/avventura/avventura5.jpg', 14, 'Una raccolta di racconti orientali, ricca di avventure, magia e intrighi, narrati dalla leggendaria Sherazade per sopravvivere.', 17.5, 'Anonimo', 1
),
(
    5, 'Il signore degli anelli', './src/imgs/avventura/avventura6.jpg', 14, 'Una trilogia epica che segue le gesta di Frodo Baggins nella sua missione per distruggere l\'Anello del Potere e sconfiggere il Signore Oscuro Sauron.',
    12.5, 'J.R.R. Tolkien', 1
),
(
    6, 'Il giro del mondo in 80 giorni', './src/imgs/avventura/avventura7.jpg', 12, 'Il ricco eccentrico Phileas Fogg scommette che può circumnavigare il globo in soli 80 giorni, intraprendendo un viaggio avventuroso e pieno di ostacoli.', 10.5, 'Jules Verne', 1
),
(
    7, 'La storia infinita', './src/imgs/avventura/avventura8.jpg', 12, 'Un giovane ragazzo, Bastian, si immerge in un libro magico e fantastico dove scopre di avere un ruolo cruciale nella lotta per salvare il mondo di Fantasia.', 11.5, 'Michael Ende', 1
),
(
    8, 'Viaggio al centro della terra', './src/imgs/avventura/avventura9.jpg', 12, 'Un professore e i suoi compagni intraprendono un incredibile viaggio verso il centro della terra, scoprendo mondi sotterranei pieni di meraviglie e pericoli.', 10.5, 'Jules Verne', 1
),
(
    9, 'Le avventure di Huckleberry Finn', './src/imgs/avventura/avventura10.jpg', 12,
    'Le avventure di un giovane ragazzo ribelle, Huck Finn, e del suo amico Jim, un fuggitivo schiavo, lungo il fiume Mississippi.', 12.5, 'Mark Twain', 1
),
(
    10, 'La strada', './src/imgs/avventura/avventura11.jpg', 14, 'In un mondo post-apocalittico, un padre e suo figlio intraprendono un viaggio disperato attraverso un paesaggio desolato alla ricerca di speranza e salvezza.', 12.5, 'Cormac McCarthy', 1
),
(
    11, 'Il vecchio e il mare', './src/imgs/avventura/avventura12.jpg', 14, 'La struggente storia di Santiago, un vecchio pescatore cubano, e la sua epica lotta con un gigantesco pesce spada nel vasto oceano.', 12.5, 'Ernest Hemingway', 1
),
(
    12, 'Lord of the flies', './src/imgs/fantascienza/fantascienza1.jpg', 14, 'Dopo un incidente aereo, un gruppo di ragazzi si ritrova su un\'isola deserta e deve lottare per la sopravvivenza, ma il conflitto interno e la disperazione portano alla barbarie.', 12.5, 'William Golding', 2
),
(
    13, 'La mano sinistra delle tenebre', './src/imgs/fantascienza/fantascienza2.jpg', 16,'In un pianeta gelido e lontano, un ambasciatore umano deve navigare in una società aliena senza genere per garantire un\'alleanza cruciale.', 12.5, 'Ursula K. Le Guin', 2
),
(
    14, 'Blindsight', './src/imgs/fantascienza/fantascienza3.jpg', 16, 'In un futuro inquietante, un equipaggio di astronauti viene inviato per incontrare un\'entità aliena con capacità di comunicazione incomprensibili.', 12.5, 'Peter Watts', 2
),
(
    15, 'Ender\'s game', './src/imgs/fantascienza/fantascienza4.jpg', 14, 'Un giovane genio militare, Ender Wiggin, viene reclutato per allenare in segreto e guidare le forze umane nella guerra contro una razza aliena ostile.', 12.5, 'Orson Scott Card', 2
),
(
    16, 'Brave new world', './src/imgs/fantascienza/fantascienza5.jpg', 16, 'In una società distopica futuristica, il controllo totale e il conformismo sono la norma, ma un individuo inizia a mettere in discussione il sistema.', 12.5, 'Aldous Huxley', 2
),
(
    17, '1984', './src/imgs/fantascienza/fantascienza6.jpg', 16, 'Nel regime totalitario di Oceania, un uomo cerca di resistere alla sorveglianza onnipresente e alla manipolazione mentale del governo.', 12.5, 'George Orwell', 2
),
(
    18, 'Dune', './src/imgs/fantascienza/fantascienza7.jpg', 16, 'In un lontano futuro, il giovane Paul Atreides deve navigare nelle politiche complesse e nelle lotte per il potere su un pianeta desertico ricco di misteri.', 12.5, 'Frank Herbert', 2
),
(
    19, 'Childhood\'s end', './src/imgs/fantascienza/fantascienza8.jpg', 16, 'Gli umani devono affrontare una nuova era di evoluzione sotto la guida di esseri alieni misteriosi che portano cambiamenti radicali alla società terrestre.', 12.5, 'Arthur C. Clarke', 2
),
(
    20, 'The hitch-hiker\'s guide to the galaxy', './src/imgs/fantascienza/fantascienza9.jpg', 14, 'Un viaggiatore spaziale terrestre viene coinvolto in avventure assurde e bizzarre mentre esplora l\'universo con una guida galattica per autostoppisti.', 12.5, 'Douglas Adams', 2
),
(
    21, 'La rifondazione di dune', './src/imgs/fantascienza/fantascienza10.jpg', 16, 'Seguito della saga di Dune, con intrighi politici, guerra e profonde riflessioni sulla religione, la natura umana e il destino dell\'universo.', 12.5, 'Frank Herbert', 2
),
(
    22, 'Darksaber', './src/imgs/fantascienza/fantascienza11.jpg', 14, 'In un universo di Star Wars, Luke Skywalker e i suoi alleati devono affrontare una nuova minaccia con l\'ascesa di un\'arma temibile.', 12.5, 'Kevin J. Anderson', 2
),
(
    23, 'La missione enceladd', './src/imgs/fantascienza/fantascienza12.jpg', 14,'Una spedizione verso la luna di Saturno, Encelado, rivela misteri sconvolgenti che mettono in discussione le fondamenta della conoscenza umana.', 12.5, 'Arthur C. Clarke', 2
),
(
    24, 'Sherlock Holmes', './src/imgs/giallo/giallo1.jpg', 14, 'Le indagini del celebre detective Sherlock Holmes e del suo fedele compagno, il dottor Watson, risolvendo misteri intricati e crimini apparentemente insolubili.', 12.5, 'Sir Arthur Conan Doyle', 3
),
(
    25, 'The salient patient', './src/imgs/giallo/giallo2.jpg', 16, 'In una clinica psichiatrica, un paziente apparentemente normale si rivela essere un maestro manipolatore, coinvolgendo uno psichiatra in un pericoloso gioco mentale.', 12.5, 'Alex Michaelides', 3
),
(
    26, 'The last murder at the end of the world', './src/imgs/giallo/giallo3.jpg', 16, 'In un remoto villaggio artico, un detective deve risolvere un omicidio complicato e oscuro che rivela segreti sepolti da tempo.', 12.5, 'Michał Witkowski', 3
),
(
    27, 'The last Mrs. Parrish', './src/imgs/giallo/giallo4.jpg', 16,'Una donna ambiziosa si infiltra nella vita di una ricca famiglia con l\'intento di rubare il marito, ma presto scopre che anche lei è una pedina in un gioco pericoloso.', 12.5, 'Liv Constantine', 3
),
(
    28, 'I delitti di Kingfisher Hill', './src/imgs/giallo/giallo5.jpg', 16, 'Il detective Hercule Poirot si trova alle prese con un intricato caso di omicidio su un lussuoso treno, dove ogni passeggero ha un motivo per commettere il crimine.', 12.5,'Sophie Hannah', 3
),
(
    29, 'L\'ombra del delitto', './src/imgs/giallo/giallo6.jpg', 16, 'Una donna inizia a sospettare che il suo nuovo vicino di casa potrebbe essere un pericoloso assassino, ma le sue indagini mettono a rischio la sua stessa vita.', 12.5, 'Christi Daugherty', 3
),
(
    30, 'The guest list', './src/imgs/giallo/giallo7.jpg', 16, 'Durante un matrimonio esclusivo su un\'isola remota, segreti sepolti vengono alla luce e vecchie rivalità sfociano in un omicidio che sconvolge tutti gli invitati.', 12.5, 'Lucy Foley', 3
),
(
    31, 'L\'assasino invisibile', './src/imgs/giallo/giallo8.jpg', 16, 'Un serial killer che lascia dietro di sé solo cadaveri invisibili mette a dura prova un detective e una profiler, sfidandoli a catturare un assassino che sembra impossibile da individuare.', 12.5, 'James Patterson', 3
),
(
    32, 'L\'enigma dell\'orologio spezzato', './src/imgs/giallo/giallo9.jpg', 16, 'Una giovane donna deve risolvere un misterioso omicidio legato a un antico orologio spezzato, scoprendo oscure verità nascoste nel passato della sua famiglia.', 12.5, 'Ruth Ware', 3
),
(
    33, 'La doppia vita di Sylvia West', './src/imgs/giallo/giallo10.jpg', 16, 'Dopo il sospetto suicidio di una famosa attrice, un reporter investigativo scopre un intricato intreccio di segreti, menzogne e tradimenti che potrebbe rivelare la verità.', 12.5, 'Natasha A. Salnikova', 3
),
(
    34, 'Il ritorno di Sherlock Holmes', './src/imgs/giallo/giallo11.jpg', 14, 'Sherlock Holmes torna per risolvere una serie di nuovi misteri, dimostrando ancora una volta la sua abilità deduttiva inconfondibile.', 12.5, 'Arthur Conan Doyle', 3
),
(
    35, 'Il segno dei quattro', './src/imgs/giallo/giallo12.jpg', 14, 'Sherlock Holmes e il dottor Watson devono risolvere il mistero di un tesoro scomparso, che porta a una catena di eventi che mettono a rischio la vita di tutti gli interessati.', 12.5, 'Arthur Conan Doyle', 3
),
(
    36, 'Frankenstein', './src/imgs/horror/horror1.jpg', 16, 'La storia di un giovane scienziato che, spinto dall\'ambizione e dall\'arroganza, crea una creatura mostruosa che si ribella al suo creatore.', 12.5,'Mary Shelley', 4
),
(
    37, 'Hell House', './src/imgs/horror/horror2.jpg', 16, 'Un gruppo di persone viene invitato a trascorrere una notte in una casa infestata per investigare su fenomeni paranormali, ma si trovano faccia a faccia con terrore indicibile.', 12.5, 'Richard Matheson', 4
),
(
    38, 'The ritual', './src/imgs/horror/horror3.jpg', 16, 'Un gruppo di amici intraprende un escursione in una foresta remota, solo per scoprire che sono braccati da una presenza malvagia e antica che li spinge al limite della sopravvivenza.', 12.5, 'Adam Nevill', 4
),
(
    39, 'Be loved', './src/imgs/horror/horror4.jpg', 16, 'Una giovane donna si trasferisce in una casa isolata con il suo fidanzato, ma presto scopre che la casa nasconde segreti inquietanti e pericolosi.', 12.5, 'Emma Cline', 4
),
(
    40, 'The turn of the screw', './src/imgs/horror/horror5.jpg', 16, 'Una giovane governante si trova a combattere contro forze oscure e presenze sinistre mentre cerca di proteggere due bambini in una casa infestata.', 12.5, 'Henry James', 4
),
(
    41, 'The cabin at the end of the world', './src/imgs/horror/horror6.jpg', 16, 'Una famiglia in vacanza viene presa di mira da un gruppo di cultisti, che li costringe a prendere decisioni estreme per sopravvivere a un\'apocalisse imminente.', 12.5, 'Paul Tremblay', 4
),
(
    42, 'The Shining', './src/imgs/horror/horror7.jpg', 16, 'Un uomo assume il ruolo di guardiano invernale in un hotel isolato, solo per scoprire che l\'hotel nasconde presenze malevole che minacciano la sua stessa sanità mentale.', 12.5, 'Stephen King', 4
),
(
    43, 'Son of Rosemary', './src/imgs/horror/horror8.jpg', 16, 'Il figlio di Rosemary, Adrian, cresciuto sotto l\'influenza sinistra del padre demoniaco, si trova coinvolto in un destino oscuro e sinistro che minaccia il mondo intero.', 12.5, 'Ira Levin', 4
),
(
    44, 'Bird Box', './src/imgs/horror/horror9.jpg', 16, 'In un mondo dove osservare creature misteriose porta alla pazzia e alla morte, una madre deve proteggere i suoi figli durante un viaggio pericoloso lungo un fiume.', 12.5, 'Josh Malerman', 4
),
(
   45, 'Psycho', './src/imgs/horror/horror10.jpg', 16, 'La storia di Norman Bates e del suo motel desolato, dove gli ospiti sono accolti con sorrisi sinistri e orrori indicibili.', 12.5, 'Robert Bloch', 4 
),
(
    46, 'The exorcist', './src/imgs/horror/horror11.jpg', 16, 'Un sacerdote viene chiamato per esorcizzare una ragazza posseduta dal demonio, ma si trova ad affrontare un male antico e potente che mette a rischio la sua stessa fede.', 12.5, 'William Peter Blatty',4
),
(
    47, 'Misery', './src/imgs/horror/horror12.jpg', 16, 'Dopo un incidente d\'auto, un famoso scrittore è tenuto prigioniero da una sua fan ossessiva, che lo costringe a scrivere il seguito del suo libro preferito.', 12.5, 'Stephen King', 4
),
(
    48, 'Romeo e Giulietta', './src/imgs/romance/romance1.jpg', 14, 'Una delle storie d\'amore più celebri di tutti i tempi, che narra della passione travolgente e della tragedia di due giovani amanti divisi da famiglie nemiche.', 12.5, 'William Shakespeare', 5
),
(
    49, 'Orgoglio e pregiudizio', './src/imgs/romance/romance2.jpg', 14, 'Una commedia romantica classica che racconta la storia dell\'orgogliosa Elizabeth Bennet e del riservato Mr. Darcy, i cui pregiudizi iniziali si trasformano in amore.', 12.5, 'Jane Austen', 5
),
(
    50, 'Anna Karenina', './src/imgs/romance/romance3.jpg', 16, 'Un epico romanzo di amore e tragedia ambientato nella Russia aristocratica, che esplora le relazioni umane complesse e le conseguenze delle scelte sbagliate.', 12.5, 'Leo Tolstoy', 5
),
(
    51, 'Il diario di Mr. Darey', './src/imgs/romance/romance4.jpg', 14, 'La storia epistolare di un gentiluomo del XIX secolo, le cui vicende sentimentali e le riflessioni sull\'amore e la società rivelano un ritratto intimo dell\'epoca.', 12.5, 'Arthur Conan Doyle', 5
),
(
    52, 'La ragazza con l\'orecchino di perla', './src/imgs/romance/romance5.jpg', 14, 'Inspirato al celebre dipinto di Vermeer, questo romanzo immagina la vita dietro le quinte di una delle opere d\'arte più enigmatiche della storia.', 12.5, 'Tracy Chevalier', 5
),
(
    53, 'Le parole che non ti ho detto', './src/imgs/romance/romance6.jpg',  14, 'Una toccante storia d\'amore tra due adolescenti, segnata dalla comunicazione non detta e dai segreti tenuti nascosti, che li spinge a confrontarsi con la verità.', 12.5, 'Jojo Moyes', 5
),
(
    54, 'L\'amore bugiardo', './src/imgs/romance/romance7.jpg', 16, 'Una storia di passione e inganno, dove le bugie e i tradimenti minacciano di distruggere una famiglia apparentemente perfetta.', 12.5, 'Gillian Flynn', 5
),
(
    55, 'Carolina Moon', './src/imgs/romance/romance8.jpg', 14, 'Una donna deve confrontarsi con il suo oscuro passato quando il suo primo amore torna nella sua vita, portando con sé segreti sepolti e pericoli inaspettati.', 12.5, 'Nora Roberts', 5
),
(
    56, 'The Midsight Rose', './src/imgs/romance/romance9.jpg', 14, 'Una giovane donna, erede di una ricca famiglia, deve scegliere tra il suo dovere di sposare un nobile e il suo amore per un misterioso musicista.', 12.5, 'Lucinda Riley', 5
),
(
    57, 'The notebook', './src/imgs/romance/romance10.jpg', 14, 'Una tenera storia d\'amore che attraversa decenni, raccontata attraverso le pagine di un diario tenuto da un uomo che si aggrappa al ricordo del suo grande amore.', 12.5, 'Nicholas Sparks', 5
),
(
    58, 'Noi due come in un sogno', './src/imgs/romance/romance11.jpg', 14, 'Due sconosciuti si incontrano per caso in una notte magica a New York e si ritrovano a vivere un\'intensa storia d\'amore, ma il destino potrebbe mettere alla prova il loro amore.', 12.5, 'Federico Moccia', 5
),
(
    59, 'Nei tuoi occhi', './src/imgs/romance/romance12.jpg', 14, 'Una storia di amore e perdono, dove una donna deve affrontare', 12.5, 'Nicholas Sparks', 5
),
(
    60, 'The girl on the train', './src/imgs/thriller/thriller1.jpg', 16, 'La vita di una donna prende una svolta inaspettata quando diventa ossessionata dalla vita di una coppia che osserva dal finestrino del treno, solo per trovarsi coinvolta in un mistero di scomparsa.', 12.5, 'Paula Hawkins', 6
),
(
    61, 'The Da Vinci Code', './src/imgs/thriller/thriller2.jpg', 16, 'Un simbologo e una criptologa si trovano coinvolti in una caccia al tesoro globale per risolvere un enigma legato a segreti millenari e società segrete.', 12.5, 'Dan Brown', 6
),
(
    62, 'The silence of the lambs', './src/imgs/thriller/thriller3.jpg', 16, 'Una giovane agente dell\'FBI deve collaborare con un brillante ma pericoloso serial killer imprigionato per catturare un altro assassino in libertà, immergendosi in un mondo oscuro e disturbante.', 12.5, 'Thomas Harris', 6
),
(
    63, 'In the woods', './src/imgs/thriller/thriller4.jpg', 16, 'Un detective irlandese deve affrontare i suoi demoni del passato quando indaga su un omicidio che potrebbe essere collegato alla scomparsa della sua infanzia.', 12.5, 'Tana French', 6
),
(
    64, 'The girl without the dragon tattoo', './src/imgs/thriller/thriller5.jpg', 16, 'Un giornalista e una hacker talentuosa si trovano coinvolti in un intrigo di corruzione e violenza quando indagano su un caso di scomparsa di una giovane donna avvenuta quarant\'anni prima.', 12.5, 'Stieg Larsson', 6
),
(
    65, 'Behind closed doors', './src/imgs/thriller/thriller6.jpg', 16, 'Una donna scopre che il suo affascinante marito nasconde un lato oscuro e pericoloso dietro porte chiuse, costringendola a lottare per la sua stessa sopravvivenza.', 12.5, 'B.A. Paris', 6
),
(
    66, 'The bourne identity', './src/imgs/thriller/thriller7.jpg', 16, 'Un uomo senza memoria, ma con abilità straordinarie, si trova coinvolto in una cospirazione internazionale che lo porta a mettere in discussione la sua stessa identità e le sue motivazioni.', 12.5, 'Robert Ludlum', 6
),
(
    67, 'The cuckoo\'s calling', './src/imgs/thriller/thriller8.jpg', 16,
'Un detective privato e la sua assistente si trovano a investigare su un presunto suicidio che si rivela essere un omicidio complicato, esplorando gli strati più oscuri e nascosti della società britannica.', 12.5, 'Robert Galbraith (J.K. Rowling)', 6
),
(
     68, 'Gone girl', './src/imgs/thriller/thriller9.jpg', 16, 'La scomparsa di una donna sposata porta a una caccia mediatica e a sconvolgenti rivelazioni sulla sua vita privata, mettendo in discussione la verità e la fiducia nella coppia.', 12.5, 'Gillian Flynn', 6
),
(
     69, 'The woman in the window', './src/imgs/thriller/thriller10.jpg', 16, 'Una donna con agorafobia testimonia un crimine che avviene di fronte alla sua finestra, ma la sua storia viene messa in discussione quando la verità viene distorta dalle sue stesse paure e illusioni.', 12.5, 'A.J. Finn', 6
),
(
    70, 'Il simbolo perduto', './src/imgs/thriller/thriller11.jpg', 16, 'Il professore di simbologia Robert Langdon si trova coinvolto in un complotto che coinvolge antiche società segrete, simboli nascosti e una verità che potrebbe cambiare il corso della storia.', 12.5, 'Dan Brown', 6
),
(
    71, 'The woman in cabin 10', './src/imgs/thriller/thriller12.jpg', 16, 'Una giornalista in vacanza su uno yacht di lusso è testimone di un presunto omicidio, ma nessuno sembra credere alla sua storia, costringendola a indagare da sola in un ambiente claustrofobico.', 12.5, 'Ruth Ware', 6
)
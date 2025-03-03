
function Animal(type, name, length, weight, lifespan, food, description, found, image) {
    this.type = type; // Added type to distinguish between all animals
    this.name = name;
    this.length = length;
    this.weight = weight;
    this.lifespan = lifespan;
    this.food = food;
    this.description = description;
    this.found = found;
    this.image = image;
}

let mammals = [
    new Animal("mammal", "Echidna", 76, 10, 50, "insects", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus. The short-beaked echidna (Tachyglossus aculeatus), also called the short-nosed echidna, is one of four living species of echidna, and the only member of the genus Tachyglossus. It is covered in fur and spines and has a distinctive snout and a specialised tongue, which it uses to catch its insect prey at a great speed. Like the other extant monotremes, the short-beaked echidna lays eggs; the monotremes are the only living group of mammals to do so. The short-beaked echidna has extremely strong front limbs and claws, which allow it to burrow quickly with great power. As it needs to be able to survive underground, it has a significant tolerance to high levels of carbon dioxide and low levels of oxygen. It has no weapons or fighting ability but deters predators by curling into a ball and protecting itself with its spines. It cannot sweat or deal well with heat, so it tends to avoid daytime activity in hot weather. It can swim if needed. The snout has mechanoreceptors and electroreceptors that help the echidna to detect its surroundings.", "Throughout Australia", "../images/echidna.jpg"),

    new Animal("mammal", "Tasmanian Devil", 70, 10, 50, "A predator (eats meat from other animals like wallabies and wombats", " The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion. It is a most unusual mammal, It is also a marsupial, related to koalas and kangaroos. Why the “fiery” name and reputation for something the size of a small dog? Devils are said to have fierce tempers! Their oversize head, neck, and jaws are well suited to crushing bones. They make eerie growls while searching for food at night. And when a group of devils feeds together at a carcass, harsh screeching and spine-chilling screams can be heard. Tasmanian devils have behaviors that may seem odd or scary to us, but they have a different meaning in devil society.", "Tasmania", "../images/tasmanian devil.jpg"),

    new Animal("mammal", "Quokka", 50, 3, 10, "Plant eaters", "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws. Quokkas have a promiscuous mating system.After a month of gestation, females give birth to a single baby called a joey. Females can give birth twice a year and produce about 17 joeys during their lifespan. The joey lives in its mother's pouch for six months. Once it leaves the pouch, the joey relies on its mother for milk for two more months and is fully weaned around eight months after birth. Females sexually mature after roughly 18 months. When a female quokka with a joey in her pouch is pursued by a predator, she may drop her baby onto the ground; the joey produces noises which may serve to attract the predator's attention, while the mother escapes.", "Rottnest Island and a few places on mainland Western Australia", "../images/quokka.jpg")
];

let reptiles = [
    new Animal("Reptile", "Frill-necked lizard", 90, 1, 20, "small insects and spiders", "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.", "Northern  Austalia", "../images/frill-necked lizard.jpg",),

    new Animal("Reptile", "Hawksbill Turtle", 50, 80, 50, "sponges, jellyfish, seaplants", "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length", "Tropical coasts of Queensland, Northern Territory and Western Australia", "../images/hawksbill turtle.jpg",),


    new Animal("Reptile", "Perentie", 250, 20, 20, "Carnivore, animals like kangaroos, rabbits, lizards and birds",
        "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
         "Desert", "../images/perentie.jpg")
];

let birds = [
    new Animal("Bird", "Cassowary", 117, 44, 20, "Plants matter like fruit ,insects and small animals like mice amd lizards",
        "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
        "Queensland", "../images/cassowary.jpg"),

    new Animal("Bird", "Kookaburra", 43, 0.003, 20, "Insects and smalll animals including snakes, frogs, lizards",
        "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
        "Throughout Austalia", "../images/Kookaburra.jpg"),

    new Animal("Bird", "Yellow Tailed Black Cockatoo",  65, 0.9, 41, "Fruit, seeds, plant",
        "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
        "SE Austalia", "../images/yellowtailedblackcockatoo.jpg")
];

let reptilesContent = [
    new Content("Reptiles at Nature’s Zoo 🦎🐍🐢",
                "Reptiles have roamed the Earth for millions of years, adapting to extreme environments and developing incredible survival skills. At Nature’s Zoo, you can witness some of the most powerful, unique, and rare reptiles, from giant lizards to majestic sea turtles!"
    ),

    new Content("🦎 Perentie – Australia’s Largest Monitor Lizard",
                "The Perentie is Australia’s biggest lizard, growing up to 2.5 meters (8 feet) long! These fast and intelligent reptiles use their long forked tongues to detect prey from far away. Watch as they climb, dig, and hunt in their habitat."
    ),

    new Content("🦖 Frill-Necked Lizard – The Fearless Defender",
                "One of the most unique reptiles, the frill-necked lizard is famous for its large, fan-like frill that flares out when it feels threatened. These quick lizards can even run on two legs, making them look like tiny dinosaurs in action!"
    ),

    new Content("🐢 Hawksbill Turtle – The Ocean Wanderer",
                "The Hawksbill Turtle is one of the most beautiful and critically endangered sea turtles. Recognized by its narrow beak and stunning patterned shell, this turtle plays a crucial role in maintaining coral reef health by eating sponges. Watch these graceful swimmers glide effortlessly through the water in our aquatic habitat!"
    ),

]

function Content (subHeading,maincontent){
    this.subHeading = subHeading,
    this.maincontent = maincontent
}

let homeContent = [
    new Content("Experience the Wild Like Never Before!",
                "Step into Nature's Zoo, where adventure meets education! Explore diverse habitats, discover amazing animals, and learn about the importance of wildlife conservation. Whether you love majestic mammals, fascinating reptiles, or colorful birds, we have something for everyone!"
    ),

    new Content("Mammals - The Heart of the Wild",
                "From the mighty African lions to the playful red pandas, our mammal zone is home to incredible creatures from around the world. Don't miss our elephant sanctuary and the adorable lemurs in our rainforest habitat!"
    ),

    new Content("Reptiles - The Ancient Survivors",
                "Enter the world of cold-blooded wonders! Watch the powerful crocodiles, slithering pythons, and the rare Komodo dragon in action. Discover how these reptiles have adapted to their environments over millions of years."
    ),

    new Content("Birds - The Sky's the Limit",
                "Walk through our free-flight aviary, where you'll be surrounded by vibrant macaws, flamingos, and owls. Experience the grace of eagles and hawks in our Birds of Prey exhibit!"
    )
]

let mammalsContent = [
    new Content("Mammals at Nature's Zoo 🦘🐨🐻",
                "Mammals are some of the most fascinating creatures on Earth, known for their warm-blooded nature, fur or hair, and ability to nurse their young. At Nature's Zoo, we house a diverse collection of mammals, from playful marsupials to powerful predators!"
    ),

    new Content("🦔 Echidna - The Egg-Laying Mammal",
                "One of only two monotremes in the world, the echidna is a spiky, burrowing creature that lays eggs yet feeds its young with milk! Watch them use their long, sticky tongues to feast on ants and termites."
    ),

    new Content("🐻‍❄️ Tasmanian Devil - The Feisty Carnivore",
                "These small but mighty marsupials are known for their powerful jaws and loud screeches. At Nature's Zoo, see them in action as they scavenge and play!"
    ),

    new Content("😊Quokka - The Happiest Animal on Earth",
                "Known for their adorable smiles, quokkas are friendly, curious marsupials native to Australia. Come see them hop around and interact with their environment!"
    ),

]

let birdsContent = [
    new Content("Birds at Nature's Zoo 🦜🦢🦅",
                "Birds are among the most diverse and fascinating creatures on Earth, known for their bright plumage, melodic calls, and incredible flight abilities. At Nature's Zoo, you can experience a wide variety of birds, from powerful raptors to colorful songbirds!"
    ),

    new Content("🦤 Cassowary - The Rainforest Guardian",
                "One of the world's most unique and powerful flightless birds, the cassowary is known for its vibrant blue skin, helmet-like casque, and dagger-like claws. These shy but strong birds play a crucial role in rainforest ecosystems by spreading seeds."
    ),

    new Content("😂 Kookaburra - The Laughing Bird",
                "Famous for its distinctive laughing call, the kookaburra is a type of kingfisher found in Australia. Listen for their cheerful sounds as they perch in the trees!"
    ),

    new Content("⚫🟡 Yellow-Tailed Black Cockatoo - The Majestic Parrot",
                "A rare and strikingly beautiful parrot, the yellow-tailed black cockatoo is known for its deep black feathers, bright yellow cheek patches, and long yellow tail feathers. These intelligent birds are highly social and can often be seen gliding gracefully in flocks.",
                
    )
]

const allAnimals = [...mammals, ...birds, ...reptiles]; //spread operator

export {allAnimals,mammals,birds,reptiles, homeContent,mammalsContent,birdsContent, reptilesContent};


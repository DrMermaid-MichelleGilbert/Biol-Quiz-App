const questions = [
// =====================================================
// EXAM 1 - EVOLUTION
// =====================================================
  {
    question: "Which of the following is a characteristic of all living organisms?",
    category: "Evolution",
    exam: "Exam 1", difficulty:  "Easy",
    options: ["Photosynthesis", "Cellular organization", "Movement", "Multicellularity"],
    correct: 1,
    explanations: [
      "Not all organisms perform photosynthesis.",
      "All living things are made of one or more cells.",
      "Not all organisms move (e.g., plants).",
      "Some organisms are unicellular."
    ]
  },
  {
    question: "What is the primary mechanism that drives evolution?",
    category: "Evolution",
    exam: "Exam 1", difficulty:  "Easy",
    options: [
      "Organisms change because they need to survive",
      "Individuals evolve during their lifetime",
      "Differential survival and reproduction",
      "All traits are equally passed on"
    ],
    correct: 2,
    explanations: [
      "Common misconception.",
      "Individuals do not evolve.",
      "Natural selection drives evolution.",
      "Traits are not equally likely."
    ]
  },
{
  question: "What is the primary mechanism that drives evolution by natural selection?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Organisms change because they need to survive",
    "Individuals evolve during their lifetime",
    "Differential survival and reproduction of individuals",
    "All traits are equally likely to be passed on"
  ],
  correct: 2,
  explanations: [
    "This reflects a common misconception—organisms do not change because they 'need' to.",
    "Evolution occurs at the population level, not within individuals.",
    "Traits that improve survival/reproduction become more common.",
    "Some traits are favored due to environmental pressures."
  ]
},
{
  question: "Which statement best describes evolution?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Change in individuals over time",
    "Change in allele frequencies in a population",
    "Growth of organisms during development",
    "Adaptation within a single organism"
  ],
  correct: 1,
  explanations: [
    "Individuals do not evolve—populations do.",
    "Evolution is defined as a change in allele frequencies.",
    "Growth is development, not evolution.",
    "Adaptation occurs across generations, not within one organism."
  ]
},
{
  question: "Which of the following provides the raw material for evolution?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Natural selection",
    "Genetic variation",
    "Migration",
    "Reproduction"
  ],
  correct: 1,
  explanations: [
    "Natural selection acts on variation but does not create it.",
    "Variation is necessary for selection to occur.",
    "Migration can introduce variation but does not generate it initially.",
    "Reproduction passes traits but doesn't necessarily create new ones."
  ]
},
  {
    question: "Why is carbon essential for life?",
    category: "Chemistry of Life",
    exam: "Exam 1", difficulty:  "Easy",
    options: [
      "Most abundant element",
      "Forms four bonds",
      "Only found in life",
      "Dissolves easily"
    ],
    correct: 1,
    explanations: [
      "Not true.",
      "Enables complex molecules.",
      "Incorrect.",
      "Not the main reason."
    ]
  },
{
  question: "In a phylogenetic tree, what does a branch point (node) represent?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "An individual organism",
    "A point where one species becomes extinct",
    "A common ancestor shared by lineages",
    "The most advanced species"
  ],
  correct: 2,
  explanations: [
    "Phylogenies represent populations, not individuals.",
    "Nodes are not extinction events.",
    "A node represents a common ancestor.",
    "There is no concept of 'most advanced' in evolution."
  ]
},
{
  question: "Which of the following best describes a phylogenetic tree?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "A diagram showing which organisms are most complex",
    "A chart ranking organisms from primitive to advanced",
    "A hypothesis about evolutionary relationships",
    "A timeline of individual organism lifespans"
  ],
  correct: 2,
  explanations: [
    "Phylogenies are not based on complexity.",
    "Evolution does not have rankings.",
    "Phylogenetic trees are scientific hypotheses.",
    "They do not track individual lifespans."
  ]
},
{
  question: "Which mechanism of evolution involves random changes in allele frequencies?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Natural selection",
    "Genetic drift",
    "Gene flow",
    "Mutation"
  ],
  correct: 1,
  explanations: [
    "Natural selection is non-random.",
    "Genetic drift is random change.",
    "Gene flow involves movement between populations.",
    "Mutation introduces new alleles, not frequency changes alone."
  ]
},
{
  question: "Which mechanism of evolution results from individuals moving between populations?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Mutation",
    "Natural selection",
    "Gene flow",
    "Genetic drift"
  ],
  correct: 2,
  explanations: [
    "Mutation creates variation.",
    "Natural selection depends on differential survival.",
    "Gene flow occurs when individuals move between populations.",
    "Drift is random change."
  ]
},
{
  question: "Approximately how old is life on Earth?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "About 4.5 million years",
    "About 500 million years",
    "About 3.5 to 4 billion years",
    "About 10,000 years"
  ],
  correct: 2,
  explanations: [
    "This is far too recent.",
    "This underestimates the age of life.",
    "Life is approximately 3.5 to 4 billion years old.",
    "This reflects a non-scientific estimate."
  ]
},
{
  question: "A population of bacteria becomes resistant to an antibiotic over several generations. Which mechanism best explains this change?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Bacteria developed resistance because they needed it",
    "Resistant bacteria survived and reproduced more successfully",
    "All bacteria became resistant at the same time",
    "The antibiotic caused all bacteria to mutate"
  ],
  correct: 1,
  explanations: [
    "Organisms do not evolve because they need to.",
    "Natural selection favors resistant individuals.",
    "Resistance is not uniform across all individuals.",
    "Mutations occur randomly, not directed by antibiotics."
  ]
},
{
  question: "A population of beetles includes both green and brown individuals. Birds eat more green beetles. What will likely happen over time?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Green beetles will become more common",
    "Brown beetles will become more common",
    "Both colors will remain equally common",
    "Beetles will change color during their lifetime"
  ],
  correct: 1,
  explanations: [
    "Green beetles are selected against.",
    "Brown beetles survive at higher rates.",
    "Selection changes frequencies.",
    "Individuals do not change traits like this."
  ]
},
{
  question: "A hurricane randomly kills many individuals in a population. The surviving population has different allele frequencies. What mechanism occurred?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Natural selection",
    "Genetic drift",
    "Gene flow",
    "Mutation"
  ],
  correct: 1,
  explanations: [
    "No selection based on fitness occurred.",
    "Random events can alter allele frequencies.",
    "No migration occurred.",
    "Mutation was not the main factor."
  ]
},
{
  question: "A group of individuals migrates into a population and introduces new alleles. What is this an example of?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Mutation",
    "Genetic drift",
    "Gene flow",
    "Natural selection"
  ],
  correct: 2,
  explanations: [
    "Mutation creates new variation internally.",
    "Drift is random change.",
    "Gene flow involves movement between populations.",
    "Selection depends on fitness differences."
  ]
},
{
  question: "In a phylogenetic tree, two species share a more recent common ancestor than either does with a third species. What does this indicate?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "They evolved earlier",
    "They are more closely related",
    "They are more complex",
    "They share identical DNA"
  ],
  correct: 1,
  explanations: [
    "Timing is not the key idea.",
    "Recent ancestry indicates closer relationship.",
    "Complexity is not represented.",
    "They are not genetically identical."
  ]
},
{
  question: "Which of the following best describes natural selection?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Individuals change traits during their lifetime",
    "Traits that increase reproductive success become more common in a population",
    "All individuals contribute equally to the next generation",
    "Organisms evolve because they need to survive"
  ],
  correct: 1,
  explanations: [
    "Individuals do not evolve—populations do.",
    "Traits that improve reproductive success become more common over generations.",
    "Reproduction is not equal among individuals.",
    "Evolution is not driven by need."
  ]
},
{
  question: "What is meant by 'fitness' in evolutionary biology?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Strength and physical ability",
    "Ability to survive and reproduce",
    "Speed of movement",
    "Size of the organism"
  ],
  correct: 1,
  explanations: [
    "Biological fitness is not defined by physical strength.",
    "Biological fitness is measured by reproductive success.",
    "Speed may help survival, but is not the definition.",
    "Size alone does not determine fitness."
  ]
},
{
  question: "Which of the following is an example of adaptation?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "A bird learning to sing a new song",
    "A population of insects developing resistance to pesticides",
    "A person growing taller",
    "An organism changing behavior during life"
  ],
  correct: 1,
  explanations: [
    "Learning is not evolution, but is associated with animal behavior and cognition.",
    "Genetic traits change across generations in populations.",
    "Growth is development, not evolution.",
    "Behavioral changes within a lifetime are not adaptations."
  ]
},
{
  question: "Which of the following best describes a population?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "A group of individuals of different species in one area",
    "All organisms on Earth",
    "A group of individuals of the same species in one area",
    "A single organism"
  ],
  correct: 2,
  explanations: [
    "That describes a community.",
    "This is much too broad.",
    "Evolution occurs within populations.",
    "A population requires multiple individuals."
  ]
},
{
  question: "A population of bacteria initially contains a few antibiotic-resistant individuals. After antibiotic exposure, nearly all surviving bacteria are resistant. What explains this?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Antibiotics caused bacteria to develop resistance",
    "Resistant individuals already existed and were selected for",
    "All bacteria became resistant through mutation simultaneously",
    "Resistance developed because bacteria needed it to survive"
  ],
  correct: 1,
  explanations: [
    "Antibiotics do not induce directed change.",
    "Pre-existing variation is selected.",
    "Mutations do not happen simultaneously like this.",
    "Need does not drive evolution."
  ]
},
{
  question: "A small population colonizes a new island. The allele frequencies differ from the original population purely by chance. Which process is this?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Natural selection",
    "Founder effect (genetic drift)",
    "Gene flow",
    "Mutation"
  ],
  correct: 1,
  explanations: [
    "Selection involves fitness differences.",
    "A small founding group leads to drift.",
    "Gene flow would require movement between populations.",
    "Mutation is not the primary cause here."
  ]
},
{
  question: "In a changing environment, a trait that was once beneficial becomes disadvantageous. What does this demonstrate about evolution?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Evolution always produces perfect traits",
    "Fitness is dependent on environment",
    "Traits do not change once established",
    "All traits are equally beneficial"
  ],
  correct: 1,
  explanations: [
    "Evolution does not produce perfection.",
    "Fitness depends on environmental context.",
    "Traits can change in frequency.",
    "Traits differ in their advantages."
  ]
},
{
  question: "Two populations of the same species become geographically separated. Over time, they accumulate genetic differences. Which processes could contribute to this divergence?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Only mutation",
    "Mutation, natural selection, and genetic drift",
    "Only gene flow",
    "Only reproduction"
  ],
  correct: 1,
  explanations: [
    "Mutation alone is not sufficient.",
    "Multiple mechanisms drive divergence.",
    "Gene flow would reduce differences.",
    "Reproduction alone does not explain divergence."
  ]
},
{
  question: "A trait increases in frequency in a population even though it does not improve survival or reproduction. Which mechanism is most likely responsible?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Natural selection",
    "Genetic drift",
    "Adaptation",
    "Mutation directed by need"
  ],
  correct: 1,
  explanations: [
    "Selection requires fitness advantage.",
    "Drift can change frequencies randomly.",
    "Adaptation implies benefit.",
    "Mutations are not directed by need."
  ]
},
{
  question: "Mutation is important in evolution because it:",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Always improves fitness",
    "Introduces new genetic variation",
    "Occurs only when needed",
    "Eliminates harmful traits"
  ],
  correct: 1,
  explanations: [
    "Mutations can be beneficial, neutral, or harmful.",
    "Mutations create new variation.",
    "Mutations are random, not purposeful.",
    "Selection, not mutation alone, affects trait frequency."
  ]
},
{
  question: "Which situation is an example of genetic drift?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "A drought favors taller plants",
    "A random event kills part of a population",
    "Birds choose the most colorful mates",
    "Migration increases genetic diversity"
  ],
  correct: 1,
  explanations: [
    "That describes natural selection.",
    "Random events can change allele frequencies.",
    "This describes sexual selection.",
    "That describes gene flow."
  ]
},
{
  question: "Gene flow has what effect on populations?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Eliminates genetic variation",
    "Introduces new alleles into a population",
    "Prevents reproduction",
    "Only occurs through mutation"
  ],
  correct: 1,
  explanations: [
    "Gene flow can increase variation.",
    "Movement of individuals introduces new alleles.",
    "It does not prevent reproduction.",
    "Gene flow is different from mutation."
  ]
},
{
  question: "Why does natural selection not lead to perfect organisms?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Evolution has a goal of imperfection",
    "Selection works only on existing variation and is influenced by changing environments",
    "All traits are equally selected",
    "Mutations are always harmful"
  ],
  correct: 1,
  explanations: [
    "Evolution has no goal.",
    "Selection works with what exists and environments change.",
    "Traits are not equally favored.",
    "Mutations are not always harmful."
  ]
},
{
  question: "Which of the following best describes a phylogenetic tree?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "A diagram showing the size of organisms",
    "A depiction of evolutionary relationships among species",
    "A ranking of organisms from primitive to advanced",
    "A chart of population sizes"
  ],
  correct: 1,
  explanations: [
    "Size is not represented in phylogenies.",
    "Phylogenies represent evolutionary relationships.",
    "Evolution does not have rankings.",
    "Population size is not what phylogenies show."
  ]
},
{
  question: "If two species share a recent common ancestor, they are:",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "More complex than others",
    "More closely related to each other",
    "The same species",
    "Genetically identical"
  ],
  correct: 1,
  explanations: [
    "Complexity is not relevant.",
    "Recent common ancestry means closer evolutionary relationship.",
    "They remain distinct species.",
    "They are not genetically identical."
  ]
},
{
  question: "A population of insects contains variation in coloration. After a volcanic eruption darkens the environment, darker individuals become more common. What explains this change?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Dark insects changed color to survive",
    "Darker individuals had higher survival and reproduction",
    "The environment directly caused all insects to darken",
    "All insects developed the same mutation"
  ],
  correct: 1,
  explanations: [
    "Individuals do not change traits in response to need.",
    "Natural selection favored darker individuals with higher fitness.",
    "The environment selects but does not directly change traits.",
    "Mutations are random and not uniform across individuals."
  ]
},
{
  question: "A small isolated population shows rapid changes in allele frequency across generations. Which factor most strongly contributes?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Large population size",
    "Genetic drift",
    "Uniform selection pressures",
    "Lack of mutation"
  ],
  correct: 1,
  explanations: [
    "Large populations reduce random effects.",
    "Small populations experience strong genetic drift.",
    "Selection alone does not explain rapid random shifts.",
    "Mutation still occurs and is not absent."
  ]
},
{
  question: "Two populations experience identical environments but evolve different traits. What best explains this?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Natural selection always produces identical results",
    "Differences in starting genetic variation",
    "No evolutionary process occurred",
    "Traits are predetermined"
  ],
  correct: 1,
  explanations: [
    "Selection outcomes depend on variation present.",
    "Different starting variation leads to different evolutionary outcomes.",
    "Evolution would still occur under these conditions.",
    "Traits are influenced by variation and environment, not predetermined."
  ]
},
{
  question: "A beneficial mutation spreads slowly in a population instead of rapidly. Why might this occur?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "All mutations spread at the same rate",
    "Population size and random drift influence spread",
    "Beneficial mutations are always eliminated",
    "Selection cannot act on mutations"
  ],
  correct: 1,
  explanations: [
    "Spread depends on ecological and population context.",
    "Drift, population size, and reproduction affect spread rate.",
    "Beneficial mutations are typically favored, not eliminated.",
    "Selection acts directly on variation including mutations."
  ]
},
{
  question: "A trait remains common even though it slightly reduces survival. What could explain this?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "It increases reproductive success",
    "It is not inherited",
    "Natural selection is not acting",
    "The trait is random each generation"
  ],
  correct: 0,
  explanations: [
    "Traits can persist if they improve reproduction despite survival costs.",
    "Heritability is required for persistence.",
    "Selection is always acting in populations.",
    "Traits are inherited, not randomly recreated."
  ]
},
{
  question: "Which scenario best demonstrates gene flow preventing divergence?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Populations remain isolated over time",
    "Individuals frequently migrate between populations",
    "Mutations occur independently",
    "Genetic drift increases differences"
  ],
  correct: 1,
  explanations: [
    "Isolation increases divergence.",
    "Gene flow mixes alleles and reduces differences.",
    "Mutation alone does not homogenize populations.",
    "Drift typically increases differences."
  ]
},
{
  question: "A trait has no effect on fitness but increases in frequency. What explains this?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Natural selection",
    "Genetic drift",
    "Environmental adaptation",
    "Directed mutation"
  ],
  correct: 1,
  explanations: [
    "Selection requires fitness differences.",
    "Drift can change allele frequencies randomly.",
    "Adaptation requires fitness benefit.",
    "Mutations are not directed by need."
  ]
},
{
  question: "Why might two closely related species have very different traits?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "They share no common ancestor",
    "They experienced different selection pressures",
    "Traits are random in evolution",
    "Evolution is not predictable"
  ],
  correct: 1,
  explanations: [
    "They share a common ancestor despite differences.",
    "Different environments lead to different adaptations.",
    "Traits are influenced by selection and variation.",
    "Evolution has patterns based on mechanisms."
  ]
},
{
  question: "What limits the speed of natural selection?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Lack of mutation and variation",
    "Too much variation",
    "Independent assortment",
    "Uniform environments"
  ],
  correct: 0,
  explanations: [
    "Selection can only act on existing variation.",
    "Variation generally supports selection.",
    "This does not directly limit selection speed.",
    "Environment alone does not limit selection without variation."
  ]
},
{
  question: "Why does environmental change not always lead to adaptation?",
  category: "Evolution",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Organisms always adapt successfully",
    "Populations may lack suitable variation",
    "Selection stops during change",
    "Mutations increase immediately"
  ],
  correct: 1,
  explanations: [
    "Adaptation is not guaranteed.",
    "Without variation, selection cannot produce adaptation.",
    "Selection continues in changing environments.",
    "Mutations remain random and gradual."
  ]
},
// =====================================================
// EXAM 1 - CHEMISTRY OF LIFE
// =====================================================
{
  question: "What property of water allows it to moderate temperature?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Low heat capacity",
    "High specific heat",
    "Hydrophobic interactions",
    "Covalent bonding"
  ],
  correct: 1,
  explanations: [
    "Water actually has a high heat capacity.",
    "It can absorb heat without large temperature changes.",
    "Hydrophobic interactions are not the main reason here.",
    "Covalent bonds exist in water but do not explain temperature stability."
  ]
},
{
  question: "Why are hydrogen bonds important in water?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "They make water nonpolar",
    "They hold water molecules together",
    "They break easily and never reform",
    "They create ionic bonds in water"
  ],
  correct: 1,
  explanations: [
    "Water is polar, not nonpolar.",
    "Hydrogen bonds create cohesion and many properties of water.",
    "They break and reform constantly.",
    "Hydrogen bonds are not ionic bonds."
  ]
},
{
  question: "What type of bond involves the sharing of electrons between atoms?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Ionic bond",
    "Hydrogen bond",
    "Covalent bond",
    "Van der Waals interaction"
  ],
  correct: 2,
  explanations: [
    "Ionic bonds involve electron transfer.",
    "Hydrogen bonds are weak interactions between molecules.",
    "Covalent bonds involve sharing electrons.",
    "These are very weak interactions."
  ]
},
{
  question: "What happens in an ionic bond?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Electrons are shared equally",
    "Electrons are transferred from one atom to another",
    "Atoms do not interact",
    "Hydrogen atoms bond together"
  ],
  correct: 1,
  explanations: [
    "That describes covalent bonding.",
    "One atom loses electrons, another gains them.",
    "Atoms must interact to form bonds.",
    "Not relevant."
  ]
},
{
  question: "Why is water a polar molecule?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "It has equal distribution of charge",
    "Oxygen attracts electrons more strongly than hydrogen",
    "It contains carbon atoms",
    "It forms ionic bonds"
  ],
  correct: 1,
  explanations: [
    "Charges are uneven, not equal.",
    "Oxygen creates partial negative and positive regions.",
    "Carbon is not involved in water.",
    "Water forms covalent bonds."
  ]
},
{
  question: "What type of interaction occurs between water molecules?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Covalent bonds",
    "Hydrogen bonds",
    "Ionic bonds",
    "Peptide bonds"
  ],
  correct: 1,
  explanations: [
    "Covalent bonds are within molecules.",
    "Hydrogen bonds hold water molecules together.",
    "Not correct.",
    "Peptide bonds are in proteins."
  ]
},
{
  question: "What property of water helps it resist temperature change?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Low density",
    "High specific heat",
    "Nonpolarity",
    "Low boiling point"
  ],
  correct: 1,
  explanations: [
    "Density is not the main factor here.",
    "Water absorbs heat without large temperature shifts.",
    "Water is polar, not nonpolar.",
    "Water actually has a relatively high boiling point."
  ]
},
{
  question: "Which property of water allows it to stick to other surfaces?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Cohesion",
    "Adhesion",
    "Surface tension",
    "Evaporation"
  ],
  correct: 1,
  explanations: [
    "Cohesion is water sticking to itself.",
    "Adhesion is attraction to other materials.",
    "Surface tension is related but different.",
    "Not relevant."
  ]
},
{
  question: "Which property describes water molecules sticking to each other?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Adhesion",
    "Cohesion",
    "Polarity",
    "Density"
  ],
  correct: 1,
  explanations: [
    "Adhesion is sticking to other substances.",
    "Cohesion is water-to-water attraction.",
    "Polarity explains why but is not the property name.",
    "Not relevant."
  ]
},
{
  question: "What is the role of hydrogen bonds in water?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "They hold atoms together within a molecule",
    "They connect water molecules to each other",
    "They create ionic interactions",
    "They prevent molecules from interacting"
  ],
  correct: 1,
  explanations: [
    "Covalent bonds hold atoms together.",
    "Hydrogen bonds link separate water molecules.",
    "Not ionic interactions.",
    "Incorrect."
  ]
},
{
  question: "Why is water an effective solvent?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "It is nonpolar",
    "It can surround and interact with ions and polar molecules",
    "It repels all substances",
    "It contains carbon"
  ],
  correct: 1,
  explanations: [
    "Water is polar, not nonpolar.",
    "Polarity allows water to dissolve many substances.",
    "Water interacts with many substances.",
    "Carbon is not the reason."
  ]
},
{
  question: "Why are hydrogen bonds important for the properties of water?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "They make water nonpolar",
    "They create many of water’s unique properties",
    "They prevent water from interacting",
    "They eliminate cohesion"
  ],
  correct: 1,
  explanations: [
    "Water is polar.",
    "Hydrogen bonds give rise to cohesion, heat capacity, etc.",
    "Water interacts extensively.",
    "They contribute to cohesion, not eliminate it."
  ]
},
{
  question: "What type of bond holds the atoms within a water molecule together?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Hydrogen bonds",
    "Ionic bonds",
    "Covalent bonds",
    "Van der Waals interactions"
  ],
  correct: 2,
  explanations: [
    "Hydrogen bonds occur between molecules, not within them.",
    "Water molecules are not held together ionically.",
    "Covalent bonds hold hydrogen and oxygen together in a water molecule.",
    "These are weak intermolecular interactions."
  ]
},
{
  question: "Why does water have a high surface tension?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Hydrogen bonding between water molecules",
    "Ionic bonding within water",
    "Water molecules repel each other",
    "Water is nonpolar"
  ],
  correct: 0,
  explanations: [
    "Hydrogen bonds create strong cohesion at the surface.",
    "Water is not held together by ionic bonds.",
    "Water molecules attract, not repel.",
    "Water is polar, not nonpolar."
  ]
},
{
  question: "Why does ice float on water?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Ice is more dense than liquid water",
    "Hydrogen bonds create a more open structure in ice",
    "Ice molecules move faster",
    "Water becomes nonpolar when frozen"
  ],
  correct: 1,
  explanations: [
    "Ice is less dense, not more dense.",
    "Hydrogen bonding creates a lattice structure with more space.",
    "Molecules move less in ice, not more.",
    "Polarity does not change upon freezing."
  ]
},
{
  question: "Why does evaporation of water cool a surface?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Water absorbs heat when it evaporates",
    "Water releases heat when it evaporates",
    "Hydrogen bonds strengthen during evaporation",
    "Water becomes nonpolar when it evaporates"
  ],
  correct: 0,
  explanations: [
    "Energy is required to break hydrogen bonds, cooling the surface.",
    "Heat is not released during evaporation.",
    "Hydrogen bonds are broken, not strengthened.",
    "Polarity remains unchanged."
  ]
},
{
  question: "Which of the following substances will dissolve best in water?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Nonpolar molecules",
    "Ionic or polar substances",
    "Large hydrophobic molecules",
    "Lipids"
  ],
  correct: 1,
  explanations: [
    "Nonpolar molecules do not dissolve well in water.",
    "Water interacts strongly with polar and charged substances.",
    "Hydrophobic molecules do not dissolve well.",
    "Lipids are generally insoluble in water."
  ]
},
{
  question: "What does 'hydrophilic' mean?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Repelled by water",
    "Attracted to water",
    "Insoluble in water",
    "Nonpolar"
  ],
  correct: 1,
  explanations: [
    "That describes hydrophobic substances.",
    "Hydrophilic substances interact well with water.",
    "Hydrophilic substances are often soluble.",
    "Many hydrophilic substances are polar."
  ]
},
{
  question: "What does 'hydrophobic' mean?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Attracted to water",
    "Dissolves easily in water",
    "Repelled by water",
    "Forms hydrogen bonds easily"
  ],
  correct: 2,
  explanations: [
    "Hydrophobic substances avoid water.",
    "They do not dissolve easily.",
    "Hydrophobic substances avoid interacting with water.",
    "They generally do not form hydrogen bonds."
  ]
},
{
  question: "What is electronegativity?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "The number of protons in an atom",
    "The ability of an atom to attract electrons",
    "The total charge of an atom",
    "The size of the nucleus"
  ],
  correct: 1,
  explanations: [
    "This refers to atomic number.",
    "Electronegativity determines how strongly atoms pull electrons.",
    "Charge is related but not the same concept.",
    "Size does not define electronegativity."
  ]
},
{
  question: "Why is oxygen more electronegative than hydrogen?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "It has fewer electrons",
    "It has a stronger ability to attract electrons",
    "It is larger",
    "It forms ionic bonds only"
  ],
  correct: 1,
  explanations: [
    "Electron number is not the key factor here.",
    "Oxygen pulls electrons more strongly.",
    "Size is not the reason for electronegativity.",
    "Oxygen forms covalent bonds in water."
  ]
},
{
  question: "Which interaction is weakest?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Covalent bond",
    "Ionic bond",
    "Hydrogen bond",
    "Peptide bond"
  ],
  correct: 2,
  explanations: [
    "Covalent bonds are strong.",
    "Ionic bonds are stronger than hydrogen bonds.",
    "Hydrogen bonds are relatively weak interactions.",
    "Peptide bonds are covalent (strong)."
  ]
},
{
  question: "A molecule contains mostly nonpolar bonds. How will it interact with water?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "It will dissolve easily",
    "It will form hydrogen bonds with water",
    "It will avoid interacting with water",
    "It will form ionic bonds with water"
  ],
  correct: 2,
  explanations: [
    "Nonpolar molecules do not dissolve well.",
    "They do not form hydrogen bonds effectively.",
    "Nonpolar substances are hydrophobic.",
    "Ionic bonds are not formed here."
  ]
},
{
  question: "Why does breaking hydrogen bonds require energy input?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Hydrogen bonds are very strong covalent bonds",
    "Hydrogen bonds stabilize interactions between molecules",
    "Hydrogen bonds create ionic interactions",
    "Hydrogen bonds repel molecules"
  ],
  correct: 1,
  explanations: [
    "Hydrogen bonds are weaker than covalent bonds.",
    "Energy is required to disrupt intermolecular attractions.",
    "They are not ionic.",
    "They attract, not repel."
  ]
},
{
  question: "Which scenario best demonstrates the effect of electronegativity in water?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Water forms ionic bonds with itself",
    "Oxygen pulls electrons closer, creating partial charges",
    "Hydrogen atoms share electrons equally with oxygen",
    "Water becomes nonpolar during reactions"
  ],
  correct: 1,
  explanations: [
    "Water is not ionic.",
    "Oxygen creates partial negative and positive regions.",
    "Electrons are not shared equally.",
    "Water remains polar."
  ]
},
{
  question: "A scientist observes that a liquid has strong cohesion but does not dissolve nonpolar substances. What can be concluded?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "The liquid is nonpolar",
    "The liquid likely forms hydrogen bonds",
    "The liquid has low heat capacity",
    "The liquid repels itself"
  ],
  correct: 1,
  explanations: [
    "Nonpolar liquids do not show strong cohesion like water.",
    "Hydrogen bonding explains both properties.",
    "Heat capacity is not necessarily low.",
    "Cohesion implies attraction."
  ]
},
{
  question: "Which best explains why water is such an effective solvent in biological systems?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Its nonpolarity",
    "Its ability to form covalent bonds with all molecules",
    "Its polarity allows it to surround ions and polar molecules",
    "It breaks molecules into atoms"
  ],
  correct: 2,
  explanations: [
    "Water is polar.",
    "Water does not bond covalently with all substances.",
    "Polarity allows interaction with charged and polar substances.",
    "Water does not break molecules into atoms."
  ]
},
{
  question: "Insects can walk on the surface of water. Which property of water makes this possible?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Adhesion",
    "Cohesion",
    "Hydraulic pressure",
    "Low density"
  ],
  correct: 1,
  explanations: [
    "Adhesion involves interaction with other substances.",
    "Cohesion creates surface tension, allowing insects to walk on water.",
    "Not relevant.",
    "Density is not the key factor."
  ]
},
{
  question: "Sweating helps cool the human body because:",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Water releases heat as it evaporates",
    "Water absorbs heat as it evaporates",
    "Water becomes nonpolar",
    "Hydrogen bonds strengthen during evaporation"
  ],
  correct: 1,
  explanations: [
    "Evaporation removes heat, not releases it.",
    "Breaking hydrogen bonds requires energy, cooling the body.",
    "Polarity does not change.",
    "Hydrogen bonds are broken, not strengthened."
  ]
},
{
  question: "A molecule that dissolves easily in water is most likely:",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Nonpolar",
    "Hydrophobic",
    "Polar or charged",
    "Lipid-based"
  ],
  correct: 2,
  explanations: [
    "Nonpolar substances do not dissolve well in water.",
    "Hydrophobic substances avoid water.",
    "Polar/charged molecules interact with water.",
    "Lipids are generally insoluble."
  ]
},
{
  question: "Why does water resist rapid temperature changes in organisms?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Hydrophobic interactions",
    "High specific heat due to hydrogen bonds",
    "Low boiling point",
    "Water molecules repel each other"
  ],
  correct: 1,
  explanations: [
    "Not the main factor.",
    "Hydrogen bonds absorb energy before temperature changes.",
    "Water has relatively high boiling point.",
    "Water molecules attract, not repel."
  ]
},
{
  question: "A substance that does not dissolve in water is likely:",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Polar",
    "Hydrophilic",
    "Hydrophobic",
    "Ionic"
  ],
  correct: 2,
  explanations: [
    "Polar substances usually dissolve.",
    "Hydrophilic substances interact with water.",
    "Hydrophobic substances avoid water.",
    "Ionic substances often dissolve in water."
  ]
},
{
  question: "A molecule dissolves poorly in water but dissolves well in oil. What can be concluded?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "The molecule is polar",
    "The molecule is hydrophilic",
    "The molecule is nonpolar",
    "The molecule is ionic"
  ],
  correct: 2,
  explanations: [
    "Polar molecules dissolve in water.",
    "Hydrophilic substances interact with water.",
    "Nonpolar molecules dissolve in nonpolar substances like oil.",
    "Ionic substances typically dissolve in water."
  ]
},
{
  question: "Why does water stabilize temperature in organisms?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Water has low heat capacity",
    "Hydrogen bonds require energy to break",
    "Water is nonpolar",
    "Water absorbs no heat"
  ],
  correct: 1,
  explanations: [
    "Water has high heat capacity.",
    "Energy is required to break hydrogen bonds, buffering temperature change.",
    "Water is polar.",
    "Water absorbs and transfers heat effectively."
  ]
},
{
  question: "A decrease in hydrogen bonding between molecules would most directly affect:",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Covalent bonds",
    "Surface tension",
    "Atomic number",
    "Electron configuration"
  ],
  correct: 1,
  explanations: [
    "Covalent bonds are within molecules.",
    "Hydrogen bonding creates cohesion and surface tension.",
    "Atomic number is unrelated.",
    "Electron configuration is not affected by hydrogen bonds."
  ]
},
{
  question: "Why are ionic compounds often soluble in water?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Water is nonpolar",
    "Water surrounds ions with partial charges",
    "Ions repel water molecules",
    "Water forms covalent bonds with ions"
  ],
  correct: 1,
  explanations: [
    "Water is polar.",
    "Water stabilizes ions via electrostatic interactions.",
    "Water attracts ions, not repels them.",
    "These interactions are not covalent bonds."
  ]
},
{
  question: "What happens to molecules during evaporation that causes cooling?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Lowest-energy molecules leave",
    "Highest-energy molecules leave",
    "Molecules lose polarity",
    "Hydrogen bonds strengthen"
  ],
  correct: 1,
  explanations: [
    "Low-energy molecules remain behind.",
    "High-energy molecules escape, lowering average temperature.",
    "Polarity remains unchanged.",
    "Hydrogen bonds are broken, not strengthened."
  ]
},
{
  question: "Why does ice form a lattice structure?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Covalent bonds expand",
    "Hydrogen bonds stabilize fixed positions",
    "Ionic interactions dominate",
    "Water becomes nonpolar"
  ],
  correct: 1,
  explanations: [
    "Covalent bonds remain unchanged.",
    "Hydrogen bonding forms a structured lattice.",
    "Ionic interactions are not present.",
    "Water remains polar."
  ]
},
{
  question: "What property explains why capillary action occurs in plants?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Cohesion and adhesion",
    "Low density",
    "Nonpolarity",
    "Ionic bonding"
  ],
  correct: 0,
  explanations: [
    "Water sticks to itself and surfaces, enabling upward movement.",
    "Density is not the primary factor.",
    "Water is polar, not nonpolar.",
    "Ionic bonding is not involved."
  ]
},
{
  question: "A decrease in water polarity would most affect:",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Ability to dissolve ions",
    "Molecular mass",
    "Covalent bond formation",
    "Atomic structure"
  ],
  correct: 0,
  explanations: [
    "Polarity drives solubility of ions and polar molecules.",
    "Mass is unchanged.",
    "Covalent bonding is unaffected.",
    "Atomic structure remains constant."
  ]
},
{
  question: "Why do hydrophobic molecules cluster together in water?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "They bond covalently",
    "They are attracted to each other",
    "Water excludes them due to hydrogen bonding",
    "They become charged"
  ],
  correct: 2,
  explanations: [
    "They do not form covalent bonds.",
    "Attraction is not the primary driver.",
    "Water molecules favor bonding with each other, excluding nonpolar molecules.",
    "They do not gain charge."
  ]
},
{
  question: "Which situation best illustrates hydrogen bonding influence?",
  category: "Chemistry of Life",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Water boiling at high temperature",
    "Carbon forming four bonds",
    "Ions transferring electrons",
    "Atoms forming nuclei"
  ],
  correct: 0,
  explanations: [
    "Hydrogen bonding contributes to water’s high boiling point.",
    "This describes covalent bonding.",
    "This describes ionic bonding.",
    "This is unrelated to chemistry of life."
  ]
},
  {
    question: "Where is DNA in prokaryotes?",
    category: "Prokaryotes",
    exam: "Exam 1", difficulty:  "Easy",
    options: ["Nucleus", "Nucleoid", "Mitochondria", "Chloroplast"],
    correct: 1,
    explanations: [
      "No nucleus present.",
      "DNA is in nucleoid region.",
      "Incorrect.",
      "Incorrect."
    ]
  },
// =====================================================
// EXAM 1 - PROKARYOTES
// =====================================================
{
  question: "Which of the following is a defining characteristic of prokaryotic cells?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Presence of a nucleus",
    "Membrane-bound organelles",
    "Lack of a nucleus",
    "Multicellularity"
  ],
  correct: 2,
  explanations: [
    "Prokaryotes do not have a nucleus.",
    "They lack membrane-bound organelles.",
    "DNA is not enclosed in a nucleus.",
    "Most prokaryotes are unicellular."
  ]
},
{
  question: "What is one advantage of small size in prokaryotes?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Slower reproduction",
    "Reduced nutrient uptake",
    "Higher surface area-to-volume ratio",
    "Inability to adapt"
  ],
  correct: 2,
  explanations: [
    "Prokaryotes reproduce quickly, not slowly.",
    "Their size actually helps nutrient uptake.",
    "This allows efficient exchange with the environment.",
    "Prokaryotes are highly adaptable."
  ]
},
{
  question: "How do prokaryotic cells primarily reproduce?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Mitosis",
    "Binary fission",
    "Meiosis",
    "Fertilization"
  ],
  correct: 1,
  explanations: [
    "Mitosis occurs in eukaryotic cells.",
    "Prokaryotes reproduce by binary fission.",
    "Meiosis produces gametes in eukaryotes.",
    "Not applicable to prokaryotes."
  ]
},
{
  question: "What happens during binary fission?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Two different cells combine DNA",
    "DNA is copied and the cell splits into two identical cells",
    "Chromosomes line up and separate via spindle fibers",
    "The nucleus divides"
  ],
  correct: 1,
  explanations: [
    "That describes sexual reproduction.",
    "DNA replication followed by cell division.",
    "That is mitosis.",
    "Prokaryotes do not have a nucleus."
  ]
},
{
  question: "Which of the following is a key feature of Gram-positive bacteria?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Thin cell wall",
    "Outer membrane present",
    "Thick peptidoglycan layer",
    "No cell wall"
  ],
  correct: 2,
  explanations: [
    "Incorrect: Gram-positive have thick walls.",
    "Outer membrane is characteristic of Gram-negative bacteria.",
    "Thick peptidoglycan layer defines Gram-positive.",
    "All bacteria have a cell wall."
  ]
},
{
  question: "What is a defining feature of Gram-negative bacteria?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Thick peptidoglycan layer",
    "No membrane structures",
    "Outer membrane and thin cell wall",
    "No cell membrane"
  ],
  correct: 2,
  explanations: [
    "That describes Gram-positive bacteria.",
    "They do have membrane structures.",
    "Gram-negative have an outer membrane and thin peptidoglycan.",
    "All cells have a cell membrane."
  ]
},
{
  question: "Why is the Gram stain useful?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "It identifies viruses",
    "It distinguishes between types of bacterial cell walls",
    "It shows DNA directly",
    "It measures bacterial size"
  ],
  correct: 1,
  explanations: [
    "It is used for bacteria, not viruses.",
    "It distinguishes Gram-positive vs Gram-negative.",
    "It does not directly show DNA.",
    "It is not a measurement tool."
  ]
},
{
  question: "Which process can introduce genetic variation in prokaryotes (even without reproduction)?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Binary fission",
    "Horizontal gene transfer",
    "Mitosis",
    "Protein synthesis"
  ],
  correct: 1,
  explanations: [
    "Binary fission produces identical cells.",
    "DNA can be transferred between cells.",
    "Mitosis does not occur in prokaryotes.",
    "Protein synthesis does not create variation."
  ]
},
{
  question: "Which of the following best describes prokaryotic cells?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "They contain a nucleus",
    "They lack membrane-bound organelles",
    "They are always multicellular",
    "They are larger than eukaryotic cells"
  ],
  correct: 1,
  explanations: [
    "Prokaryotes do not have a nucleus.",
    "They lack membrane-bound organelles.",
    "Most are unicellular.",
    "They are typically smaller."
  ]
},
{
  question: "What role does the cell wall play in bacteria?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Stores genetic information",
    "Provides structure and protection",
    "Produces proteins",
    "Controls all cell processes"
  ],
  correct: 1,
  explanations: [
    "DNA storage occurs in the nucleoid region.",
    "The wall protects and maintains shape.",
    "Ribosomes produce proteins.",
    "No single structure does all processes."
  ]
},
{
  question: "Which structure is responsible for protein synthesis in prokaryotes?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Nucleus",
    "Ribosomes",
    "Cell wall",
    "Flagella"
  ],
  correct: 1,
  explanations: [
    "No nucleus in prokaryotes.",
    "Ribosomes synthesize proteins.",
    "Cell wall provides structure.",
    "Flagella aid movement."
  ]
},
{
  question: "Why do Gram-negative bacteria often show greater resistance to antibiotics?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "They lack DNA",
    "They reproduce more slowly",
    "Their outer membrane provides protection",
    "They do not have ribosomes"
  ],
  correct: 2,
  explanations: [
    "All bacteria have DNA.",
    "Reproduction rate is not the main factor.",
    "Outer membrane can block antibiotics.",
    "They do have ribosomes."
  ]
},
{
  question: "Which domain includes prokaryotic organisms?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Eukarya only",
    "Bacteria and Archaea",
    "Protista and Fungi",
    "Plants and Animals"
  ],
  correct: 1,
  explanations: [
    "Eukarya are not prokaryotes.",
    "Prokaryotes are found in Bacteria and Archaea.",
    "Protists and fungi are eukaryotic.",
    "Plants and animals are eukaryotic."
  ]
},
{
  question: "What is the function of the nucleoid region in prokaryotes?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Protein synthesis",
    "Contains genetic material",
    "Produces energy",
    "Stores nutrients"
  ],
  correct: 1,
  explanations: [
    "Protein synthesis occurs at ribosomes.",
    "The nucleoid region contains DNA.",
    "Energy production occurs at the cell membrane.",
    "Not its primary role."
  ]
},
{
  question: "Which structure allows some prokaryotes to move?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Ribosomes",
    "Flagella",
    "Cell wall",
    "Nucleoid"
  ],
  correct: 1,
  explanations: [
    "Ribosomes synthesize proteins.",
    "Flagella enable movement.",
    "Cell walls provide structure, not movement.",
    "The nucleoid contains DNA."
  ]
},
{
  question: "What is a major difference between prokaryotic and eukaryotic cells?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Prokaryotes lack DNA",
    "Prokaryotes lack membrane-bound organelles",
    "Eukaryotes lack ribosomes",
    "Eukaryotes lack cell membranes"
  ],
  correct: 1,
  explanations: [
    "Prokaryotes do have DNA.",
    "They lack membrane-bound organelles.",
    "Eukaryotes have ribosomes.",
    "All cells have membranes."
  ]
},
{
  question: "Which process is responsible for rapid population growth in prokaryotes?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Meiosis",
    "Binary fission",
    "Sexual reproduction",
    "Mitosis"
  ],
  correct: 1,
  explanations: [
    "Meiosis occurs in eukaryotes.",
    "Binary fission allows rapid reproduction.",
    "Most prokaryotes do not reproduce sexually.",
    "Mitosis does not occur in prokaryotes."
  ]
},
{
  question: "Which of the following best describes horizontal gene transfer?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "DNA passed from parent to offspring",
    "Transfer of DNA between unrelated cells",
    "Mutation of DNA within a cell",
    "Replication of DNA during division"
  ],
  correct: 1,
  explanations: [
    "That is vertical gene transfer.",
    "DNA can be transferred between different cells.",
    "Mutation creates variation within a cell.",
    "Replication copies DNA, but does not transfer between organisms."
  ]
},
{
  question: "Why are prokaryotes considered metabolically diverse?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "They all use oxygen for respiration",
    "They can obtain energy in many different ways",
    "They only perform photosynthesis",
    "They cannot survive in extreme environments"
  ],
  correct: 1,
  explanations: [
    "Not all prokaryotes use oxygen.",
    "Prokaryotes use a wide range of metabolic strategies.",
    "They use many energy sources beyond photosynthesis.",
    "Many prokaryotes thrive in extreme environments."
  ]
},
{
  question: "What role do ribosomes play in prokaryotic cells?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Store DNA",
    "Provide structure",
    "Synthesize proteins",
    "Move the cell"
  ],
  correct: 2,
  explanations: [
    "DNA is stored in the nucleoid.",
    "Structure is provided by the cell wall.",
    "Ribosomes synthesize proteins.",
    "Movement is typically via flagella."
  ]
},
{
  question: "Which of the following best explains why prokaryotes evolve quickly?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "They have large genomes",
    "They reproduce rapidly and can exchange DNA",
    "They lack genetic variation",
    "They do not experience mutation"
  ],
  correct: 1,
  explanations: [
    "Prokaryotes typically have smaller genomes.",
    "Rapid reproduction + gene transfer accelerates evolution.",
    "They often have significant variation.",
    "Mutations do occur and contribute to evolution."
  ]
},
{
  question: "Which structure protects bacteria and contributes to cell shape?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Easy",
  options: [
    "Ribosome",
    "Cell wall",
    "Flagellum",
    "Nucleoid"
  ],
  correct: 1,
  explanations: [
    "Ribosomes synthesize proteins.",
    "The cell wall provides structure and protection.",
    "Flagella provide movement.",
    "The nucleoid contains DNA."
  ]
},
{
  question: "A bacterial infection is treated with antibiotics, but some bacteria survive and reproduce. What explains this outcome?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "All bacteria became resistant during treatment",
    "Some bacteria already had resistance and survived",
    "Antibiotics caused bacteria to become resistant instantly",
    "Bacteria reproduced more slowly"
  ],
  correct: 1,
  explanations: [
    "Not all bacteria become resistant simultaneously.",
    "Pre-existing resistant bacteria survive and reproduce.",
    "Resistance is not caused directly by antibiotics.",
    "Slower reproduction is not the explanation."
  ]
},
{
  question: "A bacterium is observed moving toward a nutrient source. Which structure is most likely responsible?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Ribosome",
    "Cell wall",
    "Flagellum",
    "Nucleoid"
  ],
  correct: 2,
  explanations: [
    "Ribosomes synthesize proteins.",
    "The cell wall provides structure.",
    "Flagella allow movement.",
    "The nucleoid contains DNA."
  ]
},
{
  question: "A mutation arises in a bacterium that increases its survival in a harsh environment. What will likely happen over generations?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "The mutation disappears immediately",
    "The mutation becomes more common",
    "All bacteria change simultaneously",
    "The mutation affects only one individual permanently"
  ],
  correct: 1,
  explanations: [
    "Beneficial mutations are not immediately lost.",
    "Advantageous traits increase in frequency.",
    "Changes occur across generations, not instantly.",
    "Traits can spread through populations."
  ]
},
{
  question: "If a bacterium gains a gene from another unrelated bacterium, which process has occurred?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Binary fission",
    "Mitosis",
    "Horizontal gene transfer",
    "Mutation"
  ],
  correct: 2,
  explanations: [
    "Binary fission produces identical cells.",
    "Mitosis does not occur in prokaryotes.",
    "DNA transfer between cells is horizontal gene transfer.",
    "Mutation alters existing DNA but does not transfer it between organisms."
  ]
},
{
  question: "A microbiologist finds bacteria with thick cell walls but no outer membrane. What type are they?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Medium",
  options: [
    "Gram-negative",
    "Gram-positive",
    "Eukaryotic",
    "Viruses"
  ],
  correct: 1,
  explanations: [
    "Gram-negative bacteria have an outer membrane.",
    "Gram-positive bacteria have thick peptidoglycan walls.",
    "They are not eukaryotes.",
    "Viruses are not cells."
  ]
},
{
  question: "A bacterial population survives an antibiotic due to random genetic differences already present. What does this illustrate?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Antibiotics induce beneficial mutations",
    "Natural selection acts on existing variation",
    "Bacteria evolve because they need to",
    "All bacteria respond equally to antibiotics"
  ],
  correct: 1,
  explanations: [
    "Mutations are not directed by antibiotics.",
    "Selection favors resistant individuals.",
    "Evolution is not driven by need.",
    "Variation exists among individuals."
  ]
},
{
  question: "A small number of bacteria colonize a new environment. Their allele frequencies differ from the original population. Which mechanism is most responsible?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Natural selection",
    "Genetic drift (founder effect)",
    "Gene flow",
    "Protein synthesis"
  ],
  correct: 1,
  explanations: [
    "Selection requires environmental advantage.",
    "Small populations experience drift.",
    "Gene flow requires movement between populations.",
    "Protein synthesis is not an evolutionary mechanism."
  ]
},
{
  question: "Two bacterial populations become isolated and adapt to different environments. Over time, they become genetically distinct. Which mechanisms are involved?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Only mutation",
    "Mutation, natural selection, and genetic drift",
    "Only reproduction",
    "Only gene flow"
  ],
  correct: 1,
  explanations: [
    "Mutation alone is not sufficient.",
    "Multiple mechanisms drive divergence.",
    "Reproduction alone does not explain differences.",
    "Gene flow would reduce differences."
  ]
},
{
  question: "Which scenario best explains why Gram-negative bacteria can be more resistant to antibiotics?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "They lack DNA",
    "Their outer membrane limits antibiotic access",
    "They do not reproduce",
    "They lack ribosomes"
  ],
  correct: 1,
  explanations: [
    "All bacteria have DNA.",
    "The outer membrane acts as a barrier.",
    "They reproduce rapidly.",
    "They do have ribosomes."
  ]
},
{
  question: "A population of bacteria gains new metabolic abilities by acquiring genes from other species. What is the evolutionary significance?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "It decreases genetic diversity",
    "It slows evolution",
    "It increases adaptability and rapid evolution",
    "It has no effect on survival"
  ],
  correct: 2,
  explanations: [
    "Gene transfer increases diversity.",
    "It often accelerates evolution.",
    "New genes allow new metabolic capabilities.",
    "Such changes often improve survival."
  ]
},
{
  question: "A bacterial strain spreads antibiotic resistance quickly across populations. Which mechanism explains this?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Binary fission",
    "Horizontal gene transfer",
    "Mutation only",
    "Natural selection alone"
  ],
  correct: 1,
  explanations: [
    "Binary fission creates identical cells.",
    "Genes can be transferred directly between cells.",
    "Mutation is slower and less direct.",
    "Selection alone does not spread genes between cells."
  ]
},
{
  question: "Why do Gram-negative bacteria resist antibiotics more effectively?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "They lack DNA",
    "Their outer membrane limits entry",
    "They reproduce slowly",
    "They lack ribosomes"
  ],
  correct: 1,
  explanations: [
    "All bacteria have DNA.",
    "Outer membrane acts as a protective barrier.",
    "They often reproduce quickly.",
    "They do contain ribosomes."
  ]
},
{
  question: "A bacterial population shows rapid evolution in a changing environment. Why?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "They lack genetic variation",
    "They reproduce quickly and exchange genes",
    "They do not mutate",
    "They grow slowly"
  ],
  correct: 1,
  explanations: [
    "They have high variation.",
    "Short generation time and gene transfer accelerate evolution.",
    "Mutations occur frequently.",
    "Rapid growth promotes evolution."
  ]
},
{
  question: "What advantage does a high surface area-to-volume ratio provide?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Slower metabolism",
    "Efficient exchange with environment",
    "Reduced replication",
    "Larger cell size"
  ],
  correct: 1,
  explanations: [
    "Metabolism is typically faster.",
    "Large surface area improves nutrient uptake and waste removal.",
    "It supports rapid reproduction.",
    "Prokaryotes are typically small."
  ]
},
{
  question: "Why is horizontal gene transfer significant evolutionarily?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "It reduces diversity",
    "It allows rapid acquisition of new traits",
    "It prevents mutation",
    "It limits survival"
  ],
  correct: 1,
  explanations: [
    "It increases diversity.",
    "New genes can quickly spread advantageous traits.",
    "Mutation still occurs.",
    "It often enhances survival."
  ]
},
{
  question: "A bacterium lacking a cell wall would most likely:",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Be resistant to osmotic pressure",
    "Be vulnerable to lysis",
    "Have increased structure",
    "Be unable to reproduce"
  ],
  correct: 1,
  explanations: [
    "The wall protects against osmotic pressure.",
    "Without a wall, cells can burst in hypotonic environments.",
    "Structure would decrease.",
    "Reproduction can still occur."
  ]
},
{
  question: "Why do prokaryotes adapt rapidly to antibiotics?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "They lack DNA repair",
    "They reproduce quickly and vary genetically",
    "They avoid mutation",
    "They are multicellular"
  ],
  correct: 1,
  explanations: [
    "DNA repair does exist.",
    "Rapid reproduction and variation drive adaptation.",
    "Mutation is frequent.",
    "They are unicellular."
  ]
},
{
  question: "Which condition would most reduce genetic diversity in bacteria?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "High mutation rate",
    "Frequent gene transfer",
    "Small isolated population",
    "Rapid reproduction"
  ],
  correct: 2,
  explanations: [
    "Mutation increases diversity.",
    "Gene transfer increases diversity.",
    "Small populations reduce diversity via drift.",
    "Rapid reproduction does not inherently reduce diversity."
  ]
},
{
  question: "Why are prokaryotes found in extreme environments?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "They lack metabolism",
    "They have diverse metabolic pathways",
    "They cannot adapt",
    "They grow slowly"
  ],
  correct: 1,
  explanations: [
    "They have complex metabolisms.",
    "Their metabolic diversity allows survival in extreme conditions.",
    "They adapt effectively.",
    "Many grow rapidly."
  ]
},
{
  question: "A bacterium gains the ability to metabolize a new energy source. What is the most likely cause?",
  category: "Prokaryotes",
  exam: "Exam 1", difficulty:  "Hard",
  options: [
    "Loss of DNA",
    "Horizontal gene transfer",
    "Binary fission",
    "Environmental forcing"
  ],
  correct: 1,
  explanations: [
    "DNA loss would remove functions.",
    "New genes can confer new metabolic abilities.",
    "Binary fission copies existing DNA.",
    "Environment selects but does not add genes."
  ]
},
// =====================================================
// EXAM 1 - EUKARYOTES
// =====================================================
{
  question: "Which of the following is a defining characteristic of eukaryotic cells?",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Easy",
  options: [
    "DNA is located in a nucleoid region",
    "They lack membrane-bound organelles",
    "Their DNA is enclosed within a nucleus",
    "They reproduce only by binary fission"
  ],
  correct: 2,
  explanations: [
    "Nucleoids are found in prokaryotes and are non-membrane-bound regions that house a cell's genetic material.",
    "Eukaryotes contain membrane-bound organelles.",
    "The nucleus houses the cell's genetic material.",
    "Binary fission is characteristic of prokaryotes and involves a form of asexual reproduction where a parent cell divides into two new identical cells."
  ]
},
{
  question: "Which organelle contains the genetic material of a eukaryotic cell?",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Easy",
  options: [
    "Golgi apparatus",
    "Nucleus",
    "Ribosome",
    "Lysosome"
  ],
  correct: 1,
  explanations: [
    "The Golgi modifies and packages proteins.",
    "The nucleus contains chromosomes and DNA.",
    "Ribosomes synthesize proteins.",
    "Lysosomes digest cellular materials."
  ]
},
{
  question: "What is the primary function of ribosomes?",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Easy",
  options: [
    "Energy production",
    "Protein synthesis",
    "DNA storage",
    "Lipid digestion"
  ],
  correct: 1,
  explanations: [
    "Mitochondria produce most cellular ATP.",
    "Ribosomes assemble proteins.",
    "DNA is primarily stored in the nucleus.",
    "Lipids are not digested by ribosomes."
  ]
},
{
  question: "Which organelle is known as the 'powerhouse of the cell' and is know for its extraordinary capacity to produce ATP?",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Easy",
  options: [
    "Golgi apparatus",
    "Mitochondrion",
    "Lysosome",
    "Vacuole"
  ],
  correct: 1,
  explanations: [
    "The Golgi packages proteins.",
    "Mitochondria generate the most ATP.",
    "Lysosomes digest materials.",
    "Vacuoles primarily store substances."
  ]
},
{
  question: "Which structure is present in both prokaryotic and eukaryotic cells?",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Medium",
  options: [
    "Nucleus",
    "Mitochondrion",
    "Ribosome",
    "Golgi apparatus"
  ],
  correct: 2,
  explanations: [
    "Only eukaryotes contain nuclei.",
    "Mitochondria are absent from prokaryotes.",
    "All cells contain ribosomes.",
    "Golgi apparatus is found only in eukaryotes."
  ]
},
{
  question: "What is the primary role of the cell membrane?",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Medium",
  options: [
    "Protein synthesis",
    "Control movement of substances into and out of the cell",
    "Store genetic material",
    "Generate ATP"
  ],
  correct: 1,
  explanations: [
    "Proteins are made at ribosomes.",
    "The plasma membrane selectively regulates transport.",
    "Genetic material is primarily stored in the nucleus.",
    "ATP production mainly occurs in mitochondria."
  ]
},
{
  question: "Proteins destined for secretion are most likely modified and packaged by which organelle?",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Medium",
  options: [
    "Golgi apparatus",
    "Nucleus",
    "Lysosome",
    "Centrosome"
  ],
  correct: 0,
  explanations: [
    "The Golgi modifies, sorts, and packages proteins.",
    "The nucleus stores DNA.",
    "Lysosomes digest materials.",
    "Centrosomes organize microtubules."
  ]
},
{
  question: "A cell lacking mitochondria would most directly have difficulty with:",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Medium",
  options: [
    "Protein synthesis",
    "ATP production",
    "DNA replication",
    "Cell signaling"
  ],
  correct: 1,
  explanations: [
    "Ribosomes perform protein synthesis.",
    "Mitochondria produce the most ATP and fuel eukaryotic cells.",
    "DNA replication occurs in the nucleus.",
    "Cell signaling can occur without mitochondria."
  ]
},
{
  question: "A toxin disrupts the function of the rough endoplasmic reticulum. Which cellular process would be affected first?",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Hard",
  options: [
    "Synthesis of membrane and secreted proteins",
    "ATP production",
    "DNA replication",
    "Digestion of cellular waste"
  ],
  correct: 0,
  explanations: [
    "The rough ER contains ribosomes that synthesize membrane and secreted proteins.",
    "ATP production occurs primarily in mitochondria.",
    "DNA replication occurs in the nucleus.",
    "Lysosomes digest cellular waste."
  ]
},
{
  question: "A scientist observes a cell with a nucleus, mitochondria, and Golgi apparatus. What can be concluded?",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Hard",
  options: [
    "The cell is prokaryotic",
    "The cell is eukaryotic",
    "The cell is bacterial",
    "The cell lacks compartmentalization"
  ],
  correct: 1,
  explanations: [
    "Prokaryotes lack these membrane-bound organelles.",
    "These structures are characteristic of eukaryotic cells.",
    "Bacteria are prokaryotic.",
    "The organelles indicate compartmentalization."
  ]
},
{
  question: "Why is compartmentalization considered an advantage of eukaryotic cells?",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Hard",
  options: [
    "It eliminates the need for enzymes",
    "It allows specialized cellular processes to occur efficiently",
    "It prevents cells from growing",
    "It removes the need for genetic material"
  ],
  correct: 1,
  explanations: [
    "Enzymes are still required.",
    "Organelles create specialized environments for cellular functions.",
    "Compartmentalization does not prevent growth.",
    "All cells require genetic material."
  ]
},
{
  question: "A mutation causes lysosomes to lose function. Which outcome is most likely?",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Hard",
  options: [
    "Accumulation of cellular waste and damaged components",
    "Loss of DNA storage",
    "Reduced transcription",
    "Failure of chromosome replication"
  ],
  correct: 0,
  explanations: [
    "Lysosomes break down waste and damaged cellular structures.",
    "DNA storage occurs in the nucleus.",
    "Transcription is not the primary function of lysosomes.",
    "Chromosome replication occurs independently of lysosomes."
  ]
},
{
  question: "Which statement best explains why eukaryotic cells are generally larger than prokaryotic cells?",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Hard",
  options: [
    "They lack internal organization",
    "Their membrane-bound organelles support efficient cellular function despite larger size",
    "They do not require nutrient exchange",
    "They contain fewer biochemical reactions"
  ],
  correct: 1,
  explanations: [
    "Eukaryotic cells are highly organized internally.",
    "Compartmentalization helps overcome challenges associated with larger size by boosting the efficiency of biological processes.",
    "All cells require nutrient exchange.",
    "Eukaryotic cells perform many biochemical reactions."
  ]
},
{
  question: "Which structure separates the contents of a eukaryotic cell from its external environment?",
  category: "Eukaryotes",
  exam: "Exam 1", difficulty: "Easy",
  options: [
    "Cell membrane",
    "Nucleus",
    "Golgi apparatus",
    "Ribosome"
  ],
  correct: 0,
  explanations: [
    "The cell membrane forms the boundary of the cell.",
    "The nucleus contains DNA.",
    "The Golgi packages proteins.",
    "Ribosomes synthesize proteins."
  ]
},
{
  question: "Which organelle contains digestive enzymes that break down worn-out cellular components?",
  category: "Eukaryotes",
  exam: "Exam 1",  difficulty: "Easy",
  options: [
    "Lysosome",
    "Mitochondrion",
    "Nucleolus",
    "Golgi apparatus"
  ],
  correct: 0,
  explanations: [
    "Lysosomes digest cellular waste and damaged structures.",
    "Mitochondria generate ATP.",
    "The nucleolus produces ribosomal components.",
    "The Golgi modifies and packages proteins."
  ]
},
{
  question: "A protein is synthesized for secretion from the cell. Which pathway will it most likely follow?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Medium",
  options: [
    "Rough ER → Golgi apparatus → cell membrane",
    "Nucleus → lysosome → cell membrane",
    "Golgi apparatus → nucleus → rough ER",
    "Mitochondrion → Golgi apparatus → cell membrane"
  ],
  correct: 0,
  explanations: [
    "Secreted proteins move through the endomembrane system.",
    "The nucleus and lysosomes are not the primary secretory pathway.",
    "This sequence is incorrect.",
    "Mitochondria are not involved in protein secretion."
  ]
},
{
  question: "Why are membrane-bound organelles advantageous in eukaryotic cells?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Medium",
  options: [
    "They eliminate the need for enzymes",
    "They allow incompatible cellular processes to occur simultaneously",
    "They remove DNA from the cell",
    "They make cells smaller"
  ],
  correct: 1,
  explanations: [
    "Enzymes are still essential.",
    "Compartmentalization increases efficiency and organization.",
    "Eukaryotic cells retain DNA in the nucleus.",
    "Organelles do not function by reducing cell size."
  ]
},
{
  question: "A cell has an unusually large number of mitochondria. What can be inferred about the cell?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Medium",
  options: [
    "It likely has high energy demands",
    "It cannot synthesize proteins",
    "It lacks a nucleus",
    "It performs binary fission"
  ],
  correct: 0,
  explanations: [
    "Cells requiring large amounts of ATP often contain many mitochondria.",
    "Protein synthesis occurs via ribosomes.",
    "Eukaryotic cells generally possess nuclei.",
    "Binary fission is a prokaryotic reproductive process."
  ]
},
{
  question: "A mutation prevents vesicles from fusing with the Golgi apparatus. Which process would be most directly affected?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Hard",
  options: [
    "Protein processing and sorting",
    "DNA replication",
    "Transcription",
    "Chromosome segregation"
  ],
  correct: 0,
  explanations: [
    "The Golgi receives and processes proteins delivered by transport vesicles.",
    "DNA replication occurs in the nucleus.",
    "Transcription occurs in the nucleus.",
    "Chromosome segregation occurs during cell division."
  ]
},
{
  question: "According to the endosymbiotic theory, mitochondria and chloroplasts originated from:",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Easy",
  options: [
    "The nucleus of an ancestral cell",
    "Free-living prokaryotes engulfed by another cell",
    "The Golgi apparatus",
    "Fragments of the cell membrane"
  ],
  correct: 1,
  explanations: [
    "The nucleus is not proposed to be the origin of these organelles.",
    "Endosymbiotic theory proposes that mitochondria and chloroplasts were once free-living prokaryotes.",
    "The Golgi apparatus did not give rise to these organelles.",
    "Cell membranes alone do not explain their origin."
  ]
},
{
  question: "Which observation provides evidence supporting the endosymbiotic theory?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Medium",
  options: [
    "Mitochondria contain their own DNA",
    "Mitochondria are surrounded by a single membrane",
    "All eukaryotic cells contain chloroplasts",
    "Mitochondria lack ribosomes"
  ],
  correct: 0,
  explanations: [
    "Mitochondria possess their own circular DNA, supporting a prokaryotic ancestry.",
    "Mitochondria actually have two membranes.",
    "Many eukaryotic cells do not contain chloroplasts.",
    "Mitochondria contain ribosomes."
  ]
},
{
  question: "A scientist discovers a newly described organelle. The organelle contains circular DNA, reproduces independently by a process similar to binary fission, and possesses ribosomes resembling those of bacteria. What is the strongest conclusion?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Hard",
  options: [
    "The organelle likely arose through endosymbiosis",
    "The organelle is part of the Golgi apparatus",
    "The organelle evolved from the nucleus",
    "The organelle is not associated with ATP production"
  ],
  correct: 0,
  explanations: [
    "These characteristics are classic evidence supporting an endosymbiotic origin.",
    "The Golgi apparatus lacks its own DNA and ribosomes.",
    "The nucleus does not reproduce by binary fission.",
    "The evidence provided does not address ATP production."
  ]
},
{
  question: "What is the primary function of the cytoskeleton in eukaryotic cells?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Easy",
  options: [
    "Store genetic information",
    "Provide structural support and organization",
    "Produce ATP",
    "Digest cellular waste"
  ],
  correct: 1,
  explanations: [
    "DNA is stored primarily in the nucleus.",
    "The cytoskeleton helps maintain cell shape and organization.",
    "ATP production occurs primarily in mitochondria.",
    "Lysosomes digest cellular waste."
  ]
},
{
  question: "A cell loses the ability to maintain its shape and transport materials internally. Which structure is most likely affected?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Medium",
  options: [
    "Cytoskeleton",
    "Golgi apparatus",
    "Nucleus",
    "Cell membrane"
  ],
  correct: 0,
  explanations: [
    "The cytoskeleton helps maintain cell shape and serves as tracks for intracellular transport.",
    "The Golgi modifies and packages proteins.",
    "The nucleus stores genetic material.",
    "The cell membrane regulates movement into and out of the cell."
  ]
},
{
  question: "Why is the cytoskeleton important for vesicle movement within eukaryotic cells?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Hard",
  options: [
    "It produces ATP for vesicles",
    "It provides tracks along which motor proteins transport vesicles",
    "It digests vesicles after transport",
    "It packages proteins into vesicles"
  ],
  correct: 1,
  explanations: [
    "ATP is produced primarily by mitochondria.",
    "Motor proteins move vesicles along cytoskeletal filaments.",
    "Lysosomes digest materials rather than transport them.",
    "Protein packaging occurs through the endomembrane system."
  ]
},
{
  question: "A mutation disrupts the assembly of microtubules. Which cellular process would be most directly affected?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Hard",
  options: [
    "Chromosome movement during cell division",
    "DNA replication",
    "Transcription",
    "Protein synthesis at ribosomes"
  ],
  correct: 0,
  explanations: [
    "Microtubules form spindle fibers that move chromosomes during cell division.",
    "DNA replication occurs within the nucleus.",
    "Transcription produces RNA from DNA.",
    "Protein synthesis occurs at ribosomes."
  ]
},
{
  question: "What is the purpose of cell signaling?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Easy",
  options: [
    "To allow cells to communicate and respond to their environment",
    "To generate ATP",
    "To replicate DNA",
    "To digest cellular components"
  ],
  correct: 0,
  explanations: [
    "Cell signaling allows cells to communicate and coordinate responses.",
    "ATP production occurs primarily in mitochondria.",
    "DNA replication occurs within the nucleus.",
    "Digestion of cellular components is performed by lysosomes."
  ]
},
{
  question: "What role does a receptor play in cell signaling?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Medium",
  options: [
    "Produces signaling molecules",
    "Receives and detects signaling molecules",
    "Stores genetic information",
    "Packages proteins"
  ],
  correct: 1,
  explanations: [
    "Signaling molecules are typically produced elsewhere.",
    "Receptors recognize and bind specific signaling molecules.",
    "Genetic information is stored in the nucleus.",
    "Protein packaging is performed by the Golgi apparatus."
  ]
},
{
  question: "A hormone binds to a receptor on the surface of a cell. What is the most likely outcome?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Medium",
  options: [
    "The cell receives information and may alter its behavior",
    "The receptor is converted into DNA",
    "The nucleus leaves the cell",
    "ATP production immediately stops"
  ],
  correct: 0,
  explanations: [
    "Signaling molecules trigger cellular responses after receptor binding.",
    "Receptors are not converted into DNA.",
    "The nucleus remains within the cell.",
    "ATP production does not automatically stop."
  ]
},
{
  question: "Why is receptor specificity important in cell signaling?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Hard",
  options: [
    "It ensures that only appropriate target cells respond to a signal",
    "It prevents cells from producing proteins",
    "It eliminates the need for communication between cells",
    "It allows all cells to respond identically"
  ],
  correct: 0,
  explanations: [
    "Specific receptors ensure signals produce responses only in appropriate cells.",
    "Protein production still occurs normally.",
    "Cells continue to communicate extensively.",
    "Different cell types often respond differently to the same signal."
  ]
},
{
  question: "A mutation alters the shape of a cell's receptor so that the signaling molecule can no longer bind. What is the most likely consequence?",
  category: "Eukaryotes",
  exam: "Exam 1",
  difficulty: "Hard",
  options: [
    "The signaling pathway may fail to activate",
    "The cell immediately divides",
    "The nucleus is destroyed",
    "The cell gains a new organelle"
  ],
  correct: 0,
  explanations: [
    "Without signal recognition, downstream signaling may not occur.",
    "Cell division is not an automatic consequence.",
    "The nucleus remains intact.",
    "New organelles are not created by receptor mutations."
  ]
},
  // =====================================================
// EXAM 2 - PROTISTA
// =====================================================
{
  question: "Which statement best describes protists?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "All protists are multicellular.",
    "All protists are photosynthetic.",
    "Protists are a diverse group of eukaryotic organisms.",
    "Protists are prokaryotes."
  ],
  correct: 2,
  explanations: [
    "Many protists are unicellular, although some are multicellular.",
    "Some protists are photosynthetic, but many are heterotrophic.",
    "Protists are a highly diverse group of eukaryotic organisms.",
    "Protists possess a nucleus and are therefore eukaryotes."
  ]
},
{
  question: "Which characteristic do all protists share?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "They are eukaryotic.",
    "They are multicellular.",
    "They are photosynthetic.",
    "They are aquatic."
  ],
  correct: 0,
  explanations: [
    "All protists possess a nucleus and membrane-bound organelles.",
    "Many protists are unicellular.",
    "Not all protists perform photosynthesis.",
    "Many protists live in water, but not all."
  ]
},
{
  question: "Which protist moves using pseudopodia?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Paramecium",
    "Euglena",
    "Amoeba",
    "Diatom"
  ],
  correct: 2,
  explanations: [
    "Paramecium moves using cilia.",
    "Euglena moves primarily using a flagellum.",
    "Amoebas extend pseudopodia to move and capture food.",
    "Diatoms do not move using pseudopodia."
  ]
},
{
  question: "Which protist uses cilia for movement?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Amoeba",
    "Euglena",
    "Paramecium",
    "Diatom"
  ],
  correct: 2,
  explanations: [
    "Amoebas move using pseudopodia rather than cilia.",
    "Euglena typically moves using a flagellum.",
    "Paramecium is covered in cilia that it uses for movement and feeding.",
    "Diatoms do not move using cilia."
  ]
},
{
  question: "Which protist typically moves using a flagellum?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Paramecium",
    "Amoeba",
    "Euglena",
    "Slime mold"
  ],
  correct: 2,
  explanations: [
    "Paramecium uses cilia for movement.",
    "Amoeba uses pseudopodia.",
    "Euglena uses a flagellum for locomotion.",
    "Slime molds do not typically move by a flagellum."
  ]
},
{
  question: "A protist that produces its own food through photosynthesis is considered:",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Autotrophic",
    "Heterotrophic",
    "Parasitic",
    "Saprophytic"
  ],
  correct: 0,
  explanations: [
    "Autotrophs produce organic molecules using energy from sunlight or chemicals.",
    "Heterotrophs consume other organisms or organic matter.",
    "Parasites obtain resources from a host organism.",
    "Saprophytes feed on dead organic material."
  ]
},
{
  question: "Which protist is known for being both photosynthetic and capable of consuming food?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Euglena",
    "Paramecium",
    "Amoeba",
    "Plasmodium"
  ],
  correct: 0,
  explanations: [
    "Euglena is mixotrophic and can obtain energy in more than one way.",
    "Paramecium is primarily heterotrophic.",
    "Amoeba obtains food by engulfing it.",
    "Plasmodium is parasitic."
  ]
},
{
  question: "Which protist is responsible for causing malaria?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Euglena",
    "Paramecium",
    "Plasmodium",
    "Amoeba"
  ],
  correct: 2,
  explanations: [
    "Euglena is not a human parasite.",
    "Paramecium is generally free-living.",
    "Plasmodium is the protist responsible for malaria.",
    "Most amoebas do not cause malaria."
  ]
},
{
  question: "Which group of protists contributes significantly to oxygen production on Earth?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Protozoans",
    "Algal protists",
    "Slime molds",
    "Plasmodium"
  ],
  correct: 1,
  explanations: [
    "Protozoans are generally heterotrophic.",
    "Photosynthetic algae produce large amounts of oxygen.",
    "Slime molds are not major oxygen producers.",
    "Plasmodium is parasitic."
  ]
},
{
  question: "Which structure is found in protists but not in prokaryotes?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Cell membrane",
    "Ribosomes",
    "Cytoplasm",
    "Nucleus"
  ],
  correct: 3,
  explanations: [
    "Both prokaryotes and eukaryotes have cell membranes.",
    "Both types of cells contain ribosomes.",
    "Both types of cells contain cytoplasm.",
    "A membrane-bound nucleus is characteristic of eukaryotes."
  ]
},
{
  question: "A student observes a unicellular organism covered in tiny hair-like projections used for movement. The organism is most likely:",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Paramecium",
    "Amoeba",
    "Euglena",
    "Diatom"
  ],
  correct: 0,
  explanations: [
    "Paramecium uses cilia for movement.",
    "Amoeba moves using pseudopodia.",
    "Euglena uses a flagellum.",
    "Diatoms are not covered in cilia."
  ]
},
{
  question: "Which protist would most likely be found at the base of an aquatic food web?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Amoeba",
    "Paramecium",
    "Algal protist",
    "Plasmodium"
  ],
  correct: 2,
  explanations: [
    "Amoebas are consumers rather than primary producers.",
    "Paramecia are heterotrophs.",
    "Photosynthetic algae serve as primary producers.",
    "Plasmodium is parasitic."
  ]
},
{
  question: "Which statement best explains why protists are often considered a diverse group?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "They all share the same habitat.",
    "They all perform photosynthesis.",
    "They include organisms with many different lifestyles and structures.",
    "They are all multicellular."
  ],
  correct: 2,
  explanations: [
    "Protists live in many environments.",
    "Many protists are not photosynthetic.",
    "Protists vary greatly in nutrition, structure, and ecology.",
    "Many protists are unicellular."
  ]
},
{
  question: "A protist engulfs a bacterium using extensions of its cytoplasm. Which protist is most likely being observed?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Amoeba",
    "Paramecium",
    "Diatom",
    "Euglena"
  ],
  correct: 0,
  explanations: [
    "Amoebas use pseudopodia to engulf food particles.",
    "Paramecia use cilia to move food toward an oral groove.",
    "Diatoms are primarily photosynthetic.",
    "Euglena does not capture food using pseudopodia."
  ]
},
{
  question: "Why are diatoms ecologically important?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "They are major aquatic producers.",
    "They are the primary cause of malaria.",
    "They decompose all organic matter.",
    "They lack chloroplasts."
  ],
  correct: 0,
  explanations: [
    "Diatoms perform photosynthesis and support aquatic food webs.",
    "Malaria is caused by Plasmodium.",
    "Diatoms are not responsible for all decomposition.",
    "Diatoms contain chloroplasts."
  ]
},
{
  question: "An organism has chloroplasts, a nucleus, and a flagellum. Which protist best matches these observations?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Paramecium",
    "Plasmodium",
    "Euglena",
    "Amoeba"
  ],
  correct: 2,
  explanations: [
    "Paramecium lacks chloroplasts.",
    "Plasmodium is parasitic and lacks chloroplasts.",
    "Euglena possesses chloroplasts, a nucleus, and a flagellum.",
    "Amoeba lacks chloroplasts and a flagellum."
  ]
},
{
  question: "Which characteristic would most likely classify a protist as heterotrophic?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Producing glucose through photosynthesis",
    "Obtaining food by consuming other organisms",
    "Using chloroplasts",
    "Producing oxygen"
  ],
  correct: 1,
  explanations: [
    "This describes autotrophic nutrition.",
    "Heterotrophs obtain energy by consuming organic matter.",
    "Chloroplasts are associated with photosynthesis.",
    "Oxygen production is associated with photosynthesis."
  ]
},
{
  question: "Animal-like protists are commonly referred to as:",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Bryophytes",
    "Protozoans",
    "Gymnosperms",
    "Archaea"
  ],
  correct: 1,
  explanations: [
    "Bryophytes are plants.",
    "Protozoans are animal-like protists.",
    "Gymnosperms are seed plants.",
    "Archaea are prokaryotes."
  ]
},
{
  question: "A lake experiences a dramatic increase in photosynthetic protists. What will most likely increase directly as a result?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Oxygen production",
    "DNA mutation rates",
    "Parasitism",
    "Predation"
  ],
  correct: 0,
  explanations: [
    "More photosynthesis generally results in increased oxygen production.",
    "Photosynthesis does not directly increase mutation rates.",
    "Parasitism is unrelated to photosynthetic abundance.",
    "Predation may change indirectly but is not the most direct effect."
  ]
},
{
  question: "A researcher groups protists based on how they obtain energy. Which criterion is being used?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Method of nutrition",
    "Cell size",
    "Color",
    "Chromosome number"
  ],
  correct: 0,
  explanations: [
    "Nutrition-based grouping distinguishes autotrophs, heterotrophs, and mixotrophs.",
    "Cell size is not the primary criterion described.",
    "Color alone is not a major classification strategy.",
    "Chromosome number is not the grouping criterion described."
  ]
},
{
  question: "A protist population is eliminated from an aquatic ecosystem. Which outcome is most likely if the protists were primary producers?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "The amount of available energy for higher trophic levels would decrease.",
    "Consumer populations would immediately increase.",
    "The ecosystem would become more productive.",
    "Food webs would be unaffected."
  ],
  correct: 0,
  explanations: [
    "Primary producers provide energy for the rest of the food web.",
    "Consumers rely on producers and would likely decline.",
    "Removing producers reduces productivity.",
    "Food webs depend heavily on producers."
  ]
},
{
  question: "A student discovers a unicellular organism with a nucleus that can switch between photosynthesis and consuming food. Which conclusion is most supported?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "The organism is likely a mixotrophic protist.",
    "The organism is a bacterium.",
    "The organism is a fungus.",
    "The organism lacks membrane-bound organelles."
  ],
  correct: 0,
  explanations: [
    "Mixotrophs can obtain energy through multiple strategies.",
    "The presence of a nucleus indicates a eukaryote rather than a bacterium.",
    "The characteristics more closely match a protist than a fungus.",
    "The presence of a nucleus indicates membrane-bound organelles exist."
  ]
},
{
  question: "Why are protists often difficult to classify into a single kingdom-like group?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "They share identical lifestyles.",
    "They exhibit tremendous variation in structure, nutrition, and ecology.",
    "They are all closely related evolutionarily.",
    "They all perform the same ecological role."
  ],
  correct: 1,
  explanations: [
    "Protists show many different lifestyles.",
    "Their diversity makes classification challenging.",
    "Protists are not all closely related.",
    "Protists occupy many ecological roles."
  ]
},
{
  question: "A protist lacks chloroplasts and survives by absorbing nutrients from a host organism. Which description best fits the protist?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "Autotrophic",
    "Photosynthetic",
    "Parasitic",
    "Producer"
  ],
  correct: 2,
  explanations: [
    "Autotrophs produce their own food.",
    "Photosynthetic organisms require chloroplasts or similar structures.",
    "Parasites obtain resources from a host organism.",
    "Producers generate their own organic molecules."
  ]
},
{
  question: "Which observation provides the strongest evidence that a microorganism should be classified as a protist rather than a bacterium?",
  category: "Protists",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "The organism lives in water.",
    "The organism possesses a membrane-bound nucleus.",
    "The organism is microscopic.",
    "The organism reproduces."
  ],
  correct: 1,
  explanations: [
    "Many bacteria and protists live in water.",
    "A membrane-bound nucleus is a hallmark of eukaryotic cells such as protists.",
    "Both bacteria and protists can be microscopic.",
    "Both bacteria and protists reproduce."
  ]
},
// =====================================================
// EXAM 2 - DNA REPLICATION
// =====================================================
{
  question: "What is the primary purpose of DNA replication?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "To produce proteins",
    "To create an identical copy of DNA before cell division",
    "To generate ATP",
    "To repair cell membranes"
  ],
  correct: 1,
  explanations: [
    "Proteins are produced during translation, not replication.",
    "DNA must be copied before a cell divides so each daughter cell receives genetic information.",
    "ATP is primarily produced during cellular respiration.",
    "DNA replication does not repair cell membranes."
  ]
},
{
  question: "Which enzyme unwinds the DNA double helix during replication?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "DNA polymerase",
    "Ligase",
    "Helicase",
    "Primase"
  ],
  correct: 2,
  explanations: [
    "DNA polymerase synthesizes new DNA strands.",
    "Ligase joins DNA fragments together.",
    "Helicase separates the two DNA strands by breaking hydrogen bonds.",
    "Primase synthesizes RNA primers."
  ]
},
{
  question: "Which enzyme adds nucleotides to a growing DNA strand?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "DNA polymerase",
    "Helicase",
    "Primase",
    "Ligase"
  ],
  correct: 0,
  explanations: [
    "DNA polymerase builds new DNA strands using a template strand.",
    "Helicase unwinds DNA but does not add nucleotides.",
    "Primase makes RNA primers.",
    "Ligase joins fragments of DNA."
  ]
},
{
  question: "What does it mean that DNA replication is semiconservative?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Half of the DNA is discarded during replication.",
    "Each daughter DNA molecule contains one original strand and one new strand.",
    "Only one DNA strand is copied.",
    "DNA replication occurs only in some cells."
  ],
  correct: 1,
  explanations: [
    "No DNA strands are intentionally discarded.",
    "Each new double helix contains one parental strand and one newly synthesized strand.",
    "Both DNA strands ultimately serve as templates.",
    "DNA replication occurs whenever DNA must be copied."
  ]
},
{
  question: "Which nitrogenous base pairs with adenine in DNA?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Cytosine",
    "Guanine",
    "Uracil",
    "Thymine"
  ],
  correct: 3,
  explanations: [
    "Cytosine pairs with guanine.",
    "Guanine pairs with cytosine.",
    "Uracil is found in RNA rather than DNA.",
    "Thymine pairs with adenine in DNA."
  ]
},
{
  question: "Which nitrogenous base pairs with cytosine?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Adenine",
    "Thymine",
    "Guanine",
    "Uracil"
  ],
  correct: 2,
  explanations: [
    "Adenine pairs with thymine.",
    "Thymine pairs with adenine.",
    "Guanine forms complementary base pairs with cytosine.",
    "Uracil is found in RNA."
  ]
},
{
  question: "What role does a template strand play during DNA replication?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Provides instructions for building a complementary strand",
    "Produces ATP",
    "Separates chromosomes",
    "Packages DNA"
  ],
  correct: 0,
  explanations: [
    "The template strand guides the order of nucleotides in the newly synthesized strand.",
    "ATP production is not its role.",
    "Chromosome separation occurs during cell division.",
    "DNA packaging is not the function of a template strand."
  ]
},
{
  question: "What structure forms where DNA is actively being unwound and copied?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Replication fork",
    "Chromosome",
    "Centromere",
    "Ribosome"
  ],
  correct: 0,
  explanations: [
    "The replication fork is the Y-shaped region where replication occurs.",
    "A chromosome contains DNA but is not the specific replication structure.",
    "A centromere helps attach chromosomes during division.",
    "Ribosomes synthesize proteins."
  ]
},
{
  question: "Which molecule serves as the source of information for copying DNA?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Protein",
    "RNA",
    "The parental DNA strand",
    "ATP"
  ],
  correct: 2,
  explanations: [
    "Proteins do not provide the DNA sequence template.",
    "RNA is not the primary template during DNA replication.",
    "Existing parental DNA strands serve as templates.",
    "ATP provides energy but not sequence information."
  ]
},
{
  question: "Why must DNA be replicated before cell division?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "To create more ATP",
    "To ensure each daughter cell receives genetic information",
    "To produce mRNA",
    "To increase cell size"
  ],
  correct: 1,
  explanations: [
    "ATP production is not the primary purpose.",
    "Replication ensures both daughter cells receive a complete copy of DNA.",
    "mRNA production occurs during transcription.",
    "Cell size is not the purpose of DNA replication."
  ]
},
{
  question: "What is the function of primase?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Unwinds DNA",
    "Synthesizes RNA primers",
    "Joins DNA fragments",
    "Proofreads DNA"
  ],
  correct: 1,
  explanations: [
    "Helicase unwinds DNA.",
    "Primase creates short RNA primers needed to begin DNA synthesis.",
    "Ligase joins DNA fragments.",
    "Proofreading is primarily performed by DNA polymerase."
  ]
},
{
  question: "Why are RNA primers necessary during replication?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "DNA polymerase cannot begin synthesis on its own",
    "They produce ATP",
    "They unwind DNA",
    "They separate chromosomes"
  ],
  correct: 0,
  explanations: [
    "DNA polymerase requires an existing strand to extend.",
    "RNA primers do not produce ATP.",
    "Helicase unwinds DNA.",
    "Chromosome separation occurs later during cell division."
  ]
},
{
  question: "What is the primary function of DNA ligase?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Add nucleotides",
    "Separate DNA strands",
    "Join DNA fragments together",
    "Produce RNA primers"
  ],
  correct: 2,
  explanations: [
    "DNA polymerase adds nucleotides.",
    "Helicase separates strands.",
    "Ligase seals gaps between DNA fragments.",
    "Primase produces primers."
  ]
},
{
  question: "What are Okazaki fragments?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Short segments of DNA synthesized on the lagging strand",
    "Proteins that unwind DNA",
    "RNA molecules that leave the nucleus",
    "Regions of damaged DNA"
  ],
  correct: 0,
  explanations: [
    "Okazaki fragments are short DNA pieces later joined by ligase.",
    "Helicase is the enzyme that unwinds DNA.",
    "These are not RNA molecules.",
    "They are normal products of replication."
  ]
},
{
  question: "Which strand is synthesized continuously during DNA replication?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Lagging strand",
    "Leading strand",
    "Template strand",
    "Parental strand"
  ],
  correct: 1,
  explanations: [
    "The lagging strand is synthesized in fragments.",
    "The leading strand is synthesized continuously toward the replication fork.",
    "Template strand is a broader term.",
    "Parental strands serve as templates."
  ]
},
{
  question: "Why is the lagging strand synthesized in fragments?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "DNA polymerase can only synthesize DNA in the 5' to 3' direction",
    "Helicase is too slow",
    "Ligase blocks replication",
    "The lagging strand lacks nucleotides"
  ],
  correct: 0,
  explanations: [
    "The directionality of DNA polymerase creates discontinuous synthesis.",
    "Helicase speed is not the reason.",
    "Ligase helps replication rather than blocking it.",
    "Nucleotides are available on both strands."
  ]
},
{
  question: "In which direction does DNA polymerase synthesize new DNA?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "3' to 5'",
    "5' to 3'",
    "Both directions equally",
    "Random directions"
  ],
  correct: 1,
  explanations: [
    "DNA polymerase cannot synthesize in this direction.",
    "DNA synthesis proceeds only in the 5' to 3' direction.",
    "Only one direction is possible.",
    "DNA synthesis is not random."
  ]
},
{
  question: "What is the relationship between Okazaki fragments and DNA ligase?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Ligase unwinds them",
    "Ligase joins them together",
    "Ligase creates them",
    "Ligase destroys them"
  ],
  correct: 1,
  explanations: [
    "Helicase unwinds DNA.",
    "Ligase forms phosphodiester bonds linking fragments together.",
    "DNA polymerase generates the fragments.",
    "The fragments are not destroyed."
  ]
},
{
  question: "Why do eukaryotic chromosomes contain multiple origins of replication?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "To speed up replication of large chromosomes",
    "To reduce DNA accuracy",
    "To prevent DNA polymerase activity",
    "To eliminate RNA primers"
  ],
  correct: 0,
  explanations: [
    "Multiple origins allow replication to occur simultaneously in many regions.",
    "Cells strive to maintain DNA accuracy.",
    "DNA polymerase is required for replication.",
    "RNA primers are still needed."
  ]
},
{
  question: "What is the benefit of proofreading by DNA polymerase?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "It increases mutation rates",
    "It removes all DNA",
    "It reduces replication errors",
    "It creates Okazaki fragments"
  ],
  correct: 2,
  explanations: [
    "Proofreading reduces rather than increases mutations.",
    "DNA is not removed.",
    "Proofreading helps maintain high replication accuracy.",
    "Okazaki fragments are produced by lagging-strand synthesis."
  ]
},
{
  question: "A scientist inhibits helicase in a cell. What is the most likely outcome?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "DNA strands will fail to separate",
    "RNA primers will not form",
    "Okazaki fragments will not join",
    "Proteins will not be translated"
  ],
  correct: 0,
  explanations: [
    "Helicase separates DNA strands by breaking hydrogen bonds.",
    "Primase synthesizes RNA primers.",
    "DNA ligase joins Okazaki fragments.",
    "Translation is not the direct role of helicase."
  ]
},
{
  question: "A mutation eliminates DNA ligase activity. Which replication product would accumulate?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "Unconnected Okazaki fragments",
    "Extra RNA primers",
    "Additional chromosomes",
    "Ribosomes"
  ],
  correct: 0,
  explanations: [
    "Without ligase, DNA fragments on the lagging strand cannot be sealed together.",
    "Primase is responsible for primer production.",
    "Chromosome number would not directly increase.",
    "Ribosomes are unrelated to ligase activity."
  ]
},
{
  question: "A cell's DNA polymerase loses its proofreading ability but can still synthesize DNA. What is the most likely result?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "Replication will become more accurate",
    "Mutation rates will increase",
    "DNA strands will not separate",
    "Replication will stop immediately"
  ],
  correct: 1,
  explanations: [
    "Proofreading improves accuracy rather than reducing it.",
    "Errors are more likely to remain in the DNA sequence.",
    "Helicase separates DNA strands.",
    "Replication may continue, though less accurately."
  ]
},
{
  question: "A researcher observes short DNA fragments being produced repeatedly near a replication fork. Which strand is being observed?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "Leading strand",
    "Lagging strand",
    "Template strand only",
    "Coding strand"
  ],
  correct: 1,
  explanations: [
    "The leading strand is synthesized continuously.",
    "The lagging strand is synthesized as Okazaki fragments.",
    "Both parental strands serve as templates.",
    "Coding strand terminology is associated with transcription."
  ]
},
{
  question: "A newly replicated DNA molecule contains one parental strand and one newly synthesized strand. Which concept does this observation support?",
  category: "DNA Replication",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "Conservative replication",
    "Dispersive replication",
    "Semiconservative replication",
    "Translation"
  ],
  correct: 2,
  explanations: [
    "Conservative replication would keep both parental strands together.",
    "Dispersive replication predicts mixed segments throughout each strand.",
    "Semiconservative replication produces one old strand and one new strand in each daughter molecule.",
    "Translation is protein synthesis and unrelated to DNA copying."
  ]
},
// =====================================================
// EXAM 2 - MITOSIS AND THE CELL CYCLE
// =====================================================
{
  question: "What is the primary purpose of mitosis?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "To produce gametes",
    "To create genetically similar daughter cells",
    "To increase genetic variation",
    "To reduce chromosome number"
  ],
  correct: 1,
  explanations: [
    "Gametes are produced by meiosis.",
    "Mitosis produces genetically similar daughter cells for growth and repair.",
    "Genetic variation is primarily generated during meiosis.",
    "Chromosome number remains the same after mitosis."
  ]
},
{
  question: "Which stage of the cell cycle is associated with normal cell growth and cellular functions?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Interphase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  correct: 0,
  explanations: [
    "Interphase is when cells grow, perform normal functions, and prepare for division.",
    "Metaphase is a stage of mitosis.",
    "Anaphase involves chromosome separation.",
    "Telophase occurs near the end of mitosis."
  ]
},
{
  question: "During which phase of mitosis do chromosomes become visible as they condense?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Cytokinesis"
  ],
  correct: 0,
  explanations: [
    "Chromosomes condense and become visible during prophase.",
    "In metaphase, chromosomes align at the cell's center.",
    "In anaphase, sister chromatids separate.",
    "Cytokinesis divides the cytoplasm."
  ]
},
{
  question: "During which phase of mitosis do chromosomes align along the cell's equator?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  correct: 1,
  explanations: [
    "Chromosomes are condensing during prophase.",
    "Chromosomes line up in the middle of the cell during metaphase.",
    "Chromosomes separate during anaphase.",
    "New nuclei form during telophase."
  ]
},
{
  question: "What happens during anaphase?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "DNA is replicated",
    "Chromosomes condense",
    "Sister chromatids separate",
    "Nuclear envelopes reform"
  ],
  correct: 2,
  explanations: [
    "DNA replication occurs during S phase.",
    "Chromosome condensation occurs during prophase.",
    "Sister chromatids are pulled apart during anaphase.",
    "Nuclei reform during telophase."
  ]
},
{
  question: "What occurs during telophase?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "DNA replication",
    "Chromosomes align at the equator",
    "Spindle fibers form",
    "New nuclei begin to form"
  ],
  correct: 3,
  explanations: [
    "DNA replication occurs before mitosis.",
    "Alignment occurs during metaphase.",
    "Spindle formation primarily occurs during prophase.",
    "Nuclear envelopes reform during telophase."
  ]
},
{
  question: "What is cytokinesis?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Division of the nucleus",
    "Replication of DNA",
    "Division of the cytoplasm",
    "Chromosome alignment"
  ],
  correct: 2,
  explanations: [
    "Nuclear division is mitosis.",
    "DNA replication occurs during S phase.",
    "Cytokinesis physically separates the daughter cells.",
    "Chromosome alignment occurs during metaphase."
  ]
},
{
  question: "How many daughter cells are produced by mitosis?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 1,
  explanations: [
    "Mitosis does not produce a single daughter cell.",
    "Mitosis produces two daughter cells.",
    "Three daughter cells are not produced in normal mitosis.",
    "Four daughter cells are produced by meiosis."
  ]
},
{
  question: "The daughter cells produced by mitosis are usually:",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Genetically identical to the parent cell",
    "Haploid",
    "Genetically unique",
    "Missing chromosomes"
  ],
  correct: 0,
  explanations: [
    "Mitosis generally produces genetically identical cells.",
    "Haploid cells are produced by meiosis.",
    "Genetic diversity is primarily associated with meiosis.",
    "Normal mitosis preserves chromosome number."
  ]
},
{
  question: "In which phase of the cell cycle is DNA replicated?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "G1",
    "S",
    "G2",
    "M"
  ],
  correct: 1,
  explanations: [
    "G1 is a growth phase.",
    "DNA replication occurs during S phase.",
    "G2 is preparation for mitosis.",
    "M phase includes mitosis and cytokinesis."
  ]
},
{
  question: "What are sister chromatids?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Two identical copies of a chromosome",
    "Two different chromosomes",
    "Proteins attached to DNA",
    "Spindle fibers"
  ],
  correct: 0,
  explanations: [
    "Sister chromatids are identical copies produced during DNA replication.",
    "Homologous chromosomes are not identical copies.",
    "Chromatids contain DNA, not proteins alone.",
    "Spindle fibers move chromosomes."
  ]
},
{
  question: "What structure attaches to chromosomes and helps move them during mitosis?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Cell membrane",
    "Spindle fibers",
    "Ribosomes",
    "Mitochondria"
  ],
  correct: 1,
  explanations: [
    "The membrane does not move chromosomes.",
    "Spindle fibers attach to chromosomes and move them.",
    "Ribosomes synthesize proteins.",
    "Mitochondria produce ATP."
  ]
},
{
  question: "A scientist observes duplicated chromosomes lined up at the center of a cell. Which phase is being observed?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  correct: 1,
  explanations: [
    "Chromosomes are condensing during prophase.",
    "Chromosome alignment at the equator defines metaphase.",
    "Chromatids separate during anaphase.",
    "Nuclei reform during telophase."
  ]
},
{
  question: "Which phase immediately follows metaphase?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Prophase",
    "G2",
    "Anaphase",
    "S phase"
  ],
  correct: 2,
  explanations: [
    "Prophase occurs earlier.",
    "G2 occurs before mitosis.",
    "Anaphase follows metaphase.",
    "S phase occurs before mitosis."
  ]
},
{
  question: "What is the purpose of a cell-cycle checkpoint?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "To produce ATP",
    "To ensure events are completed correctly before progression",
    "To synthesize proteins",
    "To separate chromosomes"
  ],
  correct: 1,
  explanations: [
    "ATP production is not the main purpose.",
    "Checkpoints help maintain cell-cycle accuracy.",
    "Protein synthesis occurs throughout the cell cycle.",
    "Chromosome separation occurs during mitosis."
  ]
},
{
  question: "A cell has completed DNA replication but has not yet entered mitosis. Which phase is it in?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "G1",
    "S",
    "G2",
    "Cytokinesis"
  ],
  correct: 2,
  explanations: [
    "G1 occurs before DNA replication.",
    "S phase is when replication occurs.",
    "G2 occurs after replication and before mitosis.",
    "Cytokinesis occurs after mitosis."
  ]
},
{
  question: "What is the correct order of the major stages of mitosis?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Prophase → Metaphase → Anaphase → Telophase",
    "Metaphase → Prophase → Telophase → Anaphase",
    "Prophase → Anaphase → Metaphase → Telophase",
    "Telophase → Prophase → Metaphase → Anaphase"
  ],
  correct: 0,
  explanations: [
    "This is the correct sequence of mitotic events.",
    "The phases are out of order.",
    "Metaphase must occur before anaphase.",
    "Telophase is the final stage."
  ]
},
{
  question: "A chromosome consists of two sister chromatids before anaphase. What happens to those chromatids during anaphase?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "They replicate again",
    "They separate and move toward opposite poles",
    "They fuse together",
    "They disappear"
  ],
  correct: 1,
  explanations: [
    "DNA replication has already occurred.",
    "Anaphase is defined by chromatid separation.",
    "Chromatids do not fuse together.",
    "Chromatids remain as chromosomes."
  ]
},
{
  question: "Why is DNA replicated before mitosis?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "To reduce chromosome number",
    "To ensure each daughter cell receives a complete genome",
    "To create genetic variation",
    "To initiate cytokinesis"
  ],
  correct: 1,
  explanations: [
    "Chromosome number remains constant.",
    "Replication ensures accurate inheritance of genetic information.",
    "Mitosis is not designed to create variation.",
    "Replication does not initiate cytokinesis."
  ]
},
{
  question: "A cell spends most of its life in which stage?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Anaphase",
    "Telophase",
    "Interphase",
    "Metaphase"
  ],
  correct: 2,
  explanations: [
    "Anaphase is relatively brief.",
    "Telophase is also brief.",
    "Interphase occupies most of the cell cycle.",
    "Metaphase is only one stage of mitosis."
  ]
},
{
  question: "A toxin prevents spindle fibers from attaching to chromosomes. Which process will be most directly affected?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "Chromosome movement during mitosis",
    "DNA replication",
    "Protein synthesis",
    "Cellular respiration"
  ],
  correct: 0,
  explanations: [
    "Spindle fibers are responsible for moving chromosomes.",
    "DNA replication does not require spindle fibers.",
    "Protein synthesis occurs at ribosomes.",
    "Cellular respiration occurs primarily in mitochondria."
  ]
},
{
  question: "A mutation disables an important cell-cycle checkpoint. What is the most likely consequence?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "Cells may divide despite having damaged DNA",
    "Mitosis becomes impossible",
    "Chromosomes disappear",
    "DNA can no longer replicate"
  ],
  correct: 0,
  explanations: [
    "Checkpoint failure can allow damaged cells to continue dividing.",
    "Cells may still undergo mitosis.",
    "Chromosomes do not disappear.",
    "DNA replication can still occur."
  ]
},
{
  question: "A researcher observes chromosomes moving toward opposite poles of a cell. Which phase is being observed?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Cytokinesis"
  ],
  correct: 2,
  explanations: [
    "Chromosome condensation occurs during prophase.",
    "Alignment occurs during metaphase.",
    "Chromosome movement toward opposite poles defines anaphase.",
    "Cytokinesis involves cytoplasmic division."
  ]
},
{
  question: "A scientist examines a cell and finds 46 chromosomes before DNA replication. How many chromosomes are present immediately after DNA replication is complete?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "23",
    "46",
    "92",
    "184"
  ],
  correct: 1,
  explanations: [
    "Chromosome number is not cut in half.",
    "The chromosome number remains 46, although each chromosome now consists of two sister chromatids.",
    "Students often confuse chromatid number with chromosome number.",
    "This exceeds the correct chromosome count."
  ]
},
{
  question: "Why is mitosis critical for multicellular organisms?",
  category: "Mitosis",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "It creates gametes.",
    "It allows growth, development, and tissue repair.",
    "It halves chromosome number.",
    "It generates extensive genetic variation."
  ],
  correct: 1,
  explanations: [
    "Gametes are produced by meiosis.",
    "Mitosis supports growth, maintenance, and repair of tissues.",
    "Chromosome number remains constant during mitosis.",
    "Genetic variation is primarily associated with meiosis."
  ]
},
// =====================================================
// EXAM 2 - CENTRAL DOGMA
// =====================================================
{
  question: "What does the Central Dogma of molecular biology describe?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "The flow of genetic information from DNA to RNA to protein",
    "The process of cell division",
    "The movement of chromosomes during mitosis",
    "The replication of DNA"
  ],
  correct: 0,
  explanations: [
    "The Central Dogma describes how information is transferred from DNA to RNA to protein.",
    "Cell division is not the focus of the Central Dogma.",
    "Chromosome movement occurs during mitosis and meiosis.",
    "DNA replication is only one part of genetic information processing."
  ]
},
{
  question: "What molecule stores genetic information in most organisms?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Protein",
    "DNA",
    "RNA",
    "ATP"
  ],
  correct: 1,
  explanations: [
    "Proteins perform many cellular functions but do not store most genetic information.",
    "DNA is the primary genetic material in most organisms.",
    "RNA is involved in gene expression.",
    "ATP stores cellular energy."
  ]
},
{
  question: "What is produced during transcription?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Protein",
    "DNA",
    "mRNA",
    "Amino acids"
  ],
  correct: 2,
  explanations: [
    "Proteins are produced during translation.",
    "DNA serves as the template during transcription.",
    "Transcription produces messenger RNA (mRNA).",
    "Amino acids are assembled during protein synthesis."
  ]
},
{
  question: "What is produced during translation?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "DNA",
    "RNA",
    "Protein",
    "Chromosomes"
  ],
  correct: 2,
  explanations: [
    "DNA is not produced during translation.",
    "RNA is used during translation but is not the final product.",
    "Translation produces proteins.",
    "Chromosomes are not produced during translation."
  ]
},
{
  question: "Which type of RNA carries genetic information from DNA to the ribosome?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "tRNA",
    "rRNA",
    "mRNA",
    "miRNA"
  ],
  correct: 2,
  explanations: [
    "tRNA transports amino acids.",
    "rRNA is a major component of ribosomes.",
    "mRNA carries the genetic instructions used to build a protein.",
    "miRNA is involved in gene regulation."
  ]
},
{
  question: "Which structure is responsible for protein synthesis?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Nucleus",
    "Mitochondrion",
    "Ribosome",
    "Golgi apparatus"
  ],
  correct: 2,
  explanations: [
    "The nucleus contains DNA.",
    "Mitochondria produce ATP.",
    "Ribosomes perform translation and synthesize proteins.",
    "The Golgi modifies and packages proteins."
  ]
},
{
  question: "What is the role of tRNA?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Store DNA",
    "Carry amino acids to the ribosome",
    "Replicate chromosomes",
    "Produce ATP"
  ],
  correct: 1,
  explanations: [
    "DNA is stored in chromosomes, not tRNA.",
    "tRNA delivers amino acids during translation.",
    "Chromosomes are replicated during DNA replication.",
    "ATP is primarily produced by mitochondria."
  ]
},
{
  question: "What is a codon?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "A sequence of three nucleotides that specifies an amino acid",
    "A protein",
    "A chromosome",
    "A DNA polymerase enzyme"
  ],
  correct: 0,
  explanations: [
    "Codons are three-nucleotide sequences found on mRNA.",
    "Proteins are produced using codons.",
    "Chromosomes contain many genes and codons.",
    "DNA polymerase is an enzyme involved in replication."
  ]
},
{
  question: "Where does transcription occur in eukaryotic cells?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Ribosome",
    "Cytoplasm",
    "Nucleus",
    "Cell membrane"
  ],
  correct: 2,
  explanations: [
    "Ribosomes perform translation.",
    "The cytoplasm is where most translation occurs.",
    "Transcription occurs within the nucleus.",
    "The cell membrane regulates transport."
  ]
},
{
  question: "Where does translation occur?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Nucleus",
    "Ribosome",
    "Chromosome",
    "Golgi apparatus"
  ],
  correct: 1,
  explanations: [
    "The nucleus is the site of transcription.",
    "Ribosomes perform translation.",
    "Chromosomes contain genes but do not perform translation.",
    "The Golgi modifies proteins after synthesis."
  ]
},
{
  question: "Which sequence correctly represents the flow of information described by the Central Dogma?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Protein → RNA → DNA",
    "DNA → RNA → Protein",
    "RNA → Protein → DNA",
    "DNA → Protein → RNA"
  ],
  correct: 1,
  explanations: [
    "Information does not typically flow this way.",
    "This is the classic Central Dogma pathway.",
    "RNA usually comes from DNA.",
    "Proteins are produced after RNA."
  ]
},
{
  question: "What is the relationship between a codon and an anticodon?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "They are identical sequences",
    "The anticodon pairs with a complementary codon",
    "Both are found only in DNA",
    "Both are amino acids"
  ],
  correct: 1,
  explanations: [
    "Codons and anticodons are complementary, not identical.",
    "tRNA anticodons pair with mRNA codons during translation.",
    "Codons and anticodons are involved with RNA molecules.",
    "Neither is an amino acid."
  ]
},
{
  question: "A scientist observes RNA being synthesized from a DNA template. Which process is occurring?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Replication",
    "Translation",
    "Transcription",
    "Mitosis"
  ],
  correct: 2,
  explanations: [
    "Replication produces DNA from DNA.",
    "Translation produces protein from RNA.",
    "Transcription produces RNA from a DNA template.",
    "Mitosis is cell division."
  ]
},
{
  question: "Which molecule directly delivers amino acids to a growing protein?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "DNA",
    "mRNA",
    "tRNA",
    "rRNA"
  ],
  correct: 2,
  explanations: [
    "DNA stores genetic information.",
    "mRNA carries instructions.",
    "tRNA transports amino acids to the ribosome.",
    "rRNA forms part of the ribosome."
  ]
},
{
  question: "What is gene expression?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "The process of DNA replication",
    "The use of genetic information to produce a functional product",
    "The movement of chromosomes",
    "The duplication of cells"
  ],
  correct: 1,
  explanations: [
    "Replication copies DNA.",
    "Gene expression results in RNA and/or protein production.",
    "Chromosome movement occurs during cell division.",
    "Cell duplication is not gene expression."
  ]
},
{
  question: "What role does rRNA play in the cell?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Carries amino acids",
    "Forms part of the ribosome",
    "Stores genetic information",
    "Replicates DNA"
  ],
  correct: 1,
  explanations: [
    "tRNA carries amino acids.",
    "rRNA is a major structural and functional component of ribosomes.",
    "DNA stores genetic information.",
    "rRNA is not involved in DNA replication."
  ]
},
{
  question: "A codon on mRNA reads AUG. What is its significance?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "It often serves as the start codon for translation",
    "It ends translation",
    "It replicates DNA",
    "It forms a chromosome"
  ],
  correct: 0,
  explanations: [
    "AUG commonly functions as the start codon.",
    "Stop codons end translation.",
    "Codons do not replicate DNA.",
    "Codons do not form chromosomes."
  ]
},
{
  question: "Why are proteins important in cells?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "They perform many structural and functional roles",
    "They store hereditary information",
    "They make chromosomes move",
    "They replace DNA"
  ],
  correct: 0,
  explanations: [
    "Proteins function as enzymes, structural components, signaling molecules, and more.",
    "DNA is the primary hereditary material.",
    "Only some proteins are involved in chromosome movement.",
    "Proteins do not replace DNA."
  ]
},
{
  question: "A mutation changes a DNA sequence within a gene. Which molecule is most directly affected next?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "mRNA",
    "ATP",
    "Cell membrane",
    "Ribosome"
  ],
  correct: 0,
  explanations: [
    "The altered DNA sequence will first affect the mRNA produced during transcription.",
    "ATP production is not the direct next step.",
    "The membrane is not directly altered by the mutation.",
    "The ribosome reads mRNA but is not produced from the gene."
  ]
},
{
  question: "Why must codons be read in groups of three nucleotides?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Each codon specifies an amino acid or translation signal",
    "Three nucleotides form a chromosome",
    "Proteins contain only three amino acids",
    "DNA polymerase requires groups of three"
  ],
  correct: 0,
  explanations: [
    "The genetic code is based on three-nucleotide codons.",
    "Chromosomes are much larger structures.",
    "Proteins typically contain many amino acids.",
    "DNA polymerase is not the reason codons are triplets."
  ]
},
{
  question: "A researcher blocks transcription in a cell. What is the most immediate consequence?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "No new mRNA molecules will be produced",
    "DNA replication stops immediately",
    "Chromosomes separate",
    "ATP production ceases"
  ],
  correct: 0,
  explanations: [
    "Transcription produces mRNA, so blocking it prevents new mRNA synthesis.",
    "Replication is a separate process.",
    "Chromosome separation occurs during cell division.",
    "ATP production can continue temporarily."
  ]
},
{
  question: "A mutation prevents ribosomes from functioning correctly. What is the most likely result?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "Protein synthesis will be disrupted",
    "DNA will disappear",
    "Replication will stop permanently",
    "Chromosomes will double"
  ],
  correct: 0,
  explanations: [
    "Without functional ribosomes, translation cannot proceed normally.",
    "DNA remains in the cell.",
    "DNA replication is not directly controlled by ribosomes.",
    "Ribosome dysfunction does not cause chromosome doubling."
  ]
},
{
  question: "A cell produces normal amounts of mRNA but fails to produce proteins. Which process is most likely affected?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "Replication",
    "Transcription",
    "Translation",
    "Mitosis"
  ],
  correct: 2,
  explanations: [
    "Replication copies DNA.",
    "Transcription appears to be functioning because mRNA is present.",
    "Translation converts mRNA information into protein.",
    "Mitosis is unrelated to protein synthesis."
  ]
},
{
  question: "A tRNA molecule loses its ability to bind amino acids. What would be the most likely consequence?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "DNA replication would stop",
    "Proteins would be assembled incorrectly or not at all",
    "Chromosomes would disappear",
    "Transcription would increase"
  ],
  correct: 1,
  explanations: [
    "DNA replication does not directly depend on tRNA.",
    "tRNA must deliver amino acids for proper protein synthesis.",
    "Chromosomes would remain present.",
    "Transcription is not expected to increase because of this defect."
  ]
},
{
  question: "A gene contains a mutation that changes one codon in its mRNA. What is the most likely outcome?",
  category: "Central Dogma",
  exam: "Exam 2",
  difficulty: "Hard",
  options: [
    "The resulting protein may contain a different amino acid",
    "All DNA in the cell is destroyed",
    "The cell immediately undergoes mitosis",
    "Ribosomes become chromosomes"
  ],
  correct: 0,
  explanations: [
    "Changing a codon can alter the amino acid sequence of a protein.",
    "A codon mutation does not destroy all DNA.",
    "Mutations do not automatically trigger mitosis.",
    "Ribosomes and chromosomes are entirely different structures."
  ]
},
// =====================================================
// EXAM 2 - MEIOSIS 
// =====================================================
{
  question: "What is the primary purpose of meiosis?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "To produce genetically identical cells",
    "To produce gametes",
    "To repair tissues",
    "To increase chromosome number"
  ],
  correct: 1,
  explanations: [
    "Identical cells are produced by mitosis.",
    "Meiosis produces gametes such as sperm and eggs.",
    "Tissue repair primarily relies on mitosis.",
    "Meiosis reduces chromosome number."
  ]
},
{
  question: "How many daughter cells are produced by meiosis?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "One",
    "Two",
    "Four",
    "Eight"
  ],
  correct: 2,
  explanations: [
    "Meiosis produces more than one cell.",
    "Mitosis produces two daughter cells.",
    "Meiosis produces four daughter cells.",
    "Eight daughter cells are not produced."
  ]
},
{
  question: "The cells produced by meiosis are typically:",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Diploid",
    "Genetically identical",
    "Haploid",
    "Multinucleate"
  ],
  correct: 2,
  explanations: [
    "Diploid cells are generally the starting cells.",
    "Meiosis produces genetically diverse cells.",
    "Gametes produced by meiosis are haploid.",
    "Normal meiosis does not produce multinucleate cells."
  ]
},
{
  question: "What term describes a cell that contains one set of chromosomes?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Diploid",
    "Triploid",
    "Tetraploid",
    "Haploid"
  ],
  correct: 3,
  explanations: [
    "Diploid means two sets of chromosomes.",
    "Triploid means three sets.",
    "Tetraploid means four sets.",
    "Haploid means one set of chromosomes."
  ]
},
{
  question: "What term describes a cell that contains two sets of chromosomes?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Haploid",
    "Diploid",
    "Triploid",
    "Gametic"
  ],
  correct: 1,
  explanations: [
    "Haploid cells contain one chromosome set.",
    "Diploid cells contain two chromosome sets.",
    "Triploid cells contain three sets.",
    "Gametes are typically haploid."
  ]
},
{
  question: "What is a gamete?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "A body cell",
    "A chromosome",
    "A reproductive cell",
    "A protein"
  ],
  correct: 2,
  explanations: [
    "Most body cells are somatic cells.",
    "Chromosomes contain DNA.",
    "Gametes are reproductive cells such as sperm and eggs.",
    "Proteins perform cellular functions."
  ]
},
{
  question: "What process restores the diploid chromosome number after meiosis?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Crossing over",
    "Fertilization",
    "Independent assortment",
    "Replication"
  ],
  correct: 1,
  explanations: [
    "Crossing over increases variation.",
    "Fertilization joins two haploid gametes.",
    "Independent assortment occurs during meiosis.",
    "Replication copies DNA."
  ]
},
{
  question: "Which type of reproduction generally produces genetically identical offspring?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Sexual reproduction",
    "Asexual reproduction",
    "Fertilization",
    "Meiosis"
  ],
  correct: 1,
  explanations: [
    "Sexual reproduction increases variation.",
    "Asexual reproduction usually produces genetically similar offspring.",
    "Fertilization is a component of sexual reproduction.",
    "Meiosis produces gametes."
  ]
},
{
  question: "Which process increases genetic variation in sexually reproducing organisms?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Crossing over",
    "Binary fission",
    "Mitosis",
    "Budding"
  ],
  correct: 0,
  explanations: [
    "Crossing over exchanges DNA between homologous chromosomes.",
    "Binary fission is an asexual process.",
    "Mitosis generally preserves genetic similarity.",
    "Budding is a form of asexual reproduction."
  ]
},
{
  question: "Which division comes first?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Easy",
  options: [
    "Meiosis II",
    "Cytokinesis",
    "Meiosis I",
    "Fertilization"
  ],
  correct: 2,
  explanations: [
    "Meiosis II occurs after Meiosis I.",
    "Cytokinesis accompanies division but is not the first meiotic division.",
    "Meiosis I is the first meiotic division.",
    "Fertilization occurs later."
  ]
},
{
  question: "What separates during Meiosis I?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Sister chromatids",
    "Homologous chromosomes",
    "DNA strands",
    "Genes"
  ],
  correct: 1,
  explanations: [
    "Sister chromatids separate during Meiosis II.",
    "Homologous chromosomes separate during Meiosis I.",
    "DNA strands separate during replication.",
    "Genes do not physically separate as units."
  ]
},
{
  question: "What separates during Meiosis II?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Homologous chromosomes",
    "Nuclei",
    "Sister chromatids",
    "Genes"
  ],
  correct: 2,
  explanations: [
    "Homologous chromosomes separated earlier.",
    "Nuclei are not the key structure here.",
    "Sister chromatids separate during Meiosis II.",
    "Genes remain on chromosomes."
  ]
},
{
  question: "What are homologous chromosomes?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Identical copies formed during replication",
    "Chromosomes carrying similar genes from each parent",
    "RNA molecules",
    "Proteins used in meiosis"
  ],
  correct: 1,
  explanations: [
    "Those are sister chromatids.",
    "Homologous chromosomes contain the same genes but may carry different alleles.",
    "They are not RNA.",
    "They are chromosomes, not proteins."
  ]
},
{
  question: "What event occurs during crossing over?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Chromosomes replicate",
    "DNA is exchanged between homologous chromosomes",
    "Gametes fuse",
    "Proteins are synthesized"
  ],
  correct: 1,
  explanations: [
    "Replication occurs before meiosis.",
    "Crossing over exchanges DNA between homologous chromosomes.",
    "Gamete fusion is fertilization.",
    "Protein synthesis is not crossing over."
  ]
},
{
  question: "What is the primary result of crossing over?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Reduced chromosome number",
    "Genetic variation",
    "Protein production",
    "Cell growth"
  ],
  correct: 1,
  explanations: [
    "Chromosome reduction occurs during meiosis overall.",
    "Crossing over creates new allele combinations.",
    "Protein production is unrelated.",
    "Cell growth is not the purpose."
  ]
},
{
  question: "Independent assortment refers to:",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Random alignment of chromosome pairs",
    "Replication of DNA",
    "Fertilization",
    "RNA synthesis"
  ],
  correct: 0,
  explanations: [
    "Independent assortment results from random homologous chromosome alignment.",
    "DNA replication occurs before meiosis.",
    "Fertilization combines gametes.",
    "RNA synthesis is transcription."
  ]
},
{
  question: "Why are siblings genetically different from one another?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Crossing over and independent assortment",
    "Mitosis",
    "Binary fission",
    "Protein synthesis"
  ],
  correct: 0,
  explanations: [
    "Crossing over and independent assortment generate variation.",
    "Mitosis preserves chromosome complements.",
    "Binary fission is not used by humans.",
    "Protein synthesis does not explain sibling differences."
  ]
},
{
  question: "A human body cell contains 46 chromosomes. How many chromosomes are found in a gamete?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "23",
    "46",
    "92",
    "12"
  ],
  correct: 0,
  explanations: [
    "Gametes are haploid and contain 23 chromosomes.",
    "46 is the diploid number.",
    "Chromosome number does not double in gametes.",
    "Humans do not produce 12-chromosome gametes."
  ]
},
{
  question: "Why is reduction of chromosome number important during meiosis?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "To prevent chromosome doubling every generation",
    "To create proteins",
    "To increase ATP production",
    "To stop mutations"
  ],
  correct: 0,
  explanations: [
    "Chromosome reduction maintains a stable chromosome number across generations.",
    "Protein synthesis is unrelated.",
    "ATP production is unrelated.",
    "Meiosis does not stop mutations."
  ]
},
{
  question: "A diploid cell enters meiosis. What is true of the resulting cells?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "They remain diploid",
    "They are haploid",
    "They contain more chromosomes than the parent cell",
    "They are genetically identical"
  ],
  correct: 1,
  explanations: [
    "Meiosis reduces chromosome number.",
    "The resulting cells are haploid.",
    "Chromosome number is reduced, not increased.",
    "Meiosis generates variation."
  ]
},
{
  question: "Which process directly contributes to genetic diversity before fertilization occurs?",
  category: "Meiosis",
  exam: "Exam 2",
  difficulty: "Medium",
  options: [
    "Crossing over",
    "Translation",
    "Cellular respiration",
    "DNA repair"
  ],
  correct: 0,
  explanations: [
    "Crossing over creates new combinations of alleles.",
    "Translation produces proteins.",
    "Respiration generates ATP.",
    "DNA repair"
]	
},
// =====================================================
// EXAM 3 - MENDELIAN GENETICS
// =====================================================
{
  question: "Who is known as the 'Father of Genetics'?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Charles Darwin",
    "Gregor Mendel",
    "James Watson",
    "Louis Pasteur"
  ],
  correct: 1,
  explanations: [
    "Darwin developed the theory of evolution by natural selection.",
    "Gregor Mendel's pea plant experiments laid the foundation for genetics.",
    "Watson helped determine the structure of DNA.",
    "Pasteur made important contributions to microbiology."
  ]
},
{
  question: "What is a gene?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "A chromosome",
    "A segment of DNA that influences a trait",
    "A protein",
    "A cell"
  ],
  correct: 1,
  explanations: [
    "Chromosomes contain many genes.",
    "A gene is a segment of DNA associated with a trait.",
    "Proteins are often produced from genes.",
    "Cells contain genes but are not genes."
  ]
},
{
  question: "What is an allele?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "A version of a gene",
    "A chromosome",
    "A protein",
    "A gamete"
  ],
  correct: 0,
  explanations: [
    "Alleles are alternative forms of the same gene.",
    "Chromosomes contain many genes.",
    "Proteins are products of gene expression.",
    "Gametes carry alleles but are not alleles themselves."
  ]
},
{
  question: "What is a genotype?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "An organism's physical appearance",
    "An organism's allele combination",
    "A type of chromosome",
    "A reproductive cell"
  ],
  correct: 1,
  explanations: [
    "Physical appearance is the phenotype.",
    "Genotype refers to the alleles an organism possesses.",
    "A genotype is not a chromosome type.",
    "Gametes are reproductive cells."
  ]
},
{
  question: "What is a phenotype?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "An organism's observable traits",
    "The DNA sequence of a gene",
    "The chromosome number",
    "A type of allele"
  ],
  correct: 0,
  explanations: [
    "Phenotype refers to observable characteristics.",
    "DNA sequence contributes to phenotype but is not the phenotype itself.",
    "Chromosome number is not a phenotype.",
    "Alleles contribute to phenotype."
  ]
},
{
  question: "What does it mean if an organism is homozygous?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "It has two different alleles",
    "It has two identical alleles",
    "It has one chromosome",
    "It lacks a gene"
  ],
  correct: 1,
  explanations: [
    "This describes heterozygous.",
    "Homozygous means possessing two identical alleles.",
    "Chromosome number is unrelated.",
    "The gene is still present."
  ]
},
{
  question: "What does it mean if an organism is heterozygous?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "It has two different alleles",
    "It has two identical alleles",
    "It lacks chromosomes",
    "It has four alleles"
  ],
  correct: 0,
  explanations: [
    "Heterozygous means carrying two different alleles.",
    "That describes homozygous.",
    "Chromosomes are still present.",
    "Organisms typically have two alleles per gene."
  ]
},
{
  question: "If T represents a dominant allele and t represents a recessive allele, which genotype is homozygous dominant?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "TT",
    "Tt",
    "tt",
    "tT"
  ],
  correct: 0,
  explanations: [
    "TT contains two dominant alleles.",
    "Tt is heterozygous.",
    "tt is homozygous recessive.",
    "tT is also heterozygous."
  ]
},
{
  question: "Which genotype is homozygous recessive?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "TT",
    "Tt",
    "tt",
    "TTT"
  ],
  correct: 2,
  explanations: [
    "TT is homozygous dominant.",
    "Tt is heterozygous.",
    "tt contains two recessive alleles.",
    "This is not a typical diploid genotype."
  ]
},
{
  question: "A dominant allele will be expressed when:",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "At least one dominant allele is present",
    "Two recessive alleles are present",
    "No alleles are present",
    "Only during meiosis"
  ],
  correct: 0,
  explanations: [
    "Dominant alleles affect phenotype when present.",
    "Two recessive alleles produce the recessive phenotype.",
    "Genes are present in normal cells.",
    "Dominance is not limited to meiosis."
  ]
},
{
  question: "A heterozygous tall plant (Tt) is crossed with a homozygous recessive short plant (tt). What percentage of offspring are expected to be short?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "0%",
    "25%",
    "50%",
    "100%"
  ],
  correct: 2,
  explanations: [
    "Some offspring will be short.",
    "A Punnett square predicts more than 25% short offspring.",
    "Tt × tt produces 50% tt offspring.",
    "Not all offspring are short."
  ]
},
{
  question: "Two heterozygous parents (Aa × Aa) produce offspring. What is the probability of genotype aa?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "25%",
    "50%",
    "75%",
    "100%"
  ],
  correct: 0,
  explanations: [
    "A Punnett square predicts 1 out of 4 offspring will be aa.",
    "Half are not expected to be aa.",
    "This is too high.",
    "Not all offspring receive aa."
  ]
},
{
  question: "Two heterozygous parents (Aa × Aa) produce offspring. Which genotype is expected most frequently?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "AA",
    "Aa",
    "aa",
    "All equally often"
  ],
  correct: 1,
  explanations: [
    "AA occurs 1 out of 4 times.",
    "Aa occurs 2 out of 4 times.",
    "aa occurs 1 out of 4 times.",
    "The genotypes are not equally frequent."
  ]
},
{
  question: "A homozygous dominant plant (TT) is crossed with a homozygous recessive plant (tt). What genotype will all offspring have?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "TT",
    "Tt",
    "tt",
    "50% TT and 50% tt"
  ],
  correct: 1,
  explanations: [
    "Offspring inherit one allele from each parent.",
    "All offspring receive T from one parent and t from the other.",
    "No offspring receive two recessive alleles.",
    "This is not the predicted outcome."
  ]
},
{
  question: "If B is dominant for black fur and b is recessive for white fur, what phenotype is expected for genotype Bb?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "White fur",
    "Black fur",
    "Gray fur",
    "Both colors equally"
  ],
  correct: 1,
  explanations: [
    "White fur requires bb.",
    "The dominant allele B determines the phenotype.",
    "Gray fur is not indicated here.",
    "Dominance results in the black phenotype."
  ]
},
{
  question: "What percentage of offspring from a TT × tt cross are expected to show the dominant phenotype?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "0%",
    "25%",
    "50%",
    "100%"
  ],
  correct: 3,
  explanations: [
    "This cross produces dominant phenotypes.",
    "Too few.",
    "Too few.",
    "All offspring are Tt and express the dominant phenotype."
  ]
},
{
  question: "A cross between Aa and aa produces what percentage of heterozygous offspring?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "0%",
    "25%",
    "50%",
    "100%"
  ],
  correct: 2,
  explanations: [
    "Some offspring are heterozygous.",
    "The Punnett square predicts more than this.",
    "Two of four outcomes are Aa.",
    "Not all offspring are heterozygous."
  ]
},
{
  question: "A trait is recessive. When will the recessive phenotype be expressed?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Whenever one recessive allele is present",
    "Only when two recessive alleles are present",
    "Only during meiosis",
    "Whenever a dominant allele is present"
  ],
  correct: 1,
  explanations: [
    "One recessive allele is often masked by dominance.",
    "Recessive phenotypes typically require two recessive alleles.",
    "Phenotypes are not limited to meiosis.",
    "Dominant alleles mask recessive effects."
  ]
},
{
  question: "A Punnett square is primarily used to:",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Measure chromosome length",
    "Predict possible offspring genotypes",
    "Determine protein structure",
    "Identify mutations"
  ],
  correct: 1,
  explanations: [
    "Chromosome length is not the purpose.",
    "Punnett squares predict inheritance outcomes.",
    "Protein structure is not their purpose.",
    "They do not directly identify mutations."
  ]
},
{
  question: "A cross produces offspring with genotypes AA, Aa, Aa, and aa. What percentage show the dominant phenotype?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "25%",
    "50%",
    "75%",
    "100%"
  ],
  correct: 2,
  explanations: [
    "More than one genotype expresses the dominant phenotype.",
    "Too low.",
    "AA and both Aa offspring show the dominant phenotype.",
    "One offspring expresses the recessive phenotype."
  ]
},
{
  question: "Two plants with genotype Tt are crossed. What proportion of offspring are expected to be homozygous?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "25%",
    "50%",
    "75%",
    "100%"
  ],
  correct: 1,
  explanations: [
    "Only one quarter are TT.",
    "TT and tt together make up half of the offspring.",
    "This is too high.",
    "Not all offspring are homozygous."
  ]
},
{
  question: "Two parents show a dominant phenotype but have a child showing a recessive phenotype. What must be true?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Both parents are heterozygous",
    "Both parents are homozygous dominant",
    "One parent lacks the gene",
    "The child is heterozygous"
  ],
  correct: 0,
  explanations: [
    "Both parents must carry the recessive allele.",
    "AA × AA cannot produce recessive offspring.",
    "The gene must be present.",
    "A recessive phenotype requires two recessive alleles."
  ]
},
{
  question: "Which parental cross cannot produce offspring with genotype aa?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Aa × Aa",
    "Aa × aa",
    "AA × Aa",
    "aa × Aa"
  ],
  correct: 2,
  explanations: [
    "This cross can produce aa.",
    "This cross can produce aa.",
    "No parent contributes two recessive alleles in the same offspring.",
    "This cross can produce aa."
  ]
},
{
  question: "A dominant phenotype appears in every offspring from a cross. Which parental cross is most likely?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "TT × tt",
    "Tt × tt",
    "Tt × Tt",
    "tt × tt"
  ],
  correct: 0,
  explanations: [
    "All offspring are Tt and show the dominant phenotype.",
    "Half would be recessive.",
    "Some recessive offspring would occur.",
    "All offspring would be recessive."
  ]
},
{
  question: "A white-flowered plant is known to have genotype rr. What can be concluded?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "The plant is heterozygous",
    "The trait is dominant",
    "The plant is homozygous recessive",
    "The plant must produce only white offspring"
  ],
  correct: 2,
  explanations: [
    "rr is not heterozygous.",
    "The recessive phenotype is being expressed.",
    "Two recessive alleles make the genotype homozygous recessive.",
    "Offspring phenotype depends on the other parent."
  ]
},
{
  question: "Why did Mendel study many offspring across generations?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "To identify inheritance patterns",
    "To sequence DNA",
    "To observe chromosomes directly",
    "To study mitosis"
  ],
  correct: 0,
  explanations: [
    "Large numbers helped reveal predictable inheritance patterns.",
    "DNA sequencing did not exist in Mendel's time.",
    "Chromosomes were not the primary focus of his experiments.",
    "His work focused on heredity."
  ]
},
{
  question: "If a heterozygous individual produces gametes, what alleles can appear in those gametes?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Only the dominant allele",
    "Only the recessive allele",
    "Both alleles can appear in different gametes",
    "Neither allele appears"
  ],
  correct: 2,
  explanations: [
    "Both alleles are represented among gametes.",
    "Both are possible.",
    "Each gamete receives one of the two alleles.",
    "Gametes must contain an allele."
  ]
},
{
  question: "Which statement best distinguishes genotype from phenotype?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Genotype refers to allele combinations, phenotype refers to observable traits",
    "Genotype and phenotype mean the same thing",
    "Phenotype refers to DNA sequence only",
    "Genotype refers only to appearance"
  ],
  correct: 0,
  explanations: [
    "This is the correct distinction.",
    "They describe different concepts.",
    "Phenotype refers to expressed traits.",
    "Genotype refers to inherited alleles."
  ]
},
{
  question: "What is the genotype of an organism that carries one dominant and one recessive allele?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Homozygous dominant",
    "Homozygous recessive",
    "Heterozygous",
    "Diploid"
  ],
  correct: 2,
  explanations: [
    "This requires two dominant alleles.",
    "This requires two recessive alleles.",
    "One dominant and one recessive allele defines heterozygosity.",
    "Diploid refers to chromosome sets."
  ]
},
{
  question: "Which genotype will always express a recessive phenotype?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "AA",
    "Aa",
    "aa",
    "A_"
  ],
  correct: 2,
  explanations: [
    "AA expresses the dominant phenotype.",
    "Aa expresses the dominant phenotype.",
    "Two recessive alleles are required for a recessive phenotype.",
    "A_ indicates at least one dominant allele."
  ]
},
{
  question: "A tall plant has genotype Tt. What can be concluded about its phenotype?",
  category: "Mendelian Genetics",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Tall",
    "Short",
    "Cannot be determined",
    "Both tall and short"
  ],
  correct: 0,
  explanations: [
    "The dominant allele determines the phenotype.",
    "Short requires tt.",
    "The phenotype can be determined.",
    "The plant expresses one phenotype."
  ]
},
// =====================================================
// EXAM 3 - PREDICTING PHENOTYPES AND GENOTYPES
// =====================================================
{
  question: "What does Mendel's Law of Segregation state?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Alleles separate during gamete formation",
    "All genes are inherited together",
    "Chromosomes never separate",
    "Traits blend together"
  ],
  correct: 0,
  explanations: [
    "The two alleles for a gene separate during gamete production.",
    "Many genes assort independently.",
    "Chromosomes do separate during meiosis.",
    "Mendel's results contradicted blending inheritance."
  ]
},
{
  question: "According to the Law of Segregation, how many alleles for a gene does a gamete receive?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Zero",
    "One",
    "Two",
    "Four"
  ],
  correct: 1,
  explanations: [
    "Gametes contain genes.",
    "Each gamete receives one allele from a pair.",
    "Gametes are haploid.",
    "Four alleles would be impossible for a diploid organism."
  ]
},
{
  question: "What does Mendel's Law of Independent Assortment state?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Genes on different chromosomes assort independently into gametes",
    "All genes are inherited together",
    "Chromosomes remain paired forever",
    "Genes disappear during meiosis"
  ],
  correct: 0,
  explanations: [
    "Genes on different chromosome pairs assort independently.",
    "This contradicts Mendel's second law.",
    "Homologous chromosomes separate during meiosis.",
    "Genes are inherited, not lost."
  ]
},
{
  question: "Which process provides the physical basis for Mendel's Law of Segregation?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Fertilization",
    "Separation of homologous chromosomes during meiosis",
    "Protein synthesis",
    "DNA replication"
  ],
  correct: 1,
  explanations: [
    "Fertilization combines gametes.",
    "Homologous chromosome separation explains segregation.",
    "Protein synthesis does not explain inheritance patterns.",
    "DNA replication copies chromosomes."
  ]
},
{
  question: "A plant has genotype Bb. Which allele can appear in a gamete?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Only B",
    "Only b",
    "Either B or b",
    "Bb"
  ],
  correct: 2,
  explanations: [
    "Some gametes receive B but not all.",
    "Some gametes receive b but not all.",
    "Alleles segregate during meiosis.",
    "Gametes receive one allele, not both."
  ]
},
{
  question: "Which stage of meiosis is most directly responsible for segregation?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Anaphase I",
    "Telophase II",
    "Prophase II",
    "Interphase"
  ],
  correct: 0,
  explanations: [
    "Homologous chromosomes separate during Anaphase I.",
    "Segregation has already occurred.",
    "This stage occurs later.",
    "Interphase occurs before meiosis."
  ]
},
{
  question: "A gamete produced from genotype Tt can contain:",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "TT",
    "Tt",
    "Either T or t",
    "Neither T nor t"
  ],
  correct: 2,
  explanations: [
    "Gametes contain one allele.",
    "Gametes do not contain allele pairs.",
    "Either allele may enter a gamete.",
    "Every gamete receives an allele."
  ]
},
{
  question: "Which chromosome pair is most important for understanding Mendel's laws?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Homologous chromosomes",
    "Sister chromatids",
    "Mitochondria",
    "Ribosomes"
  ],
  correct: 0,
  explanations: [
    "Homologous chromosome behavior explains Mendel's observations.",
    "Sister chromatids separate later.",
    "Mitochondria are not involved in chromosome inheritance.",
    "Ribosomes synthesize proteins."
  ]
},
{
  question: "Why are gametes haploid?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "They contain one chromosome set",
    "They contain two chromosome sets",
    "They contain no chromosomes",
    "They contain extra chromosomes"
  ],
  correct: 0,
  explanations: [
    "Gametes receive one member of each homologous pair.",
    "Diploid cells contain two chromosome sets.",
    "Gametes must contain chromosomes.",
    "Gametes generally contain half the chromosome number."
  ]
},
{
  question: "When fertilization occurs, the chromosome number:",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Is restored to diploid",
    "Is cut in half",
    "Disappears",
    "Doubles repeatedly"
  ],
  correct: 0,
  explanations: [
    "Fusion of two haploid gametes restores diploidy.",
    "Meiosis reduces chromosome number.",
    "Chromosomes are inherited.",
    "Chromosome number is restored, not repeatedly doubled."
  ]
},
{
  question: "An individual has genotype Yy. Which gametes are possible?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "YY and yy",
    "Yy only",
    "Y and y",
    "YY, Yy, and yy"
  ],
  correct: 2,
  explanations: [
    "Gametes contain one allele, not pairs of alleles.",
    "Gametes do not retain both alleles.",
    "The Law of Segregation predicts that either Y or y may enter a gamete.",
    "These are diploid combinations rather than gametes."
  ]
},
{
  question: "An individual has genotype Rr. What proportion of gametes should contain the R allele?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "0%",
    "25%",
    "50%",
    "100%"
  ],
  correct: 2,
  explanations: [
    "Some gametes receive the dominant allele.",
    "Segregation predicts a higher proportion.",
    "Half the gametes are expected to receive R and half receive r.",
    "Not all gametes receive R."
  ]
},
{
  question: "An organism has genotype YyRr. How many different gamete combinations are possible?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "2",
    "4",
    "8",
    "16"
  ],
  correct: 1,
  explanations: [
    "Too few combinations are listed.",
    "YR, Yr, yR, and yr are all possible.",
    "This overestimates the number for two genes.",
    "This greatly overestimates the number."
  ]
},
{
  question: "Which gamete can be produced by an organism with genotype BbTt?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Bb",
    "BT",
    "BbTt",
    "TT"
  ],
  correct: 1,
  explanations: [
    "Gametes contain one allele from each gene.",
    "BT is a valid gamete.",
    "Gametes do not contain both allele pairs.",
    "This contains two alleles from the same gene."
  ]
},
{
  question: "Which gamete cannot be produced by an organism with genotype YyRr?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "YR",
    "Yr",
    "yR",
    "YY"
  ],
  correct: 3,
  explanations: [
    "This is a valid gamete.",
    "This is a valid gamete.",
    "This is a valid gamete.",
    "Gametes contain only one allele for each gene."
  ]
},
{
  question: "What is the probability that a gamete from a Yy individual contains the y allele?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "25%",
    "50%",
    "75%",
    "100%"
  ],
  correct: 1,
  explanations: [
    "Segregation predicts a higher probability.",
    "Half the gametes should receive y.",
    "This is too high.",
    "Not every gamete receives y."
  ]
},
{
  question: "An individual has genotype AABb. How many different gamete types are possible?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "1",
    "2",
    "4",
    "8"
  ],
  correct: 1,
  explanations: [
    "More than one gamete type is possible.",
    "Only AB and Ab can be produced.",
    "This overestimates the number.",
    "This greatly overestimates the number."
  ]
},
{
  question: "A dihybrid organism is heterozygous for two genes. What does this mean?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "It is homozygous for both genes",
    "It has one gene",
    "It carries two different alleles for each of two genes",
    "It lacks chromosomes"
  ],
  correct: 2,
  explanations: [
    "That would not be heterozygous.",
    "Two genes are being considered.",
    "A dihybrid heterozygote has two different alleles at both gene loci.",
    "Chromosomes are still present."
  ]
},
{
  question: "The random orientation of homologous chromosome pairs during Metaphase I contributes directly to:",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Independent assortment",
    "DNA replication",
    "Protein synthesis",
    "Mutation repair"
  ],
  correct: 0,
  explanations: [
    "Independent assortment arises from random chromosome alignment.",
    "Replication occurs before meiosis.",
    "Protein synthesis is unrelated.",
    "Mutation repair is not the primary consequence."
  ]
},
{
  question: "A Yy individual produces a large number of gametes. Which outcome is most likely?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "All carry Y",
    "All carry y",
    "Approximately half carry Y and half carry y",
    "No gametes carry either allele"
  ],
  correct: 2,
  explanations: [
    "This violates the Law of Segregation.",
    "This violates the Law of Segregation.",
    "Segregation predicts an approximately 1:1 ratio.",
    "Gametes must carry one allele."
  ]
},
{
  question: "An individual has genotype YyRr. Which list contains all possible gametes?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "YR, Yr, yR, yr",
    "YY, RR, yy, rr",
    "YR, yr only",
    "Yy, Rr"
  ],
  correct: 0,
  explanations: [
    "Independent assortment produces all four combinations.",
    "These are not gametes.",
    "Two valid gametes are missing.",
    "Gametes do not contain allele pairs."
  ]
},
{
  question: "A YyRr individual can produce four gamete types. What biological process allows this?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Independent assortment during meiosis",
    "Mitosis",
    "Translation",
    "Binary fission"
  ],
  correct: 0,
  explanations: [
    "Independent assortment creates multiple chromosome combinations.",
    "Mitosis does not create these gamete combinations.",
    "Translation synthesizes proteins.",
    "Binary fission occurs in prokaryotes."
  ]
},
{
  question: "A cross between two YyRr individuals is performed. Assuming independent assortment, what classic phenotypic ratio is expected?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "3:1",
    "1:1",
    "9:3:3:1",
    "1:2:1"
  ],
  correct: 2,
  explanations: [
    "This is a classic monohybrid phenotypic ratio.",
    "This ratio is expected in some test crosses.",
    "9:3:3:1 is the hallmark dihybrid ratio.",
    "This is a classic monohybrid genotypic ratio."
  ]
},
{
  question: "An organism has genotype AaBb. What is the probability of producing the gamete ab?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "25%",
    "50%",
    "75%",
    "100%"
  ],
  correct: 0,
  explanations: [
    "One out of four gametes is expected to be ab.",
    "Half the gametes are not expected to be ab.",
    "This probability is too high.",
    "Not every gamete will be ab."
  ]
},
{
  question: "Which observation would provide the strongest evidence for independent assortment?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Multiple combinations of alleles appear in gametes",
    "All gametes are identical",
    "Chromosomes fail to separate",
    "No offspring are produced"
  ],
  correct: 0,
  explanations: [
    "Independent assortment generates many allele combinations.",
    "Identical gametes would not support independent assortment.",
    "Chromosome separation failure is abnormal.",
    "No offspring provide no information about assortment."
  ]
},
{
  question: "If the alleles of one gene always traveled together into gametes, which law would be violated?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Law of Segregation",
    "Cell Theory",
    "Central Dogma",
    "Hardy-Weinberg Principle"
  ],
  correct: 0,
  explanations: [
    "Segregation requires the two alleles to separate during gamete formation.",
    "Cell Theory concerns the nature of cells.",
    "The Central Dogma concerns information flow.",
    "Hardy-Weinberg concerns population genetics."
  ]
},
{
  question: "A YyRr plant produces only YR and yr gametes. Which conclusion is most reasonable?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Independent assortment may not be occurring normally",
    "The plant is homozygous",
    "The plant lacks chromosomes",
    "The plant underwent mitosis"
  ],
  correct: 0,
  explanations: [
    "Independent assortment would normally generate four gamete combinations.",
    "The genotype indicates heterozygosity.",
    "Chromosomes are clearly present.",
    "Mitosis does not explain gamete formation."
  ]
},
{
  question: "Which event during meiosis provides the strongest mechanistic explanation for the Law of Independent Assortment?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Random alignment of homologous chromosome pairs at Metaphase I",
    "DNA replication",
    "Protein synthesis",
    "Cytokinesis"
  ],
  correct: 0,
  explanations: [
    "Random chromosome orientation creates many gamete combinations.",
    "Replication copies DNA but does not explain assortment.",
    "Protein synthesis is unrelated.",
    "Cytokinesis divides cells."
  ]
},
{
  question: "An organism has genotype AaBbCc. How many different gamete combinations are possible under independent assortment?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "4",
    "6",
    "8",
    "12"
  ],
  correct: 2,
  explanations: [
    "Too few combinations are listed.",
    "This is not the correct number.",
    "Three heterozygous gene pairs produce 2³ = 8 possible gametes.",
    "This overestimates the number."
  ]
},
{
  question: "Why was Mendel's discovery of independent assortment important?",
  category: "Chromosome Behavior",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "It explained how different traits can be inherited in many combinations",
    "It proved all genes are inherited together",
    "It showed meiosis never produces variation",
    "It demonstrated that chromosomes do not separate"
  ],
  correct: 0,
  explanations: [
    "Independent assortment explains the diversity of allele combinations in offspring.",
    "Mendel's findings showed the opposite.",
    "Meiosis generates variation.",
    "Chromosome separation is central to Mendelian inheritance."
  ]
},
// =====================================================
// EXAM 3 - MULTIPLE ALLELS AND PEDIGREES
// =====================================================
{
  question: "What is a pedigree?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "A diagram used to trace inheritance through a family",
    "A chromosome map",
    "A Punnett square",
    "A DNA sequence"
  ],
  correct: 0,
  explanations: [
    "Pedigrees track traits across generations of a family.",
    "Chromosome maps show gene locations.",
    "Punnett squares predict offspring probabilities.",
    "DNA sequences describe nucleotide order."
  ]
},
{
  question: "In a pedigree, a square usually represents:",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "A male",
    "A female",
    "A chromosome",
    "A gene"
  ],
  correct: 0,
  explanations: [
    "Squares represent males in standard pedigrees.",
    "Circles represent females.",
    "Pedigree symbols do not represent chromosomes.",
    "Pedigree symbols do not represent individual genes."
  ]
},
{
  question: "In a pedigree, a circle usually represents:",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "A chromosome",
    "A female",
    "A male",
    "A carrier"
  ],
  correct: 1,
  explanations: [
    "A chromosome is not represented by a circle.",
    "Circles represent females in standard pedigrees.",
    "Squares represent males.",
    "Carriers are often indicated by partial shading."
  ]
},
{
  question: "In most pedigree diagrams, a shaded symbol indicates:",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "An affected individual",
    "A carrier only",
    "An unknown individual",
    "A deceased individual"
  ],
  correct: 0,
  explanations: [
    "Shading generally indicates expression of the trait being studied.",
    "Carriers are often indicated differently.",
    "Unknown individuals are usually represented differently.",
    "Death is typically indicated by a slash."
  ]
},
{
  question: "What is a carrier?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "An individual who lacks the gene",
    "An individual carrying a recessive allele without expressing the trait",
    "An affected individual",
    "An individual with a dominant trait"
  ],
  correct: 1,
  explanations: [
    "The gene is still present.",
    "Carriers possess a recessive allele but do not show the recessive phenotype.",
    "Carriers are often unaffected.",
    "Dominance is not required for carrier status."
  ]
},
{
  question: "What is pleiotropy?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "One gene influences multiple traits",
    "Many genes influence one trait",
    "A chromosome mutation",
    "Independent assortment"
  ],
  correct: 0,
  explanations: [
    "Pleiotropy occurs when one gene affects multiple characteristics.",
    "This describes a different genetic concept.",
    "Pleiotropy is not defined as a chromosome mutation.",
    "Independent assortment involves chromosome segregation."
  ]
},
{
  question: "Why can a pleiotropic gene affect multiple traits?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Its product functions in multiple tissues or processes",
    "The gene is present on every chromosome",
    "The gene replicates itself",
    "The gene prevents meiosis"
  ],
  correct: 0,
  explanations: [
    "One gene product may influence several body systems.",
    "Genes are not present on every chromosome.",
    "Replication does not explain pleiotropy.",
    "Pleiotropy does not prevent meiosis."
  ]
},
{
  question: "A pedigree is most useful for studying:",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Patterns of inheritance",
    "Protein synthesis",
    "DNA replication",
    "Cellular respiration"
  ],
  correct: 0,
  explanations: [
    "Pedigrees reveal how traits are inherited through generations.",
    "Protein synthesis is not the purpose of pedigrees.",
    "DNA replication is not analyzed using pedigrees.",
    "Pedigrees are not used to study respiration."
  ]
},
{
  question: "Individuals connected by a horizontal line in a pedigree are typically:",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Siblings",
    "Parents",
    "A mating pair",
    "Identical twins"
  ],
  correct: 2,
  explanations: [
    "Siblings are typically shown beneath a mating pair.",
    "Parents may be part of the mating pair.",
    "A horizontal line usually represents a mating pair.",
    "Twins are shown with a different symbol."
  ]
},
{
  question: "A vertical line descending from a mating pair usually represents:",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Offspring",
    "Mutation",
    "Chromosomes",
    "Dominance"
  ],
  correct: 0,
  explanations: [
    "The line connects parents to offspring.",
    "Mutations are not shown this way.",
    "Pedigrees do not directly show chromosomes.",
    "Dominance is inferred, not represented by a vertical line."
  ]
},
{
  question: "Two unaffected parents have an affected child. Which inheritance pattern is most likely?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Autosomal dominant",
    "Autosomal recessive",
    "Neither",
    "Pleiotropy"
  ],
  correct: 1,
  explanations: [
    "Dominant traits usually appear in a parent.",
    "Recessive traits can appear when both parents are carriers.",
    "A recessive explanation exists.",
    "Pleiotropy describes gene effects, not inheritance patterns."
  ]
},
{
  question: "An autosomal dominant trait typically appears:",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "In every generation",
    "Only in males",
    "Only in females",
    "Only after skipping generations"
  ],
  correct: 0,
  explanations: [
    "Dominant traits often appear in successive generations.",
    "Autosomal traits affect both sexes.",
    "Autosomal traits affect both sexes.",
    "Skipping generations is more characteristic of recessive traits."
  ]
},
{
  question: "An autosomal recessive trait often:",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Appears in every generation",
    "Skips generations",
    "Occurs only in males",
    "Occurs only in females"
  ],
  correct: 1,
  explanations: [
    "This is more typical of dominant traits.",
    "Recessive traits may skip generations because carriers are unaffected.",
    "Autosomal traits affect both sexes.",
    "Autosomal traits affect both sexes."
  ]
},
{
  question: "If a recessive disorder appears in a child, what must be true?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "The child inherited a recessive allele from each parent",
    "The child inherited only dominant alleles",
    "One parent lacks the gene",
    "The disorder must be pleiotropic"
  ],
  correct: 0,
  explanations: [
    "Two recessive alleles are required for a recessive phenotype.",
    "Dominant alleles would mask a recessive trait.",
    "The gene must be present in both parents.",
    "Pleiotropy is unrelated."
  ]
},
{
  question: "A carrier of a recessive disorder is usually:",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Affected",
    "Unaffected",
    "Missing the gene",
    "Homozygous recessive"
  ],
  correct: 1,
  explanations: [
    "Carriers often do not express the recessive phenotype.",
    "Carriers are generally unaffected.",
    "The gene is present.",
    "Carriers are typically heterozygous."
  ]
},
{
  question: "Why are pedigrees useful to geneticists?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "They reveal inheritance patterns over generations",
    "They sequence DNA",
    "They identify protein structure",
    "They replace experiments"
  ],
  correct: 0,
  explanations: [
    "Pedigrees allow inheritance patterns to be analyzed.",
    "DNA sequencing requires different techniques.",
    "Protein structure cannot be determined from pedigrees alone.",
    "Pedigrees complement rather than replace experiments."
  ]
},
{
  question: "A mutation in a pleiotropic gene is most likely to affect:",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "A single trait only",
    "Multiple traits simultaneously",
    "Only chromosome number",
    "Only meiosis"
  ],
  correct: 1,
  explanations: [
    "Pleiotropic genes affect more than one trait.",
    "Multiple characteristics may be affected.",
    "Chromosome number is generally unaffected.",
    "The effects are broader than meiosis alone."
  ]
},
{
  question: "Which observation would strongly suggest a recessive trait?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Affected offspring born to unaffected parents",
    "An affected parent in every generation",
    "No affected individuals",
    "Only one generation being studied"
  ],
  correct: 0,
  explanations: [
    "This is a classic clue for recessive inheritance.",
    "This pattern is often associated with dominant traits.",
    "No conclusions can be drawn if no affected individuals exist.",
    "More information would be needed."
  ]
},
{
  question: "What is the most likely genotype of an unaffected carrier for a recessive trait?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "AA",
    "Aa",
    "aa",
    "A_ only"
  ],
  correct: 1,
  explanations: [
    "This individual lacks the recessive allele.",
    "Carriers are generally heterozygous.",
    "This genotype would express the recessive phenotype.",
    "This is not a specific genotype."
  ]
},
{
  question: "Pleiotropy helps explain why a single mutation can:",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Influence several body systems",
    "Double chromosome number",
    "Prevent fertilization",
    "Stop DNA replication"
  ],
  correct: 0,
  explanations: [
    "One gene can contribute to multiple biological processes.",
    "Chromosome number is unrelated.",
    "Fertilization is unrelated.",
    "DNA replication generally continues."
  ]
},
{
  question: "A trait appears in every generation and every affected individual has at least one affected parent. Which inheritance pattern is most consistent with this observation?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Autosomal dominant",
    "Autosomal recessive",
    "Neither",
    "Pleiotropic"
  ],
  correct: 0,
  explanations: [
    "This is a hallmark of dominant inheritance.",
    "Recessive traits commonly skip generations.",
    "A dominant explanation fits the pattern well.",
    "Pleiotropy does not describe inheritance patterns."
  ]
},
{
  question: "A recessive disorder appears in two siblings, but neither parent shows the disorder. What is the most likely explanation?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Both parents are carriers",
    "Both parents are affected",
    "The trait is dominant",
    "The siblings are unrelated"
  ],
  correct: 0,
  explanations: [
    "Both parents likely carry the recessive allele.",
    "Affected parents would show the phenotype.",
    "Dominant traits typically appear in a parent.",
    "Family relationships are not the issue."
  ]
},
{
  question: "Why might a pleiotropic disorder show symptoms in both the skeletal and cardiovascular systems?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "One gene can influence multiple biological structures",
    "The mutation affects chromosome number",
    "The disorder changes meiosis",
    "The disorder creates new genes"
  ],
  correct: 0,
  explanations: [
    "This is the defining concept of pleiotropy.",
    "Chromosome number is typically unchanged.",
    "Meiosis is not the reason for the multiple symptoms.",
    "Mutations alter genes rather than create new ones."
  ]
},
{
  question: "Which scenario would be least consistent with a dominant trait?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Affected child from two unaffected parents",
    "Affected parent with affected offspring",
    "Affected individuals in multiple generations",
    "Both sexes affected"
  ],
  correct: 0,
  explanations: [
    "This pattern more commonly suggests recessive inheritance.",
    "This is common for dominant traits.",
    "Dominant traits often appear across generations.",
    "Autosomal dominant traits affect both sexes."
  ]
},
{
  question: "A pedigree shows a trait skipping generations before reappearing. What is the best explanation?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "The trait is likely recessive",
    "The trait is definitely dominant",
    "The trait is not genetic",
    "Meiosis failed"
  ],
  correct: 0,
  explanations: [
    "Carriers can pass recessive alleles without expressing the trait.",
    "Dominant traits usually appear each generation.",
    "The pattern still suggests inheritance.",
    "Meiosis failure is not the simplest explanation."
  ]
},
{
  question: "Why is pedigree analysis useful for studying rare human traits?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Controlled breeding experiments are often impossible in humans",
    "Humans lack chromosomes",
    "Humans do not show genetic variation",
    "Pedigrees directly sequence DNA"
  ],
  correct: 0,
  explanations: [
    "Family histories provide valuable inheritance information.",
    "Humans have chromosomes.",
    "Humans exhibit extensive variation.",
    "Pedigrees do not sequence DNA."
  ]
},
{
  question: "A mutation affects skin, eyes, and connective tissue simultaneously. Which concept best explains this?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Pleiotropy",
    "Independent assortment",
    "Segregation",
    "Crossing over"
  ],
  correct: 0,
  explanations: [
    "One gene is affecting multiple traits.",
    "Independent assortment concerns chromosome behavior.",
    "Segregation concerns allele separation.",
    "Crossing over exchanges DNA."
  ]
},
{
  question: "If two unaffected carriers have children, why can a recessive disorder appear unexpectedly?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "A child can inherit the recessive allele from both parents",
    "Dominant alleles disappear",
    "Chromosomes stop assorting",
    "Proteins change the genotype"
  ],
  correct: 0,
  explanations: [
    "A recessive phenotype appears when two recessive alleles are inherited.",
    "Dominant alleles do not disappear.",
    "Chromosome assortment still occurs normally.",
    "Proteins do not alter inheritance patterns."
  ]
},
{
  question: "Why can pleiotropic genes have especially large effects on an organism?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "A single mutation can affect multiple traits",
    "They always change chromosome number",
    "They always produce lethal mutations",
    "They eliminate inheritance"
  ],
  correct: 0,
  explanations: [
    "One gene influencing many traits amplifies the consequences of mutation.",
    "Chromosome number is usually unchanged.",
    "Pleiotropic mutations are not always lethal.",
    "Inheritance still occurs."
  ]
},
{
  question: "A geneticist is trying to determine whether a trait is dominant or recessive. What information from a pedigree is most useful?",
  category: "Multiple Alleles and Pedigrees",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "How the trait appears across multiple generations",
    "The color of the symbols",
    "The size of the pedigree",
    "The age of the paper"
  ],
  correct: 0,
  explanations: [
    "The pattern of inheritance across generations provides critical evidence.",
    "Symbol color itself is not informative beyond indicating affected status.",
    "Pedigree size alone is not sufficient.",
    "The age of the pedigree is irrelevant."
  ]
},
// =====================================================
// EXAM 3 - SEX CHROMOSOMES
// =====================================================
{
  question: "Which chromosome combination is typically associated with an XX chromosome complement in humans?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "XX",
    "XY",
    "YY",
    "XO"
  ],
  correct: 0,
  explanations: [
    "Most human individuals with an XX chromosome complement possess two X chromosomes.",
    "XY is a different chromosome complement.",
    "YY is not a typical human chromosome combination.",
    "XO is not the most common chromosome complement."
  ]
},
{
  question: "Which chromosome combination is typically associated with an XY chromosome complement in humans?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "XX",
    "XY",
    "XXX",
    "YY"
  ],
  correct: 1,
  explanations: [
    "XX is a different chromosome complement.",
    "Most human individuals with an XY chromosome complement possess one X and one Y chromosome.",
    "XXX is not the typical combination.",
    "YY is not a typical human chromosome complement."
  ]
},
{
  question: "How many sex chromosomes are present in a typical human somatic cell?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "1",
    "2",
    "23",
    "46"
  ],
  correct: 1,
  explanations: [
    "Somatic cells normally contain two sex chromosomes.",
    "Two sex chromosomes are present in typical somatic cells.",
    "Humans have 23 pairs of chromosomes, not 23 sex chromosomes.",
    "46 is the total chromosome number."
  ]
},
{
  question: "What are autosomes?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Chromosomes involved in determining chromosome complement",
    "All chromosomes except the sex chromosomes",
    "Gametes",
    "Genes found only on the X chromosome"
  ],
  correct: 1,
  explanations: [
    "These are sex chromosomes.",
    "Autosomes are all non-sex chromosomes.",
    "Gametes are reproductive cells.",
    "Autosomes are not restricted to the X chromosome."
  ]
},
{
  question: "How many pairs of autosomes are typically present in humans?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "1",
    "22",
    "23",
    "46"
  ],
  correct: 1,
  explanations: [
    "Humans have more than one pair of autosomes.",
    "Humans typically possess 22 pairs of autosomes.",
    "There are 23 chromosome pairs total.",
    "46 is the total chromosome count."
  ]
},
{
  question: "An X-bearing gamete contributes which chromosome?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "X",
    "Y",
    "Either X or Y",
    "No chromosome"
  ],
  correct: 0,
  explanations: [
    "An X-bearing gamete contributes an X chromosome.",
    "A Y-bearing gamete contributes a Y chromosome.",
    "This describes a different gamete type.",
    "Gametes contain chromosomes."
  ]
},
{
  question: "A Y-bearing gamete contributes which chromosome?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "X",
    "Y",
    "XX",
    "None"
  ],
  correct: 1,
  explanations: [
    "An X-bearing gamete contributes an X chromosome.",
    "A Y-bearing gamete contributes a Y chromosome.",
    "A gamete contributes one sex chromosome.",
    "Gametes contain chromosomes."
  ]
},
{
  question: "Which chromosome is unique to the XY chromosome complement?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "X",
    "Y",
    "21",
    "22"
  ],
  correct: 1,
  explanations: [
    "The X chromosome is found in both XX and XY individuals.",
    "The Y chromosome is unique to the XY chromosome complement.",
    "Chromosome 21 is an autosome.",
    "Chromosome 22 is an autosome."
  ]
},
{
  question: "Which chromosome is present in both XX and XY chromosome complements?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Y",
    "X",
    "Both are absent",
    "Chromosome 21"
  ],
  correct: 1,
  explanations: [
    "The Y chromosome is not present in XX individuals.",
    "Both XX and XY chromosome complements include at least one X chromosome.",
    "Sex chromosomes are present.",
    "Chromosome 21 is an autosome."
  ]
},
{
  question: "An offspring with an XX chromosome complement received which sex chromosomes?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "X and X",
    "X and Y",
    "Y and Y",
    "No sex chromosomes"
  ],
  correct: 0,
  explanations: [
    "An XX chromosome complement contains two X chromosomes.",
    "An XY chromosome complement contains one X and one Y chromosome.",
    "YY is not a typical human chromosome complement.",
    "Sex chromosomes are present."
  ]
},
{
  question: "An offspring with an XY chromosome complement inherited:",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Two X chromosomes",
    "One X chromosome and one Y chromosome",
    "Two Y chromosomes",
    "No sex chromosomes"
  ],
  correct: 1,
  explanations: [
    "This would produce an XX chromosome complement.",
    "An XY individual inherits one X chromosome and one Y chromosome.",
    "YY is not a typical human chromosome complement.",
    "Human offspring inherit sex chromosomes."
  ]
},
{
  question: "Why are X-linked recessive traits often expressed more frequently in XY individuals?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "XY individuals possess only one X chromosome",
    "XY individuals possess two X chromosomes",
    "The Y chromosome causes all recessive traits",
    "The X chromosome is absent"
  ],
  correct: 0,
  explanations: [
    "A recessive allele on the single X chromosome can be expressed.",
    "XY individuals normally have one X chromosome.",
    "The Y chromosome does not cause all recessive traits.",
    "The X chromosome is present."
  ]
},
{
  question: "A recessive allele is located on the X chromosome. An XY individual inherits that allele. What is the most likely outcome?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "The trait may be expressed",
    "The allele disappears",
    "The chromosome replicates repeatedly",
    "The allele automatically becomes dominant"
  ],
  correct: 0,
  explanations: [
    "A single recessive X-linked allele may be expressed in an XY individual.",
    "Inherited alleles do not disappear.",
    "Replication is unrelated to expression of the trait.",
    "Dominance does not change automatically."
  ]
},
{
  question: "Color blindness is commonly used as an example of which type of inheritance?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Autosomal dominant",
    "Autosomal recessive",
    "X-linked recessive",
    "Mitochondrial"
  ],
  correct: 2,
  explanations: [
    "Color blindness is not usually modeled as autosomal dominant.",
    "This is not the typical inheritance pattern.",
    "Color blindness is commonly taught as an X-linked recessive trait.",
    "It is not typically used as an example of mitochondrial inheritance."
  ]
},
{
  question: "Which statement best distinguishes sex chromosomes from autosomes?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Sex chromosomes are involved in determining chromosome complement, while autosomes are the remaining chromosomes",
    "Autosomes contain no genes",
    "Sex chromosomes only occur in gametes",
    "Autosomes are inherited differently from chromosomes"
  ],
  correct: 0,
  explanations: [
    "This is the key distinction between sex chromosomes and autosomes.",
    "Autosomes contain thousands of genes.",
    "Sex chromosomes occur in both somatic cells and gametes.",
    "Autosomes are chromosomes."
  ]
},
{
  question: "An offspring inherits a Y chromosome. What can be concluded with certainty?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "The offspring has an XX chromosome complement",
    "The offspring inherited a Y chromosome from a Y-bearing gamete",
    "The offspring inherited two Y chromosomes",
    "The offspring lacks an X chromosome"
  ],
  correct: 1,
  explanations: [
    "An XX chromosome complement does not contain a Y chromosome.",
    "A Y chromosome must have come from a Y-bearing gamete.",
    "A typical human offspring inherits only one Y chromosome.",
    "A typical XY offspring also inherits an X chromosome."
  ]
},
{
  question: "An offspring has an XX chromosome complement. Which combination of gametes formed the zygote?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "X-bearing gamete + X-bearing gamete",
    "X-bearing gamete + Y-bearing gamete",
    "Y-bearing gamete + Y-bearing gamete",
    "Y-bearing gamete only"
  ],
  correct: 0,
  explanations: [
    "Two X chromosomes are required to produce an XX chromosome complement.",
    "This produces an XY chromosome complement.",
    "This does not produce an XX chromosome complement.",
    "A zygote requires two gametes."
  ]
},
{
  question: "Which statement about the Y chromosome is correct?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "It is present in all humans",
    "It is larger than the X chromosome",
    "It is found only in individuals with an XY chromosome complement",
    "It contains every gene found on the X chromosome"
  ],
  correct: 2,
  explanations: [
    "Individuals with an XX chromosome complement typically lack a Y chromosome.",
    "The Y chromosome is generally smaller than the X chromosome.",
    "The Y chromosome is typically found only in XY individuals.",
    "The X chromosome contains many genes not found on the Y chromosome."
  ]
},
{
  question: "Why can an X-linked recessive allele be expressed in an XY individual even if only one copy is present?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "The Y chromosome generally lacks a corresponding dominant allele",
    "The X chromosome is missing",
    "The allele automatically becomes dominant",
    "The chromosome replicates more often"
  ],
  correct: 0,
  explanations: [
    "Many genes found on the X chromosome are absent from the Y chromosome, allowing expression of recessive alleles.",
    "The X chromosome is present in an XY individual.",
    "Dominance does not change automatically.",
    "Replication frequency is unrelated."
  ]
},
{
  question: "A recessive X-linked allele is present on an individual's only X chromosome. What is the most likely outcome?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "The recessive phenotype may be expressed",
    "The allele disappears",
    "The allele becomes dominant",
    "The chromosome is lost"
  ],
  correct: 0,
  explanations: [
    "With no second X chromosome carrying a dominant version of the allele, the recessive trait may be expressed.",
    "Alleles are inherited, not lost automatically.",
    "Dominance does not change.",
    "Chromosomes are not typically lost."
  ]
},
{
  question: "Which chromosome type is most likely to carry genes that exhibit X-linked inheritance?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Autosomes",
    "The X chromosome",
    "The Y chromosome only",
    "Mitochondria"
  ],
  correct: 1,
  explanations: [
    "Autosomes are associated with autosomal inheritance.",
    "X-linked traits are caused by genes located on the X chromosome.",
    "Y-linked inheritance is a separate pattern.",
    "Mitochondria contain a small number of different genes."
  ]
},
{
  question: "Which statement best explains why autosomal traits generally affect XX and XY individuals at similar rates?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Autosomes are inherited by all individuals regardless of chromosome complement",
    "Autosomes only function in early development",
    "Autosomes are found only in gametes",
    "Autosomes determine chromosome complement"
  ],
  correct: 0,
  explanations: [
    "All individuals inherit autosomes, making autosomal traits generally independent of sex chromosome complement.",
    "Autosomes function throughout life.",
    "Autosomes are found in somatic cells and gametes.",
    "Sex chromosomes, not autosomes, are involved in chromosome complement."
  ]
},
{
  question: "A researcher studies a trait that appears much more frequently in individuals with an XY chromosome complement than in those with an XX chromosome complement. What inheritance pattern should be investigated first?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Autosomal dominant",
    "Autosomal recessive",
    "X-linked recessive",
    "Mitochondrial"
  ],
  correct: 2,
  explanations: [
    "Autosomal traits tend to affect both chromosome complements similarly.",
    "Autosomal recessive traits do not typically show this strong bias.",
    "This pattern is commonly associated with X-linked recessive traits.",
    "Mitochondrial inheritance follows a different pattern."
  ]
},
{
  question: "What is the probability that a gamete produced by an XY individual carries a Y chromosome?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "0%",
    "25%",
    "50%",
    "100%"
  ],
  correct: 2,
  explanations: [
    "Some gametes receive a Y chromosome.",
    "The expected proportion is higher.",
    "Meiosis produces approximately equal numbers of X-bearing and Y-bearing gametes.",
    "Not all gametes receive a Y chromosome."
  ]
},
{
  question: "An XY individual and an XX individual produce offspring. Assuming normal chromosome segregation, what proportion of offspring are expected to inherit a Y chromosome?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "0%",
    "25%",
    "50%",
    "100%"
  ],
  correct: 2,
  explanations: [
    "Some offspring can inherit a Y chromosome.",
    "Half the offspring are expected to inherit a Y chromosome.",
    "Approximately half of the offspring should inherit a Y chromosome.",
    "Not every offspring inherits a Y chromosome."
  ]
},
{
  question: "A trait is caused by a recessive allele located on the X chromosome. Which individual is most likely to express the trait?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "An XX individual with one recessive allele and one dominant allele",
    "An XY individual carrying the recessive allele on the X chromosome",
    "An XX individual with two dominant alleles",
    "An individual lacking the allele entirely"
  ],
  correct: 1,
  explanations: [
    "The dominant allele would typically mask the recessive allele.",
    "A recessive allele on the only X chromosome can be expressed.",
    "Dominant alleles do not produce the recessive phenotype.",
    "A trait cannot be expressed if the allele is absent."
  ]
},
{
  question: "Why are sex-linked inheritance patterns often different from autosomal inheritance patterns?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Sex chromosomes are inherited differently from autosomes",
    "Sex chromosomes contain no genes",
    "Autosomes do not segregate during meiosis",
    "Sex chromosomes never undergo meiosis"
  ],
  correct: 0,
  explanations: [
    "Differences in chromosome inheritance lead to distinctive inheritance patterns.",
    "Sex chromosomes contain many genes.",
    "Autosomes do segregate during meiosis.",
    "Sex chromosomes undergo meiosis like other chromosomes."
  ]
},
{
  question: "A geneticist wants to determine whether a trait is X-linked or autosomal. Which observation would be most informative?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Whether the trait shows different frequencies among XX and XY chromosome complements",
    "The color used in a pedigree diagram",
    "The age of the individuals studied",
    "The total number of chromosomes in humans"
  ],
  correct: 0,
  explanations: [
    "Differences between XX and XY inheritance patterns can reveal sex linkage.",
    "Diagram color is not informative by itself.",
    "Age is usually unrelated to inheritance pattern.",
    "Human chromosome number is constant."
  ]
},
{
  question: "Which statement best describes the inheritance of sex chromosomes in humans?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Every gamete carries both an X and a Y chromosome",
    "Gametes contribute one sex chromosome each to the offspring",
    "Sex chromosomes are inherited only from one genetic parent",
    "Sex chromosomes are not affected by meiosis"
  ],
  correct: 1,
  explanations: [
    "Human gametes carry only one sex chromosome.",
    "Each gamete contributes a single sex chromosome to the zygote.",
    "Both genetic contributors provide a sex chromosome.",
    "Sex chromosomes segregate during meiosis."
  ]
},
{
  question: "An offspring inherits an X chromosome carrying a recessive allele and a Y chromosome. Which statement is most accurate?",
  category: "Sex Chromosomes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "The recessive allele may be expressed because there is no second X chromosome carrying a dominant allele",
    "The recessive allele automatically becomes dominant",
    "The Y chromosome converts the allele into an autosomal trait",
    "The allele is removed during development"
  ],
  correct: 0,
  explanations: [
    "This is the classic explanation for expression of many X-linked recessive traits.",
    "Dominance is not altered.",
    "The Y chromosome does not convert inheritance patterns.",
    "The allele remains part of the genome."
  ]
},
// =====================================================
// EXAM 3 - LINKED GENES
// =====================================================
{
  question: "What are linked genes?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Genes located on the same chromosome",
    "Genes located on different chromosomes",
    "Genes that never mutate",
    "Genes found only in gametes"
  ],
  correct: 0,
  explanations: [
    "Linked genes are physically located on the same chromosome.",
    "Genes on different chromosomes are typically not linked.",
    "All genes can potentially mutate.",
    "Linked genes can be found in many cell types."
  ]
},
{
  question: "Genes located on different chromosomes typically:",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Assort independently",
    "Always travel together",
    "Never enter gametes",
    "Remain attached permanently"
  ],
  correct: 0,
  explanations: [
    "Genes on different chromosomes generally assort independently during meiosis.",
    "This behavior is more characteristic of linked genes.",
    "Genes are inherited through gametes.",
    "Chromosomes separate during meiosis."
  ]
},
{
  question: "Why do genes on the same chromosome often fail to assort independently?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "They are physically located on the same chromosome",
    "They are always dominant",
    "They are always recessive",
    "They prevent meiosis"
  ],
  correct: 0,
  explanations: [
    "Genes on the same chromosome tend to move together during meiosis.",
    "Dominance does not determine linkage.",
    "Recessiveness does not determine linkage.",
    "Linked genes do not prevent meiosis."
  ]
},
{
  question: "Which process can separate linked genes?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Crossing over",
    "Translation",
    "Protein synthesis",
    "DNA replication"
  ],
  correct: 0,
  explanations: [
    "Crossing over can exchange chromosome segments and separate linked genes.",
    "Translation produces proteins.",
    "Protein synthesis does not separate genes.",
    "Replication copies DNA but does not separate linked genes."
  ]
},
{
  question: "Crossing over occurs during:",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Meiosis",
    "Translation",
    "Cellular respiration",
    "Protein folding"
  ],
  correct: 0,
  explanations: [
    "Crossing over occurs during meiosis when homologous chromosomes pair.",
    "Translation produces proteins.",
    "Cellular respiration produces ATP.",
    "Protein folding occurs after proteins are synthesized."
  ]
},
{
  question: "What is a locus?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "The physical location of a gene on a chromosome",
    "A type of gamete",
    "A chromosome mutation",
    "A protein"
  ],
  correct: 0,
  explanations: [
    "A locus refers to a gene's position on a chromosome.",
    "A gamete is a reproductive cell.",
    "A locus is not a mutation.",
    "A locus is not a protein."
  ]
},
{
  question: "Linked genes are most likely to be inherited together because:",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "They are located on the same chromosome",
    "They are always dominant",
    "They are always recessive",
    "They are found only in gametes"
  ],
  correct: 0,
  explanations: [
    "Genes on the same chromosome often travel together during meiosis.",
    "Dominance does not explain linkage.",
    "Recessiveness does not explain linkage.",
    "Linked genes occur in many cell types."
  ]
},
{
  question: "Which statement best describes genes on different chromosomes?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "They usually assort independently",
    "They are always linked",
    "They never enter gametes",
    "They cannot mutate"
  ],
  correct: 0,
  explanations: [
    "Genes on different chromosome pairs generally assort independently.",
    "Genes on different chromosomes are typically not linked.",
    "Genes are inherited through gametes.",
    "Any gene can potentially mutate."
  ]
},
{
  question: "What is recombination?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Creation of new allele combinations through crossing over",
    "DNA replication",
    "Protein synthesis",
    "Chromosome loss"
  ],
  correct: 0,
  explanations: [
    "Crossing over can create new combinations of alleles.",
    "DNA replication copies DNA.",
    "Protein synthesis produces proteins.",
    "Recombination does not involve chromosome loss."
  ]
},
{
  question: "Which statement best summarizes linked-gene inheritance?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Easy",
  options: [
    "Genes on the same chromosome may be inherited together unless crossing over separates them",
    "Genes on the same chromosome always assort independently",
    "Genes on different chromosomes are always linked",
    "Crossing over eliminates genes"
  ],
  correct: 0,
  explanations: [
    "This summarizes the central concept of linkage and recombination.",
    "Linked genes do not always assort independently.",
    "Genes on different chromosomes are typically not linked.",
    "Crossing over exchanges chromosome segments; it does not eliminate genes."
  ]
},
{
  question: "Why do linked genes tend to be inherited together?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "They are located on the same chromosome",
    "They are always dominant",
    "They always undergo crossing over",
    "They are found only in gametes"
  ],
  correct: 0,
  explanations: [
    "Genes on the same chromosome often travel together during meiosis.",
    "Dominance is unrelated to linkage.",
    "Crossing over can actually separate linked genes.",
    "Linked genes occur in all cell types."
  ]
},
{
  question: "What is the primary result of crossing over between homologous chromosomes?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "New combinations of alleles can be produced",
    "Chromosomes disappear",
    "Genes become dominant",
    "DNA replication stops"
  ],
  correct: 0,
  explanations: [
    "Crossing over exchanges DNA segments and creates new allele combinations.",
    "Chromosomes remain present after crossing over.",
    "Dominance is unchanged.",
    "DNA replication is unrelated."
  ]
},
{
  question: "Genes found on different chromosome pairs are most likely to:",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Assort independently",
    "Remain permanently linked",
    "Never enter gametes",
    "Always recombine"
  ],
  correct: 0,
  explanations: [
    "Different chromosomes align independently during meiosis.",
    "Linkage requires genes on the same chromosome.",
    "Genes enter gametes through meiosis.",
    "Recombination is not guaranteed."
  ]
},
{
  question: "A pair of linked genes are separated by crossing over. The resulting allele combination is called:",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Recombinant",
    "Dominant",
    "Parental",
    "Diploid"
  ],
  correct: 0,
  explanations: [
    "Crossing over can generate recombinant allele combinations.",
    "Dominance describes trait expression.",
    "Parental combinations existed before recombination.",
    "Diploid refers to chromosome number."
  ]
},
{
  question: "Which statement best describes parental allele combinations?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "They are inherited without recombination",
    "They are produced only by crossing over",
    "They occur only in mutations",
    "They cannot enter gametes"
  ],
  correct: 0,
  explanations: [
    "Parental combinations reflect the original chromosome arrangement.",
    "Crossing over produces recombinant combinations.",
    "Mutation is not required.",
    "Parental combinations are commonly found in gametes."
  ]
},
{
  question: "Why might linked genes not always be inherited together?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Crossing over can separate them",
    "They become recessive",
    "They change chromosomes",
    "They stop replicating"
  ],
  correct: 0,
  explanations: [
    "Crossing over can exchange chromosome segments and separate linked genes.",
    "Dominance does not affect linkage.",
    "Genes do not switch chromosomes on their own.",
    "Replication is unrelated."
  ]
},
{
  question: "When homologous chromosomes exchange segments during meiosis, the process is called:",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "Crossing over",
    "Translation",
    "Replication",
    "Independent assortment"
  ],
  correct: 0,
  explanations: [
    "Crossing over exchanges DNA between homologous chromosomes.",
    "Translation produces proteins.",
    "Replication copies DNA.",
    "Independent assortment concerns chromosome orientation."
  ]
},
{
  question: "Which outcome provides evidence that crossing over has occurred?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "New allele combinations appear",
    "Chromosome number doubles",
    "DNA disappears",
    "Proteins stop functioning"
  ],
  correct: 0,
  explanations: [
    "Recombinant allele combinations are evidence of crossing over.",
    "Chromosome number does not double because of crossing over.",
    "DNA remains present.",
    "Protein function is not direct evidence."
  ]
},
{
  question: "A researcher observes that two genes are typically inherited together generation after generation. What is the most likely explanation?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "The genes are linked on the same chromosome",
    "The genes are always dominant",
    "The genes never replicate",
    "The genes are located in different cells"
  ],
  correct: 0,
  explanations: [
    "Linked genes tend to travel together during meiosis.",
    "Dominance does not cause linkage.",
    "Genes still replicate.",
    "Cell location is irrelevant."
  ]
},
{
  question: "What is recombination?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Medium",
  options: [
    "The production of new allele combinations through crossing over",
    "The replication of DNA",
    "The loss of a chromosome",
    "The formation of proteins"
  ],
  correct: 0,
  explanations: [
    "Recombination creates new combinations of alleles.",
    "Replication copies DNA.",
    "Chromosome loss is unrelated.",
    "Protein formation is translation."
  ]
},
{
  question: "Two genes are located very close together on the same chromosome. What is the most likely outcome?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "They will usually be inherited together",
    "They will always assort independently",
    "They will be lost during meiosis",
    "They will always recombine"
  ],
  correct: 0,
  explanations: [
    "Closely linked genes are less likely to be separated by crossing over.",
    "Independent assortment is less likely for nearby genes.",
    "Genes are not typically lost.",
    "Recombination is not guaranteed."
  ]
},
{
  question: "Why are genes that are far apart on the same chromosome more likely to be separated than genes that are close together?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Crossing over is more likely to occur between them",
    "They move to different cells",
    "They become dominant",
    "They stop replicating"
  ],
  correct: 0,
  explanations: [
    "Greater distance increases the opportunity for crossing over.",
    "Cell location is irrelevant.",
    "Dominance does not affect linkage.",
    "Replication is unrelated."
  ]
},
{
  question: "Which statement best explains why linked genes are an exception to independent assortment?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "They are physically located on the same chromosome",
    "They are always recessive",
    "They never enter gametes",
    "They prevent meiosis"
  ],
  correct: 0,
  explanations: [
    "Physical linkage causes genes to travel together more often than expected.",
    "Recessiveness is unrelated.",
    "Linked genes enter gametes normally.",
    "Meiosis still occurs."
  ]
},
{
  question: "A scientist observes recombinant offspring. What conclusion is most reasonable?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Crossing over occurred",
    "DNA replication failed",
    "Chromosomes disappeared",
    "Genes became dominant"
  ],
  correct: 0,
  explanations: [
    "Recombinant offspring are evidence of crossing over.",
    "Replication failure would not create recombinant offspring.",
    "Chromosomes remain present.",
    "Dominance is unaffected."
  ]
},
{
  question: "Which situation best supports independent assortment?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "The genes are located on different chromosomes",
    "The genes are adjacent on the same chromosome",
    "The genes are part of the same locus",
    "The genes never enter gametes"
  ],
  correct: 0,
  explanations: [
    "Genes on different chromosomes generally assort independently.",
    "Adjacent genes are likely linked.",
    "A locus refers to a gene's location.",
    "Genes are transmitted through gametes."
  ]
},
{
  question: "A pair of linked genes produce mostly parental allele combinations and only a few recombinant combinations. What is the best explanation?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Crossing over occurs occasionally between the genes",
    "The genes are on different chromosomes",
    "The genes never replicate",
    "The genes have become mutations"
  ],
  correct: 0,
  explanations: [
    "Limited crossing over explains the predominance of parental combinations.",
    "Different chromosomes would support independent assortment.",
    "Replication still occurs.",
    "Mutation is not required."
  ]
},
{
  question: "Which chromosome behavior directly creates recombinant allele combinations?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Crossing over",
    "Independent assortment alone",
    "DNA replication",
    "Cytokinesis"
  ],
  correct: 0,
  explanations: [
    "Crossing over exchanges chromosome segments and creates recombinants.",
    "Independent assortment produces chromosome combinations but does not exchange DNA.",
    "Replication copies DNA.",
    "Cytokinesis divides the cell."
  ]
},
{
  question: "A researcher discovers two genes that nearly always travel together during inheritance. What can most reasonably be inferred?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "The genes are likely very close together on the same chromosome",
    "The genes are on different chromosomes",
    "The genes are identical",
    "The genes are recessive"
  ],
  correct: 0,
  explanations: [
    "Tight linkage suggests physical proximity on the chromosome.",
    "Genes on different chromosomes would assort independently.",
    "The genes need not be identical.",
    "Dominance is unrelated."
  ]
},
{
  question: "Which statement best summarizes the relationship between linkage and recombination?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Linkage tends to keep genes together, while recombination can separate them",
    "Linkage and recombination are identical processes",
    "Recombination permanently links genes",
    "Neither affects inheritance"
  ],
  correct: 0,
  explanations: [
    "This captures the core concept of the unit.",
    "The processes are different.",
    "Recombination separates rather than links genes.",
    "Both strongly influence inheritance patterns."
  ]
},
{
  question: "A student claims that all genes assort independently. Which evidence most strongly refutes this claim?",
  category: "Linked Genes",
  exam: "Exam 3",
  difficulty: "Hard",
  options: [
    "Genes located on the same chromosome are often inherited together",
    "DNA is double stranded",
    "Chromosomes replicate before meiosis",
    "Proteins are synthesized at ribosomes"
  ],
  correct: 0,
  explanations: [
    "Linked genes demonstrate that independent assortment is not always observed.",
    "This is true but unrelated.",
    "Replication does not refute the claim.",
    "Protein synthesis is unrelated."
  ]
},
{
  question: "What is the primary purpose of cellular respiration?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "To produce glucose",
    "To capture energy from food in ATP",
    "To build proteins",
    "To synthesize DNA"
  ],
  correct: 1,
  explanations: [
    "Cellular respiration consumes glucose rather than producing it.",
    "Cellular respiration transfers energy stored in food molecules into ATP.",
    "Protein synthesis is a separate cellular process.",
    "DNA synthesis serves a different cellular function."
  ]
},

{
  question: "Which molecule serves as the immediate energy currency of the cell?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "DNA",
    "ATP",
    "Glucose",
    "RNA"
  ],
  correct: 1,
  explanations: [
    "DNA stores genetic information rather than serving as the cell's energy currency.",
    "ATP is the primary molecule used to power cellular work.",
    "Glucose stores energy but is not the immediate energy currency.",
    "RNA functions primarily in gene expression."
  ]
},

{
  question: "Which process is the first stage of cellular respiration?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Citric acid cycle",
    "Electron transport chain",
    "Fermentation",
    "Glycolysis"
  ],
  correct: 3,
  explanations: [
    "The citric acid cycle occurs after glycolysis.",
    "The electron transport chain is the final stage of aerobic respiration.",
    "Fermentation is an alternative pathway that follows glycolysis under certain conditions.",
    "Glycolysis is the first stage of cellular respiration."
  ]
},

{
  question: "Where does glycolysis occur in eukaryotic cells?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Mitochondrial matrix",
    "Cytoplasm",
    "Nucleus",
    "Golgi apparatus"
  ],
  correct: 1,
  explanations: [
    "The mitochondrial matrix is where the citric acid cycle occurs.",
    "Glycolysis occurs in the cytoplasm.",
    "The nucleus stores genetic information.",
    "The Golgi apparatus modifies and sorts cellular products."
  ]
},

{
  question: "What molecule is broken down during glycolysis?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "ATP",
    "Protein",
    "Glucose",
    "DNA"
  ],
  correct: 2,
  explanations: [
    "ATP is consumed and produced during glycolysis but is not the starting fuel molecule.",
    "Proteins are not the primary substrate of glycolysis.",
    "Glycolysis begins with the breakdown of glucose.",
    "DNA is not used as a fuel source during glycolysis."
  ]
},

{
  question: "How many pyruvate molecules are produced from one glucose molecule during glycolysis?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "1",
    "2",
    "4",
    "6"
  ],
  correct: 1,
  explanations: [
    "A glucose molecule is split into two products.",
    "One glucose molecule yields two pyruvate molecules.",
    "Four pyruvate molecules are not produced from a single glucose.",
    "Six pyruvate molecules greatly exceeds the actual output."
  ]
},

{
  question: "What is the net ATP gain from glycolysis per glucose molecule?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "1 ATP",
    "2 ATP",
    "4 ATP",
    "36 ATP"
  ],
  correct: 1,
  explanations: [
    "The net ATP gain is greater than one ATP.",
    "Glycolysis produces a net gain of 2 ATP per glucose.",
    "Four ATP are produced, but two ATP are invested earlier in the pathway.",
    "This value is far greater than the ATP produced by glycolysis alone."
  ]
},

{
  question: "Does glycolysis require oxygen directly?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Yes",
    "No",
    "Only in plants",
    "Only in animals"
  ],
  correct: 1,
  explanations: [
    "Oxygen is not directly required for glycolysis.",
    "Glycolysis can occur in both the presence and absence of oxygen.",
    "Plants and many other organisms perform glycolysis.",
    "Animals are not unique in carrying out glycolysis."
  ]
},

{
  question: "Which electron carrier is produced during glycolysis?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "ATP",
    "Carbon dioxide",
    "NADH",
    "Oxygen"
  ],
  correct: 2,
  explanations: [
    "ATP stores energy but is not an electron carrier.",
    "Carbon dioxide is not produced during glycolysis.",
    "NADH carries high-energy electrons to later stages of cellular respiration.",
    "Oxygen is not produced by glycolysis."
  ]
},

{
  question: "A scientist removes all mitochondria from a eukaryotic cell. Which process could still occur?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Citric acid cycle",
    "Electron transport chain",
    "Glycolysis",
    "Chemiosmosis in mitochondria"
  ],
  correct: 2,
  explanations: [
    "The citric acid cycle occurs in the mitochondrial matrix.",
    "The electron transport chain requires mitochondrial membranes in eukaryotes.",
    "Glycolysis occurs in the cytoplasm and can continue without mitochondria.",
    "Mitochondrial chemiosmosis requires mitochondria to be present."
  ]
},
{
  question: "Why are two ATP molecules consumed during the early stages of glycolysis?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "To activate glucose for subsequent reactions",
    "To produce oxygen",
    "To regenerate NAD+",
    "To form carbon dioxide"
  ],
  correct: 0,
  explanations: [
    "ATP investment destabilizes glucose and prepares it for breakdown.",
    "Oxygen is not produced during glycolysis.",
    "NAD+ regeneration occurs later under specific conditions.",
    "Carbon dioxide is not produced during glycolysis."
  ]
},

{
  question: "How many NADH molecules are produced from one glucose molecule during glycolysis?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "1",
    "2",
    "4",
    "6"
  ],
  correct: 1,
  explanations: [
    "Glycolysis produces more than one NADH per glucose.",
    "Two NADH molecules are produced during glycolysis.",
    "Four NADH exceeds the actual yield.",
    "Six NADH is not produced during glycolysis."
  ]
},

{
  question: "A cell is temporarily deprived of oxygen. Which process can continue producing ATP immediately?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Electron transport chain",
    "Chemiosmosis",
    "Glycolysis",
    "Citric acid cycle"
  ],
  correct: 2,
  explanations: [
    "The electron transport chain requires oxygen as the final electron acceptor.",
    "Chemiosmosis depends on the electron transport chain.",
    "Glycolysis can proceed with or without oxygen.",
    "The citric acid cycle depends indirectly on oxygen availability."
  ]
},

{
  question: "What is the primary function of fermentation?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Generate large quantities of ATP",
    "Produce oxygen",
    "Regenerate NAD+",
    "Break down DNA"
  ],
  correct: 2,
  explanations: [
    "Fermentation produces very little ATP.",
    "Fermentation does not generate oxygen.",
    "Fermentation regenerates NAD+ so glycolysis can continue.",
    "DNA is not involved in fermentation."
  ]
},

{
  question: "Which form of fermentation commonly occurs in human muscle cells during intense exercise?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Alcohol fermentation",
    "Lactic acid fermentation",
    "Acetic acid fermentation",
    "Methane fermentation"
  ],
  correct: 1,
  explanations: [
    "Alcohol fermentation is commonly associated with yeast.",
    "Human muscle cells perform lactic acid fermentation when oxygen is limited.",
    "Acetic acid fermentation is not typical of muscle cells.",
    "Methane fermentation is not performed by human cells."
  ]
},

{
  question: "Which organism commonly uses alcohol fermentation when oxygen is absent?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Yeast",
    "Humans",
    "Oak trees",
    "Earthworms"
  ],
  correct: 0,
  explanations: [
    "Yeast commonly performs alcohol fermentation.",
    "Humans primarily perform lactic acid fermentation.",
    "Plants generally rely on aerobic respiration.",
    "Earthworms do not commonly perform alcohol fermentation."
  ]
},

{
  question: "What would most likely happen if a cell ran out of available NAD+?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Glycolysis would eventually stop",
    "ATP production would increase",
    "Oxygen production would begin",
    "DNA replication would immediately stop"
  ],
  correct: 0,
  explanations: [
    "NAD+ is required to accept electrons during glycolysis.",
    "ATP production would decrease, not increase.",
    "Cells do not begin producing oxygen under these conditions.",
    "The immediate problem would be disruption of glycolysis."
  ]
},

{
  question: "Which statement best explains why fermentation is beneficial when oxygen is unavailable?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "It provides more ATP than aerobic respiration",
    "It regenerates NAD+ needed for glycolysis",
    "It produces oxygen for the cell",
    "It activates the citric acid cycle"
  ],
  correct: 1,
  explanations: [
    "Aerobic respiration produces much more ATP.",
    "Fermentation allows glycolysis to continue by restoring NAD+.",
    "Fermentation does not produce oxygen.",
    "The citric acid cycle does not depend on fermentation activation."
  ]
},

{
  question: "A mutation prevents cells from converting NADH back into NAD+ during fermentation. Which outcome is most likely?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Glycolysis will eventually stop",
    "ATP production will increase dramatically",
    "Oxygen production will rise",
    "The electron transport chain will accelerate"
  ],
  correct: 0,
  explanations: [
    "Without NAD+, glycolysis cannot continue indefinitely.",
    "ATP production would decline rather than increase.",
    "Fermentation does not produce oxygen.",
    "The mutation affects fermentation, not ETC acceleration."
  ]
},

{
  question: "An athlete is sprinting at maximum intensity and oxygen delivery cannot meet demand. What most directly allows ATP production to continue?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Activation of the citric acid cycle",
    "Regeneration of NAD+ through lactic acid fermentation",
    "Increased oxygen consumption",
    "Activation of ATP synthase"
  ],
  correct: 1,
  explanations: [
    "The citric acid cycle becomes limited when oxygen is unavailable.",
    "Lactic acid fermentation restores NAD+ so glycolysis can continue making ATP.",
    "Oxygen delivery is already insufficient in this scenario.",
    "ATP synthase requires a functioning electron transport chain."
  ]
},
{
  question: "What is the immediate fate of pyruvate under aerobic conditions in eukaryotic cells?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "It enters the nucleus",
    "It is converted to acetyl-CoA",
    "It becomes glucose",
    "It directly enters the electron transport chain"
  ],
  correct: 1,
  explanations: [
    "Pyruvate is transported into the mitochondrion rather than the nucleus.",
    "Pyruvate is converted into acetyl-CoA before entering the citric acid cycle.",
    "Pyruvate is typically broken down further rather than immediately converted back into glucose.",
    "Electrons, not pyruvate, enter the electron transport chain."
  ]
},

{
  question: "In which part of the mitochondrion does pyruvate oxidation occur?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Outer membrane",
    "Inner membrane",
    "Matrix",
    "Intermembrane space"
  ],
  correct: 2,
  explanations: [
    "Pyruvate oxidation does not occur in the outer membrane.",
    "The inner membrane houses the electron transport chain.",
    "Pyruvate oxidation occurs within the mitochondrial matrix.",
    "The intermembrane space primarily functions in proton accumulation."
  ]
},

{
  question: "What molecule enters the citric acid cycle directly?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Glucose",
    "Pyruvate",
    "Acetyl-CoA",
    "ATP"
  ],
  correct: 2,
  explanations: [
    "Glucose is broken down during glycolysis before reaching the cycle.",
    "Pyruvate must first be converted into acetyl-CoA.",
    "Acetyl-CoA is the molecule that enters the citric acid cycle.",
    "ATP is an energy carrier rather than a cycle input."
  ]
},

{
  question: "Which molecule is released during pyruvate oxidation?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Oxygen",
    "Carbon dioxide",
    "Water",
    "Glucose"
  ],
  correct: 1,
  explanations: [
    "Oxygen is consumed later in respiration.",
    "Pyruvate oxidation releases carbon dioxide.",
    "Water is primarily produced near the end of aerobic respiration.",
    "Glucose is not produced during pyruvate oxidation."
  ]
},

{
  question: "Which electron carrier is produced during pyruvate oxidation?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "NADH",
    "ATP",
    "FADH₂",
    "Oxygen"
  ],
  correct: 0,
  explanations: [
    "NADH is produced as electrons are removed from pyruvate derivatives.",
    "ATP is not the primary product of pyruvate oxidation.",
    "FADH₂ is produced later in the citric acid cycle.",
    "Oxygen is neither produced nor carried as an electron carrier."
  ]
},

{
  question: "What is the primary function of the citric acid cycle?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Produce glucose",
    "Generate electron carriers for the ETC",
    "Create oxygen",
    "Regenerate pyruvate"
  ],
  correct: 1,
  explanations: [
    "The citric acid cycle breaks down carbon-containing molecules rather than producing glucose.",
    "A major role of the cycle is generating NADH and FADH₂ for later ATP production.",
    "Oxygen is not generated by the citric acid cycle.",
    "Pyruvate is not regenerated by the cycle."
  ]
},

{
  question: "Where does the citric acid cycle occur in eukaryotic cells?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Cytoplasm",
    "Mitochondrial matrix",
    "Golgi apparatus",
    "Nucleus"
  ],
  correct: 1,
  explanations: [
    "Glycolysis occurs in the cytoplasm.",
    "The citric acid cycle occurs within the mitochondrial matrix.",
    "The Golgi apparatus sorts cellular products.",
    "The nucleus stores genetic information."
  ]
},

{
  question: "Which of the following is produced by the citric acid cycle?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "NADH",
    "Glucose",
    "DNA",
    "Oxygen"
  ],
  correct: 0,
  explanations: [
    "The citric acid cycle produces NADH that carries electrons to the ETC.",
    "Glucose is not produced by the cycle.",
    "DNA synthesis is unrelated to the citric acid cycle.",
    "Oxygen is consumed later in respiration rather than produced."
  ]
},

{
  question: "Why is carbon dioxide produced during the citric acid cycle?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Carbon atoms are removed from organic molecules",
    "ATP breaks apart carbon dioxide",
    "Oxygen is transformed into carbon dioxide",
    "Water is converted into carbon dioxide"
  ],
  correct: 0,
  explanations: [
    "Carbon dioxide forms as carbon atoms are removed from acetyl-CoA derivatives.",
    "ATP does not create carbon dioxide.",
    "Oxygen acts as an electron acceptor rather than transforming directly into carbon dioxide.",
    "Water is not the source of the carbon released."
  ]
},

{
  question: "A scientist labels all carbon atoms in a glucose molecule with a radioactive marker. During aerobic respiration, where will many of those labeled carbon atoms eventually be found?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "In oxygen molecules",
    "In ATP phosphate groups",
    "In carbon dioxide released during respiration",
    "In the proton gradient"
  ],
  correct: 2,
  explanations: [
    "Carbon atoms do not become oxygen molecules.",
    "ATP phosphate groups originate from phosphate, not glucose carbon.",
    "Carbon from glucose is ultimately released as carbon dioxide during pyruvate oxidation and the citric acid cycle.",
    "The proton gradient involves hydrogen ions, not carbon atoms."
  ]
},
{
  question: "Which stage of cellular respiration produces the greatest amount of ATP?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Glycolysis",
    "Fermentation",
    "Citric acid cycle",
    "Electron transport chain"
  ],
  correct: 3,
  explanations: [
    "Glycolysis produces only a small amount of ATP.",
    "Fermentation does not generate significant additional ATP.",
    "The citric acid cycle produces relatively little ATP directly.",
    "Most ATP is generated during oxidative phosphorylation involving the electron transport chain."
  ]
},

{
  question: "Where is the electron transport chain located in eukaryotic cells?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Cytoplasm",
    "Outer mitochondrial membrane",
    "Inner mitochondrial membrane",
    "Nucleus"
  ],
  correct: 2,
  explanations: [
    "The cytoplasm is the site of glycolysis.",
    "The ETC is not embedded in the outer membrane.",
    "The electron transport chain is located in the inner mitochondrial membrane.",
    "The nucleus is not involved in cellular respiration."
  ]
},

{
  question: "What is the primary role of NADH in cellular respiration?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Carry electrons to the electron transport chain",
    "Transport oxygen through the bloodstream",
    "Directly produce glucose",
    "Act as ATP synthase"
  ],
  correct: 0,
  explanations: [
    "NADH delivers high-energy electrons to the electron transport chain.",
    "Hemoglobin transports oxygen, not NADH.",
    "NADH does not synthesize glucose.",
    "ATP synthase is a membrane protein, not an electron carrier."
  ]
},

{
  question: "What is the primary role of FADH₂ during cellular respiration?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Transport carbon dioxide",
    "Donate electrons to the electron transport chain",
    "Convert glucose to pyruvate",
    "Generate oxygen"
  ],
  correct: 1,
  explanations: [
    "FADH₂ does not transport carbon dioxide.",
    "FADH₂ carries electrons to the electron transport chain.",
    "Glycolysis converts glucose to pyruvate.",
    "Cellular respiration consumes oxygen rather than producing it."
  ]
},

{
  question: "What is the final electron acceptor in aerobic cellular respiration?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "ATP",
    "NADH",
    "Carbon dioxide",
    "Oxygen"
  ],
  correct: 3,
  explanations: [
    "ATP stores energy but does not accept electrons at the end of the ETC.",
    "NADH donates electrons rather than accepting them.",
    "Carbon dioxide is a waste product.",
    "Oxygen accepts electrons at the end of the electron transport chain."
  ]
},

{
  question: "What is produced when oxygen accepts electrons and hydrogen ions at the end of the electron transport chain?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Carbon dioxide",
    "Water",
    "Glucose",
    "Pyruvate"
  ],
  correct: 1,
  explanations: [
    "Carbon dioxide is produced earlier in respiration.",
    "Oxygen combines with electrons and hydrogen ions to form water.",
    "Glucose is not produced during respiration.",
    "Pyruvate is generated during glycolysis."
  ]
},

{
  question: "What is the immediate result of electron movement through the electron transport chain?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Carbon dioxide is pumped across the membrane",
    "Protons are pumped across the inner mitochondrial membrane",
    "Glucose is synthesized",
    "Oxygen is produced"
  ],
  correct: 1,
  explanations: [
    "Carbon dioxide is not pumped across the membrane by the ETC.",
    "Electron transfer provides energy to pump protons across the membrane.",
    "Glucose synthesis is unrelated to the ETC.",
    "Oxygen is consumed rather than produced."
  ]
},

{
  question: "What is chemiosmosis?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "The breakdown of glucose",
    "The movement of protons through ATP synthase",
    "The synthesis of carbon dioxide",
    "The conversion of pyruvate into acetyl-CoA"
  ],
  correct: 1,
  explanations: [
    "Glucose breakdown occurs during glycolysis.",
    "Chemiosmosis involves protons flowing through ATP synthase to generate ATP.",
    "Carbon dioxide production occurs during pyruvate oxidation and the citric acid cycle.",
    "Pyruvate oxidation is a separate process."
  ]
},

{
  question: "What directly powers ATP synthase?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Glucose molecules",
    "Carbon dioxide",
    "A proton gradient",
    "DNA replication"
  ],
  correct: 2,
  explanations: [
    "Glucose provides the original energy source but does not directly power ATP synthase.",
    "Carbon dioxide is a waste product.",
    "ATP synthase is powered by the flow of protons down their electrochemical gradient.",
    "DNA replication is unrelated."
  ]
},

{
  question: "A toxin prevents protons from moving through ATP synthase. Which outcome is most likely?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "ATP production decreases dramatically",
    "Glycolysis stops immediately",
    "Pyruvate production increases indefinitely",
    "Carbon dioxide is no longer produced"
  ],
  correct: 0,
  explanations: [
    "Without proton flow through ATP synthase, most ATP cannot be generated.",
    "Glycolysis can still occur independently.",
    "Pyruvate production is not indefinitely increased by this toxin.",
    "Carbon dioxide can still be produced during earlier stages of respiration."
  ]
},
{
  question: "A toxin prevents oxygen from accepting electrons at the end of the electron transport chain. What will happen first?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "NADH will begin to accumulate",
    "Glucose will be produced",
    "The citric acid cycle will speed up",
    "ATP synthase activity will increase"
  ],
  correct: 0,
  explanations: [
    "Without oxygen accepting electrons, NADH cannot unload its electrons and begins to accumulate.",
    "Glucose is not produced by cellular respiration.",
    "The citric acid cycle will eventually slow because electron carriers cannot be regenerated.",
    "ATP synthase activity decreases rather than increases."
  ]
},

{
  question: "Why is oxygen considered essential for aerobic respiration?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "It directly powers ATP synthase",
    "It serves as the final electron acceptor",
    "It splits glucose molecules",
    "It produces NADH"
  ],
  correct: 1,
  explanations: [
    "ATP synthase is powered by a proton gradient.",
    "Oxygen is required because it accepts electrons at the end of the ETC.",
    "Glycolysis splits glucose.",
    "NADH is produced earlier in respiration."
  ]
},

{
  question: "A cell suddenly runs out of oxygen. Which process stops most directly as a result?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Glycolysis",
    "Electron transport chain",
    "Fermentation",
    "Pyruvate oxidation"
  ],
  correct: 1,
  explanations: [
    "Glycolysis can continue temporarily.",
    "The ETC requires oxygen as the final electron acceptor.",
    "Fermentation often increases when oxygen becomes unavailable.",
    "Pyruvate oxidation is affected indirectly rather than immediately."
  ]
},

{
  question: "What happens to the proton gradient if the electron transport chain stops functioning?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "It becomes steeper",
    "It remains unchanged indefinitely",
    "It gradually dissipates",
    "It converts into ATP directly"
  ],
  correct: 2,
  explanations: [
    "No new protons are being pumped.",
    "The gradient cannot persist indefinitely without maintenance.",
    "Without proton pumping, the gradient gradually disappears.",
    "The gradient itself does not become ATP."
  ]
},

{
  question: "A mutation prevents NADH from delivering electrons to the electron transport chain. Which outcome is most likely?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "ATP production decreases substantially",
    "Glucose production increases",
    "Carbon dioxide production stops immediately",
    "Fermentation becomes impossible"
  ],
  correct: 0,
  explanations: [
    "The ETC relies heavily on electrons supplied by NADH.",
    "Respiration does not promote glucose synthesis.",
    "Carbon dioxide production may continue temporarily in earlier pathways.",
    "Fermentation can still occur."
  ]
},

{
  question: "Which stage of cellular respiration directly creates the proton gradient used by ATP synthase?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Glycolysis",
    "Citric acid cycle",
    "Electron transport chain",
    "Fermentation"
  ],
  correct: 2,
  explanations: [
    "Glycolysis does not pump protons across a membrane.",
    "The citric acid cycle produces electron carriers but not the gradient itself.",
    "The ETC uses electron energy to pump protons across the membrane.",
    "Fermentation does not establish a proton gradient."
  ]
},

{
  question: "Which statement best explains why the electron transport chain produces large amounts of ATP?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "It directly transfers phosphate groups to ATP",
    "It stores glucose inside mitochondria",
    "It generates a proton gradient that powers ATP synthase",
    "It converts ATP into NADH"
  ],
  correct: 2,
  explanations: [
    "Direct substrate-level phosphorylation is not the primary ATP source here.",
    "Glucose storage is unrelated.",
    "The ETC establishes the proton gradient that drives ATP synthase.",
    "ATP is not converted into NADH."
  ]
},

{
  question: "Researchers observe that oxygen consumption continues, but ATP production has nearly stopped. Which structure is most likely defective?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "ATP synthase",
    "Glucose",
    "Pyruvate",
    "The nucleus"
  ],
  correct: 0,
  explanations: [
    "If ATP synthase is nonfunctional, oxygen consumption may continue while ATP production collapses.",
    "Glucose is not a cellular structure.",
    "Pyruvate is a molecule rather than the likely target in this scenario.",
    "The nucleus is not directly responsible for ATP production."
  ]
},

{
  question: "A chemical allows protons to cross the inner mitochondrial membrane without passing through ATP synthase. What would happen?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "ATP production would decrease",
    "ATP production would increase",
    "Glycolysis would immediately stop",
    "Carbon dioxide production would cease"
  ],
  correct: 0,
  explanations: [
    "Bypassing ATP synthase eliminates the mechanism used to harvest energy from the proton gradient.",
    "ATP production would not increase.",
    "Glycolysis can still function.",
    "Carbon dioxide production is not directly affected."
  ]
},

{
  question: "Which event provides the strongest evidence that aerobic respiration has shifted toward fermentation?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "An increase in lactic acid production",
    "An increase in oxygen consumption",
    "An increase in ATP synthase activity",
    "An increase in proton pumping"
  ],
  correct: 0,
  explanations: [
    "Lactic acid accumulation indicates that fermentation is occurring.",
    "Oxygen consumption is characteristic of aerobic respiration.",
    "ATP synthase activity is associated with oxidative phosphorylation.",
    "Proton pumping occurs in the electron transport chain."
  ]
},
{
  question: "A mutation prevents pyruvate from entering the mitochondrion. Which process would continue normally?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Citric acid cycle",
    "Electron transport chain",
    "Glycolysis",
    "Pyruvate oxidation"
  ],
  correct: 2,
  explanations: [
    "The citric acid cycle requires mitochondrial pyruvate processing.",
    "The ETC would eventually be deprived of electron carriers.",
    "Glycolysis occurs in the cytoplasm and can continue independently.",
    "Pyruvate oxidation requires pyruvate to reach the mitochondrion."
  ]
},

{
  question: "A researcher measures a sudden decrease in NAD+ and a simultaneous increase in NADH. Which cellular process would be expected to slow first?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Glycolysis",
    "DNA replication",
    "Protein synthesis",
    "Cell division"
  ],
  correct: 0,
  explanations: [
    "Glycolysis requires NAD+ as an electron acceptor.",
    "DNA replication is not immediately limited by NAD+ availability.",
    "Protein synthesis does not directly depend on NAD+ regeneration.",
    "Cell division would be affected indirectly rather than first."
  ]
},

{
  question: "A cell can perform glycolysis and the citric acid cycle but cannot operate its electron transport chain. Which molecules would most likely accumulate?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "ATP and oxygen",
    "NADH and FADH₂",
    "Carbon dioxide and water",
    "Glucose and oxygen"
  ],
  correct: 1,
  explanations: [
    "ATP production would decrease dramatically.",
    "Electron carriers would accumulate because they cannot unload their electrons into the ETC.",
    "Water production would decrease.",
    "Glucose and oxygen are not expected to accumulate for this reason."
  ]
},

{
  question: "A poison blocks ATP synthase but leaves the electron transport chain functional. Which outcome is most likely?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "ATP production decreases dramatically",
    "Glycolysis immediately stops",
    "Glucose production increases",
    "Carbon dioxide production doubles"
  ],
  correct: 0,
  explanations: [
    "ATP synthase is responsible for producing most ATP during aerobic respiration.",
    "Glycolysis can continue independently.",
    "Cellular respiration does not stimulate glucose production.",
    "Carbon dioxide production would not necessarily double."
  ]
},

{
  question: "A scientist discovers a mutant organism whose mitochondria cannot establish a proton gradient. Which process is most directly affected?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "ATP synthesis by chemiosmosis",
    "DNA replication",
    "Protein synthesis",
    "Glycolysis"
  ],
  correct: 0,
  explanations: [
    "A proton gradient is required to power ATP synthase.",
    "DNA replication does not depend directly on the proton gradient.",
    "Protein synthesis is indirectly affected by ATP shortages.",
    "Glycolysis occurs independently in the cytoplasm."
  ]
},

{
  question: "A student claims that carbon atoms from glucose are converted directly into ATP molecules. Which statement best corrects this misconception?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Most carbon atoms from glucose are released as carbon dioxide",
    "Carbon atoms become oxygen",
    "Carbon atoms become phosphate groups",
    "Carbon atoms become proton gradients"
  ],
  correct: 0,
  explanations: [
    "Carbon from glucose is eventually released as carbon dioxide during respiration.",
    "Carbon atoms do not become oxygen atoms.",
    "Carbon atoms do not become phosphate groups.",
    "Proton gradients involve hydrogen ions, not glucose carbon."
  ]
},

{
  question: "Two populations of cells are supplied equal amounts of glucose. One population has oxygen available, and the other does not. Which population will generally produce more ATP per glucose molecule?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "The population without oxygen",
    "The population with oxygen",
    "Both populations produce the same amount",
    "ATP production cannot be predicted"
  ],
  correct: 1,
  explanations: [
    "Cells lacking oxygen rely heavily on glycolysis and fermentation.",
    "Aerobic respiration generates far more ATP than fermentation alone.",
    "ATP yields differ greatly.",
    "ATP production can be predicted based on oxygen availability."
  ]
},

{
  question: "An experimental drug prevents the conversion of pyruvate into acetyl-CoA. Which stage of cellular respiration is affected most directly?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Citric acid cycle",
    "Glycolysis",
    "Fermentation",
    "DNA replication"
  ],
  correct: 0,
  explanations: [
    "Acetyl-CoA is required for entry into the citric acid cycle.",
    "Glycolysis occurs before pyruvate oxidation.",
    "Fermentation does not require acetyl-CoA.",
    "DNA replication is unrelated."
  ]
},

{
  question: "A researcher traces oxygen atoms entering a cell during aerobic respiration. Where are those oxygen atoms most likely found at the end of the process?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Glucose",
    "Pyruvate",
    "Water",
    "ATP"
  ],
  correct: 2,
  explanations: [
    "Glucose is being broken down rather than synthesized.",
    "Pyruvate is produced much earlier in respiration.",
    "Oxygen serves as the final electron acceptor and contributes to water formation.",
    "ATP does not contain oxygen atoms derived specifically from inhaled oxygen."
  ]
},

{
  question: "A cell produces normal amounts of pyruvate, acetyl-CoA, and NADH, yet ATP production remains extremely low. Which explanation is most consistent with these observations?",
  category: "Cellular Respiration",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "A malfunctioning ATP synthase",
    "A nonfunctional glycolysis pathway",
    "An inability to break down glucose",
    "A defect in pyruvate formation"
  ],
  correct: 0,
  explanations: [
    "Upstream pathways appear functional, suggesting a defect in oxidative phosphorylation.",
    "Glycolysis is clearly functioning because pyruvate is produced.",
    "Glucose is obviously being broken down if pyruvate and NADH are being generated.",
    "Pyruvate formation is occurring normally."
  ]
},
{
  question: "Which characteristic is shared by all fungi?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Photosynthesis",
    "Cell walls composed of chitin",
    "Motility throughout life",
    "Prokaryotic cell structure"
  ],
  correct: 1,
  explanations: [
    "Fungi do not perform photosynthesis.",
    "Chitin is a defining component of fungal cell walls.",
    "Most fungi are not motile.",
    "Fungi are eukaryotes, not prokaryotes."
  ]
},

{
  question: "Fungi are classified as:",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Prokaryotes",
    "Eukaryotes",
    "Archaea",
    "Viruses"
  ],
  correct: 1,
  explanations: [
    "Fungi contain a nucleus and membrane-bound organelles.",
    "Fungi are eukaryotic organisms.",
    "Archaea are prokaryotes.",
    "Viruses are not considered living cells."
  ]
},

{
  question: "How do fungi obtain nutrients?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Photosynthesis",
    "Ingestion of food particles",
    "Absorption following external digestion",
    "Nitrogen fixation"
  ],
  correct: 2,
  explanations: [
    "Fungi do not make their own food through photosynthesis.",
    "Animals primarily ingest food.",
    "Fungi secrete enzymes and absorb the resulting nutrients.",
    "Most fungi do not obtain energy this way."
  ]
},

{
  question: "What is a hypha?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "A fungal spore",
    "A threadlike fungal filament",
    "A photosynthetic cell",
    "A reproductive organ in plants"
  ],
  correct: 1,
  explanations: [
    "Spores are reproductive structures.",
    "Hyphae are long, threadlike structures that make up fungal bodies.",
    "Fungi are not photosynthetic.",
    "Hyphae are not plant structures."
  ]
},

{
  question: "A mass of intertwined hyphae is called:",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Mycelium",
    "Spore",
    "Fruiting body",
    "Lichen"
  ],
  correct: 0,
  explanations: [
    "A mycelium is a network of fungal hyphae.",
    "Spores are reproductive cells.",
    "A fruiting body is a specialized reproductive structure.",
    "A lichen is a symbiotic association."
  ]
},

{
  question: "What is the ecological role of many fungi?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Primary producers",
    "Decomposers",
    "Nitrogen-fixing bacteria",
    "Predators"
  ],
  correct: 1,
  explanations: [
    "Fungi are not primary producers.",
    "Many fungi function as decomposers that recycle nutrients.",
    "Fungi are not bacteria.",
    "Predation is not their primary ecological role."
  ]
},

{
  question: "What substance is a major component of fungal cell walls?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Cellulose",
    "Peptidoglycan",
    "Chitin",
    "Keratin"
  ],
  correct: 2,
  explanations: [
    "Cellulose is a major component of plant cell walls.",
    "Peptidoglycan is found in bacterial cell walls.",
    "Chitin is characteristic of fungal cell walls.",
    "Keratin is found in animal tissues."
  ]
},

{
  question: "Fungi reproduce using structures called:",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Seeds",
    "Spores",
    "Flowers",
    "Cones"
  ],
  correct: 1,
  explanations: [
    "Seeds are produced by many plants.",
    "Fungi commonly reproduce through spores.",
    "Flowers are plant reproductive structures.",
    "Cones are found in gymnosperms."
  ]
},

{
  question: "Which of the following is a fungus?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Mushroom",
    "Fern",
    "Moss",
    "Pine tree"
  ],
  correct: 0,
  explanations: [
    "Mushrooms are reproductive structures of fungi.",
    "Ferns are plants.",
    "Mosses are plants.",
    "Pine trees are plants."
  ]
},

{
  question: "Why are fungi important in ecosystems?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "They produce most atmospheric oxygen",
    "They recycle nutrients through decomposition",
    "They perform cellular respiration for other organisms",
    "They replace bacteria in ecosystems"
  ],
  correct: 1,
  explanations: [
    "Photosynthetic organisms produce most atmospheric oxygen.",
    "Fungi help recycle nutrients by breaking down dead organic matter.",
    "All organisms perform their own cellular respiration.",
    "Fungi do not replace bacteria."
  ]
},
{
  question: "Why are fungal hyphae typically highly branched?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "To increase surface area for nutrient absorption",
    "To perform photosynthesis more efficiently",
    "To produce oxygen",
    "To protect DNA from mutation"
  ],
  correct: 0,
  explanations: [
    "Highly branched hyphae increase surface area, improving nutrient absorption.",
    "Fungi do not perform photosynthesis.",
    "Fungi do not produce oxygen as a major biological function.",
    "Branching does not primarily protect DNA."
  ]
},

{
  question: "A fungus is observed secreting digestive enzymes onto a fallen log and then absorbing the resulting nutrients. This process is best described as:",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Photosynthesis",
    "Extracellular digestion",
    "Cellular respiration",
    "Nitrogen fixation"
  ],
  correct: 1,
  explanations: [
    "Fungi do not obtain nutrients through photosynthesis.",
    "Fungi perform extracellular digestion by breaking down food outside their bodies before absorption.",
    "Cellular respiration releases energy from nutrients but does not describe nutrient acquisition.",
    "Most fungi do not perform nitrogen fixation."
  ]
},

{
  question: "A forest ecosystem loses most of its decomposer fungi. Which outcome is most likely?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Dead organic matter accumulates",
    "Photosynthesis stops",
    "Plants become fungi",
    "Oxygen disappears immediately"
  ],
  correct: 0,
  explanations: [
    "Without fungal decomposers, dead organic material would accumulate and nutrient recycling would slow.",
    "Plants would continue photosynthesis.",
    "Plants do not transform into fungi.",
    "Oxygen would not disappear immediately."
  ]
},

{
  question: "What is the primary advantage of producing spores?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Energy storage",
    "Dispersal and reproduction",
    "Photosynthesis",
    "Nitrogen fixation"
  ],
  correct: 1,
  explanations: [
    "Spores are not primarily used for energy storage.",
    "Spores allow fungi to reproduce and spread to new environments.",
    "Spores do not perform photosynthesis.",
    "Spores are not involved in nitrogen fixation."
  ]
},

{
  question: "A scientist discovers a fungus growing in close association with plant roots. What is the most likely relationship?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Mycorrhiza",
    "Lichen",
    "Predation",
    "Competition"
  ],
  correct: 0,
  explanations: [
    "Mycorrhizae are mutually beneficial associations between fungi and plant roots.",
    "Lichens involve fungi and photosynthetic partners.",
    "This relationship is typically not predatory.",
    "Most root-fungus associations benefit both organisms."
  ]
},

{
  question: "How does a plant commonly benefit from a mycorrhizal association?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Improved water and mineral absorption",
    "Production of oxygen",
    "DNA replication",
    "Increased cell division only"
  ],
  correct: 0,
  explanations: [
    "Fungal hyphae increase the plant's ability to absorb water and nutrients from soil.",
    "Plants already produce oxygen through photosynthesis.",
    "DNA replication is not the primary benefit.",
    "The benefit extends beyond cell division."
  ]
},

{
  question: "In a mycorrhizal relationship, what does the fungus typically receive from the plant?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Sugars produced through photosynthesis",
    "Chitin",
    "Spores",
    "Oxygen as food"
  ],
  correct: 0,
  explanations: [
    "Plants provide carbohydrates produced during photosynthesis.",
    "Plants do not normally provide chitin to fungi.",
    "Spores are reproductive structures.",
    "Oxygen is not used as food."
  ]
},

{
  question: "What best describes a lichen?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "A fungus living with a photosynthetic partner",
    "A fungal spore",
    "A fungal fruiting body",
    "A decomposing log"
  ],
  correct: 0,
  explanations: [
    "Lichens are symbiotic associations between fungi and photosynthetic organisms such as algae or cyanobacteria.",
    "A lichen is much more complex than a single spore.",
    "Lichens are not fruiting bodies.",
    "A decomposing log is merely a substrate."
  ]
},

{
  question: "Which statement best explains why fungi are effective decomposers?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "They secrete enzymes capable of breaking down complex organic materials",
    "They perform photosynthesis",
    "They consume sunlight directly",
    "They lack cell walls"
  ],
  correct: 0,
  explanations: [
    "Fungi release enzymes that digest complex molecules such as cellulose and lignin.",
    "Fungi are not photosynthetic.",
    "Sunlight is not their nutrient source.",
    "Fungi possess cell walls containing chitin."
  ]
},

{
  question: "A biologist discovers an organism with chitin cell walls, absorptive nutrition, and filamentous hyphae. The organism is most likely:",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "A fungus",
    "A plant",
    "An animal",
    "A bacterium"
  ],
  correct: 0,
  explanations: [
    "These characteristics strongly indicate a fungus.",
    "Plants have cellulose cell walls and photosynthesize.",
    "Animals lack cell walls.",
    "Bacteria are prokaryotic and do not have fungal hyphae."
  ]
},
{
  question: "A forest ecosystem experiences a severe decline in fungal decomposers. Which outcome is most likely over time?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Nutrient recycling slows and dead organic matter accumulates",
    "Photosynthesis immediately stops",
    "Plant roots become fungal hyphae",
    "Cellular respiration ceases in all organisms"
  ],
  correct: 0,
  explanations: [
    "Fungal decomposers are critical for returning nutrients to ecosystems and breaking down dead organic matter.",
    "Photosynthesis would continue in plants despite reduced decomposition.",
    "Plant roots do not transform into fungal structures.",
    "Cellular respiration would continue in organisms."
  ]
},

{
  question: "A mutation prevents a fungus from secreting digestive enzymes into its environment. What is the most likely consequence?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "The fungus would have difficulty obtaining nutrients",
    "The fungus would become photosynthetic",
    "The fungus would produce more spores",
    "The fungus would immediately die from lack of oxygen"
  ],
  correct: 0,
  explanations: [
    "Fungi depend on extracellular digestion before nutrient absorption can occur.",
    "A mutation affecting digestion would not make the fungus photosynthetic.",
    "Spore production would not necessarily increase.",
    "Oxygen availability is unrelated to enzyme secretion."
  ]
},

{
  question: "A biologist discovers a symbiotic association in which a fungus receives sugars while the partner organism receives water and minerals. Which relationship is being observed?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Mycorrhiza",
    "Lichen",
    "Parasitism",
    "Predation"
  ],
  correct: 0,
  explanations: [
    "Mycorrhizae are mutualistic relationships between fungi and plant roots that exchange nutrients and carbohydrates.",
    "Lichens involve a fungus and a photosynthetic partner.",
    "Both organisms benefit, so this is not parasitism.",
    "Neither partner is consuming the other."
  ]
},

{
  question: "A researcher compares two fungal species. Species A has a highly branched mycelium, while Species B has very little branching. Which species is likely to absorb nutrients more efficiently?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Species A, because branching increases surface area",
    "Species B, because branching reduces nutrient uptake",
    "Both species absorb nutrients equally",
    "Neither species can absorb nutrients"
  ],
  correct: 0,
  explanations: [
    "A highly branched mycelium increases surface area available for absorption.",
    "Branching generally improves nutrient absorption rather than reducing it.",
    "Differences in surface area would likely affect absorption efficiency.",
    "Fungi obtain nutrients by absorption."
  ]
},

{
  question: "A student claims that fungi are ecologically unimportant because they do not perform photosynthesis. Which response best refutes this claim?",
  category: "Fungi",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Fungi are major decomposers that recycle nutrients within ecosystems",
    "Fungi directly produce oxygen for ecosystems",
    "Fungi replace plants in most food webs",
    "Fungi generate ATP for other organisms"
  ],
  correct: 0,
  explanations: [
    "Fungi play a critical role in decomposition and nutrient cycling, making them ecologically important.",
    "Fungi generally do not produce oxygen.",
    "Fungi do not replace plants as primary producers.",
    "Organisms generate their own ATP through metabolism."
  ]
},
{
  question: "What is the primary purpose of photosynthesis?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "To produce ATP for immediate cellular use",
    "To convert light energy into chemical energy stored in glucose",
    "To release carbon dioxide",
    "To break down glucose"
  ],
  correct: 1,
  explanations: [
    "ATP is produced during photosynthesis, but the overall goal is longer-term energy storage.",
    "Photosynthesis captures light energy and stores it in glucose.",
    "Photosynthesis uses carbon dioxide rather than releasing it.",
    "Breaking down glucose is the role of cellular respiration."
  ]
},
{
  question: "In which organelle does photosynthesis occur?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Mitochondrion",
    "Nucleus",
    "Chloroplast",
    "Golgi apparatus"
  ],
  correct: 2,
  explanations: [
    "Mitochondria perform most cellular respiration.",
    "The nucleus stores genetic information.",
    "Photosynthesis occurs in chloroplasts.",
    "The Golgi apparatus modifies and packages cellular products."
  ]
},
{
  question: "Which pigment is primarily responsible for capturing light energy during photosynthesis?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Hemoglobin",
    "Chlorophyll",
    "Keratin",
    "Melanin"
  ],
  correct: 1,
  explanations: [
    "Hemoglobin transports oxygen in many animals.",
    "Chlorophyll absorbs light energy used in photosynthesis.",
    "Keratin is a structural protein.",
    "Melanin is not involved in photosynthesis."
  ]
},
{
  question: "Which of the following is an input of photosynthesis?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Oxygen",
    "ATP",
    "Carbon dioxide",
    "Pyruvate"
  ],
  correct: 2,
  explanations: [
    "Oxygen is typically a product of photosynthesis.",
    "ATP is generated during photosynthesis.",
    "Carbon dioxide is a major reactant in photosynthesis.",
    "Pyruvate is associated with cellular respiration."
  ]
},
{
  question: "Which of the following is a product of photosynthesis?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Carbon dioxide",
    "Glucose",
    "NADH",
    "Acetyl-CoA"
  ],
  correct: 1,
  explanations: [
    "Carbon dioxide is consumed during photosynthesis.",
    "Glucose is one of the main products of photosynthesis.",
    "NADH is primarily associated with cellular respiration.",
    "Acetyl-CoA is involved in cellular respiration."
  ]
},
{
  question: "Where are chloroplasts commonly found?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Only in animals",
    "Only in fungi",
    "In many photosynthetic organisms",
    "Only in bacteria"
  ],
  correct: 2,
  explanations: [
    "Animals generally lack chloroplasts.",
    "Fungi are not photosynthetic and lack chloroplasts.",
    "Many plants and algae contain chloroplasts.",
    "Most bacteria do not contain chloroplasts."
  ]
},

{
  question: "What gas is released during photosynthesis?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Nitrogen",
    "Carbon dioxide",
    "Oxygen",
    "Methane"
  ],
  correct: 2,
  explanations: [
    "Nitrogen is not produced during photosynthesis.",
    "Carbon dioxide is consumed during photosynthesis.",
    "Oxygen is released as a byproduct of photosynthesis.",
    "Methane is not produced during photosynthesis."
  ]
},
{
  question: "Which molecule provides the electrons that replace those lost by chlorophyll during the light reactions?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Carbon dioxide",
    "Glucose",
    "Water",
    "ATP"
  ],
  correct: 2,
  explanations: [
    "Carbon dioxide is used during carbon fixation.",
    "Glucose is produced during photosynthesis.",
    "Water is split during the light reactions, providing electrons to replace those lost by chlorophyll.",
    "ATP serves as an energy carrier."
  ]
},

{
  question: "What happens to water during the light reactions of photosynthesis?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "It is converted into glucose",
    "It is split, releasing electrons and oxygen",
    "It becomes carbon dioxide",
    "It is transported to the nucleus"
  ],
  correct: 1,
  explanations: [
    "Water is not directly converted into glucose.",
    "Water is split during the light reactions, generating electrons, hydrogen ions, and oxygen.",
    "Water does not become carbon dioxide.",
    "Water is not transported to the nucleus as part of photosynthesis."
  ]
},

{
  question: "During photosynthesis, oxygen is produced from:",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Carbon dioxide",
    "Glucose",
    "Water",
    "ATP"
  ],
  correct: 2,
  explanations: [
    "Although carbon dioxide contributes carbon to glucose, it is not the source of the released oxygen.",
    "Glucose is a product, not the source of oxygen gas.",
    "The oxygen released during photosynthesis comes from the splitting of water molecules.",
    "ATP is an energy carrier and does not generate oxygen."
  ]
},

{
  question: "What is the function of chlorophyll in photosynthesis?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Store genetic information",
    "Absorb light energy",
    "Synthesize proteins",
    "Break down glucose"
  ],
  correct: 1,
  explanations: [
    "DNA stores genetic information.",
    "Chlorophyll absorbs light energy that powers photosynthesis.",
    "Protein synthesis occurs at ribosomes.",
    "Breaking down glucose is part of cellular respiration."
  ]
},

{
  question: "Which statement correctly compares photosynthesis and cellular respiration?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Easy",
  options: [
    "Photosynthesis stores energy in glucose, while cellular respiration releases energy from glucose",
    "Both processes produce glucose",
    "Both processes require chloroplasts",
    "Photosynthesis breaks down glucose, while respiration produces it"
  ],
  correct: 0,
  explanations: [
    "Photosynthesis captures and stores energy in glucose, whereas cellular respiration extracts energy from glucose.",
    "Cellular respiration does not produce glucose.",
    "Cellular respiration primarily occurs in mitochondria, not chloroplasts.",
    "This statement reverses the actual roles of the two processes."
  ]
},
{
  question: "What is the primary purpose of the light-dependent reactions?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "To produce ATP and NADPH",
    "To synthesize glucose directly",
    "To release carbon dioxide",
    "To fix carbon dioxide"
  ],
  correct: 0,
  explanations: [
    "The light reactions capture light energy and convert it into ATP and NADPH.",
    "Glucose is produced later through the Calvin cycle.",
    "Carbon dioxide is consumed rather than released.",
    "Carbon fixation occurs in the Calvin cycle."
  ]
},

{
  question: "Where do the light-dependent reactions occur?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Chloroplast stroma",
    "Thylakoid membranes",
    "Nucleus",
    "Mitochondrial matrix"
  ],
  correct: 1,
  explanations: [
    "The stroma is the site of the Calvin cycle.",
    "Light-dependent reactions occur in the thylakoid membranes.",
    "The nucleus stores DNA.",
    "The mitochondrial matrix is associated with cellular respiration."
  ]
},

{
  question: "What is the primary role of ATP produced during the light reactions?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Provide energy for the Calvin cycle",
    "Store carbon atoms",
    "Release oxygen",
    "Split water molecules"
  ],
  correct: 0,
  explanations: [
    "ATP generated in the light reactions supplies energy for the Calvin cycle.",
    "ATP is not used to store carbon.",
    "ATP does not directly release oxygen.",
    "Water splitting occurs before ATP is produced."
  ]
},

{
  question: "What is the primary role of NADPH in photosynthesis?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Donate high-energy electrons to the Calvin cycle",
    "Carry oxygen",
    "Build cell walls",
    "Split carbon dioxide"
  ],
  correct: 0,
  explanations: [
    "NADPH supplies high-energy electrons during sugar production.",
    "NADPH does not transport oxygen.",
    "Cell wall synthesis is not its primary role.",
    "NADPH does not split carbon dioxide."
  ]
},

{
  question: "What process directly produces oxygen during photosynthesis?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Carbon fixation",
    "Water splitting",
    "Glucose synthesis",
    "ATP hydrolysis"
  ],
  correct: 1,
  explanations: [
    "Carbon fixation incorporates carbon dioxide into organic molecules.",
    "Splitting water molecules releases oxygen gas.",
    "Glucose synthesis does not directly generate oxygen.",
    "ATP hydrolysis releases energy but not oxygen."
  ]
},

{
  question: "Which stage of photosynthesis uses carbon dioxide as a reactant?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Light-dependent reactions",
    "Calvin cycle",
    "Water splitting",
    "Photolysis only"
  ],
  correct: 1,
  explanations: [
    "Carbon dioxide is not directly used during the light reactions.",
    "The Calvin cycle incorporates carbon dioxide into sugars.",
    "Water splitting involves water rather than carbon dioxide.",
    "Photolysis refers to water splitting."
  ]
},

{
  question: "Where does the Calvin cycle occur?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Thylakoid membranes",
    "Mitochondrial matrix",
    "Stroma of the chloroplast",
    "Cell membrane"
  ],
  correct: 2,
  explanations: [
    "The thylakoids contain the light reactions.",
    "The mitochondrial matrix is involved in respiration.",
    "The Calvin cycle occurs in the chloroplast stroma.",
    "The cell membrane is not the primary site."
  ]
},

{
  question: "What is carbon fixation?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Release of carbon dioxide",
    "Incorporation of carbon dioxide into organic molecules",
    "Breakdown of glucose",
    "Production of ATP"
  ],
  correct: 1,
  explanations: [
    "Photosynthesis generally uses rather than releases carbon dioxide.",
    "Carbon fixation incorporates inorganic carbon into organic compounds.",
    "Glucose breakdown occurs during respiration.",
    "ATP production occurs primarily during the light reactions."
  ]
},

{
  question: "Which enzyme plays a major role in carbon fixation?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "DNA polymerase",
    "ATP synthase",
    "Rubisco",
    "Ligase"
  ],
  correct: 2,
  explanations: [
    "DNA polymerase functions in DNA replication.",
    "ATP synthase generates ATP.",
    "Rubisco catalyzes carbon fixation in the Calvin cycle.",
    "Ligase joins DNA fragments."
  ]
},

{
  question: "A researcher blocks ATP production during the light reactions. Which process will be affected most directly?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Carbon fixation in the Calvin cycle",
    "DNA replication",
    "Cell division",
    "Water uptake"
  ],
  correct: 0,
  explanations: [
    "The Calvin cycle requires ATP generated during the light reactions.",
    "DNA replication is not directly dependent on photosynthetic ATP production.",
    "Cell division is affected indirectly rather than immediately.",
    "Water uptake is not directly controlled by ATP from photosynthesis."
  ]
},
{
  question: "What is the primary purpose of the Calvin cycle?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Capture light energy",
    "Fix carbon dioxide into organic molecules",
    "Split water molecules",
    "Produce oxygen"
  ],
  correct: 1,
  explanations: [
    "Light energy is captured during the light-dependent reactions.",
    "The Calvin cycle incorporates carbon dioxide into organic molecules.",
    "Water splitting occurs in the light reactions.",
    "Oxygen production occurs during the light reactions."
  ]
},

{
  question: "Which molecules produced during the light reactions are used directly by the Calvin cycle?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "ATP and NADPH",
    "Glucose and oxygen",
    "Carbon dioxide and water",
    "Pyruvate and acetyl-CoA"
  ],
  correct: 0,
  explanations: [
    "ATP provides energy and NADPH provides high-energy electrons for the Calvin cycle.",
    "Glucose is a product and oxygen is released as a byproduct.",
    "Carbon dioxide is used by the Calvin cycle, but water is primarily involved in the light reactions.",
    "These molecules are associated with cellular respiration."
  ]
},

{
  question: "Why is ATP required during the Calvin cycle?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "To provide energy for carbon fixation and sugar production",
    "To absorb sunlight",
    "To split water molecules",
    "To transport oxygen"
  ],
  correct: 0,
  explanations: [
    "ATP supplies the energy needed for Calvin cycle reactions.",
    "Chlorophyll absorbs sunlight.",
    "Water splitting occurs in the light reactions.",
    "ATP is not used to transport oxygen."
  ]
},

{
  question: "What would happen most directly if chlorophyll could no longer absorb light?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "ATP and NADPH production would decrease",
    "The Calvin cycle would speed up",
    "Carbon dioxide would increase inside glucose",
    "Cellular respiration would stop immediately"
  ],
  correct: 0,
  explanations: [
    "Without light absorption, the light-dependent reactions cannot efficiently generate ATP and NADPH.",
    "The Calvin cycle depends on ATP and NADPH and would eventually slow.",
    "This statement is biologically meaningless.",
    "Cellular respiration can still occur."
  ]
},

{
  question: "A scientist blocks carbon dioxide from entering a leaf. Which process would be most directly affected?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Calvin cycle",
    "Water splitting",
    "Electron transport in thylakoids",
    "ATP synthesis during the light reactions"
  ],
  correct: 0,
  explanations: [
    "Carbon dioxide is a reactant used in the Calvin cycle.",
    "Water splitting uses water rather than carbon dioxide.",
    "Electron transport can continue temporarily.",
    "ATP production is part of the light reactions."
  ]
},

{
  question: "Which statement best explains the relationship between the light reactions and the Calvin cycle?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "The light reactions supply ATP and NADPH used by the Calvin cycle",
    "The Calvin cycle supplies sunlight to the light reactions",
    "The two pathways occur in different organisms",
    "The Calvin cycle produces oxygen for the light reactions"
  ],
  correct: 0,
  explanations: [
    "ATP and NADPH generated during the light reactions power the Calvin cycle.",
    "Sunlight comes from the environment.",
    "Both occur in photosynthetic organisms.",
    "Oxygen is produced during the light reactions."
  ]
},

{
  question: "A researcher traces carbon atoms from atmospheric carbon dioxide. Where are those atoms most likely found after photosynthesis?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "Glucose",
    "Oxygen gas",
    "ATP phosphate groups",
    "Chlorophyll"
  ],
  correct: 0,
  explanations: [
    "Carbon dioxide provides the carbon atoms used to build glucose.",
    "The oxygen released during photosynthesis comes primarily from water.",
    "ATP phosphates do not originate from atmospheric carbon dioxide.",
    "Carbon fixation primarily contributes to sugar production."
  ]
},

{
  question: "Why is Rubisco considered an important enzyme?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "It catalyzes carbon fixation",
    "It produces oxygen",
    "It synthesizes chlorophyll",
    "It splits water"
  ],
  correct: 0,
  explanations: [
    "Rubisco is responsible for incorporating carbon dioxide into organic molecules.",
    "Oxygen production occurs during water splitting.",
    "Rubisco does not create chlorophyll.",
    "Water splitting occurs elsewhere in photosynthesis."
  ]
},

{
  question: "If ATP production in the light reactions stopped completely, what would happen to the Calvin cycle?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "It would slow or stop because it lacks energy",
    "It would accelerate",
    "It would begin producing oxygen",
    "It would become cellular respiration"
  ],
  correct: 0,
  explanations: [
    "ATP is required to drive Calvin cycle reactions.",
    "The cycle depends on ATP and would not accelerate.",
    "Oxygen production occurs during the light reactions.",
    "The Calvin cycle does not transform into respiration."
  ]
},

{
  question: "A chloroplast has fully functioning light reactions but a defective Calvin cycle. Which molecule would still be produced directly?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Medium",
  options: [
    "ATP",
    "Glucose",
    "Starch",
    "Cellulose"
  ],
  correct: 0,
  explanations: [
    "The light-dependent reactions continue to produce ATP.",
    "Glucose production requires a functioning Calvin cycle.",
    "Starch synthesis depends on sugar production.",
    "Cellulose production depends on sugar production."
  ]
},
{
  question: "A scientist labels carbon dioxide molecules with a radioactive marker and allows a plant to photosynthesize. Where will the radioactive carbon most likely be found later?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Glucose",
    "Oxygen gas",
    "Water",
    "ATP phosphate groups"
  ],
  correct: 0,
  explanations: [
    "Carbon dioxide provides the carbon atoms used to build glucose.",
    "The oxygen released during photosynthesis comes primarily from water.",
    "Water is not the primary destination of carbon from carbon dioxide.",
    "ATP phosphate groups are not built from atmospheric carbon."
  ]
},

{
  question: "A mutation prevents water from being split during the light reactions. Which outcome is most likely?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Oxygen production decreases",
    "Carbon fixation increases",
    "Glucose production accelerates",
    "Cellular respiration stops"
  ],
  correct: 0,
  explanations: [
    "Water splitting is the source of oxygen released during photosynthesis.",
    "Carbon fixation depends on products generated by the light reactions.",
    "Glucose production would decrease rather than increase.",
    "Respiration is a separate pathway."
  ]
},

{
  question: "A plant is placed in complete darkness but continues to receive water and carbon dioxide. Which process stops first?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Light-dependent reactions",
    "Cellular respiration",
    "Water uptake",
    "Mineral absorption"
  ],
  correct: 0,
  explanations: [
    "Light-dependent reactions require light energy.",
    "Respiration can continue in darkness.",
    "Plants can still absorb water in darkness.",
    "Mineral uptake can continue without light."
  ]
},

{
  question: "A researcher discovers a mutant plant that cannot produce NADPH. Which process would be affected most directly?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "The Calvin cycle",
    "DNA replication",
    "Water absorption",
    "Cell division only"
  ],
  correct: 0,
  explanations: [
    "The Calvin cycle requires NADPH as a source of high-energy electrons.",
    "DNA replication is not directly dependent on photosynthetic NADPH.",
    "Water absorption is not the primary consequence.",
    "The Calvin cycle is affected first."
  ]
},

{
  question: "A student claims that plants obtain most of their mass from soil minerals. Which statement best corrects this misconception?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Most plant biomass originates from carbon dioxide fixed during photosynthesis",
    "Most plant mass comes from sunlight",
    "Most plant mass originates from oxygen gas",
    "Most plant mass comes directly from ATP"
  ],
  correct: 0,
  explanations: [
    "Carbon dioxide supplies most of the carbon atoms incorporated into plant tissues.",
    "Sunlight provides energy but not matter.",
    "Oxygen is not the primary source of plant biomass.",
    "ATP stores energy but does not provide most plant mass."
  ]
},

{
  question: "A chloroplast can perform the light reactions normally but cannot carry out carbon fixation. Which molecule would still be produced directly?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "ATP",
    "Glucose",
    "Cellulose",
    "Starch"
  ],
  correct: 0,
  explanations: [
    "ATP is produced during the light-dependent reactions.",
    "Glucose production requires carbon fixation.",
    "Cellulose synthesis depends on glucose production.",
    "Starch synthesis depends on sugars produced during photosynthesis."
  ]
},

{
  question: "Which statement best describes the relationship between photosynthesis and cellular respiration?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Products of one process are reactants of the other",
    "They occur in identical organelles",
    "Only plants perform both processes",
    "They produce the same final products"
  ],
  correct: 0,
  explanations: [
    "Photosynthesis and respiration are interdependent in terms of reactants and products.",
    "Chloroplasts and mitochondria are different organelles.",
    "Many organisms other than plants perform respiration.",
    "The two pathways produce different products."
  ]
},

{
  question: "A researcher measures oxygen production in a leaf and finds it has dropped dramatically, while carbon dioxide levels remain unchanged. Which process is most likely impaired?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Water splitting during the light reactions",
    "Glycolysis",
    "Citric acid cycle",
    "Fermentation"
  ],
  correct: 0,
  explanations: [
    "The oxygen released during photosynthesis originates from water splitting.",
    "Glycolysis occurs in cellular respiration.",
    "The citric acid cycle occurs during respiration.",
    "Fermentation is unrelated to oxygen production in photosynthesis."
  ]
},

{
  question: "A plant receives abundant light but no carbon dioxide. Which process can still continue directly?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "Light-dependent reactions",
    "Carbon fixation",
    "Glucose synthesis",
    "Calvin cycle"
  ],
  correct: 0,
  explanations: [
    "The light-dependent reactions can still occur because they rely on light and water.",
    "Carbon fixation requires carbon dioxide.",
    "Glucose production requires carbon fixation.",
    "The Calvin cycle depends on carbon dioxide availability."
  ]
},

{
  question: "A scientist compares two identical plants. One receives sunlight, water, and carbon dioxide. The other receives sunlight and water but no carbon dioxide. Which difference is most likely after several days?",
  category: "Photosynthesis",
  exam: "Exam 4",
  difficulty: "Hard",
  options: [
    "The plant without carbon dioxide produces less glucose",
    "The plant without carbon dioxide produces more oxygen",
    "The plant without carbon dioxide performs more photosynthesis",
    "The plants produce identical amounts of glucose"
  ],
  correct: 0,
  explanations: [
    "Carbon dioxide is required to build glucose during the Calvin cycle.",
    "Oxygen production would not increase under these conditions.",
    "Photosynthesis would be limited without carbon dioxide.",
    "Glucose production would differ significantly."
  ]
},
]

export interface ServicePageContent {
  metaTitle: string;
  metaDescription: string;
  imageVariant: "lawn" | "trees" | "garden" | "hardscape";
  headline: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
    items?: string[];
    image?: string; // key from the optimized image manifest
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICE_CONTENT: Record<string, ServicePageContent> = {
  "lawn-care": {
    metaTitle: "Lawn Care & Maintenance in Peachtree City, GA",
    metaDescription:
      "Professional lawn care and maintenance services in Peachtree City, Fayetteville, Senoia, Newnan, and Tyrone, GA. Mowing, fertilization, weed control, aeration, and more.",
    imageVariant: "lawn",
    headline: "Lawn Care & Maintenance",
    intro:
      "A beautiful lawn is the foundation of any great landscape. At Turf n Trunk, our comprehensive lawn care programs are designed to keep your turf thick, green, and healthy throughout every Georgia season. We tailor our approach to your specific grass type, soil conditions, and budget — whether you need weekly mowing or a full-service maintenance plan.",
    sections: [
      {
        heading: "Mowing & Edging",
        image: "lawn-mowing",
        body: "Consistent mowing at the right height is one of the most important things you can do for your lawn's health. Our crews use professional-grade equipment and follow best practices for your grass type — whether it's Bermuda, Zoysia, or Fescue. Every visit includes mowing, edging along walkways and beds, and blowing clean all hard surfaces.",
        items: [
          "Weekly & bi-weekly mowing schedules",
          "Precision edging along driveways, sidewalks, and beds",
          "String trimming around obstacles and fences",
          "Clipping cleanup and surface blowing",
        ],
      },
      {
        heading: "Fertilization & Weed Control",
        image: "lawn-fertilization",
        body: "Georgia's climate supports aggressive weed growth and demands a tailored fertilization program. We apply the right nutrients at the right time to promote dense, vigorous turf that naturally crowds out weeds. Our programs include pre-emergent and post-emergent treatments to keep your lawn weed-free year-round.",
        items: [
          "Custom fertilization programs for warm and cool-season grasses",
          "Pre-emergent weed prevention in early spring and fall",
          "Post-emergent spot treatments as needed",
          "Soil testing and pH adjustment",
        ],
      },
      {
        heading: "Aeration & Overseeding",
        image: "lawn-aeration",
        body: "Compacted soil prevents water, air, and nutrients from reaching your lawn's roots. Core aeration relieves compaction and creates channels for better root growth. For Fescue lawns, we pair aeration with overseeding in the fall to thicken your turf and fill in thin areas before winter.",
        items: [
          "Core aeration to relieve soil compaction",
          "Fall overseeding for Fescue lawns",
          "Soil amendment recommendations",
          "Post-aeration fertilization",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should my lawn be mowed?",
        answer:
          "During the growing season (April through October in our area), we recommend weekly mowing for most lawns. Bi-weekly service works well during slower growth periods or for lower-maintenance properties.",
      },
      {
        question: "When is the best time to aerate my lawn?",
        answer:
          "For warm-season grasses like Bermuda and Zoysia, late spring to early summer is ideal. For Fescue and other cool-season grasses, early fall is the best time to aerate and overseed.",
      },
      {
        question: "Do you offer one-time services or only ongoing contracts?",
        answer:
          "We offer both. Many customers start with a one-time cleanup or aeration and then move to a regular maintenance plan once they see the results.",
      },
    ],
  },

  "landscape-design": {
    metaTitle: "Landscape Design & Installation in Peachtree City, GA",
    metaDescription:
      "Custom landscape design and installation services in Peachtree City, GA. From foundation plantings to full-yard transformations. Free consultations available.",
    imageVariant: "garden",
    headline: "Landscape Design & Installation",
    intro:
      "Whether you're building a new home, refreshing tired beds, or reimagining your entire yard, Turf n Trunk's design team creates custom landscape plans that enhance your home's curb appeal and fit your lifestyle. We handle every detail from initial concept through final installation — so you can enjoy the transformation without the stress.",
    sections: [
      {
        heading: "Custom Design Process",
        image: "landscape-design",
        body: "Great landscapes start with great planning. We begin with an on-site consultation to understand your goals, assess your property's conditions (sun exposure, soil, drainage, existing features), and discuss your budget. From there, we develop a detailed design that balances aesthetics, function, and long-term maintainability.",
        items: [
          "On-site property assessment and consultation",
          "Custom design plans with plant selections",
          "Phased implementation options to fit your budget",
        ],
      },
      {
        heading: "Planting & Installation",
        image: "flower-planting",
        body: "Our installation crews bring your design to life with precision and care. We source high-quality plants, trees, and shrubs from trusted local nurseries and install them with proper technique to ensure strong establishment. Every project includes soil preparation, proper spacing, mulching, and initial watering setup.",
        items: [
          "Foundation plantings and accent beds",
          "Ornamental trees and flowering shrubs",
          "Perennial and annual color installations",
          "Garden bed creation and edging",
        ],
      },
      {
        heading: "Renovation & Refresh",
        image: "tree-bed-flowers",
        body: "Not every landscape needs a complete overhaul. Sometimes a strategic renovation — removing overgrown plants, adding fresh color, or reconfiguring a bed layout — is all it takes to dramatically improve your property's appearance. We specialize in working with what you have and making smart upgrades that deliver maximum impact.",
        items: [
          "Overgrown landscape renovation",
          "Seasonal color rotations",
          "Bed expansion and redesign",
          "Drainage correction and grading",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a landscape design cost?",
        answer:
          "Design costs vary based on property size and project scope. We offer free initial consultations, and design fees are often credited toward the installation cost for projects we complete.",
      },
      {
        question: "What's the best time of year to plant in Georgia?",
        answer:
          "Fall (October–November) is the ideal planting season in our area. Cooler temperatures and fall rains help plants establish strong root systems before summer heat. Spring is also a good option for most plants.",
      },
      {
        question: "Can you work with an existing landscape?",
        answer:
          "Absolutely. Many of our projects involve refreshing or renovating existing landscapes rather than starting from scratch. We'll assess what's working and recommend targeted improvements.",
      },
    ],
  },

  "tree-shrub-care": {
    metaTitle: "Tree & Shrub Care in Peachtree City, GA",
    metaDescription:
      "Expert tree and shrub care services in Peachtree City, GA. Pruning, trimming, disease treatment, and planting for healthy, beautiful trees and shrubs.",
    imageVariant: "trees",
    headline: "Tree & Shrub Care",
    intro:
      "Trees and shrubs are long-term investments in your property's beauty, shade, and value. Turf n Trunk provides expert care to keep your woody plants healthy, structurally sound, and looking their best through every season. From routine pruning to disease diagnosis, we have the knowledge and equipment to handle it all.",
    sections: [
      {
        heading: "Pruning & Shaping",
        image: "hedge trimming",
        body: "Proper pruning promotes healthy growth, improves air circulation, and maintains the natural shape of your trees and shrubs. Our team follows industry best practices — we never top trees or use harmful techniques. We prune for structure, safety, and aesthetics, whether it's a formal hedge or a mature oak.",
        items: [
          "Crown cleaning and thinning",
          "Structural pruning for young trees",
          "Ornamental and hedge shaping",
          "Deadwood and hazard limb removal",
        ],
      },
      {
        heading: "Disease & Pest Management",
        image: "pest-spray",
        body: "Georgia's warm, humid climate creates ideal conditions for tree diseases and insect infestations. We identify problems early and apply targeted treatments to protect your plants. Common issues we treat include fungal infections, scale insects, borers, and nutrient deficiencies.",
        items: [
          "Disease diagnosis and treatment plans",
          "Insect and pest control applications",
          "Deep root fertilization for stressed trees",
          "Preventive care programs",
        ],
      },
      {
        heading: "Tree & Shrub Planting",
        image: "tree-planting",
        body: "Adding new trees and shrubs is one of the best investments you can make in your property. We help you select the right species for your site conditions, plant them correctly, and set up a care plan to ensure strong establishment. We source from quality local nurseries and stand behind our installations.",
        items: [
          "Species selection guidance for your site",
          "Proper planting with soil amendments",
          "Staking and initial care setup",
          "Storm damage cleanup and replacement",
        ],
      },
    ],
    faqs: [
      {
        question: "When should trees be pruned?",
        answer:
          "Most trees are best pruned during dormancy (late fall to early spring). However, deadwood and hazard limbs can and should be removed any time of year. Flowering trees have specific timing depending on whether they bloom on old or new wood.",
      },
      {
        question: "How can I tell if my tree is diseased?",
        answer:
          "Common signs include discolored or dropping leaves outside of normal fall color, cankers or oozing on the bark, unusual growths, and premature leaf drop. If something looks off, it's best to have us take a look before the problem spreads.",
      },
      {
        question: "Do you remove large trees?",
        answer:
          "We focus on tree care and maintenance rather than full tree removal. For large removals, we can recommend trusted local arborists we work with and handle the stump area cleanup and replanting afterward.",
      },
    ],
  },

  mulching: {
    metaTitle: "Mulching Services in Peachtree City, GA",
    metaDescription:
      "Professional mulching services in Peachtree City, GA. Hardwood mulch, pine straw, decorative stone, and bed preparation for a beautiful, low-maintenance landscape.",
    imageVariant: "garden",
    headline: "Mulching",
    intro:
      "Fresh mulch is one of the simplest and most cost-effective ways to dramatically improve your landscape's appearance while protecting your plants. Turf n Trunk offers a full range of mulching services — from bed preparation and old mulch removal to installation of premium hardwood mulch, pine straw, and decorative stone.",
    sections: [
      {
        heading: "Mulch Types & Options",
        image: "mulch-varieties",
        body: "We offer a variety of mulch materials to suit your aesthetic preferences and functional needs. Whether you prefer the classic look of double-shredded hardwood, the natural feel of pine straw, or the durability of decorative stone, we'll help you choose the right option for each area of your landscape.",
        items: [
          "Double-shredded hardwood mulch (natural and dyed)",
          "Pine straw (long leaf and slash pine)",
          "Decorative stone and river rock",
          "Playground-safe mulch options",
        ],
      },
      {
        heading: "Bed Preparation & Installation",
        image: "mulch-beds",
        body: "Proper bed preparation is key to getting the most out of your mulch investment. We edge beds cleanly, remove weeds and old decomposed mulch when needed, and apply fresh material at the correct depth — typically 2 to 3 inches for organic mulch. We take care to keep mulch pulled back from tree trunks and plant crowns to prevent rot.",
        items: [
          "Clean bed edging and weed removal",
          "Old mulch removal when necessary",
          "Proper depth application (2–3 inches)",
          "Volcano-free installation around trees",
        ],
      },
      {
        heading: "Seasonal Refresh Programs",
        image: "rock-walkway",
        body: "Mulch breaks down over time, and Georgia's sun and rain can fade and thin your coverage faster than you'd expect. Our seasonal refresh programs keep your beds looking sharp year-round with scheduled top-ups in spring and fall — the two times that make the biggest visual impact.",
        items: [
          "Spring refresh for peak curb appeal",
          "Fall top-up before the holiday season",
          "Annual bed maintenance and weed prevention",
          "Volume discounts for larger properties",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should mulch be replaced?",
        answer:
          "Organic mulch (hardwood, pine straw) typically needs refreshing once or twice a year. A spring application is most common, with an optional fall top-up. Stone and gravel mulch lasts much longer but may need occasional replenishing.",
      },
      {
        question: "Is pine straw or hardwood mulch better?",
        answer:
          "Both work well in our area. Hardwood mulch retains moisture better and breaks down to improve soil. Pine straw is lighter, easier to apply on slopes, and provides a natural look. We can help you decide based on your beds and preferences.",
      },
      {
        question: "Can you mulch around trees without damaging them?",
        answer:
          "Absolutely — and it's important to do it right. We always keep mulch several inches away from tree trunks to prevent moisture buildup and rot. No mulch volcanos on our watch.",
      },
    ],
  },

  "seasonal-cleanups": {
    metaTitle: "Seasonal Cleanups in Peachtree City, GA",
    metaDescription:
      "Spring and fall cleanup services in Peachtree City, GA. Leaf removal, bed prep, debris hauling, and seasonal yard maintenance to keep your property looking great.",
    imageVariant: "garden",
    headline: "Seasonal Cleanups",
    intro:
      "Georgia's seasons bring beautiful changes — and a fair amount of yard work. Turf n Trunk's seasonal cleanup services handle the heavy lifting so your landscape starts each season looking its best. From fall leaf removal to spring bed preparation, we take care of the details that make a real difference in your property's appearance.",
    sections: [
      {
        heading: "Spring Cleanup",
        image: "weeding",
        body: "After a long winter, your landscape needs attention to kick off the growing season strong. Our spring cleanup service clears away winter debris, cuts back dormant perennials, edges beds, and prepares your landscape for fresh mulch and new plantings. It's the reset your yard needs to look great all summer.",
        items: [
          "Winter debris and branch removal",
          "Perennial and ornamental grass cut-back",
          "Bed edging and weed removal",
          "Pre-mulch bed preparation",
        ],
      },
      {
        heading: "Fall Cleanup & Leaf Removal",
        image: "leaf-blowing",
        body: "Peachtree City's tree canopy is one of its best features — until fall, when those leaves blanket every surface. Our fall cleanup service removes leaves from your lawn, beds, and gutters to prevent turf damage, mold growth, and drainage problems over winter. We use a combination of blowing, raking, and vacuum collection for thorough results.",
        items: [
          "Full-property leaf removal",
          "Gutter and downspout clearing",
          "Lawn dethatching when needed",
          "Final mowing and bed cleanup",
        ],
      },
      {
        heading: "Debris Hauling & Property Tidying",
        image: "yard-waste-removal",
        body: "Whether it's storm debris, a pile of old landscaping material, or general yard waste that's been accumulating, we haul it away so your property looks clean and well-maintained. This service is available year-round, not just during seasonal cleanups.",
        items: [
          "Storm damage and branch cleanup",
          "Old landscape material removal",
          "Yard waste hauling and disposal",
          "Property-wide tidying and detail work",
        ],
      },
    ],
    faqs: [
      {
        question: "When should I schedule a spring cleanup?",
        answer:
          "Late February to mid-March is ideal in our area. This gives us time to clear winter debris and prep beds before the first round of spring mulching and planting.",
      },
      {
        question: "Do you offer recurring leaf removal in fall?",
        answer:
          "Yes. For heavily wooded properties, we offer weekly or bi-weekly leaf removal visits from October through December, rather than a single cleanup at the end of the season.",
      },
      {
        question: "Can you clean up after a storm?",
        answer:
          "Absolutely. We offer storm damage cleanup on short notice, including branch removal, debris hauling, and landscape repair. Just give us a call and we'll get out to you as quickly as possible.",
      },
    ],
  },

  hardscaping: {
    metaTitle: "Hardscaping Services in Peachtree City, GA",
    metaDescription:
      "Custom hardscaping in Peachtree City, GA. Paver patios, walkways, retaining walls, fire pits, and outdoor living spaces designed and built to last.",
    imageVariant: "hardscape",
    headline: "Hardscaping",
    intro:
      "Hardscaping transforms your yard from ordinary outdoor space into a true extension of your home. Turf n Trunk designs and builds patios, walkways, retaining walls, fire pits, and other hardscape features that combine lasting durability with beautiful aesthetics. Every project is custom-designed for your property and built with quality materials that stand up to Georgia's climate.",
    sections: [
      {
        heading: "Patios & Walkways",
        image: "rock-walkway",
        body: "A well-designed patio creates the perfect space for relaxing, entertaining, and enjoying your yard. We work with a range of materials — natural stone, concrete pavers, brick — to create patios and walkways that complement your home's architecture and fit your lifestyle. Every installation starts with proper excavation, base preparation, and drainage planning for a surface that stays level and beautiful for years.",
        items: [
          "Custom paver patio design and installation",
          "Natural stone and flagstone patios",
          "Walkways and garden paths",
          "Paver driveway extensions and aprons",
        ],
      },
      {
        heading: "Retaining Walls & Structures",
        image: "retaining-wall",
        body: "Retaining walls solve practical problems — erosion, grade changes, unusable slopes — while adding visual structure to your landscape. We build walls using segmental block, natural stone, and timber, and engineer them properly for long-term stability. Whether it's a small garden wall or a multi-tier system, we handle the engineering and construction.",
        items: [
          "Segmental retaining wall systems",
          "Natural stone walls",
          "Raised garden beds and planters",
          "Erosion control and slope stabilization",
        ],
      },
      {
        heading: "Outdoor Living Features",
        image: "patio",
        body: "Fire pits, outdoor kitchens, seating walls, and pergola foundations turn your backyard into a year-round living space. We work with you to design features that match how you actually use your yard and build them with materials that handle Georgia's heat, rain, and occasional freeze cycles.",
        items: [
          "Fire pits and outdoor fireplaces",
          "Built-in seating walls and benches",
          "Outdoor kitchen foundations and counters",
          "Steps, borders, and edging",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a patio installation take?",
        answer:
          "Most residential patio projects take 3 to 7 days depending on size, complexity, and weather. We'll give you a clear timeline during the design phase so you know what to expect.",
      },
      {
        question: "What materials do you recommend for patios?",
        answer:
          "Concrete pavers are the most popular choice in our area — they're durable, come in many styles and colors, and individual pavers can be replaced if damaged. Natural stone offers a premium look. We'll help you weigh the pros, cons, and costs of each option.",
      },
      {
        question: "Do retaining walls need drainage?",
        answer:
          "Yes, proper drainage is critical for any retaining wall. We include drainage gravel, perforated pipe, and filter fabric in every wall installation to prevent water pressure buildup that can cause failure.",
      },
    ],
  },

  irrigation: {
    metaTitle: "Irrigation Systems in Peachtree City, GA",
    metaDescription:
      "Irrigation system design, installation, and maintenance in Peachtree City, GA. Sprinkler systems, drip irrigation, smart controllers, and seasonal maintenance.",
    imageVariant: "lawn",
    headline: "Irrigation Systems",
    intro:
      "A properly designed irrigation system keeps your landscape healthy while conserving water and saving you time. Turf n Trunk designs, installs, and maintains sprinkler and drip irrigation systems tailored to your property's layout and your plants' specific watering needs. Whether you need a new system, repairs, or seasonal maintenance, we've got you covered.",
    sections: [
      {
        heading: "System Design & Installation",
        image: "sprinklers",
        body: "Every property is different, and cookie-cutter irrigation doesn't work. We start with a detailed assessment of your property — lawn zones, planting beds, sun exposure, soil type, and water pressure — to design a system that delivers the right amount of water to every area. Our installations use quality components and follow local codes and backflow prevention requirements.",
        items: [
          "Custom zone design for optimal coverage",
          "Rotor, spray, and drip head selection by zone",
          "Backflow prevention and code compliance",
          "Rain sensor and smart controller integration",
        ],
      },
      {
        heading: "Repair & Maintenance",
        image: "sprinkler-valve",
        body: "Irrigation systems need regular attention to perform efficiently. Broken heads, leaky valves, and misaligned sprinklers waste water and leave dry spots. We diagnose and repair issues quickly, and our seasonal maintenance visits keep your system running at peak efficiency year after year.",
        items: [
          "Sprinkler head repair and replacement",
          "Valve and line leak detection and repair",
          "Coverage audits and head adjustment",
          "Controller programming and troubleshooting",
        ],
      },
      {
        heading: "Seasonal Startup & Winterization",
        image: "irrigation-controller",
        body: "Georgia winters are mild but can still freeze hard enough to damage irrigation lines and valves. Our seasonal services include spring startup with full system checks and fall winterization to protect your investment. We test every zone, adjust run times for the season, and flag any issues before they become expensive problems.",
        items: [
          "Spring activation and full system audit",
          "Seasonal run time adjustments",
          "Fall winterization and blow-out",
          "Smart controller seasonal programming",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a new irrigation system cost?",
        answer:
          "Costs vary based on property size, number of zones, and features like smart controllers. We provide free estimates so you'll know the exact cost before we start. Most residential systems offer significant water savings that offset the investment over time.",
      },
      {
        question: "Can you add drip irrigation to my existing system?",
        answer:
          "Yes. Drip irrigation is a great addition for garden beds, shrub areas, and container plants. We can tie into your existing system and add dedicated drip zones without disrupting your current setup.",
      },
      {
        question: "Do I need to winterize my irrigation system in Georgia?",
        answer:
          "We recommend it. While our winters are mild, we typically get several hard freezes each year that can crack pipes and damage valves. A winterization blow-out is inexpensive insurance against costly repairs in the spring.",
      },
    ],
  },
};

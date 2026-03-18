// add image to each event

const events = [
    {
        event: "The Great Berry Bake-Off",
        locationId: 3,
        date: "June 15, 2026",
        time: "2:00 PM",
        description: "Join us for a delightful afternoon of baking and berry-filled fun!",
        image: "https://depositphotos.com/photo/baking-ingredients-on-a-wooden-board-top-view-65753321.html"
    },
    {
        event: "Berry Bonanza Festival",
        locationId: 3,
        date: "June 20, 2026",
        time: "12:00 PM",
        description: "Celebrate the bounty of berries with live music, delicious treats, and family-friendly activities!",
        image: "https://st2.depositphotos.com/1555841/10206/i/450/depositphotos_102069156-stock-photo-plant-city-fl-march-8th.jpg" 
    },
    {
        event: "Berry Blasting Workshop",
        locationId: 3,
        date: "June 25, 2026",
        time: "10:00 AM",
        description: "Learn the art of berry preservation with our expert workshop!",
        image: "https://foodal.com/wp-content/uploads/2021/07/How-to-Get-the-Most-Out-of-Fresh-Berries.jpg"
    },
    {
        event: "The Mystery Package Mixer",
        locationId: 2,
        date: "April 10, 2026",
        time: "3:00 PM",
        description: "Join us for a fun and interactive event where we mix and match mystery packages to create unique and exciting combinations!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39oMt0Nhx1GjAh6eOQNbN3ajGp3FM_ijOEA&s"
    },
    {
        event: "Citrus Squeeze Contest",
        locationId: 2,
        date: "May 5, 2026",
        time: "1:00 PM",
        description: "Put your citrus squeezing skills to the test in our fun and competitive contest!",
        image: "https://t4.ftcdn.net/jpg/18/44/93/69/360_F_1844936942_8D5y29llAB4WCfeEMw8dveMMXSXzBhB6.jpg"
    },
    {
        event: "The Sparkle & Shine Gala",
        locationId: 4,
        date: "July 10, 2026",
        time: "6:00 PM",
        description: "Join us for an evening of glamour and fun at the Sparkle & Shine Gala, where we celebrate all things shiny and bright!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixxSQWjdve2WsTOWzaouQ2Xa90SoEtHRH2g&s"
    },
    {
        event: "Hair Color Extravaganza",
        locationId: 4,
        date: "July 15, 2026",
        time: "4:00 PM",
        description: "Discover the latest hair color trends and techniques at our Hair Color Extravaganza event!",
        image: "https://media.istockphoto.com/id/1305824214/photo/woman-dyeing-her-hair-at-the-salon.jpg?s=612x612&w=0&k=20&c=Jk2XQqn-5Tf1IeUPhmLYMP1Lq2nSlW_0udRXzc_KAJI="
    },
    {
        event: "Nail Art Workshop",
        locationId: 4,
        date: "July 20, 2026",
        time: "3:00 PM",
        description: "Learn the latest nail art techniques at our Nail Art Workshop!",
        image: "https://media.istockphoto.com/id/1151936497/photo/manicure-beauty-and-relax-young-woman-getting-her-nails-done-in-salon-by-manicure-worker.jpg?s=612x612&w=0&k=20&c=NSDxyleb54GNeUrr9JBGq-qZMylHddZyzWCEx5-PUMo="
    },
    {
        event: "Book Club Meeting: 'Berry Good Reads'",
        locationId: 6,
        date: "May 24, 2026",
        time: "1:00 PM",
        description: "Join us for a discussion of the latest and greatest berry-themed books!",
        image: "https://media.istockphoto.com/id/583816330/photo/diverse-group-of-friends-discussing-a-book-in-library.jpg?s=612x612&w=0&k=20&c=qIzAWrMGWgGvj8FIKNhHtWQFvpeobYjevVHRc9z1m6o="
    },
    {
        event: "Midnight Tale-telling",
        locationId: 6,
        date: "June 30, 2026",
        time: "12:00 AM",
        description: "Experience the magic of storytelling under the stars with our Midnight Tale-telling event!",
        image: "https://media.istockphoto.com/id/2164686565/photo/boy-illuminated-with-lantern-telling-a-terror-story-to-surprised-girl-sitting-in-dark-living.jpg?s=612x612&w=0&k=20&c=7AY1js6Z1yqWaAyc1D9s1GAJ6-YQe9MAFe5Atna5U7E="
    },
    {
        event: "The Berry Ribbon Runway",
        locationId: 5,
        date: "April 18, 2026",
        time: "5:00 PM",
        description: "Join us for a fabulous fashion show featuring the latest berry-inspired designs!",
        image: "https://manhattan.thefashionclass.com/cdn/shop/files/Screen_Shot_2023-03-21_at_4.51.29_PM.png?v=1718470466&width=1445"
    },
    {
        event: "Colorful Couture Workshop",
        locationId: 5,
        date: "May 22, 2026",
        time: "2:00 PM",
        description: "Learn how to create your own colorful couture pieces in our interactive workshop!",
        image: "https://static.vecteezy.com/system/resources/thumbnails/076/902/110/small/female-artisan-working-on-colorful-fabric-with-a-vintage-sewing-machine-photo.jpeg"
    },
    {
        event: "Embroidery Stitching Session",
        locationId: 5,
        date: "June 5, 2026",
        time: "4:00 PM",
        description: "Join us for a relaxing and creative embroidery stitching session, where you can learn new techniques and create your own unique designs!",
        image: "https://media.istockphoto.com/id/1969136355/photo/the-process-of-hand-embroidering-a-napkin-with-colored-threads-on-white-fabric.jpg?s=612x612&w=0&k=20&c=_G0poQBQkWmSQMNlCBhIP4pohDf2iXubMZKcdL5uJTU="
    },
    {
        event: "The Jammin' Jamboree",
        locationId: 1,
        date: "May 14, 2026",
        time: "7:00 PM",
        description: "Join us for a fun and energetic city-wide dance marathon set to Cherry Jam's latest hit song",
        image: "https://img.freepik.com/free-photo/group-friends-dancing-outside-city_23-2149295713.jpg?semt=ais_user_personalization&w=740&q=80"
    },
    {
        event: "DJ Berry Bash",
        locationId: 1,
        date: "June 19, 2026",
        time: "8:00 PM",
        description: "Get ready to dance the night away at our DJ Berry Bash, featuring the hottest beats and a berry-themed dance floor!",
        image: "https://t4.ftcdn.net/jpg/03/06/89/45/360_F_306894593_3g9zD3F4nHD7Ddm9y5r9BMdUrxOuik8b.jpg"
    },
    {
        event: "Dance Fitness Fusion",
        locationId: 1,
        date: "June 26, 2026",
        time: "6:00 PM",
        description: "Join us for a high-energy dance fitness class that combines the latest dance moves with a fun and upbeat workout!",
        image: "https://media.istockphoto.com/id/1343284990/photo/hispanic-group-dance-fitness-class.jpg?s=612x612&w=0&k=20&c=1yzwcwf2XHmzw9ZWsOMgvxQLGgkGwH3TEmSOaUUAUYM="
    },
]

export default events

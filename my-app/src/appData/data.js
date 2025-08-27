
const data = {
    userPersonalData: {
        name: 'Bernard',
        lastName: 'Krehula',
        city: 'Varaždin',
        country: 'Croatia',
        img: '/profilePicture.JPG',
        backgroundImg: '/background-image.jpg'
    },
    friendsList: [
        {                  
            id: crypto.randomUUID(),
            firstName: "Gordana",
            lastName: "Stouns",
            img: "/profile1.jpg",
        },
        {
            id: crypto.randomUUID(),
            firstName: "Hiroshi",
            lastName: "Tanaka",
            img: "/profile2.jpg",
        },
        {
            id: crypto.randomUUID(),
            firstName: "Kilibarda",
            lastName: "Petrovska",
            img: "/profile3.jpg",
        },
        {
            id: crypto.randomUUID(), 
            firstName: "Majda",
            lastName: "Odzaklijevska",
            img: "/profile4.jpg",
        },
        {
            id: crypto.randomUUID(),
            firstName: "Ethan",
            lastName: "Turner",
            img: "/profile5.jpg",
        },
        {
            id: crypto.randomUUID(),
            firstName: "Marc",
            lastName: "Anderson",
            img: "/profile6.jpg",
        }
    ],
    postContentData: [
        {
            id: crypto.randomUUID(),
            writenContent: "If I'm to choose between one evil and another, I'd rather not choose at all.",
            time: "11 months ago",

            postComments: [
                {
                    id: crypto.randomUUID(),
                    content: "Makes me ponder on the importance of staying true to one's moral compass.",
                    userName: 'Majda',
                    userLastName: 'Odzaklijevska',
                    userImg: '/profile4.jpg'
                },
                {
                    id: crypto.randomUUID(),
                    content: "It's a reminder that sometimes the best option is to stay true to your principles, even if the choices seem challenging.",
                    userName: 'Ethan',
                    userLastName: 'Turner',
                    userImg: '/profile5.jpg'
                },
                {
                    id: crypto.randomUUID(),
                    content: "Choosing between evils can be a dilemma, but your stance adds a layer of wisdom to it.",
                    userName: 'Marc',
                    userLastName: 'Anderson',
                    userImg: '/profile6.jpg'
                },
                {
                    id: crypto.randomUUID(),
                    content: "Sometimes the choices we face are so tough, it's almost like navigating through shades of gray.",
                    userName: 'Gordana',
                    userLastName: 'Stouns',
                    userImg: '/profile1.jpg'
                }
            ],
            likes: [
                {
                name: "Kilibarda",
                lastName: "Petrovska",
                },
                {
                    name: "Hiroshi",
                    lastName: "Tanaka",
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            writenContent: "It's not who I am underneath, but what I do that defines me.",
            time: "about 1 year ago",
            postComments: [],
            likes: [
                {
                name: "Kilibarda",
                lastName: "Petrovska",
                },
                {
                    name: "Hiroshi",
                    lastName: "Tanaka",
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            writenContent: "A true hero isn't measured by the size of his strength but by the strength of his heart",
            time: "about 1 year ago",
            postComments: [
                {
                    id: crypto.randomUUID(),
                    content: "Sometimes, it's the small gestures that make someone a hero",
                    userName: 'Hiroshi',
                    userLastName: 'Tanaka',
                    userImg: '/profile4.jpg'
                },
                {
                    id: crypto.randomUUID(),
                    content: "Absolutely love this quote!",
                    userName: 'Marc',
                    userLastName: 'Anderson',
                    userImg: '/profile6.jpg'
                },
                {
                    id: crypto.randomUUID(),
                    content: "Wow, this is so profound and inspiring! Couldn't agree more.",
                    userName: 'Gordana',
                    userLastName: 'Stouns',
                    userImg: '/profile1.jpg'
                }
            ],
            likes: [
                {
                name: "Kilibarda",
                lastName: "Petrovska",
                },
                {
                    name: "Hiroshi",
                    lastName: "Tanaka",
                }
            ]
        }
    ]
}

export default data;

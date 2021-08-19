interface PlaylistInfo {
    playlistId: string;
    imageLink: string;
    description: string;
}

const Math101: PlaylistInfo = {
    playlistId: "6FSmF3lRV3akPCdPOU0g7f",
    imageLink: "/img/playlists/math101.jpeg",
    description: "this picture was taken at dawn while waiting for Chris. for months, he would pick up the study group 7:00A at the latest. he would drop us off 11:00P at the earliest. and we worked. how else were we supposed to learn math? this was the first playlist I made during lunch breaks in exam season and I'm still very fond of it."
};

const seasick: PlaylistInfo = {
    playlistId: "2fzCX7osodgcruBFvbqo91",
    imageLink: "/img/playlists/seasick.jpeg",
    description: "I met Jeremy in Hong Kong where this picture was taken. he was a sweet kid who had night blindness. we always knew when sunset was when we were with him. he put his hands on your shoulders and trusted you when it was dark. I've broken a lot of promises to stay in touch.",
};

const ydkt: PlaylistInfo = {
    playlistId: "1NtNM8fCs7BIzrHDeeFU9z",
    imageLink: "/img/playlists/ydkt.jpeg",
    description: "the towering bearded man in the photo was only eighteen. \"bruh, you remember a time before Shrek? that's wavy,\" he once told me. picture taken from an afternoon walk in Hong Kong (before everything). songs that were on repeat during a time I am very fond of.",
};

const whatIfYouWereAMathTeacher: PlaylistInfo = {
    playlistId: "1oLthjuVkKR0J3BlCGn3GC",
    imageLink: "/img/playlists/whatIfYouWereAMathTeacher.jpeg",
    description: "Steven put me in contact with his friends from his time in Beijing before I got there. they all called him \"Steve.\" I had felt conflicted about Steven, for he has hurt so many people. but not me. \"Steve is a good guy,\" Hao told me. I felt like I was tracing the footsteps of his better life.",
};

const tuningAndApplause: PlaylistInfo = {
    playlistId: "3MfpByhY8inMdfkiA2Jguu",
    imageLink: "/img/playlists/tuningAndApplause.jpeg",
    description: "picture from halfway through a bike ride across Munich with May. who let me live in her already cramped dorm room. whom I somehow befriended despite being an antagonist of her youth. I'm lucky I got her out of her lab, for she is always very busy. some songs I like better together than apart.",
};

const rosalindKrauss: PlaylistInfo = {
    playlistId: "7eMSFSI2AyZryWNIc1rg0n",
    imageLink: "/img/playlists/rosalindKrauss.jpeg",
    description: "some songs I like, inspired by my friend Curtis, whom I love very much. I've always felt that if I was a little less shy, Curtis and I would be as thick as thieves. this photo is from Calgary. I visited my great grandfather there. he is 99(!!) and very tired.",
};

const runecrafting: PlaylistInfo = {
    playlistId: "1aWffDQqY8hv4xlPhGa4dY",
    imageLink: "/img/playlists/runecrafting.jpeg",
    description: "named \"runecrafting\" after my roommate, who is still runecrafting in RuneScape as you read this. songs that describe the mountains. this picture was taken just outside Geneva: a stone's throw into France. where I missed Dov and Evi, who climbed with me the year before.",
};

const callHimBB: PlaylistInfo = {
    playlistId: "6EJRuSsAKQawNnAGPAiNzG",
    imageLink: "/img/playlists/callHimBB.jpeg",
    description: "Perry introduced me to his friend 'bb' in Taiwan where this picture was taken. I've never been sensitive to third wheeling, but when they started speaking Mandarin I felt it. Perry even translated for me. here are some songs I like from coming home from Taiwan.",
};

const butImSoLittle: PlaylistInfo = {
    playlistId: "5nuS0DNECM4EO2Kc2eweTN",
    imageLink: "/img/playlists/butImSoLittle.jpeg",
    description: "a little girls asked me if I had any children. I said no. she asked me if I had any grandchildren. I said no. I asked her if she had any children. \"but I'm so little!\" she exclaimed. songs from a playlist exchange with Sunny. the prompt was \"lonely summer.\"",
};

const thanks: PlaylistInfo = {
    playlistId: "43xCJFpB5vZrgWwM7fYUeR",
    imageLink: "/img/playlists/thanks.jpeg",
    description: "we didn't spend very long in Copenhagen. we spent half the time just trying to find each other without internet. Pamela and Halina gave me beds to sleep on during my months in Europe. I know they did it without expecting anything in return, but I still feel guilty that I haven't shown them comparable generosity. here are a (very) few songs I like, unrelated to Pamela and Halina. ((also thanks Pamela and Halina))",
};

const gujarati: PlaylistInfo = {
    playlistId: "1S7wV494SieVYVUQBsL5gU",
    imageLink: "/img/playlists/gujarati.jpeg",
    description: "Liam took the time to waste time with me in Seoul where this picture was taken. there are a few people that feel like childhood heroes to me; Matt, Kyle, and Liam among them. here are songs that sound like the picture looks. seeing Liam: a rare event. yet after a decade it's still concentrated excitement, teenage trepidation.",
};

const PLAYLISTS: PlaylistInfo[] = [
    Math101,
    seasick,
    ydkt,
    whatIfYouWereAMathTeacher,
    tuningAndApplause,
    rosalindKrauss,
    runecrafting,
    callHimBB,
    butImSoLittle,
    thanks,
    gujarati,
];

export {PLAYLISTS};
export type {PlaylistInfo};

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

const PLAYLISTS: PlaylistInfo[] = [
    Math101,
    seasick,
    Math101,
    seasick,
    Math101,
    seasick,
    Math101,
    seasick,
    Math101,
    seasick,
    Math101,
    seasick,
];

export {PLAYLISTS};
export type {PlaylistInfo};

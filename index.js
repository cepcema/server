const PORT = process.env.PORT || 8000;
const express = require(`express`);
const app = express();

const data = [{
    id: "2489651045",
    type: "CreateEvent",
    actor: {
        id: 665991,
        login: "petroav",
        gravatar_id: "",
        url: "https://api.github.com/users/petroav",
        avatar_url: "https://avatars.githubusercontent.com/u/665991?",
    },
    repo: {
        id: 28688495,
        name: "petroav/6.828",
        url: "https://api.github.com/repos/petroav/6.828",
    },
    payload: {
        ref: "master",
        ref_type: "branch",
        master_branch: "master",
        description: "Solution to homework and assignments from MIT's 6.828 (Operating Systems Engineering). Done in my spare time.",
        pusher_type: "user",
    },
    public: true,
    created_at: "2015-01-01T15:00:00Z",
}, ];

app.get(`/data`, (req, res) => {
    res.json(data);
});

app.listen(process.env.PORT || 8000, (req, res) =>
    console.log(`Runinn on ${PORT}`)
);
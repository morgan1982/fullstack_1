module.exports = app => {


    app.get("/api/posts", (req, res) => {
        const posts = {
            1: { name: "cat", color: "yellow"},
            2: { name: "dog", color: "brown"},
            3: { name: "pig", color: "pink"},
            4: { name: "bird", color: "silver"}
        }

        res.json(posts);
    })
}

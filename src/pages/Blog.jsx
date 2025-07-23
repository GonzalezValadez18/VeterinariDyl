import React, { useEffect, useState } from "react";
import "./Blog.css"; // Importa los estilos CSS

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const bloggerFeed =
            "https://dyl-veterinaria-blog.blogspot.com/feeds/posts/default?alt=rss";
        const proxyUrl =
            "https://api.allorigins.win/raw?url=" +
            encodeURIComponent(bloggerFeed);

        fetch(proxyUrl)
            .then((response) => {
                if (!response.ok)
                    throw new Error(`HTTP error: ${response.status}`);
                return response.text();
            })
            .then((str) =>
                new window.DOMParser().parseFromString(str, "text/xml")
            )
            .then((data) => {
                const items = data.querySelectorAll("item");
                const fetchedPosts = [];

                items.forEach((item) => {
                    const title =
                        item.querySelector("title")?.textContent ||
                        "Sin título";
                    const link = item.querySelector("link")?.textContent || "#";
                    const descriptionHTML =
                        item.querySelector("description")?.textContent || "";
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = descriptionHTML;

                    const imgTag = tempDiv.querySelector("img");
                    const imageUrl = imgTag ? imgTag.src : "";
                    if (imgTag) imgTag.remove();

                    const summaryText = (
                        tempDiv.textContent ||
                        tempDiv.innerText ||
                        ""
                    ).trim();

                    fetchedPosts.push({
                        title,
                        link,
                        imageUrl,
                        summary:
                            summaryText.substring(0, 200) +
                            (summaryText.length > 200 ? "..." : ""),
                    });
                });

                setPosts(fetchedPosts);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al cargar entradas del blog: ;(", err);
                setError("No se pudieron cargar las entradas del blog.");
                setLoading(false);
            });
    }, []);

    const latestPost = posts.length > 0 ? posts[0] : null;
    const olderPosts = posts.length > 1 ? posts.slice(1, 6) : [];

    return (
        <div className="blog-container">
            <h1 className="blog-title">Nuestro Blog</h1>
            <a
                href="https://dyl-veterinaria-blog.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="all-posts-link"
            >
                Ver todas las entradas en Blogspot &rarr;
            </a>

            {loading && (
                <div className="skeleton-container">
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-image"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-text short"></div>
                </div>
            )}

            {error && <p className="status-message">{error}</p>}
            {!loading && !error && posts.length === 0 && (
                <p className="status-message">
                    No se encontraron entradas en el blog.
                </p>
            )}

            {!loading && !error && latestPost && (
                <article className="blog-post-card latest-post-card">
                    {latestPost.imageUrl && (
                        <div className="latest-post-image-container">
                            <img
                                src={latestPost.imageUrl}
                                alt={`Imagen de ${latestPost.title}`}
                                className="blog-post-image"
                            />
                        </div>
                    )}
                    <h2>
                        <a
                            href={latestPost.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {latestPost.title}
                        </a>
                    </h2>
                    <p className="summary">{latestPost.summary}</p>
                </article>
            )}

            {!loading && !error && olderPosts.length > 0 && (
                <div className="older-posts-container">
                    <h3 className="older-posts-title">Entradas Anteriores</h3>
                    {olderPosts.map((post) => (
                        <article
                            key={post.link}
                            className="blog-post-card older-post-card"
                        >
                            {post.imageUrl && (
                                <img
                                    src={post.imageUrl}
                                    alt={`Imagen de ${post.title}`}
                                    className="blog-post-image"
                                />
                            )}
                            <div className="older-post-content">
                                <h2>
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {post.title}
                                    </a>
                                </h2>
                                <p className="summary">{post.summary}</p>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Blog;

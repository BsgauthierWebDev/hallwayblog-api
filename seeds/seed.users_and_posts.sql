TRUNCATE posts, users RESTART IDENTITY CASCADE;

INSERT INTO users (username, email, password, img)
VALUES
    ('Brent Gauthier', 'brent@email.com', 'password1', 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'),
    ('Sylena Clark', 'sylena@email.com', 'password2', 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'),
    ('Peyton Gauthier', 'peyton@email.com', 'password3', 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png');

INSERT INTO posts (title, content, img, userid)
    VALUES  
        ('Title 1', 'This is the content of article 1.', 'https://d3eeke16mv0lt7.cloudfront.net/sites/default/files/styles/article_hero_image/public/field/image/testing-trends-world-quality-report.jpg?itok=vUyONZsj', 1),
        ('Title 2', 'This is the content of article 2.', 'https://d3eeke16mv0lt7.cloudfront.net/sites/default/files/styles/article_hero_image/public/field/image/testing-trends-world-quality-report.jpg?itok=vUyONZsj', 2),
        ('Title 3', 'This is the content of article 3.', 'https://d3eeke16mv0lt7.cloudfront.net/sites/default/files/styles/article_hero_image/public/field/image/testing-trends-world-quality-report.jpg?itok=vUyONZsj', 3),
        ('Title 4', 'This is the content of article 4.', 'https://d3eeke16mv0lt7.cloudfront.net/sites/default/files/styles/article_hero_image/public/field/image/testing-trends-world-quality-report.jpg?itok=vUyONZsj', 1),
        ('Title 5', 'This is the content of article 5.', 'https://d3eeke16mv0lt7.cloudfront.net/sites/default/files/styles/article_hero_image/public/field/image/testing-trends-world-quality-report.jpg?itok=vUyONZsj', 2),
        ('Title 6', 'This is the content of article 6.', 'https://d3eeke16mv0lt7.cloudfront.net/sites/default/files/styles/article_hero_image/public/field/image/testing-trends-world-quality-report.jpg?itok=vUyONZsj', 6);
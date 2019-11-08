This is demo project for appling to Auth0. You're free to use any part of it.

## Reasons to create this app

I carefully read Auth0 requirements for several jobs and many time seen suggestion to give link for personal blog.
I'm not active blogger (may be yet?) so I've decided to share my best posts on StackOverflow. They can be considered as short blog posts.
Also this app is located on glitch.com to showcase my development shills

## How does it works

This application will fetch selected posts from StackOverflow and present them grouped by primary Tag.

- Application (SPA) is based on:
- React
- Typescript
- Redux for storing state (questions and answers)
- Redux-Saga for async actions like fetching posts
- Storybook for developing components in isolation
- Jest for unittesting
- Material UI for building interface

Then app is built and put on https://so-showcase.glitch.me where you can explore it.

Hope you enjoy it!
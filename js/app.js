'use strict';

const posts = [
    {
        id: 3,
        type: 'text',
        content: 'Final Week!',
    },
    {
        id: 2,
        type: 'image',
        content: './img/logo_js.svg',
    },
    {
        id: 3,
        type: 'text',
        content: 'Final Week!',
    },
    {
        id: 2,
        type: 'image',
        content: './img/logo_js.svg',
    },
    {
        id: 3,
        type: 'text',
        content: 'Final Week!',
    },
    {
        id: 2,
        type: 'image',
        content: './img/logo_js.svg',
    },
    {
        id: 1,
        type: 'video',
        content: './video/video.mp4',
    },
];

const rootEl = document.getElementById('root');

function makePostEl(post) {
    const postEl = document.createElement('div');
    postEl.dataset.type = post.type;
    postEl.dataset.id = post.id;
    if (post.type === 'text') {
        const contentEl = document.createElement('div');
        contentEl.textContent = post.content;
        postEl.appendChild(contentEl);
    }
    if (post.type === 'image') {
        const contentEl = document.createElement('img');
        contentEl.src = post.content;
        postEl.appendChild(contentEl);
    }
    if (post.type === 'video') {
        const contentEl = document.createElement('video');
        contentEl.src = post.content;
        postEl.appendChild(contentEl);
    }
    console.log(postEl);
    return postEl;
}

function makeWall(el, items) {
    items.map(makePostEl).forEach((item) => {
        el.appendChild(item);
    });
}

makeWall(rootEl, posts);

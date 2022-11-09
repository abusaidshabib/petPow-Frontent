import React from 'react';

const Blog = () => {
    return (
        <div class="card">
            <div class="card-body py-5">
                <h5 class="card-title display-4 fw-bold">Different between SQL and NoSQL</h5>
                <p class="card-text display-6">SQL and NoSQL differ in whether they are relational or non-relational , whether their schemas are predefined or dynamic, how they scale, the type of data they include and whether they are more fit for multi-row transactions or unstructured data.</p>
            </div>
            <div class="card-body pb-5">
                <h5 class="card-title display-4 fw-bold">What is JWT? How does it works?</h5>
                <p class="card-text display-6">JWT means JSON web token that's an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON oject.</p>
            </div>
            <div class="card-body pb-5">
                <h5 class="card-title display-4 fw-bold">What is difference between javascript and node.js?</h5>
                <p class="card-text display-6">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div class="card-body pb-5">
                <h5 class="card-title display-4 fw-bold">how does node js handle multiple requests at the same time?</h5>
                <p class="card-text display-6">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQue</p>
            </div>
        </div>
    );
};

export default Blog;
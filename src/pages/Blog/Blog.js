import React from 'react';
import { createRef } from 'react';
import Pdf from "react-to-pdf";
import { FcDownload } from 'react-icons/fc';

const ref = createRef();

const Blog = () => {
    return (
        <div className='p-2'>
            <div className='mx-auto w-11/12 m-5 border border-primary p-4 rounded ' ref={ref}>
                <h3 className='text-primary text-extrabold text-4xl p-2 m-2'>What is cors?</h3>
                <h1 className='text-bold text-warning text-3xl'>Cross-Origin Resource Sharing (CORS)</h1>
                <p className="p-4 text-semibold  bg-base-200 my-2 rounded text-xl text-justify">
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                    An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

                    For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers
                </p>
                <Pdf targetRef={ref} filename='cors.pdf'>
                    {({ toPdf }) => <button className='badge badge-outline  btn-outline btn-warning w-40 p-3' onClick={toPdf}><FcDownload></FcDownload>Download Pdf</button>}
                </Pdf>
            </div>
            <div className='mx-auto w-11/12 m-5 border border-primary p-4 rounded ' ref={ref}>
                <h3 className='text-primary text-extrabold text-4xl p-2 m-2'>Why are you using firebase?What other options do you have to implement
                    authentication</h3>
                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify">
                    <li>
                        Real time syncing for JSON data
                        The Firebase Realtime Database is a cloud-hosted NoSQL database that lets you store and sync data between your users in realtime.

                        NEW: Cloud Firestore enables you to store, sync and query app data at global scale.
                    </li>
                    <li>
                        Collaborate across devices with ease
                        Realtime syncing makes it easy for your users to access their data from any device: web or mobile, and it helps your users collaborate with one another.
                    </li>
                    <li>
                        Build serverless apps
                        Realtime Database ships with mobile and web SDKs so you can build apps without the need of servers. You can also execute backend code that responds to events triggered by your database using Cloud Functions for Firebase.
                    </li>
                    <li>
                        Optimized for offline use
                        When your users go offline, the Realtime Database SDKs use local cache on the device to serve and store changes. When the device comes online, the local data is automatically synchronized.
                    </li>
                    <li>
                        Strong user-based security
                        The Realtime Database integrates with Firebase Authentication to provide simple and intuitive authentication for developers. You can use our declarative security model to allow access based on user identity or with pattern matching on your data.
                    </li>
                </p>
                <Pdf targetRef={ref} filename='firebase.pdf'>
                    {({ toPdf }) => <button className='badge badge-outline  btn-outline btn-warning w-40 p-3' onClick={toPdf}><FcDownload></FcDownload>Download Pdf</button>}
                </Pdf>
            </div >
            <div className='mx-auto w-11/12 m-5 border border-primary p-4 rounded ' ref={ref}>
                <h3 className='text-primary text-extrabold text-4xl p-2 m-2'>How does private route work?</h3>
                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify">
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </p>
                <Pdf targetRef={ref} filename='router.pdf'>
                    {({ toPdf }) => <button className='badge badge-outline  btn-outline btn-warning w-40 p-3' onClick={toPdf}><FcDownload></FcDownload>Download Pdf</button>}
                </Pdf>
            </div >
            <div className='mx-auto w-11/12 m-5 border border-primary p-4 rounded ' ref={ref}>
                <h3 className='text-primary text-extrabold text-4xl p-2 m-2'>What is node? How does node work?</h3>
                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify">
                    Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                </p>
                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify">
                    Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>

                <h2 className='text-bold text-warning text-3xl'>Node.js basically works on two concept</h2>
                <li>Non-blocking I /O</li>
                <li>Asynchronus</li>
                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify"> Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.</p>


                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify"> Asynchronous: Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.</p>

                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify"> To implement the concept of the system to handle the request  node.js uses the concept of Libuv.</p>


                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify"> Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.</p>

                <h2 className='text-bold text-warning text-3xl'>Libuv implements two extremely important features of node.js</h2>

                <li>Event loop</li>
                <li> Thread pool</li>
                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify"> Event loop: The event loop contains a single thread and is responsible for handling easy tasks like executing callbacks and network I/O. When the program is to initialize all the top-level code is executed, the code is not in the callback function. All the applications code that is inside callback functions will run in the event loop. EventLoop is the heart of node.js. When we start our node application the event loop starts running right away. Most of the work is done in the event loop.</p>

                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify">Nodejs use event-driven-architecture.</p>


                <li> Events are emitted.</li>
                <li>Event loop picks them up.</li>
                <li> Callbacks are called.</li>
                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify"> Event queue: As soon as the request is sent the thread places the request into a queue. It is known as an event queue. The process like app receiving HTTP request or server or a timer will emit event as soon as they are done with the work and event loop will pick up these events and call the callback functions that are associated with each event and response is sent to the client.</p>

                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify">The event loop is an indefinite loop that continuously receives the request and processes them. It checks the queue and waits for the incoming request indefinitely.</p>

                <p className="p-4 text-semibold   bg-base-200 my-2 rounded text-xl text-justify">Thread pool: Though node.js is single-threaded it internally maintains a thread pool. When non-blocking requests are accepted there are processed in an event loop, but while accepting blocking requests it checks for available threads in a thread pool, assigns a thread to the client’s request which is then processed and send back to the event loop, and response is sent to the respective client.</p>
                <Pdf targetRef={ref} filename='node.pdf'>
                    {({ toPdf }) => <button className='badge badge-outline  btn-outline btn-warning w-40 p-3' onClick={toPdf}><FcDownload></FcDownload>Download Pdf</button>}
                </Pdf>
            </div >
        </div >
    );
};

export default Blog;
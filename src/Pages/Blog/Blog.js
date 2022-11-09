import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {

    useTitle('Blog');

    return (
        <div className='container mt-5'>
            <div className="accordion text-start" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b># Difference between SQL and NoSQL ?  ?</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>The Main Differences: </p>

                            <h6>Type - </h6>   
                            SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. 
                            

                            <h6>Language - </h6>
                            SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. 
                            A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. 

                            

                            <h6>Scalability  -</h6>
                            In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets. 
                            
                            <h6>Structure -</h6>
                            SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. 
                            

                            <h6>Support</h6> 
                            Great support is available for all SQL database from their vendors. Also a lot of independent consultations are there who can help you with SQL database for a very large scale deployments but for some NoSQL database you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments. 
                                                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b># What is JWT, and how does it work?</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        
                        <h6>How it works?</h6>
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.

                        <h6>JWT</h6>

                        User sign-in using username and password or google/facebook.
                        Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                        User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                        Resource server then verifies the authenticity of the token using the secret salt/ public key.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <b># What is the difference between javascript and NodeJS? </b>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><b>Differences Between Node.js and JavaScript?</b></p>
                            <br /> 1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                            As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.

                            <br />2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.

                            <br />3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.

                            <br />4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

                            Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.

                            <br />5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.

                            Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.

                            If you’re interested in becoming a Node.js developer, check out KnowledgeHut’s  best Node.js course today to get started.  
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b># How does NodeJS handle multiple requests at the same time? </b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Node is a runtime, and no it is not single threaded, nor is is multithreaded. Confusing? Yes, but true. JavaScript is single threaded. The Node runtime is not. By default, Node only executes one JavaScript instance unless instructed to use more.

How can this be?

Node’s main JavaScript thread uses an event loop. When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they’re all processed. The loop executes very quickly and you kind of have to go out of your way to create apps that block.

There’s an important caveat to this: user requests (like web requests) are not the same as function requests. Multiple users can submit requests and they’ll be processed within nanoseconds of each other (not noticeable without tooling). This differs from a process calling the same function/memory space at the same time.

Additional Threads

Node introduced worker threads in Node 13. These run on a separate JavaScript thread. In larger scale Node applications, developers tend to create one worker per CPU to maximize parallel processing capacity.

“Pseudo Threads”

Prior to worker threads, Node had clusters (these still exist). Clusters mimic what workers do by taking advantage of multiple CPU cores by running multiple Node processes that share server ports. These were an effective way of scaling and existed before worker threads.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-center text-3xl mb-5 font-medium">
        Some important things need to know
      </h1>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <p>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL. A SQL Database
            follows a table like structure which can have an unlimited number of
            rows and every data present inside the database is properly
            structured with Predefined Schemas, it is basically used to
            manipulate Relational Databases Management Systems. A NoSQL Database
            is a Distributed Database where the data is very unstructured with
            Dynamic Schema. Unlike SQL it cannot have unlimited rows but it
            follows a Standard Schema Definition and can store all sorts of data
            models with large distributed data in the form of key-value pairs,
            graph databases, documents or wide-column stores.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is JWT and how does it work
        </div>
        <div className="collapse-content">
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. JWTs differ from other
            web tokens in that they contain a set of claims. Claims are used to
            transmit information between two parties. What these claims are
            depends on the use case at hand. For example, a claim may assert who
            issued the token, how long it is valid for, or what permissions the
            client has been granted.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Difference between Javascript and NodeJs
        </div>
        <div className="collapse-content">
          <p>
            Javascript is a lightweight, object-oriented scripting language that
            is used to build dynamic HTML pages with interactive effects on a
            webpage. JavaScript is also commonly used in game development and
            mobile app development. It is an interpreted scripting language, and
            the code can only be executed and run in a web browser. We can use
            Node.js to execute and run the code outside of the browser. It's
            also known as a browser's language. On the other hand,Node.js is a
            cross-platform, open-source JavaScript runtime environment that
            enables JavaScript to be run on the server. Node.js enables
            JavaScript code to run outside of the browser. Node.js comes with a
            large number of modules and is mostly used in web creation. It may
            run on various platforms including, Windows, Linux, Mac OS, etc. It
            provides a cross-platform runtime environment with event-driven,
            non-blocking (asynchronous) I/O for creating highly scalable
            server-side JavaScript applications.{" "}
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How NodeJs handle multiple requests at the same time
        </div>
        <div className="collapse-content">
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

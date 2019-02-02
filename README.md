# NodeJS, Redis, Nginx und Docker

A simple Node.js application that increments a counter stored on Redis.
I want to run Redis and the node application independently as I want to have
the ability to scale the node application depending on the load.

Exists 3 instances of the node server running the application and Nginx server
in front of node for load balancing the node instances.


![Scheme](Docker.png)

## Start
```
sudo docker-compose up
```

```
curl localhost // test
{ healthy: true } // response
```

```
curl localhost/clients // test

This page has been viewed 1 times! // response

curl localhost/clients // test

This page has been viewed 2 times! // response
...
```

1. Practice:
   *  Fork this and run the application https://github.com/qubusp/nodejs-nginx-redis-docker-app. 
   X  fix the app. 
   X  find a way to ensure all the application containers are running behind nginx. There is no limit for your imagination.
   X  find a way to test if the numbers thrown out by the application are really consecutive. Still no limit for your imagination. 
   *  If the application is restarted make the healthcheck print how many times it did so. 
   *  Write a separete Docker container which will do all of the above. Bonus points for compose. 
   *  Commit everything and send us the link. 
2. Theory A:
   * Imagine that this is the basic of a waiting order machine in a bank office which offers credits, cash desk, account services and mortgages.  Imagine you are writting an EPIC, what are the subtasks you would prepare? What is missing and what should be added?
   * There is an outsourced provider developing an SDK  which communicates with our API. The end client is abroad. Before we deliver to the client we need to make sure the SDK meets our specs. The SDK shall send JSON events to our collector endpoint. We need to validate that the JSON conatains specific properties with a predefined structure.  Prepare a strategy for the face to face interview.

NB: We do not have a right way of doing things. If you can present us with more than one way of resolving a task or atleast outline it - we would be more than happy. 
